<template>
  <div class="about-page">
    <section class="page-banner">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link> &gt; <span>About Us</span>
        </div>
        <h1 class="section-title">About NSM Limited</h1>
        <p class="section-subtitle">A Private Limited Software Firm, Official Crossref Sponsoring Organization, & BASIS Member driving corporate digital transformation.</p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="section-padding" style="background: #FFFFFF;">
      <div class="container">
        <div class="detail-grid">
          <div>
            <span class="section-tag"><span class="live-dot"></span> Company Profile</span>
            <h2 style="font-size: 2.25rem; margin-bottom: 1.5rem;">Corporate Engineering & Innovation</h2>
            <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.8; margin-bottom: 1.5rem;">
              <strong>NSM Limited</strong> is a registered Private Limited Company under the <strong>Registrar of Joint Stock Companies and Firms (RJSC)</strong> in Bangladesh, an official member of <strong>BASIS</strong>, and an accredited <strong>Crossref Sponsoring Organization</strong>.
            </p>
            <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.8; margin-bottom: 2rem;">
              From our corporate technology headquarters at <strong>4th Floor, Sufi Tower, Jahaj Company Mor, Rangpur</strong>, our engineering teams architect mission-critical Enterprise ERP systems, custom web/mobile software, IoT hardware/software telematics, and Crossref DOI registration services for clients across Bangladesh, USA, Canada, UK, and UAE.
            </p>

            <div class="feature-box-grid">
              <div class="feature-box">
                <h4>🎯 Our Mission</h4>
                <p>To empower organizations with high-availability digital solutions, automated workflows, scholarly DOI registrations, and enterprise ERP platforms.</p>
              </div>
              <div class="feature-box">
                <h4>🚀 Our Vision</h4>
                <p>To be recognized globally as a premier software engineering firm delivering next-generation digital innovation and publishing infrastructure.</p>
              </div>
            </div>
          </div>

          <div class="corporate-glass-card about-accreditations-card">
            <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem;" class="text-gradient">Corporate Accreditations</h3>
            
            <div class="accreditations-list">
              <div class="accreditation-item">
                <div class="accreditation-icon-wrap" style="background: rgba(225, 29, 72, 0.08);">
                  <img src="/images/icons/system-journal.svg" alt="Crossref" width="22" height="22" />
                </div>
                <div class="accreditation-text-wrap">
                  <h4 class="accreditation-title">Crossref Official Sponsoring Org</h4>
                  <p class="accreditation-desc">Assisting academic journals and universities with Publisher Member Prefixes and Article DOIs.</p>
                </div>
              </div>

              <div class="accreditation-item">
                <div class="accreditation-icon-wrap" style="background: rgba(37, 99, 235, 0.08);">
                  <img src="/images/metrics/shield.svg" alt="RJSC" width="22" height="22" />
                </div>
                <div class="accreditation-text-wrap">
                  <h4 class="accreditation-title">RJSC Registered Company</h4>
                  <p class="accreditation-desc">Fully incorporated under Joint Stock Companies & Firms Laws of Bangladesh.</p>
                </div>
              </div>

              <div class="accreditation-item basis-accreditation-item">
                <div class="accreditation-badge-wrap">
                  <BasisBadge :height="22" />
                </div>
                <div class="accreditation-text-wrap">
                  <h4 class="accreditation-title">Official BASIS Member</h4>
                  <p class="accreditation-desc">Verified Member of Bangladesh Association of Software and Information Services (BASIS).</p>
                </div>
              </div>

              <div class="accreditation-item">
                <div class="accreditation-icon-wrap" style="background: rgba(137, 75, 158, 0.08);">
                  <img src="/images/icons/location-pin.svg" alt="Location" width="22" height="22" />
                </div>
                <div class="accreditation-text-wrap">
                  <h4 class="accreditation-title">Rangpur Office & Overseas Desks</h4>
                  <p class="accreditation-desc">4th Floor Sufi Tower Rangpur + international client relations in USA, UK, Canada.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Global High-Converting Conversion Banner -->
    <section class="global-cta-section">
      <div class="container">
        <div class="global-cta-banner" style="background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 60%, #881337 100%);">
          <div class="global-cta-content">
            <div class="global-cta-badges">
              <span class="global-cta-badge" style="background: rgba(225, 29, 72, 0.2); border-color: rgba(225, 29, 72, 0.4); color: #FECDD3;">🛡️ Tier-1 Software Engineering</span>
              <span class="global-cta-badge">🌐 BASIS Member</span>
            </div>
            <h2>Partner with NSM Limited for Your Next Enterprise Solution</h2>
            <p>Whether you need a full enterprise ERP, a cloud SaaS platform, or mobile engineering, our Rangpur Office and global engineering team are ready.</p>
          </div>
          <div class="global-cta-actions">
            <a href="tel:+8801891151715" class="btn btn-call-now btn-lg btn-pulse">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Call Now: +8801891151715</span>
            </a>
            <router-link to="/contact" class="btn btn-primary btn-lg" style="background: linear-gradient(135deg, #E11D48 0%, #4B53C6 100%);">Schedule Consultation</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BasisBadge from '../components/common/BasisBadge.vue'
</script>
