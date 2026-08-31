import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initScrollReveal } from './utils/scrollReveal'

import './assets/css/main.css'
import './assets/css/components.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

// Kick off the global scroll-reveal animation engine once the app is mounted
requestAnimationFrame(() => initScrollReveal())
