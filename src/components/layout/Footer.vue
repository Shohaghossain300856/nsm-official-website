<template>
  <div>
    <!-- Our Clients Running Marquee Bar Attached Above Footer -->
    <section class="footer-clients-marquee-section" style="background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%); padding: 1.5rem 0; border-top: 1px solid var(--border-light); border-bottom: 1px solid var(--border-light); overflow: hidden; position: relative;">
      <div class="client-marquee-ticker" style="background: transparent; border: none; margin-bottom: 0; padding: 0;">
        <div class="client-ticker-track">
          <div class="client-ticker-item"><ClientLogo client="dmc" :size="40" /> Dhaka Medical College</div>
          <div class="client-ticker-item"><ClientLogo client="rpmc" :size="40" /> Rangpur Medical College</div>
          <div class="client-ticker-item"><ClientLogo client="dinajpur" :size="40" /> Dinajpur Medical College</div>
          <div class="client-ticker-item"><ClientLogo client="comilla" :size="40" /> Comilla Medical College</div>
          <div class="client-ticker-item"><ClientLogo client="satkhira" :size="40" /> Satkhira Medical College</div>
          <div class="client-ticker-item"><ClientLogo client="mmc" :size="40" /> Mymensingh Medical College</div>
          <div class="client-ticker-item"><ClientLogo client="bogura" :size="40" /> Bogura Medical College</div>
          <div class="client-ticker-item"><ClientLogo client="nilphamari" :size="40" /> Nilphamari Medical College</div>
          <div class="client-ticker-item"><ClientLogo client="baiust" :size="40" /> BAIUST Military Univ.</div>
          <div class="client-ticker-item"><ClientLogo client="rdrs" :size="40" /> RDRS Bangladesh NGO</div>
          <div class="client-ticker-item"><ClientLogo client="prime" :size="40" /> Prime Medical College</div>
          <div class="client-ticker-item"><ClientLogo client="sufi" :size="40" /> Sufi Group</div>

          <!-- Duplicate Set for Seamless Infinite Loop -->
          <div class="client-ticker-item"><ClientLogo client="dmc" :size="40" /> Dhaka Medical College</div>
          <div class="client-ticker-item"><ClientLogo client="rpmc" :size="40" /> Rangpur Medical College</div>
          <div class="client-ticker-item"><ClientLogo client="dinajpur" :size="40" /> Dinajpur Medical College</div>
          <div class="client-ticker-item"><ClientLogo client="comilla" :size="40" /> Comilla Medical College</div>
          <div class="client-ticker-item"><ClientLogo client="satkhira" :size="40" /> Satkhira Medical College</div>
          <div class="client-ticker-item"><ClientLogo client="mmc" :size="40" /> Mymensingh Medical College</div>
          <div class="client-ticker-item"><ClientLogo client="bogura" :size="40" /> Bogura Medical College</div>
          <div class="client-ticker-item"><ClientLogo client="nilphamari" :size="40" /> Nilphamari Medical College</div>
          <div class="client-ticker-item"><ClientLogo client="baiust" :size="40" /> BAIUST Military Univ.</div>
          <div class="client-ticker-item"><ClientLogo client="rdrs" :size="40" /> RDRS Bangladesh NGO</div>
          <div class="client-ticker-item"><ClientLogo client="prime" :size="40" /> Prime Medical College</div>
          <div class="client-ticker-item"><ClientLogo client="sufi" :size="40" /> Sufi Group</div>
        </div>
      </div>
    </section>

    <!-- Premium Modern Enterprise Footer -->
    <footer class="modern-enterprise-footer">
      <!-- Ambient Top Glowing Line -->
      <div class="footer-top-accent-line"></div>

      <div class="container">
        <div class="footer-main-grid">
          <!-- Column 1: Brand Info & Accreditations -->
          <div class="footer-brand-col">
            <router-link to="/" class="footer-logo-link">
              <div class="footer-logo-card">
                <NsmLogo :height="42" />
              </div>
            </router-link>
            
            <p class="footer-brand-desc">
              NSM Limited is a registered private limited software development company and official BASIS member delivering cutting-edge ERP platforms, IoT automation, and global IT solutions.
            </p>

            <div class="footer-accreditations-row">
              <BasisBadge />
              <RjscBadge />
            </div>
          </div>

          <!-- Column 2: Enterprise Products -->
          <div class="footer-links-col">
            <div class="footer-col-header">
              <span class="footer-header-dot"></span>
              <h4>Enterprise Products</h4>
            </div>
            <ul class="footer-nav-list">
              <li>
                <router-link to="/products/academic-management-system" class="footer-link-item">
                  <svg class="footer-arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  <span>Academic ERP System</span>
                </router-link>
              </li>
              <li>
                <router-link to="/products/inventory-management-system" class="footer-link-item">
                  <svg class="footer-arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  <span>Inventory & Supply Chain ERP</span>
                </router-link>
              </li>
              <li>
                <router-link to="/products/hospital-management-system" class="footer-link-item">
                  <svg class="footer-arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  <span>Hospital & Healthcare ERP</span>
                </router-link>
              </li>
              <li>
                <router-link to="/products/hotel-management-system" class="footer-link-item">
                  <svg class="footer-arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  <span>Hotel & Resort ERP</span>
                </router-link>
              </li>
              <li class="footer-view-all-li">
                <router-link to="/products" class="footer-view-all-link">
                  <span>View All Enterprise Products</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Column 3: Core Engineering Services -->
          <div class="footer-links-col">
            <div class="footer-col-header">
              <span class="footer-header-dot"></span>
              <h4>Core Services</h4>
            </div>
            <ul class="footer-nav-list">
              <li>
                <router-link to="/crossref-doi-services" class="footer-link-item crossref-highlight">
                  <span class="crossref-pulse-dot"></span>
                  <span>Crossref DOI Sponsoring</span>
                </router-link>
              </li>
              <li>
                <router-link to="/services/enterprise-erp-solutions" class="footer-link-item">
                  <svg class="footer-arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  <span>Enterprise ERP Engineering</span>
                </router-link>
              </li>
              <li>
                <router-link to="/services/digital-transformation-automation" class="footer-link-item">
                  <svg class="footer-arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  <span>Digital Transformation</span>
                </router-link>
              </li>
              <li>
                <router-link to="/services/iot-hardware-software" class="footer-link-item">
                  <svg class="footer-arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  <span>IoT Hardware & Embedded</span>
                </router-link>
              </li>
              <li>
                <router-link to="/services/saas-paas-development" class="footer-link-item">
                  <svg class="footer-arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  <span>Cloud SaaS & Microservices</span>
                </router-link>
              </li>
              <li class="footer-view-all-li">
                <router-link to="/services" class="footer-view-all-link">
                  <span>View All 12 Capabilities</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Column 4: Corporate Office & Direct Contacts -->
          <div class="footer-contact-col">
            <div class="footer-col-header">
              <span class="footer-header-dot"></span>
              <h4>Corporate Office</h4>
            </div>

            <div class="footer-contact-items">
              <!-- Location -->
              <div class="footer-contact-item">
                <div class="contact-icon-box">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div class="contact-text-box">
                  <span class="contact-lbl">Headquarters & Tech Hub</span>
                  <span class="contact-val">Rangpur, Bangladesh (Global Delivery Hub)</span>
                </div>
              </div>

              <!-- Phone Numbers -->
              <div class="footer-contact-item">
                <div class="contact-icon-box call-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div class="contact-text-box">
                  <span class="contact-lbl">Direct Support Helplines</span>
                  <div class="footer-phone-chips">
                    <a href="tel:+8801891151713" class="phone-chip">Sales: +8801891151713</a>
                    <a href="tel:+8801891151715" class="phone-chip">Hospital: +8801891151715</a>
                    <a href="tel:+8801891151717" class="phone-chip">Inventory: +8801891151717</a>
                  </div>
                </div>
              </div>

              <!-- Email -->
              <div class="footer-contact-item">
                <div class="contact-icon-box">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div class="contact-text-box">
                  <span class="contact-lbl">Official Inquiries</span>
                  <a href="mailto:support@nsmlimited.com" class="contact-val email-link">support@nsmlimited.com</a>
                </div>
              </div>

              <!-- Live Desk Status -->
              <div class="footer-status-badge">
                <span class="status-live-indicator"></span>
                <span>Operating Hours: Sat - Thu (9AM - 7PM BST) • 24/7 Global Desk</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Copyright and Quick Subnav -->
        <div class="footer-bottom-bar">
          <div class="footer-copyright-text">
            © 2026 <strong>NSM Limited</strong>. Registered Private Limited Software Company. All rights reserved.
          </div>

          <div class="footer-bottom-links">
            <router-link to="/">Home</router-link>
            <router-link to="/services">Services</router-link>
            <router-link to="/products">Products</router-link>
            <router-link to="/crossref-doi-services">Crossref DOI</router-link>
            <router-link to="/about">About Us</router-link>
            <router-link to="/contact">Contact</router-link>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import NsmLogo from '../common/NsmLogo.vue'
