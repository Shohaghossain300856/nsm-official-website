<template>
  <div class="crossref-page">
    <!-- Page Banner -->
    <section class="page-banner">
      <div class="container">
        <div class="breadcrumb" style="margin-bottom: 1rem;">
          <router-link to="/">Home</router-link> &gt; <router-link to="/services">Services</router-link> &gt; <span>Crossref & DOI Services</span>
        </div>
        <h1 class="section-title" style="margin-top: 1rem; margin-bottom: 1.25rem;">
          Crossref Sponsoring & <span class="text-gradient">DOI Services</span>
        </h1>
        <p class="section-subtitle" style="max-width: 760px; line-height: 1.8;">
          Official Crossref Sponsoring Organization empowering academic journals, university presses, and research societies with official Member Prefixes, article DOIs, and metadata deposits.
        </p>
      </div>
    </section>

    <!-- Core Capabilities Overview -->
    <section class="section-padding" style="background: #FFFFFF;">
      <div class="container">
        <div class="crossref-overview-grid">
          <div>
            <span class="region-pill">OFFICIAL CROSSREF SPONSOR</span>
            <h2 class="region-title">Seamless Publisher Registration & DOI Allocation</h2>
            <p class="region-desc" style="margin-bottom: 1.5rem;">
              As an accredited <strong>Crossref Sponsoring Organization</strong>, <strong>NSM Limited</strong> simplifies the complex onboarding process for academic publishers, universities, research centers, and journal editors across Bangladesh, South Asia, Middle East, USA, and UK.
            </p>
            <p class="region-desc" style="margin-bottom: 2rem;">
              We handle administrative membership, technical XML schema formatting, and automated metadata deposition so your research publications achieve persistent citation tracking, international indexing, and verified DOI badges.
            </p>

            <div class="crossref-pills-wrap">
              <span class="region-pill" style="background: rgba(225, 29, 72, 0.06); border-color: rgba(225, 29, 72, 0.2); color: #BE123C;">✓ Publisher Member Prefix (10.xxxxx)</span>
              <span class="region-pill" style="background: rgba(37, 99, 235, 0.06); border-color: rgba(37, 99, 235, 0.2); color: #2563EB;">✓ Individual Article & Issue DOIs</span>
              <span class="region-pill" style="background: rgba(79, 70, 229, 0.06); border-color: rgba(79, 70, 229, 0.2); color: #4F46E5;">✓ Custom Private Journal Portals</span>
            </div>
          </div>

          <div class="corporate-glass-card anatomy-card" style="border-color: rgba(225, 29, 72, 0.25); background: linear-gradient(160deg, #FFFFFF 0%, rgba(255, 241, 242, 0.6) 100%);">
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: #BE123C; font-weight: 700; margin-bottom: 0.5rem; letter-spacing: 0.05em;">CROSSREF METADATA STRUCTURE</div>
            <h3 style="font-size: 1.4rem; margin-bottom: 1.25rem; color: #0F172A;">Anatomy of Your Persistent Research DOI</h3>
            
            <div class="doi-code-box">
              <div class="doi-url-line">
                <span style="color: #94A3B8;">https://doi.org/</span><span style="color: #F43F5E; font-weight: 700;">10.59821</span><span style="color: #E2E8F0;">/</span><span style="color: #A855F7;">nsm.2026.v12i4.892</span>
              </div>
              <div class="doi-tree-lines">
                <div>├── <span style="color: #F43F5E; font-weight: 600;">10.59821</span> = Member Publisher Prefix</div>
                <div>└── <span style="color: #A855F7; font-weight: 600;">nsm.2026.v12i4.892</span> = Individual Article Suffix</div>
              </div>
            </div>

            <ul class="doi-features-list">
              <li>✓ Guaranteed 100% resolution & permanent link preservation</li>
              <li>✓ Google Scholar & Scopus/Web of Science index compatibility</li>
              <li>✓ Automatic XML schema validation & metadata error checks</li>
            </ul>
          </div>
        </div>

        <!-- 4 Core Service Pillar Cards (2x2 Grid) -->
        <div style="text-align: center; margin-bottom: 3rem;">
          <span class="region-pill">COMPLETE CROSSREF SUITE</span>
          <h2 class="region-title">Our Specialized <span class="text-gradient">DOI & Journal Publishing</span> Services</h2>
        </div>

        <div class="crossref-pillars-grid">
          <!-- Pillar 1 -->
          <div class="service-card" style="border-top: 4px solid #E11D48;">
            <div class="service-icon-img-box" style="background: rgba(225, 29, 72, 0.08); border: 1px solid rgba(225, 29, 72, 0.2); width: 56px; height: 56px; border-radius: 14px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
              <img src="/images/icons/crossref-prefix.svg" alt="Publisher Member Prefix" width="30" height="30" style="display: block;">
            </div>
            <h4 style="font-size: 1.35rem; margin-bottom: 0.75rem; color: #0F172A;">Publisher Member Prefix</h4>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.65; margin-bottom: 1.5rem;">
              We assist journals and university presses in acquiring their official Crossref Member Prefix (<code>10.xxxxx</code>), giving your institution brand authority as a recognized global publisher.
            </p>
            <ul style="list-style: none; font-size: 0.85rem; color: var(--text-main); display: flex; flex-direction: column; gap: 0.4rem;">
              <li>✓ Full Membership Onboarding</li>
              <li>✓ Institutional Prefix Allocation</li>
              <li>✓ Admin Portal Access & Key</li>
            </ul>
          </div>

          <!-- Pillar 2 -->
          <div class="service-card" style="border-top: 4px solid var(--logo-purple);">
            <div class="service-icon-img-box" style="background: rgba(79, 70, 229, 0.08); border: 1px solid rgba(79, 70, 229, 0.2); width: 56px; height: 56px; border-radius: 14px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
              <img src="/images/icons/crossref-article.svg" alt="Individual Article DOI Deposit" width="30" height="30" style="display: block;">
            </div>
            <h4 style="font-size: 1.35rem; margin-bottom: 0.75rem; color: #0F172A;">Individual Article DOI Deposit</h4>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.65; margin-bottom: 1.5rem;">
              Need DOIs registered for research papers, review articles, conference proceedings, or book chapters? We construct clean metadata XML and deposit DOIs within 24 hours.
            </p>
            <ul style="list-style: none; font-size: 0.85rem; color: var(--text-main); display: flex; flex-direction: column; gap: 0.4rem;">
              <li>✓ XML Schema 5.3.1 Compliance</li>
              <li>✓ Article, Author & ORCID Metadata</li>
              <li>✓ Instant Live DOI Resolution</li>
            </ul>
          </div>

          <!-- Pillar 3 -->
          <div class="service-card" style="border-top: 4px solid var(--logo-blue);">
            <div class="service-icon-img-box" style="background: rgba(2, 132, 199, 0.08); border: 1px solid rgba(2, 132, 199, 0.2); width: 56px; height: 56px; border-radius: 14px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
              <img src="/images/icons/crossref-portal.svg" alt="Private Academic Journal Portals" width="30" height="30" style="display: block;">
            </div>
            <h4 style="font-size: 1.35rem; margin-bottom: 0.75rem; color: #0F172A;">Private Academic Journal Portals</h4>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.65; margin-bottom: 1.5rem;">
              Looking for a dedicated publishing platform? If requested by our clients, NSM Limited engineers custom Private Academic Journal Portals complete with manuscript submission, peer-review management, and automated DOI deposits.
            </p>
            <ul style="list-style: none; font-size: 0.85rem; color: var(--text-main); display: flex; flex-direction: column; gap: 0.4rem;">
              <li>✓ Custom Journal Portal Engineering</li>
              <li>✓ Manuscript Submission & Peer Review</li>
              <li>✓ Built-In Crossref DOI Registration</li>
            </ul>
          </div>

          <!-- Pillar 4 -->
          <div class="service-card" style="border-top: 4px solid #10B981;">
            <div class="service-icon-img-box" style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); width: 56px; height: 56px; border-radius: 14px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
              <img src="/images/icons/crossref-analytics.svg" alt="Metadata & Citation Indexing" width="30" height="30" style="display: block;">
            </div>
            <h4 style="font-size: 1.35rem; margin-bottom: 0.75rem; color: #0F172A;">Metadata & Citation Indexing</h4>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.65; margin-bottom: 1.5rem;">
              We format and validate rich Crossref Schema XML metadata packages for your research papers and back-issue archives to guarantee permanent citation tracking and search index compatibility.
            </p>
            <ul style="list-style: none; font-size: 0.85rem; color: var(--text-main); display: flex; flex-direction: column; gap: 0.4rem;">
              <li>✓ Schema 5.3.1 Metadata Generation</li>
              <li>✓ Back-Issue Archive DOI Deposits</li>
              <li>✓ Google Scholar Indexing Compatibility</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Registration Form Section -->
    <section id="register-doi" class="section-padding" style="background: var(--bg-surface); border-top: 1px solid var(--border-light); border-bottom: 1px solid var(--border-light);">
      <div class="container">
        <div class="contact-grid">
          <!-- Guidance Box -->
          <div class="contact-info-card" style="background: #FFFFFF;">
            <span class="region-pill" style="background: rgba(225, 29, 72, 0.08); border-color: rgba(225, 29, 72, 0.25); color: #BE123C; align-self: flex-start;">
              📑 Official Crossref Sponsoring Desk
            </span>
            <h3 style="font-size: 1.85rem; color: #0F172A; margin: 0.5rem 0 1rem 0;">Get Your Institution Registered for Crossref Member Prefixes & DOIs</h3>
            <p style="color: var(--text-muted); line-height: 1.7; font-size: 0.975rem;">
              Whether you are launching a new academic journal, managing a university press, or building a custom Private Journal Portal, NSM Limited provides full technical sponsorship and DOI generation.
            </p>

            <div class="contact-detail-item">
              <div class="contact-icon" style="color: #E11D48; background: rgba(225, 29, 72, 0.05);">1</div>
              <div>
                <h4 style="font-size: 1.1rem; margin-bottom: 0.25rem; color: #0F172A;">Publisher Verification</h4>
                <p style="color: var(--text-muted); font-size: 0.9rem;">We review your journal website, ISSN number, and editorial board credentials for Crossref compliance.</p>
              </div>
            </div>

            <div class="contact-detail-item">
              <div class="contact-icon" style="color: var(--logo-purple); background: rgba(158, 71, 182, 0.05);">2</div>
              <div>
                <h4 style="font-size: 1.1rem; margin-bottom: 0.25rem; color: #0F172A;">Prefix Allocation</h4>
                <p style="color: var(--text-muted); font-size: 0.9rem;">Your official Crossref Member Prefix (<code>10.xxxxx</code>) is issued directly under your organization name.</p>
              </div>
            </div>

            <div class="contact-detail-item">
              <div class="contact-icon" style="color: var(--logo-blue); background: rgba(47, 118, 220, 0.05);">3</div>
              <div>
                <h4 style="font-size: 1.1rem; margin-bottom: 0.25rem; color: #0F172A;">Article DOI Deposit & Sync</h4>
                <p style="color: var(--text-muted); font-size: 0.9rem;">Individual article DOIs are deposited into the global Crossref registry with active link resolution.</p>
              </div>
            </div>
          </div>

          <!-- Application Form -->
          <div class="contact-form-card" style="background: #FFFFFF;">
            <h3 style="font-size: 1.6rem; margin-bottom: 0.5rem; color: #0F172A;">Crossref DOI & Journal Portal Request</h3>
            <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">Fill in your journal or organization details to request Crossref Member Prefix, DOI pricing, or Private Journal Portal development.</p>

            <form @submit.prevent="handleCrossrefSubmit">
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Journal / Publisher Name *</label>
                  <input type="text" v-model="form.journal" class="form-input" required>
                </div>
                <div class="form-group">
                  <label class="form-label">ISSN / e-ISSN Number</label>
                  <input type="text" v-model="form.issn" class="form-input">
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">Contact Person Name *</label>
                  <input type="text" v-model="form.name" class="form-input" required>
                </div>
                <div class="form-group">
                  <label class="form-label">Official Email *</label>
                  <input type="email" v-model="form.email" class="form-input" required>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Website URL / Journal Portal</label>
                <input type="url" v-model="form.url" class="form-input">
              </div>

              <div class="form-group">
                <label class="form-label">Service Requirement *</label>
                <select v-model="form.requirement" class="form-input" required style="cursor: pointer;">
                  <option value="">-- Select Required Service --</option>
                  <option value="prefix-and-doi">New Crossref Publisher Prefix + Article DOIs</option>
                  <option value="doi-only">Individual Article DOI Registration Only</option>
                  <option value="private-portal">Custom Private Academic Journal Portal Development</option>
                  <option value="backissue-archive">Back-Issue Archive DOI Deposit & Indexing</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">Additional Details / Article Volume</label>
                <textarea v-model="form.details" class="form-textarea" rows="3"></textarea>
              </div>

              <div v-if="submitted" style="margin-bottom: 1rem; padding: 0.75rem 1rem; background: #ECFDF5; border: 1px solid #10B981; border-radius: 8px; color: #065F46; font-size: 0.9rem; font-weight: 600;">
                ✓ Request submitted! Our Crossref Sponsoring Desk will contact you within 24 hours.
              </div>

              <button type="submit" class="btn btn-primary btn-lg btn-pulse" style="width: 100%; background: linear-gradient(135deg, #E11D48 0%, #9E47B6 100%);">
                <span>Submit Crossref DOI Request ⚡</span>
              </button>

              <div style="margin-top: 1.25rem; text-align: center; font-size: 0.85rem; color: var(--text-muted); display: flex; justify-content: center; gap: 1.25rem; flex-wrap: wrap;">
                <span>⚡ 24-Hour Prefix Processing</span>
                <span>🛡️ Official Sponsoring SLA</span>
              </div>
            </form>
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
              <span class="global-cta-badge" style="background: rgba(225, 29, 72, 0.2); border-color: rgba(225, 29, 72, 0.4); color: #FECDD3;">📑 Official Crossref Sponsor</span>
              <span class="global-cta-badge">🌐 Global Research Citation Index</span>
            </div>
            <h2>Ready to Assign International DOIs to Your Research Articles?</h2>
            <p>Partner with NSM Limited to get your official publisher member prefix, register article DOIs, and integrate OJS automated metadata deposits.</p>
          </div>
          <div class="global-cta-actions">
            <a href="tel:+8801891151715" class="btn btn-call-now btn-lg btn-pulse">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Call Now: +8801891151715</span>
            </a>
            <router-link to="/contact" class="btn btn-primary btn-lg" style="background: linear-gradient(135deg, #E11D48 0%, #4B53C6 100%);">Contact Crossref Desk</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  journal: '',
  issn: '',
  name: '',
  email: '',
  url: '',
  requirement: '',
  details: ''
})

