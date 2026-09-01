<template>
  <div class="hero-visual-wrapper">
    <svg class="hero-visual-svg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto;">
      <defs>
        <linearGradient id="cyber-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4F46E5" />
          <stop offset="50%" stop-color="#2563EB" />
          <stop offset="100%" stop-color="#06B6D4" />
        </linearGradient>
        <filter id="glow-filter">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#4F46E5" stop-opacity="0.15"/>
          <stop offset="100%" stop-color="#4F46E5" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <!-- Ambient center glow -->
      <circle cx="200" cy="200" r="90" fill="url(#center-glow)" class="glow-breathe"/>

      <!-- Outermost slow spinning dashed ring -->
      <circle cx="200" cy="200" r="180" stroke="url(#cyber-grad)" stroke-width="1.5"
        stroke-dasharray="8 14" opacity="0.3" class="ring-spin-slow"/>

      <!-- Second ring — counter slow spin -->
      <circle cx="200" cy="200" r="155" stroke="url(#cyber-grad)" stroke-width="2"
        stroke-dasharray="100 50" stroke-opacity="0.45" class="ring-spin-reverse"/>

      <!-- Third static ring -->
      <circle cx="200" cy="200" r="128" stroke="#4F46E5" stroke-width="1"
        stroke-opacity="0.2" />

      <!-- Inner slow dashed ring -->
      <circle cx="200" cy="200" r="108" stroke="#06B6D4" stroke-width="1"
        stroke-dasharray="5 10" opacity="0.2" class="ring-spin-slow"/>

      <!-- Orbital dots (no top dot) -->
      <g filter="url(#glow-filter)">
        <circle cx="332" cy="118" r="5.5" fill="#4F46E5" class="dot-pulse-2"/>
        <circle cx="332" cy="282" r="7"   fill="#2563EB" class="dot-pulse-3"/>
        <circle cx="200" cy="358" r="5.5" fill="#06B6D4" class="dot-pulse-1"/>
        <circle cx="68"  cy="282" r="7"   fill="#4F46E5" class="dot-pulse-2"/>
        <circle cx="68"  cy="118" r="5.5" fill="#2563EB" class="dot-pulse-3"/>
      </g>

      <!-- Animated data packet on orbit -->
      <circle r="5" fill="#06B6D4" opacity="0.85" filter="url(#glow-filter)">
        <animateMotion dur="8s" repeatCount="indefinite">
          <mpath href="#orbit-path"/>
        </animateMotion>
      </circle>
      <circle r="3.5" fill="#4F46E5" opacity="0.75" filter="url(#glow-filter)">
        <animateMotion dur="12s" repeatCount="indefinite" begin="3s">
          <mpath href="#orbit-path"/>
        </animateMotion>
      </circle>
      <path id="orbit-path" d="M200,45 a155,155 0 1,1 -0.01,0" fill="none" opacity="0"/>

      <!-- ===== NEW CENTER: Globe / Network Node ===== -->
      <!-- Globe outer circle -->
      <circle cx="200" cy="200" r="72" stroke="url(#cyber-grad)" stroke-width="3" opacity="0.85" class="globe-spin"/>

      <!-- Globe latitude lines -->
      <ellipse cx="200" cy="200" rx="72" ry="22" stroke="#4F46E5" stroke-width="1.5" opacity="0.5" class="globe-spin"/>
      <ellipse cx="200" cy="200" rx="72" ry="44" stroke="#2563EB" stroke-width="1" opacity="0.3" class="globe-spin"/>

      <!-- Globe longitude lines (vertical ellipses) -->
      <ellipse cx="200" cy="200" rx="22" ry="72" stroke="#06B6D4" stroke-width="1.5" opacity="0.45" class="globe-lon-spin"/>
      <ellipse cx="200" cy="200" rx="44" ry="72" stroke="#4F46E5" stroke-width="1" opacity="0.25" class="globe-lon-spin"/>

      <!-- Globe equator -->
      <line x1="128" y1="200" x2="272" y2="200" stroke="url(#cyber-grad)" stroke-width="1" opacity="0.4"/>
      <!-- Globe meridian -->
      <line x1="200" y1="128" x2="200" y2="272" stroke="url(#cyber-grad)" stroke-width="1" opacity="0.4"/>

      <!-- Network nodes on globe -->
      <circle cx="200" cy="148" r="5" fill="#06B6D4" filter="url(#glow-filter)" class="dot-pulse-1"/>
      <circle cx="245" cy="178" r="4" fill="#4F46E5" filter="url(#glow-filter)" class="dot-pulse-2"/>
      <circle cx="155" cy="222" r="4" fill="#2563EB" filter="url(#glow-filter)" class="dot-pulse-3"/>
      <circle cx="230" cy="230" r="4" fill="#06B6D4" filter="url(#glow-filter)" class="dot-pulse-1"/>
      <circle cx="168" cy="172" r="4" fill="#4F46E5" filter="url(#glow-filter)" class="dot-pulse-2"/>

      <!-- Connection lines between nodes -->
      <g stroke="url(#cyber-grad)" stroke-width="1" opacity="0.35">
        <line x1="200" y1="148" x2="245" y2="178"/>
        <line x1="245" y1="178" x2="230" y2="230"/>
        <line x1="230" y1="230" x2="155" y2="222"/>
        <line x1="155" y1="222" x2="168" y2="172"/>
        <line x1="168" y1="172" x2="200" y2="148"/>
        <line x1="200" y1="148" x2="155" y2="222"/>
      </g>

      <!-- Center core dot -->
      <circle cx="200" cy="200" r="10" fill="url(#cyber-grad)" filter="url(#glow-filter)" class="core-pulse"/>
      <circle cx="200" cy="200" r="5"  fill="#FFFFFF" opacity="0.9"/>
    </svg>

    <!-- Floating mini particles -->
    <div class="particle p1"></div>
    <div class="particle p2"></div>
    <div class="particle p3"></div>
  </div>
