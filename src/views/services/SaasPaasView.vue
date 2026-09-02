<template>
  <div class="service-page">
    <!-- Ambient Gradient Page Banner -->
    <section class="page-banner">
      <div class="banner-ambient-blob blob-1"></div>
      <div class="banner-ambient-blob blob-2"></div>
      <div class="container banner-inner">
        <div class="banner-breadcrumb">
          <router-link to="/" class="breadcrumb-link">Home</router-link>
          <span class="sep">&gt;</span>
          <router-link to="/services" class="breadcrumb-link">Services</router-link>
          <span class="sep">&gt;</span>
          <span class="current">SaaS &amp; PaaS Development</span>
        </div>
        <h1 class="banner-title">
          Cloud SaaS &amp; <span class="gradient-text">PaaS Development</span>
        </h1>
        <p class="banner-subtitle">
          Multi-tenant cloud platforms, automated subscription billing engines, and elastic microservice backends engineered for global scale and high concurrency.
        </p>
      </div>
    </section>

    <!-- Multi-Tone Gradient Content Section -->
    <section class="section-padding content-section">
      <div class="section-ambient-mesh"></div>
      <div class="container section-inner">
        <div class="detail-grid">
          <!-- Main Left Column -->
          <div class="main-info">
            <span class="capability-pill">CORE CAPABILITY 05</span>
            <h2 class="section-heading">Multi-Tenant Cloud Architectures &amp; Subscription Platforms</h2>
            <p class="section-desc">
              We architect and build commercial SaaS applications featuring automated tenant isolation, usage-based recurring billing (Stripe, SSLCommerz, bKash), granular role-based permissions, and auto-scaling cloud microservices. <strong>NSM Limited</strong> turns complex product visions into production-grade cloud software.
            </p>
            <p class="section-desc">
              From database schema isolation and containerized microservices to self-healing Redis queues and edge caching, our cloud engineers deliver high uptime, resilient data security, and seamless developer APIs.
            </p>

            <!-- Technology Stack Showcase Grid -->
            <h3 class="subsection-title">Cloud SaaS &amp; Microservices Stack:</h3>
            <div class="tech-showcase-grid">
              <!-- Frontend & Tenant Workspace Block -->
              <div class="tech-category-block">
                <div class="tech-cat-header">
                  <div class="tech-cat-icon icon-orange">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="SaaS Workspace" width="24" height="24" />
                  </div>
                  <div>
                    <h4 class="tech-cat-title">Tenant Web Consoles</h4>
                    <span class="tech-cat-label label-orange">Reactive Client Workspaces</span>
                  </div>
                </div>
                <div class="tech-items-wrap">
                  <div class="tech-item-chip">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue 3" width="18" height="18" />
                    <span>Vue 3 / Vite</span>
                  </div>
                  <div class="tech-item-chip">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="18" height="18" />
                    <span>React.js</span>
                  </div>
                  <div class="tech-item-chip">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" width="18" height="18" />
                    <span>Tailwind CSS</span>
                  </div>
                  <div class="tech-item-chip">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width="18" height="18" />
                    <span>TypeScript</span>
                  </div>
                  <div class="tech-item-chip">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="Charts" width="18" height="18" />
                    <span>Chart.js / Analytics</span>
                  </div>
                </div>
              </div>

              <!-- Cloud Infrastructure & Databases Block -->
              <div class="tech-category-block">
                <div class="tech-cat-header">
                  <div class="tech-cat-icon icon-indigo">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Cloud Backend" width="24" height="24" />
                  </div>
                  <div>
                    <h4 class="tech-cat-title">Cloud Core &amp; Microservices</h4>
                    <span class="tech-cat-label label-indigo">Multi-Tenancy &amp; APIs</span>
                  </div>
                </div>
                <div class="tech-items-wrap">
                  <div class="tech-item-chip">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel" width="18" height="18" />
                    <span>Laravel (SaaS Core)</span>
                  </div>
                  <div class="tech-item-chip">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="18" height="18" />
                    <span>Node.js / Express</span>
                  </div>
                  <div class="tech-item-chip">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" width="18" height="18" />
                    <span>PostgreSQL (Isolated)</span>
                  </div>
                  <div class="tech-item-chip">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" width="18" height="18" />
                    <span>Redis Metering</span>
                  </div>
                  <div class="tech-item-chip">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" width="18" height="18" />
                    <span>Docker &amp; K8s</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Key Capabilities Grid (Strictly 2 per row) -->
            <h3 class="subsection-title" style="margin-top: 2.75rem;">Key Architecture Capabilities:</h3>
            <div class="feature-box-grid">
              <div class="feature-card">
                <div class="feature-icon-wrapper" style="background: rgba(37, 99, 235, 0.08); color: #2563EB;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>
                <h4>Tenant Isolation &amp; Security</h4>
                <p>Database-per-tenant or schema-per-tenant models ensuring strict enterprise data compliance, privacy, and encryption.</p>
              </div>

              <div class="feature-card">
                <div class="feature-icon-wrapper" style="background: rgba(16, 185, 129, 0.08); color: #059669;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                    <line x1="1" y1="10" x2="23" y2="10"></line>
                  </svg>
                </div>
                <h4>Automated Billing &amp; Metering</h4>
                <p>Seamless subscription renewals, recurring invoicing, usage-based consumption tiers, and dunning management.</p>
              </div>

              <div class="feature-card">
                <div class="feature-icon-wrapper" style="background: rgba(79, 70, 229, 0.08); color: #4F46E5;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                  </svg>
                </div>
                <h4>Elastic Microservice Scaling</h4>
                <p>Containerized horizontal auto-scaling designed to absorb concurrent traffic spikes with zero downtime.</p>
              </div>

              <div class="feature-card">
                <div class="feature-icon-wrapper" style="background: rgba(234, 88, 12, 0.08); color: #EA580C;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h4>Developer APIs &amp; Webhooks</h4>
                <p>Public REST/GraphQL interfaces with rate limiting, scoped access tokens, documentation, and instant webhook dispatches.</p>
              </div>
            </div>

            <!-- Development Process Card -->
            <div class="dev-process-card">
              <div class="process-header">
                <span class="process-badge">✓ SaaS Engineering Roadmap</span>
              </div>
              <div class="process-steps">
                <div class="process-step">
                  <div class="step-number step-1">1</div>
                  <div>
                    <h4 class="step-title">Multi-Tenancy &amp; Data Model Design</h4>
                    <p class="step-desc">Selecting isolation boundaries, database sharding strategies, subscription tier models, and security protocols.</p>
                  </div>
                </div>
                <div class="process-step">
                  <div class="step-number step-2">2</div>
                  <div>
                    <h4 class="step-title">Microservice Build &amp; Payment Gateway Hooks</h4>
                    <p class="step-desc">Engineering authentication layers, metering services, automated billing webhooks, and core features.</p>
                  </div>
                </div>
                <div class="process-step">
                  <div class="step-number step-3">3</div>
                  <div>
                    <h4 class="step-title">Cloud Deployment, Load Testing &amp; Launch</h4>
                    <p class="step-desc">Stress testing under concurrency, setting up CI/CD pipelines on AWS/DigitalOcean, and continuous monitoring.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sticky Sidebar Wrapper -->
          <div class="sidebar-wrapper">
            <div class="sidebar-cta-card">
              <div class="card-accent-line"></div>

              <h3 class="form-card-title">Start Your Project</h3>
              <p class="form-card-desc">Architect your cloud software product with our enterprise SaaS engineers.</p>

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
                  <label class="form-label">Platform Type *</label>
                  <div class="select-box-wrap">
                    <select v-model="form.saasType" class="custom-input custom-select" required>
                      <option value="">-- Select Platform Type --</option>
                      <option value="b2b-saas">B2B Multi-Tenant SaaS Platform</option>
                      <option value="b2c-subscription">B2C Subscription Product</option>
                      <option value="paas-infrastructure">PaaS Developer Infrastructure</option>
                      <option value="api-service">API-as-a-Service Platform</option>
                      <option value="marketplace-saas">Multi-Vendor Marketplace SaaS</option>
                    </select>
                    <svg class="select-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
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
                  ✓ Request received! Our SaaS architecture team will connect with you shortly.
                </div>

                <button type="submit" class="btn btn-primary btn-submit-project">
                  Get Free Consultation
                </button>

                <div class="sidebar-contact-info">
                  <span>Call Hotline: <a href="tel:+8801891151713">+88 01891151713</a></span>
                  <span>Email Us: <a href="mailto:info@nsmlimited.com">info@nsmlimited.com</a></span>
                  <span>Free Architecture Scope &amp; Review</span>
                </div>
              </form>
            </div>
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
              <span class="global-cta-badge">☁️ Cloud SaaS &amp; PaaS</span>
              <span class="global-cta-badge">🚀 Elastic Microservices</span>
            </div>
            <h2>Turn Your Idea into a Profitable SaaS Platform</h2>
            <p>Scale effortlessly on AWS, DigitalOcean, or Azure with our robust multi-tenant architecture.</p>
          </div>
          <div class="global-cta-actions">
            <a href="tel:+8801891151713" class="btn btn-call-now btn-lg btn-pulse">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>Call Now: +8801891151713</span>
            </a>
            <router-link to="/contact" class="btn btn-primary btn-lg">Request Cloud Architecture Review</router-link>
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
  saasType: '',
  brief: ''
})

