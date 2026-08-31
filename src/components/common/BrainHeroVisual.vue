<template>
  <svg class="hero-visual-svg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto;">
    <defs>
      <linearGradient id="cyber-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#4F46E5" />
        <stop offset="50%" stop-color="#2563EB" />
        <stop offset="100%" stop-color="#06B6D4" />
      </linearGradient>
    </defs>
    
    <circle cx="200" cy="200" r="180" stroke="url(#cyber-grad)" stroke-width="2" stroke-dasharray="10 10" opacity="0.4" class="animate-spin-slow" />
    <circle cx="200" cy="200" r="150" stroke="url(#cyber-grad)" stroke-width="3" stroke-opacity="0.6" />
    <circle cx="200" cy="200" r="120" stroke="rgba(15, 23, 42, 0.08)" stroke-width="2" />

    <g opacity="0.8">
      <circle cx="200" cy="50" r="6" fill="#06B6D4"/>
      <circle cx="330" cy="120" r="6" fill="#4F46E5"/>
      <circle cx="330" cy="280" r="6" fill="#2563EB"/>
      <circle cx="200" cy="350" r="6" fill="#06B6D4"/>
      <circle cx="70" cy="280" r="6" fill="#4F46E5"/>
      <circle cx="70" cy="120" r="6" fill="#2563EB"/>
    </g>

    <g transform="translate(100, 100) scale(0.5)">
      <path d="M100 40 C140 40 180 70 180 120 C180 160 160 180 170 220 C180 260 160 300 120 320 C90 335 60 320 40 290 C20 260 20 220 30 180 C40 140 20 100 50 60 C70 40 85 40 100 40 Z" fill="none" stroke="url(#cyber-grad)" stroke-width="8" stroke-linecap="round"/>
      <path d="M100 80 V280" stroke="url(#cyber-grad)" stroke-width="6" stroke-dasharray="12 8"/>
      <path d="M60 120 H140 M50 180 H150 M70 240 H130" stroke="#2563EB" stroke-width="6" stroke-linecap="round"/>
      <circle cx="100" cy="120" r="12" fill="#06B6D4"/>
      <circle cx="100" cy="180" r="12" fill="#4F46E5"/>
      <circle cx="100" cy="240" r="12" fill="#2563EB"/>
    </g>
  </svg>
</template>
