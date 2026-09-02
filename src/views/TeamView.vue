<template>
  <div class="team-page">
    <!-- Ambient Gradient Page Banner -->
    <section class="page-banner">
      <div class="banner-ambient-blob blob-1"></div>
      <div class="banner-ambient-blob blob-2"></div>
      <div class="container banner-inner">
        <div class="banner-header-meta">
          <div class="banner-breadcrumb">
            <router-link to="/" class="breadcrumb-link">Home</router-link>
            <span class="sep">&gt;</span>
            <span class="current">Our Team</span>
          </div>
          <div class="banner-badge">
            <span class="badge-dot"></span>
            <span>Core Engineering &amp; Leadership</span>
          </div>
        </div>
        <h1 class="banner-title">
          Meet the Minds Behind <span class="gradient-text">NSM Limited</span>
        </h1>
        <p class="banner-subtitle">
          A multidisciplinary collective of enterprise system architects, distributed backend engineers, 
          and full-stack software specialists delivering mission-critical platforms worldwide.
        </p>
      </div>
    </section>

    <!-- Main Team Content Section -->
    <section class="section-padding content-section">
      <div class="section-ambient-mesh"></div>
      <div class="container section-inner">

        <!-- Static High-End Team Grid -->
        <div class="team-grid">

          <!-- 1. Chairman -->
          <div class="team-card is-featured">
            <div class="card-glow glow-indigo"></div>
            <div class="member-head">
              <div class="photo-wrapper">
                <img
                  :src="'/images/team/chairman.jpg'"
                  alt="Shoumik Jaman Chowdhury"
                  class="member-photo"
                  style="object-position: center 15%;"
                  loading="lazy"
                  @error="$event.target.style.display='none'; $event.target.nextElementSibling.style.display='flex'"
                />
                <div class="member-photo-fallback" style="display: none;">
                  <span class="fallback-initials">SJC</span>
                  <span class="fallback-icon">👑</span>
                </div>
              </div>
              <div class="member-meta">
                <span class="dept-badge badge-indigo">Chairman</span>
                <h3 class="member-name">Shoumik Jaman Chowdhury</h3>
                <p class="member-role">Chairman &amp; Server-Side Security Lead</p>
              </div>
            </div>
            <div class="member-body">
              <p class="member-bio">
                Guiding corporate vision, high-level institutional governance, hardened server-side security architectures, and enterprise cyber infrastructure defense.
              </p>
              <div class="member-skills">
                <span class="skill-tag">Server-Side Security</span>
                <span class="skill-tag">Corporate Governance</span>
                <span class="skill-tag">Infrastructure Hardening</span>
                <span class="skill-tag">Cyber Defense</span>
              </div>
            </div>
            <div class="member-footer">
              <div class="member-socials">
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" class="social-btn linkedin" title="LinkedIn Profile">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z"/></svg>
                </a>
                <a href="mailto:chairman@nsmlimited.com" class="social-btn email" title="Direct Email">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- 2. Managing Director -->
          <div class="team-card is-featured">
            <div class="card-glow glow-blue"></div>
            <div class="member-head">
              <div class="photo-wrapper">
                <img
                  :src="'/images/team/managing-director.jpg'"
                  alt="Syed Naimul Hasan"
                  class="member-photo"
                  style="object-position: center 15%;"
                  loading="lazy"
                  @error="$event.target.style.display='none'; $event.target.nextElementSibling.style.display='flex'"
                />
                <div class="member-photo-fallback" style="display: none;">
                  <span class="fallback-initials">SNH</span>
                  <span class="fallback-icon">⚡</span>
                </div>
              </div>
              <div class="member-meta">
                <span class="dept-badge badge-blue">Managing Director</span>
                <h3 class="member-name">Syed Naimul Hasan</h3>
                <p class="member-role">Managing Director &amp; Full Stack Web Developer</p>
              </div>
            </div>
            <div class="member-body">
              <p class="member-bio">
                Directing corporate technology strategy, lead full-stack web architectures, and high-availability enterprise ERP system engineering for national deployments.
              </p>
              <div class="member-skills">
                <span class="skill-tag">Enterprise Architecture</span>
                <span class="skill-tag">Full Stack Web Dev</span>
                <span class="skill-tag">Cloud ERP Systems</span>
                <span class="skill-tag">SaaS Scaling</span>
              </div>
            </div>
            <div class="member-footer">
              <div class="member-socials">
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" class="social-btn linkedin" title="LinkedIn Profile">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z"/></svg>
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" class="social-btn github" title="GitHub Profile">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
                </a>
                <a href="mailto:naimul@nsmlimited.com" class="social-btn email" title="Direct Email">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- 3. Senior Full Stack Engineer -->
          <div class="team-card">
            <div class="card-glow glow-cyan"></div>
            <div class="member-head">
              <div class="photo-wrapper">
                <img
                  :src="'/images/team/senior-developer.jpg'"
                  alt="Md. Mehedi Hasan"
                  class="member-photo"
                  style="object-position: center 15%;"
                  loading="lazy"
                  @error="$event.target.style.display='none'; $event.target.nextElementSibling.style.display='flex'"
                />
                <div class="member-photo-fallback" style="display: none;">
                  <span class="fallback-initials">MH</span>
                  <span class="fallback-icon">💻</span>
                </div>
              </div>
              <div class="member-meta">
                <span class="dept-badge badge-cyan">Senior Dev</span>
                <h3 class="member-name">Md. Mehedi Hasan</h3>
                <p class="member-role">Lead Full Stack Web &amp; App Developer</p>
              </div>
            </div>
            <div class="member-body">
              <p class="member-bio">
                Architecting scalable enterprise web portals, high-throughput microservices, robust RESTful APIs, and cross-platform mobile application backends.
              </p>
              <div class="member-skills">
                <span class="skill-tag">Vue.js</span>
                <span class="skill-tag">Node.js</span>
                <span class="skill-tag">Laravel</span>
                <span class="skill-tag">MySQL</span>
                <span class="skill-tag">Tailwind</span>
              </div>
            </div>
            <div class="member-footer">
              <div class="member-socials">
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" class="social-btn linkedin" title="LinkedIn Profile">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z"/></svg>
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" class="social-btn github" title="GitHub Profile">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
                </a>
                <a href="mailto:mehedi.dev@nsmlimited.com" class="social-btn email" title="Direct Email">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- 4. HR & Admin | WordPress Specialist -->
          <div class="team-card">
            <div class="card-glow glow-purple"></div>
            <div class="member-head">
              <div class="photo-wrapper">
                <img
                  :src="'/images/team/md-mehedi-hasan.jpg'"
                  alt="Md. Mehedi Hasan"
                  class="member-photo"
                  style="object-position: center 35%;"
                  loading="lazy"
                  @error="$event.target.style.display='none'; $event.target.nextElementSibling.style.display='flex'"
                />
                <div class="member-photo-fallback" style="display: none;">
                  <span class="fallback-initials">MMH</span>
                  <span class="fallback-icon">📋</span>
                </div>
              </div>
              <div class="member-meta">
                <span class="dept-badge badge-purple">HR &amp; Admin</span>
                <h3 class="member-name">Md. Mehedi Hasan</h3>
                <p class="member-role">HR &amp; Admin Lead | WordPress Specialist</p>
              </div>
            </div>
            <div class="member-body">
              <p class="member-bio">
                Managing corporate human resources, organizational administration, employee relations, alongside specialized WordPress CMS architecture and web deployment.
              </p>
              <div class="member-skills">
                <span class="skill-tag">HR &amp; Admin</span>
                <span class="skill-tag">WordPress CMS</span>
                <span class="skill-tag">Theme Dev</span>
                <span class="skill-tag">Talent Acquisition</span>
              </div>
            </div>
            <div class="member-footer">
              <div class="member-socials">
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" class="social-btn linkedin" title="LinkedIn Profile">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z"/></svg>
                </a>
                <a href="mailto:mehedi@nsmlimited.com" class="social-btn email" title="Direct Email">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- 5. SEO & Growth Specialist -->
          <div class="team-card">
            <div class="card-glow glow-emerald"></div>
            <div class="member-head">
              <div class="photo-wrapper">
                <img
                  :src="'/images/team/seo-specialist.jpg'"
                  alt="Md. Ripon Mia"
                  class="member-photo"
                  style="object-position: center 15%;"
                  loading="lazy"
                  @error="$event.target.style.display='none'; $event.target.nextElementSibling.style.display='flex'"
                />
                <div class="member-photo-fallback" style="display: none;">
                  <span class="fallback-initials">MRM</span>
                  <span class="fallback-icon">📈</span>
                </div>
              </div>
              <div class="member-meta">
                <span class="dept-badge badge-emerald">SEO Specialist</span>
                <h3 class="member-name">Md. Ripon Mia</h3>
                <p class="member-role">Lead Technical SEO &amp; Search Engine Specialist</p>
              </div>
            </div>
            <div class="member-body">
              <p class="member-bio">
                Directing technical search engine optimization, structured schema markup, page speed vitals, organic ranking strategies, and web analytics.
              </p>
              <div class="member-skills">
                <span class="skill-tag">Technical SEO</span>
                <span class="skill-tag">Search Console</span>
                <span class="skill-tag">Schema Markup</span>
                <span class="skill-tag">Core Web Vitals</span>
              </div>
            </div>
            <div class="member-footer">
              <div class="member-socials">
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" class="social-btn linkedin" title="LinkedIn Profile">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z"/></svg>
                </a>
                <a href="mailto:ripon.seo@nsmlimited.com" class="social-btn email" title="Direct Email">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- 6. Senior Sales Executive -->
          <div class="team-card">
            <div class="card-glow glow-rose"></div>
            <div class="member-head">
              <div class="photo-wrapper">
                <img
                  :src="'/images/team/sales-executive.jpg'"
                  alt="Senior Sales Executive"
                  class="member-photo"
                  loading="lazy"
                  @error="$event.target.style.display='none'; $event.target.nextElementSibling.style.display='flex'"
                />
                <div class="member-photo-fallback" style="display: none;">
                  <span class="fallback-initials">SE</span>
                  <span class="fallback-icon">💼</span>
                </div>
              </div>
              <div class="member-meta">
                <span class="dept-badge badge-rose">Sales Executive</span>
                <h3 class="member-name">Senior Sales Executive</h3>
                <p class="member-role">Senior Enterprise Solutions Sales Executive</p>
              </div>
            </div>
            <div class="member-body">
              <p class="member-bio">
                Connecting government medical colleges, healthcare institutions, and corporate enterprises with customized NSM ERP suites and SaaS platforms.
              </p>
              <div class="member-skills">
                <span class="skill-tag">ERP Pitching</span>
                <span class="skill-tag">CRM Pipeline</span>
                <span class="skill-tag">Lead Conversion</span>
                <span class="skill-tag">Client Demos</span>
              </div>
            </div>
            <div class="member-footer">
              <div class="member-socials">
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" class="social-btn linkedin" title="LinkedIn Profile">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z"/></svg>
                </a>
                <a href="mailto:sales@nsmlimited.com" class="social-btn email" title="Direct Email">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- 7. Junior Full Stack Web Developer 1 -->
          <div class="team-card">
            <div class="card-glow glow-blue"></div>
            <div class="member-head">
              <div class="photo-wrapper">
                <img
                  :src="'/images/team/junior-developer-1.jpg'"
                  alt="Junior Full Stack Web Developer"
                  class="member-photo"
                  loading="lazy"
                  @error="$event.target.style.display='none'; $event.target.nextElementSibling.style.display='flex'"
                />
                <div class="member-photo-fallback" style="display: none;">
                  <span class="fallback-initials">JWD</span>
                  <span class="fallback-icon">💻</span>
                </div>
              </div>
              <div class="member-meta">
                <span class="dept-badge badge-blue">Junior Dev</span>
                <h3 class="member-name">Junior Full Stack Web Developer</h3>
                <p class="member-role">Junior Full Stack Web Applications Developer</p>
              </div>
            </div>
            <div class="member-body">
              <p class="member-bio">
                Building dynamic web pages, modular stylesheet structures, frontend state management, and supporting full-stack development pipelines.
              </p>
              <div class="member-skills">
                <span class="skill-tag">Vue.js</span>
                <span class="skill-tag">Node.js</span>
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">HTML5 / SCSS</span>
              </div>
            </div>
            <div class="member-footer">
              <div class="member-socials">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" class="social-btn github" title="GitHub Profile">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
                </a>
                <a href="mailto:juniordev1@nsmlimited.com" class="social-btn email" title="Direct Email">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- 8. Junior Full Stack Web Developer 2 -->
          <div class="team-card">
            <div class="card-glow glow-blue"></div>
            <div class="member-head">
              <div class="photo-wrapper">
                <img
                  :src="'/images/team/junior-developer-2.jpg'"
                  alt="Junior Full Stack Web Developer"
                  class="member-photo"
                  loading="lazy"
                  @error="$event.target.style.display='none'; $event.target.nextElementSibling.style.display='flex'"
                />
                <div class="member-photo-fallback" style="display: none;">
                  <span class="fallback-initials">JWD</span>
                  <span class="fallback-icon">💻</span>
                </div>
              </div>
              <div class="member-meta">
                <span class="dept-badge badge-blue">Junior Dev</span>
                <h3 class="member-name">Junior Full Stack Web Developer</h3>
                <p class="member-role">Junior Full Stack Web Applications Developer</p>
              </div>
            </div>
            <div class="member-body">
              <p class="member-bio">
                Building dynamic web pages, modular stylesheet structures, frontend state management, and supporting full-stack development pipelines.
              </p>
              <div class="member-skills">
                <span class="skill-tag">React.js</span>
                <span class="skill-tag">Node.js</span>
                <span class="skill-tag">TypeScript</span>
                <span class="skill-tag">REST APIs</span>
              </div>
            </div>
            <div class="member-footer">
              <div class="member-socials">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" class="social-btn github" title="GitHub Profile">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
                </a>
                <a href="mailto:juniordev2@nsmlimited.com" class="social-btn email" title="Direct Email">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- 9. Office Administration & SEO Data Entry Executive -->
          <div class="team-card">
            <div class="card-glow glow-teal"></div>
            <div class="member-head">
              <div class="photo-wrapper">
                <img
                  :src="'/images/team/office-seo-executive.jpg'"
                  alt="Office & SEO Data Executive"
                  class="member-photo"
                  loading="lazy"
                  @error="$event.target.style.display='none'; $event.target.nextElementSibling.style.display='flex'"
                />
                <div class="member-photo-fallback" style="display: none;">
                  <span class="fallback-initials">OSE</span>
                  <span class="fallback-icon">📊</span>
                </div>
              </div>
              <div class="member-meta">
                <span class="dept-badge badge-teal">Office &amp; SEO Ops</span>
                <h3 class="member-name">Office &amp; SEO Data Executive</h3>
                <p class="member-role">Office Operations &amp; SEO Data Entry Executive</p>
              </div>
            </div>
            <div class="member-body">
              <p class="member-bio">
                Handling day-to-day office administration, client documentation, data management, and executing technical SEO data entry &amp; keyword records.
              </p>
              <div class="member-skills">
                <span class="skill-tag">Office Admin</span>
                <span class="skill-tag">SEO Data Entry</span>
                <span class="skill-tag">Documentation</span>
                <span class="skill-tag">Client Records</span>
              </div>
            </div>
            <div class="member-footer">
              <div class="member-socials">
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" class="social-btn linkedin" title="LinkedIn Profile">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z"/></svg>
                </a>
                <a href="mailto:office@nsmlimited.com" class="social-btn email" title="Direct Email">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Pure static layout with no state or complex loops