const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.name = ''
    form.email = ''
    form.saasType = ''
    form.brief = ''
  }, 3500)
}
</script>

<style scoped>
/* ================= Page Banner with Layered Gradient ================= */
.page-banner {
  position: relative;
  padding: 3.75rem 0 2.75rem;
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
}

.banner-ambient-blob {
  position: absolute;
  pointer-events: none;
  border-radius: 9999px;
  filter: blur(60px);
}

.blob-1 {
  top: -80px;
  right: 12%;
  width: 420px;
  height: 280px;
  background: radial-gradient(circle, rgba(199, 210, 254, 0.7) 0%, rgba(224, 231, 255, 0) 70%);
}

.blob-2 {
  bottom: -60px;
  left: 5%;
  width: 320px;
  height: 220px;
  background: radial-gradient(circle, rgba(224, 242, 254, 0.6) 0%, rgba(240, 249, 255, 0) 70%);
}

.banner-inner {
  position: relative;
  z-index: 1;
}

.banner-breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
}

.banner-breadcrumb .breadcrumb-link {
  color: #4F46E5;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.banner-breadcrumb .breadcrumb-link:hover {
  opacity: 0.8;
}

.banner-breadcrumb .sep {
  color: #64748B;
  font-size: 0.85rem;
  font-weight: 500;
}