</template>

<style scoped>
.hero-visual-wrapper {
  position: relative;
  width: 100%;
}

/* Slow ring rotations */
.ring-spin-slow {
  transform-origin: 200px 200px;
  animation: spinCW 28s linear infinite;
}
.ring-spin-reverse {
  transform-origin: 200px 200px;
  animation: spinCCW 22s linear infinite;
}

@keyframes spinCW  { from { transform: rotate(0deg); }   to { transform: rotate(360deg);  } }
@keyframes spinCCW { from { transform: rotate(0deg); }   to { transform: rotate(-360deg); } }

/* Globe spinning */
.globe-spin {
  transform-origin: 200px 200px;
  animation: spinCW 20s linear infinite;
}
.globe-lon-spin {
  transform-origin: 200px 200px;
  animation: spinCCW 15s linear infinite;
}

/* Dot pulses — staggered */
.dot-pulse-1 { animation: dotPulse 2.8s ease-in-out infinite; }
.dot-pulse-2 { animation: dotPulse 2.8s ease-in-out infinite 0.9s; }
.dot-pulse-3 { animation: dotPulse 2.8s ease-in-out infinite 1.8s; }

@keyframes dotPulse {
  0%, 100% { opacity: 0.6; transform: scale(0.9); }
  50%       { opacity: 1;   transform: scale(1.3); }
}

/* Core center pulse */
.core-pulse {
  animation: corePulse 2s ease-in-out infinite;
  transform-origin: 200px 200px;
}
@keyframes corePulse {
  0%, 100% { r: 10; opacity: 0.85; }
  50%       { r: 14; opacity: 1;    }
}

/* Ambient glow */
.glow-breathe {
  animation: glowPulse 4s ease-in-out infinite;
}
@keyframes glowPulse {
  0%, 100% { opacity: 0.8; }
  50%       { opacity: 1.4; }
}

/* Floating particles */
.particle {
  position: absolute;
  border-radius: 50%;
  animation: floatUp 6s ease-in-out infinite;
  pointer-events: none;
}
.p1 { width: 5px;  height: 5px;  background: #06B6D4; top: 18%; left: 8%;  opacity: 0.55; animation-delay: 0s;   animation-duration: 5.5s; }
.p2 { width: 4px;  height: 4px;  background: #4F46E5; top: 75%; left: 88%; opacity: 0.5;  animation-delay: 2s;   animation-duration: 7s; }
.p3 { width: 3px;  height: 3px;  background: #2563EB; top: 88%; left: 18%; opacity: 0.5;  animation-delay: 3.5s; animation-duration: 6s; }

@keyframes floatUp {
  0%, 100% { transform: translateY(0px)   scale(1);   opacity: 0.5; }
  50%       { transform: translateY(-16px) scale(1.25); opacity: 1;   }
}
</style>
