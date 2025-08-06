<template>
  <q-page class="docushade-bg">
    <!-- Custom Load-in Animation -->
    <transition name="fade-logo" @after-leave="showContent = true">
      <div v-if="showLogo" class="logo-overlay">
        <img
          src="~assets/logos/DocushadeLogo.png"
          alt="Docushade Logo"
          class="logo-full"
        />
      </div>
    </transition>
    <div v-if="showContent">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-flex">
          <div class="hero-content">
            <h1 class="hero-headline">Keep Your Tints. Legally.</h1>
            <p class="hero-subheadline">
              DMV-approved tint exemptions through licensed doctors — fast, simple, and secure.
            </p>
            <div class="hero-cta">
              <q-btn color="primary" to="/exemption" unelevated class="cta-btn" label="Book a Consultation" />
            </div>
          </div>
          <div class="hero-visual">
            <img src="~assets/mainPage/blackTicket.webp" alt="Dark-tinted car" class="hero-img" />
            <!-- <video src="src/assets/mainPage/doctor-patient.mp4" autoplay loop muted class="hero-video"></video> -->
          </div>
        </div>
      </section>

      <!-- How It Works Section -->
      <section class="how-section">
        <h2 class="section-title">How It Works</h2>
        <div class="how-steps">
          <div class="how-step">
            <q-icon name="check_circle" color="primary" size="40px" />
            <div>
              <div class="how-step-title">Answer a few questions</div>
              <div class="how-step-desc">Light sensitivity? Migraines? Let us know.</div>
            </div>
          </div>
          <div class="how-step">
            <q-icon name="videocam" color="primary" size="40px" />
            <div>
              <div class="how-step-title">Meet with a licensed doctor</div>
              <div class="how-step-desc">Video call or phone consult.</div>
            </div>
          </div>
          <div class="how-step">
            <q-icon name="mail" color="primary" size="40px" />
            <div>
              <div class="how-step-title">Receive DMV-compliant exemption</div>
              <div class="how-step-desc">Fast turnaround. Mail or email delivery.</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Trust Section -->
      <section class="trust-section">
        <h2 class="section-title">Why People Trust DocuShade</h2>
        <div class="trust-badges">
          <div class="trust-badge">
            <q-icon name="verified" color="secondary" size="32px" />
            Licensed U.S. Doctors
          </div>
          <div class="trust-badge">
            <q-icon name="lock" color="secondary" size="32px" />
            HIPAA-Compliant & Confidential
          </div>
          <div class="trust-badge">
            <q-icon name="check" color="secondary" size="32px" />
            DMV-Approved Exemptions
          </div>
          <div class="trust-badge">
            <q-icon name="star" color="amber" size="32px" />
            Hundreds of Happy Clients <span class="stars">⭐⭐⭐⭐⭐</span>
          </div>
        </div>
        <div class="trust-testimonial">
          <q-avatar size="156px" class="testmonial-avatar">
            <img src="~assets/reviewPage/asainMaleSmile.webp" alt="Jordan M." />
          </q-avatar>
          <div>
            <div class="testimonial-text">
              “I got pulled over 3 times for my tints. DocuShade helped me get legally exempt in 24 hours — I haven’t had a problem since.”
            </div>
            <div class="testimonial-meta">— Jordan M., Queens NY</div>
          </div>
        </div>
      </section>

      <!-- FAQs Section -->
      <section class="faq-section">
        <h2 class="section-title">FAQs</h2>
        <q-list bordered class="faq-list">
          <q-expansion-item label="How do I know if I qualify?">
            <div>Take our quick survey or book a consultation to find out if you qualify for a tint exemption.</div>
          </q-expansion-item>
          <q-expansion-item label="Is this legal in my state?">
            <div>We only provide DMV-compliant exemptions for states where it is legal. Contact us for details.</div>
          </q-expansion-item>
          <q-expansion-item label="What if the DMV denies it?">
            <div>If denied, we’ll help you understand why and what steps you can take next.</div>
          </q-expansion-item>
          <q-expansion-item label="Do you prescribe medication?">
            <div>No, we only provide diagnosis and documentation for tint exemptions.</div>
          </q-expansion-item>
        </q-list>
      </section>

      <!-- Footer Section -->
      <footer class="footer-section">
        <div class="footer-links">
          <router-link to="/" class="footer-link">Home</router-link>
          <router-link to="/about" class="footer-link">About</router-link>
          <a href="mailto:docushade@gmail.com" class="footer-link">Contact</a>
          <router-link to="/policies/terms-of-service" class="footer-link">Terms</router-link>
        </div>
        <div class="footer-social">
          <a href="https://www.instagram.com/docushade/" target="_blank" rel="noopener" class="footer-icon-link">
            <q-icon name="instagram" size="28px" class="footer-icon" />
          </a>
          <a href="https://www.tiktok.com/@docushade" target="_blank" rel="noopener" class="footer-icon-link">
            <q-icon name="tiktok" size="28px" class="footer-icon" />
          </a>
          <a href="https://www.tiktok.com/@docushade" target="_blank" rel="noopener" class="footer-icon-link">
            <q-icon name="facebook" size="28px" class="footer-icon" />
          </a>
        </div>
        <div class="footer-contact">
          <div>docushade@gmail.com | (347) 835-4380</div>
        </div>
      </footer>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      showLogo: true,
      showContent: false,
    }
  },
  mounted() {
    setTimeout(() => {
      this.showLogo = false
    }, 1800) // Animation duration in ms
  }
}
</script>

