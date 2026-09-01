import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import ProductsView from '../views/ProductsView.vue'
import CrossrefDoiView from '../views/CrossrefDoiView.vue'
import ContactView from '../views/ContactView.vue'
import OurClientsView from '../views/OurClientsView.vue'
import TeamView from '../views/TeamView.vue'
import GalleryView from '../views/GalleryView.vue'

// Products Subpages
import AcademicErpView from '../views/products/AcademicErpView.vue'
import InventoryErpView from '../views/products/InventoryErpView.vue'
import HospitalErpView from '../views/products/HospitalErpView.vue'
import HotelErpView from '../views/products/HotelErpView.vue'

// Services Subpages
import EnterpriseErpView from '../views/services/EnterpriseErpView.vue'
import ItAuditView from '../views/services/ItAuditView.vue'
import DigitalTransformationView from '../views/services/DigitalTransformationView.vue'
import IotView from '../views/services/IotView.vue'
import SaasPaasView from '../views/services/SaasPaasView.vue'
import CustomWebView from '../views/services/CustomWebView.vue'
import CrmView from '../views/services/CrmView.vue'
import MobileAppView from '../views/services/MobileAppView.vue'
import NetworkingView from '../views/services/NetworkingView.vue'
import WebDesignView from '../views/services/WebDesignView.vue'
import SeoView from '../views/services/SeoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'NSM Limited | Tier-1 Enterprise Software Firm & Global ERP Engineering' }
  },
  {
    path: '/index.html',
    redirect: '/'
  },
  {
    path: '/index.php',
    redirect: '/'
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { title: 'About Us | NSM Limited - Software Firm & Digital Transformation' }
  },
  {
    path: '/about.html',
    redirect: '/about'
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView,
    meta: { title: 'Our 12 Specialized Services | NSM Limited' }
  },
  {
    path: '/services.html',
    redirect: '/services'
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView,
    meta: { title: 'Enterprise ERP Systems & Products Suite | NSM Limited' }
  },
  {
    path: '/products.html',
    redirect: '/products'
  },
  {
    path: '/crossref-doi-services',
    name: 'crossref-doi',
    component: CrossrefDoiView,
    meta: { title: 'Crossref Sponsoring Organization & DOI Registration Services | NSM Limited' }
  },
  {
    path: '/crossref-doi-services.html',
    redirect: '/crossref-doi-services'
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: { title: 'Contact Corporate Office | NSM Limited' }
  },
  {
    path: '/contact.html',
    redirect: '/contact'
  },
  {
    path: '/our-clients',
    name: 'our-clients',
    component: OurClientsView,
    meta: { title: 'Our Clients | NSM Limited - Trusted by National Leaders' }
  },
  {
    path: '/team',
    name: 'team',
    component: TeamView,
    meta: { title: 'Our Professional Engineering Team | NSM Limited' }
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryView,
    meta: { title: 'NSM Limited Media & Operation Gallery' }
  },

  // Product routes (supports both clean paths and .html paths for direct compatibility)
  {
    path: '/products/academic-management-system',
    component: AcademicErpView,
    meta: { title: 'Medical College Management ERP | NSM Limited' }
  },
  {
    path: '/products/academic-management-system.html',
    redirect: '/products/academic-management-system'
  },
  {
    path: '/products/inventory-management-system',
    component: InventoryErpView,
    meta: { title: 'Inventory Management ERP | NSM Limited' }
  },
  {
    path: '/products/inventory-management-system.html',
    redirect: '/products/inventory-management-system'
  },
  {
    path: '/products/hospital-management-system',
    component: HospitalErpView,
    meta: { title: 'Eye Hospital Management ERP | NSM Limited' }
  },
  {
    path: '/products/hospital-management-system.html',
    redirect: '/products/hospital-management-system'
  },
  {
    path: '/products/hotel-management-system',
    component: HotelErpView,
    meta: { title: 'Hostel Management ERP | NSM Limited' }
  },
  {
    path: '/products/hotel-management-system.html',
    redirect: '/products/hotel-management-system'
  },

  // Service routes
  {
    path: '/services/enterprise-erp-solutions',
    component: EnterpriseErpView,
    meta: { title: 'Enterprise ERP Solutions & Custom Modules | NSM Limited' }
  },
  {
    path: '/services/enterprise-erp-solutions.html',
    redirect: '/services/enterprise-erp-solutions'
  },
  {
    path: '/services/it-audit-consulting',
    component: ItAuditView,
    meta: { title: 'IT Audit, Consulting & Professional Training | NSM Limited' }
  },
  {
    path: '/services/it-audit-consulting.html',
    redirect: '/services/it-audit-consulting'
  },
  {
    path: '/services/digital-transformation-automation',
    component: DigitalTransformationView,
    meta: { title: 'Digital Transformation & Workflow Automation | NSM Limited' }
  },
  {
    path: '/services/digital-transformation-automation.html',
    redirect: '/services/digital-transformation-automation'
  },
  {
    path: '/services/iot-hardware-software',
    component: IotView,
    meta: { title: 'IoT Hardware & Software Integration | NSM Limited' }
  },
  {
    path: '/services/iot-hardware-software.html',
    redirect: '/services/iot-hardware-software'
  },
  {
    path: '/services/saas-paas-development',
    component: SaasPaasView,
    meta: { title: 'Cloud SaaS & PaaS Platform Development | NSM Limited' }
  },
  {
    path: '/services/saas-paas-development.html',
    redirect: '/services/saas-paas-development'
  },
  {
    path: '/services/custom-web-application',
    component: CustomWebView,
    meta: { title: 'Custom Web Application Development | NSM Limited' }
  },
  {
    path: '/services/custom-web-application.html',
    redirect: '/services/custom-web-application'
  },
  {
    path: '/services/crm-development',
    component: CrmView,
    meta: { title: 'CRM System Development & Custom Workflows | NSM Limited' }
  },
  {
    path: '/services/crm-development.html',
    redirect: '/services/crm-development'
  },
  {
    path: '/services/mobile-app-development',
    component: MobileAppView,
    meta: { title: 'Mobile App Development (iOS & Android) | NSM Limited' }
  },
  {
    path: '/services/mobile-app-development.html',
    redirect: '/services/mobile-app-development'
  },
  {
    path: '/services/networking-server-infrastructure',
    component: NetworkingView,
    meta: { title: 'Networking & DevOps Infrastructure | NSM Limited' }
  },
  {
    path: '/services/networking-server-infrastructure.html',
    redirect: '/services/networking-server-infrastructure'
  },
  {
    path: '/services/website-design-development',
    component: WebDesignView,
    meta: { title: 'Enterprise Website Design & Development | NSM Limited' }
  },
  {
    path: '/services/website-design-development.html',
    redirect: '/services/website-design-development'
  },
  {
    path: '/services/search-engine-optimization',
    component: SeoView,
    meta: { title: 'Technical Search Engine Optimization (SEO) | NSM Limited' }
  },
  {
    path: '/services/search-engine-optimization.html',
    redirect: '/services/search-engine-optimization'
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
