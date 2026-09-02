<template>
  <div class="home-page">
    <!-- 1. HERO SECTION -->
    <section id="home" class="hero-section">
      <div class="hero-orb hero-orb-1" aria-hidden="true"></div>
      <div class="hero-orb hero-orb-2" aria-hidden="true"></div>
      <div class="hero-orb hero-orb-3" aria-hidden="true"></div>
      <div class="container">
        <div class="hero-grid">
          <div>
            <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1.5rem;">
              <span class="country-pill" style="border-color: var(--logo-purple); color: var(--logo-purple);">
                🇧🇩 Corporate Office: Rangpur, Bangladesh
              </span>
              <span class="country-pill">
                🌐 International Clients: 🇺🇸 USA | 🇨🇦 CAN | 🇬🇧 UK | 🇦🇪 UAE
              </span>
            </div>

            <h1 class="hero-title">
              Enterprise Digital Power.<br>
              <span class="text-gradient">Engineered for Scale.</span>
            </h1>

            <p class="hero-subtitle">
              NSM Limited is a premier RJSC Registered Private Limited Company, BASIS Member, & Official Crossref Sponsoring Organization. We design, architect, and deploy high-availability Enterprise ERP Systems, Cloud SaaS/PaaS, IoT Telematics, and Crossref DOI Registration Services.
            </p>

            <div class="hero-actions">
              <a href="tel:+8801891151715" class="btn btn-call-now btn-lg btn-pulse">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>Call Now: +8801891151715</span>
              </a>
              <a href="#contact-us" @click.prevent="scrollTo('contact-us')" class="btn btn-primary btn-lg">
                <span>Book Consultation</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>

            <div class="hero-stats-row">
              <div>
                <div class="stat-number"><AnimatedNumber value="100+" /></div>
                <div class="stat-label">Enterprise Deployments</div>
              </div>
              <div>
                <div class="stat-number"><AnimatedNumber value="99.99%" /></div>
                <div class="stat-label">SLA Uptime Commitment</div>
              </div>
              <div>
                <div class="stat-number">24/7</div>
                <div class="stat-label">Global Engineering Support</div>
              </div>
            </div>
          </div>

          <!-- Brain Visual Card -->
          <div class="hero-visual-card cyber-corner-box">
            <div style="width: 100%; display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); border-bottom: 1px solid var(--border-light); padding-bottom: 0.75rem; margin-bottom: 1rem;">
              <span style="color: var(--logo-purple); font-weight: 700;">● ENTERPRISE SYSTEM ONLINE</span>
              <span>TLS v1.3 SECURE</span>
            </div>

            <BrainHeroVisual />

            <div style="text-align: center; margin-top: 1.5rem;">
              <div class="section-tag" style="margin-bottom: 0.5rem;">
                <span>The Power of Next Generation</span>
              </div>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">AI Analytics • Multi-Tenant Microservices • Crossref DOI Desk</p>
              <router-link to="/crossref-doi-services" class="btn btn-primary btn-sm" style="width: 100%; background: linear-gradient(135deg, #E11D48 0%, #4B53C6 100%);">Get Crossref Member Prefix ➔</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- 2. GOVERNMENT & NATIONAL FOOTPRINT (TRUSTED BY NATIONAL LEADERS) -->
    <section id="clients" class="section-padding institutional-highlight-section">
      <div class="section-ambient-orb ambient-orb-emerald" style="width: 420px; height: 420px; top: -80px; left: -120px; animation-delay: -3s;" aria-hidden="true"></div>
      <div class="section-ambient-orb ambient-orb-sapphire" style="width: 360px; height: 360px; bottom: -80px; right: -90px; animation-delay: -8s;" aria-hidden="true"></div>
      <div class="container" style="position: relative; z-index: 1;">
        <!-- Section Header -->
        <div class="section-header" style="text-align: center; max-width: 840px; margin: 0 auto 2.5rem;">
          <span class="section-tag" style="border-color: #10B981; color: #059669; background: rgba(16, 185, 129, 0.08);">
            <span class="live-dot" style="background: #10B981;"></span>
            <span>Government & National Footprint</span>
          </span>
          <h2 class="section-title">
            Trusted by <span class="text-gradient">National Leaders</span>
          </h2>
          <p class="section-subtitle" style="margin-bottom: 0;">
            Powering Bangladesh's premier Government Medical Colleges, Military Universities, and Leading Conglomerates with high-availability enterprise ERP systems.
          </p>
        </div>

        <!-- Institutional Metrics Impact Bar -->
        <div class="institutional-metrics-bar">
          <div class="metric-highlight-card medical-metric">
            <div class="metric-accent-bar" style="background: linear-gradient(90deg, #2563EB, #38BDF8);"></div>
            <div class="metric-icon-box">
              <img src="/images/metrics/medical.svg" alt="Medical Colleges" width="48" height="48" loading="lazy" />
            </div>
            <div class="metric-info">
              <div class="metric-val"><AnimatedNumber value="10+" /></div>
              <div class="metric-lbl">Govt. Medical Colleges</div>
            </div>
          </div>

          <div class="metric-highlight-card deployment-metric">
            <div class="metric-accent-bar" style="background: linear-gradient(90deg, #10B981, #34D399);"></div>
            <div class="metric-icon-box">
              <img src="/images/metrics/shield.svg" alt="Verified Deployments" width="48" height="48" loading="lazy" />
            </div>
            <div class="metric-info">
              <div class="metric-val"><AnimatedNumber value="100%" /></div>
              <div class="metric-lbl">Verified Deployments</div>
            </div>
          </div>

          <div class="metric-highlight-card uptime-metric">
            <div class="metric-accent-bar" style="background: linear-gradient(90deg, #8B5CF6, #A78BFA);"></div>
            <div class="metric-icon-box">
              <img src="/images/metrics/uptime.svg" alt="Operational SLA Uptime" width="48" height="48" loading="lazy" />
            </div>
            <div class="metric-info">
              <div class="metric-val"><AnimatedNumber value="99.99%" /></div>
              <div class="metric-lbl">Operational SLA Uptime</div>
            </div>
          </div>

          <div class="metric-highlight-card users-metric">
            <div class="metric-accent-bar" style="background: linear-gradient(90deg, #E11D48, #FB7185);"></div>
            <div class="metric-icon-box">
              <img src="/images/metrics/users.svg" alt="Active Students & Staff" width="48" height="48" loading="lazy" />
            </div>
            <div class="metric-info">
              <div class="metric-val"><AnimatedNumber value="50,000+" /></div>
              <div class="metric-lbl">Active Students & Staff</div>
            </div>
          </div>
        </div>

        <!-- Institutional Client Cards Grid -->
        <div class="client-logo-grid">
          <div 
            v-for="c in clientsList" 
            :key="c.id" 
            class="client-logo-card"
          >
            <div class="card-accent-line" :style="{ background: c.systemColor || '#2563EB' }"></div>
            
            <div class="client-card-header">
              <div class="client-logo-stage">
                <ClientLogo :client="c.id" :size="48" />
              </div>
            </div>

            <div class="client-card-body">
              <h3 class="client-name">{{ c.name }}</h3>
              <div class="client-industry-lbl">
                <img src="/images/icons/gov-institution.svg" alt="Institution" width="14" height="14" loading="lazy" />
                <span>{{ c.industry }}</span>
              </div>
            </div>

            <div class="client-card-footer">
              <div class="client-system-chip" :style="{ color: c.systemColor, background: c.systemColor + '12', borderColor: c.systemColor + '30' }">
                <img v-if="c.systemIconImg" :src="c.systemIconImg" :alt="c.system" width="14" height="14" loading="lazy" />
                <span v-else>{{ c.systemIcon }}</span>
                <span>{{ c.system }}</span>
              </div>
              <div class="client-loc-lbl">
                <img src="/images/icons/location-pin.svg" alt="Location" width="13" height="13" loading="lazy" />
                <span>{{ c.location }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- View All Clients Button -->
        <div style="text-align: center; margin-top: 3.5rem;">
          <router-link to="/our-clients" class="btn btn-view-all-clients">
            <span>Explore All 15+ Enterprise Deployments</span>
            <span class="btn-corner-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </router-link>
        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- 3. ENTERPRISE TECHNOLOGY STACK -->
    <section class="section-padding tech-stack-section">
      <div class="section-ambient-orb ambient-orb-cyan" style="width: 380px; height: 380px; top: 10%; right: -80px; animation-delay: -2s;" aria-hidden="true"></div>
      <div class="section-ambient-orb ambient-orb-purple" style="width: 340px; height: 340px; bottom: 5%; left: -80px; animation-delay: -11s;" aria-hidden="true"></div>
      <div class="container" style="position: relative; z-index: 1;">
        <div class="section-header" style="max-width: 720px; margin: 0 auto 2.75rem; text-align: center;">
          <span class="section-tag" style="border-color: var(--logo-blue); color: var(--logo-blue); background: rgba(37, 99, 235, 0.06);">
            <span class="live-dot" style="background: var(--logo-blue);"></span> Modern Engineering Standards
          </span>
          <h2 class="section-title">Enterprise <span class="text-gradient">Technology Stack</span></h2>
          <p class="section-subtitle" style="margin-bottom: 0;">
            Battle-tested frameworks, robust multi-tenant architectures, and high-availability cloud infrastructure.
          </p>
        </div>

        <div class="tech-stack-grid">
          <!-- 1. Frontend -->
          <div class="tech-category-card">
            <div class="tech-card-bar" style="background: linear-gradient(90deg, #3B82F6, #6366F1);"></div>
            <div class="tech-category-header">
              <div class="tech-category-icon">
                <img src="/images/tech/frontend.svg" alt="Frontend Engineering" width="46" height="46" loading="lazy" />
              </div>
              <div>
                <div class="tech-category-title">Frontend</div>
                <span class="tech-category-count">Reactive & Modern</span>
              </div>
            </div>
            <div class="tech-pills-wrapper">
              <span class="tech-pill">Vue 3</span>
              <span class="tech-pill">React.js</span>
              <span class="tech-pill">Next.js</span>
              <span class="tech-pill">Vite</span>
              <span class="tech-pill">TypeScript</span>
              <span class="tech-pill">Tailwind CSS</span>
              <span class="tech-pill">Bootstrap 5</span>
              <span class="tech-pill">Modern SCSS</span>
            </div>
          </div>

          <!-- 2. Backend -->
          <div class="tech-category-card">
            <div class="tech-card-bar" style="background: linear-gradient(90deg, #8B5CF6, #A855F7);"></div>
            <div class="tech-category-header">
              <div class="tech-category-icon">
                <img src="/images/tech/backend.svg" alt="Backend Architecture" width="46" height="46" loading="lazy" />
              </div>
              <div>
                <div class="tech-category-title">Backend</div>
                <span class="tech-category-count">High-Throughput</span>
              </div>
            </div>
            <div class="tech-pills-wrapper">
              <span class="tech-pill">Node.js</span>
              <span class="tech-pill">FastAPI</span>
              <span class="tech-pill">Laravel</span>
              <span class="tech-pill">Python 3.12</span>
              <span class="tech-pill">PHP 8.3</span>
              <span class="tech-pill">Nest.js</span>
              <span class="tech-pill">Express.js</span>
              <span class="tech-pill">REST & GraphQL</span>
            </div>
          </div>

          <!-- 3. Databases -->
          <div class="tech-category-card">
            <div class="tech-card-bar" style="background: linear-gradient(90deg, #10B981, #14B8A6);"></div>
            <div class="tech-category-header">
              <div class="tech-category-icon">
                <img src="/images/tech/databases.svg" alt="Enterprise Databases" width="46" height="46" loading="lazy" />
              </div>
              <div>
                <div class="tech-category-title">Databases</div>
                <span class="tech-category-count">Enterprise Scale</span>
              </div>
            </div>
            <div class="tech-pills-wrapper">
              <span class="tech-pill">PostgreSQL</span>
              <span class="tech-pill">MySQL</span>
              <span class="tech-pill">Redis Cache</span>
              <span class="tech-pill">MongoDB Atlas</span>
              <span class="tech-pill">Elasticsearch</span>
              <span class="tech-pill">MariaDB</span>
            </div>
          </div>

          <!-- 4. DevOps & Cloud -->
          <div class="tech-category-card">
            <div class="tech-card-bar" style="background: linear-gradient(90deg, #F43F5E, #EC4899);"></div>
            <div class="tech-category-header">
              <div class="tech-category-icon">
                <img src="/images/tech/devops-cloud.svg" alt="DevOps & Cloud Infrastructure" width="46" height="46" loading="lazy" />
              </div>
              <div>
                <div class="tech-category-title">DevOps & Cloud</div>
                <span class="tech-category-count">Zero-Downtime</span>
              </div>
            </div>
            <div class="tech-pills-wrapper">
              <span class="tech-pill">Docker & K8s</span>
              <span class="tech-pill">AWS Cloud</span>
              <span class="tech-pill">DigitalOcean</span>
              <span class="tech-pill">CI/CD Actions</span>
              <span class="tech-pill">ESP32 Firmware</span>
              <span class="tech-pill">MQTT & Telemetry</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- 4. 12 SERVICES GRID (Specialized Technology Engineering Capabilities) -->
    <section id="services" class="section-padding services-overview-section">
      <div class="section-ambient-orb ambient-orb-rose" style="width: 400px; height: 400px; top: -60px; left: -100px; animation-delay: -4s;" aria-hidden="true"></div>
      <div class="section-ambient-orb ambient-orb-purple" style="width: 360px; height: 360px; top: 35%; right: -90px; animation-delay: -9s;" aria-hidden="true"></div>
      <div class="section-ambient-orb ambient-orb-cyan" style="width: 320px; height: 320px; bottom: -50px; left: 25%; animation-delay: -14s;" aria-hidden="true"></div>
      <div class="container" style="position: relative; z-index: 1;">
        <div class="section-header" style="text-align: center; margin-bottom: 3.5rem;">
          <span class="section-tag"><span class="live-dot"></span> 12 Core Capabilities</span>
          <h2 class="section-title">Specialized <span class="text-gradient">Engineering Services</span></h2>
          <p class="section-subtitle" style="max-width: 780px; margin: 0 auto;">Enterprise software, custom ERP platforms, and cloud solutions engineered for global scale.</p>
        </div>

        <div class="services-grid">
          <!-- 1. Crossref DOI & Sponsoring -->
          <div class="service-card crossref-highlight">
            <div class="service-icon-wrapper">
              <img src="/images/services/crossref-doi.svg" alt="Crossref DOI & Sponsoring" width="48" height="48" loading="lazy" />
            </div>
            <h4 style="color: #BE123C;">Crossref DOI & Sponsoring</h4>
            <p>Official Sponsoring Org allocating Publisher Member Prefixes, DOI deposits, & XML 5.3.1 indexing.</p>
            <router-link to="/crossref-doi-services" class="service-link" style="color: #E11D48;">
              <span>Explore DOI Desk</span>
              <span>&rarr;</span>
            </router-link>
          </div>

          <!-- 2. Custom Web Applications -->
          <div class="service-card">
            <div class="service-icon-wrapper">
              <img src="/images/services/custom-web.svg" alt="Custom Web Applications" width="48" height="48" loading="lazy" />
            </div>
            <h4>Custom Web Applications</h4>
            <p>High-concurrency modern web apps built with React, Next.js, Vue, Laravel, and Python FastAPI.</p>
            <router-link to="/services/custom-web-application" class="service-link" style="color: #7C3AED;">
              <span>Web App Engineering</span>
              <span>&rarr;</span>
            </router-link>
          </div>

          <!-- 3. Mobile Apps (Android & iOS) -->
          <div class="service-card">
            <div class="service-icon-wrapper">
              <img src="/images/services/mobile-apps.svg" alt="Mobile Apps Development" width="48" height="48" loading="lazy" />
            </div>
            <h4>Mobile Apps (Android & iOS)</h4>
            <p>Native Kotlin, Swift, & cross-platform Flutter mobile applications with offline DB synchronization.</p>
            <router-link to="/services/mobile-app-development" class="service-link" style="color: #2563EB;">
              <span>Mobile Engineering</span>
              <span>&rarr;</span>
            </router-link>
          </div>

          <!-- 4. SaaS & PaaS Cloud Platforms -->
          <div class="service-card">
            <div class="service-icon-wrapper">
              <img src="/images/services/cloud-saas.svg" alt="SaaS & PaaS Cloud Platforms" width="48" height="48" loading="lazy" />
            </div>
            <h4>SaaS & PaaS Cloud Platforms</h4>
            <p>Multi-tenant cloud architecture, subscription billing engines, AWS/DigitalOcean infrastructure.</p>
            <router-link to="/services/saas-paas-development" class="service-link" style="color: #EA580C;">
              <span>Cloud Architecture</span>
              <span>&rarr;</span>
            </router-link>
          </div>

          <!-- 5. Enterprise ERP Solutions -->
          <div class="service-card">
            <div class="service-icon-wrapper">
              <img src="/images/services/enterprise-erp.svg" alt="Enterprise ERP Solutions" width="48" height="48" loading="lazy" />
            </div>
            <h4>Enterprise ERP Solutions</h4>
            <p>Custom modular ERP systems unifying finances, multi-warehouse stock, supply chain, & HR payroll.</p>
            <router-link to="/services/enterprise-erp-solutions" class="service-link" style="color: #4F46E5;">
              <span>Explore ERP Solution</span>
              <span>&rarr;</span>
            </router-link>
          </div>

          <!-- 6. IT Audit & Consulting -->
          <div class="service-card">
            <div class="service-icon-wrapper">
              <img src="/images/services/it-audit.svg" alt="IT Audit & Consulting" width="48" height="48" loading="lazy" />
            </div>
            <h4>IT Audit & Consulting</h4>
            <p>Rigorous technology health audits, codebase security vulnerability reviews, & developer training.</p>
            <router-link to="/services/it-audit-consulting" class="service-link" style="color: #0284C7;">
              <span>Explore IT Audit</span>
              <span>&rarr;</span>
            </router-link>
          </div>

          <!-- 7. Digital Automation -->
          <div class="service-card">
            <div class="service-icon-wrapper">
              <img src="/images/services/digital-automation.svg" alt="Digital Automation" width="48" height="48" loading="lazy" />
            </div>
            <h4>Digital Automation</h4>
            <p>Automating manual business workflows, RPA invoice processing, & digital enterprise transformation.</p>
            <router-link to="/services/digital-transformation-automation" class="service-link" style="color: #D97706;">
              <span>Explore Automation</span>
              <span>&rarr;</span>
            </router-link>
          </div>

          <!-- 8. Custom Software Solutions -->
          <div class="service-card">
            <div class="service-icon-wrapper">
              <img src="/images/services/iot-hardware.svg" alt="Custom Software Solutions" width="48" height="48" loading="lazy" />
            </div>
            <h4>Custom Software Solutions</h4>
            <p>Full-stack web applications, enterprise dashboards &amp; API development with Laravel, Vue.js &amp; Node.js.</p>
            <router-link to="/services/iot-hardware-software" class="service-link" style="color: #0D9488;">
              <span>Explore Software Solutions</span>
              <span>&rarr;</span>
            </router-link>
          </div>

          <!-- 9. CRM Development -->
          <div class="service-card">
            <div class="service-icon-wrapper">
              <img src="/images/services/crm-development.svg" alt="CRM Development" width="48" height="48" loading="lazy" />
            </div>
            <h4>CRM Development</h4>
            <p>Lead pipeline management, sales rep productivity dashboards, customer ticket routing, & triggers.</p>
            <router-link to="/services/crm-development" class="service-link" style="color: #4338CA;">
              <span>Explore CRM Systems</span>
              <span>&rarr;</span>
            </router-link>
          </div>

          <!-- 10. DevOps & Server Infrastructure -->
          <div class="service-card">
            <div class="service-icon-wrapper">
              <img src="/images/services/devops-infrastructure.svg" alt="DevOps & Server Infrastructure" width="48" height="48" loading="lazy" />
            </div>
            <h4>DevOps & Infrastructure</h4>
            <p>High-availability Linux server orchestration, Docker/Kubernetes clusters, & CI/CD deployment.</p>
            <router-link to="/services/networking-server-infrastructure" class="service-link" style="color: #0891B2;">
              <span>Explore DevOps</span>
              <span>&rarr;</span>
            </router-link>
          </div>

          <!-- 11. Website Design & Dev -->
          <div class="service-card">
            <div class="service-icon-wrapper">
              <img src="/images/services/web-design.svg" alt="Website Design & Development" width="48" height="48" loading="lazy" />
            </div>
            <h4>Website Design & Dev</h4>
            <p>State-of-the-art corporate web designs with ultra-fast page speeds, micro-interactions, & modern UI.</p>
            <router-link to="/services/website-design-development" class="service-link" style="color: #8B5CF6;">
              <span>Explore Web Design</span>
              <span>&rarr;</span>
            </router-link>
          </div>

          <!-- 12. Search Engine Optimization (SEO) -->
          <div class="service-card">
            <div class="service-icon-wrapper">
              <img src="/images/services/seo-optimization.svg" alt="Search Engine Optimization" width="48" height="48" loading="lazy" />
            </div>
            <h4>Search Engine Optimization (SEO)</h4>
            <p>Technical Core Web Vitals optimization, JSON-LD Schema markup, & keyword visibility ranking.</p>
            <router-link to="/services/search-engine-optimization" class="service-link" style="color: #16A34A;">
              <span>Explore SEO</span>
              <span>&rarr;</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <div class="section-divider"></div>

    <!-- 5. ENTERPRISE ERP PRODUCTS SUITE -->
    <section id="products" class="section-padding products-suite-section">
      <div class="section-ambient-orb ambient-orb-rose" style="width: 420px; height: 420px; top: 8%; right: -100px; animation-delay: -1s;" aria-hidden="true"></div>
      <div class="section-ambient-orb ambient-orb-sapphire" style="width: 400px; height: 400px; top: 40%; left: -100px; animation-delay: -7s;" aria-hidden="true"></div>
      <div class="section-ambient-orb ambient-orb-purple" style="width: 380px; height: 380px; bottom: 5%; right: -80px; animation-delay: -13s;" aria-hidden="true"></div>
      <div class="container" style="position: relative; z-index: 1;">
        <div class="section-header" style="text-align: center; max-width: 760px; margin: 0 auto 3rem;">
          <span class="section-tag" style="border-color: var(--logo-purple); color: var(--logo-purple); background: rgba(75, 83, 198, 0.06);">
            <span class="live-dot" style="background: var(--logo-purple);"></span> Flagship Enterprise Systems
          </span>
          <h2 class="section-title">Enterprise <span class="text-gradient">ERP Suite</span></h2>
          <p class="section-subtitle" style="margin-bottom: 0;">
            Mission-critical ERP platforms engineered for hospitals, supply chains, academic institutions, and hospitality.
          </p>
        </div>

        <!-- 3 Featured ERP Showcase Sections -->
        <div class="erp-showcase-container" style="margin-bottom: 5rem;">

          <!-- 1. MEDICAL COLLEGE MANAGEMENT ERP -->
          <div class="erp-highlight-card hospital-theme" id="hospital-erp-showcase">
            <div class="erp-highlight-grid">
              <div>
                <h3 class="erp-highlight-title">Medical College Management System</h3>
                <p class="erp-highlight-desc">
                  Specialized academic, clinical rotation, and institutional administration ERP engineered for Government and Private Medical Colleges. Automates MBBS/BDS student admissions, biometric lecture attendance, clinical ward posting logbooks, term & professional (Prof) exam tabulation, online fees & exam form fillup payment gateway, medical library, and BM&DC/DGME compliance.
                </p>

                <!-- Feature Pills Grid -->
                <div class="erp-feature-pills-grid">
                  <div class="erp-feature-pill">
                    <span class="pill-icon"><img src="/images/products/admissions.svg" alt="Admissions" width="20" height="20" loading="lazy" /></span>
                    <span>MBBS / BDS Student Admissions & Profiles</span>
                  </div>
                  <div class="erp-feature-pill">
                    <span class="pill-icon"><img src="/images/products/clinical.svg" alt="Clinical" width="20" height="20" loading="lazy" /></span>
                    <span>Clinical Ward Rotations & Logbook Tracking</span>
                  </div>
                  <div class="erp-feature-pill">
                    <span class="pill-icon"><img src="/images/products/exam-tabulation.svg" alt="Exam Grading" width="20" height="20" loading="lazy" /></span>
                    <span>Term & Professional (Prof) Exam Grading</span>
                  </div>
                  <div class="erp-feature-pill">
                    <span class="pill-icon"><img src="/images/products/biometric-rfid.svg" alt="RFID Attendance" width="20" height="20" loading="lazy" /></span>
                    <span>Biometric RFID Attendance for Medical Students</span>
                  </div>
                  <div class="erp-feature-pill">
                    <span class="pill-icon"><img src="/images/products/fee-payment.svg" alt="Online Payment" width="20" height="20" loading="lazy" /></span>
                    <span>Online Fees & Exam Form Fillup Payment</span>
                  </div>
                  <div class="erp-feature-pill">
                    <span class="pill-icon"><img src="/images/products/library.svg" alt="Medical Library" width="20" height="20" loading="lazy" /></span>
                    <span>Medical Library & Journal Research Desk</span>
                  </div>
                </div>

                <!-- Stats Row -->
                <div class="erp-stats-row">
                  <div class="erp-stat-item">
                    <div class="erp-stat-val" style="color: #E11D48;">10+ Govt.</div>
                    <div class="erp-stat-lbl">Medical Colleges</div>
                  </div>
                  <div class="erp-stat-item">
                    <div class="erp-stat-val" style="color: var(--logo-purple);">15,000+</div>
                    <div class="erp-stat-lbl">MBBS Students & Doctors</div>
                  </div>
                  <div class="erp-stat-item">
                    <div class="erp-stat-val" style="color: var(--logo-blue);">99.99%</div>
                    <div class="erp-stat-lbl">Uptime SLA Guaranteed</div>
                  </div>
                </div>

                <!-- Action CTAs -->
                <div style="display: flex; gap: 0.85rem; flex-wrap: wrap; align-items: center;">
                  <a href="tel:+8801891151715" class="btn btn-call-now btn-sm btn-pulse">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <span>Medical Desk: +8801891151715</span>
                  </a>
                  <router-link to="/products/academic-management-system" class="btn btn-primary btn-sm">
                    <span>Explore Medical College ERP Specs &rarr;</span>
                  </router-link>
                </div>
              </div>

              <!-- Visual Preview Card -->
              <div class="erp-preview-card">
                <div class="erp-preview-header">
                  <div class="erp-preview-icon">
                    <img src="/images/products/med-college-icon.svg" alt="Medical College Academic Suite" width="52" height="52" loading="lazy" />
                  </div>
                  <div>
                    <div class="erp-preview-title">Medical College Academic Suite</div>
                    <div class="erp-preview-subtitle">DGME & BM&DC Compliant</div>
                  </div>
                </div>
                <div class="erp-preview-list">
                  <div class="erp-preview-item">
                    <span class="erp-check">✓</span>
                    <div>
                      <div class="erp-item-title">MBBS Student Enrollment</div>
                      <div class="erp-item-desc">1st to Final Year, fully active</div>
                    </div>
                  </div>
                  <div class="erp-preview-item">
                    <span class="erp-check">✓</span>
                    <div>
                      <div class="erp-item-title">Clinical Ward Rotations</div>
                      <div class="erp-item-desc">Medicine, Surgery & Gynae logbooks</div>
                    </div>
                  </div>
                  <div class="erp-preview-item">
                    <span class="erp-check">✓</span>
                    <div>
                      <div class="erp-item-title">Prof Exam Result Tabulation</div>
                      <div class="erp-item-desc">Automated marks & GPA calculation</div>
                    </div>
                  </div>
                  <div class="erp-preview-item">
                    <span class="erp-check">✓</span>
                    <div>
                      <div class="erp-item-title">Intern Doctor Posting Log</div>
                      <div class="erp-item-desc">Clinical rotation sync, always up to date</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 2. INVENTORY & POS MANAGEMENT ERP -->
          <div class="erp-highlight-card inventory-theme" id="inventory-erp-showcase">
            <div class="erp-highlight-grid">
              <div>
                <h3 class="erp-highlight-title">Inventory & POS Management System (Supply Chain & Retail ERP)</h3>
                <p class="erp-highlight-desc">
                  High-capacity warehouse logistics, retail POS touch billing, inventory telematics, and automated procurement platform. Enables multi-branch retail stores, corporations, distributors, and manufacturers to maintain ultra-fast POS checkout, flawless stock valuation, SKU barcode tracking, and ledger accounting sync.
                </p>

                <div class="erp-feature-pills-grid">
                  <div class="erp-feature-pill">
                    <span class="pill-icon"><img src="/images/products/pos-touch.svg" alt="Retail POS" width="20" height="20" loading="lazy" /></span>
                    <span>Retail POS & Ultra-Fast Barcode Billing</span>
                  </div>
                  <div class="erp-feature-pill">
                    <span class="pill-icon"><img src="/images/products/warehouse.svg" alt="Multi Warehouse" width="20" height="20" loading="lazy" /></span>
                    <span>Multi-Warehouse Batch & SKU Tracking</span>
                  </div>
                  <div class="erp-feature-pill">
                    <span class="pill-icon"><img src="/images/products/purchase-orders.svg" alt="Purchase Orders" width="20" height="20" loading="lazy" /></span>
                    <span>3-Way Purchase Order Matching</span>
                  </div>
                  <div class="erp-feature-pill">
                    <span class="pill-icon"><img src="/images/products/accounting-ledger.svg" alt="COGS Ledger" width="20" height="20" loading="lazy" /></span>
                    <span>Automated COGS & Ledger Posting</span>
                  </div>
                </div>

                <div style="display: flex; gap: 0.85rem; flex-wrap: wrap; align-items: center;">
                  <a href="tel:+8801891151717" class="btn btn-call-now btn-sm btn-pulse">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <span>Inventory Desk: +8801891151717</span>
                  </a>
                  <router-link to="/products/inventory-management-system" class="btn btn-primary btn-sm">
                    <span>Explore Inventory & POS Specs &rarr;</span>
                  </router-link>
                </div>
              </div>

              <div class="erp-preview-card">
                <div class="erp-preview-header">
                  <div class="erp-preview-icon">
                    <img src="/images/products/inventory-icon.svg" alt="Warehouse Suite" width="52" height="52" loading="lazy" />
                  </div>
                  <div>
                    <div class="erp-preview-title">Warehouse & POS Suite</div>
                    <div class="erp-preview-subtitle">Real-Time Sync</div>
                  </div>
                </div>
                <div class="erp-preview-list">
                  <div class="erp-preview-item">
                    <span class="erp-check">✓</span>
                    <div>
                      <div class="erp-item-title">Retail POS Fast Billing</div>
                      <div class="erp-item-desc">Touch screen & barcode checkout</div>
                    </div>
                  </div>
                  <div class="erp-preview-item">
                    <span class="erp-check">✓</span>
                    <div>
                      <div class="erp-item-title">Multi-Warehouse Reorder</div>
                      <div class="erp-item-desc">Automated purchase order trigger</div>
                    </div>
                  </div>
                  <div class="erp-preview-item">
                    <span class="erp-check">✓</span>
                    <div>
                      <div class="erp-item-title">Barcode & QR Auditing</div>
                      <div class="erp-item-desc">Handheld scanner sync, instantly</div>
                    </div>
                  </div>
                  <div class="erp-preview-item">
                    <span class="erp-check">✓</span>
                    <div>
                      <div class="erp-item-title">Financial Ledger Posting</div>
                      <div class="erp-item-desc">Double-entry, always balanced</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 3. ACADEMIC MANAGEMENT ERP -->
          <div class="erp-highlight-card academic-theme" id="academic-erp-showcase">
            <div class="erp-highlight-grid">
              <div>
                <h3 class="erp-highlight-title">Academic Management System (School & College ERP)</h3>
                <p class="erp-highlight-desc">
                  Comprehensive digital campus ERP engineered for Schools, Colleges, and Universities. Automates student admissions, biometric RFID attendance with instant parent SMS notifications, automated 1st/2nd/3rd merit rank & GPA result processing, online tuition fee payments (bKash/Nagad/Bank), school asset & equipment inventory, and complete income-expense accounting ledger.
                </p>

                <div class="erp-feature-pills-grid">
                  <div class="erp-feature-pill">
                    <span class="pill-icon"><img src="/images/products/biometric-rfid.svg" alt="RFID Attendance" width="20" height="20" loading="lazy" /></span>
                    <span>Biometric RFID Attendance & Parent SMS</span>
                  </div>
                  <div class="erp-feature-pill">
                    <span class="pill-icon"><img src="/images/products/fee-payment.svg" alt="Online Payment" width="20" height="20" loading="lazy" /></span>
                    <span>Online Tuition & Fee Payment (bKash/Bank)</span>
                  </div>
                  <div class="erp-feature-pill">
                    <span class="pill-icon"><img src="/images/products/merit-rank.svg" alt="Auto Merit Rank" width="20" height="20" loading="lazy" /></span>
                    <span>Auto 1st/2nd/3rd Merit Rank & GPA Results</span>
                  </div>
                  <div class="erp-feature-pill">
                    <span class="pill-icon"><img src="/images/products/asset-manager.svg" alt="Campus Asset Manager" width="20" height="20" loading="lazy" /></span>
                    <span>School Inventory & Campus Asset Manager</span>
                  </div>
                  <div class="erp-feature-pill">
                    <span class="pill-icon"><img src="/images/products/accounting-ledger.svg" alt="Accounts Ledger" width="20" height="20" loading="lazy" /></span>
                    <span>Daily Income, Expense & Accounts Ledger</span>
                  </div>
                  <div class="erp-feature-pill">
                    <span class="pill-icon"><img src="/images/products/library.svg" alt="Digital Library" width="20" height="20" loading="lazy" /></span>
                    <span>Digital Library & Barcode Book Circulation</span>
                  </div>
                </div>

                <div style="display: flex; gap: 0.85rem; flex-wrap: wrap; align-items: center;">
                  <a href="tel:+8801891151715" class="btn btn-call-now btn-sm btn-pulse">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <span>Campus Support Desk: +8801891151715</span>
                  </a>
                  <router-link to="/products/academic-management-system" class="btn btn-primary btn-sm">
                    <span>Explore Academic ERP Specs &rarr;</span>
                  </router-link>
                </div>
              </div>

              <div class="erp-preview-card">
                <div class="erp-preview-header">
                  <div class="erp-preview-icon">
                    <img src="/images/products/academic-icon.svg" alt="Campus Ops" width="52" height="52" loading="lazy" />
                  </div>
                  <div>
                    <div class="erp-preview-title">School & Campus Ops</div>
                    <div class="erp-preview-subtitle">BAIUST & College Proven</div>
                  </div>
                </div>
                <div class="erp-preview-list">
                  <div class="erp-preview-item">
                    <span class="erp-check">✓</span>
                    <div>
                      <div class="erp-item-title">Biometric RFID Attendance</div>
                      <div class="erp-item-desc">Instant parent SMS sync</div>
                    </div>
                  </div>
                  <div class="erp-preview-item">
                    <span class="erp-check">✓</span>
                    <div>
                      <div class="erp-item-title">Auto Merit List & GPA</div>
                      <div class="erp-item-desc">1st / 2nd / 3rd position ranking</div>
                    </div>
                  </div>
                  <div class="erp-preview-item">
                    <span class="erp-check">✓</span>
                    <div>
                      <div class="erp-item-title">Online Fees & Payments</div>
                      <div class="erp-item-desc">bKash, Nagad & Bank gateway</div>
                    </div>
                  </div>
                  <div class="erp-preview-item">
                    <span class="erp-check">✓</span>
                    <div>
                      <div class="erp-item-title">Campus Inventory & Expense</div>
                      <div class="erp-item-desc">Real-time ledger & stock tracking</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Global Crossref DOI Conversion Banner -->
    <section class="global-cta-section" style="padding: 3rem 0 5rem;">
      <div class="container">
        <div class="global-cta-banner" style="background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 60%, #881337 100%);">
          <div class="global-cta-content">
            <div class="global-cta-badges">
              <span class="global-cta-badge" style="background: rgba(225, 29, 72, 0.2); border-color: rgba(225, 29, 72, 0.4); color: #FECDD3;">📑 Official Crossref Sponsor</span>
              <span class="global-cta-badge">🌐 Global Research Citation Index</span>
            </div>
            <h2>Ready to Assign International DOIs to Your Research Articles?</h2>
            <p>Partner with NSM Limited to get your official publisher member prefix, register article DOIs, and integrate OJS automated metadata deposits.</p>
          </div>
          <div class="global-cta-actions">
            <a href="tel:+8801891151715" class="btn btn-call-now btn-lg btn-pulse">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Call Now: +8801891151715</span>
            </a>
            <router-link to="/contact" class="btn btn-primary btn-lg" style="background: linear-gradient(135deg, #E11D48 0%, #4B53C6 100%);">Contact Crossref Desk</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import BrainHeroVisual from '../components/common/BrainHeroVisual.vue'
import ClientLogo from '../components/common/ClientLogo.vue'
import BasisBadge from '../components/common/BasisBadge.vue'
import RjscBadge from '../components/common/RjscBadge.vue'
import CrossrefBadge from '../components/common/CrossrefBadge.vue'
import AnimatedNumber from '../components/common/AnimatedNumber.vue'

const clientsList = [
  {
    id: 'dmc',
    name: 'Dhaka Medical College',
    category: 'medical',
    industry: 'Government Medical College',
    system: 'Academic Management System',
    systemIcon: '🎓',
    systemIconImg: '/images/icons/system-academic.svg',
    systemColor: '#2563EB',
    location: 'Dhaka, Bangladesh',
    status: 'Live Production'
  },
  {
    id: 'rpmc',
    name: 'Rangpur Medical College',
    category: 'medical',
    industry: 'Government Medical College',
    system: 'Academic Management System',
    systemIcon: '🎓',
    systemIconImg: '/images/icons/system-academic.svg',
    systemColor: '#894B9E',
    location: 'Rangpur Division',
    status: 'Live Production'
  },
  {
    id: 'dinajpur',
    name: 'Dinajpur Medical College',
    category: 'medical',
    industry: 'Government Medical College',
    system: 'Academic Management System',
    systemIcon: '🎓',
    systemIconImg: '/images/icons/system-academic.svg',
    systemColor: '#0D9488',
    location: 'Dinajpur, Rangpur',
    status: 'Live Production'
  },
  {
    id: 'comilla',
    name: 'Comilla Medical College',
    category: 'medical',
    industry: 'Government Medical College',
    system: 'Academic Management System',
    systemIcon: '🎓',
    systemIconImg: '/images/icons/system-academic.svg',
    systemColor: '#E11D48',
    location: 'Cumilla, Chittagong',
    status: 'Live Production'
  },
  {
    id: 'satkhira',
    name: 'Satkhira Medical College',
    category: 'medical',
    industry: 'Government Medical College',
    system: 'Academic Management System',
    systemIcon: '🎓',
    systemIconImg: '/images/icons/system-academic.svg',
    systemColor: '#4F46E5',
    location: 'Satkhira, Khulna',
    status: 'Live Production'
  },
  {
    id: 'mmc',
    name: 'Mymensingh Medical College',
    category: 'medical',
    industry: 'Government Medical College',
    system: 'Store Management System',
    systemIcon: '📦',
    systemIconImg: '/images/icons/system-store.svg',
    systemColor: '#059669',
    location: 'Mymensingh Division',
    status: 'Live Production'
  },
  {
    id: 'bogura',
    name: 'Bogura Medical College',
    category: 'medical',
    industry: 'Government Medical College',
    system: 'Academic Management System',
    systemIcon: '🎓',
    systemIconImg: '/images/icons/system-academic.svg',
    systemColor: '#D97706',
    location: 'Bogura, Rajshahi',
    status: 'Live Production'
  },
  {
    id: 'nilphamari',
    name: 'Nilphamari Medical College',
    category: 'medical',
    industry: 'Government Medical College',
    system: 'Academic Management System',
    systemIcon: '🎓',
    systemIconImg: '/images/icons/system-academic.svg',
    systemColor: '#0891B2',
    location: 'Nilphamari, Rangpur',
    status: 'Live Production'
  },
  {
    id: 'baiust',
    name: 'Bangladesh Army Int. University',
    category: 'defense',
    industry: 'Military & Defense University',
    system: 'Internship & Industrial Training',
    systemIcon: '🎖️',
    systemIconImg: '/images/icons/system-training.svg',
    systemColor: '#7C3AED',
    location: 'Saidpur, Nilphamari',
    status: 'Verified Partner'
  },
  {
    id: 'rdrs',
    name: 'RDRS Bangladesh',
    category: 'enterprise',
    industry: 'International Development NGO',
    system: 'Enterprise Portal & Automation',
    systemIcon: '🌐',
    systemIconImg: '/images/icons/system-portal.svg',
    systemColor: '#0284C7',
    location: 'Rangpur Division',
    status: 'Live Production'
  },
  {
    id: 'prime',
    name: 'Prime Medical College',
    category: 'medical',
    industry: 'Private Medical College',
    system: 'Medical Journal & DOI Portal',
    systemIcon: '📑',
    systemIconImg: '/images/icons/system-journal.svg',
    systemColor: '#BE123C',
    location: 'Rangpur City',
    status: 'Live Production'
  },
  {
    id: 'sufi',
    name: 'Sufi Group & Properties',
    category: 'enterprise',
    industry: 'Industrial & Real Estate Conglomerate',
    system: 'Corporate ERP & Real Estate',
    systemIcon: '🏢',
    systemIconImg: '/images/icons/system-erp.svg',
    systemColor: '#4338CA',
    location: 'Rangpur City',
    status: 'Enterprise Hub'
  }
]

function scrollTo(id) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
