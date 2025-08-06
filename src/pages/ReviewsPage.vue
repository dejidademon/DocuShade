<template>
  <q-page class="reviews-bg">
    <!-- Hero Section -->
    <section class="reviews-hero">
      <div class="reviews-hero-content">
        <div class="reviews-hero-badges">
          <q-icon name="verified" color="secondary" size="40px" class="verified-badge" />
          <span class="animated-stars">⭐⭐⭐⭐⭐</span>
        </div>
        <h1 class="reviews-headline">Real Stories. Real Protection.</h1>
        <p class="reviews-subheadline">
          See why hundreds of drivers trust DocuShade to ride dark legally and stress-free.
        </p>
        <q-btn color="primary" unelevated class="reviews-cta-btn" label="Book Your Consultation" />
      </div>
      <div class="reviews-hero-bg"></div>
    </section>

    <!-- Slogan Section (replaces video) -->
    <section class="reviews-slogan-section">
      <div class="reviews-slogan">
        <strong>“Drive Confident. Stay Protected. DocuShade Has You Covered.”</strong>
      </div>
    </section>

    <!-- Grid of Client Reviews -->
    <section class="reviews-grid-section">
      <h2 class="section-title">What Our Clients Say</h2>
      <div class="reviews-grid">
        <div class="review-card" v-for="review in reviews" :key="review.name">
          <div class="review-stars">
            <span v-for="n in review.stars" :key="n" class="star">⭐</span>
          </div>
          <div class="review-quote">"{{ review.quote }}"</div>
          <div class="review-meta">
            – {{ review.name }}, {{ review.city }}
            <q-icon v-if="review.car" name="directions_car" size="18px" class="review-car" />
          </div>
        </div>
      </div>
    </section>

    <!-- Proof Gallery -->
    <section class="proof-gallery-section">
      <h2 class="section-title">Proof is in the Packet</h2>
      <div class="proof-gallery">
        <div class="proof-photo" v-for="proof in proofs" :key="proof.img">
          <img :src="proof.img" :alt="proof.caption" />
          <div class="proof-caption">{{ proof.caption }}</div>
        </div>
      </div>
    </section>

    <!-- Trust Badges Section -->
    <section class="trust-badges-section">
      <div class="trust-badges-row">
        <div class="trust-badge" v-for="badge in trustBadges" :key="badge.text">
          <q-icon :name="badge.icon" color="primary" size="28px" />
          <span>{{ badge.text }}</span>
        </div>
      </div>
    </section>

    <!-- Submit Review Section -->
    <section class="submit-review-section">
      <h2 class="section-title">Submit Your Review</h2>
      <q-form @submit.prevent="submitReview" class="review-form" v-if="!reviewSubmitted">
        <div class="form-row">
          <q-input filled v-model="form.name" label="Your Name" dark dense required class="form-input" />
          <q-input filled v-model="form.city" label="City" dark dense required class="form-input" />
        </div>
        <div class="form-row">
          <q-rating v-model="form.stars" max="5" dark color="amber" size="32px" required />
        </div>
        <div class="form-row">
          <q-input
            filled
            dark
            v-model="form.quote"
            label="Your Review"
            type="textarea"
            dense
            required
            class="form-input"
            :counter="200"
            maxlength="200"
          />
        </div>
        <div class="form-row">
          <q-btn color="primary" label="Submit Review" type="submit" class="submit-btn" />
        </div>
      </q-form>
      <div v-else class="review-thankyou">
        <q-icon name="check_circle" color="positive" size="48px" />
        <div>Thank you for your review!</div>
      </div>
    </section>

    <!-- Sticky CTA Bar -->
    <!-- <div class="sticky-cta-bar">
      <span>Ready to protect your tints legally?</span>
      <q-btn color="primary" unelevated class="sticky-cta-btn" label="Book Your Appointment" />
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
import { ref } from 'vue'

