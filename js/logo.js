/*
  NSM Limited - Exact Logo Brand Engine & Vector System (Harmonized with Official Logo)
  - Purple / Magenta: #894B9E
  - Royal Indigo: #4D54A5
  - Sapphire Electric Blue: #2563EB
  - Onyx Heading: #0F172A / #000000
*/

const NSMLogos = {
  // Main NSM Limited Logo: renders crisp high-res official logo image with vector fallback
  getMainLogoHTML: function(height = 54) {
    const isSubpage = window.location.pathname.includes('/services/') || window.location.pathname.includes('/products/');
    const imgPath = isSubpage ? '../images/nsm-logo.png' : 'images/nsm-logo.png';
    const fallbackSvg = encodeURIComponent(this.getFallbackLogoSVG(height));
    
    return `
      <div class="brand-logo-container" style="display: inline-flex; align-items: center; text-decoration: none;">
        <img src="${imgPath}" alt="NSM Limited" height="${height}" style="height: ${height}px; width: auto; max-width: 100%; object-fit: contain; display: block;" onerror="this.onerror=null; this.outerHTML=decodeURIComponent('${fallbackSvg}');" />
      </div>
    `;
  },

  // Precision Vector SVG for NSM Limited Brand
  getFallbackLogoSVG: function(height = 54) {
    return `
      <svg height="${height}" viewBox="0 0 450 140" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="NSM Limited Logo">
        <defs>
          <linearGradient id="nsm-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#894B9E" />
            <stop offset="50%" stop-color="#4D54A5" />
            <stop offset="100%" stop-color="#2563EB" />
          </linearGradient>
          <linearGradient id="nsm-text-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#894B9E" />
            <stop offset="50%" stop-color="#4D54A5" />
            <stop offset="100%" stop-color="#2563EB" />
          </linearGradient>
          <filter id="subtle-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#894B9E" flood-opacity="0.25"/>
          </filter>
        </defs>

        <!-- Dynamic NSM Geometric Ribbon Monogram Mark -->
        <g transform="translate(10, 10)" filter="url(#subtle-shadow)">
          <path d="M15 110 V25 C15 15, 25 10, 35 18 L70 58 V110" stroke="url(#nsm-logo-grad)" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M45 25 C75 10, 95 35, 60 65 C25 95, 75 125, 95 100" stroke="url(#nsm-logo-grad)" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M85 110 V35 L110 65 L135 35 V110" stroke="url(#nsm-logo-grad)" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" />
        </g>

        <!-- Brand Text: NSM -->
        <text x="175" y="72" font-family="'Space Grotesk', 'Outfit', sans-serif" font-weight="900" font-size="64" fill="url(#nsm-text-grad)" letter-spacing="4">NSM</text>
        
        <!-- Brand Text: Limited (Charcoal Onyx for White Theme) -->
        <text x="178" y="102" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="22" fill="#000000" letter-spacing="11">Limited</text>
        
        <!-- Tagline: The power of next generation -->
        <text x="178" y="124" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="12" fill="#894B9E" letter-spacing="1.2">The power of next generation</text>
      </svg>
    `;
  },

  // 1. Exact BASIS Official Logo SVG
  getBasisOfficialLogoSVG: function(height = 20) {
    return `
      <svg height="${height}" viewBox="0 0 170 42" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="BASIS Official Logo">
        <text x="0" y="27" font-family="'Space Grotesk', 'Arial Black', sans-serif" font-weight="900" font-size="29" fill="#5A5D64" letter-spacing="0.5">BASIS</text>
        <polygon points="120,4 136,13 120,21" fill="#008751"/>
        <polygon points="120,24 136,33 120,41" fill="#66C5B7"/>
        <polygon points="126,12 144,22 126,32" fill="#ED1C24"/>
        <text x="144" y="9" font-family="sans-serif" font-size="8" font-weight="bold" fill="#64748B">©</text>
        <text x="0" y="39" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="6.8" fill="#64748B">Bangladesh Association of Software & Information Services</text>
      </svg>
    `;
  },

  // 2. Exact Crossref Official Logo SVG
  getCrossrefOfficialLogoSVG: function(height = 20) {
    return `
      <svg height="${height}" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Crossref Official Logo">
        <g transform="translate(0, 2)">
          <path d="M0 13 L32 0 L32 14 L0 24 Z" fill="#F4B400"/>
          <path d="M0 13 L20 20 L0 24 Z" fill="#E53935"/>
          <path d="M0 24 L20 20 L32 26 L0 26 Z" fill="#D5D5CE"/>
          <path d="M0 26 L20 20 L32 26 L32 27 Z" fill="#3A4045"/>
          <path d="M0 26 L32 27 L32 36 L0 36 Z" fill="#00A3C6"/>
        </g>
        <text x="40" y="27" font-family="'Space Grotesk', 'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="26" fill="#3A4045" letter-spacing="-0.5">Crossref</text>
      </svg>
    `;
  },

  getBasisBadgeHTML: function() {
    return `
      <div class="credential-pill basis-pill" title="Official Member of Bangladesh Association of Software and Information Services (BASIS)">
        ${this.getBasisOfficialLogoSVG(18)}
        <span style="font-weight: 800; color: #5A5D64; font-size: 0.725rem; text-transform: uppercase; letter-spacing: 0.5px;">Member</span>
      </div>
    `;
  },

  getBasisOfficialLogoCardHTML: function() {
    return `
      <div class="basis-official-badge-card" style="display: inline-flex; align-items: center; gap: 0.75rem; padding: 0.65rem 1.1rem; background: #FFFFFF; border: 1px solid rgba(100, 116, 139, 0.3); border-radius: 10px; box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06); transition: all 0.3s ease;">
        ${this.getBasisOfficialLogoSVG(30)}
      </div>
    `;
  },

  getRJSCBadgeHTML: function() {
    return `
      <div class="credential-pill rjsc-pill" title="Registered under Registrar of Joint Stock Companies and Firms, Govt. of Bangladesh">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="4" width="18" height="16" rx="2"/>
          <path d="M7 8h10M7 12h10M7 16h6"/>
        </svg>
        <span><strong>RJSC</strong> Reg. Pvt. Ltd.</span>
      </div>
    `;
  },

  getCrossrefBadgeHTML: function(isSubpage = false) {
    const targetUrl = isSubpage ? "../crossref-doi-services.html" : "crossref-doi-services.html";
    return `
      <a href="${targetUrl}" class="credential-pill crossref-pill" title="Official Crossref Sponsoring Organization & Member DOI Registration Desk" style="text-decoration: none;">
        ${this.getCrossrefOfficialLogoSVG(18)}
        <span style="font-weight: 800; color: #E53935; font-size: 0.725rem; text-transform: uppercase; letter-spacing: 0.5px;">Sponsor</span>
      </a>
    `;
  },

  getBrainHeroVisualHTML: function() {
    return `
      <svg class="hero-visual-svg" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cyber-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#894B9E" />
            <stop offset="50%" stop-color="#4D54A5" />
            <stop offset="100%" stop-color="#2563EB" />
          </linearGradient>
        </defs>
        
        <circle cx="200" cy="200" r="180" stroke="url(#cyber-grad)" stroke-width="2" stroke-dasharray="10 10" opacity="0.4" class="animate-spin-slow" />
        <circle cx="200" cy="200" r="150" stroke="url(#cyber-grad)" stroke-width="3" stroke-opacity="0.6" />
        <circle cx="200" cy="200" r="120" stroke="rgba(15, 23, 42, 0.08)" stroke-width="2" />

        <g opacity="0.8">
          <circle cx="200" cy="50" r="6" fill="#2563EB"/>
          <circle cx="330" cy="120" r="6" fill="#894B9E"/>
          <circle cx="330" cy="280" r="6" fill="#4D54A5"/>
          <circle cx="200" cy="350" r="6" fill="#2563EB"/>
          <circle cx="70" cy="280" r="6" fill="#894B9E"/>
          <circle cx="70" cy="120" r="6" fill="#4D54A5"/>
        </g>

        <g transform="translate(100, 100) scale(0.5)">
          <path d="M100 40 C140 40 180 70 180 120 C180 160 160 180 170 220 C180 260 160 300 120 320 C90 335 60 320 40 290 C20 260 20 220 30 180 C40 140 20 100 50 60 C70 40 85 40 100 40 Z" fill="none" stroke="url(#cyber-grad)" stroke-width="8" stroke-linecap="round"/>
          <path d="M100 80 V280" stroke="url(#cyber-grad)" stroke-width="6" stroke-dasharray="12 8"/>
          <path d="M60 120 H140 M50 180 H150 M70 240 H130" stroke="#4D54A5" stroke-width="6" stroke-linecap="round"/>
          <circle cx="100" cy="120" r="12" fill="#2563EB"/>
          <circle cx="100" cy="180" r="12" fill="#894B9E"/>
          <circle cx="100" cy="240" r="12" fill="#4D54A5"/>
        </g>
      </svg>
    `;
  },

  getGlobalMapHUDHTML: function() {
    return `
      <svg viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto;">
        <defs>
          <linearGradient id="map-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#894B9E" />
            <stop offset="50%" stop-color="#4D54A5" />
            <stop offset="100%" stop-color="#2563EB" />
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
        <circle cx="435" cy="140" r="10" fill="rgba(137, 75, 158, 0.2)" class="animate-pulse"/>
        <circle cx="435" cy="140" r="5" fill="#894B9E"/>
        <text x="435" y="165" font-family="'JetBrains Mono'" font-size="10" fill="#894B9E" font-weight="700" text-anchor="middle">Office: Rangpur, BD</text>

        <circle cx="160" cy="100" r="5" fill="#2563EB"/>
        <text x="160" y="88" font-family="'JetBrains Mono'" font-size="9" fill="#2563EB" font-weight="600" text-anchor="middle">USA (New York)</text>

        <circle cx="140" cy="80" r="4" fill="#3B82F6"/>
        <text x="140" y="68" font-family="'JetBrains Mono'" font-size="9" fill="#3B82F6" font-weight="600" text-anchor="middle">Canada</text>

        <circle cx="310" cy="90" r="5" fill="#4D54A5"/>
        <text x="310" y="78" font-family="'JetBrains Mono'" font-size="9" fill="#4D54A5" font-weight="600" text-anchor="middle">UK (London)</text>

        <circle cx="375" cy="135" r="4" fill="#894B9E"/>
        <text x="375" y="152" font-family="'JetBrains Mono'" font-size="9" fill="#894B9E" font-weight="600" text-anchor="middle">UAE (Dubai)</text>
      </svg>
    `;
  }
};

