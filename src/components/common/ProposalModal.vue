<template>
  <div class="modal-overlay" :class="{ active: isOpen }" @click.self="closeModal">
    <div class="modal-box">
      <button class="modal-close-btn" @click="closeModal" aria-label="Close modal">✕</button>
      <div style="margin-bottom: 1.5rem;">
        <span class="cta-badge" style="margin-bottom: 0.5rem;">FAST RESPONSE • 24 HOURS</span>
        <h3 style="font-size: 1.75rem; color: #0F172A; font-family: var(--font-display);">Request Enterprise Proposal</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 0.25rem;">
          Fill out the brief scope below and our lead enterprise systems architects will prepare a comprehensive quotation and technical blueprint.
        </p>
      </div>

      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label class="form-label">Your Full Name / Organization *</label>
          <input type="text" v-model="form.name" class="form-input" placeholder="e.g. Dr. Kawsar / Tech Innovators Ltd." required />
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Official Email *</label>
            <input type="email" v-model="form.email" class="form-input" placeholder="contact@domain.com" required />
          </div>
          <div class="form-group">
            <label class="form-label">Phone / WhatsApp *</label>
            <input type="tel" v-model="form.phone" class="form-input" placeholder="+880 1891-151713" required />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Target Solution / Requirement *</label>
          <select v-model="form.service" class="form-input" required>
            <option value="" disabled>Select Requirement Category</option>
            <option value="Enterprise ERP Solutions">Enterprise ERP Solutions (Hospital / Academic / Inventory)</option>
            <option value="Crossref DOI Sponsoring">Crossref DOI Sponsoring & Metadata Services</option>
            <option value="Custom Cloud SaaS & PaaS">Custom Cloud SaaS & PaaS Development</option>
            <option value="Custom Software Solutions">Custom Software Solutions (Web App / Dashboard / API)</option>
            <option value="Mobile App Development">Mobile App Development (iOS / Android)</option>
            <option value="IT Audit & Security Consulting">IT Audit & Security Infrastructure Consulting</option>
            <option value="Custom Web Application">High-Traffic Custom Web Application</option>
            <option value="Other">Other Specific Enterprise Needs</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Project Scope & Key Expectations</label>
          <textarea v-model="form.details" class="form-textarea" rows="3" placeholder="Describe the number of users, existing systems, key deadlines, or custom workflows..."></textarea>
        </div>

        <div v-if="submitted" style="margin-bottom: 1rem; padding: 0.75rem 1rem; background: #ECFDF5; border: 1px solid #10B981; border-radius: 8px; color: #065F46; font-size: 0.9rem; font-weight: 600;">
          ✓ Thank you! Your proposal request has been received. Our team will contact you promptly.
        </div>

        <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 0.5rem;">
          <span>Submit Request & Get Quote</span>
          <span>→</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  details: ''
})

const submitted = ref(false)

function closeModal() {
  emit('close')
}

function handleSubmit() {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.name = ''
    form.email = ''
    form.phone = ''
    form.service = ''
    form.details = ''
    emit('close')
  }, 2500)
}
</script>
