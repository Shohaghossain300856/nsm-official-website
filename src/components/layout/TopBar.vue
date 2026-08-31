<template>
  <div class="top-bar">
    <div class="container top-bar-inner">
      <div class="top-bar-credentials">
        <BasisBadge />
        <RjscBadge />
        <CrossrefBadge />
      </div>
      <div class="top-bar-contact">
        <a href="mailto:support@nsmlimited.com" style="color: var(--text-muted); font-size: 0.8rem; text-decoration: none; display: inline-flex; align-items: center; gap: 0.35rem;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          support@nsmlimited.com
        </a>
        <a href="tel:+8801891151713" style="color: #10B981; font-weight: 700; font-size: 0.85rem; text-decoration: none; display: inline-flex; align-items: center; gap: 0.45rem;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Call Now: +8801891151713, 14, 15, 17
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import BasisBadge from '../common/BasisBadge.vue'
import RjscBadge from '../common/RjscBadge.vue'
import CrossrefBadge from '../common/CrossrefBadge.vue'
</script>