const reviews = [
  {
    stars: 5,
    quote: "Super smooth process. Got my letter 2 days after the call.",
    name: "Kevin T.",
    city: "Newark NJ",
    car: true,
  },
  {
    stars: 5,
    quote: "Doctor was friendly and professional. Highly recommend.",
    name: "Alicia R.",
    city: "Brooklyn NY",
    car: false,
  },
  {
    stars: 5,
    quote: "I was skeptical, but it worked! No more tickets.",
    name: "Marcus L.",
    city: "Philadelphia PA",
    car: true,
  },
  {
    stars: 5,
    quote: "Fast, confidential, and legit. Thank you DocuShade!",
    name: "Samantha P.",
    city: "Buffalo NY",
    car: false,
  },
  {
    stars: 5,
    quote: "Got my exemption in the mail in 3 days. Easy process.",
    name: "Jose M.",
    city: "Hartford CT",
    car: true,
  },
  {
    stars: 5,
    quote: "No more stress about getting pulled over. Worth every penny.",
    name: "Priya S.",
    city: "Jersey City NJ",
    car: false,
  },
]

const proofs = [
  {
    img: 'src/assets/reviewPage/asainMaleSmile.webp',
    caption: 'Delivered 2 days after call',
  },
  {
    img: 'src/assets/reviewPage/envelope.webp',
    caption: 'Confidential envelope',
  },
  {
    img: 'src/assets/reviewPage/documents.webp',
    caption: 'Client with exemption letter',
  },
  {
    img: 'src/assets/reviewPage/blackMaleSmile.webp',
    caption: 'Official DMV-compliant letter',
  },
]

const trustBadges = [
  { icon: 'check_circle', text: 'DMV-Compliant' },
  { icon: 'verified_user', text: 'Licensed Providers' },
  { icon: 'bolt', text: 'Fast Turnaround' },
  { icon: 'lock', text: 'HIPAA Compliant' },
  { icon: 'local_shipping', text: 'Delivered to Your Door' },
]

// Review form state
const form = ref({
  name: '',
  city: '',
  stars: 0,
  quote: '',
})
const reviewSubmitted = ref(false)

function submitReview() {
  reviewSubmitted.value = true
  // Optionally, push to reviews array for instant feedback:
  // reviews.push({ ...form.value, car: false })
  // Reset form after a delay if desired
  setTimeout(() => {
    reviewSubmitted.value = false
    form.value = { name: '', city: '', stars: 0, quote: '' }
  }, 3500)
}
</script>

<style scoped>
.section-title{
  color: #fff;
  font-size: 1.8rem;
  font-weight: 600;
  margin: 32px 0 16px;
  text-align: center;
}

.reviews-bg {
  background: var(--q-dark-page);
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  font-family: 'Poppins', 'Inter', 'Montserrat', sans-serif;
}

