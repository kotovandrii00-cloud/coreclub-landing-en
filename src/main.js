import * as THREE from "three";
import "./styles.css";

const screenshots = {
  home: {
    id: "home",
    image: "./screenshots-new/home.png",
    eyebrow: "Home",
    title: "One screen for your whole day",
    text: "Calories, steps, water, weight, macros and instant access to the AI Coach live in one calm dashboard.",
    functions: ["calorie goal", "water and steps", "weight", "AI Coach"],
  },
  addFood: {
    id: "addFood",
    image: "./screenshots-new/add-food.png",
    eyebrow: "Nutrition",
    title: "Log food without extra steps",
    text: "Add meals with a food photo, barcode, product database, grams or manual calories and macros.",
    functions: ["food photo", "barcode", "database", "manual macros"],
  },
  workouts: {
    id: "workouts",
    image: "./screenshots-new/workout-journal.png",
    eyebrow: "Workouts",
    title: "A flexible workout log",
    text: "Write the session as a free note, track rest, use stopwatch or Tabata and save the workout when you are done.",
    functions: ["free note", "sets", "rest timer", "history"],
  },
  workoutJournal: {
    id: "workoutJournal",
    image: "./screenshots-new/workout-journal.png",
    eyebrow: "Timers",
    title: "Rest, stopwatch and Tabata",
    text: "Keep your rest timer, stopwatch and Tabata tools inside the workout flow instead of switching apps.",
    functions: ["rest timer", "stopwatch", "Tabata", "save workout"],
  },
  calendar: {
    id: "calendar",
    image: "./screenshots-new/calendar.png",
    eyebrow: "Calendar",
    title: "Your history in colored dots",
    text: "Each day shows nutrition, workouts, measurements and water. Open a date and see what actually happened.",
    functions: ["nutrition", "workouts", "water", "measurements"],
  },
  dayDetails: {
    id: "dayDetails",
    image: "./screenshots-new/profile.png",
    eyebrow: "Metrics",
    title: "Inputs that recalculate instantly",
    text: "Change your goal, activity, weight, height or profile data and Core Club updates calories, macros, water and steps.",
    functions: ["goal", "activity", "Apple Health", "profile"],
  },
  body: {
    id: "body",
    image: "./screenshots-new/body-lab.png",
    eyebrow: "Body",
    title: "Weight, physique photos and goal",
    text: "Keep body photos, lab results, notes, activity level and goal in the same place as your training and nutrition.",
    functions: ["weight", "goal", "body photos", "lab results"],
  },
  trainer: {
    id: "trainer",
    image: "./screenshots-new/trainer.png",
    eyebrow: "AI Coach",
    title: "A coach that answers clearly",
    text: "Ask about nutrition, workouts, technique, recovery or supplements and use quick prompts when you need a start.",
    functions: ["7-day journal", "30-day journal", "workouts", "food and water"],
  },
  report: {
    id: "report",
    image: "./screenshots-new/report.jpg",
    eyebrow: "Reports",
    title: "Period totals that make sense",
    text: "Average calories, protein, fats, carbs, water, workouts, progress photos and recommendations come together cleanly.",
    functions: ["averages", "water", "weight", "recommendations"],
  },
  infoTraining: {
    id: "infoTraining",
    image: "./screenshots-new/info-training.png",
    eyebrow: "Knowledge",
    title: "Training guidance without noise",
    text: "Short Core Club Base cards explain progressive overload, volume and practical training choices.",
    functions: ["training", "volume", "overload", "clear cards"],
  },
  infoFood: {
    id: "infoFood",
    image: "./screenshots-new/info-food.png",
    eyebrow: "Nutrition",
    title: "Nutrition basics you can use",
    text: "Learn the fundamentals of calories, protein and your personal calorie target without getting lost in random advice.",
    functions: ["calories", "protein", "targets", "fat loss"],
  },
  infoSupplements: {
    id: "infoSupplements",
    image: "./screenshots-new/info-sportpit.png",
    eyebrow: "Supplements",
    title: "Supplements explained simply",
    text: "Protein, creatine and other supplements are organized as clear notes, not a wall of claims.",
    functions: ["protein", "creatine", "sports supplements", "clarity"],
  },
  infoRecovery: {
    id: "infoRecovery",
    image: "./screenshots-new/info-recovery.png",
    eyebrow: "Recovery",
    title: "Recovery stays part of the plan",
    text: "Sleep, muscle soreness and rest are treated as part of training quality, not an afterthought.",
    functions: ["sleep", "soreness", "rest", "readiness"],
  },
};