const submitted = ref(false)

function handleCrossrefSubmit() {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.journal = ''
    form.issn = ''
    form.name = ''
    form.email = ''
    form.url = ''
    form.requirement = ''
    form.details = ''
  }, 3500)
}
</script>

<style scoped>
/* Core Overview Grid */
.crossref-overview-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 3.5rem;
  align-items: center;
  margin-bottom: 4rem;
}

.anatomy-card {
  padding: 2.25rem;
}

.doi-code-box {
  background: #0F172A;
  border-radius: var(--radius-sm);
  padding: 1.25rem;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: #38BDF8;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  overflow-x: auto;
}

.doi-url-line {
  word-break: break-all;
  overflow-wrap: anywhere;
}

.doi-tree-lines {
  margin-top: 0.75rem;
  font-size: 0.75rem;
  color: #94A3B8;
  word-break: break-word;
}

.doi-features-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: var(--text-muted);
  padding-left: 0;
  margin: 0;
}

.crossref-pills-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

/* 2x2 Pillars Grid */
.crossref-pillars-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
}

.service-icon-img-box {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
}

.service-card:hover .service-icon-img-box {
  transform: scale(1.08) translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
}

/* Responsive Breakpoints */
@media (max-width: 1024px) {
  .crossref-overview-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    margin-bottom: 3rem;
  }
  .anatomy-card {
    padding: 1.75rem;
  }
}

