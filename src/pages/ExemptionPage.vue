<template>
  <q-page class="exemption-bg">
    <!-- Page Header -->
    <section class="exemption-header">
      <h1 class="exemption-title">Start Your Exemption</h1>
      <p class="exemption-subtitle">
        Answer a few quick questions to see if you qualify. Your tint protection starts here.
      </p>
      <q-btn color="primary" class="exemption-cta-btn" label="Jump to Survey" @click="scrollToSurvey" />
    </section>

    <!-- Trust Strip -->
    <section class="trust-strip">
      <div class="trust-strip-row">
        <div class="trust-strip-badge">
          <q-icon name="verified_user" color="primary" size="24px" /> Licensed Providers
        </div>
        <div class="trust-strip-badge">
          <q-icon name="check_circle" color="primary" size="24px" /> DMV-Recognized
        </div>
        <div class="trust-strip-badge">
          <q-icon name="bolt" color="primary" size="24px" /> Secure + Fast
        </div>
        <div class="trust-strip-badge">
          <q-icon name="lock" color="primary" size="24px" /> HIPAA Compliant
        </div>
      </div>
    </section>

    <!-- Embedded Typeform Survey -->
    <section class="survey-section" ref="surveySection">
      <div class="survey-instructions">
        We’ll use your answers to match you with the right provider. This takes 1–2 minutes.
      </div>
      <div class="survey-iframe-wrapper">
        <div  data-tf-live="01JAM7KWK290GVMAKXAXZ0WA0Q" key="typeform-embed"></div>
      </div>
      <div class="survey-actions">
        <q-btn
          color="secondary"
          class="survey-action-btn"
          label="Open Survey in New Tab"
          type="a"
          href="https://x2yyqc94c15.typeform.com/to/TacIqIUe"
          target="_blank"
        />
        <p class="exemption-subtitle survey-action-note">
          In case the survey doesn't load on reload.
        </p>
      </div>
    </section>

    <!-- Booking Section -->
    <section class="booking-section">
      <h2 class="section-title">Book Your Consultation</h2>
      <div class="booking-desc">
        Once you've completed the form, you'll be directed to lock in your appointment and secure your exemption.
      </div>
      <q-btn
        color="primary"
        class="booking-btn"
        label="Book Now with Calendly →"
        href="https://calendly.com/docushade/consultation"
        target="_blank"
      />
      <div class="booking-note">
        Consultations are $200 and include full evaluation, documentation, and support.
      </div>
    </section>

    <!-- Testimonials Strip -->
    <section class="testimonials-strip">
      <div class="testimonial-card">
        “Fastest way I’ve ever gotten a legit exemption.”<br />
        <span class="testimonial-meta">– Mike, Bronx NY</span>
      </div>
      <div class="testimonial-card">
        “Got the letter in 2 days. Booking was simple.”<br />
        <span class="testimonial-meta">– Brianna, Jersey City</span>
      </div>
      <div class="testimonial-card">
        “Doctor was chill and got me right away.”<br />
        <span class="testimonial-meta">– Zay, Long Island</span>
      </div>
    </section>

    <!-- FAQ Collapsible -->
    <section class="faq-section">
      <h2 class="section-title">FAQs</h2>
      <q-list bordered class="faq-list">
        <q-expansion-item label="What happens after I book?">
          <div>You'll receive a confirmation and instructions for your consultation. After your evaluation, you'll get your exemption documentation.</div>
        </q-expansion-item>
        <q-expansion-item label="How long does it take to get my letter?">
          <div>Most clients receive their DMV-compliant letter within 2-3 business days after their consultation.</div>
        </q-expansion-item>
        <q-expansion-item label="Do I qualify if I just have glare or migraines?">
          <div>Yes, many clients qualify for exemptions due to light sensitivity, migraines, or related conditions.</div>
        </q-expansion-item>
        <q-expansion-item label="Is this really legal?">
          <div>Yes, our process is DMV-recognized and fully compliant with state and federal regulations.</div>
        </q-expansion-item>
      </q-list>
    </section>

    <!-- Sticky CTA Bar
    <div class="sticky-cta-bar">
      <span>See If You Qualify Now</span>
      <q-btn color="primary" unelevated class="sticky-cta-btn" label="Start Survey" @click="scrollToSurvey" />
    </div> -->

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
import { ref, onMounted } from 'vue'
const surveySection = ref(null)

function scrollToSurvey() {
  surveySection.value?.scrollIntoView({ behavior: 'smooth' })
}


onMounted(() => {
  if (!document.querySelector('script[src="//embed.typeform.com/next/embed.js"]')) {
    const script = document.createElement('script')
    script.src = '//embed.typeform.com/next/embed.js'
    script.async = true
    document.body.appendChild(script)
  }
})
</script>