import BasisBadge from '../common/BasisBadge.vue'
import RjscBadge from '../common/RjscBadge.vue'
import ClientLogo from '../common/ClientLogo.vue'
</script>

<style scoped>
.modern-enterprise-footer {
  background: radial-gradient(circle at 10% 0%, rgba(79, 70, 229, 0.08) 0%, transparent 40%),
              radial-gradient(circle at 90% 100%, rgba(2, 132, 199, 0.07) 0%, transparent 45%),
              #0B1120;
  color: #94A3B8;
  padding: 4.5rem 0 2rem 0;
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.footer-top-accent-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, var(--logo-purple) 30%, var(--logo-blue) 70%, transparent 100%);
  opacity: 0.8;
}

.footer-main-grid {
  display: grid;
  grid-template-columns: 1.25fr 1fr 1fr 1.35fr;
  gap: 3.5rem;
  margin-bottom: 3.5rem;
}

@media (max-width: 1024px) {
  .footer-main-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
}

@media (max-width: 640px) {
  .footer-main-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

.footer-logo-card {
  background: #FFFFFF;
  padding: 8px 16px;
  border-radius: 12px;
  display: inline-flex;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  margin-bottom: 1.25rem;
  transition: transform 0.25s ease;
}

.footer-logo-card:hover {
  transform: translateY(-2px);
}

.footer-brand-desc {
  font-size: 0.925rem;
  line-height: 1.7;
  color: #94A3B8;
  margin-bottom: 1.5rem;
}

.footer-accreditations-row {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
}

.footer-col-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.35rem;
}