/* Hero Section */
.reviews-hero {
  position: relative;
  padding: 56px 16px 40px 16px;
  text-align: center;
  background: linear-gradient(120deg, #181818 60%, #222 100%);
  border-radius: 0 0 32px 32px;
  overflow: hidden;
}
.reviews-hero-bg {
  position: absolute;
  inset: 0;
  background: url('~assets/mainPage/blackTicket.webp') center/cover no-repeat;
  opacity: 0.18;
  z-index: 0;
}
.reviews-hero-content {
  position: relative;
  z-index: 1;
  max-width: 700px;
  margin: 0 auto;
}
.reviews-hero-badges {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-bottom: 12px;
}
.animated-stars {
  font-size: 2rem;
  color: #ffc107;
  animation: stars-glow 1.5s infinite alternate;
}
@keyframes stars-glow {
  0% { filter: brightness(1); }
  100% { filter: brightness(1.5); }
}
.verified-badge {
  animation: badge-pop 1s;
}
@keyframes badge-pop {
  0% { transform: scale(0.7); }
  60% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
.reviews-headline {
  color: #fff;
  font-size: 2.3rem;
  font-weight: 700;
  margin-bottom: 12px;
  letter-spacing: 1px;
}
.reviews-subheadline {
  color: #b3b3b3;
  font-size: 1.15rem;
  margin-bottom: 28px;
}
.reviews-cta-btn {
  font-size: 1.1rem;
  border-radius: 24px;
  font-weight: 600;
  padding: 12px 32px;
  box-shadow: 0 2px 8px rgba(128,0,255,0.12);
}

/* Slogan Section */
.reviews-slogan-section {
  margin: 40px auto 0 auto;
  max-width: 900px;
  text-align: center;
}
.reviews-slogan {
  color: #fff;
  font-size: 2.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 32px 0 18px 0;
  text-shadow: 0 2px 16px rgba(0,0,0,0.18);
}

/* Reviews Grid */
.reviews-grid-section {
  margin: 48px auto 0 auto;
  max-width: 1000px;
}
.reviews-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
}
.review-card {
  background: #222;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(128,0,255,0.06);
  padding: 22px 24px;
  min-width: 220px;
  max-width: 320px;
  flex: 1 1 220px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.review-stars {
  color: #ffc107;
  font-size: 1.2rem;
  margin-bottom: 8px;
}
.review-quote {
  color: #fff;
  font-size: 1.08rem;
  margin-bottom: 10px;
  font-style: italic;
}
.review-meta {
  color: #b3b3b3;
  font-size: 0.98rem;
  display: flex;
  align-items: center;
  gap: 4px;
}
.review-car {
  color: #1976d2;
}

/* Proof Gallery */
.proof-gallery-section {
  margin: 48px auto 0 auto;
  max-width: 1000px;
}
.proof-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: center;
}
.proof-photo {
  background: #222;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(128,0,255,0.06);
  padding: 10px;
  max-width: 200px;
  flex: 1 1 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.proof-photo img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 8px;
  object-fit: cover;
  max-height: 120px;
}
.proof-caption {
  color: #b3b3b3;
  font-size: 0.95rem;
  text-align: center;
}

/* Trust Badges Section */
.trust-badges-section {
  margin: 48px auto 0 auto;
  max-width: 900px;
  text-align: center;
}
.trust-badges-row {
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  justify-content: center;
  align-items: center;
}
.trust-badge {
  background: #222;
  color: #fff;
  border-radius: 12px;
  padding: 10px 18px;
  font-size: 1.08rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 8px rgba(128,0,255,0.06);
  opacity: 0;
  animation: fadeInBadge 1s forwards;
}
.trust-badge:nth-child(1) { animation-delay: 0.2s; }
.trust-badge:nth-child(2) { animation-delay: 0.4s; }
.trust-badge:nth-child(3) { animation-delay: 0.6s; }
.trust-badge:nth-child(4) { animation-delay: 0.8s; }
.trust-badge:nth-child(5) { animation-delay: 1s; }
@keyframes fadeInBadge {
  to { opacity: 1; }
}

/* Submit Review Section */
.submit-review-section {
  background: #181818;
  border-radius: 24px;
  margin: 48px auto 0 auto;
  padding: 32px 16px;
  max-width: 600px;
  box-shadow: 0 2px 16px rgba(128,0,255,0.08);
  text-align: center;
}
.review-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 12px;
}
.form-row {
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
}
.form-input {
  flex: 1 1 0;
}
.submit-btn {
  margin-top: 8px;
  font-weight: 600;
  border-radius: 24px;
  padding: 10px 32px;
}
.review-thankyou {
  color: #21ba45;
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
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
  border-radius: 24px;
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
  .reviews-hero { padding: 32px 4px 24px 4px; }
  .reviews-headline { font-size: 1.5rem; }
  .reviews-subheadline { font-size: 1rem; }
  .reviews-cta-btn { font-size: 1rem; }
  .reviews-grid, .proof-gallery, .trust-badges-row { gap: 10px; }
  .review-card, .proof-photo { min-width: 140px; max-width: 100%; }
  .sticky-cta-bar { font-size: 1rem; padding: 12px 4px 10px 4px; }
}
@media (max-width: 700px) {
  .submit-review-section {
    padding: 18px 4px;
  }
  .form-row {
    flex-direction: column;
    gap: 8px;
  }
}
@media (max-width: 600px) {
  .reviews-hero-content { max-width: 98vw; }
  .review-card, .proof-photo {
    padding: 10px 6px;
    font-size: 0.98rem;
  }
  .section-title { font-size: 1.1rem; }
  .reviews-headline { font-size: 1.1rem; }
  .reviews-subheadline { font-size: 0.95rem; }
  .footer-section {
    padding: 10px 2px 6px 2px;
    font-size: 0.98rem;
  }
  .footer-links {
    gap: 8px;
    flex-wrap: wrap;
  }
  .footer-link {
    font-size: 0.98rem;
    padding: 3px 7px;
  }
  .footer-social {
    gap: 8px;
  }
}
</style>
