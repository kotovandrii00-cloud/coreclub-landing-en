import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const outDir = path.resolve("qa");
fs.mkdirSync(outDir, { recursive: true });
const qaUrl = process.env.QA_URL || "http://127.0.0.1:5175/";

async function inspectViewport(label, viewport) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport,
    deviceScaleFactor: label === "mobile" ? 2 : 1,
  });

  const consoleMessages = [];
  page.on("console", (msg) => {
    if (msg.type() === "error" || msg.type() === "warning") {
      consoleMessages.push(`${msg.type()}: ${msg.text()}`);
    }
  });
  page.on("pageerror", (error) => {
    consoleMessages.push(`pageerror: ${error.message}`);
  });

  await page.goto(qaUrl, {
    waitUntil: "networkidle",
    timeout: 30000,
  });
  await page.waitForSelector("#globeCanvas", { timeout: 10000 });
  await page.waitForTimeout(1900);

  const canvasStats = await page.evaluate(() => {
    const canvas = document.querySelector("#globeCanvas");
    const rect = canvas.getBoundingClientRect();
    const probe = document.createElement("canvas");
    probe.width = Math.max(1, Math.floor(rect.width));
    probe.height = Math.max(1, Math.floor(rect.height));
    const ctx = probe.getContext("2d", { willReadFrequently: true });

    ctx.drawImage(canvas, 0, 0, probe.width, probe.height);
    const data = ctx.getImageData(0, 0, probe.width, probe.height).data;
    let nonTransparent = 0;
    let bright = 0;
    let colored = 0;

    for (let i = 0; i < data.length; i += 16) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];
      if (a > 10 && r + g + b > 12) nonTransparent += 1;
      if (a > 10 && r + g + b > 260) bright += 1;
      if (a > 10 && Math.max(r, g, b) - Math.min(r, g, b) > 24) colored += 1;
    }

    const samples = Math.floor(data.length / 16);
    return {
      width: Math.round(rect.width),
      height: Math.round(rect.height),
      samples,
      nonTransparent,
      bright,
      colored,
      nonTransparentRatio: Number((nonTransparent / samples).toFixed(4)),
      coloredRatio: Number((colored / samples).toFixed(4)),
    };
  });

  const textChecks = await page.evaluate(() => ({
    headline: document.querySelector("h1")?.textContent?.trim(),
    userCopy: document.body.innerText.includes("10 000+") && document.body.innerText.includes("users"),
    hasCyrillic: /[А-Яа-яЁё]/.test(document.body.innerText),
    appScreens: [...document.querySelectorAll(".phone img")].length,
    visibleHeroPhoneWidth: Math.round(
      document.querySelector(".phone img")?.getBoundingClientRect().width || 0
    ),
    navHiddenOnMobile:
      window.innerWidth < 760
        ? getComputedStyle(document.querySelector(".nav-links")).display === "none"
        : false,
  }));

  const screenshotPath = path.join(outDir, `${label}.png`);
  await page.screenshot({ path: screenshotPath, fullPage: false });
  await browser.close();

  return { label, viewport, canvasStats, textChecks, consoleMessages, screenshotPath };
}

async function inspectPage(pagePath, expectedTitle, viewport) {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport });

  await page.goto(new URL(pagePath, qaUrl).toString(), {
    waitUntil: "networkidle",
    timeout: 30000,
  });

  const checks = await page.evaluate((title) => {
    const maxRight = Math.max(
      ...[...document.body.querySelectorAll("*")].map((el) => Math.ceil(el.getBoundingClientRect().right)),
      document.documentElement.clientWidth
    );

    return {
      title: document.title,
      titleOk: document.title === title,
      hasCyrillic: /[А-Яа-яЁё]/.test(document.body.innerText),
      overflow: Math.max(0, maxRight - document.documentElement.clientWidth),
    };
  }, expectedTitle);

  await browser.close();

  return { pagePath, viewport, checks };
}

const results = [
  await inspectViewport("desktop", { width: 1440, height: 1000 }),
  await inspectViewport("mobile", { width: 390, height: 844 }),
];

const pageResults = [
  await inspectPage("/support.html", "Core Club Support", { width: 1440, height: 1000 }),
  await inspectPage("/privacy.html", "Core Club Privacy Policy", { width: 1440, height: 1000 }),
  await inspectPage("/support.html", "Core Club Support", { width: 390, height: 844 }),
  await inspectPage("/privacy.html", "Core Club Privacy Policy", { width: 390, height: 844 }),
];

const failed = results.filter((result) => {
  const { canvasStats, textChecks } = result;
  return (
    canvasStats.nonTransparentRatio < 0.02 ||
    canvasStats.coloredRatio < 0.005 ||
    textChecks.headline !== "CORE CLUB" ||
    !textChecks.userCopy ||
    textChecks.hasCyrillic ||
    textChecks.appScreens < 8 ||
    textChecks.visibleHeroPhoneWidth < 120 ||
    result.consoleMessages.some((message) => message.startsWith("pageerror"))
  );
});

const failedPages = pageResults.filter(({ checks }) => !checks.titleOk || checks.hasCyrillic || checks.overflow > 1);

console.log(JSON.stringify({ home: results, pages: pageResults }, null, 2));

if (failed.length > 0 || failedPages.length > 0) {
  process.exitCode = 1;
}