.footer-header-dot {
  width: 6px;
  height: 6px;
  background: var(--logo-blue);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--logo-blue);
}

.footer-col-header h4 {
  color: #FFFFFF;
  font-size: 1.125rem;
  font-family: var(--font-heading);
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.01em;
}

.footer-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-link-item {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #94A3B8;
  text-decoration: none;
  font-size: 0.925rem;
  transition: all 0.2s ease;
}

.footer-arrow-icon {
  color: #64748B;
  transition: transform 0.2s ease, color 0.2s ease;
}

.footer-link-item:hover {
  color: #FFFFFF;
  transform: translateX(4px);
}

.footer-link-item:hover .footer-arrow-icon {
  color: var(--logo-blue);
  transform: translateX(2px);
}

.crossref-highlight {
  color: #FB7185 !important;
  font-weight: 600;
}

.crossref-pulse-dot {
  width: 7px;
  height: 7px;
  background: #E11D48;
  border-radius: 50%;
  box-shadow: 0 0 8px #E11D48;
}

.footer-view-all-li {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px dashed rgba(255, 255, 255, 0.08);
}

.footer-view-all-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: #38BDF8;
  font-weight: 600;
  font-size: 0.875rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.footer-view-all-link:hover {
  color: #7DD3FC;
  transform: translateX(3px);
}

/* Contact Column */
.footer-contact-items {
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
}

.footer-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
}

.contact-icon-box {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #38BDF8;
  flex-shrink: 0;
  margin-top: 2px;
}

.contact-icon-box.call-icon {
  color: #34D399;
  background: rgba(16, 185, 129, 0.08);
  border-color: rgba(16, 185, 129, 0.2);
}

.contact-text-box {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.contact-lbl {
  font-size: 0.75rem;
  color: #64748B;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-weight: 600;
}

.contact-val {
  font-size: 0.9rem;
  color: #E2E8F0;
  line-height: 1.4;
}

.contact-val.email-link {
  color: #38BDF8;
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-val.email-link:hover {
  color: #7DD3FC;
  text-decoration: underline;
}

.footer-phone-chips {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-top: 0.25rem;
}

.phone-chip {
  display: inline-block;
  color: #E2E8F0;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 600;
  font-family: var(--font-heading);
  transition: color 0.2s ease, transform 0.2s ease;
}

.phone-chip:hover {
  color: #34D399;
  transform: translateX(2px);
}

.footer-status-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 0.85rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 0.775rem;
  color: #94A3B8;
  margin-top: 0.25rem;
  line-height: 1.4;
}

.status-live-indicator {
  width: 7px;
  height: 7px;
  background: #10B981;
  border-radius: 50%;
  box-shadow: 0 0 8px #10B981;
  flex-shrink: 0;
  animation: pulseLive 2s infinite;
}

@keyframes pulseLive {
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1.15); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.8; }
}

/* Bottom Bar */
.footer-bottom-bar {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;
  font-size: 0.875rem;
  color: #64748B;
}

.footer-bottom-links {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.footer-bottom-links a {
  color: #94A3B8;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-bottom-links a:hover {
  color: #FFFFFF;
}
</style>
