<template>
  <div class="service-page">
    <section class="page-banner">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link> &gt; <router-link to="/services">Services</router-link> &gt; <span>DevOps & Infrastructure</span>
        </div>
        <h1 class="section-title">DevOps & Server Infrastructure</h1>
        <p class="section-subtitle">High-availability Linux server management, Docker/Kubernetes container orchestration, CI/CD, and network security.</p>
      </div>
    </section>

    <section class="section-padding" style="background: #FFFFFF;">
      <div class="container">
        <div class="detail-grid">
          <div>
            <span class="section-tag">Core Capability 09</span>
            <h2 style="font-size: 2.25rem; margin-bottom: 1.5rem;">Resilient Infrastructure & 99.99% Uptime</h2>
            <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.8; margin-bottom: 2rem;">
              We deploy, optimize, and manage cloud servers, automated backup routines, load balancers, and CI/CD deployment pipelines on AWS, DigitalOcean, Hetzner, and on-premises institutional server racks.
            </p>
            <div class="feature-box-grid">
              <div class="feature-box">
                <h4>Docker & CI/CD Pipelines</h4>
                <p>Zero-downtime rolling updates, automated unit test validation, and containerized staging environments.</p>
              </div>
              <div class="feature-box">
                <h4>Server Hardening & Security</h4>
                <p>Firewall configuration (UFW/Fail2Ban), automated encrypted daily backups, and DDoS mitigation.</p>
              </div>
            </div>
          </div>

          <div class="sidebar-cta-card">
            <h3>Consult Infrastructure Team</h3>
            <p>Optimize your server infrastructure and configure automated deployments.</p>
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
                ✓ Request received! Our DevOps engineer will reach out shortly.
              </div>

              <button type="submit" class="btn btn-primary btn-lg btn-pulse">Schedule Infrastructure Audit ⚡</button>
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
              <span class="global-cta-badge">🖥️ DevOps Infrastructure</span>
              <span class="global-cta-badge">🔒 99.99% Uptime Commitment</span>
            </div>
            <h2>Ensure Zero Downtime and Maximum Server Security</h2>
            <p>Trust NSM Limited's certified cloud engineers to safeguard your institutional data and servers.</p>
          </div>
          <div class="global-cta-actions">
            <a href="tel:+8801891151713" class="btn btn-call-now btn-lg btn-pulse">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Call Now: +8801891151713, 14, 15, 17</span>
            </a>
            <router-link to="/contact" class="btn btn-primary btn-lg">Request Network Assessment</router-link>
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
