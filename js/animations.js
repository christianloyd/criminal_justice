/**
 * animations.js — Scroll-reveal using IntersectionObserver.
 * Elements with class .reveal will fade + slide up when they enter the viewport.
 * Add data-delay="200" (ms) for staggered sibling animations.
 */
(function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const delay = el.dataset.delay || 0;
                setTimeout(() => {
                    el.classList.add('revealed');
                }, Number(delay));
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    function initReveal() {
        document.querySelectorAll('.reveal').forEach((el, i) => {
            // Auto-stagger siblings if no explicit delay
            if (!el.dataset.delay) {
                const parent = el.parentElement;
                const siblings = Array.from(parent.querySelectorAll('.reveal'));
                const idx = siblings.indexOf(el);
                el.dataset.delay = idx * 100;
            }
            observer.observe(el);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initReveal);
    } else {
        initReveal();
    }

    // Re-run for dynamically added reveals
    window.initReveal = initReveal;
})();
