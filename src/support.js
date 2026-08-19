import "./styles.css";

const app = document.querySelector("#support-app");

app.innerHTML = `
  <main class="site-shell privacy-page support-page">
    <header class="topbar privacy-topbar">
      <a class="brand" href="./" aria-label="Core Club">
        <img src="./app-logo.jpeg" alt="" />
        <span>CORE CLUB</span>
      </a>
      <a class="top-cta" href="./">Home</a>
    </header>

    <section class="privacy-hero support-hero">
      <p class="eyebrow"><span></span> Core Club support</p>
      <h1>Core Club Support</h1>
      <p>
        Need help with Core Club? Write to us and we will help with the app, subscription,
        data, workouts, nutrition or the AI Coach.
      </p>
      <span>We usually respond within 24-48 hours</span>
    </section>

    <section class="support-contact" aria-label="Core Club support contact">
      <div>
        <span>Support contact</span>
        <a href="mailto:support@coreclubapp.com">support@coreclubapp.com</a>
      </div>
      <a class="primary-btn" href="mailto:support@coreclubapp.com">Contact support</a>
    </section>

    <section class="privacy-content support-content" aria-label="Core Club help">
      <article>
        <h2>What to include so we can help faster</h2>
        <p>
          Tell us what happened, which screen you were on and what you expected to see.
          If possible, include a screenshot, your device model and your iOS version.
        </p>
      </article>

      <article>
        <h2>What we can help with</h2>
        <ul>
          <li>login, profile, app language and settings;</li>
          <li>nutrition, foods, food photos, barcode and macros;</li>
          <li>workouts, journal, timers and calendar;</li>
          <li>water, weight, body photos, reports and Apple Health;</li>
          <li>Premium subscription and feature access;</li>
          <li>privacy questions and data deletion.</li>
        </ul>
      </article>
    </section>

    <footer class="site-footer">
      <span>CORE CLUB</span>
      <a href="./privacy.html">Privacy Policy</a>
      <a href="./">Home</a>
      <span>© 2026 Core Club. All rights reserved.</span>
    </footer>
  </main>
`;