</script>

<style scoped>
.team-page {
  min-height: 100vh;
  background-color: #FFFFFF;
}

/* ================= Page Header Banner ================= */
.page-banner {
  position: relative;
  padding: 3.75rem 0 3rem;
  background: linear-gradient(
    135deg,
    #F4F7FB 0%,
    #EDF2F9 28%,
    #FFFFFF 55%,
    #EEF2FF 82%,
    #E0E7FF 100%
  );
  overflow: hidden;
  border-bottom: 1px solid #E2E8F0;
  text-align: left;
}

.banner-ambient-blob {
  position: absolute;
  pointer-events: none;
  border-radius: 9999px;
  filter: blur(60px);
}

.blob-1 {
  top: -80px;
  right: 15%;
  width: 420px;
  height: 280px;
  background: radial-gradient(circle, rgba(199, 210, 254, 0.7) 0%, rgba(224, 231, 255, 0) 70%);
}

.blob-2 {
  bottom: -60px;
  left: 10%;
  width: 320px;
  height: 220px;
  background: radial-gradient(circle, rgba(224, 242, 254, 0.6) 0%, rgba(240, 249, 255, 0) 70%);
}

.banner-inner {
  position: relative;
  z-index: 1;
  text-align: left;
}

.banner-header-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
}

.banner-breadcrumb {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0;
}

