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
          
          <!-- Crossref DOI & Sponsoring -->
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

          <!-- Service 1: Enterprise ERP -->
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

          <!-- Service 2: IT Audit & Consulting -->
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

          <!-- Service 3: Digital Automation -->
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

          <!-- Service 4: IoT Hardware & Software -->
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

          <!-- Service 5: Cloud SaaS & PaaS -->
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

          <!-- Service 6: Custom Web Applications -->
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

          <!-- Service 7: CRM Development -->
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

          <!-- Service 8: Mobile App Development -->
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

          <!-- Service 9: DevOps & Infrastructure -->
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

          <!-- Service 10: Website Design & Dev -->
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

          <!-- Service 11: SEO -->
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
