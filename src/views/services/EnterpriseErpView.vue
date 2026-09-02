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
          <span class="current">Enterprise ERP Solutions</span>
        </div>
        <h1 class="banner-title">
          Enterprise <span class="gradient-text">ERP Solutions</span> &amp; Custom Modules
        </h1>
        <p class="banner-subtitle">
          Flagship custom ERP architecture engineered for multi-branch corporations, supply chain networks, automated financial ledgers, and growing enterprises.
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
            <span class="capability-pill">★ FLAGSHIP CAPABILITY</span>
            <h2 class="section-heading">Bespoke Enterprise Resource Planning Platforms</h2>
            <p class="section-desc">
              Off-the-shelf software rarely fits intricate operational rules. <strong>NSM Limited</strong> engineers bespoke ERP systems from the ground up to match your organization's exact approval hierarchies, multi-branch chart of accounts, real-time inventory tracking, and executive BI analytics.
            </p>
            <p class="section-desc">
              We design modular, high-security ecosystems that unify fragmented business units into one central operational cockpit—eliminating redundant paperwork, automating complex workflows, and ensuring real-time auditability.
            </p>

            <!-- Technology Stack Showcase Grid -->
            <h3 class="subsection-title">Enterprise Technology Stack:</h3>
            <div class="tech-showcase-grid">
              <!-- Frontend & Interface Architecture -->
              <div class="tech-category-block">
                <div class="tech-cat-header">
                  <div class="tech-cat-icon icon-orange">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="ERP Frontend" width="24" height="24" />
                  </div>
                  <div>
                    <h4 class="tech-cat-title">Frontend &amp; Workspaces</h4>
                    <span class="tech-cat-label label-orange">Dynamic UI &amp; BI Dashboards</span>
                  </div>
                </div>
                <div class="tech-items-wrap">
                  <div class="tech-item-chip">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue 3" width="18" height="18" />
                    <span>Vue 3 / Pinia</span>
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
                  <div class="tech-item-chip">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5 Print" width="18" height="18" />
                    <span>Print Engine / PDF</span>
                  </div>
                </div>
              </div>

              <!-- Backend & High-Availability Database -->
              <div class="tech-category-block">
                <div class="tech-cat-header">
                  <div class="tech-cat-icon icon-indigo">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="ERP Backend" width="24" height="24" />
                  </div>
                  <div>
                    <h4 class="tech-cat-title">Core Backend &amp; Data</h4>
                    <span class="tech-cat-label label-indigo">Transactional Integrity &amp; APIs</span>
                  </div>
                </div>
                <div class="tech-items-wrap">
                  <div class="tech-item-chip">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel" width="18" height="18" />
                    <span>Laravel (PHP)</span>
                  </div>
                  <div class="tech-item-chip">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" width="18" height="18" />
                    <span>PostgreSQL</span>
                  </div>
                  <div class="tech-item-chip">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" width="18" height="18" />
                    <span>MySQL Enterprise</span>
                  </div>
                  <div class="tech-item-chip">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis Cache" width="18" height="18" />
                    <span>Redis Caching</span>
                  </div>
                  <div class="tech-item-chip">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" width="18" height="18" />
                    <span>Docker / CI/CD</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Key ERP Capabilities (2 per row) -->
            <h3 class="subsection-title" style="margin-top: 2.75rem;">Key Architecture Capabilities:</h3>
            <div class="feature-box-grid">
              <div class="feature-card">
                <div class="feature-icon-wrapper" style="background: rgba(37, 99, 235, 0.08); color: #2563EB;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                </div>
                <h4>Modular Architecture</h4>
                <p>Plug-and-play finance, HRM, procurement, inventory warehouses, and automated compliance tailored to your organizational blueprint.</p>
              </div>

              <div class="feature-card">
                <div class="feature-icon-wrapper" style="background: rgba(16, 185, 129, 0.08); color: #059669;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <h4>Multi-Branch Data Sync</h4>
                <p>Real-time encrypted synchronization and consolidation across regional office branches, warehouses, and overseas operations hubs.</p>
              </div>

              <div class="feature-card">
                <div class="feature-icon-wrapper" style="background: rgba(79, 70, 229, 0.08); color: #4F46E5;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                </div>
                <h4>Executive BI &amp; Analytics</h4>
                <p>Visual reporting dashboards, automated P&amp;L statements, cash-flow projections, KPI alerts, and immutable database audit trails.</p>
              </div>

              <div class="feature-card">
                <div class="feature-icon-wrapper" style="background: rgba(234, 88, 12, 0.08); color: #EA580C;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h4>Approval Workflows &amp; RBAC</h4>
                <p>Multi-tier requisition approvals, granular user permissions, activity history logs, and automated document generation for print.</p>
              </div>
            </div>

            <!-- Development Process Card -->
            <div class="dev-process-card">
              <div class="process-header">
                <span class="process-badge">✓ ERP Implementation Roadmap</span>
              </div>
              <div class="process-steps">
                <div class="process-step">
                  <div class="step-number step-1">1</div>
                  <div>
                    <h4 class="step-title">Business Process Mapping &amp; Schema Engineering</h4>
                    <p class="step-desc">In-depth workflow scoping, relational database schema mapping, role hierarchies, and ledger architecture.</p>
                  </div>
                </div>
                <div class="process-step">
                  <div class="step-number step-2">2</div>
                  <div>
                    <h4 class="step-title">Modular Development &amp; Legacy Data Migration</h4>
                    <p class="step-desc">Sprint-based module deployment, legacy spreadsheet/SQL data cleansing, and continuous user acceptance tests.</p>
                  </div>
                </div>
                <div class="process-step">
                  <div class="step-number step-3">3</div>
                  <div>
                    <h4 class="step-title">Production Cutover, Training &amp; Ongoing SLA</h4>
                    <p class="step-desc">On-premise/cloud deployment, staff onboarding sessions, automated offsite backups, and long-term SLA maintenance.</p>
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
              <p class="form-card-desc">Ready to build or upgrade your enterprise ERP system? Speak directly with our Lead Architect.</p>

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
                  <label class="form-label">Corporate Email *</label>
                  <input 
                    type="email" 
                    v-model="form.email" 
                    class="custom-input" 
                    required 
                  />
                </div>

                <div class="form-group">
                  <label class="form-label">Primary ERP Focus *</label>
                  <div class="select-box-wrap">
                    <select v-model="form.erpType" class="custom-input custom-select" required>
                      <option value="">-- Select Primary Focus --</option>
                      <option value="complete-erp">Full Enterprise ERP (All Modules)</option>
                      <option value="inventory-pos">Inventory, Warehouse &amp; POS System</option>
                      <option value="accounts-finance">Accounts, Billing &amp; Financial Ledger</option>
                      <option value="hrm-payroll">HRM, Attendance &amp; Payroll Management</option>
                      <option value="supply-chain">Supply Chain &amp; Manufacturing ERP</option>
                    </select>
                    <svg class="select-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label">ERP Scope Summary</label>
                  <textarea 
                    v-model="form.scope" 
                    class="custom-input custom-textarea" 
                    rows="3"
                  ></textarea>
                </div>

                <div v-if="submitted" class="success-alert">
                  ✓ Consultation request received! Our Lead Architect will contact you within 24 hours.
                </div>

                <button type="submit" class="btn btn-primary btn-submit-project">
                  Get Free Consultation
                </button>

                <div class="sidebar-contact-info">
                  <span>Call Hotline: <a href="tel:+8801891151713">+88 01891151713</a></span>
                  <span>Email Us: <a href="mailto:info@nsmlimited.com">info@nsmlimited.com</a></span>
                  <span>🛡️ Non-Disclosure Agreement (NDA) Protected</span>
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
              <span class="global-cta-badge">⚙️ Custom ERP Architecture</span>
              <span class="global-cta-badge">🛡️ NDA Protected</span>
            </div>
            <h2>Transform Your Enterprise Operations with NSM Limited</h2>
            <p>Get a complete technical proposal, modular roadmap, and cost estimation tailored to your organization's exact operational requirements.</p>
          </div>
          <div class="global-cta-actions">
            <a href="tel:+8801891151713" class="btn btn-call-now btn-lg btn-pulse">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>Call Now: +8801891151713</span>
            </a>
            <router-link to="/contact" class="btn btn-primary btn-lg">Request Custom Proposal</router-link>
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
  erpType: '',
  scope: ''
})

const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.name = ''
    form.email = ''
    form.erpType = ''
    form.scope = ''
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