.banner-breadcrumb .breadcrumb-link {
  color: #4F46E5;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.banner-breadcrumb .breadcrumb-link:hover {
  opacity: 0.8;
}

.banner-breadcrumb .sep,
.banner-breadcrumb .current {
  color: #64748B;
  font-weight: 500;
}

.banner-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  background: rgba(79, 70, 229, 0.08);
  border: 1px solid rgba(79, 70, 229, 0.2);
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 700;
  color: #4F46E5;
  margin: 0;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4F46E5;
  box-shadow: 0 0 8px #4F46E5;
}

.banner-title {
  font-size: clamp(2.1rem, 3.8vw, 3rem);
  font-weight: 800;
  line-height: 1.25;
  letter-spacing: -0.025em;
  color: #1E293B;
  margin: 0 0 1.25rem 0;
  text-align: left;
}

.gradient-text {
  background: linear-gradient(90deg, #2563EB 0%, #00A3FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.banner-subtitle {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #475569;
  font-weight: 400;
  max-width: 780px;
  margin: 0;
  text-align: left;
}

/* ================= Content Section ================= */
.content-section {
  position: relative;
  padding: 4.5rem 0;
  background: linear-gradient(
    140deg,
    #FFFFFF 0%,
    #F8FAFC 30%,
    #F1F5F9 58%,
    #EFF6FF 82%,
    #E8EEF8 100%
  );
  overflow: visible;
}

.section-ambient-mesh {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(ellipse at 15% 25%, rgba(219, 234, 254, 0.45) 0%, transparent 45%),
    radial-gradient(ellipse at 85% 75%, rgba(224, 231, 255, 0.5) 0%, transparent 45%);
  pointer-events: none;
}

.section-inner {
  position: relative;
  z-index: 1;
}

/* ================= Static Team Cards Grid ================= */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2rem;
}