<style scoped>
.docushade-bg {
  background: var(--q-dark-page);
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  font-family: 'Poppins', 'Inter', 'Montserrat', sans-serif;
}

/* Hero Section */
.hero-section {
  padding: 48px 16px 24px 16px;
  text-align: center;
}
.hero-flex {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 48px;
  max-width: 1200px;
  margin: 0 auto;
}
.hero-content {
  flex: 1 1 0;
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
}
.hero-headline {
  color: #fff;
  font-size: 2.3rem;
  font-weight: 700;
  margin-bottom: 16px;
  letter-spacing: 1px;
  font-family: 'Poppins', 'Inter', 'Montserrat', sans-serif;
}
.hero-subheadline {
  color: #b3b3b3;
  font-size: 1.15rem;
  margin-bottom: 32px;
  font-family: 'Poppins', 'Inter', 'Montserrat', sans-serif;
}
.hero-cta {
  display: flex;
  gap: 16px;
  justify-content: flex-start;
  margin-bottom: 32px;
}
.cta-btn {
  font-size: 1.1rem;
  border-radius: 24px;
  box-shadow: 0 2px 8px rgba(128,0,255,0.12);
  font-weight: 600;
  padding: 12px 32px;
  font-family: 'Poppins', 'Inter', 'Montserrat', sans-serif;
}
.hero-visual {
  flex: 1 1 0;
  margin-top: 0;
  display: flex;
  justify-content: center;
}
.hero-img {
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.4);
}

/* How It Works */
.how-section {
  background: #181818;
  border-radius: 24px;
  margin: 32px auto;
  padding: 32px 16px;
  max-width: 900px;
  box-shadow: 0 2px 16px rgba(128,0,255,0.08);
}
.section-title {
  color: #fff;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;
  font-family: 'Poppins', 'Inter', 'Montserrat', sans-serif;
}
.how-steps {
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: center;
}
.how-step {
  display: flex;
  align-items: center;
  gap: 18px;
  background: #222;
  border-radius: 16px;
  padding: 18px 24px;
  box-shadow: 0 2px 8px rgba(128,0,255,0.06);
  min-width: 220px;
  flex: 1 1 0;
}
.how-step-title {
  color: #fff;
  font-size: 1.15rem;
  font-weight: 500;
  font-family: 'Poppins', 'Inter', 'Montserrat', sans-serif;
}
.how-step-desc {
  color: #b3b3b3;
  font-size: 1rem;
  font-family: 'Poppins', 'Inter', 'Montserrat', sans-serif;
}

/* Trust Section */
.trust-section {
  background: #181818;
  border-radius: 24px;
  margin: 32px auto;
  padding: 32px 16px;
  max-width: 900px;
  box-shadow: 0 2px 16px rgba(128,0,255,0.08);
  text-align: center;
}
.trust-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: center;
  margin-bottom: 24px;
}
.trust-badge {
  background: #222;
  color: #fff;
  border-radius: 12px;
  padding: 12px 24px;
  font-size: 1.08rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 2px 8px rgba(128,0,255,0.06);
  font-family: 'Poppins', 'Inter', 'Montserrat', sans-serif;
}
.stars {
  color: #ffc107;
  margin-left: 6px;
}
.trust-testimonial {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  background: #222;
  border-radius: 16px;
  padding: 18px 24px;
  box-shadow: 0 2px 8px rgba(128,0,255,0.06);
  margin: 0 auto;
  max-width: 600px;
}
.testimonial-avatar {
  border-radius: 50%;
  overflow: hidden;
}
.testimonial-text {
  color: #fff;
  font-size: 1.08rem;
  font-style: italic;
  margin-bottom: 4px;
  font-family: 'Poppins', 'Inter', 'Montserrat', sans-serif;
}
.testimonial-meta {
  color: #b3b3b3;
  font-size: 0.98rem;
  font-family: 'Poppins', 'Inter', 'Montserrat', sans-serif;
}

