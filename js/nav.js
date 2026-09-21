/**
 * nav.js — Injects the shared nav bar (partials/nav.html) into every page,
 * sets the active-page state, and handles sticky nav & hamburger.
 */
(async function () {
  const placeholder = document.getElementById('nav-placeholder');
  if (!placeholder) return;

  const base = getBase();
  try {
    const res = await fetch(base + 'partials/nav.html');
    placeholder.innerHTML = await res.text();
  } catch (e) {
    console.warn('Nav partial failed to load', e);
    return;
  }

  setActiveLink();
  initSticky();
  initHamburger();

  function getBase() {
    // Detect depth — from /subdir/page.html, we need '../' to reach root
    const path = window.location.pathname.replace(/\\/g, '/');
    const depth = (path.match(/\//g) || []).length - 1;
    return depth > 0 ? '../'.repeat(depth) : './';
  }

  function setActiveLink() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('#nav-links .nav-link, #mobile-nav-links .mobile-nav-link');
    links.forEach(link => {
      const href = link.getAttribute('href').split('/').pop();
      if (href === page) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  function initSticky() {
    const nav = document.getElementById('main-nav');
    if (!nav) return;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        nav.classList.add('nav-scrolled');
      } else {
        nav.classList.remove('nav-scrolled');
      }
    }, { passive: true });
  }

  function initHamburger() {
    const btn = document.getElementById('hamburger-btn');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('hidden') === false;
      btn.setAttribute('aria-expanded', String(open));
      btn.querySelectorAll('.ham-line').forEach((l, i) => {
        l.style.transform = open
          ? (i === 0 ? 'rotate(45deg) translate(5px, 5px)' : i === 2 ? 'rotate(-45deg) translate(5px, -5px)' : 'scaleX(0)')
          : '';
      });
    });

    // Close on outside click
    document.addEventListener('click', e => {
      if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
        btn.querySelectorAll('.ham-line').forEach(l => l.style.transform = '');
      }
    });
  }
})();
