<template>
  <div class="contact-page">
    <section class="page-banner">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link> &gt; <span>Contact Us</span>
        </div>
        <h1 class="section-title">Contact Corporate Office</h1>
        <p class="section-subtitle">Connect with our corporate team in Rangpur or reach our international client relations desk.</p>
      </div>
    </section>

    <!-- Contact Grid -->
    <section class="section-padding" style="background: #FFFFFF;">
      <div class="container">
        <div class="contact-grid">
          
          <!-- Address & Hotlines Card -->
          <div class="contact-info-card">
            <div class="contact-detail-item">
              <div class="contact-icon">📍</div>
              <div>
                <h4 style="font-size: 1.15rem; color: #0F172A; margin-bottom: 0.35rem;">Rangpur Corporate Office</h4>
                <p style="color: var(--text-muted); font-size: 0.95rem;">
                  <strong>4th Floor, Sufi Tower</strong><br>
                  Jahaj Company Mor, Rangpur, Bangladesh
                </p>
                <div style="margin-top: 0.75rem;">
                  <RjscBadge />
                </div>
              </div>
            </div>

            <div class="contact-detail-item">
              <div class="contact-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--logo-blue)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <h4 style="font-size: 1.15rem; color: #0F172A; margin-bottom: 0.35rem;">Official Hotlines</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem 1rem; margin-top: 0.5rem;">
                  <a href="tel:+8801891151713" style="color: var(--logo-blue); font-family: var(--font-mono); font-weight: 700;">+88 01891151713</a>
                  <a href="tel:+8801891151714" style="color: var(--logo-blue); font-family: var(--font-mono); font-weight: 700;">+88 01891151714</a>
                  <a href="tel:+8801891151715" style="color: var(--logo-blue); font-family: var(--font-mono); font-weight: 700;">+88 01891151715</a>
                  <a href="tel:+8801891151717" style="color: var(--logo-blue); font-family: var(--font-mono); font-weight: 700;">+88 01891151717</a>
                </div>
              </div>
            </div>

            <div class="contact-detail-item">
              <div class="contact-icon">✉️</div>
              <div>
                <h4 style="font-size: 1.15rem; color: #0F172A; margin-bottom: 0.35rem;">Support Email</h4>
                <p><a href="mailto:support@nsmlimited.com" style="color: var(--logo-purple); font-weight: 700;">support@nsmlimited.com</a></p>
              </div>
            </div>
          </div>

          <!-- Form Card -->
          <div class="contact-form-card">
            <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem;">Send Message to NSM Limited</h3>
            <form @submit.prevent="handleContactSubmit">
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Full Name *</label>
                  <input type="text" v-model="form.name" class="form-input" required placeholder="John Doe">
                </div>
                <div class="form-group">
                  <label class="form-label">Email *</label>
                  <input type="email" v-model="form.email" class="form-input" required placeholder="name@company.com">
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Project / Inquiry Message *</label>
                <textarea v-model="form.message" class="form-textarea" rows="4" required placeholder="Describe your project requirements, scope, or questions..."></textarea>
              </div>

              <div v-if="submitted" style="margin-bottom: 1rem; padding: 0.75rem 1rem; background: #ECFDF5; border: 1px solid #10B981; border-radius: 8px; color: #065F46; font-size: 0.9rem; font-weight: 600;">
                ✓ Message sent successfully! Our team will respond within 2 hours.
              </div>

              <button type="submit" class="btn btn-primary btn-lg btn-pulse" style="width: 100%;">Submit Proposal Request ⚡</button>
              
              <div style="margin-top: 1.5rem; text-align: center; font-size: 0.85rem; color: var(--text-muted); display: flex; align-items: center; justify-content: center; gap: 1.5rem; flex-wrap: wrap;">
                <span>⚡ Guaranteed Response &lt; 2 Hours</span>
                <span>🔒 100% NDA Protected</span>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import RjscBadge from '../components/common/RjscBadge.vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const submitted = ref(false)

function handleContactSubmit() {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.name = ''
    form.email = ''
    form.message = ''
  }, 3500)
}
</script>
