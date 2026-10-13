(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('siteNav');
  if (toggle && nav) {
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
      nav.classList.remove('open');
    };
    toggle.addEventListener('click', () => {
      const opening = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(opening));
      toggle.setAttribute('aria-label', opening ? 'Close navigation' : 'Open navigation');
      nav.classList.toggle('open', opening);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(item => observer.observe(item));
  } else {
    reveals.forEach(item => item.classList.add('is-visible'));
  }

  // Links go directly to the APK file asset. No release page or extra tab is requested.
  document.querySelectorAll('[data-download]').forEach(link => {
    link.setAttribute('aria-label', 'Download the official NyumbaPay Android APK');
  });

  // Make the FAQ disclosure indicator follow its open/closed state.
  document.querySelectorAll('.faq-list details').forEach(details => {
    const summary = details.querySelector('summary span');
    if (!summary) return;
    const update = () => { summary.textContent = details.open ? '−' : '＋'; };
    details.addEventListener('toggle', update);
    update();
  });
})();
