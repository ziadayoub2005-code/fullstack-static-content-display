/**
 * Aura Studio - Static Content Display
 * Client-side interactivity for filtering, theme toggling, and image modal lightbox.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Toggle System
  initThemeToggle();

  // 2. Category Filter System
  initCategoryFilters();

  // 3. Image Lightbox Modal
  initLightboxModal();

  // 4. Smooth Anchor Scrolling & Active Nav Highlighting
  initNavScroll();
});

/**
 * Manages Dark / Light theme toggling with localStorage persistence
 */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('themeToggle');
  if (!themeToggleBtn) return;

  const currentTheme = localStorage.getItem('aura-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('aura-theme', newTheme);
  });
}

/**
 * Handles client-side category filtering for gallery cards
 */
function initCategoryFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryCards = document.querySelectorAll('.showcase-card');

  if (!filterButtons.length || !galleryCards.length) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button state
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      const filterValue = button.getAttribute('data-filter');

      // Filter cards
      galleryCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          // Smooth fade-in
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Handles Image Lightbox Modal preview
 */
function initLightboxModal() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const modalCaption = document.getElementById('modalCaption');
  const modalClose = document.getElementById('modalClose');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const openTriggers = document.querySelectorAll('[data-action="open-modal"]');

  if (!modal || !modalImg || !modalCaption) return;

  function openModal(imageSrc, captionText) {
    modalImg.src = imageSrc;
    modalImg.alt = captionText;
    modalCaption.textContent = captionText;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => {
      modalImg.src = '';
    }, 200);
  }

  openTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const imgSrc = trigger.getAttribute('data-image');
      const title = trigger.getAttribute('data-title');
      if (imgSrc) {
        openModal(imgSrc, title);
      }
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  // Close modal on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/**
 * Handles smooth scrolling and updates navigation active states
 */
function initNavScroll() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPosition >= top && scrollPosition < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}
