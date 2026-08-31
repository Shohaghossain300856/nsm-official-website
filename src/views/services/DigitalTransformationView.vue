<template>
  <div class="service-page">
    <section class="page-banner">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link> &gt; <router-link to="/services">Services</router-link> &gt; <span>Digital Transformation</span>
        </div>
        <h1 class="section-title">Digital Transformation & Automation</h1>
        <p class="section-subtitle">Robotic Process Automation (RPA), paperless digitalization, and cloud workflow sync.</p>
      </div>
    </section>

    <section class="section-padding" style="background: #FFFFFF;">
      <div class="container">
        <div class="detail-grid">
          <div>
            <span class="section-tag">Core Capability 03</span>
            <h2 style="font-size: 2.25rem; margin-bottom: 1.5rem;">Process Automation for Enterprise</h2>
            <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.8; margin-bottom: 2rem;">
              Modernize manual paper processes into automated cloud microservices that eliminate data entry errors and speed up business operations.
            </p>
            <div class="feature-box-grid">
              <div class="feature-box">
                <h4>RPA Automation</h4>
                <p>Automated data pipelines, invoice processing, and cross-department notification bots.</p>
              </div>
              <div class="feature-box">
                <h4>Legacy Modernization</h4>
                <p>Migrating paper archives and desktop databases to real-time mobile and cloud applications.</p>
              </div>
            </div>
          </div>

          <div class="sidebar-cta-card">
            <h3>Automate Operations</h3>
            <p>Streamline workflows with RPA and enterprise automation.</p>
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label class="form-label" style="color: #CBD5E1;">Full Name *</label>
                <input type="text" v-model="form.name" class="form-input" required placeholder="Your name">
              </div>
              <div class="form-group">
                <label class="form-label" style="color: #CBD5E1;">Email *</label>
                <input type="email" v-model="form.email" class="form-input" required placeholder="name@company.com">
              </div>

              <div v-if="submitted" style="margin-bottom: 1rem; padding: 0.5rem; background: rgba(16, 185, 129, 0.2); border: 1px solid #10B981; border-radius: 6px; color: #34D399; font-size: 0.85rem; font-weight: 600;">
                ✓ Request received! Our automation team will get in touch shortly.
              </div>

              <button type="submit" class="btn btn-primary btn-lg btn-pulse">Request Automation Proposal ⚡</button>
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
              <span class="global-cta-badge">⚡ Digital Automation</span>
              <span class="global-cta-badge">🤖 RPA & Automated Workflows</span>
            </div>
            <h2>Ready to Eliminate Manual Bottlenecks?</h2>
            <p>Let NSM Limited engineer automated pipelines for your accounting, logistics, and data processes.</p>
          </div>
          <div class="global-cta-actions">
            <a href="tel:+8801891151713" class="btn btn-call-now btn-lg btn-pulse">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Call Now: +8801891151713, 14, 15, 17</span>
            </a>
            <router-link to="/contact" class="btn btn-primary btn-lg">Request Automation Scope</router-link>
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
  email: ''
})

const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.name = ''
    form.email = ''
  }, 3000)
}
</script>
