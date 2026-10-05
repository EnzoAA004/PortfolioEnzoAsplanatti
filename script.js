const languageButton = document.getElementById('langToggle');
const themeButton = document.getElementById('themeToggle');
const footerYear = document.getElementById('footerYear');
const menuToggle = document.getElementById('menuToggle');
const primaryNav = document.getElementById('primaryNav');
const pageLoader = document.querySelector('.page-loader');
const customCursor = document.getElementById('customCursor');
const pointerGlow = document.querySelector('.pointer-glow');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

let currentLanguage = 'es';

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;

  document.querySelectorAll('[data-es][data-en]').forEach((element) => {
    element.textContent = element.dataset[language];
  });

  if (languageButton) {
    languageButton.textContent = language === 'es' ? 'EN' : 'ES';
    languageButton.setAttribute(
      'aria-label',
      language === 'es' ? 'Switch to English' : 'Cambiar a español'
    );
  }

  syncThemeButtonLabel();

  const titleKey = language === 'es' ? 'titleEs' : 'titleEn';
  document.title =
    document.body?.dataset?.[titleKey] ||
    'Enzo Asplanatti | Software Engineer';

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    const descriptionKey = language === 'es' ? 'descriptionEs' : 'descriptionEn';
    description.content =
      document.body?.dataset?.[descriptionKey] ||
      (language === 'es'
        ? 'Portfolio de Enzo Asplanatti: Software Engineering, Backend, Cloud, Frontend, Mobile, Data & AI, sistemas distribuidos y producto.'
        : 'Enzo Asplanatti portfolio: Software Engineering, Backend, Cloud, Frontend, Mobile, Data & AI, distributed systems and product.');
  }
}

if (languageButton) {
  languageButton.addEventListener('click', () => {
    setLanguage(currentLanguage === 'es' ? 'en' : 'es');
  });
}


function getCurrentTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

function syncThemeButtonLabel() {
  if (!themeButton) return;
  const isDark = getCurrentTheme() === 'dark';
  const label =
    currentLanguage === 'es'
      ? (isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro')
      : (isDark ? 'Switch to light theme' : 'Switch to dark theme');
  themeButton.setAttribute('aria-label', label);
  themeButton.setAttribute('title', label);
}

function setTheme(theme, { persist = true, animate = true } = {}) {
  const nextTheme = theme === 'dark' ? 'dark' : 'light';

  if (animate && !prefersReducedMotion) {
    document.documentElement.classList.add('theme-switching');
    window.setTimeout(() => document.documentElement.classList.remove('theme-switching'), 420);
  }

  document.documentElement.dataset.theme = nextTheme;

  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) {
    themeColor.content = nextTheme === 'dark' ? '#090a0c' : '#f4f1e8';
  }

  if (persist) {
    try {
      localStorage.setItem('portfolio-theme', nextTheme);
    } catch (_) {
      // Theme still works for the current page when storage is unavailable.
    }
  }

  syncThemeButtonLabel();
}

if (themeButton) {
  themeButton.addEventListener('click', () => {
    setTheme(getCurrentTheme() === 'dark' ? 'light' : 'dark');
  });
}

setTheme(getCurrentTheme(), { persist: false, animate: false });

if (footerYear) {
  footerYear.textContent = new Date().getFullYear().toString();
}

/* Mobile navigation */
function closeMenu() {
  if (!menuToggle || !primaryNav) return;
  menuToggle.classList.remove('is-open');
  primaryNav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', currentLanguage === 'es' ? 'Abrir menú' : 'Open menu');
  document.body.classList.remove('menu-open');
}

if (menuToggle && primaryNav) {
  menuToggle.addEventListener('click', () => {
    const open = !primaryNav.classList.contains('is-open');
    menuToggle.classList.toggle('is-open', open);
    primaryNav.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute(
      'aria-label',
      open
        ? (currentLanguage === 'es' ? 'Cerrar menú' : 'Close menu')
        : (currentLanguage === 'es' ? 'Abrir menú' : 'Open menu')
    );
    document.body.classList.toggle('menu-open', open);
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) closeMenu();
  });
}

/* Loader */
function finishLoader() {
  if (!pageLoader) return;
  pageLoader.classList.add('is-done');
  window.setTimeout(() => pageLoader.remove(), 800);
}

if (prefersReducedMotion) {
  finishLoader();
} else {
  window.addEventListener('load', () => window.setTimeout(finishLoader, 520), { once: true });
  window.setTimeout(finishLoader, 1800);
}

