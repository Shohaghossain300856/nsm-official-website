<template>
  <div class="products-page">
    <section class="page-banner">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link> &gt; <span>Products</span>
        </div>
        <h1 class="section-title">Flagship Enterprise ERP Products</h1>
        <p class="section-subtitle">Turnkey management platforms engineered for institutions, supply chains, healthcare systems, and hotels.</p>
      </div>
    </section>

    <!-- Products Overview List -->
    <section class="section-padding" style="background: #FFFFFF;">
      <div class="container">
        <div style="display: flex; flex-direction: column; gap: 3rem;">
          
          <!-- Product 1: Medical College Management ERP -->
          <div class="corporate-glass-card product-detail-card">
            <div>
              <span class="font-mono" style="color: var(--logo-purple); font-weight: 700;">[ MEDICAL COLLEGE ERP SUITE ]</span>
              <h3 style="font-size: 2rem; margin: 0.5rem 0 1rem 0;">Medical College Management ERP</h3>
              <p style="color: var(--text-muted); line-height: 1.7; margin-bottom: 1.5rem;">
                Specialized medical education suite designed for government and private medical colleges in Bangladesh. Unifies MBBS student lifecycle, clinical ward postings, BMDC curriculum compliance, professor duty rosters, and university exam grading.
              </p>
              <router-link to="/products/academic-management-system" class="btn btn-primary btn-sm">
                <span>View Dedicated Product Page</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </router-link>
            </div>
            <div style="background: var(--bg-surface); padding: 2rem; border-radius: var(--radius-md); border: 1px solid var(--border-brand);">
              <div style="font-weight: 700; color: var(--logo-purple); margin-bottom: 0.5rem;">Key Feature Modules:</div>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.9rem; color: var(--text-muted);">
                <li>✓ BMDC Curriculum & MBBS Phase Workflows</li>
                <li>✓ Clinical Ward Postings & Student Logbooks</li>
                <li>✓ Professor Roster & Department Administration</li>
                <li>✓ Professional Exam & Automated Transcripts</li>
              </ul>
            </div>
          </div>

          <!-- Product 2: Inventory Management ERP -->
          <div class="corporate-glass-card product-detail-card">
            <div>
              <span class="font-mono" style="color: var(--logo-blue); font-weight: 700;">[ SUPPLY CHAIN & WAREHOUSE ERP ]</span>
              <h3 style="font-size: 2rem; margin: 0.5rem 0 1rem 0;">Inventory Management ERP</h3>
              <p style="color: var(--text-muted); line-height: 1.7; margin-bottom: 1.5rem;">
                Real-time multi-warehouse stock management, procurement automation, barcode/RFID tracking, and financial accounting synchronization.
              </p>
              <router-link to="/products/inventory-management-system" class="btn btn-primary btn-sm">
                <span>View Dedicated Product Page</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </router-link>
            </div>
            <div style="background: var(--bg-surface); padding: 2rem; border-radius: var(--radius-md); border: 1px solid var(--border-blue);">
              <div style="font-weight: 700; color: var(--logo-blue); margin-bottom: 0.5rem;">Key Feature Modules:</div>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.9rem; color: var(--text-muted);">
                <li>✓ Multi-Warehouse Product & Stock Control</li>
                <li>✓ Procurement & Supplier Workflows</li>
                <li>✓ Sales Order Distribution & Return Logs</li>
                <li>✓ Financial & Ledger Accounting Integration</li>
              </ul>
            </div>
          </div>

          <!-- Product 3: Eye Hospital Management ERP -->
          <div class="corporate-glass-card product-detail-card">
            <div>
              <span class="font-mono" style="color: #BE123C; font-weight: 700;">[ OPHTHALMOLOGY & EYE CARE ERP ]</span>
              <h3 style="font-size: 2rem; margin: 0.5rem 0 1rem 0;">Eye Hospital Management ERP</h3>
              <p style="color: var(--text-muted); line-height: 1.7; margin-bottom: 1.5rem;">
                Specialized ophthalmic hospital management ERP connecting patient refraction triage, slit-lamp imaging, cataract surgical OT scheduling, optical store lens POS, and eye pharmacy.
              </p>
              <router-link to="/products/hospital-management-system" class="btn btn-primary btn-sm">
                <span>View Dedicated Product Page</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </router-link>
            </div>
            <div style="background: var(--bg-surface); padding: 2rem; border-radius: var(--radius-md); border: 1px solid rgba(225, 29, 72, 0.3);">
              <div style="font-weight: 700; color: #BE123C; margin-bottom: 0.5rem;">Key Feature Modules:</div>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.9rem; color: var(--text-muted);">
                <li>✓ Ophthalmic EMR & Refraction Examination</li>
                <li>✓ Cataract & Eye Surgery OT Scheduling</li>
                <li>✓ Optical Store POS & Lens Barcode Inventory</li>
                <li>✓ Eye Pharmacy & Day-Care Package Billing</li>
              </ul>
            </div>
          </div>

          <!-- Product 4: Hostel Management ERP -->
          <div class="corporate-glass-card product-detail-card">
            <div>
              <span class="font-mono" style="color: #0D9488; font-weight: 700;">[ RESIDENTIAL DORMITORY ERP ]</span>
              <h3 style="font-size: 2rem; margin: 0.5rem 0 1rem 0;">Hostel Management ERP</h3>
              <p style="color: var(--text-muted); line-height: 1.7; margin-bottom: 1.5rem;">
                End-to-end residential dormitory and student/staff hostel management system handling block/room/bed allocation, biometric gate attendance, student mess meal billing, and maintenance tickets.
              </p>
              <router-link to="/products/hotel-management-system" class="btn btn-primary btn-sm">
                <span>View Dedicated Product Page</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </router-link>
            </div>
            <div style="background: var(--bg-surface); padding: 2rem; border-radius: var(--radius-md); border: 1px solid rgba(13, 148, 136, 0.3);">
              <div style="font-weight: 700; color: #0D9488; margin-bottom: 0.5rem;">Key Feature Modules:</div>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.9rem; color: var(--text-muted);">
                <li>✓ Dynamic Block, Room & Bed Seat Matrix</li>
                <li>✓ Student Mess & Dining Meal Ledger</li>
                <li>✓ Biometric Gate Access & Digital Gate Pass</li>
                <li>✓ Rent Collection & Room Maintenance Logs</li>
              </ul>
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
              <span class="global-cta-badge">🩺 Medical College ERP</span>
              <span class="global-cta-badge">📦 Inventory ERP</span>
              <span class="global-cta-badge">👁️ Eye Hospital ERP</span>
              <span class="global-cta-badge">🏢 Hostel ERP</span>
            </div>
            <h2>Want a Customized ERP Demonstration for Your Organization?</h2>
            <p>Book a live interactive demo with our ERP architects. We will tailor the system modules to your exact workflow specifications.</p>
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