.banner-breadcrumb .current {
  color: #64748B;
  font-weight: 500;
}

.banner-title {
  font-size: clamp(2.1rem, 3.5vw, 2.75rem);
  font-weight: 800;
  line-height: 1.25;
  letter-spacing: -0.025em;
  color: #1E293B;
  margin: 0 0 1.25rem 0;
}

.gradient-text {
  background: linear-gradient(90deg, #2563EB 0%, #00A3FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.banner-subtitle {
  font-size: 1.05rem;
  line-height: 1.65;
  color: #475569;
  font-weight: 400;
  max-width: 800px;
  margin: 0;
}

/* ================= Multi-Tone Gradient Content Section ================= */
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

.detail-grid {
  display: grid;
  grid-template-columns: 1fr 450px;
  gap: 3rem;
  align-items: stretch;
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
  color: #1E293B;
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
  color: #1E293B;
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
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 14px;
  padding: 1.75rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03);
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
  font-weight: 700;
  color: #1E293B;
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

/* ================= Feature Boxes Grid (2 per row) ================= */
.feature-box-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.feature-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 14px;
  padding: 1.75rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03);
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
  color: #1E293B;
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
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(226, 232, 240, 0.9);
  border-radius: 14px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03);
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
  color: #1E293B;
  margin-bottom: 0.25rem;
}

.step-desc {
  font-size: 0.875rem;
  color: #64748B;
  line-height: 1.5;
  margin: 0;
}

/* ================= Sticky Sidebar Wrapper & Card ================= */
.sidebar-wrapper {
  position: relative;
  width: 100%;
}

.sidebar-cta-card {
  position: sticky;
  top: 2rem;
  width: 100%;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 26px;
  padding: 2.75rem 2.5rem;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
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
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  color: #1E293B;
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
  font-size: 0.925rem;
  font-weight: 700;
  color: #1E293B;
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
  color: #1E293B;
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
    position: static;
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
    padding: 3rem 0 2rem;
  }

  .banner-title {
    font-size: 1.95rem;
  }

  .content-section {
    padding: 3rem 0;
  }

  .sidebar-cta-card {
    padding: 2rem 1.5rem;
  }
}
</style>