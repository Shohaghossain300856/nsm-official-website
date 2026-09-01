<template>
  <div class="product-page">
    <section class="page-banner">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link> &gt; <router-link to="/products">Products</router-link> &gt; <span>Medical College Management ERP</span>
        </div>
        <h1 class="section-title">Medical College Management ERP</h1>
        <p class="section-subtitle">National benchmark medical academic suite engineered for Government & Private Medical Colleges in Bangladesh.</p>
      </div>
    </section>

    <!-- Content -->
    <section class="section-padding" style="background: #FFFFFF;">
      <div class="container">
        <div class="detail-grid">
          <div>
            <span class="section-tag" style="border-color: #2563EB; color: #2563EB;"><span class="live-dot" style="background: #2563EB;"></span> Medical Education ERP Suite</span>
            <h2 style="font-size: 2.25rem; margin-bottom: 1.5rem;">Comprehensive Medical Campus & Clinical Administration</h2>
            <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.8; margin-bottom: 2rem;">
              The <strong>Medical College Management ERP by NSM Limited</strong> is the trusted digital backbone for leading medical colleges (including Dhaka Medical College, Rangpur Medical College, Dinajpur Medical College, Comilla Medical College, Satkhira Medical College, and Mymensingh Medical College). It seamlessly automates MBBS & BDS student admissions, clinical rotations, BMDC curriculum compliance, ward training logbooks, professor duty rosters, professional university exam grading, and student fee collection.
            </p>

            <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Core Feature Modules:</h3>
            <div class="feature-box-grid">
              <div class="feature-box">
                <h4>1. BMDC Curriculum & MBBS Phase Workflows</h4>
                <p>Phase 1-4 curriculum management, subject credit distribution, lecture timetables, and academic term scheduling.</p>
              </div>
              <div class="feature-box">
                <h4>2. Clinical Ward Postings & Student Logbooks</h4>
                <p>Ward placement duty tracking, clinical case logbook verification, and biometric attendance for medical interns & students.</p>
              </div>
              <div class="feature-box">
                <h4>3. Professor & Department Roster Management</h4>
                <p>Departmental head administration, professor lecture schedules, clinical hospital duties, and faculty payroll.</p>
              </div>
              <div class="feature-box">
                <h4>4. Professional MBBS Exam & Transcript Engine</h4>
                <p>University professional exam seat allocation, internal assessment tabulation, and automated transcript/certificate generation.</p>
              </div>
              <div class="feature-box">
                <h4>5. Medical Library & Fee Collection Ledger</h4>
                <p>Medical journal access control, tuition fee collection with automated SMS notifications, and dormitory management.</p>
              </div>
            </div>
          </div>

          <div class="sidebar-cta-card">
            <h3>Request Medical College Demo</h3>
            <p>Schedule a live presentation with our medical education ERP engineering team.</p>

            <form @submit.prevent="handleDemoSubmit">
              <div class="form-group">
                <label class="form-label" style="color: #CBD5E1;">Medical College / Institution Name *</label>
                <input type="text" v-model="form.institution" class="form-input" required placeholder="e.g. Rangpur Medical College">
              </div>
              <div class="form-group">
                <label class="form-label" style="color: #CBD5E1;">Principal / Admin Email *</label>
                <input type="email" v-model="form.email" class="form-input" required placeholder="principal@medical.edu.bd">
              </div>
              <div class="form-group">
                <label class="form-label" style="color: #CBD5E1;">Phone Hotlines *</label>
                <input type="tel" v-model="form.phone" class="form-input" required placeholder="+88 018...">
              </div>

              <div v-if="submitted" style="margin-bottom: 1rem; padding: 0.5rem; background: rgba(16, 185, 129, 0.2); border: 1px solid #10B981; border-radius: 6px; color: #34D399; font-size: 0.85rem; font-weight: 600;">
                ✓ Demo request received! Our medical solutions team will contact you shortly.
              </div>

              <button type="submit" class="btn btn-primary btn-lg btn-pulse" style="width: 100%;">Request Live Demo ⚡</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Global Conversion Banner -->
    <section class="global-cta-section">
      <div class="container">
        <div class="global-cta-banner" style="background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 60%, #881337 100%);">
          <div class="global-cta-content">
            <div class="global-cta-badges">
              <span class="global-cta-badge">🩺 Medical College ERP</span>
              <span class="global-cta-badge">⚡ Trusted by National Leaders</span>
            </div>
            <h2>Ready to Transform Your Medical College Administration?</h2>
            <p>Request a custom medical campus architecture proposal, BMDC compliance demo, or full ERP implementation plan.</p>
          </div>
          <div class="global-cta-actions">
            <a href="tel:+8801891151715" class="btn btn-call-now btn-lg btn-pulse">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Hotline: +8801891151715</span>
            </a>
            <router-link to="/contact" class="btn btn-primary btn-lg" style="background: linear-gradient(135deg, #E11D48 0%, #4B53C6 100%);">Request Live Demo</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  institution: '',
  email: '',
  phone: ''
})

const submitted = ref(false)

function handleDemoSubmit() {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.institution = ''
    form.email = ''
    form.phone = ''
  }, 3000)
}
</script>
