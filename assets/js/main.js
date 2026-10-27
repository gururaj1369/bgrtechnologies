/**
 * BGR Technologies - Main Client Script
 * Handles: Mobile Navigation, Sticky Header, Portfolio Filters, Case Study Modals,
 * Search-Engine Protected Phone Decoding, and Table of Contents Tracking.
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNav();
  initPortfolioFilters();
  initCaseStudyModal();
  initProtectedPhone();
  initLegalToc();
});

/**
 * 1. Sticky Header scroll styling
 */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 2. Mobile Navigation Drawer & Hamburger
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  if (!toggleBtn || !drawer) return;

  const toggleMenu = (open) => {
    const isOpen = open !== undefined ? open : !drawer.classList.contains('open');
    toggleBtn.classList.toggle('open', isOpen);
    drawer.classList.toggle('open', isOpen);
    toggleBtn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  toggleBtn.addEventListener('click', () => toggleMenu());

  // Close when clicking any nav link
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      toggleMenu(false);
    }
  });
}

/**
 * 3. Portfolio Category Filtering
 */
function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.portfolio-item-wrap');
  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/**
 * 4. Portfolio Case Study Modal
 */
function initCaseStudyModal() {
  const modalOverlay = document.getElementById('caseStudyModal');
  const closeBtn = document.getElementById('closeModalBtn');
  const triggerBtns = document.querySelectorAll('.view-project-btn');
  if (!modalOverlay) return;

  const openModal = (data) => {
    document.getElementById('modalTitle').textContent = data.title || 'Project Details';
    document.getElementById('modalCategory').textContent = data.category || '';
    document.getElementById('modalIndustry').textContent = data.industry || '';
    document.getElementById('modalChallenge').textContent = data.challenge || '';
    document.getElementById('modalSolution').textContent = data.solution || '';
    document.getElementById('modalScope').textContent = data.scope || '';
    document.getElementById('modalResults').textContent = data.results || '';

    // Render Tech Chips
    const techBox = document.getElementById('modalTech');
    if (techBox) {
      techBox.innerHTML = '';
      if (Array.isArray(data.technologies)) {
        data.technologies.forEach(tech => {
          const chip = document.createElement('span');
          chip.className = 'tag-chip';
          chip.textContent = tech;
          techBox.appendChild(chip);
        });
      }
    }

    modalOverlay.classList.add('open');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modalOverlay.classList.remove('open');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      try {
        const projectData = JSON.parse(btn.getAttribute('data-project'));
        openModal(projectData);
      } catch (err) {
        console.error('Failed to parse project data:', err);
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
      closeModal();
    }
  });
}

/**
 * 5. Search-Engine Protected Phone Number Rendering
 * Decodes the base64-encoded phone number at runtime so scrapers, automated spiders,
 * and search engine indexers reading the static HTML source never see the plain text number.
 */
function initProtectedPhone() {
  document.querySelectorAll('.safe-phone').forEach(el => {
    try {
      const enc = el.getAttribute('data-enc');
      const raw = el.getAttribute('data-raw');
      if (enc && raw) {
        const displayText = atob(enc);
        const telNumber = atob(raw);
        el.innerHTML = `<a href="tel:${telNumber}" rel="nofollow noindex noopener" style="color:inherit;text-decoration:none;">${displayText}</a>`;
      }
    } catch (e) {
      console.warn('Phone decode exception', e);
    }
  });

  // Also protect WhatsApp link if present
  document.querySelectorAll('.safe-whatsapp').forEach(el => {
    try {
      const raw = el.getAttribute('data-raw');
      if (raw) {
        const num = atob(raw);
        el.setAttribute('href', `https://wa.me/${num}?text=${encodeURIComponent('Hello BGR Technologies, I would like to inquire about your services.')}`);
        el.setAttribute('rel', 'nofollow noindex noopener');
      }
    } catch (e) {}
  });
}

/**
 * 6. Legal Table of Contents Active Link Tracking
 */
function initLegalToc() {
  const tocLinks = document.querySelectorAll('.legal-toc-list a');
  if (!tocLinks.length) return;

  const sections = Array.from(tocLinks)
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!sections.length) return;

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(sec => {
      if (sec.offsetTop <= scrollPos) {
        currentId = sec.id;
      }
    });

    tocLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
    });
  }, { passive: true });
}
