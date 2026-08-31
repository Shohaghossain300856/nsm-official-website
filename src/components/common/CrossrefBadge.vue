<template>
  <router-link to="/crossref-doi-services" class="credential-pill crossref-pill" title="Official Crossref Sponsoring Organization & Member DOI Registration Desk" style="text-decoration: none;">
    <svg :height="height" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Crossref Official Logo">
      <g transform="translate(0, 2)">
        <path d="M0 13 L32 0 L32 14 L0 24 Z" fill="#F4B400"/>
        <path d="M0 13 L20 20 L0 24 Z" fill="#E53935"/>
        <path d="M0 24 L20 20 L32 26 L0 26 Z" fill="#D5D5CE"/>
        <path d="M0 26 L20 20 L32 26 L32 27 Z" fill="#3A4045"/>
        <path d="M0 26 L32 27 L32 36 L0 36 Z" fill="#00A3C6"/>
      </g>
      <text x="40" y="27" font-family="'Space Grotesk', 'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="26" fill="#3A4045" letter-spacing="-0.5">Crossref</text>
    </svg>
    <span style="font-weight: 800; color: #E53935; font-size: 0.725rem; text-transform: uppercase; letter-spacing: 0.5px;">Sponsor</span>
  </router-link>
</template>

<script setup>
defineProps({
  height: {
    type: [Number, String],
    default: 18
  }
})
</script>
