<template>
  <div class="service-page">
    <!-- Page Banner -->
    <section class="page-banner">
      <div class="container">
        <div class="breadcrumb" style="margin-bottom: 1rem;">
          <router-link to="/">Home</router-link> &gt; <router-link to="/services">Services</router-link> &gt; <span>IT Audit &amp; Consulting</span>
        </div>
        <h1 class="section-title" style="margin-top: 1rem; margin-bottom: 1.25rem;">
          IT Audit, Consulting &amp; <span class="text-gradient">Professional Training</span>
        </h1>
        <p class="section-subtitle" style="max-width: 760px; line-height: 1.8;">
          Enterprise-grade technology audits, infrastructure vulnerability assessments, codebase security evaluations, and corporate workforce training programs for organizations scaling their digital operations.
        </p>
      </div>
    </section>

    <!-- Core Content -->
    <section class="section-padding" style="background: #FFFFFF;">
      <div class="container">
        <div class="detail-grid">
          <div>
            <span class="region-pill">ENTERPRISE IT AUDIT & CONSULTING</span>
            <h2 class="region-title">Corporate Technology Assurance & Professional Training</h2>
            <p class="region-desc" style="margin-bottom: 1.5rem;">
              <strong>NSM Limited</strong> conducts rigorous IT infrastructure audits, codebase security vulnerability evaluations, architecture performance reviews, and custom professional training programs for companies upgrading their technology stack, migrating to cloud platforms, or preparing for regulatory compliance.
            </p>
            <p class="region-desc" style="margin-bottom: 2rem;">
              Our certified audit engineers deliver comprehensive reports covering system architecture gaps, security vulnerabilities, scalability bottlenecks, and actionable remediation roadmaps for enterprise environments.
            </p>

            <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Core Audit & Training Modules:</h3>
            <div class="feature-box-grid">
              <div class="feature-box">
                <h4>🔍 Architecture & Infrastructure Review</h4>
                <p>Comprehensive analysis of server architecture, network topology, database performance, and identifying bottlenecks, single points of failure, and scalability risks.</p>
              </div>
              <div class="feature-box">
                <h4>🛡️ Security Vulnerability Assessment</h4>
                <p>Penetration testing, OWASP Top 10 vulnerability scanning, API security evaluation, and data encryption compliance auditing for enterprise applications.</p>
              </div>
              <div class="feature-box">
                <h4>📊 Codebase Quality & Performance Audit</h4>
                <p>Code review for legacy systems, technical debt assessment, performance profiling, and refactoring recommendations with measurable improvement metrics.</p>
              </div>
              <div class="feature-box">
                <h4>🎓 Professional Corporate Training</h4>
                <p>Up-skilling in-house development teams in modern web frameworks, DevOps CI/CD pipelines, cloud architecture (AWS/GCP), and cybersecurity best practices.</p>
              </div>
            </div>

            <!-- Audit Methodology Highlight -->
            <div class="audit-methodology-card">
              <div class="methodology-header">
                <span class="region-pill" style="background: rgba(16, 185, 129, 0.06); border-color: rgba(16, 185, 129, 0.2); color: #059669; margin-bottom: 0;">✓ Our Audit Methodology</span>
              </div>
              <div class="methodology-steps">
                <div class="methodology-step">
                  <div class="step-number" style="background: rgba(79, 70, 229, 0.08); color: #4F46E5;">1</div>
                  <div>
                    <h4 style="font-size: 1rem; color: #0F172A; margin-bottom: 0.25rem;">Discovery & Scoping</h4>
                    <p style="font-size: 0.875rem; color: var(--text-muted);">Define audit boundaries, document existing infrastructure, and establish success criteria.</p>
                  </div>
                </div>
                <div class="methodology-step">
                  <div class="step-number" style="background: rgba(37, 99, 235, 0.08); color: #2563EB;">2</div>
                  <div>
                    <h4 style="font-size: 1rem; color: #0F172A; margin-bottom: 0.25rem;">Deep Technical Analysis</h4>
                    <p style="font-size: 0.875rem; color: var(--text-muted);">Execute penetration tests, code reviews, performance profiling, and security scans.</p>
                  </div>
                </div>
                <div class="methodology-step">
                  <div class="step-number" style="background: rgba(6, 182, 212, 0.08); color: #0284C7;">3</div>
                  <div>
                    <h4 style="font-size: 1rem; color: #0F172A; margin-bottom: 0.25rem;">Report & Remediation Roadmap</h4>
                    <p style="font-size: 0.875rem; color: var(--text-muted);">Deliver executive summary, prioritized findings, and actionable fix recommendations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar CTA Form -->
          <div class="sidebar-cta-card">
            <h3>Schedule IT Audit</h3>
            <p>Ensure security, compliance, and optimal performance for your enterprise systems.</p>
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label class="form-label">Full Name *</label>
                <input type="text" v-model="form.name" class="form-input" required>
              </div>
              <div class="form-group">
                <label class="form-label">Company Email *</label>
                <input type="email" v-model="form.email" class="form-input" required>
              </div>
              <div class="form-group">
                <label class="form-label">Audit Type *</label>
                <select v-model="form.auditType" class="form-input" required style="cursor: pointer;">
                  <option value="">-- Select Audit Type --</option>
                  <option value="infrastructure">Infrastructure & Architecture Audit</option>
                  <option value="security">Security Vulnerability Assessment</option>
                  <option value="codebase">Codebase Quality & Performance Audit</option>
                  <option value="training">Corporate Professional Training</option>
                  <option value="comprehensive">Comprehensive Full Audit</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Brief Scope Description</label>
                <textarea v-model="form.scope" class="form-textarea" rows="3"></textarea>
              </div>

              <div v-if="submitted" style="margin-bottom: 1rem; padding: 0.75rem 1rem; background: #ECFDF5; border: 1px solid #10B981; border-radius: 8px; color: #065F46; font-size: 0.875rem; font-weight: 600;">
                ✓ Request received! Our audit team will contact you within 24 hours.
              </div>

              <button type="submit" class="btn btn-primary btn-lg btn-pulse">Book Audit Consultation ⚡</button>

              <!-- Trust Indicators -->
              <div class="sidebar-contact-info">
                <span>📞 Hotline: <a href="tel:+8801891151713">+88 01891151713</a></span>
                <span>✉️ Email: <a href="mailto:info@nsmlimited.com">info@nsmlimited.com</a></span>
                <span>🔒 Confidential & NDA-Protected</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="global-cta-section">
      <div class="container">
        <div class="global-cta-banner">
          <div class="global-cta-content">
            <div class="global-cta-badges">
              <span class="global-cta-badge">📋 Enterprise IT Audit</span>
              <span class="global-cta-badge">🔒 ISO Security Evaluation</span>
            </div>
            <h2>Need an Independent Code & Security Audit?</h2>
            <p>Book a confidential system audit with NSM Limited's certified security architects and receive actionable remediation reports.</p>
          </div>
          <div class="global-cta-actions">
            <a href="tel:+8801891151713" class="btn btn-call-now btn-lg btn-pulse">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Call Now: +8801891151715</span>
            </a>
            <router-link to="/contact" class="btn btn-primary btn-lg">Schedule Security Audit</router-link>
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
  auditType: '',
  scope: ''
})

