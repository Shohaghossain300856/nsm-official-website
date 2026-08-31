<template>
  <div class="brand-logo-container" style="display: inline-flex; align-items: center; text-decoration: none;">
    <img 
      src="/images/nsm-logo.png" 
      alt="NSM Limited Official Logo" 
      :style="{ height: height + 'px', width: 'auto', maxHeight: height + 'px', objectFit: 'contain', display: 'block' }" 
    />
  </div>
</template>

<script setup>
defineProps({
  height: {
    type: [Number, String],
    default: 52
  }
})
</script>
