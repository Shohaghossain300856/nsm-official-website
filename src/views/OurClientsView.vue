<template>
  <div class="clients-page">

    <!-- Page Banner -->
    <section class="page-banner">
      <div class="container">
        <div class="breadcrumb" style="margin-bottom: 1rem;">
          <router-link to="/">Home</router-link> &gt; <span>Our Clients</span>
        </div>
        <h1 class="section-title" style="margin-top: 1rem; margin-bottom: 1.25rem;">
          Trusted by <span class="text-gradient">National Leaders</span>
        </h1>
        <p class="section-subtitle" style="max-width: 760px; line-height: 1.8;">
          NSM Limited proudly serves Government Medical Colleges, Defense Universities, NGOs, and Private Corporations across Bangladesh with cutting-edge ERP platforms.
        </p>
      </div>
    </section>

    <!-- Clients Region Sections -->
    <section v-for="region in regions" :key="region.id" class="clients-region-section" :class="region.id">
      <div class="container">
        <div class="region-header">
          <span class="region-pill">{{ region.tag }}</span>
          <h2 class="region-title">{{ region.title }}</h2>
          <p class="region-desc">{{ region.desc }}</p>
        </div>

        <TransitionGroup name="client-card-fade" tag="div" class="clients-grid">
          <div
            v-for="client in region.clients"
            :key="client.id"
            class="client-card"
          >
            <div class="card-accent" :style="{ background: client.systemColor }"></div>
            <div class="card-top">
              <div class="client-logo-box">
                <ClientLogo :client="client.id" :size="52" />
              </div>
              <span class="client-status-badge" :class="statusClass(client.status)">
                <span class="status-dot"></span>
                {{ client.status }}
              </span>
            </div>

            <h3 class="client-card-name">{{ client.name }}</h3>
            <p class="client-industry">{{ client.industry }}</p>

            <div class="client-card-divider"></div>

            <div class="client-detail-row">
              <span class="detail-icon">
                <img v-if="client.systemIconImg" :src="client.systemIconImg" :alt="client.system" width="16" height="16" style="object-fit: contain;" />
                <span v-else>{{ client.systemIcon }}</span>
              </span>
              <div>
                <div class="detail-lbl">Deployed System</div>
                <div class="detail-val" :style="{ color: client.systemColor }">{{ client.system }}</div>
              </div>
            </div>

            <div class="client-detail-row">
              <span class="detail-icon"><img src="/images/icons/location-pin.svg" alt="Location" width="14" height="14" /></span>
              <div>
                <div class="detail-lbl">Location</div>
                <div class="detail-val">{{ client.location }}</div>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </section>

    <!-- Bottom CTA Section -->
    <section class="clients-cta-section" style="padding: 4rem 0; background: #FFFFFF; border-top: 1px solid #E8EEFF;">
      <div class="container">
        <div class="clients-cta">
          <p class="cta-text">Want to see NSM Limited's full enterprise capability?</p>
          <div class="cta-btns">
            <router-link to="/contact" class="btn-cta-primary">Request a Demo</router-link>
            <router-link to="/products" class="btn-cta-outline">View Our Products</router-link>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import ClientLogo from '../components/common/ClientLogo.vue'

