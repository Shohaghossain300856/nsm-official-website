<template>
  <transition name="bt-fade">
    <button
      v-if="visible"
      class="back-to-top-btn"
      aria-label="Back to top"
      @click="scrollTop"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 480
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.back-to-top-btn {
  position: fixed;
  left: 1.5rem;
  bottom: 1.5rem;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  color: var(--logo-purple);
  border: 1px solid var(--border-brand);
  box-shadow: var(--shadow-lg);
  z-index: 900;
  transition: all var(--transition-fast);
}

.back-to-top-btn:hover {
  background: var(--gradient-brand);
  color: #FFFFFF;
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg), var(--shadow-glow-purple);
}

.back-to-top-btn:active {
  transform: translateY(-1px) scale(0.95);
}

.bt-fade-enter-active,
.bt-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.bt-fade-enter-from,
.bt-fade-leave-to {
  opacity: 0;
  transform: translateY(14px) scale(0.9);
}

@media (max-width: 768px) {
  .back-to-top-btn {
    left: 1rem;
    bottom: 5.5rem;
    width: 42px;
    height: 42px;
  }
}
</style>