const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.name = ''
    form.email = ''
    form.auditType = ''
    form.scope = ''
  }, 3500)
}
</script>

<style scoped>
/* Audit Methodology Card */
.audit-methodology-card {
  margin-top: 2.5rem;
  background: linear-gradient(160deg, #FFFFFF 0%, #F8FAFC 100%);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-md);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
}

.methodology-header {
  margin-bottom: 1.5rem;
}

.methodology-steps {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.methodology-step {
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
  font-family: var(--font-heading);
}

/* Form Select Styling */
.sidebar-cta-card .form-input[type=""],
.sidebar-cta-card select.form-input {
  appearance: auto;
}

.sidebar-cta-card .form-textarea {
  background: #FFFFFF;
  border: 1.5px solid #CBD5E1;
  color: #0F172A;
  border-radius: var(--radius-sm);
  padding: 0.75rem 1rem;
  width: 100%;
  font-size: 0.925rem;
  font-family: var(--font-body);
  transition: all var(--transition-fast);
  resize: vertical;
  min-height: 80px;
}

.sidebar-cta-card .form-textarea:focus {
  outline: none;
  border-color: #2563EB;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
  background: #FFFFFF;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .audit-methodology-card {
    padding: 1.5rem 1.25rem;
  }

  .methodology-step {
    gap: 0.75rem;
  }

  .step-number {
    width: 32px;
    height: 32px;
    min-width: 32px;
    font-size: 0.9rem;
  }
}
</style>