@media (max-width: 768px) {
  .crossref-pillars-grid {
    grid-template-columns: 1fr !important;
    gap: 1.5rem !important;
    margin-bottom: 2.5rem;
  }

  .crossref-pills-wrap {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .anatomy-card {
    padding: 1.25rem;
  }

  .doi-code-box {
    padding: 1rem;
    font-size: 0.8rem;
  }

  .doi-tree-lines {
    font-size: 0.72rem;
  }

  .service-card {
    padding: 1.5rem !important;
  }
}

@media (max-width: 480px) {
  .doi-code-box {
    padding: 0.85rem;
    font-size: 0.75rem;
  }

  .anatomy-card h3 {
    font-size: 1.2rem !important;
  }
}

/* Crossref-specific CTA Mobile Overrides */
@media (max-width: 768px) {
  .global-cta-section {
    padding: 2.5rem 0;
  }

  .global-cta-banner {
    padding: 2rem 1.25rem !important;
    gap: 1.5rem !important;
    text-align: center !important;
  }

  .global-cta-content h2 {
    font-size: 1.35rem !important;
    line-height: 1.35 !important;
  }

  .global-cta-content p {
    font-size: 0.875rem !important;
    line-height: 1.6 !important;
  }

  .global-cta-badges {
    flex-direction: column !important;
    align-items: center !important;
    gap: 0.5rem !important;
  }

  .global-cta-badge {
    font-size: 0.75rem !important;
    padding: 0.35rem 0.9rem !important;
    white-space: nowrap !important;
  }

  .global-cta-actions {
    width: 100% !important;
    min-width: unset !important;
    flex-direction: column !important;
    gap: 0.75rem !important;
    align-items: stretch !important;
  }

  .global-cta-actions .btn {
    width: 100% !important;
    justify-content: center !important;
    font-size: 0.875rem !important;
    padding: 0.85rem 1.25rem !important;
  }
}

@media (max-width: 480px) {
  .global-cta-banner {
    padding: 1.5rem 1rem !important;
    border-radius: 14px !important;
    gap: 1.25rem !important;
  }

  .global-cta-content h2 {
    font-size: 1.15rem !important;
  }

  .global-cta-badges {
    gap: 0.4rem !important;
  }

  .global-cta-badge {
    font-size: 0.7rem !important;
    padding: 0.3rem 0.75rem !important;
  }

  .global-cta-actions .btn {
    font-size: 0.8rem !important;
    padding: 0.75rem 1rem !important;
  }
}
</style>
