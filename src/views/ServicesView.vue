<template>
  <div class="services-page">
    <section class="page-banner">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link> &gt; <span>Services</span>
        </div>
        <h1 class="section-title">12 Enterprise Service Capabilities</h1>
        <p class="section-subtitle">Full-spectrum technology engineering & scholarly DOI publishing solutions designed for scale, resilience, and operational excellence.</p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section-padding" style="background: #FFFFFF;">
      <div class="container">
        <div class="services-grid">
          <!-- 1. Crossref DOI & Sponsoring -->
          <div class="service-card crossref-highlight">
            <div class="service-icon-wrapper">📑</div>
            <h4 style="color: #BE123C;">Crossref DOI & Sponsoring</h4>
            <p>Official Sponsoring Org allocating Publisher Member Prefixes, DOI deposits, & XML 5.3.1 indexing.</p>
            <router-link to="/crossref-doi-services" class="service-link" style="color: #E11D48;">
              <span>Explore DOI Desk</span>
              <span>&rarr;</span>
            </router-link>
          </div>

          <!-- 2. Custom Web Applications -->
          <div class="service-card">
            <div class="service-icon-wrapper">💻</div>
            <h4>Custom Web Applications</h4>
            <p>High-concurrency modern web apps built with React, Next.js, Vue, Laravel, and Python FastAPI.</p>
            <router-link to="/services/custom-web-application" class="service-link" style="color: #7C3AED;">
              <span>Web App Engineering</span>
              <span>&rarr;</span>
            </router-link>
          </div>

          <!-- 3. Mobile Apps (Android & iOS) -->
          <div class="service-card">
            <div class="service-icon-wrapper">📱</div>
            <h4>Mobile Apps (Android & iOS)</h4>
            <p>Native Kotlin, Swift, & cross-platform Flutter mobile applications with offline DB synchronization.</p>
            <router-link to="/services/mobile-app-development" class="service-link" style="color: #2563EB;">
              <span>Mobile Engineering</span>
              <span>&rarr;</span>
            </router-link>
          </div>

          <!-- 4. SaaS & PaaS Cloud Platforms -->
          <div class="service-card">
            <div class="service-icon-wrapper">☁️</div>
            <h4>SaaS & PaaS Cloud Platforms</h4>
            <p>Multi-tenant cloud architecture, subscription billing engines, AWS/DigitalOcean infrastructure.</p>
            <router-link to="/services/saas-paas-development" class="service-link" style="color: #EA580C;">
              <span>Cloud Architecture</span>
              <span>&rarr;</span>
            </router-link>
          </div>

          <!-- 5. Enterprise ERP Solutions -->
          <div class="service-card">
            <div class="service-icon-wrapper">⚙️</div>
            <h4>Enterprise ERP Solutions</h4>
            <p>Custom modular ERP systems unifying finances, multi-warehouse stock, supply chain, & HR payroll.</p>
            <router-link to="/services/enterprise-erp-solutions" class="service-link" style="color: #4F46E5;">
              <span>Explore ERP Solution</span>
              <span>&rarr;</span>
            </router-link>
          </div>

          <!-- 6. IT Audit & Consulting -->
          <div class="service-card">
            <div class="service-icon-wrapper">📋</div>
            <h4>IT Audit & Consulting</h4>
            <p>Rigorous technology health audits, codebase security vulnerability reviews, & developer training.</p>
            <router-link to="/services/it-audit-consulting" class="service-link" style="color: #0284C7;">
              <span>Explore IT Audit</span>
              <span>&rarr;</span>
            </router-link>
          </div>

          <!-- 7. Digital Automation -->
          <div class="service-card">
            <div class="service-icon-wrapper">⚡</div>
            <h4>Digital Automation</h4>
            <p>Automating manual business workflows, RPA invoice processing, & digital enterprise transformation.</p>
            <router-link to="/services/digital-transformation-automation" class="service-link" style="color: #D97706;">
              <span>Explore Automation</span>
              <span>&rarr;</span>
            </router-link>
          </div>

          <!-- 8. IoT Hardware & Software -->
          <div class="service-card">
            <div class="service-icon-wrapper">📡</div>
            <h4>IoT Hardware & Software</h4>
            <p>Custom PCB circuit design, ESP32 microcontroller programming, sensor telemetry & MQTT stream.</p>
            <router-link to="/services/iot-hardware-software" class="service-link" style="color: #0D9488;">
              <span>Explore IoT Hardware</span>
              <span>&rarr;</span>
            </router-link>
          </div>

          <!-- 9. CRM Development -->
          <div class="service-card">
            <div class="service-icon-wrapper">👥</div>
            <h4>CRM Development</h4>
            <p>Lead pipeline management, sales rep productivity dashboards, customer ticket routing, & triggers.</p>
            <router-link to="/services/crm-development" class="service-link" style="color: #4338CA;">
              <span>Explore CRM Systems</span>
              <span>&rarr;</span>
            </router-link>
          </div>

          <!-- 10. DevOps & Server Infrastructure -->
          <div class="service-card">
            <div class="service-icon-wrapper">🖥️</div>
            <h4>DevOps & Infrastructure</h4>
            <p>High-availability Linux server orchestration, Docker/Kubernetes clusters, & CI/CD deployment.</p>
            <router-link to="/services/networking-server-infrastructure" class="service-link" style="color: #0891B2;">
              <span>Explore DevOps</span>
              <span>&rarr;</span>
            </router-link>
          </div>

          <!-- 11. Website Design & Dev -->
          <div class="service-card">
            <div class="service-icon-wrapper">🌐</div>
            <h4>Website Design & Dev</h4>
            <p>State-of-the-art corporate web designs with ultra-fast page speeds, micro-interactions, & modern UI.</p>
            <router-link to="/services/website-design-development" class="service-link" style="color: #8B5CF6;">
              <span>Explore Web Design</span>
              <span>&rarr;</span>
            </router-link>
          </div>

          <!-- 12. Search Engine Optimization (SEO) -->
          <div class="service-card">
            <div class="service-icon-wrapper">📈</div>
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

    <!-- Global High-Converting Conversion Banner -->
    <section class="global-cta-section">
      <div class="container">
        <div class="global-cta-banner">
          <div class="global-cta-content">
            <div class="global-cta-badges">
              <span class="global-cta-badge">⚙️ 12 Specialized Services</span>
              <span class="global-cta-badge">⚡ 24-Hour Scope Quote</span>
            </div>
            <h2>Let's Engineer Your Next Digital Masterpiece</h2>
            <p>From custom enterprise ERPs to Crossref DOI sponsoring, NSM Limited delivers world-class engineering.</p>
          </div>
          <div class="global-cta-actions">
            <a href="tel:+8801891151713" class="btn btn-call-now btn-lg btn-pulse">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Call Now: +8801891151713, 14, 15, 17</span>
            </a>
            <router-link to="/contact" class="btn btn-primary btn-lg">Request Detailed Scope</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
