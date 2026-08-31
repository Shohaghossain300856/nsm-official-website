/**
 * Site-wide scroll-reveal engine.
 * Automatically fades/slides elements into view as the user scrolls,
 * across every route, without needing to touch individual view files.
 */

const SELECTORS = [
  '.service-card',
  '.corporate-glass-card',
  '.section-header',
  '.metric-highlight-card',
  '.tech-category-card',
  '.client-logo-card',
  '.hero-visual-card',
  '.erp-preview-card',
  '.stat-number',
  '.country-pill',
  '.erp-hud-card',
  '.erp-stat-item',
  '.product-detail-card',
  '.testimonial-card',
  '.client-logo',
  '.pricing-card',
  '.team-card',
  '.value-card',
  '.timeline-item',
  '.feature-card',
  '.calculator-card',
  '.global-cta-banner',
  '.contact-info-card',
  '.faq-item',
  '.blog-card',
].join(',')

let observer = null
let mutationObserver = null
const STAGGER_MS = 70
const MAX_STAGGER = 6

function primeElement(el, index) {
  if (el.dataset.revealBound) return
  // Respect elements that shouldn't animate (already handled some other way)
  if (el.closest('.modal-overlay')) return

  el.dataset.revealBound = 'true'
  el.classList.add('reveal')
  const delay = Math.min(index % MAX_STAGGER, MAX_STAGGER) * STAGGER_MS
  el.style.transitionDelay = `${delay}ms`
  observer.observe(el)
}

function scan(root = document) {
  const nodes = root.querySelectorAll(SELECTORS)
  nodes.forEach((el, i) => primeElement(el, i))
}

export function initScrollReveal() {
  if (typeof window === 'undefined') return
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
  }

  scan()

  if (!mutationObserver) {
    mutationObserver = new MutationObserver((mutations) => {
      let shouldScan = false
      for (const m of mutations) {
        if (m.addedNodes && m.addedNodes.length) {
          shouldScan = true
          break
        }
      }
      if (shouldScan) {
        // Debounce slightly so batched Vue DOM updates settle first
        window.clearTimeout(mutationObserver._t)
        mutationObserver._t = window.setTimeout(() => scan(), 60)
      }
    })
    mutationObserver.observe(document.body, { childList: true, subtree: true })
  }
}

export function rescanScrollReveal() {
  window.setTimeout(() => scan(), 80)
}
