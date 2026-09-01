<template>
  <div class="product-page">
    <section class="page-banner">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link> &gt; <router-link to="/products">Products</router-link> &gt; <span>Hostel Management ERP</span>
        </div>
        <h1 class="section-title">Hostel Management ERP</h1>
        <p class="section-subtitle">End-to-end residential dormitory and student/staff hostel management ERP handling room allocation, mess meal billing, and biometric access.</p>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <div class="detail-grid">
          <div>
            <span class="section-tag" style="border-color: #0D9488; color: #0D9488;"><span class="live-dot" style="background: #0D9488;"></span> Residential & Dormitory ERP</span>
            <h2 style="font-size: 2.25rem; margin-bottom: 1.5rem;">Turnkey Hostel, Mess & Resident Administration</h2>
            <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.8; margin-bottom: 2rem;">
              The <strong>Hostel Management ERP by NSM Limited</strong> streamlines residential operations for universities, medical colleges, polytechnics, training institutes, and corporate hostels. It automates room & bed seat allocation, student mess meal accounting, biometric gate attendance, digital gate pass approvals, visitor security logs, room asset inventory, and monthly fee collections.
            </p>

            <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Core Feature Modules:</h3>
            <div class="feature-box-grid">
              <div class="feature-box">
                <h4>1. Dynamic Block, Room & Bed Seat Matrix</h4>
                <p>Hostel building, floor, room type, and bed seat vacancy mapping with automated student seat allotment and transfer logs.</p>
              </div>
              <div class="feature-box">
                <h4>2. Student Mess & Dining Meal Management</h4>
                <p>Daily breakfast/lunch/dinner meal counting, mess subscription packages, special guest meal tokens, and monthly dining bill generation.</p>
              </div>
              <div class="feature-box">
                <h4>3. Biometric Gate Access & Digital Gate Pass</h4>
                <p>Biometric fingerprint/face attendance at hostel gates, curfew breach alerts, and online parent SMS gate pass approval system.</p>
              </div>
              <div class="feature-box">
                <h4>4. Fee Collection, Utilities & Dues Ledger</h4>
                <p>Monthly seat rent, electricity/service charge invoicing, online bKash/Nagad/card payment integration, and automatic dues reports.</p>
              </div>
              <div class="feature-box">
                <h4>5. Maintenance & Room Asset Inventory Control</h4>
                <p>Resident complaint ticketing, furniture asset tracking, room inspection logs, and security guard visitor registers.</p>
              </div>
            </div>
          </div>

          <div class="sidebar-cta-card">
            <h3>Request Hostel ERP Demo</h3>
            <p>Schedule a live demo of seat allocation, mess billing & biometric gate pass control.</p>
            <form @submit.prevent="handleDemoSubmit">
              <div class="form-group">
                <label class="form-label">Hostel / Campus / Org Name *</label>
                <input type="text" v-model="form.hotel" class="form-input" required placeholder="e.g. University Residential Hall">
              </div>
              <div class="form-group">
                <label class="form-label">Warden / Manager Email *</label>
                <input type="email" v-model="form.email" class="form-input" required placeholder="warden@campus.edu">
              </div>
              <div class="form-group">
                <label class="form-label">Contact Phone *</label>
                <input type="tel" v-model="form.phone" class="form-input" required placeholder="+88 018...">
              </div>

              <div v-if="submitted" style="margin-bottom: 1rem; padding: 0.5rem; background: rgba(16, 185, 129, 0.2); border: 1px solid #10B981; border-radius: 6px; color: #34D399; font-size: 0.85rem; font-weight: 600;">
                ✓ Hostel demo request received! Our engineering team will call you shortly.
              </div>

              <button type="submit" class="btn btn-primary btn-lg btn-pulse" style="width: 100%;">Book Hostel ERP Demo ⚡</button>
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
              <span class="global-cta-badge" style="background: rgba(13, 148, 136, 0.2); border-color: rgba(13, 148, 136, 0.4); color: #99F6E4;">🏢 Hostel & Dormitory ERP</span>
              <span class="global-cta-badge">⚡ Real-time Biometric & Mess Sync</span>
            </div>
            <h2>Modernize Your Residential Dormitory & Hostel Administration</h2>
            <p>Empower your wardens, mess managers, and accounts officers with centralized real-time room control and digital billing.</p>
          </div>
          <div class="global-cta-actions">
            <a href="tel:+8801891151715" class="btn btn-call-now btn-lg btn-pulse">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Hotline: +8801891151715</span>
            </a>
            <router-link to="/contact" class="btn btn-primary btn-lg" style="background: linear-gradient(135deg, #E11D48 0%, #4B53C6 100%);">Schedule Hostel Demo</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  hotel: '',
  email: '',
  phone: ''
})

const submitted = ref(false)

function handleDemoSubmit() {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.hotel = ''
    form.email = ''
    form.phone = ''
  }, 3000)
}
</script>