const allClients = [
  { id: 'dmc',       name: 'Dhaka Medical College',             category: 'medical',    industry: 'Government Medical College',             system: 'Academic Management System',          systemIcon: '🎓', systemIconImg: '/images/icons/system-academic.svg', systemColor: '#2563EB', location: 'Dhaka, Bangladesh',       status: 'Live Production', region: 'BD'  },
  { id: 'rpmc',      name: 'Rangpur Medical College',           category: 'medical',    industry: 'Government Medical College',             system: 'Academic Management System',          systemIcon: '🎓', systemIconImg: '/images/icons/system-academic.svg', systemColor: '#2563EB', location: 'Rangpur Division',        status: 'Live Production', region: 'BD'  },
  { id: 'dinajpur',  name: 'Dinajpur Medical College',          category: 'medical',    industry: 'Government Medical College',             system: 'Academic Management System',          systemIcon: '🎓', systemIconImg: '/images/icons/system-academic.svg', systemColor: '#2563EB', location: 'Dinajpur, Rangpur',       status: 'Live Production', region: 'BD'  },
  { id: 'comilla',   name: 'Comilla Medical College',           category: 'medical',    industry: 'Government Medical College',             system: 'Academic Management System',          systemIcon: '🎓', systemIconImg: '/images/icons/system-academic.svg', systemColor: '#2563EB', location: 'Cumilla, Chittagong',     status: 'Live Production', region: 'BD'  },
  { id: 'satkhira',  name: 'Satkhira Medical College',          category: 'medical',    industry: 'Government Medical College',             system: 'Academic Management System',          systemIcon: '🎓', systemIconImg: '/images/icons/system-academic.svg', systemColor: '#2563EB', location: 'Satkhira, Khulna',        status: 'Live Production', region: 'BD'  },
  { id: 'mmc',       name: 'Mymensingh Medical College',        category: 'medical',    industry: 'Government Medical College',             system: 'Store Management System',             systemIcon: '📦', systemIconImg: '/images/icons/system-store.svg',    systemColor: '#059669', location: 'Mymensingh Division',     status: 'Live Production', region: 'BD'  },
  { id: 'bogura',    name: 'Bogura Medical College',            category: 'medical',    industry: 'Government Medical College',             system: 'Academic Management System',          systemIcon: '🎓', systemIconImg: '/images/icons/system-academic.svg', systemColor: '#2563EB', location: 'Bogura, Rajshahi',        status: 'Live Production', region: 'BD'  },
  { id: 'nilphamari',name: 'Nilphamari Medical College',        category: 'medical',    industry: 'Government Medical College',             system: 'Academic Management System',          systemIcon: '🎓', systemIconImg: '/images/icons/system-academic.svg', systemColor: '#2563EB', location: 'Nilphamari, Rangpur',     status: 'Live Production', region: 'BD'  },
  { id: 'baiust',    name: 'Bangladesh Army Int. University',   category: 'defense',    industry: 'Military & Defense University',          system: 'Internship & Industrial Training',    systemIcon: '🎖️', systemIconImg: '/images/icons/system-training.svg', systemColor: '#894B9E', location: 'Saidpur, Nilphamari',     status: 'Verified Partner', region: 'BD' },
  { id: 'rdrs',      name: 'RDRS Bangladesh',                   category: 'enterprise', industry: 'International Development NGO',          system: 'Enterprise Portal & Automation',      systemIcon: '🌐', systemIconImg: '/images/icons/system-portal.svg',   systemColor: '#0284C7', location: 'Rangpur Division',        status: 'Live Production', region: 'BD'  },
  { id: 'prime',     name: 'Prime Medical College',             category: 'medical',    industry: 'Private Medical College',                system: 'Medical Journal & DOI Portal',        systemIcon: '📑', systemIconImg: '/images/icons/system-journal.svg',  systemColor: '#E11D48', location: 'Rangpur City',            status: 'Live Production', region: 'BD'  },
  { id: 'sufi',      name: 'Sufi Group & Properties',           category: 'enterprise', industry: 'Industrial & Real Estate Conglomerate',  system: 'Corporate ERP & Real Estate',         systemIcon: '🏢', systemIconImg: '/images/icons/system-erp.svg',      systemColor: '#4F46E5', location: 'Rangpur City',            status: 'Enterprise Hub', region: 'BD'   },
  
  // International Clients
  { id: 'usc-doi',   name: 'USC Scholarly Publishing Desk',     category: 'academic',   industry: 'University Publishing Division',         system: 'Crossref DOI Metadata Integration',   systemIcon: '📑', systemIconImg: '/images/icons/system-journal.svg',  systemColor: '#BE123C', location: 'California, USA',              status: 'Live Production', region: 'Global' },
  { id: 'apex-uae',  name: 'Apex Global Trading FZE',           category: 'enterprise', industry: 'International Trade & Logistics',         system: 'Cloud ERP & Logistics Telematics',    systemIcon: '🌐', systemIconImg: '/images/icons/system-portal.svg',   systemColor: '#0369A1', location: 'Dubai, UAE',                   status: 'Live Production', region: 'Global' },
  { id: 'ontario',   name: 'Ontario Medical Press',             category: 'medical',    industry: 'Research Journal Publisher',             system: 'DOI Desk & Metadata Automation',      systemIcon: '🔬', systemIconImg: '/images/icons/system-research.svg', systemColor: '#0D9488', location: 'Toronto, Canada',              status: 'Verified Partner', region: 'Global' }
]

const regions = computed(() => [
  {
    id: 'bd',
    tag: '🇧🇩 National Footprint',
    title: 'Bangladesh Deployments',
    desc: 'Enterprise ERP systems, academic frameworks, and digital transformation platforms powering institutions nationwide.',
    clients: allClients.filter(c => c.region === 'BD')
  },
  {
    id: 'global',
    tag: '🌐 Global Deployments',
    title: 'International Projects',
    desc: 'Scholarly publishing DOI systems, cross-border trade platforms, and cloud ERP solutions deployed for overseas clients.',
    clients: allClients.filter(c => c.region === 'Global')
  }
])

