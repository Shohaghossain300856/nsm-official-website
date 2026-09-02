<template>
  <header class="site-header" :class="{ 'is-scrolled': isScrolled }">
    <div class="container">
      <nav class="navbar">
        <router-link to="/" class="brand-logo-link" @click="closeMobileMenu">
          <NsmLogo :height="52" />
        </router-link>

        <ul class="nav-menu" :class="{ active: isMobileMenuOpen }">
          <li class="nav-item">
            <router-link to="/" class="nav-link" :class="{ active: isRouteActive('/') }" @click="closeMobileMenu">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/our-clients" class="nav-link" :class="{ active: isRouteActive('/our-clients') }" @click="closeMobileMenu">Our Clients</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" :class="{ active: isRouteActive('/about') }" @click="closeMobileMenu">About Us</router-link>
          </li>
          
          <li class="nav-item">
            <router-link to="/products" class="nav-link" :class="{ active: isProductsActive }">Products ▾</router-link>
            <ul class="dropdown-menu">
              <li class="dropdown-item">
                <router-link to="/products/academic-management-system" @click="closeMobileMenu">
                  <span class="dropdown-icon">🩺</span> Medical College Management ERP
                </router-link>
              </li>
              <li class="dropdown-item">
                <router-link to="/products/inventory-management-system" @click="closeMobileMenu">
                  <span class="dropdown-icon">📦</span> Inventory Management ERP
                </router-link>
              </li>
              <li class="dropdown-item">
                <router-link to="/products/hospital-management-system" @click="closeMobileMenu">
                  <span class="dropdown-icon">👁️</span> Eye Hospital Management ERP
                </router-link>
              </li>
              <li class="dropdown-item">
                <router-link to="/products/hotel-management-system" @click="closeMobileMenu">
                  <span class="dropdown-icon">🏢</span> Hostel Management ERP
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <router-link to="/services" class="nav-link" :class="{ active: isServicesActive }">Services ▾</router-link>
            <ul class="dropdown-menu dropdown-menu-mega">
              <li class="dropdown-item">
                <router-link to="/crossref-doi-services" @click="closeMobileMenu">
                  <span class="dropdown-icon">📑</span> Crossref DOI & Sponsoring
                </router-link>
              </li>
              <li class="dropdown-item">
                <router-link to="/services/enterprise-erp-solutions" @click="closeMobileMenu">
                  <span class="dropdown-icon">⚙️</span> Enterprise ERP Solutions
                </router-link>
              </li>
              <li class="dropdown-item">
                <router-link to="/services/it-audit-consulting" @click="closeMobileMenu">
                  <span class="dropdown-icon">📋</span> IT Audit & Consulting
                </router-link>
              </li>
              <li class="dropdown-item">
                <router-link to="/services/digital-transformation-automation" @click="closeMobileMenu">
                  <span class="dropdown-icon">⚡</span> Digital Automation
                </router-link>
              </li>
              <li class="dropdown-item">
                <router-link to="/services/iot-hardware-software" @click="closeMobileMenu">
                  <span class="dropdown-icon">💻</span> Custom Software Solutions
                </router-link>
              </li>
              <li class="dropdown-item">
                <router-link to="/services/saas-paas-development" @click="closeMobileMenu">
                  <span class="dropdown-icon">☁️</span> SaaS & PaaS Development
                </router-link>
              </li>
              <li class="dropdown-item">
                <router-link to="/services/custom-web-application" @click="closeMobileMenu">
                  <span class="dropdown-icon">💻</span> Custom Web Applications
                </router-link>
              </li>
              <li class="dropdown-item">
                <router-link to="/services/crm-development" @click="closeMobileMenu">
                  <span class="dropdown-icon">👥</span> CRM Development
                </router-link>
              </li>
              <li class="dropdown-item">
                <router-link to="/services/mobile-app-development" @click="closeMobileMenu">
                  <span class="dropdown-icon">📱</span> Mobile Apps (Android & iOS)
                </router-link>
              </li>
              <li class="dropdown-item">
                <router-link to="/services/networking-server-infrastructure" @click="closeMobileMenu">
                  <span class="dropdown-icon">🖥️</span> DevOps & Server Infrastructure
                </router-link>
              </li>
              <li class="dropdown-item">
                <router-link to="/services/website-design-development" @click="closeMobileMenu">
                  <span class="dropdown-icon">🌐</span> Website Design & Dev
                </router-link>
              </li>
              <li class="dropdown-item">
                <router-link to="/services/search-engine-optimization" @click="closeMobileMenu">
                  <span class="dropdown-icon">📈</span> Search Engine Optimization
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <router-link to="/crossref-doi-services" class="nav-link" style="color: #E11D48; font-weight: 700;" @click="closeMobileMenu">Crossref DOI</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/team" class="nav-link" :class="{ active: isRouteActive('/team') }" @click="closeMobileMenu">Team</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/gallery" class="nav-link" :class="{ active: isRouteActive('/gallery') }" @click="closeMobileMenu">Gallery</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link" :class="{ active: isRouteActive('/contact') }" @click="closeMobileMenu">Contact</router-link>
          </li>
        </ul>

        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <a href="tel:+8801891151713" class="btn btn-call-now btn-sm">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>Call Now</span>
          </a>
          <button @click="$emit('open-proposal')" class="btn btn-primary btn-sm btn-pulse">Request Proposal</button>
          <button
            class="mobile-toggle"
            :class="{ 'is-open': isMobileMenuOpen }"
            @click="toggleMobileMenu"
            :aria-expanded="isMobileMenuOpen"
            aria-label="Toggle navigation drawer"
          >
            <span class="hamburger-line" />
            <span class="hamburger-line" />
            <span class="hamburger-line" />
          </button>
        </div>
      </nav>
    </div>
    <transition name="backdrop-fade">
      <div v-if="isMobileMenuOpen" class="nav-backdrop" @click="closeMobileMenu"></div>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import NsmLogo from '../common/NsmLogo.vue'

defineEmits(['open-proposal'])

const route = useRoute()
const router = useRouter()
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

function handleScroll() {
  isScrolled.value = window.scrollY > 24
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Lock background scroll while the mobile drawer is open, and always
// close the drawer automatically whenever the route changes.
watch(isMobileMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

watch(() => route.path, () => {
  closeMobileMenu()
})

function isRouteActive(path) {
  return route.path === path
}

const isProductsActive = computed(() => {
  return route.path.startsWith('/products')
})

const isServicesActive = computed(() => {
  return route.path.startsWith('/services')
})

function handleHashClick(event, id) {
  closeMobileMenu()
  if (route.path === '/') {
    event.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  } else {
    // Let router handle it
    event.preventDefault()
    router.push(`/#${id}`)
  }
}
</script>