/* FAQ Section */
.faq-section {
  background: #181818;
  border-radius: 24px;
  margin: 32px auto;
  padding: 32px 16px;
  max-width: 900px;
  box-shadow: 0 2px 16px rgba(128,0,255,0.08);
}
.faq-list {
  background: transparent;
}
.q-expansion-item {
  background: #222;
  color: #fff;
  border-radius: 12px;
  margin-bottom: 10px;
  box-shadow: 0 2px 8px rgba(128,0,255,0.06);
  font-family: 'Poppins', 'Inter', 'Montserrat', sans-serif;
}

/* Footer Section */
.footer-section {
  background: #181818;
  color: #fff;
  border-radius: 24px;
  margin: 32px auto 0 auto;
  padding: 32px 16px 16px 16px;
  max-width: 900px;
  box-shadow: 0 -2px 16px rgba(128,0,255,0.08);
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
}
.footer-links {
  display: flex;
  gap: 24px;
  justify-content: center;
  margin-bottom: 16px;
}
.footer-link {
  color: #fff;
  font-size: 1.1rem;
  text-decoration: none;
  font-weight: 500;
  border-radius: 8px;
  padding: 4px 12px;
  transition: background 0.2s;
  font-family: 'Poppins', 'Inter', 'Montserrat', sans-serif;
}
.footer-link:hover {
  background: #222;
}
.footer-social {
  display: flex;
  gap: 18px;
  justify-content: center;
  margin-bottom: 16px;
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
  font-size: 1rem;
  margin-bottom: 4px;
  font-family: 'Poppins', 'Inter', 'Montserrat', sans-serif;
}

/* Logo Overlay Animation */
.logo-overlay {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--q-dark-page);
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-full {
  width: 40vw;
  max-width: 400px;
  height: auto;
  transition: transform 0.8s cubic-bezier(0.4, 0.8, 0.6, 1);
  animation: logo-bounce 1s;
}

@keyframes logo-bounce {
  0% { transform: scale(0.8); }
  60% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.fade-logo-enter-active,
.fade-logo-leave-active {
  transition: opacity 0.8s cubic-bezier(0.4, 0.8, 0.6, 1);
}
.fade-logo-enter,
.fade-logo-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 900px) {
  .hero-flex {
    flex-direction: column;
    gap: 24px;
    text-align: center;
  }
  .hero-content {
    text-align: center;
    margin-bottom: 0;
  }
  .hero-cta {
    justify-content: center;
  }
  .hero-visual {
    margin-top: 0;
  }
  .how-steps {
    flex-direction: column;
    gap: 18px;
  }
  .how-step {
    min-width: 0;
    justify-content: center;
  }
  .trust-testimonial {
    flex-direction: column;
    gap: 8px;
    align-items: center;
    text-align: center;
  }
  .trust-badges {
    flex-direction: column;
    gap: 10px;
  }
  .footer-section, .how-section, .trust-section, .faq-section {
    padding: 18px 4px;
  }
  .hero-img {
    max-width: 90vw;
  }
  .section-title {
    font-size: 1.3rem;
  }
  .hero-headline {
    font-size: 2rem;
  }
  .testmonial-avatar {
    width: 90px !important;
    height: 90px !important;
    min-width: 90px !important;
    min-height: 90px !important;
    max-width: 90px !important;
    max-height: 90px !important;
  }
}
@media (max-width: 600px) {
  .footer-section {
    padding: 12px 2px 8px 2px;
    font-size: 0.98rem;
  }
  .footer-links {
    gap: 10px;
    flex-wrap: wrap;
  }
  .footer-link {
    font-size: 0.98rem;
    padding: 3px 7px;
  }
  .footer-social {
    gap: 8px;
  }
  .hero-headline {
    font-size: 1.2rem;
  }
  .hero-subheadline {
    font-size: 0.98rem;
  }
}
</style>

