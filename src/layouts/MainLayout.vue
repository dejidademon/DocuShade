<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="main-header" elevated>
      <div class="info-bar">
        <span class="info-bar-text">
          Any questions? Text or call (347)-835-4380
        </span>
      </div>
      <q-toolbar class="main-toolbar">
        <!-- Logo on the left, links to home -->
        <div class="logo-container">
          <router-link to="/">
            <img src="~assets/logos/DocushadeLogo.png" alt="Docushade Logo" class="header-logo" />
          </router-link>
        </div>
        <div class="toolbar-center">
          <div class="nav-links">
            <q-btn flat label="Reviews" to="/reviews" />
            <q-btn flat label="Start My Exemption" to="/exemption" />
            <q-btn flat label="Terms of Service" to="/policies/terms-of-service" />
            <q-btn flat label="Email Us" href="mailto:docushade@gmail.com" />
          </div>
        </div>
        <div class="toolbar-right">
          <q-btn flat round dense icon="person" class="user-icon" />
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
// ...existing code...
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
  /* Smooth continuous scroll */
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
</style>
