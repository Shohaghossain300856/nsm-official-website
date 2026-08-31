<template>
  <div class="product-page">
    <section class="page-banner">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link> &gt; <router-link to="/products">Products</router-link> &gt; <span>Medical College Management System</span>
        </div>
        <h1 class="section-title">Medical College Management System</h1>
        <p class="section-subtitle">National healthcare benchmark ERP connecting patient admissions, doctor scheduling, student grading, diagnostic LIMS, and hospital operations.</p>
      </div>
    </section>

    <section class="section-padding" style="background: #FFFFFF;">
      <div class="container">
        <div class="detail-grid">
          <div>
            <span class="section-tag" style="border-color: #E11D48; color: #BE123C;"><span class="live-dot" style="background: #E11D48;"></span> Healthcare ERP</span>
            <h2 style="font-size: 2.25rem; margin-bottom: 1.5rem;">Integrated Medical Facility Care</h2>
            <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.8; margin-bottom: 2rem;">
              The <strong>Hospital Management System by NSM Limited</strong> connects patient registration, doctor OPD/IPD scheduling, EHR history, sample barcode lab diagnostics, pharmacy inventory, and unified revenue cycle billing into a single HIPAA/ISO compliant platform.
            </p>

            <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Core Feature Modules (Attachment Specs):</h3>
            <div class="feature-box-grid">
              <div class="feature-box">
                <h4>1. Patient Registration & Clinical Workflow</h4>
                <p>OPD/IPD admission, doctor scheduling, electronic health records (EHR), & bed allocation.</p>
              </div>
              <div class="feature-box">
                <h4>2. Clinical Services & Diagnostics</h4>
                <p>Pathology lab orders, radiology reports, sample barcode tracking, & test templates.</p>
              </div>
              <div class="feature-box">
                <h4>3. Billing, Insurance & Revenue Cycle</h4>
                <p>Unified patient billing, health insurance claims, corporate package billing, & receipt logs.</p>
              </div>
              <div class="feature-box">
                <h4>4. Pharmacy, Inventory & Asset</h4>
                <p>Medicine batch expiry alerts, OT equipment inventory, prescription sync, & stock logs.</p>
              </div>
              <div class="feature-box">
                <h4>5. Administration, HR & Reporting Control</h4>
                <p>Doctor commission calculation, duty rosters, audit logs, & administrative reporting.</p>
              </div>
            </div>
          </div>

          <div class="sidebar-cta-card">
            <h3>Request Healthcare Presentation</h3>
            <p>Schedule a clinical ERP software demo with our healthcare IT team.</p>
            <form @submit.prevent="handleDemoSubmit">
              <div class="form-group">
                <label class="form-label" style="color: #CBD5E1;">Hospital / Clinic Name *</label>
                <input type="text" v-model="form.hospital" class="form-input" required placeholder="e.g. City General Hospital">
              </div>
              <div class="form-group">
                <label class="form-label" style="color: #CBD5E1;">Contact Person Email *</label>
                <input type="email" v-model="form.email" class="form-input" required placeholder="admin@hospital.org">
              </div>
              <div class="form-group">
                <label class="form-label" style="color: #CBD5E1;">Contact Phone *</label>
                <input type="tel" v-model="form.phone" class="form-input" required placeholder="+88 018...">
              </div>

              <div v-if="submitted" style="margin-bottom: 1rem; padding: 0.5rem; background: rgba(16, 185, 129, 0.2); border: 1px solid #10B981; border-radius: 6px; color: #34D399; font-size: 0.85rem; font-weight: 600;">
                ✓ Presentation request received! Our medical solutions desk will reach out shortly.
              </div>

              <button type="submit" class="btn btn-primary btn-lg btn-pulse" style="width: 100%;">Book Healthcare Demo ⚡</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="global-cta-section">
      <div class="container">
        <div class="global-cta-banner" style="background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 60%, #881337 100%);">
          <div class="global-cta-content">
            <div class="global-cta-badges">
              <span class="global-cta-badge" style="background: rgba(225, 29, 72, 0.2); border-color: rgba(225, 29, 72, 0.4); color: #FECDD3;">🏥 National Healthcare Benchmark</span>
              <span class="global-cta-badge">🛡️ Proven across 10+ Medical Colleges</span>
            </div>
            <h2>Modernize Your Hospital & Clinical Operations</h2>
            <p>Connect patient OPD/IPD flow, diagnostic laboratories, and pharmacy billing with zero data loss.</p>
          </div>
          <div class="global-cta-actions">
            <a href="tel:+8801891151715" class="btn btn-call-now btn-lg btn-pulse">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Hospital Support: +8801891151715</span>
            </a>
            <router-link to="/contact" class="btn btn-primary btn-lg" style="background: linear-gradient(135deg, #E11D48 0%, #4B53C6 100%);">Schedule Clinical Demo</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  hospital: '',
  email: '',
  phone: ''
})

const submitted = ref(false)

function handleDemoSubmit() {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.hospital = ''
    form.email = ''
    form.phone = ''
  }, 3000)
}
</script>
