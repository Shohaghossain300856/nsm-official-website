<template>
  <div class="product-page">
    <section class="page-banner">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link> &gt; <router-link to="/products">Products</router-link> &gt; <span>Inventory Management System</span>
        </div>
        <h1 class="section-title">Inventory Management System</h1>
        <p class="section-subtitle">Real-time multi-warehouse stock management, procurement workflows, barcode scanning, and financial accounting ledger integration.</p>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <div class="detail-grid">
          <div>
            <span class="section-tag">Supply Chain ERP</span>
            <h2 style="font-size: 2.25rem; margin-bottom: 1.5rem;">Total Stock & Multi-Location Visibility</h2>
            <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.8; margin-bottom: 2rem;">
              The <strong>Inventory Management System by NSM Limited</strong> tracks stock movement across multi-tier warehouses, automating supplier purchase orders (PO), barcode/RFID lot scanning, sales dispatch dispatching, reorder levels, and general ledger syncing.
            </p>

            <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Core Feature Modules (Attachment Specs):</h3>
            <div class="feature-box-grid">
              <div class="feature-box">
                <h4>1. Product Catalog & Multi-Warehouse Stock</h4>
                <p>SKU variant definitions, batch/lot tracking, barcode printing, & inter-branch stock transfers.</p>
              </div>
              <div class="feature-box">
                <h4>2. Procurement & Vendor Management</h4>
                <p>Requisition approvals, PO lifecycle, Goods Received Notes (GRN), & supplier returns.</p>
              </div>
              <div class="feature-box">
                <h4>3. Sales Orders, Dispatch & Returns</h4>
                <p>Quotation-to-invoice pipeline, delivery Challan creation, FIFO/LIFO valuation, & credit limits.</p>
              </div>
              <div class="feature-box">
                <h4>4. Integrated Accounting & Billing</h4>
                <p>Auto-posted COGS ledger entries, payment vouchers, customer outstanding balances & aging reports.</p>
              </div>
              <div class="feature-box">
                <h4>5. Barcode/RFID Tracking & Reorder Analytics</h4>
                <p>Mobile scanner sync, safety stock triggers, automated PO suggestions & stockout prevention alerts.</p>
              </div>
            </div>
          </div>

          <div class="sidebar-cta-card">
            <h3>Request Inventory Demo</h3>
            <p>Schedule a live demonstration of multi-warehouse stock control & PO workflows.</p>
            <form @submit.prevent="handleDemoSubmit">
              <div class="form-group">
                <label class="form-label">Company Name *</label>
                <input type="text" v-model="form.company" class="form-input" required placeholder="e.g. Apex Supply">
              </div>
              <div class="form-group">
                <label class="form-label">Work Email *</label>
                <input type="email" v-model="form.email" class="form-input" required placeholder="name@company.com">
              </div>
              <div class="form-group">
                <label class="form-label">Phone / Mobile *</label>
                <input type="tel" v-model="form.phone" class="form-input" required placeholder="+88 018...">
              </div>

              <div v-if="submitted" style="margin-bottom: 1rem; padding: 0.5rem; background: rgba(16, 185, 129, 0.2); border: 1px solid #10B981; border-radius: 6px; color: #34D399; font-size: 0.85rem; font-weight: 600;">
                ✓ Demo request received! Our engineer will call you shortly.
              </div>

              <button type="submit" class="btn btn-primary btn-lg btn-pulse" style="width: 100%;">Book Inventory Demo ⚡</button>
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
              <span class="global-cta-badge">📦 Supply Chain ERP</span>
              <span class="global-cta-badge">⚡ Real-time Multi-Warehouse Sync</span>
            </div>
            <h2>Scale Your Warehouse and Supply Chain Today</h2>
            <p>Get accurate stock control, automated purchase orders, and multi-branch inventory tracking.</p>
          </div>
          <div class="global-cta-actions">
            <a href="tel:+8801891151713" class="btn btn-call-now btn-lg btn-pulse">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Call Now: +8801891151713, 14, 15, 17</span>
            </a>
            <router-link to="/contact" class="btn btn-primary btn-lg">Request Custom Quotation</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  company: '',
  email: '',
  phone: ''
})

const submitted = ref(false)

function handleDemoSubmit() {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.company = ''
    form.email = ''
    form.phone = ''
  }, 3000)
}
</script>
