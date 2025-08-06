<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="main-header" elevated>
      <div class="info-bar">
        <span class="info-bar-text">
          Any questions? Text or call (347)-835-4380
        </span>
      </div>
      <q-toolbar class="main-toolbar">
        <div class="logo-container">
          <router-link to="/">
            <img src="~assets/logos/DocushadeLogo.png" alt="Docushade Logo" class="header-logo" />
          </router-link>
        </div>
        <div class="toolbar-center q-gutter-sm">
          <!-- Desktop nav links (show only when not mobile) -->
          <div
            class="nav-links desktopO"
            v-show="!isMobile"
          >
            <q-btn flat label="Home" to="/" />
            <q-btn flat label="About" to="/about" />
            <q-btn flat label="Reviews" to="/reviews" />
            <q-btn flat label="Start My Exemption" to="/exemption" />
            <q-btn flat label="Terms of Service" to="/policies/terms-of-service" />
            <q-btn flat label="Email Us" href="mailto:docushade@gmail.com" />
          </div>
        </div>
        <div class="toolbar-right">
          <!-- Account icon (desktop only) -->
          <q-btn
            flat
            round
            dense
            icon="person"
            class="user-icon"
            :to="'/account'"
            aria-label="Manage Account"
            v-show="!isMobile"
          />
          <!-- Menu icon (mobile only) -->
          <q-btn
            flat
            dense
            round
            icon="menu"
            class="menu-toggle-btn"
            @click="toggleMobileMenu"
            aria-label="Open navigation"
            v-show="isMobile"
          />
        </div>
      </q-toolbar>
      <!-- Mobile Dropdown Menu -->
      <transition name="dropdown-fade">
        <div v-if="mobileMenuOpen && isMobile" class="mobile-dropdown-menu">
          <q-list>
            <q-item clickable v-ripple to="/" @click="closeMobileMenu">
              <q-item-section>Home</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/about" @click="closeMobileMenu">
              <q-item-section>About</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/reviews" @click="closeMobileMenu">
              <q-item-section>Reviews</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/exemption" @click="closeMobileMenu">
              <q-item-section>Start My Exemption</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/policies/terms-of-service" @click="closeMobileMenu">
              <q-item-section>Terms of Service</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/account" @click="closeMobileMenu">
              <q-item-section>Manage Account</q-item-section>
            </q-item>
            <q-item clickable v-ripple tag="a" href="mailto:docushade@gmail.com" @click="closeMobileMenu">
              <q-item-section>Email Us</q-item-section>
            </q-item>
          </q-list>
        </div>
      </transition>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const mobileMenuOpen = ref(false)
const isMobile = ref(false)

function checkMobile() {
  isMobile.value = window.innerWidth <= 1150
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
function closeMobileMenu() {
  mobileMenuOpen.value = false
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.q-page-container {
  padding-top: 0px !important;
  overflow-x: hidden;
}

/* Info bar styles */
.info-bar {
  position: absolute;
  top: 0;
  width: 100%;
  background: #1976d2;
  color: #fff;
  text-align: center;
  padding: 7px 0;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 1px;
  z-index: 10;
  overflow: hidden;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-bar-text {
  display: inline-block;
  white-space: nowrap;
  font-size: 1.4rem;
  animation: smooth-slide-left 18s linear infinite;
}

@keyframes smooth-slide-left {
  0% {
    transform: translateX(100%);
    opacity: 1;
  }
  90% {
    transform: translateX(-100%);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
}

.main-header {
  background: #222;
  min-height: 80px;
  padding-top: 34px;
  position: relative;
  z-index: 100;
}

.main-toolbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 60px;
  padding: 0 24px;
  margin-top: 0;
  gap: 0;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 32px;
  flex: 0 0 auto;
  padding-top: 8px;
  padding-bottom: 8px;
}

.header-logo {
  height: 70px;
  width: auto;
  cursor: pointer;
}

.toolbar-center {
  flex: 1 1 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.nav-links {
  display: flex;
  gap: 22px;
  font-size: 1.4rem;
  align-items: center;
  justify-content: center;
}

.nav-links .q-btn {
  font-size: 1.4rem;
  padding: 0 16px;
}

.toolbar-right {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 32px;
}

.user-icon {
  color: #fff;
  font-size: 1.4rem;
}

.menu-toggle-btn {
  display: none;
}

/* Responsive styles */
@media (max-width: 1150px) {
  .nav-links {
    display: none !important;
  }
  .menu-toggle-btn {
    display: inline-flex !important;
    margin-left: 8px;
  }
  .user-icon {
    display: none !important;
  }
}
@media (min-width: 1151px) {
  .menu-toggle-btn {
    display: none !important;
  }
  .user-icon {
    display: inline-flex !important;
  }
}

/* Mobile Dropdown Menu */
.mobile-dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100vw;
  background: #181818;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  border-radius: 0 0 18px 18px;
  z-index: 999;
  padding: 0 0 12px 0;
  animation: dropdown-in 0.22s cubic-bezier(0.4,0,0.2,1);
}
@keyframes dropdown-in {
  0% { opacity: 0; transform: translateY(-16px);}
  100% { opacity: 1; transform: translateY(0);}
}
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.22s cubic-bezier(0.4,0,0.2,1), transform 0.22s cubic-bezier(0.4,0,0.2,1);
}
.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-16px);
}
.dropdown-fade-enter-to,
.dropdown-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.mobile-dropdown-menu .q-list {
  padding: 0;
}
.mobile-dropdown-menu .q-item {
  color: #fff;
  font-size: 1.15rem;
  border-bottom: 1px solid #232323;
  border-radius: 0;
  background: transparent;
  padding: 12px 18px;
}
.mobile-dropdown-menu .q-item:last-child {
  border-bottom: none;
}
.mobile-dropdown-menu .q-item-section {
  font-weight: 500;
}

/* Responsive styles */
@media (max-width: 1150px) {
  .nav-links {
    display: none !important;
  }
  .menu-toggle-btn {
    display: inline-flex !important;
    margin-left: 8px;
  }
  .user-icon {
    display: none !important;
  }
}
@media (min-width: 1151px) {
  .menu-toggle-btn {
    display: none !important;
  }
  .user-icon {
    display: inline-flex !important;
  }
}
@media (max-width: 700px) {
  .main-toolbar {
    padding: 0 8px;
    min-height: 54px;
  }
  .logo-container {
    margin-right: 10px;
    padding-top: 4px;
    padding-bottom: 4px;
  }
  .header-logo {
    height: 44px;
  }
  .toolbar-center {
    gap: 0;
  }
  .toolbar-right {
    margin-left: 8px;
  }
  .info-bar {
    font-size: 1rem;
    height: 28px;
    padding: 4px 0;
  }
  .info-bar-text {
    font-size: 1rem;
  }
}
</style>
