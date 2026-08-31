/*
   NSM Limited - Core Application Logic
*/

document.addEventListener('DOMContentLoaded', () => {
  initActiveNav();
  initProductTabs();
  initMobileMenu();
  initModals();
  initFormHandler();
  initScrollEffects();
  initFloatingCTAWidget();
});

// Dynamic Active Navigation & Subpage Dropdown Engine
function initActiveNav() {
  const currentPath = window.location.pathname.toLowerCase().replace(/\/$/, '');
  const pathSegments = currentPath.split('/');
  const currentFile = pathSegments[pathSegments.length - 1] || 'index.html';
  const isSubfolder = pathSegments.includes('services') || pathSegments.includes('products');
  
  const navLinks = document.querySelectorAll('.nav-link');
  const dropdownLinks = document.querySelectorAll('.dropdown-item a');

  let matchedDropdown = false;

  // 1. Highlight Dropdown Item if on subpage
  dropdownLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkFile = href.split('/').pop().toLowerCase();

    link.classList.remove('active');
    link.parentElement?.classList.remove('active');

    if (linkFile && linkFile === currentFile) {
      link.classList.add('active');
      link.parentElement?.classList.add('active');
      matchedDropdown = true;

      // Highlight parent nav-link (e.g. Services ▾ or Products ▾)
      const parentNavItem = link.closest('.nav-item');
      if (parentNavItem) {
        const parentNavLink = parentNavItem.querySelector('.nav-link');
        if (parentNavLink) {
          parentNavLink.classList.add('active');
        }
      }
    }
  });

  // 2. Highlight main nav-link if not a subpage dropdown
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    if (href.startsWith('#')) return;

    const linkFile = href.split('/').pop().toLowerCase();

    if (!matchedDropdown) {
      if (linkFile === currentFile || (currentFile === 'index.html' && (linkFile === '' || linkFile === 'index.html'))) {
        link.classList.add('active');
      } else if (!isSubfolder) {
        link.classList.remove('active');
      }
    }
  });
}

// 7. Dynamic Floating CTA Widget Injector
function initFloatingCTAWidget() {
  if (document.querySelector('.floating-cta-container')) return;

  const container = document.createElement('div');
  container.className = 'floating-cta-container';
  container.innerHTML = `
    <a href="tel:+8801891151713" class="floating-call-btn" title="Direct Call NSM Limited Engineering Desk">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
      <span>Call Now: +8801891151713, 14, 15, 17</span>
    </a>
    <a href="${getRelativePath('contact.html')}" class="floating-cta-btn" title="Request Immediate Technical Consultation & Estimate">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
      <span>Get Instant Quote</span>
    </a>
  `;
  document.body.appendChild(container);
}

function getRelativePath(path) {
  // Handles subdirectory depth if needed
  const depth = window.location.pathname.split('/').length - 2;
  if (depth > 1 && (window.location.pathname.includes('/services/') || window.location.pathname.includes('/products/'))) {
    return '../' + path;
  }
  return path;
}

// 1. Enterprise Product Tabs Switcher
function initProductTabs() {
  const tabBtns = document.querySelectorAll('.product-tabs .tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}

// 2. Mobile Navigation Toggle
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const isExpanded = navMenu.classList.contains('active');
      toggleBtn.innerHTML = isExpanded 
        ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>'
        : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>';
    });

    // Close on link click
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
}

// 3. Modal Handler (Demo Request & Consultation)
function initModals() {
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  const closeBtns = document.querySelectorAll('.modal-close-btn');

  // Trigger buttons
  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = btn.getAttribute('data-open-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        // Pre-populate product if specified
        const productName = btn.getAttribute('data-product-name');
        if (productName) {
          const msgInput = modal.querySelector('#modal-message');
          if (msgInput) {
            msgInput.value = `Hello NSM Limited team,\n\nI would like to request a live demo and technical presentation for your "${productName}". Please contact me at your earliest convenience.`;
          }
        }
        modal.classList.add('active');
      }
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modalOverlays.forEach(m => m.classList.remove('active'));
    });
  });

  modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });
}

// 4. Form Handler & Toast Feedback
function initFormHandler() {
  const forms = document.querySelectorAll('.ajax-contact-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';
      
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending Message...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }

        showToast('Thank you! Your request has been sent to support@nsmlimited.com. Our team will contact you shortly.');
        form.reset();

        // Close open modals
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
      }, 1200);
    });
  });
}

// 5. Toast Notification Engine
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A855F7" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease-out';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// 6. Scroll Active Header & Smooth Anchor Highlight
function initScrollEffects() {
  const header = document.querySelector('.site-header');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    if (!sections.length) return;

    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    if (currentSectionId) {
      const sectionLinks = document.querySelectorAll('.nav-link[href^="#"]');
      sectionLinks.forEach(link => {
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          sectionLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      });
    }
  });
}

// Client Filter & View-All Accordion Toggle
function initClientFilters() {
  const tabs = document.querySelectorAll('.client-tab-btn');
  const cards = document.querySelectorAll('.client-logo-card');
  const toggleBtn = document.getElementById('toggle-all-clients-btn');
  let isExpanded = false;

  if (!cards.length) return;

  function filterCategory(cat) {
    let matchCount = 0;
    cards.forEach(card => {
      const cardCat = card.getAttribute('data-category') || 'medical';
      const isMatch = cat === 'all' || cardCat === cat;

      if (!isMatch) {
        card.classList.add('hidden-client');
      } else {
        matchCount++;
        if (cat === 'all' && !isExpanded && matchCount > 6) {
          card.classList.add('hidden-client');
        } else {
          card.classList.remove('hidden-client');
        }
      }
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.getAttribute('data-filter');
      filterCategory(cat);
    });
  });

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      isExpanded = !isExpanded;
      if (isExpanded) {
        toggleBtn.innerHTML = '<span>Show Featured Clients Only ▲</span>';
      } else {
        toggleBtn.innerHTML = '<span>Explore All Institutional Deployments (10+) ▼</span>';
      }
      const activeTab = document.querySelector('.client-tab-btn.active');
      const cat = activeTab ? activeTab.getAttribute('data-filter') : 'all';
      filterCategory(cat);
    });
  }

  filterCategory('all');
}
