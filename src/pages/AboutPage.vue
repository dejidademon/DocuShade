<template>
  <q-page class="about-bg">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="about-hero-content">
        <h1 class="about-headline">Built to Protect Drivers — Legally.</h1>
        <p class="about-subheadline">
          DocuShade helps you keep your tints dark without risking tickets or shady DMV routes.
        </p>
      </div>
      <div class="about-hero-bg"></div>
    </section>

    <!-- Founder Introduction -->
    <section class="about-founder-section">
      <h2 class="about-section-title">Meet the Founder</h2>
      <div class="about-founder-flex">
        <div class="about-founder-photo">
          <!-- Optional: Replace with actual photo if available -->
          <img src="src/assets/mainPage/founder.webp" alt="Adedeji Oyefeso" />
        </div>
        <div class="about-founder-text">
          <p>
            My name is Adedeji Oyefeso. I started DocuShade after realizing how many people were getting pulled over for dark tints they medically needed. I'm a owner of a tinted vehicle myself, and I know firsthand how hard it is to deal with cops, DMV rules, and fake documents. So I built a platform that connects people directly with licensed providers who understand their symptoms and deliver valid, DMV-accepted exemptions — fast, secure, and legally.
          </p>
        </div>
      </div>
    </section>

    <!-- Our Mission -->
    <section class="about-mission-section">
      <h2 class="about-section-title">Why We Exist</h2>
      <ul class="about-mission-list">
        <li>To help people with real symptoms (migraines, sensitivity, vision issues) keep their tints legally</li>
        <li>To remove the stress and risk of getting pulled over</li>
        <li>To replace illegal shortcuts with a real, fast, and secure process</li>
      </ul>
    </section>

    <!-- How It Works Summary -->
    <section class="about-how-section">
      <h2 class="about-section-title">How It Works</h2>
      <ol class="about-how-list">
        <li>Fill out a quick form</li>
        <li>Speak with a licensed provider</li>
        <li>Receive your DMV-accepted exemption</li>
      </ol>
      <q-btn color="primary" class="about-cta-btn" label="See If You Qualify" to="/exemption" />
    </section>

    <!-- Trust & Privacy -->
    <section class="about-trust-section">
      <h2 class="about-section-title">Secure, Private, and Legitimate</h2>
      <div class="about-trust-content">
        Every consultation is 100% HIPAA-compliant and done by a licensed U.S. doctor. We never share your information, and you’re protected every step of the way.
      </div>
      <div class="about-trust-badges">
        <div class="about-trust-badge">
          <q-icon name="lock" color="primary" size="24px" /> HIPAA-Compliant
        </div>
        <div class="about-trust-badge">
          <q-icon name="verified_user" color="primary" size="24px" /> Verified Providers
        </div>
        <div class="about-trust-badge">
          <q-icon name="check_circle" color="primary" size="24px" /> DMV-Recognized Format
        </div>
      </div>
    </section>

    <!-- Service Area -->
    <section class="about-area-section">
      <h2 class="about-section-title">Where We Operate</h2>
      <div class="about-area-list">
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> New York</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> New Jersey</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> Alaska</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> Arizona</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> California</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> Colorado</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> District of Columbia</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> Delaware</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> Florida</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> Georgia</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> Hawaii</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> Iowa</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> Idaho</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> Kansas</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> Massachusetts</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> Maryland</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> Maine</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> Montana</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> North Dakota</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> Nebraska</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> New Hampshire</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> New Mexico</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> Nevada</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> Oregon</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> Rhode Island</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> South Dakota</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> Utah</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> Virginia</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> Washington</div>
        <div class="about-area-item"><q-icon name="check_circle" color="positive" size="22px" /> Wyoming</div>
        <div class="about-area-item about-area-soon">Expanding to more states soon</div>
      </div>
    </section>

    <!-- Disclaimer -->
    <div class="about-disclaimer">
      DocuShade does not prescribe medication or provide medical treatment. All evaluations are for legal exemption documentation only. For medical advice or treatment, contact your healthcare provider.
    </div>

    <!-- Footer -->
    <footer class="footer-section">
      <div class="footer-links">
        <router-link to="/" class="footer-link">Home</router-link>
        <router-link to="/about" class="footer-link">About</router-link>
        <a href="mailto:docushade@gmail.com" class="footer-link">Contact</a>
        <router-link to="/policies/terms-of-service" class="footer-link">Terms</router-link>
      </div>
      <div class="footer-social">
        <a href="https://www.instagram.com/docushade/" target="_blank" rel="noopener" class="footer-icon-link">
          <q-icon name="instagram" size="22px" class="footer-icon" />
        </a>
        <a href="https://www.tiktok.com/@docushade" target="_blank" rel="noopener" class="footer-icon-link">
          <q-icon name="tiktok" size="22px" class="footer-icon" />
        </a>
        <a href="https://www.tiktok.com/@docushade" target="_blank" rel="noopener" class="footer-icon-link">
          <q-icon name="facebook" size="22px" class="footer-icon" />
        </a>
      </div>
      <div class="footer-contact">
        docushade@gmail.com | (347) 835-4380
      </div>
    </footer>
  </q-page>
</template>

<script setup>
// No script needed
</script>

<style scoped>
.about-bg {
  background: var(--q-dark-page);
  min-height: 100vh;
  width: 100vw;
  font-family: 'Poppins', 'Inter', 'Montserrat', sans-serif;
  color: #fff;
  overflow-x: hidden;
}