const NSMClientLogos = {
  getLogoHTML(type) {
    const size = 68;
    switch(type) {
      case 'rpmc':
        return `<svg width="${size}" height="${size}" viewBox="0 0 70 70" fill="none">
          <defs>
            <linearGradient id="rpmc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#E11D48"/>
              <stop offset="100%" stop-color="#991B1B"/>
            </linearGradient>
            <filter id="rpmc-shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#991B1B" flood-opacity="0.3"/>
            </filter>
          </defs>
          <circle cx="35" cy="35" r="32" fill="#FFFFFF" stroke="url(#rpmc-grad)" stroke-width="2.5" filter="url(#rpmc-shadow)"/>
          <path d="M35 12C20 12 14 26 14 36C14 48 35 58 35 58C35 58 56 48 56 36C56 26 50 12 35 12Z" fill="url(#rpmc-grad)"/>
          <path d="M35 20V44M23 32H47" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
          <circle cx="35" cy="32" r="3" fill="#F59E0B"/>
          <path d="M22 46C26 50 44 50 48 46" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>
        </svg>`;

      case 'dinajpur':
        return `<svg width="${size}" height="${size}" viewBox="0 0 70 70" fill="none">
          <defs>
            <linearGradient id="din-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#10B981"/>
              <stop offset="100%" stop-color="#047857"/>
            </linearGradient>
            <filter id="din-shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#047857" flood-opacity="0.3"/>
            </filter>
          </defs>
          <circle cx="35" cy="35" r="32" fill="#FFFFFF" stroke="url(#din-grad)" stroke-width="2.5" filter="url(#din-shadow)"/>
          <path d="M20 18H50L45 42C45 50 35 56 35 56C35 56 25 50 25 42L20 18Z" fill="url(#din-grad)"/>
          <path d="M35 24V42M26 33H44" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
          <circle cx="35" cy="18" r="4" fill="#F59E0B"/>
        </svg>`;

      case 'comilla':
        return `<svg width="${size}" height="${size}" viewBox="0 0 70 70" fill="none">
          <defs>
            <linearGradient id="com-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#F43F5E"/>
              <stop offset="100%" stop-color="#BE123C"/>
            </linearGradient>
          </defs>
          <circle cx="35" cy="35" r="32" fill="#FFFFFF" stroke="url(#com-grad)" stroke-width="2.5"/>
          <path d="M35 12L54 23V47L35 58L16 47V23L35 12Z" fill="url(#com-grad)"/>
          <path d="M35 22V46M23 34H47" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
          <polygon points="35,16 38,22 44,22 39,26 41,32 35,28 29,32 31,26 26,22 32,22" fill="#F59E0B"/>
        </svg>`;

      case 'satkhira':
        return `<svg width="${size}" height="${size}" viewBox="0 0 70 70" fill="none">
          <defs>
            <linearGradient id="sat-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#14B8A6"/>
              <stop offset="100%" stop-color="#0F766E"/>
            </linearGradient>
          </defs>
          <circle cx="35" cy="35" r="32" fill="#FFFFFF" stroke="url(#sat-grad)" stroke-width="2.5"/>
          <rect x="18" y="18" width="34" height="34" rx="8" fill="url(#sat-grad)"/>
          <path d="M35 22V48M22 35H48" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
        </svg>`;

      case 'bogura':
        return `<svg width="${size}" height="${size}" viewBox="0 0 70 70" fill="none">
          <defs>
            <linearGradient id="bog-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#2563EB"/>
              <stop offset="100%" stop-color="#1D4ED8"/>
            </linearGradient>
          </defs>
          <circle cx="35" cy="35" r="32" fill="#FFFFFF" stroke="url(#bog-grad)" stroke-width="2.5"/>
          <path d="M35 12L52 21V40C52 49 35 58 35 58C35 58 18 49 18 40V21L35 12Z" fill="url(#bog-grad)"/>
          <path d="M35 22V44M23 33H47" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
          <circle cx="35" cy="33" r="5" fill="#F59E0B"/>
        </svg>`;

      case 'nilphamari':
        return `<svg width="${size}" height="${size}" viewBox="0 0 70 70" fill="none">
          <defs>
            <linearGradient id="nil-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#06B6D4"/>
              <stop offset="100%" stop-color="#0991B1"/>
            </linearGradient>
          </defs>
          <circle cx="35" cy="35" r="32" fill="#FFFFFF" stroke="url(#nil-grad)" stroke-width="2.5"/>
          <circle cx="35" cy="35" r="22" fill="url(#nil-grad)"/>
          <path d="M35 18V52M18 35H52" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
        </svg>`;

      case 'baiust':
        return `<svg width="${size}" height="${size}" viewBox="0 0 70 70" fill="none">
          <defs>
            <linearGradient id="bai-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#065F46"/>
              <stop offset="100%" stop-color="#022C22"/>
            </linearGradient>
          </defs>
          <path d="M35 8L55 18V44L35 56L15 44V18L35 8Z" fill="url(#bai-grad)" stroke="#F59E0B" stroke-width="3"/>
          <polygon points="35,16 39,26 49,27 41,34 44,44 35,39 26,44 29,34 21,27 31,26" fill="#F59E0B"/>
        </svg>`;

      case 'rdrs':
        return `<svg width="${size}" height="${size}" viewBox="0 0 70 70" fill="none">
          <defs>
            <linearGradient id="rdrs-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#16A34A"/>
              <stop offset="100%" stop-color="#15803D"/>
            </linearGradient>
          </defs>
          <circle cx="35" cy="35" r="32" fill="#FFFFFF" stroke="url(#rdrs-grad)" stroke-width="2.5"/>
          <circle cx="35" cy="35" r="22" fill="url(#rdrs-grad)"/>
          <path d="M35 15C24 15 15 24 15 35C15 46 24 55 35 55" stroke="#FFFFFF" stroke-width="2" stroke-dasharray="4 3"/>
          <path d="M25 35H45M35 25V45" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
        </svg>`;

      case 'prime':
        return `<svg width="${size}" height="${size}" viewBox="0 0 70 70" fill="none">
          <defs>
            <linearGradient id="prm-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#4F46E5"/>
              <stop offset="100%" stop-color="#3730A3"/>
            </linearGradient>
          </defs>
          <circle cx="35" cy="35" r="32" fill="#FFFFFF" stroke="url(#prm-grad)" stroke-width="2.5"/>
          <rect x="20" y="16" width="30" height="38" rx="4" fill="url(#prm-grad)"/>
          <path d="M35 22V48M22 35H48" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
        </svg>`;

      case 'sufi':
        return `<svg width="${size}" height="${size}" viewBox="0 0 70 70" fill="none">
          <defs>
            <linearGradient id="suf-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#9333EA"/>
              <stop offset="100%" stop-color="#6B21A8"/>
            </linearGradient>
          </defs>
          <rect x="8" y="8" width="54" height="54" rx="12" fill="#FFFFFF" stroke="url(#suf-grad)" stroke-width="2.5"/>
          <path d="M22 52V24L35 14L48 24V52H38V36H32V52H22Z" fill="url(#suf-grad)"/>
        </svg>`;

      default:
        return `<svg width="${size}" height="${size}" viewBox="0 0 70 70" fill="none"><circle cx="35" cy="35" r="32" fill="#F1F5F9"/></svg>`;
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.inject-nsm-logo').forEach(el => {
    const h = el.getAttribute('data-height') || 50;
    el.innerHTML = NSMLogos.getMainLogoHTML(h);
  });
  document.querySelectorAll('.inject-basis-badge').forEach(el => el.innerHTML = NSMLogos.getBasisBadgeHTML());
  document.querySelectorAll('.inject-basis-logo-card').forEach(el => el.innerHTML = NSMLogos.getBasisOfficialLogoCardHTML());
  document.querySelectorAll('.inject-rjsc-badge').forEach(el => el.innerHTML = NSMLogos.getRJSCBadgeHTML());
  document.querySelectorAll('.inject-crossref-badge').forEach(el => {
    const isSub = window.location.pathname.includes('/services/') || window.location.pathname.includes('/products/');
    el.innerHTML = NSMLogos.getCrossrefBadgeHTML(isSub);
  });
  document.querySelectorAll('.inject-brain-visual').forEach(el => el.innerHTML = NSMLogos.getBrainHeroVisualHTML());
  document.querySelectorAll('.inject-global-map-hud').forEach(el => el.innerHTML = NSMLogos.getGlobalMapHUDHTML());
  document.querySelectorAll('.inject-client-logo').forEach(el => {
    const type = el.getAttribute('data-client');
    el.innerHTML = NSMClientLogos.getLogoHTML(type);
  });
});





