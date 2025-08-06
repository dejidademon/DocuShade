<template>
  <q-page class="account-bg">
    <div class="account-container">
      <h1 class="account-title">Manage Account</h1>
      <div v-if="!user">
        <q-form @submit.prevent="handleLogin">
          <q-input
            v-model="email"
            label="Email"
            type="email"
            required
            class="q-mb-md"
            filled
            dense
          />
          <q-input
            v-model="password"
            label="Password"
            type="password"
            required
            class="q-mb-md"
            filled
            dense
          />
          <div class="q-gutter-md q-mb-md">
            <q-btn color="primary" label="Login" type="submit" />
            <q-btn flat label="Sign Up" @click="handleSignup" />
          </div>
        </q-form>
      </div>
      <div v-else>
        <div class="account-info">
          <div>Logged in as: <b>{{ user.email }}</b></div>
          <q-btn color="negative" label="Logout" @click="handleLogout" class="q-mt-md" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
// Firebase Auth placeholder imports
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

const email = ref('')
const password = ref('')
const user = ref(null) // Replace with actual Firebase user state

function handleLogin() {
  // TODO: Implement Firebase Auth login
  // signInWithEmailAndPassword(getAuth(), email.value, password.value)
  //   .then(cred => { user.value = cred.user })
  //   .catch(err => { /* handle error */ })
  alert('Login logic goes here (Firebase Auth)')
}
function handleSignup() {
  // TODO: Implement Firebase Auth signup
  // createUserWithEmailAndPassword(getAuth(), email.value, password.value)
  //   .then(cred => { user.value = cred.user })
  //   .catch(err => { /* handle error */ })
  alert('Signup logic goes here (Firebase Auth)')
}
function handleLogout() {
  // TODO: Implement Firebase Auth logout
  // signOut(getAuth()).then(() => { user.value = null })
  user.value = null
  alert('Logout logic goes here (Firebase Auth)')
}

// TODO: On mount, listen for auth state changes and update user.value
</script>

<style scoped>
.account-bg {
  background: var(--q-dark-page);
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.account-container {
  background: #181818;
  border-radius: 18px;
  padding: 32px 24px;
  max-width: 400px;
  width: 100%;
  margin: 48px auto;
  box-shadow: 0 2px 16px rgba(128,0,255,0.08);
  color: #fff;
  text-align: center;
}
.account-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 18px;
}
.account-info {
  margin-top: 24px;
  font-size: 1.1rem;
}
</style>
