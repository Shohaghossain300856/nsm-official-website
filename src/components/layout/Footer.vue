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

            <!-- Social Media Icons -->
            <div class="footer-social-row">
              <a href="https://www.facebook.com/nsmlimited" target="_blank" rel="noopener" class="social-icon-btn" title="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/nsmlimited" target="_blank" rel="noopener" class="social-icon-btn" title="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://twitter.com/nsmlimited" target="_blank" rel="noopener" class="social-icon-btn" title="X (Twitter)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.youtube.com/@nsmlimited" target="_blank" rel="noopener" class="social-icon-btn" title="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#070C1A"/></svg>
              </a>
              <a href="https://wa.me/8801891151713" target="_blank" rel="noopener" class="social-icon-btn whatsapp" title="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              </a>
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
                <div class="contact-icon-box location-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div class="contact-text-box">
                  <span class="contact-lbl">Headquarters &amp; Tech Hub</span>
                  <span class="contact-val">Jahaj Company, Sufi Tower</span>
                  <span class="contact-val" style="font-size: 0.82rem; color: #94A3B8;">Rangpur, Bangladesh</span>
                  <a
                    href="https://www.google.com/maps/search/Sufi+Tower+Jahaj+Company+Rangpur+Bangladesh"
                    target="_blank"
                    rel="noopener"
                    class="map-btn"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>View on Map</span>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
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
/* =============================================
   FOOTER — NSM Limited Brand-Matched Premium Design
   Purple #4F46E5 → Indigo #2563EB → Blue #06B6D4
   ============================================= */

.modern-enterprise-footer {
  background:
    radial-gradient(ellipse 80% 60% at 10% 0%, rgba(79, 70, 229, 0.13) 0%, transparent 55%),
    radial-gradient(ellipse 60% 50% at 90% 100%, rgba(6, 182, 212, 0.10) 0%, transparent 50%),
    radial-gradient(ellipse 50% 40% at 50% 50%, rgba(37, 99, 235, 0.06) 0%, transparent 60%),
    #070C1A;
  color: #94A3B8;
  padding: 3rem 0 0 0;
  position: relative;
  overflow: hidden;
}

/* Glowing grid pattern overlay */
.modern-enterprise-footer::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(79, 70, 229, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(79, 70, 229, 0.04) 1px, transparent 1px);
  background-size: 48px 48px;
  pointer-events: none;
}

/* Top gradient accent line */
.footer-top-accent-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent 0%, #4F46E5 25%, #2563EB 55%, #06B6D4 80%, transparent 100%);
  opacity: 0.9;
  box-shadow: 0 0 20px rgba(79, 70, 229, 0.5), 0 0 40px rgba(6, 182, 212, 0.3);
}

/* Main grid */
.footer-main-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr 1.4fr;
  gap: 2rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

@media (max-width: 1024px) {
  .footer-main-grid { grid-template-columns: repeat(2, 1fr); gap: 2.5rem; }
}
@media (max-width: 640px) {
  .footer-main-grid { grid-template-columns: 1fr; gap: 2rem; }
}

/* Brand column logo */
.footer-logo-link { text-decoration: none; }

.footer-logo-card {
  background: transparent;
  padding: 0;
  border-radius: 0;
  display: inline-flex;
  box-shadow: none;
  margin-bottom: 1.35rem;
  transition: transform 0.25s ease, opacity 0.25s ease;
  border: none;
}

.footer-logo-card:hover {
  transform: translateY(-2px);
  opacity: 0.85;
}

.footer-brand-desc {
  font-size: 0.915rem;
  line-height: 1.75;
  color: #94A3B8;
  margin-bottom: 1.5rem;
}

.footer-accreditations-row {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1.25rem;
}

/* Social Media Icons */
.footer-social-row {
  display: flex;
  gap: 0.6rem;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 0.25rem;
}

.social-icon-btn {
  width: 36px;
  height: 36px;
  border-radius: 9px;
  background: rgba(79, 70, 229, 0.1);
  border: 1px solid rgba(79, 70, 229, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94A3B8;
  text-decoration: none;
  transition: all 0.22s ease;
}

.social-icon-btn:hover {
  transform: translateY(-3px);
  background: rgba(79, 70, 229, 0.25);
  border-color: rgba(79, 70, 229, 0.5);
  color: #FFFFFF;
  box-shadow: 0 6px 16px rgba(79, 70, 229, 0.3);
}

.social-icon-btn:nth-child(1):hover { background: rgba(24, 119, 242, 0.25); border-color: rgba(24, 119, 242, 0.5); box-shadow: 0 6px 16px rgba(24, 119, 242, 0.3); }  /* Facebook */
.social-icon-btn:nth-child(2):hover { background: rgba(10, 102, 194, 0.25); border-color: rgba(10, 102, 194, 0.5); box-shadow: 0 6px 16px rgba(10, 102, 194, 0.3); }  /* LinkedIn */
.social-icon-btn:nth-child(3):hover { background: rgba(255, 255, 255, 0.1);  border-color: rgba(255, 255, 255, 0.3); box-shadow: 0 6px 16px rgba(255,255,255, 0.1); }   /* X */
.social-icon-btn:nth-child(4):hover { background: rgba(255, 0, 0, 0.2);       border-color: rgba(255, 0, 0, 0.4);      box-shadow: 0 6px 16px rgba(255, 0, 0, 0.25); }     /* YouTube */
.social-icon-btn:nth-child(5):hover { background: rgba(37, 211, 102, 0.2);    border-color: rgba(37, 211, 102, 0.4);   box-shadow: 0 6px 16px rgba(37, 211, 102, 0.3); }  /* WhatsApp */

/* Column headers */
.footer-col-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.4rem;
  padding-bottom: 0.85rem;
  border-bottom: 1px solid rgba(79, 70, 229, 0.18);
}