function statusClass(status) {
  if (status === 'Live Production')  return 'status-live'
  if (status === 'Verified Partner') return 'status-partner'
  if (status === 'Enterprise Hub')   return 'status-hub'
  return 'status-live'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700&display=swap');


/* ---- Banner ---- */
.page-banner {
  background: radial-gradient(circle at 50% 0%, rgba(79, 70, 229, 0.06) 0%, rgba(248, 250, 252, 0.85) 50%, #FFFFFF 100%) !important;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid var(--border-light);
}

.page-banner::before {
  content: '';
  position: absolute;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 380px;
  background: radial-gradient(ellipse, rgba(79, 70, 229, 0.12) 0%, rgba(16, 185, 129, 0.06) 50%, transparent 70%);
  filter: blur(60px);
  pointer-events: none;
  z-index: 0;
}

.page-banner > .container {
  position: relative;
  z-index: 1;
}


/* ---- Clients Region Sections ---- */
.clients-region-section {
  padding: 5rem 0;
}
.clients-region-section.bd {
  background: #F8FAFF;
}
.clients-region-section.global {
  background: #FFFFFF;
  border-top: 1px solid #E8EEFF;
}

.region-header {
  margin-bottom: 3rem;
  max-width: 800px;
}

.region-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.85rem;
  border-radius: 30px;
  background: rgba(79, 70, 229, 0.05);
  border: 1px solid rgba(79, 70, 229, 0.12);
  color: #4F46E5;
  font-size: 0.725rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.85rem;
}

.region-title {
  font-size: 1.85rem;
  font-weight: 800;
  color: #0F172A;
  font-family: 'Space Grotesk', sans-serif;
  margin-bottom: 0.5rem;
}

.region-desc {
  font-size: 0.95rem;
  color: #64748B;
  line-height: 1.6;
}

/* ---- Clients Grid ---- */
.clients-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
  position: relative;
}

.client-card {
  background: #FFFFFF; border-radius: 16px; border: 1px solid #E8EEFF;
  padding: 1.5rem; position: relative; overflow: hidden;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, background 0.25s ease;
}
.client-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(10, 15, 46, 0.06);
  border-color: rgba(79, 70, 229, 0.2);
  background: radial-gradient(circle at 100% 0%, rgba(248, 250, 255, 0.6) 0%, #FFFFFF 70%);
}
.card-accent { position: absolute; top: 0; left: 0; right: 0; height: 3px; border-radius: 16px 16px 0 0; opacity: 0.8; }

.card-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.1rem; }
.client-logo-box {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: #F1F5FF;
  border: 1px solid #E2E8F0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, box-shadow 0.25s ease;
}
.client-card:hover .client-logo-box {
  transform: scale(1.06);
  border-color: rgba(79, 70, 229, 0.35);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.08);
}

.client-status-badge { display: inline-flex; align-items: center; gap: 0.35rem; padding: 0.3rem 0.7rem; border-radius: 20px; font-size: 0.72rem; font-weight: 700; }
.status-dot { width: 5px; height: 5px; border-radius: 50%; }
.status-live    { background: rgba(16,185,129,0.1);  color: #059669; }
.status-live .status-dot { background: #10B981; animation: livePulse 2s infinite; }
.status-partner { background: rgba(139,92,246,0.1);  color: #7C3AED; }
.status-partner .status-dot { background: #8B5CF6; }
.status-hub     { background: rgba(79,70,229,0.1);   color: #4F46E5; }
.status-hub .status-dot { background: #4F46E5; }

.client-card-name { font-size: 1.1rem; font-weight: 700; color: #0F172A; margin-bottom: 0.3rem; font-family: 'Space Grotesk', sans-serif; }
.client-industry { font-size: 0.8rem; color: #94A3B8; margin-bottom: 1rem; }
.client-card-divider { height: 1px; background: #F1F5F9; margin-bottom: 1rem; }

.client-detail-row { display: flex; align-items: flex-start; gap: 0.7rem; margin-bottom: 0.75rem; }
.detail-icon { font-size: 1.1rem; flex-shrink: 0; margin-top: 2px; }
.detail-lbl { font-size: 0.72rem; color: #94A3B8; text-transform: uppercase; letter-spacing: 0.04em; font-weight: 600; margin-bottom: 0.1rem; }
.detail-val { font-size: 0.875rem; font-weight: 600; color: #1E293B; }

/* ---- Vue TransitionGroup client-card-fade ---- */
.client-card-fade-enter-active,
.client-card-fade-leave-active {
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.client-card-fade-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}
.client-card-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
  position: absolute;
}
.client-card-fade-move {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

/* ---- CTA ---- */
.clients-cta { text-align: center; padding: 3rem 2rem; background: linear-gradient(135deg, #0A0F2E, #0E1A4A); border-radius: 20px; }
.cta-text { color: #94A3B8; font-size: 1.05rem; margin-bottom: 1.5rem; }
.cta-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
.btn-cta-primary { padding: 0.8rem 2rem; border-radius: 10px; background: linear-gradient(135deg, #4F46E5, #06B6D4); color: #FFFFFF; font-weight: 700; text-decoration: none; transition: all 0.2s ease; font-size: 0.95rem; }
.btn-cta-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(79,70,229,0.4); }
.btn-cta-outline { padding: 0.8rem 2rem; border-radius: 10px; border: 1.5px solid rgba(255,255,255,0.15); color: #E2E8F0; font-weight: 600; text-decoration: none; transition: all 0.2s ease; font-size: 0.95rem; }
.btn-cta-outline:hover { border-color: rgba(255,255,255,0.35); background: rgba(255,255,255,0.05); transform: translateY(-2px); }

@media (max-width: 640px) {
  .clients-grid { grid-template-columns: 1fr; }
}
</style>