.team-card {
  position: relative;
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid #E2E8F0;
  border-radius: 20px;
  padding: 1.85rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.035);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}

.team-card:hover {
  transform: translateY(-6px);
  border-color: #CBD5E1;
  box-shadow: 0 20px 35px -5px rgba(15, 23, 42, 0.08);
}

.team-card.is-featured {
  border-color: rgba(79, 70, 229, 0.3);
}

/* Ambient Card Glow */
.card-glow {
  position: absolute;
  top: -40px;
  right: -40px;
  width: 160px;
  height: 160px;
  pointer-events: none;
  border-radius: 50%;
}

.glow-indigo { background: radial-gradient(circle, rgba(79, 70, 229, 0.14) 0%, transparent 70%); }
.glow-blue { background: radial-gradient(circle, rgba(37, 99, 235, 0.14) 0%, transparent 70%); }
.glow-cyan { background: radial-gradient(circle, rgba(2, 132, 199, 0.14) 0%, transparent 70%); }
.glow-purple { background: radial-gradient(circle, rgba(124, 58, 237, 0.14) 0%, transparent 70%); }
.glow-emerald { background: radial-gradient(circle, rgba(5, 150, 105, 0.14) 0%, transparent 70%); }
.glow-rose { background: radial-gradient(circle, rgba(225, 29, 72, 0.14) 0%, transparent 70%); }
.glow-teal { background: radial-gradient(circle, rgba(13, 148, 136, 0.14) 0%, transparent 70%); }

