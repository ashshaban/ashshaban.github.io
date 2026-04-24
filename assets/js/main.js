AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 50,
});

// Language Toggle System
function setLanguage(lang) {
  localStorage.setItem('preferredLanguage', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  if (lang === 'ar') {
    document.body.classList.add('is-rtl');
    document.body.classList.remove('is-ltr');
  } else {
    document.body.classList.add('is-ltr');
    document.body.classList.remove('is-rtl');
  }

  // Update toggle button text if needed
  const langToggleText = document.querySelector('.lang-toggle-text');
  if (langToggleText) {
    langToggleText.textContent = lang === 'ar' ? 'EN' : 'AR';
  }
}

function toggleLanguage() {
  const currentLang = localStorage.getItem('preferredLanguage') || 'en';
  setLanguage(currentLang === 'en' ? 'ar' : 'en');
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLanguage') || 'en';
  setLanguage(savedLang);
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

if (mobileToggle && navLinks) {
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileToggle.innerHTML = navLinks.classList.contains('active')
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });
}

// Gallery Filter Functionality
window.filterGallery = function(category) {
  const items = document.querySelectorAll('.gallery-item');
  const buttons = document.querySelectorAll('.tab-btn');

  buttons.forEach((btn) => {
    btn.classList.remove('active');
    if (btn.getAttribute('onclick').includes(category)) {
      btn.classList.add('active');
    }
  });

  items.forEach((item) => {
    if (category === 'all' || item.dataset.category === category) {
      item.classList.remove('hidden');
      item.style.display = 'block';
    } else {
      item.classList.add('hidden');
      item.style.display = 'none';
    }
  });
};

// Tracking and Analytics Events
const trackEvent = (eventName, props = {}) => {
  const payload = {
    page_path: window.location.pathname,
    page_title: document.title,
    ...props,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...payload });

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload);
  }

  if (typeof window.plausible === 'function') {
    window.plausible(eventName, { props: payload });
  }
};

document.querySelectorAll('[data-track]').forEach((element) => {
  element.addEventListener('click', () => {
    trackEvent(element.dataset.track || 'cta_click', {
      context: element.dataset.trackContext || 'general',
      label: element.textContent.trim().slice(0, 80),
      href: element.getAttribute('href') || '',
    });
  });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
const pageUrlInput = document.getElementById('pageUrl');
const submittedAtInput = document.getElementById('submittedAt');
const leadSourceInput = document.getElementById('leadSource');

if (pageUrlInput) {
  pageUrlInput.value = window.location.href;
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    const actionUrl = contactForm.getAttribute('action') || '';
    const interestValue =
      contactForm.querySelector('[name="interest"]')?.value || 'unknown';

    if (leadSourceInput) {
      leadSourceInput.value = document.referrer ? 'referral' : 'direct';
    }

    if (submittedAtInput) {
      submittedAtInput.value = new Date().toISOString();
    }

    trackEvent('contact_form_submit_attempt', {
      context: 'contact_form',
      interest: interestValue,
    });
  });
}

// Smooth Scrolling for Hash Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (navLinks) {
        navLinks.classList.remove('active');
      }
      if (mobileToggle) {
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
      }
    }
  });
});
