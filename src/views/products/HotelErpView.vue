<template>
  <div class="product-page">
    <section class="page-banner">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link> &gt; <router-link to="/products">Products</router-link> &gt; <span>Hotel Management System</span>
        </div>
        <h1 class="section-title">Hotel & Hospitality Management System</h1>
        <p class="section-subtitle">Turnkey hotel operations ERP managing reservations, OTA channel sync, front-desk check-in, restaurant POS, and automated night audit.</p>
      </div>
    </section>

    <section class="section-padding" style="background: #FFFFFF;">
      <div class="container">
        <div class="detail-grid">
          <div>
            <span class="section-tag">Hospitality ERP</span>
            <h2 style="font-size: 2.25rem; margin-bottom: 1.5rem;">Turnkey Property & Guest Operations</h2>
            <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.8; margin-bottom: 2rem;">
              The <strong>Hotel Management System by NSM Limited</strong> handles online OTA channel bookings, front-desk check-in/out, key card interface, room housekeeping, restaurant POS folios, banquet hall bookings, and automated night audit financial reporting.
            </p>

            <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Core Feature Modules (Attachment Specs):</h3>
            <div class="feature-box-grid">
              <div class="feature-box">
                <h4>1. Reservations, Check-In/Out & Guest Info</h4>
                <p>Channel manager sync, walk-in bookings, digital key card integration, & ID scanner.</p>
              </div>
              <div class="feature-box">
                <h4>2. Room, Bed & Facility Operations</h4>
                <p>Housekeeping status, laundry tracking, maintenance requests, & room inspection logs.</p>
              </div>
              <div class="feature-box">
                <h4>3. Billing, Payments & Financials</h4>
                <p>Folio splitting, restaurant POS integration, multi-currency payment checkout, & tax invoices.</p>
              </div>
              <div class="feature-box">
                <h4>4. Service & Amenities Management</h4>
                <p>Spa, swimming pool, banquet room bookings, & concierge ticketing control.</p>
              </div>
              <div class="feature-box">
                <h4>5. Administration, Security & Reporting</h4>
                <p>Automated night audit reports, RevPAR analytics, & manager override security logs.</p>
              </div>
            </div>
          </div>

          <div class="sidebar-cta-card">
            <h3>Request Hospitality Demo</h3>
            <p>Schedule a live demo of front-desk check-in, OTA sync, & POS billing.</p>
            <form @submit.prevent="handleDemoSubmit">
              <div class="form-group">
                <label class="form-label" style="color: #CBD5E1;">Hotel / Resort Name *</label>
                <input type="text" v-model="form.hotel" class="form-input" required placeholder="e.g. Grand Resort">
              </div>
              <div class="form-group">
                <label class="form-label" style="color: #CBD5E1;">Work Email *</label>
                <input type="email" v-model="form.email" class="form-input" required placeholder="manager@hotel.com">
              </div>
              <div class="form-group">
                <label class="form-label" style="color: #CBD5E1;">Contact Phone *</label>
                <input type="tel" v-model="form.phone" class="form-input" required placeholder="+88 018...">
              </div>

              <div v-if="submitted" style="margin-bottom: 1rem; padding: 0.5rem; background: rgba(16, 185, 129, 0.2); border: 1px solid #10B981; border-radius: 6px; color: #34D399; font-size: 0.85rem; font-weight: 600;">
                ✓ Hospitality demo request received! Our engineer will call you shortly.
              </div>

              <button type="submit" class="btn btn-primary btn-lg btn-pulse" style="width: 100%;">Book Hospitality Demo ⚡</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="global-cta-section">
      <div class="container">
        <div class="global-cta-banner">
          <div class="global-cta-content">
            <div class="global-cta-badges">
              <span class="global-cta-badge">🏨 Hotel & Resort ERP</span>
              <span class="global-cta-badge">⚡ Real-time Channel Manager Sync</span>
            </div>
            <h2>Elevate Guest Experience & Automate Daily Operations</h2>
            <p>Empower your front desk, restaurant POS, and housekeeping staff with real-time room control.</p>
          </div>
          <div class="global-cta-actions">
            <a href="tel:+8801891151713" class="btn btn-call-now btn-lg btn-pulse">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Call Now: +8801891151713, 14, 15, 17</span>
            </a>
            <router-link to="/contact" class="btn btn-primary btn-lg">Schedule Property Walkthrough</router-link>
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