const heroScreens = [
  screenshots.addFood,
  screenshots.home,
  screenshots.trainer,
  screenshots.calendar,
];

const scrollScreens = [
  screenshots.home,
  screenshots.addFood,
  screenshots.workouts,
  screenshots.calendar,
  screenshots.dayDetails,
  screenshots.body,
  screenshots.trainer,
  screenshots.report,
  screenshots.infoTraining,
  screenshots.infoFood,
  screenshots.infoSupplements,
  screenshots.infoRecovery,
];

const features = [
  ["Goal calculation", "Calories, protein, fats, carbs, water and steps recalculate from your goal and starting data."],
  ["Nutrition", "Log food by photo, barcode, database search, grams or manual calories and macros."],
  ["Workouts", "Plan, journal, notes, weights, sets, reps and workout history live in one place."],
  ["Timers", "Rest timer, stopwatch and Tabata are built into the workout flow."],
  ["Calendar", "Colored dots show what was done each day: nutrition, water, workouts and measurements."],
  ["Body progress", "Weight, body photos, lab results, goal and activity make progress measurable."],
  ["AI Coach", "Fast answers about nutrition, workouts, technique, recovery and supplements."],
  ["Reports", "Period totals collect average calories, protein, water, weight change, workouts and recommendations."],
  ["Apple Health", "Weight and height can sync automatically, with data refreshed from Apple Health."],
  ["Profile", "Premium, avatar, language, gender, age, height, weight and goal stay in settings."],
  ["Core Club Base", "Short cards about training, nutrition, supplements and recovery without filler."],
  ["Daily system", "Every day becomes a clear chain: food, water, training, measurements and goal control."],
];

const reviews = [
  {
    avatar: "avatar-a",
    name: "Daniel",
    tag: "strength and nutrition",
    quote: "I stopped jumping between three apps. Food, workouts and water finally land in the same day.",
  },
  {
    avatar: "avatar-b",
    name: "Emma",
    tag: "fat loss phase",
    quote: "The calendar is brutally useful. I can see where I stayed consistent and where I only hoped I did.",
  },
  {
    avatar: "avatar-c",
    name: "James",
    tag: "building muscle",
    quote: "The free-note workout log is faster than spreadsheets. I write the session down, save it and move on.",
  },
];

const app = document.querySelector("#app");

