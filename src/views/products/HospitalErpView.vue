<template>
  <div class="product-page">
    <section class="page-banner">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link> &gt; <router-link to="/products">Products</router-link> &gt; <span>Eye Hospital Management ERP</span>
        </div>
        <h1 class="section-title">Eye Hospital Management ERP</h1>
        <p class="section-subtitle">Specialized ophthalmic hospital ERP managing refraction diagnostics, optical store inventory, surgical OT queues, and patient records.</p>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <div class="detail-grid">
          <div>
            <span class="section-tag" style="border-color: #BE123C; color: #BE123C;"><span class="live-dot" style="background: #BE123C;"></span> Ophthalmology ERP Suite</span>
            <h2 style="font-size: 2.25rem; margin-bottom: 1.5rem;">Specialized Eye Care & Surgical Administration</h2>
            <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.8; margin-bottom: 2rem;">
              The <strong>Eye Hospital Management ERP by NSM Limited</strong> is a clinical and surgical ecosystem engineered specifically for Eye Hospitals, Vision Centers, and Ophthalmic Clinics. It seamlessly coordinates patient visual acuity testing, auto-refractometer data sync, slit-lamp diagnostics, cataract surgical OT scheduling, optical store lens POS, and cold-chain eye drop pharmacy operations into a single high-speed platform.
            </p>

            <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Core Feature Modules:</h3>
            <div class="feature-box-grid">
              <div class="feature-box">
                <h4>1. Ophthalmic EMR & Refraction Examination</h4>
                <p>Visual acuity testing, auto-refractometer sync, slit-lamp diagnostic notes, and automated spectacle/lens prescription generation.</p>
              </div>
              <div class="feature-box">
                <h4>2. Cataract & Eye Surgery OT Scheduling</h4>
                <p>Pre-operative evaluations, intraocular lens (IOL) power calculation, OT room scheduling, surgeon notes, and post-op follow-up logs.</p>
              </div>
              <div class="feature-box">
                <h4>3. Optical Store POS & Lens Barcode Inventory</h4>
                <p>Spectacle frames, contact lens, and optical glass barcode tracking with integrated prescription-to-cashier POS workflows.</p>
              </div>
              <div class="feature-box">
                <h4>4. Specialized Eye Pharmacy & Cold-Chain Control</h4>
                <p>Eye drop batch expiry alerts, temperature-controlled drug inventory, automated refill reminders, and billing integration.</p>
              </div>
              <div class="feature-box">
                <h4>5. Day-Care Package Billing & Insurance Claims</h4>
                <p>Phaco/Cataract package billing, health insurance cashless processing, corporate eye camp tracking, and executive analytics.</p>
              </div>
            </div>
          </div>

          <div class="sidebar-cta-card">
            <h3>Request Eye Hospital Demo</h3>
            <p>Schedule a live demonstration tailored for your eye hospital or vision clinic.</p>
            <form @submit.prevent="handleDemoSubmit">
              <div class="form-group">
                <label class="form-label">Eye Hospital / Clinic Name *</label>
                <input type="text" v-model="form.hospital" class="form-input" required placeholder="e.g. City Eye Hospital & Institute">
              </div>
              <div class="form-group">
                <label class="form-label">Director / Administrator Email *</label>
                <input type="email" v-model="form.email" class="form-input" required placeholder="admin@eyehospital.org">
              </div>
              <div class="form-group">
                <label class="form-label">Contact Phone *</label>
                <input type="tel" v-model="form.phone" class="form-input" required placeholder="+88 018...">
              </div>

              <div v-if="submitted" style="margin-bottom: 1rem; padding: 0.5rem; background: rgba(16, 185, 129, 0.2); border: 1px solid #10B981; border-radius: 6px; color: #34D399; font-size: 0.85rem; font-weight: 600;">
                ✓ Demo request received! Our ophthalmic solutions desk will reach out shortly.
              </div>

              <button type="submit" class="btn btn-primary btn-lg btn-pulse" style="width: 100%;">Book Eye Hospital Demo ⚡</button>
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
              <span class="global-cta-badge" style="background: rgba(225, 29, 72, 0.2); border-color: rgba(225, 29, 72, 0.4); color: #FECDD3;">👁️ Specialized Eye Care ERP</span>
              <span class="global-cta-badge">⚡ Refraction to OT Automation</span>
            </div>
            <h2>Modernize Your Eye Hospital & Vision Center Operations</h2>
            <p>Connect patient refraction flow, cataract surgical OT queues, optical store POS, and eye pharmacy with zero data loss.</p>
          </div>
          <div class="global-cta-actions">
            <a href="tel:+8801891151715" class="btn btn-call-now btn-lg btn-pulse">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Hotline: +8801891151715</span>
            </a>
            <router-link to="/contact" class="btn btn-primary btn-lg" style="background: linear-gradient(135deg, #E11D48 0%, #4B53C6 100%);">Schedule Ophthalmic Demo</router-link>
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