.footer-header-dot {
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #4F46E5, #06B6D4);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(79, 70, 229, 0.6);
  flex-shrink: 0;
}

.footer-col-header h4 {
  color: #FFFFFF;
  font-size: 1.05rem;
  font-family: var(--font-heading);
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.01em;
  background: linear-gradient(90deg, #FFFFFF 0%, #C7D2FE 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Nav list */
.footer-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.footer-link-item {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #94A3B8;
  text-decoration: none;
  font-size: 0.915rem;
  transition: all 0.22s ease;
  padding: 0.15rem 0;
}

.footer-arrow-icon {
  color: #4F46E5;
  opacity: 0.5;
  transition: transform 0.22s ease, opacity 0.22s ease;
}

.footer-link-item:hover {
  color: #E2E8F0;
  transform: translateX(5px);
}

.footer-link-item:hover .footer-arrow-icon {
  opacity: 1;
  color: #06B6D4;
  transform: translateX(3px);
}

/* Crossref special highlight */
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
  flex-shrink: 0;
  animation: pulseLive 2s infinite;
}

/* View all link */
.footer-view-all-li {
  margin-top: 0.6rem;
  padding-top: 0.6rem;
  border-top: 1px dashed rgba(79, 70, 229, 0.2);
}

.footer-view-all-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: linear-gradient(90deg, #4F46E5, #06B6D4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  font-size: 0.875rem;
  text-decoration: none;
  transition: all 0.22s ease;
}

.footer-view-all-link svg {
  color: #06B6D4;
  transition: transform 0.22s ease;
  flex-shrink: 0;
}

.footer-view-all-link:hover { transform: translateX(3px); }
.footer-view-all-link:hover svg { transform: translateX(3px); }

/* ---- Contact Column ---- */
.footer-contact-items {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.footer-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
}

.contact-icon-box {
  width: 34px;
  height: 34px;
  border-radius: 9px;
  background: rgba(79, 70, 229, 0.1);
  border: 1px solid rgba(79, 70, 229, 0.22);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #818CF8;
  flex-shrink: 0;
  margin-top: 2px;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.contact-icon-box.call-icon {
  color: #34D399;
  background: rgba(16, 185, 129, 0.09);
  border-color: rgba(16, 185, 129, 0.22);
}

.contact-icon-box.location-icon {
  color: #F472B6;
  background: rgba(244, 114, 182, 0.09);
  border-color: rgba(244, 114, 182, 0.22);
}

/* Map Button */
.map-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.5rem;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  background: linear-gradient(135deg, rgba(79, 70, 229, 0.15), rgba(6, 182, 212, 0.15));
  border: 1px solid rgba(79, 70, 229, 0.25);
  color: #818CF8;
  font-size: 0.78rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.22s ease;
  width: fit-content;
}

.map-btn:hover {
  background: linear-gradient(135deg, rgba(79, 70, 229, 0.3), rgba(6, 182, 212, 0.3));
  border-color: rgba(79, 70, 229, 0.5);
  color: #C7D2FE;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
}

.footer-contact-item:hover .contact-icon-box {
  background: rgba(79, 70, 229, 0.18);
  border-color: rgba(79, 70, 229, 0.4);
}

.contact-text-box {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.contact-lbl {
  font-size: 0.72rem;
  background: linear-gradient(90deg, #6366F1, #06B6D4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 700;
}

.contact-val {
  font-size: 0.9rem;
  color: #CBD5E1;
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

/* Phone chips */
.footer-phone-chips {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-top: 0.25rem;
}

.phone-chip {
  display: inline-block;
  color: #CBD5E1;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 600;
  font-family: var(--font-heading);
  transition: color 0.2s ease, transform 0.2s ease;
}

.phone-chip:hover {
  color: #34D399;
  transform: translateX(3px);
}

/* Live status badge */
.footer-status-badge {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.6rem 1rem;
  border-radius: 9px;
  background: rgba(79, 70, 229, 0.07);
  border: 1px solid rgba(79, 70, 229, 0.15);
  font-size: 0.77rem;
  color: #94A3B8;
  margin-top: 0.35rem;
  line-height: 1.4;
  backdrop-filter: blur(4px);
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
  0%  { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1.2);  opacity: 1;   }
  100%{ transform: scale(0.95); opacity: 0.8; }
}

/* ---- Bottom Bar ---- */
.footer-bottom-bar {
  border-top: 1px solid rgba(79, 70, 229, 0.15);
  padding: 1.1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.875rem;
  color: #64748B;
  position: relative;
  z-index: 1;
  background: rgba(79, 70, 229, 0.03);
}

.footer-copyright-text strong {
  background: linear-gradient(90deg, #818CF8, #38BDF8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-bottom-links {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.footer-bottom-links a {
  color: #64748B;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s ease;
  position: relative;
}

.footer-bottom-links a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: linear-gradient(90deg, #4F46E5, #06B6D4);
  transition: width 0.25s ease;
}

.footer-bottom-links a:hover {
  color: #C7D2FE;
}

.footer-bottom-links a:hover::after {
  width: 100%;
}
</style>

