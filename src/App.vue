<template>
  <div id="app" class="app-layout">
    <PageLoader />
    <TopBar />
    <Navbar @open-proposal="openProposalModal" />

    <main class="main-content">
      <router-view v-slot="{ Component, route }">
        <transition name="page-fade" mode="out-in" @after-enter="onPageEntered">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>

    <Footer />
    <FloatingCTA />
    <BackToTop />
    <ProposalModal :is-open="isProposalOpen" @close="closeProposalModal" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TopBar from './components/layout/TopBar.vue'
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import FloatingCTA from './components/common/FloatingCTA.vue'
import ProposalModal from './components/common/ProposalModal.vue'
import BackToTop from './components/common/BackToTop.vue'
import PageLoader from './components/common/PageLoader.vue'
import { rescanScrollReveal } from './utils/scrollReveal'

const isProposalOpen = ref(false)

function openProposalModal() {
  isProposalOpen.value = true
}

function closeProposalModal() {
  isProposalOpen.value = false
}

function onPageEntered() {
  rescanScrollReveal()
}
</script>

<style>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  min-height: 60vh;
}

/* Smooth page-to-page transition */
.page-fade-enter-active {
  transition: opacity 0.42s cubic-bezier(0.16, 1, 0.3, 1), transform 0.42s cubic-bezier(0.16, 1, 0.3, 1);
}
.page-fade-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.page-fade-enter-from {
  opacity: 0;
  transform: translateY(14px);
}
.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (prefers-reduced-motion: reduce) {
  .page-fade-enter-active,
  .page-fade-leave-active {
    transition: none !important;
  }
}
</style>
