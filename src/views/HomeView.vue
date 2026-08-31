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

    <!-- 2. GOVERNMENT & NATIONAL FOOTPRINT (TRUSTED BY NATIONAL LEADERS) -->
    <section id="clients" class="section-padding institutional-highlight-section">
      <div class="container">
        <!-- Section Header -->
        <div style="text-align: center; max-width: 820px; margin: 0 auto 1.5rem;">
          <span class="section-tag" style="border-color: #10B981; color: #059669; background: rgba(16, 185, 129, 0.08);">
            <span class="live-dot" style="background: #10B981;"></span>
            <span>Government & National Footprint</span>
          </span>
          <h2 class="section-title" style="margin-bottom: 0;">
            Trusted by <span class="text-gradient">National Leaders</span>
          </h2>
        </div>

        <!-- Institutional Metrics Impact Bar -->
        <div class="institutional-metrics-bar">
          <div class="metric-highlight-card">
            <div class="metric-icon-box" style="background: rgba(37, 99, 235, 0.1); color: #2563EB;">🏥</div>
            <div>
              <div class="metric-val"><AnimatedNumber value="10+" /></div>
              <div class="metric-lbl">Govt. Medical Colleges</div>
            </div>
          </div>
          <div class="metric-highlight-card">
            <div class="metric-icon-box" style="background: rgba(16, 185, 129, 0.1); color: #059669;">🛡️</div>
            <div>
              <div class="metric-val"><AnimatedNumber value="100%" /></div>
              <div class="metric-lbl">Verified National Deployments</div>
            </div>
          </div>
          <div class="metric-highlight-card">
            <div class="metric-icon-box" style="background: rgba(137, 75, 158, 0.1); color: #894B9E;">⚡</div>
            <div>
              <div class="metric-val"><AnimatedNumber value="99.99%" /></div>
              <div class="metric-lbl">Operational SLA Uptime</div>
            </div>
          </div>
          <div class="metric-highlight-card">
            <div class="metric-icon-box" style="background: rgba(225, 29, 72, 0.1); color: #E11D48;">👥</div>
            <div>
              <div class="metric-val"><AnimatedNumber value="50,000+" /></div>
              <div class="metric-lbl">Active Students & Faculty</div>
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
            <div class="client-logo-stage">
              <ClientLogo :client="c.id" :size="48" />
            </div>
            <div class="client-name">{{ c.name }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. ENTERPRISE TECHNOLOGY STACK -->
    <section class="section-padding tech-stack-section">
      <div class="container">
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
              <div class="tech-category-icon" style="color: #3B82F6; background: rgba(59, 130, 246, 0.1);">💻</div>
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
              <div class="tech-category-icon" style="color: #8B5CF6; background: rgba(139, 92, 246, 0.1);">⚙️</div>
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
              <div class="tech-category-icon" style="color: #10B981; background: rgba(16, 185, 129, 0.1);">🗄️</div>
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
              <div class="tech-category-icon" style="color: #F43F5E; background: rgba(244, 63, 94, 0.1);">☁️</div>
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

    <!-- 3. 12 SERVICES GRID (Specialized Technology Engineering Capabilities) -->
    <section id="services" class="section-padding" style="background: var(--bg-surface); border-top: 1px solid var(--border-light); border-bottom: 1px solid var(--border-light);">
      <div class="container">
        <div class="section-header" style="text-align: center; margin-bottom: 3.5rem;">
          <span class="section-tag"><span class="live-dot"></span> 12 Core Capabilities</span>
          <h2 class="section-title">Specialized <span class="text-gradient">Engineering Services</span></h2>
          <p class="section-subtitle" style="max-width: 780px; margin: 0 auto;">Enterprise software, custom ERP platforms, and cloud solutions engineered for global scale.</p>
        </div>

        <div class="services-grid">
          <!-- Crossref DOI -->
          <div class="service-card" style="border-color: rgba(225, 29, 72, 0.4); background: linear-gradient(180deg, rgba(225, 29, 72, 0.03) 0%, #FFFFFF 100%);">
            <div class="service-number" style="color: #E11D48;">★ SPONSOR DESK</div>
            <div class="service-icon-wrapper">📑</div>
            <h4 style="color: #BE123C;">Crossref DOI & Sponsoring Services</h4>
            <p>Official Crossref Sponsoring Organization assisting journals, universities, and research institutions to acquire Member Prefixes (10.xxxxx) & Article DOIs.</p>
            <router-link to="/crossref-doi-services" class="service-link" style="color: #E11D48;">
              <span>Explore Crossref Desk</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
          </div>

          <!-- Enterprise ERP -->
          <div class="service-card highlighted-erp">
            <div class="service-number">01</div>
            <div class="service-icon-wrapper">⚙️</div>
            <h4>Enterprise ERP Solutions</h4>
            <p>Custom modular ERP systems unifying finances, multi-warehouse stock, supply chain, HR payroll, and real-time executive dashboards.</p>
            <router-link to="/services/enterprise-erp-solutions" class="service-link">
              <span>Explore ERP Solution</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
          </div>

          <!-- IT Audit -->
          <div class="service-card">
            <div class="service-number">02</div>
            <div class="service-icon-wrapper">📋</div>
            <h4>IT Audit & Consulting</h4>
            <p>Rigorous technology health audits, codebase security vulnerability reviews, and corporate developer training programs.</p>
            <router-link to="/services/it-audit-consulting" class="service-link">
              <span>Explore IT Audit</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
          </div>

          <!-- Digital Automation -->
          <div class="service-card">
            <div class="service-number">03</div>
            <div class="service-icon-wrapper">⚡</div>
            <h4>Digital Automation</h4>
            <p>Automating manual business workflows, RPA invoice processing, and paper-to-digital transformations for corporate enterprises.</p>
            <router-link to="/services/digital-transformation-automation" class="service-link">
              <span>Explore Automation</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
          </div>

          <!-- IoT -->
          <div class="service-card">
            <div class="service-number">04</div>
            <div class="service-icon-wrapper">📡</div>
            <h4>IoT Hardware & Software</h4>
            <p>Custom PCB circuit design, ESP32/STM32 microcontroller programming, sensor telemetry MQTT stream, and real-time cloud tracking dashboards.</p>
            <router-link to="/services/iot-hardware-software" class="service-link">
              <span>Explore IoT Hardware</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
          </div>

          <!-- Cloud SaaS/PaaS -->
          <div class="service-card">
            <div class="service-number">05</div>
            <div class="service-icon-wrapper">☁️</div>
            <h4>Cloud SaaS & PaaS Development</h4>
            <p>Multi-tenant cloud architecture, automated subscriber provisioning, tiered billing, and containerized microservice clusters.</p>
            <router-link to="/services/saas-paas-development" class="service-link">
              <span>Explore SaaS & PaaS</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
          </div>

          <!-- Custom Web -->
          <div class="service-card">
            <div class="service-number">06</div>
            <div class="service-icon-wrapper">💻</div>
            <h4>Custom Web Applications</h4>
            <p>Scalable, responsive web platforms built with Vue.js, Node.js, Python, Laravel, and resilient cloud-native backends.</p>
            <router-link to="/services/custom-web-application" class="service-link">
              <span>Explore Custom Web</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
          </div>

          <!-- CRM -->
          <div class="service-card">
            <div class="service-number">07</div>
            <div class="service-icon-wrapper">👥</div>
            <h4>CRM Development</h4>
            <p>Lead pipeline management, sales rep productivity dashboards, customer ticket routing, and automated communication triggers.</p>
            <router-link to="/services/crm-development" class="service-link">
              <span>Explore CRM Systems</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
          </div>

          <!-- Mobile Apps -->
          <div class="service-card">
            <div class="service-number">08</div>
            <div class="service-icon-wrapper">📱</div>
            <h4>Mobile Apps (Android & iOS)</h4>
            <p>Native Flutter, React Native, and Kotlin/Swift enterprise apps featuring offline-first data sync and biometric authentication.</p>
            <router-link to="/services/mobile-app-development" class="service-link">
              <span>Explore Mobile Apps</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
          </div>

          <!-- DevOps -->
          <div class="service-card">
            <div class="service-number">09</div>
            <div class="service-icon-wrapper">🖥️</div>
            <h4>DevOps & Server Infrastructure</h4>
            <p>High-availability Linux server orchestration, Docker/Kubernetes clusters, CI/CD automated deployment, and 24/7 security monitoring.</p>
            <router-link to="/services/networking-server-infrastructure" class="service-link">
              <span>Explore DevOps</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
          </div>

          <!-- Website Design -->
          <div class="service-card">
            <div class="service-number">10</div>
            <div class="service-icon-wrapper">🌐</div>
            <h4>Website Design & Dev</h4>
            <p>State-of-the-art corporate web designs with ultra-fast page speeds, dynamic micro-interactions, and conversion-first user flows.</p>
            <router-link to="/services/website-design-development" class="service-link">
              <span>Explore Web Design</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
          </div>

          <!-- SEO -->
          <div class="service-card">
            <div class="service-number">11</div>
            <div class="service-icon-wrapper">📈</div>
            <h4>Search Engine Optimization (SEO)</h4>
            <p>Technical Core Web Vitals optimization, JSON-LD Schema markup, keyword visibility ranking, and global international domain strategy.</p>
            <router-link to="/services/search-engine-optimization" class="service-link">
              <span>Explore SEO</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. ENTERPRISE ERP PRODUCTS SUITE -->
    <section id="products" class="section-padding" style="background: #FFFFFF;">
      <div class="container">
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
                    <span class="pill-icon">🎓</span>
                    <span>MBBS / BDS Student Admissions & Profiles</span>
                  </div>
                  <div class="erp-feature-pill">
                    <span class="pill-icon">🩺</span>
                    <span>Clinical Ward Rotations & Logbook Tracking</span>
                  </div>
                  <div class="erp-feature-pill">
                    <span class="pill-icon">📝</span>
                    <span>Term & Professional (Prof) Exam Grading</span>
                  </div>
                  <div class="erp-feature-pill">
                    <span class="pill-icon">🪪</span>
                    <span>Biometric RFID Attendance for Med Students</span>
                  </div>
                  <div class="erp-feature-pill">
                    <span class="pill-icon">💳</span>
                    <span>Online Fees & Exam Form Fillup Payment</span>
                  </div>
                  <div class="erp-feature-pill">
                    <span class="pill-icon">📚</span>
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
                  <div class="erp-preview-icon">🏥</div>
                  <div>
                    <div class="erp-preview-title">Med College Academic Suite</div>
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
                    <span class="pill-icon">💻</span>
                    <span>Retail POS & Ultra-Fast Barcode Billing</span>
                  </div>
                  <div class="erp-feature-pill">
                    <span class="pill-icon">📦</span>
                    <span>Multi-Warehouse Batch & SKU Tracking</span>
                  </div>
                  <div class="erp-feature-pill">
                    <span class="pill-icon">📑</span>
                    <span>3-Way Purchase Order Matching</span>
                  </div>
                  <div class="erp-feature-pill">
                    <span class="pill-icon">📊</span>
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
                  <div class="erp-preview-icon">📦</div>
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
                    <span class="pill-icon">🪪</span>
                    <span>Biometric RFID Attendance & Parent SMS</span>
                  </div>
                  <div class="erp-feature-pill">
                    <span class="pill-icon">💳</span>
                    <span>Online Tuition & Fee Payment (bKash/Bank)</span>
                  </div>
                  <div class="erp-feature-pill">
                    <span class="pill-icon">🏆</span>
                    <span>Auto 1st/2nd/3rd Merit Rank & GPA Results</span>
                  </div>
                  <div class="erp-feature-pill">
                    <span class="pill-icon">📦</span>
                    <span>School Inventory & Campus Asset Manager</span>
                  </div>
                  <div class="erp-feature-pill">
                    <span class="pill-icon">📊</span>
                    <span>Daily Income, Expense & Accounts Ledger</span>
                  </div>
                  <div class="erp-feature-pill">
                    <span class="pill-icon">📚</span>
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
                  <div class="erp-preview-icon">🎓</div>
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

const clientFilter = ref('all')

const clientCategories = [
  { id: 'all', label: 'All Deployments', count: 12, icon: '🏢' },
  { id: 'medical', label: 'Medical Colleges', count: 9, icon: '🏥' },
  { id: 'defense', label: 'Defense & Academic', count: 1, icon: '🎖️' },
  { id: 'enterprise', label: 'Corporate & NGO', count: 2, icon: '💼' }
]

const clientsList = [
  {
    id: 'dmc',
    name: 'Dhaka Medical College',
    category: 'medical',
    industry: 'Government Medical College',
    system: 'Academic Management System',
    systemIcon: '🎓',
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
    systemColor: '#2563EB',
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
    systemColor: '#2563EB',
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
    systemColor: '#2563EB',
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
    systemColor: '#2563EB',
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
    systemColor: '#2563EB',
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
    systemColor: '#2563EB',
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
    systemColor: '#894B9E',
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
    systemColor: '#E11D48',
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
    systemColor: '#4F46E5',
    location: 'Rangpur City',
    status: 'Enterprise Hub'
  }
]

const filteredClients = computed(() => {
  if (clientFilter.value === 'all') return clientsList
  return clientsList.filter(c => c.category === clientFilter.value)
})

function scrollTo(id) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