/* Member Head (Modern Horizontal Layout) */
.member-head {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
}

.photo-wrapper {
  width: 84px;
  height: 84px;
  min-width: 84px;
  border-radius: 16px;
  overflow: hidden;
  background: #F1F5F9;
  border: 1.5px solid #E2E8F0;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
}

.member-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-photo-fallback {
  width: 100%;
  height: 100%;
  background: #0F172A;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.fallback-initials {
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: 0.5px;
}

.fallback-icon {
  font-size: 0.8rem;
}

.member-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* Department Badge Variants */
.dept-badge {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  border: 1px solid;
  margin-bottom: 0.4rem;
}

.badge-indigo { color: #4F46E5; background: rgba(79, 70, 229, 0.08); border-color: rgba(79, 70, 229, 0.2); }
.badge-blue { color: #2563EB; background: rgba(37, 99, 235, 0.08); border-color: rgba(37, 99, 235, 0.2); }
.badge-cyan { color: #0284C7; background: rgba(2, 132, 199, 0.08); border-color: rgba(2, 132, 199, 0.2); }
.badge-purple { color: #7C3AED; background: rgba(124, 58, 237, 0.08); border-color: rgba(124, 58, 237, 0.2); }
.badge-emerald { color: #059669; background: rgba(5, 150, 105, 0.08); border-color: rgba(5, 150, 105, 0.2); }
.badge-rose { color: #E11D48; background: rgba(225, 29, 72, 0.08); border-color: rgba(225, 29, 72, 0.2); }
.badge-teal { color: #0D9488; background: rgba(13, 148, 136, 0.08); border-color: rgba(13, 148, 136, 0.2); }

.member-name {
  font-size: 1.15rem;
  font-weight: 800;
  color: #1E293B;
  margin: 0 0 0.2rem 0;
  line-height: 1.3;
}

.member-role {
  font-size: 0.825rem;
  font-weight: 600;
  color: #64748B;
  margin: 0;
  line-height: 1.4;
}

/* Member Body */
.member-body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.member-bio {
  font-size: 0.875rem;
  color: #64748B;
  line-height: 1.6;
  margin: 0 0 1.25rem 0;
}

.member-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.5rem;
}

.skill-tag {
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  color: #475569;
  font-size: 0.725rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.skill-tag:hover {
  background: rgba(37, 99, 235, 0.06);
  border-color: rgba(37, 99, 235, 0.2);
  color: #2563EB;
}

/* Member Footer */
.member-footer {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 1rem;
  border-top: 1px solid #F1F5F9;
}

.member-socials {
  display: flex;
  gap: 0.5rem;
}

.social-btn {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  color: #64748B;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  text-decoration: none;
}

.social-btn:hover {
  color: #FFFFFF;
  transform: translateY(-2px);
}

.social-btn.linkedin:hover {
  background: #0A66C2;
  border-color: #0A66C2;
}

.social-btn.github:hover {
  background: #1E293B;
  border-color: #1E293B;
}

.social-btn.email:hover {
  background: #EA4335;
  border-color: #EA4335;
}

/* Responsive */
@media (max-width: 640px) {
  .page-banner {
    padding: 3rem 0 2rem;
  }
  .banner-title {
    font-size: 2rem;
  }
  .banner-header-meta {
    gap: 0.75rem;
  }
  .team-card {
    padding: 1.5rem;
  }
}
</style>