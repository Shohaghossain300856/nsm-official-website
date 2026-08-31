<template>
  <div class="credential-pill basis-pill" title="Official Member of Bangladesh Association of Software and Information Services (BASIS)">
    <svg :height="height" viewBox="0 0 170 42" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="BASIS Official Logo">
      <text x="0" y="27" font-family="'Space Grotesk', 'Arial Black', sans-serif" font-weight="900" font-size="29" fill="#5A5D64" letter-spacing="0.5">BASIS</text>
      <polygon points="120,4 136,13 120,21" fill="#008751"/>
      <polygon points="120,24 136,33 120,41" fill="#66C5B7"/>
      <polygon points="126,12 144,22 126,32" fill="#ED1C24"/>
      <text x="144" y="9" font-family="sans-serif" font-size="8" font-weight="bold" fill="#64748B">©</text>
      <text x="0" y="39" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="6.8" fill="#64748B">Bangladesh Association of Software & Information Services</text>
    </svg>
    <span style="font-weight: 800; color: #5A5D64; font-size: 0.725rem; text-transform: uppercase; letter-spacing: 0.5px;">Member</span>
  </div>
</template>

<script setup>
defineProps({
  height: {
    type: [Number, String],
    default: 18
  }
})
</script>