<style scoped>
.exemption-bg {
  background: var(--q-dark-page);
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  font-family: 'Poppins', 'Inter', 'Montserrat', sans-serif;
}

/* Header */
.exemption-header {
  text-align: center;
  padding: 48px 16px 24px 16px;
}
.exemption-title {
  color: #fff;
  font-size: 2.3rem;
  font-weight: 700;
  margin-bottom: 12px;
  letter-spacing: 1px;
}
.exemption-subtitle {
  color: #b3b3b3;
  font-size: 1.15rem;
  margin-bottom: 28px;
}
.exemption-cta-btn {
  font-size: 1.1rem;
  border-radius: 24px;
  font-weight: 600;
  padding: 12px 32px;
  box-shadow: 0 2px 8px rgba(128,0,255,0.12);
}

/* Trust Strip */
.trust-strip {
  background: #181818;
  border-radius: 16px;
  margin: 0 auto 32px auto;
  padding: 16px 8px;
  max-width: 700px;
  box-shadow: 0 2px 8px rgba(128,0,255,0.06);
}
.trust-strip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: center;
  align-items: center;
}
.trust-strip-badge {
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

/* Survey Section */
.survey-section {
  margin: 32px auto 0 auto;
  max-width: 900px;
  text-align: center;
}
.survey-instructions {
  color: #fff;
  font-size: 1.15rem;
  margin-bottom: 18px;
}
.survey-iframe-wrapper {
  border-radius: 16px;
  overflow: hidden;
  background: #181818;
  box-shadow: 0 2px 16px rgba(128,0,255,0.08);
  /* If you want a background image here, use: */
  /* background-image: url('~assets/mainPage/your-bg-image.webp'); */
}
.survey-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 18px;
}
.survey-action-btn {
  border-radius: 24px;
  font-weight: 600;
  padding: 10px 24px;
}
.survey-action-note {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1rem;
  color: #b3b3b3;
  text-align: center;
}

/* Booking Section */
.booking-section {
  background: #181818;
  border-radius: 24px;
  margin: 48px auto 0 auto;
  padding: 32px 16px;
  max-width: 600px;
  box-shadow: 0 2px 16px rgba(128,0,255,0.08);
  text-align: center;
}
.section-title {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 18px;
  text-align: center;
}
.booking-desc {
  color: #b3b3b3;
  font-size: 1.08rem;
  margin-bottom: 18px;
}
.booking-btn {
  font-size: 1.1rem;
  border-radius: 24px;
  font-weight: 600;
  padding: 12px 32px;
  margin-bottom: 10px;
  box-shadow: 0 2px 8px rgba(128,0,255,0.12);
}
.booking-note {
  color: #ffc107;
  font-size: 1rem;
  margin-top: 6px;
}

/* Testimonials Strip */
.testimonials-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: center;
  align-items: stretch;
  margin: 40px auto 0 auto;
  max-width: 900px;
}
.testimonial-card {
  background: #222;
  color: #fff;
  border-radius: 12px;
  padding: 18px 18px;
  font-size: 1.08rem;
  font-style: italic;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(128,0,255,0.06);
  flex: 1 1 220px;
  min-width: 180px;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.testimonial-meta {
  color: #b3b3b3;
  font-size: 0.98rem;
  font-style: normal;
  margin-top: 6px;
}

/* FAQ Section */
.faq-section {
  background: #181818;
  border-radius: 24px;
  margin: 48px auto 0 auto;
  padding: 32px 16px;
  max-width: 700px;
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
}

/* Sticky CTA Bar */
.sticky-cta-bar {
  position: fixed;
  left: 0; right: 0; bottom: 0;
  background: #1976d2;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 18px 12px 14px 12px;
  box-shadow: 0 -2px 16px rgba(25,118,210,0.18);
  z-index: 100;
  font-size: 1.15rem;
  font-weight: 600;
}
.sticky-cta-btn {
  font-size: 1.1rem;
  border-radius: 24px;
  font-weight: 600;
  padding: 10px 28px;
  box-shadow: 0 2px 8px rgba(128,0,255,0.12);
  background: #00e0ff;
  color: #222;
}

/* Footer */
.footer-section {
  background: #181818;
  color: #fff;
  border-radius: 24px 24px 0 0;
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
  .exemption-header { padding: 32px 4px 24px 4px; }
  .exemption-title { font-size: 1.5rem; }
  .exemption-subtitle { font-size: 1rem; }
  .exemption-cta-btn { font-size: 1rem; }
  .trust-strip-row, .testimonials-strip { gap: 10px; }
  .testimonial-card { min-width: 120px; max-width: 100%; }
  .sticky-cta-bar { font-size: 1rem; padding: 12px 4px 10px 4px; }
}
</style>
