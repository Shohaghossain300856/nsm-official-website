<template>
  <div class="service-page">
    <!-- Page Banner -->
    <section class="page-banner">
      <div class="banner-glow-effect"></div>
      <div class="container banner-inner">
        <div class="banner-breadcrumb">
          <router-link to="/">Home</router-link>
          <span class="sep">/</span>
          <router-link to="/services">Services</router-link>
          <span class="sep">/</span>
          <span class="current">Custom Web Applications</span>
        </div>
        <h1 class="banner-title">
          Custom <span class="gradient-text">Web Application</span> Development
        </h1>
        <p class="banner-subtitle">
          High-performance, reactive, and enterprise-grade web applications engineered with modern JavaScript frameworks, robust backend APIs, and microservices architecture.
        </p>
      </div>
    </section>

    <!-- Core Content -->
    <section class="section-padding content-section">
      <div class="container">
        <div class="detail-grid">
          <!-- Main Left Column -->
          <div class="main-info">
            <span class="capability-pill">CORE CAPABILITY 06</span>
            <h2 class="section-heading">Engineered for High Concurrency & Resilient Scale</h2>
            <p class="section-desc">
              <strong>NSM Limited</strong> engineers bespoke web applications designed to streamline complex business workflows, enterprise dashboards, fintech transactions, and real-time operational hubs. We combine sleek frontend architectures with scalable backend engines to deliver secure, lightning-fast digital solutions.
            </p>
            <p class="section-desc">
              From initial database architecture and API orchestration to automated CI/CD deployment, our engineering workflow ensures standard code compliance, high uptime, and top-tier security standards.
            </p>

            <!-- Technology Stack Showcase Grid -->
            <h3 class="subsection-title">Full-Stack Technology Stack:</h3>
            <div class="tech-showcase-grid">
              <!-- Frontend Block -->
              <div class="tech-category-block">
                <div class="tech-cat-header">
                  <div class="tech-cat-icon icon-orange">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Frontend Icon" width="24" height="24" />
                  </div>
                  <div>
                    <h4 class="tech-cat-title">Frontend Frameworks</h4>
                    <span class="tech-cat-label label-orange">Reactive UI & SPA</span>
                  </div>
                </div>
                <div class="tech-items-wrap">
                  <div class="tech-item-chip">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue 3" width="18" height="18" />
                    <span>Vue 3 / Composition</span>
                  </div>
                  <div class="tech-item-chip">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="18" height="18" />
                    <span>React.js</span>
                  </div>
                  <div class="tech-item-chip">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="18" height="18" />
                    <span>JavaScript (ES6+)</span>
                  </div>
                  <div class="tech-item-chip">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" width="18" height="18" />
                    <span>Tailwind CSS</span>
                  </div>
                  <div class="tech-item-chip">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" width="18" height="18" />
                    <span>Bootstrap 5</span>
                  </div>
                </div>
              </div>

              <!-- Backend & Data Block -->
              <div class="tech-category-block">
                <div class="tech-cat-header">
                  <div class="tech-cat-icon icon-indigo">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Backend Icon" width="24" height="24" />
                  </div>
                  <div>
                    <h4 class="tech-cat-title">Backend & Database</h4>
                    <span class="tech-cat-label label-indigo">API & High-Availability Data</span>
                  </div>
                </div>
                <div class="tech-items-wrap">
                  <div class="tech-item-chip">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel" width="18" height="18" />
                    <span>Laravel (PHP)</span>
                  </div>
                  <div class="tech-item-chip">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="18" height="18" />
                    <span>Node.js / Express</span>
                  </div>
                  <div class="tech-item-chip">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" width="18" height="18" />
                    <span>MySQL / MariaDB</span>
                  </div>
                  <div class="tech-item-chip">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" width="18" height="18" />
                    <span>PostgreSQL</span>
                  </div>
                  <div class="tech-item-chip">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" width="18" height="18" />
                    <span>Redis Cache</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Key Architecture Capabilities -->
            <h3 class="subsection-title" style="margin-top: 2.75rem;">Key Architecture Capabilities:</h3>
            <div class="feature-box-grid">
              <div class="feature-card">
                <div class="feature-icon-wrapper" style="background: rgba(37, 99, 235, 0.08); color: #2563EB;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </div>
                <h4>High-Concurrency Web Systems</h4>
                <p>Engineered for high traffic volume using Redis memory caching, database indexing, connection pooling, and multi-tenant scaling.</p>
              </div>

              <div class="feature-card">
                <div class="feature-icon-wrapper" style="background: rgba(16, 185, 129, 0.08); color: #059669;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h4>Enterprise Security & RBAC</h4>
                <p>Granular role-based authorization, JWT/Sanctum authentication tokens, CSRF protection, SQL injection prevention, and encrypted data storage.</p>
              </div>

              <div class="feature-card">
                <div class="feature-icon-wrapper" style="background: rgba(79, 70, 229, 0.08); color: #4F46E5;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h4>RESTful APIs & Integrations</h4>
                <p>Well-documented REST/GraphQL API endpoints with webhook handlers, payment gateway connectivity (bKash/Nagad/Stripe), and SMS gateways.</p>
              </div>

              <div class="feature-card">
                <div class="feature-icon-wrapper" style="background: rgba(234, 88, 12, 0.08); color: #EA580C;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h4>Modern Reactive Dashboards</h4>
                <p>Real-time analytics, print-ready document engines, dynamic charting, and automated report generators configured for corporate operations.</p>
              </div>
            </div>

            <!-- Development Process Card -->
            <div class="dev-process-card">
              <div class="process-header">
                <span class="process-badge">✓ Production-Ready Workflow</span>
              </div>
              <div class="process-steps">
                <div class="process-step">
                  <div class="step-number step-1">1</div>
                  <div>
                    <h4 class="step-title">Scope, Architecture & Schema Design</h4>
                    <p class="step-desc">Entity-relationship diagramming (ERD), wireframing, API endpoint design, and technical stack roadmapping.</p>
                  </div>
                </div>
                <div class="process-step">
                  <div class="step-number step-2">2</div>
                  <div>
                    <h4 class="step-title">Sprint-Based Agile Engineering</h4>
                    <p class="step-desc">Modular frontend component creation, secure API controllers, unit testing, and continuous client progress demos.</p>
                  </div>
                </div>
                <div class="process-step">
                  <div class="step-number step-3">3</div>
                  <div>
                    <h4 class="step-title">QA, Hardening & Cloud Deployment</h4>
                    <p class="step-desc">Load testing, server optimization (Nginx/Apache), SSL configuration, automated backups, and post-launch SLA support.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Wider Sidebar Card with Expanded Width -->
          <div class="sidebar-cta-card">
            <div class="card-accent-line"></div>

            <h3 class="form-card-title">Start Your Project</h3>
            <p class="form-card-desc">Share your software idea and get a free consultation with our development team.</p>

            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label class="form-label">Full Name *</label>
                <input 
                  type="text" 
                  v-model="form.name" 
                  class="custom-input" 
                  required 
                />
              </div>

              <div class="form-group">
                <label class="form-label">Email *</label>
                <input 
                  type="email" 
                  v-model="form.email" 
                  class="custom-input" 
                  required 
                />
              </div>

              <div class="form-group">
                <label class="form-label">Project Type *</label>
                <div class="select-box-wrap">
                  <select v-model="form.appType" class="custom-input custom-select" required>
                    <option value="">-- Select Project Type --</option>
                    <option value="custom-web">Custom Web Application</option>
                    <option value="dashboard">Enterprise Dashboard / Admin Panel</option>
                    <option value="ecommerce">E-Commerce / Inventory System</option>
                    <option value="api-backend">RESTful API & Integration</option>
                    <option value="saas">SaaS Product Development</option>
                    <option value="erp">ERP / Business Management System</option>
                  </select>
                  <svg class="select-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E293B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Project Brief</label>
                <textarea 
                  v-model="form.brief" 
                  class="custom-input custom-textarea" 
                  rows="3"
                ></textarea>
              </div>

              <div v-if="submitted" class="success-alert">
                ✓ Inquiry received! Our team will contact you within 24 hours.
              </div>

              <button type="submit" class="btn btn-primary btn-submit-project">
                Get Free Consultation
              </button>

              <div class="sidebar-contact-info">
                <span>Call Hotline: <a href="tel:+8801891151713">+88 01891151713</a></span>
                <span>Email Us: <a href="mailto:info@nsmlimited.com">info@nsmlimited.com</a></span>
                <span>Free Consultation & Scope</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Global CTA Banner -->
    <section class="global-cta-section">
      <div class="container">
        <div class="global-cta-banner">
          <div class="global-cta-content">
            <div class="global-cta-badges">
              <span class="global-cta-badge">💻 Custom Web Apps</span>
              <span class="global-cta-badge">⚡ Sub-Second Response Times</span>
            </div>
            <h2>Ready to Build Web Applications That Outperform?</h2>
            <p>Engage your users with high-performance reactive interfaces and robust backend architectures built by NSM Limited.</p>
          </div>
          <div class="global-cta-actions">
            <a href="tel:+8801891151713" class="btn btn-call-now btn-lg btn-pulse">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>Call Now: +8801891151713</span>
            </a>
            <router-link to="/contact" class="btn btn-primary btn-lg">Estimate Web App Project</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  appType: '',
  brief: ''
})

