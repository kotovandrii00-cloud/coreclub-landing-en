import "./styles.css";

const app = document.querySelector("#privacy-app");

app.innerHTML = `
  <main class="site-shell privacy-page">
    <header class="topbar privacy-topbar">
      <a class="brand" href="./" aria-label="Core Club">
        <img src="./app-logo.jpeg" alt="" />
        <span>CORE CLUB</span>
      </a>
      <a class="top-cta" href="./">Home</a>
    </header>

    <section class="privacy-hero">
      <p class="eyebrow"><span></span> Core Club privacy</p>
      <h1>Privacy Policy</h1>
      <p>
        This page explains what data may be used in Core Club and why it is needed for the app:
        nutrition, workouts, water, weight, measurements, calendar, reports and the AI Coach.
      </p>
      <span>Last updated: August 19, 2026</span>
    </section>

    <section class="privacy-content" aria-label="Core Club Privacy Policy">
      <article>
        <h2>1. Data We Use</h2>
        <p>
          Core Club may store profile data such as name, avatar, gender, age, height, weight, goal, activity level,
          app language and subscription status. This data helps the app calculate targets correctly and show a
          personalized interface.
        </p>
        <p>
          The app may also save nutrition entries, foods, grams, calories and macros, water, steps, workouts,
          notes, sets, weights, reps, body photos, lab results, calendar markers and period reports.
        </p>
      </article>

      <article>
        <h2>2. Why We Use Data</h2>
        <p>
          Data is used to calculate daily targets, keep your journal, display progress, build the calendar,
          prepare reports and power the AI Coach. Core Club does not use this data to sell it to third parties.
        </p>
      </article>

      <article>
        <h2>3. Apple Health and Integrations</h2>
        <p>
          If you connect Apple Health, the app may access data you explicitly allow, such as weight or height.
          Access is granted only after your permission and can be disabled in your device settings.
        </p>
      </article>

      <article>
        <h2>4. Photos, Barcodes and Manual Input</h2>
        <p>
          Food photos, barcodes, body photos and manual entries are used for the features you choose:
          logging nutrition, tracking progress and saving your personal history. You decide what data to add.
        </p>
      </article>

      <article>
        <h2>5. AI Coach</h2>
        <p>
          The AI Coach may use the context of your questions and the data you provide through the app to give
          more useful answers about nutrition, workouts, technique, recovery and supplements.
        </p>
      </article>

      <article>
        <h2>6. Managing Your Data</h2>
        <p>
          You can edit profile data, nutrition records, workouts, water, weight and notes inside the app.
          For deletion, privacy or support questions, contact us at support@coreclubapp.com.
        </p>
      </article>

      <article>
        <h2>7. Security</h2>
        <p>
          Core Club aims to handle data carefully and use it only for app functionality. If features or
          integrations change, this policy may be updated and the current version will remain available on this page.
        </p>
      </article>
    </section>

    <footer class="site-footer">
      <span>CORE CLUB</span>
      <a href="./support.html">Support</a>
      <a href="./">Home</a>
      <span>© 2026 Core Club. All rights reserved.</span>
    </footer>
  </main>
`;
