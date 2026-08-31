<template>
  <svg viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto;">
    <defs>
      <linearGradient id="map-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#4F46E5" />
        <stop offset="50%" stop-color="#2563EB" />
        <stop offset="100%" stop-color="#06B6D4" />
      </linearGradient>
    </defs>

    <g fill="rgba(15, 23, 42, 0.06)">
      <circle cx="120" cy="90" r="20"/><circle cx="160" cy="100" r="25"/><circle cx="140" cy="130" r="18"/>
      <circle cx="200" cy="200" r="18"/><circle cx="210" cy="230" r="15"/>
      <circle cx="310" cy="90" r="15"/><circle cx="330" cy="100" r="18"/>
      <circle cx="420" cy="110" r="28"/><circle cx="450" cy="130" r="22"/>
      <circle cx="500" cy="230" r="18"/>
    </g>

    <!-- Connection Lines -->
    <path d="M435 140 Q 300 40 160 100" stroke="url(#map-line-grad)" stroke-width="2.5" stroke-dasharray="6 4" fill="none"/>
    <path d="M435 140 Q 280 30 140 80" stroke="url(#map-line-grad)" stroke-width="2" stroke-dasharray="4 4" fill="none"/>
    <path d="M435 140 Q 370 80 310 90" stroke="url(#map-line-grad)" stroke-width="2.5" stroke-dasharray="5 3" fill="none"/>
    <path d="M435 140 Q 405 130 375 135" stroke="url(#map-line-grad)" stroke-width="2" fill="none"/>

    <!-- Pins -->
    <circle cx="435" cy="140" r="10" fill="rgba(79, 70, 229, 0.2)" class="animate-pulse"/>
    <circle cx="435" cy="140" r="5" fill="#4F46E5"/>
    <text x="435" y="165" font-family="'JetBrains Mono'" font-size="10" fill="#4F46E5" font-weight="700" text-anchor="middle">Office: Rangpur, BD</text>

    <circle cx="160" cy="100" r="5" fill="#2563EB"/>
    <text x="160" y="88" font-family="'JetBrains Mono'" font-size="9" fill="#2563EB" font-weight="600" text-anchor="middle">USA (New York)</text>

    <circle cx="140" cy="80" r="4" fill="#0284C7"/>
    <text x="140" y="68" font-family="'JetBrains Mono'" font-size="9" fill="#0284C7" font-weight="600" text-anchor="middle">Canada</text>

    <circle cx="310" cy="90" r="5" fill="#06B6D4"/>
    <text x="310" y="78" font-family="'JetBrains Mono'" font-size="9" fill="#06B6D4" font-weight="600" text-anchor="middle">UK (London)</text>

    <circle cx="375" cy="135" r="4" fill="#4F46E5"/>
    <text x="375" y="152" font-family="'JetBrains Mono'" font-size="9" fill="#4F46E5" font-weight="600" text-anchor="middle">UAE (Dubai)</text>
  </svg>
</template>
