const languageButton = document.getElementById('langToggle');
const footerYear = document.getElementById('footerYear');

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

  document.title =
    language === 'es'
      ? 'Enzo Asplanatti | Backend & Full Stack'
      : 'Enzo Asplanatti | Backend & Full Stack Engineer';
}

if (languageButton) {
  languageButton.addEventListener('click', () => {
    setLanguage(currentLanguage === 'es' ? 'en' : 'es');
  });
}

if (footerYear) {
  footerYear.textContent = new Date().getFullYear().toString();
}

const revealElements = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
    {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.08
    }
  );

  revealElements.forEach((element) => observer.observe(element));
}

setLanguage('es');