app.innerHTML = `
  <main class="site-shell">
    <header class="topbar" data-animate>
      <a class="brand" href="#hero" aria-label="Core Club">
        <img src="./app-logo.jpeg" alt="" />
        <span>CORE CLUB</span>
      </a>
      <nav class="nav-links" aria-label="Sections">
        <a href="#features">Features</a>
        <a href="#globe">10 000+</a>
        <a href="#screens">Screens</a>
        <a href="#reviews">Reviews</a>
      </nav>
      <a class="top-cta" href="#download">Download</a>
    </header>

    <section class="hero" id="hero">
      <div class="hero-copy" data-animate>
        <p class="eyebrow"><span></span> fitness operating system</p>
        <h1>CORE CLUB</h1>
        <p class="hero-lead">
          Nutrition, workouts, water, body metrics, calendar, reports and an AI Coach in one dark interface you will actually want to open every day.
        </p>
        <div class="hero-actions">
          <a class="primary-btn" href="#download">Download the app</a>
          <a class="ghost-btn" href="#screens">Explore screens</a>
        </div>
        <div class="hero-metrics" aria-label="Key facts">
          <div><strong>10 000+</strong><span>users</span></div>
          <div><strong>24/7</strong><span>AI Coach</span></div>
          <div><strong>1</strong><span>daily system</span></div>
        </div>
        <p class="motivation-line">Your body does not need a perfect Monday. It needs the next day completed.</p>
      </div>

      <div class="hero-stage" data-animate>
        <div class="phone-deck" aria-label="3D Core Club app screens">
          ${heroScreens.map((screen, index) => phoneMarkup(screen, `hero-phone hero-phone-${index + 1}`, index)).join("")}
        </div>
      </div>
    </section>

    <section class="ticker" aria-label="Motivation ticker">
      <div>
        <span>CORE CLUB</span>
        <span>stay focused</span>
        <span>log with precision</span>
        <span>train smarter</span>
        <span>close the day</span>
        <span>return to the goal</span>
        <span>CORE CLUB</span>
        <span>progress loves systems</span>
      </div>
    </section>

    <section class="benefit-band" aria-label="What users get" data-animate>
      <div>
        <span>01</span>
        <strong>Know your target</strong>
        <p>Calories, macros, water and steps become a concrete daily plan.</p>
      </div>
      <div>
        <span>02</span>
        <strong>Keep the details</strong>
        <p>Workouts, nutrition, measurements and notes are saved in your calendar.</p>
      </div>
      <div>
        <span>03</span>
        <strong>See progress clearly</strong>
        <p>Reports show what moves your physique and what is just noise.</p>
      </div>
    </section>

    <section class="globe-section" id="globe">
      <div class="globe-copy">
        <p class="eyebrow"><span></span> Core Club world</p>
        <h2>More than 10,000 users are building their system together</h2>
        <div class="globe-stats">
          <div><strong>12,480</strong><span>active now</span></div>
          <div><strong>4</strong><span>core actions</span></div>
          <div><strong>daily</strong><span>food, water, gym, progress</span></div>
        </div>
        <p class="globe-note">Every dot is another completed action.</p>
      </div>
      <div class="globe-wrap">
        <canvas id="globeCanvas" aria-label="Slowly rotating 3D Core Club globe with blinking user activity dots"></canvas>
      </div>
    </section>

    <section class="feature-section" id="features">
      <div class="section-heading" data-animate>
        <p class="eyebrow"><span></span> full feature set</p>
        <h2>All the key tools without a bloated interface</h2>
      </div>
      <div class="feature-grid">
        ${features.map((item, index) => `
          <article class="feature-card" data-animate style="--delay: ${index % 4}">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <h3>${item[0]}</h3>
            <p>${item[1]}</p>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="screens-section" id="screens">
      <div class="sticky-device" aria-label="3D phone with screens changing on scroll">
        <div class="device-shadow"></div>
        ${scrollScreens.map((screen, index) => phoneMarkup(screen, `screen-phone ${index === 0 ? "is-active" : ""}`, index)).join("")}
      </div>
      <div class="screen-copy">
        <div class="section-heading">
          <p class="eyebrow"><span></span> interactive walkthrough</p>
          <h2>Scroll down and the phone changes with the task</h2>
        </div>
        ${scrollScreens.map((screen, index) => `
          <article class="screen-step ${index === 0 ? "is-current" : ""}" data-screen-index="${index}">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <p>${screen.eyebrow}</p>
            <h3>${screen.title}</h3>
            <strong>${screen.text}</strong>
            <ul>
              ${screen.functions.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="coach-section" data-animate>
      <div>
        <p class="eyebrow"><span></span> AI Coach</p>
        <h2>When you need an answer, not another tab</h2>
        <p>
          Ask about nutrition, technique, workouts, recovery or supplements. Core Club turns the question into the next practical step.
        </p>
      </div>
      <div class="coach-phone">
        ${phoneMarkup(screenshots.trainer, "coach-device", 0)}
      </div>
    </section>

    <section class="reviews-section" id="reviews">
      <div class="section-heading" data-animate>
        <p class="eyebrow"><span></span> reviews</p>
        <h2>People stay when the app does not get in their way</h2>
      </div>
      <div class="review-grid">
        ${reviews.map((review, index) => `
          <article class="review-card" data-animate style="--delay: ${index}">
            <div class="avatar-sprite ${review.avatar}" aria-hidden="true"></div>
            <p>${review.quote}</p>
            <strong>${review.name}</strong>
            <span>${review.tag}</span>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="download-section" id="download" data-animate>
      <img src="./app-logo.jpeg" alt="Core Club logo" />
      <h2>Download Core Club and turn fitness into one system</h2>
      <p>Open the app, set your goal and start closing the day: nutrition, water, workouts, measurements and progress.</p>
      <a class="primary-btn" href="https://apps.apple.com/" target="_blank" rel="noreferrer">Download on the App Store</a>
    </section>

    <footer class="site-footer">
      <span>CORE CLUB</span>
      <a href="./support.html">Support</a>
      <a href="./privacy.html">Privacy Policy</a>
      <span>© 2026 Core Club. All rights reserved.</span>
    </footer>
  </main>
`;

function phoneMarkup(screen, className, index = 0) {
  return `
    <figure class="phone ${className}" style="--phone-index: ${index}">
      <div class="phone-frame">
        <div class="phone-side left"></div>
        <div class="phone-side right"></div>
        <div class="phone-speaker"></div>
        <img src="${screen.image}" alt="${screen.title}" />
      </div>
    </figure>
  `;
}

const animatedItems = document.querySelectorAll("[data-animate]");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.14 }
);
animatedItems.forEach((item) => revealObserver.observe(item));

const screenPhones = [...document.querySelectorAll(".screen-phone")];
const steps = [...document.querySelectorAll(".screen-step")];
const stepObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const activeIndex = Number(entry.target.dataset.screenIndex);
      screenPhones.forEach((phone, index) => {
        phone.classList.toggle("is-active", index === activeIndex);
        phone.classList.toggle("is-before", index < activeIndex);
        phone.classList.toggle("is-after", index > activeIndex);
      });
      steps.forEach((step, index) => step.classList.toggle("is-current", index === activeIndex));
    });
  },
  { rootMargin: "-38% 0px -38% 0px", threshold: 0.1 }
);
steps.forEach((step) => stepObserver.observe(step));

const deck = document.querySelector(".phone-deck");
if (deck) {
  deck.addEventListener("pointermove", (event) => {
    const rect = deck.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    deck.style.setProperty("--tilt-y", `${x * 10}deg`);
    deck.style.setProperty("--tilt-x", `${y * -8}deg`);
  });
  deck.addEventListener("pointerleave", () => {
    deck.style.setProperty("--tilt-y", "0deg");
    deck.style.setProperty("--tilt-x", "0deg");
  });
}

initGlobe();

function initGlobe() {
  const canvas = document.querySelector("#globeCanvas");
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    preserveDrawingBuffer: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
  camera.position.set(0, 0, 4.75);

  const globe = new THREE.Group();
  globe.rotation.x = -0.1;
  scene.add(globe);

  const texture = new THREE.TextureLoader().load("./earth-texture.jpg");
  texture.colorSpace = THREE.SRGBColorSpace;

  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(1.45, 96, 96),
    new THREE.MeshStandardMaterial({
      map: texture,
      color: 0x6b7890,
      roughness: 0.92,
      metalness: 0.02,
      emissive: 0x01060b,
      emissiveIntensity: 0.12,
    })
  );
  globe.add(sphere);

  const staticPoints = createUserPointCloud();
  globe.add(staticPoints);

  const halo = createHaloTexture();
  const activeSprites = createUserSprites(halo);
  activeSprites.forEach((sprite) => globe.add(sprite));

  const stars = createStars();
  scene.add(stars);

  scene.add(new THREE.AmbientLight(0xffffff, 1.05));

  const key = new THREE.DirectionalLight(0xffffff, 2.05);
  key.position.set(-4.2, 2.6, 5);
  scene.add(key);

  const orange = new THREE.PointLight(0xff6b35, 10, 7);
  orange.position.set(-2.3, -1.4, 2.2);
  scene.add(orange);

  const blue = new THREE.PointLight(0x2a8dff, 12, 7);
  blue.position.set(2.5, 0.8, 2.2);
  scene.add(blue);

  let targetRotationX = -0.1;
  let targetRotationY = 0;
  let isDragging = false;
  let lastX = 0;
  let lastY = 0;

  canvas.addEventListener("pointerdown", (event) => {
    isDragging = true;
    lastX = event.clientX;
    lastY = event.clientY;
    canvas.setPointerCapture(event.pointerId);
  });

  canvas.addEventListener("pointermove", (event) => {
    if (!isDragging) return;
    const dx = event.clientX - lastX;
    const dy = event.clientY - lastY;
    lastX = event.clientX;
    lastY = event.clientY;
    targetRotationY += dx * 0.005;
    targetRotationX = clamp(targetRotationX + dy * 0.003, -0.55, 0.55);
  });

  canvas.addEventListener("pointerup", () => {
    isDragging = false;
  });

  canvas.addEventListener("pointercancel", () => {
    isDragging = false;
  });

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const size = Math.max(300, Math.min(rect.width, rect.height || rect.width));
    renderer.setSize(size, size, false);
    camera.aspect = 1;
    camera.updateProjectionMatrix();
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const clock = new THREE.Clock();

  function animate() {
    const elapsed = clock.getElapsedTime();
    if (!prefersReducedMotion) {
      targetRotationY += isDragging ? 0 : 0.00085;
      stars.rotation.y += 0.0002;
      activeSprites.forEach((sprite) => {
        const pulse = 0.55 + Math.sin(elapsed * sprite.userData.speed + sprite.userData.phase) * 0.35;
        sprite.material.opacity = 0.32 + pulse * 0.58;
        sprite.scale.setScalar(sprite.userData.baseScale * (0.75 + pulse * 0.55));
      });
    }

    globe.rotation.x += (targetRotationX - globe.rotation.x) * 0.07;
    globe.rotation.y += (targetRotationY - globe.rotation.y) * 0.07;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  resize();
  window.addEventListener("resize", resize);
  animate();
}

function createUserPointCloud() {
  const count = 900;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const orange = new THREE.Color(0xff6b35);
  const green = new THREE.Color(0x35f27b);
  const blue = new THREE.Color(0x2a8dff);

  for (let i = 0; i < count; i += 1) {
    const city = cityCoordinates()[i % cityCoordinates().length];
    const point = latLonToVector3(
      city[0] + (Math.random() - 0.5) * 22,
      city[1] + (Math.random() - 0.5) * 34,
      1.49 + Math.random() * 0.018
    );
    positions[i * 3] = point.x;
    positions[i * 3 + 1] = point.y;
    positions[i * 3 + 2] = point.z;

    const color = i % 6 === 0 ? green : i % 8 === 0 ? blue : orange;
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  return new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      size: 0.021,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
  );
}

function createUserSprites(texture) {
  const colors = [0xff6b35, 0x35f27b, 0x2a8dff, 0xffd45a];
  return cityCoordinates().flatMap((city, cityIndex) => {
    const amount = cityIndex % 3 === 0 ? 5 : 3;
    return Array.from({ length: amount }, (_, dotIndex) => {
      const sprite = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: texture,
          color: colors[(cityIndex + dotIndex) % colors.length],
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          opacity: 0.82,
        })
      );
      sprite.position.copy(
        latLonToVector3(
          city[0] + (Math.random() - 0.5) * 14,
          city[1] + (Math.random() - 0.5) * 20,
          1.525
        )
      );
      sprite.userData.phase = cityIndex * 0.7 + dotIndex * 1.9;
      sprite.userData.speed = 1.1 + ((cityIndex + dotIndex) % 5) * 0.22;
      sprite.userData.baseScale = dotIndex === 0 ? 0.09 : 0.055;
      sprite.scale.setScalar(sprite.userData.baseScale);
      return sprite;
    });
  });
}

function createStars() {
  const count = 420;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    const radius = 4.9 + Math.random() * 2.7;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.cos(phi);
    positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  return new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      size: 0.01,
      color: 0xffffff,
      transparent: true,
      opacity: 0.24,
      depthWrite: false,
    })
  );
}

function createHaloTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 96;
  canvas.height = 96;
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createRadialGradient(48, 48, 0, 48, 48, 48);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.2, "rgba(255,255,255,.92)");
  gradient.addColorStop(0.5, "rgba(255,255,255,.25)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 96, 96);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function cityCoordinates() {
  return [
    [40.7, -74.0], [34.0, -118.2], [43.7, -79.4], [19.4, -99.1],
    [-23.5, -46.6], [-34.6, -58.4], [-12.0, -77.0], [4.7, -74.1],
    [51.5, -0.1], [48.9, 2.3], [52.5, 13.4], [40.4, -3.7],
    [41.9, 12.5], [55.8, 37.6], [50.4, 30.5], [41.0, 28.9],
    [30.0, 31.2], [6.5, 3.4], [-1.3, 36.8], [-33.9, 18.4],
    [25.2, 55.3], [28.6, 77.2], [19.1, 72.9], [13.7, 100.5],
    [1.3, 103.8], [-6.2, 106.8], [39.9, 116.4], [31.2, 121.5],
    [35.7, 139.7], [37.6, 127.0], [-33.9, 151.2], [-37.8, 144.9],
    [59.3, 18.1], [45.4, 9.2], [35.7, 51.4], [24.7, 46.7],
    [52.2, 21.0], [59.9, 30.3], [60.1, 24.9], [53.3, -6.2],
    [14.6, 121.0], [22.3, 114.1], [21.0, 105.8], [3.1, 101.7],
    [-26.2, 28.0], [33.6, -7.6], [36.8, 10.2], [32.8, 35.0],
    [56.9, 24.1], [44.8, 20.4], [42.4, 19.3], [39.9, 32.8],
  ];
}

function latLonToVector3(lat, lon, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