/* Base reveal fallback */
const revealElements = document.querySelectorAll('.reveal');

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealElements.forEach((element) => element.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(
    (entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        instance.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -7% 0px', threshold: 0.06 }
  );

  revealElements.forEach((element) => observer.observe(element));
}

/* Pointer light + custom contextual cursor */
if (finePointer && !prefersReducedMotion) {
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let glowX = mouseX;
  let glowY = mouseY;

  window.addEventListener('pointermove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;

    if (customCursor) {
      customCursor.style.left = event.clientX + 'px';
      customCursor.style.top = event.clientY + 'px';
    }
  });

  const animateGlow = () => {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    if (pointerGlow) {
      pointerGlow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`;
    }
    requestAnimationFrame(animateGlow);
  };
  animateGlow();

  document.querySelectorAll('[data-cursor]').forEach((element) => {
    element.addEventListener('mouseenter', () => {
      if (!customCursor) return;
      customCursor.querySelector('span').textContent = element.dataset.cursor || 'OPEN';
      customCursor.classList.add('is-active');
    });

    element.addEventListener('mouseleave', () => {
      customCursor?.classList.remove('is-active');
    });
  });
}

/* Dynamic project-card light */
document.querySelectorAll('.project-card, .system-case, .archive-card').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--card-x', `${event.clientX - rect.left}px`);
    card.style.setProperty('--card-y', `${event.clientY - rect.top}px`);
  });
});

/* Magnetic micro-interactions */
if (finePointer && !prefersReducedMotion) {
  document.querySelectorAll('.magnetic').forEach((element) => {
    element.addEventListener('pointermove', (event) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      element.style.transform = `translate(${x * 0.09}px, ${y * 0.12}px)`;
    });

    element.addEventListener('pointerleave', () => {
      element.style.transform = '';
    });
  });

  const systemFrame = document.querySelector('.system-frame');
  if (systemFrame) {
    systemFrame.addEventListener('pointermove', (event) => {
      const rect = systemFrame.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width - 0.5;
      const ny = (event.clientY - rect.top) / rect.height - 0.5;

      systemFrame.querySelectorAll('.cap-node').forEach((node, index) => {
        const depth = 5 + index * 1.2;
        if (node.classList.contains('node-data')) {
          node.style.transform = `translate3d(calc(-50% + ${nx * depth}px), ${ny * depth}px, 0)`;
        } else {
          node.style.transform = `translate3d(${nx * depth}px, ${ny * depth}px, 0)`;
        }
      });

      const core = systemFrame.querySelector('.system-core');
      if (core) {
        core.style.transform =
          `translate(calc(-50% + ${nx * -7}px), calc(-50% + ${ny * -7}px))`;
      }
    });

    systemFrame.addEventListener('pointerleave', () => {
      systemFrame.querySelectorAll('.cap-node').forEach((node) => {
        if (node.classList.contains('node-data')) {
          node.style.transform = 'translateX(-50%)';
        } else {
          node.style.transform = '';
        }
      });
      const core = systemFrame.querySelector('.system-core');
      if (core) core.style.transform = 'translate(-50%, -50%)';
    });
  }
}

/* GSAP layer: progressive enhancement only */
if (!prefersReducedMotion && window.gsap) {
  const { gsap } = window;

  if (window.ScrollTrigger) {
    gsap.registerPlugin(window.ScrollTrigger);
  }

  const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
  intro
    .from('.site-header', { y: -24, opacity: 0, duration: 0.7, delay: 0.12 })
    .from('.hero-meta, .hero .eyebrow', { y: 18, opacity: 0, duration: 0.6, stagger: 0.08 }, '-=0.38')
    .from('.motion-title', { yPercent: 115, opacity: 0, duration: 1.05, stagger: 0.11 }, '-=0.28')
    .from('.hero-lower, .role-rail', { y: 24, opacity: 0, duration: 0.72, stagger: 0.09 }, '-=0.62')
    .from('.system-frame', { scale: 0.92, rotate: 2, opacity: 0, duration: 1 }, '-=0.9')
    .from('.cap-node', { scale: 0.78, opacity: 0, duration: 0.45, stagger: 0.07 }, '-=0.5')
    .from('.terminal-card', { x: 22, y: 16, rotate: 3, opacity: 0, duration: 0.6 }, '-=0.35')
    .from('.hero-metrics > div', { y: 16, opacity: 0, duration: 0.5, stagger: 0.06 }, '-=0.38');

  if (window.ScrollTrigger) {
    gsap.to('.hero-copy', {
      yPercent: 7,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-v2',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });

    gsap.to('.hero-system', {
      yPercent: -7,
      rotate: -1.2,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-v2',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.1
      }
    });

    gsap.utils.toArray('.system-case, .archive-card, .project-card').forEach((card) => {
      gsap.fromTo(
        card,
        { y: 46, opacity: 0.68 },
        {
          y: 0,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            end: 'top 55%',
            scrub: 0.7
          }
        }
      );
    });

    gsap.utils.toArray('.screen-mock, .product-surface').forEach((mock) => {
      gsap.fromTo(
        mock,
        { y: 18, rotateX: 3 },
        {
          y: -8,
          rotateX: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: mock,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2
          }
        }
      );
    });

    gsap.utils.toArray('.capability').forEach((card, index) => {
      gsap.from(card, {
        y: 30,
        opacity: 0,
        duration: 0.75,
        delay: (index % 3) * 0.04,
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          once: true
        }
      });
    });

    gsap.utils.toArray('.section-heading h2, .section-title-sticky h2, .contact-section h2').forEach((heading) => {
      gsap.from(heading, {
        y: 34,
        opacity: 0,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 88%',
          once: true
        }
      });
    });
  }
}

/* Project domain filtering */
const projectFilterButtons = Array.from(document.querySelectorAll('.project-filter'));
const filterableProjects = Array.from(document.querySelectorAll('[data-project-domains]'));
const filterEmpty = document.getElementById('filterEmpty');

function setProjectFilter(filter) {
  let visibleCount = 0;

  projectFilterButtons.forEach((button) => {
    const active = button.dataset.filter === filter;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  filterableProjects.forEach((project) => {
    const domains = (project.dataset.projectDomains || '').split(/\s+/).filter(Boolean);
    const visible = filter === 'all' || domains.includes(filter);
    project.classList.toggle('is-filtered-out', !visible);
    project.setAttribute('aria-hidden', String(!visible));
    if (visible) visibleCount += 1;
  });

  if (filterEmpty) {
    filterEmpty.hidden = visibleCount !== 0;
  }

  if (window.ScrollTrigger) {
    window.ScrollTrigger.refresh();
  }
}

projectFilterButtons.forEach((button) => {
  button.setAttribute('aria-pressed', String(button.classList.contains('is-active')));
  button.addEventListener('click', () => {
    setProjectFilter(button.dataset.filter || 'all');
  });
});

setProjectFilter('all');

/* Curated-system visual microinteractions */
if (finePointer && !prefersReducedMotion) {
  document.querySelectorAll('.system-case').forEach((card) => {
    const visual = card.querySelector('.system-case-visual');
    if (!visual) return;

    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width - 0.5;
      const ny = (event.clientY - rect.top) / rect.height - 0.5;
      visual.style.transform = `translate3d(${nx * -5}px, ${ny * -5}px, 0)`;
    });

    card.addEventListener('pointerleave', () => {
      visual.style.transform = '';
    });
  });
}

/* Case study reading progress + section navigation */
const readingProgress = document.getElementById('readingProgress');
const caseSections = Array.from(document.querySelectorAll('[data-case-section]'));
const caseNavItems = Array.from(document.querySelectorAll('[data-case-nav]'));

if (readingProgress) {
  let scrollTicking = false;
  const updateReadingProgress = () => {
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / max));
    readingProgress.style.transform = `scaleX(${progress})`;
    scrollTicking = false;
  };

  window.addEventListener('scroll', () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(updateReadingProgress);
  }, { passive: true });

  updateReadingProgress();
}

if (caseSections.length && caseNavItems.length && 'IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;

      const key = visible.target.dataset.caseSection;
      caseNavItems.forEach((item) => {
        item.classList.toggle('is-active', item.dataset.caseNav === key);
      });
    },
    { rootMargin: '-28% 0px -55% 0px', threshold: [0.05, 0.2, 0.45] }
  );

  caseSections.forEach((section) => sectionObserver.observe(section));
}

/* Featured-system click convenience. Keyboard users keep the explicit case-study link. */
document.querySelectorAll('.system-case[data-href]').forEach((card) => {
  card.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (target?.closest('a, button')) return;
    const href = card.dataset.href;
    if (href) window.location.href = href;
  });
});

/* Highlight active capability nodes as the board scrolls */
if ('IntersectionObserver' in window) {
  const heroNodes = Array.from(document.querySelectorAll('.cap-node'));
  const capObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const type = entry.target.dataset.capability;
        heroNodes.forEach((node) => {
          const match =
            node.dataset.node === type ||
            (type === 'distributed' && node.dataset.node === 'backend');
          node.classList.toggle('is-synced', match);
        });
      });
    },
    { threshold: 0.55 }
  );

  document.querySelectorAll('.capability[data-capability]').forEach((card) => capObserver.observe(card));
}

setLanguage('es');