const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.name = ''
    form.email = ''
    form.appType = ''
    form.brief = ''
  }, 3500)
}
</script>

<style scoped>
/* ================= Banner Section ================= */
.page-banner {
  position: relative;
  padding: 4.5rem 0 3.5rem;
  background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%);
  border-bottom: 1px solid #E2E8F0;
  overflow: hidden;
}

.banner-glow-effect {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 550px;
  height: 320px;
  background: radial-gradient(circle, rgba(79, 70, 229, 0.12) 0%, rgba(238, 242, 255, 0) 70%);
  pointer-events: none;
  z-index: 0;
}

.banner-inner {
  position: relative;
  z-index: 1;
}

.banner-breadcrumb {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  padding: 0.35rem 0.85rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 500;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  margin-bottom: 1.25rem;
}

.banner-breadcrumb a {
  color: #64748B;
  text-decoration: none;
  transition: color 0.2s ease;
}

.banner-breadcrumb a:hover {
  color: #4F46E5;
}

.banner-breadcrumb .sep {
  color: #CBD5E1;
  font-size: 0.75rem;
}

.banner-breadcrumb .current {
  color: #4F46E5;
  font-weight: 600;
}

.banner-title {
  font-size: clamp(2rem, 5vw, 3.25rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.025em;
  color: #0F172A;
  margin-bottom: 1.25rem;
}

.gradient-text {
  background: linear-gradient(135deg, #2563EB 0%, #4F46E5 50%, #7C3AED 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.banner-subtitle {
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  line-height: 1.7;
  color: #475569;
  max-width: 720px;
  margin: 0;
}

/* ================= Content & Layout ================= */
.content-section {
  background: #FFFFFF;
  padding: 4.5rem 0;
}

/* Updated to 450px width for the form column */
.detail-grid {
  display: grid;
  grid-template-columns: 1fr 450px;
  gap: 3rem;
  align-items: start;
}

.capability-pill {
  display: inline-block;
  padding: 0.35rem 0.85rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #4F46E5;
  background: rgba(79, 70, 229, 0.08);
  border: 1px solid rgba(79, 70, 229, 0.2);
  border-radius: 9999px;
  margin-bottom: 1rem;
}

.section-heading {
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #0F172A;
  line-height: 1.25;
  margin-bottom: 1.25rem;
  letter-spacing: -0.02em;
}

.section-desc {
  color: #64748B;
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.subsection-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: #0F172A;
  margin-bottom: 1.25rem;
}

/* ================= Tech Showcase Cards ================= */
.tech-showcase-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.tech-category-block {
  background: linear-gradient(160deg, #FFFFFF 0%, #F8FAFC 100%);
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 1.75rem;
  transition: all 0.3s ease;
}

.tech-category-block:hover {
  border-color: #6366F1;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);
  transform: translateY(-3px);
}

.tech-cat-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.tech-cat-icon {
  width: 46px;
  height: 46px;
  min-width: 46px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
}

.icon-orange {
  background: rgba(234, 88, 12, 0.08);
  border-color: rgba(234, 88, 12, 0.2);
}

.icon-indigo {
  background: rgba(79, 70, 229, 0.08);
  border-color: rgba(79, 70, 229, 0.2);
}

.tech-cat-title {
  font-size: 1.05rem;
  font-weight: 800;
  color: #0F172A;
  margin-bottom: 0.15rem;
}

.tech-cat-label {
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.label-orange { color: #EA580C; }
.label-indigo { color: #4F46E5; }

.tech-items-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-item-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.4rem 0.8rem;
  border-radius: 9999px;
  background: rgba(79, 70, 229, 0.04);
  border: 1px solid rgba(79, 70, 229, 0.1);
  color: #334155;
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.tech-item-chip:hover {
  background: rgba(79, 70, 229, 0.08);
  border-color: rgba(79, 70, 229, 0.2);
  transform: translateY(-1px);
}

.tech-item-chip img {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

/* ================= Feature Boxes Grid ================= */
.feature-box-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.feature-card {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 1.75rem;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
}

.feature-card:hover {
  border-color: #6366F1;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);
  transform: translateY(-3px);
}

.feature-icon-wrapper {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.feature-card h4 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #0F172A;
  margin-bottom: 0.5rem;
}

.feature-card p {
  font-size: 0.9rem;
  color: #64748B;
  line-height: 1.6;
  margin: 0;
}

/* ================= Development Process Card ================= */
.dev-process-card {
  margin-top: 2.75rem;
  background: linear-gradient(160deg, #FFFFFF 0%, #F8FAFC 100%);
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.process-header {
  margin-bottom: 1.5rem;
}

.process-badge {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  color: #059669;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.25);
  padding: 0.35rem 0.85rem;
  border-radius: 9999px;
}

.process-steps {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.process-step {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.step-number {
  width: 36px;
  height: 36px;
  min-width: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1rem;
}

.step-1 { background: rgba(79, 70, 229, 0.08); color: #4F46E5; }
.step-2 { background: rgba(37, 99, 235, 0.08); color: #2563EB; }
.step-3 { background: rgba(6, 182, 212, 0.08); color: #0284C7; }

.step-title {
  font-size: 1rem;
  font-weight: 700;
  color: #0F172A;
  margin-bottom: 0.25rem;
}

.step-desc {
  font-size: 0.875rem;
  color: #64748B;
  line-height: 1.5;
  margin: 0;
}

/* ================= EXACT MATCH CARD (Expanded Width) ================= */
.sidebar-cta-card {
  width: 100%;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 26px;
  padding: 2.75rem 2.5rem;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.035);
  box-sizing: border-box;
}

.card-accent-line {
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #4338CA 0%, #2563EB 50%, #00B4D8 100%);
  border-radius: 9999px;
  margin-bottom: 2.25rem;
}

.form-card-title {
  font-size: 1.85rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: #0B1B3D;
  margin: 0 0 0.85rem 0;
  line-height: 1.2;
}

.form-card-desc {
  font-size: 0.98rem;
  font-weight: 400;
  color: #64748B;
  line-height: 1.55;
  margin: 0 0 2rem 0;
}

.form-group {
  margin-bottom: 1.35rem;
}

.form-label {
  display: block;
  font-size: 0.95rem;
  font-weight: 800;
  color: #0B1B3D;
  margin-bottom: 0.55rem;
}

.custom-input {
  display: block;
  width: 100%;
  height: 50px;
  background-color: #FFFFFF;
  border: 1px solid #CBD5E1;
  border-radius: 12px;
  padding: 0 1.15rem;
  font-size: 0.95rem;
  color: #0F172A;
  box-sizing: border-box;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.custom-input:focus {
  outline: none;
  border-color: #2563EB;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
}

.select-box-wrap {
  position: relative;
  width: 100%;
}

.custom-select {
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  padding-right: 2.5rem;
}

.select-chevron {
  position: absolute;
  right: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.custom-textarea {
  height: auto;
  min-height: 95px;
  padding: 0.85rem 1.15rem;
  resize: vertical;
}

.success-alert {
  margin-bottom: 1.25rem;
  padding: 0.75rem 1rem;
  background: #ECFDF5;
  border: 1px solid #10B981;
  border-radius: 8px;
  color: #065F46;
  font-size: 0.875rem;
  font-weight: 600;
}

.btn-submit-project {
  width: 100%;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, #2563EB 0%, #4F46E5 100%);
  color: #FFFFFF;
  border: none;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 0.5rem;
}

.btn-submit-project:hover {
  filter: brightness(1.08);
  transform: translateY(-1px);
}

.sidebar-contact-info {
  margin-top: 2rem;
  padding-top: 1.25rem;
  border-top: 1px solid #F1F5F9;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  font-size: 0.875rem;
  color: #64748B;
}

.sidebar-contact-info a {
  color: #2563EB;
  text-decoration: none;
  font-weight: 600;
}

.sidebar-contact-info a:hover {
  text-decoration: underline;
}

/* ================= Responsive Queries ================= */
@media (max-width: 1100px) {
  .detail-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .sidebar-cta-card {
    max-width: 550px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .tech-showcase-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .tech-category-block {
    padding: 1.5rem 1.25rem;
  }

  .dev-process-card {
    padding: 1.5rem 1.25rem;
  }

  .feature-box-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .page-banner {
    padding: 3rem 0 2.5rem;
  }

  .content-section {
    padding: 3rem 0;
  }

  .sidebar-cta-card {
    padding: 2rem 1.5rem;
  }
}
</style>