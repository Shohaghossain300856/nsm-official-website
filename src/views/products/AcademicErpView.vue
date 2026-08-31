<template>
  <div class="product-page">
    <section class="page-banner">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link> &gt; <router-link to="/products">Products</router-link> &gt; <span>Academic Management System</span>
        </div>
        <h1 class="section-title">Academic Management System</h1>
        <p class="section-subtitle">Complete digital campus ERP designed for universities, colleges, and schools.</p>
      </div>
    </section>

    <!-- Content -->
    <section class="section-padding" style="background: #FFFFFF;">
      <div class="container">
        <div class="detail-grid">
          <div>
            <span class="section-tag">Education ERP Suite</span>
            <h2 style="font-size: 2.25rem; margin-bottom: 1.5rem;">Comprehensive Campus Administration</h2>
            <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.8; margin-bottom: 2rem;">
              The <strong>Academic Management System by NSM Limited</strong> streamlines all educational institution workflows—from student admissions and RFID biometric attendance to course grading, faculty payroll, tuition fee collection, and parent SMS mobile apps.
            </p>

            <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Core Feature Modules (Attachment Specs):</h3>
            <div class="feature-box-grid">
              <div class="feature-box">
                <h4>1. Academic & Curriculum Management</h4>
                <p>Course outlines, credit distribution, automated class timetables & exam routine generators.</p>
              </div>
              <div class="feature-box">
                <h4>2. Student Lifecycle Management</h4>
                <p>Admissions, enrollment, biometric attendance tracking, grading & official transcripts.</p>
              </div>
              <div class="feature-box">
                <h4>3. Faculty & Admin Management</h4>
                <p>Teacher subject assignment, payroll processing, performance evaluation & HR portals.</p>
              </div>
              <div class="feature-box">
                <h4>4. Finance & Resource Management</h4>
                <p>Tuition fee collection, accounting ledger integration, hostel & library management.</p>
              </div>
              <div class="feature-box">
                <h4>5. Communication & Analytics</h4>
                <p>Parent SMS notifications, student mobile app, & executive BI dashboard reporting.</p>
              </div>
            </div>
          </div>

          <div class="sidebar-cta-card">
            <h3>Request Campus Demo</h3>
            <p>Schedule a live presentation with our education solution engineers.</p>

            <form @submit.prevent="handleDemoSubmit">
              <div class="form-group">
                <label class="form-label" style="color: #CBD5E1;">Institution Name *</label>
                <input type="text" v-model="form.institution" class="form-input" required placeholder="e.g. Model University">
              </div>
              <div class="form-group">
                <label class="form-label" style="color: #CBD5E1;">Contact Person Email *</label>
                <input type="email" v-model="form.email" class="form-input" required placeholder="admin@university.edu">
              </div>
              <div class="form-group">
                <label class="form-label" style="color: #CBD5E1;">Phone Hotlines *</label>
                <input type="tel" v-model="form.phone" class="form-input" required placeholder="+88 018...">
              </div>

              <div v-if="submitted" style="margin-bottom: 1rem; padding: 0.5rem; background: rgba(16, 185, 129, 0.2); border: 1px solid #10B981; border-radius: 6px; color: #34D399; font-size: 0.85rem; font-weight: 600;">
                ✓ Demo request received! Our engineer will call you shortly.
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
        <div class="global-cta-banner">
          <div class="global-cta-content">
            <div class="global-cta-badges">
              <span class="global-cta-badge">🎓 Academic ERP Suite</span>
              <span class="global-cta-badge">⚡ 24-Hour Scope Quote</span>
            </div>
            <h2>Ready to Digitalize Your Campus Operations?</h2>
            <p>Request a custom campus architecture scope, RFID hardware integration plan, or live software walkthrough.</p>
          </div>
          <div class="global-cta-actions">
            <a href="tel:+8801891151715" class="btn btn-call-now btn-lg btn-pulse">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Campus Support Desk: +8801891151715</span>
            </a>
            <router-link to="/contact" class="btn btn-primary btn-lg">Request Live Demo</router-link>
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