/* Hero Section */
.about-hero {
  position: relative;
  padding: 56px 16px 40px 16px;
  text-align: center;
  background: linear-gradient(120deg, #181818 60%, #222 100%);
  border-radius: 0 0 32px 32px;
  overflow: hidden;
}
.about-hero-bg {
  position: absolute;
  inset: 0;
  background: url('src/assets/mainPage/vertStopped.webp') center/cover no-repeat;
  opacity: 0.14;
  z-index: 0;
}
.about-hero-content {
  position: relative;
  z-index: 1;
  max-width: 700px;
  margin: 0 auto;
}
.about-headline {
  color: #fff;
  font-size: 2.3rem;
  font-weight: 700;
  margin-bottom: 12px;
  letter-spacing: 1px;
}
.about-subheadline {
  color: #b3b3b3;
  font-size: 1.15rem;
  margin-bottom: 18px;
}

/* Founder Section */
.about-founder-section {
  margin: 48px auto 0 auto;
  max-width: 900px;
  padding: 0 16px;
}
.about-section-title {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 18px;
  text-align: center;
}
.about-founder-flex {
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.about-founder-photo img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  background: #222;
  box-shadow: 0 2px 8px rgba(128,0,255,0.08);
}
.about-founder-text {
  flex: 1 1 0;
  color: #e0e0e0;
  font-size: 1.08rem;
  line-height: 1.7;
  max-width: 600px;
}

/* Mission Section */
.about-mission-section {
  margin: 48px auto 0 auto;
  max-width: 700px;
  padding: 0 16px;
}
.about-mission-list {
  color: #e0e0e0;
  font-size: 1.08rem;
  line-height: 1.7;
  list-style: disc inside;
  margin: 0;
  padding-left: 1.2em;
}

/* How It Works */
.about-how-section {
  margin: 48px auto 0 auto;
  max-width: 700px;
  padding: 0 16px;
  text-align: center;
}
.about-how-list {
  color: #e0e0e0;
  font-size: 1.08rem;
  line-height: 1.7;
  list-style: decimal inside;
  margin: 0 0 18px 0;
  padding-left: 1.2em;
  text-align: left;
}
.about-cta-btn {
  font-size: 1.1rem;
  border-radius: 24px;
  font-weight: 600;
  padding: 12px 32px;
  margin-top: 12px;
  box-shadow: 0 2px 8px rgba(128,0,255,0.12);
}

/* Trust & Privacy */
.about-trust-section {
  margin: 48px auto 0 auto;
  max-width: 700px;
  padding: 0 16px;
  text-align: center;
}
.about-trust-content {
  color: #e0e0e0;
  font-size: 1.08rem;
  margin-bottom: 18px;
}
.about-trust-badges {
  display: flex;
  gap: 18px;
  justify-content: center;
  flex-wrap: wrap;
}
.about-trust-badge {
  background: #222;
  color: #fff;
  border-radius: 10px;
  padding: 8px 18px;
  font-size: 1.05rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 8px rgba(128,0,255,0.04);
}

/* Service Area */
.about-area-section {
  margin: 48px auto 0 auto;
  max-width: 700px;
  padding: 0 16px;
  text-align: center;
}
.about-area-list {
  display: flex;
  gap: 18px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 8px;
}
.about-area-item {
  background: #222;
  color: #fff;
  border-radius: 10px;
  padding: 8px 18px;
  font-size: 1.05rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 8px rgba(128,0,255,0.04);
}
.about-area-soon {
  color: #ffc107;
  background: transparent;
  box-shadow: none;
}

/* Disclaimer */
.about-disclaimer {
  color: #b3b3b3;
  font-size: 0.98rem;
  margin: 40px auto 0 auto;
  max-width: 700px;
  text-align: center;
  font-style: italic;
  padding: 0 16px;
}

/* Footer */
.footer-section {
  background: #181818;
  color: #fff;
  border-radius: 24px;;
  margin: 48px auto 0 auto;
  padding: 24px 16px 12px 16px;
  max-width: 900px;
  box-shadow: 0 -2px 16px rgba(128,0,255,0.08);
  text-align: center;
  position: relative;
  z-index: 1;
  margin-top: 40px;
  margin-bottom: 40px;
}

.footer-links {
  display: flex;
  gap: 18px;
  justify-content: center;
  margin-bottom: 10px;
}
.footer-link {
  color: #fff;
  font-size: 1.05rem;
  text-decoration: none;
  font-weight: 500;
  border-radius: 8px;
  padding: 4px 10px;
  transition: background 0.2s;
}
.footer-link:hover {
  background: #222;
}
.footer-social {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 10px;
}
.footer-icon {
  color: #fff;
  transition: color 0.2s;
}
.footer-icon:hover {
  color: #1976d2;
}
.footer-contact {
  color: #b3b3b3;
  font-size: 0.98rem;
  margin-bottom: 2px;
}

/* Responsive */
@media (max-width: 900px) {
  .about-hero { padding: 32px 4px 24px 4px; }
  .about-headline { font-size: 1.5rem; }
  .about-subheadline { font-size: 1rem; }
  .about-section-title { font-size: 1.2rem; }
  .about-founder-flex { flex-direction: column; gap: 18px; }
  .about-founder-photo img { width: 100px; height: 100px; }
  .about-mission-section, .about-how-section, .about-trust-section, .about-area-section { padding: 0 4px; }
  .footer-section { padding: 18px 4px 10px 4px; }
}
</style>
