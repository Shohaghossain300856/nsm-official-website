<template>
  <div class="page-loader-bar" :class="{ active: isLoading }" aria-hidden="true"></div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoading = ref(false)
let hideTimer = null

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    clearTimeout(hideTimer)
    isLoading.value = true
  }
  next()
})

router.afterEach(() => {
  clearTimeout(hideTimer)
  hideTimer = setTimeout(() => {
    isLoading.value = false
  }, 320)
})
</script>

<style scoped>
.page-loader-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  width: 0%;
  z-index: 3000;
  background: var(--gradient-brand-h);
  box-shadow: 0 0 10px rgba(79, 70, 229, 0.6);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.page-loader-bar.active {
  opacity: 1;
  width: 70%;
  transition: width 1.1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease;
}

.page-loader-bar:not(.active) {
  width: 100%;
  transition: width 0.3s ease, opacity 0.25s ease 0.05s;
}
</style>
