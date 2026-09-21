/**
 * footer.js — Injects the shared footer (partials/footer.html) into every page.
 */
(async function () {
    const placeholder = document.getElementById('footer-placeholder');
    if (!placeholder) return;

    const base = getBase();
    try {
        const res = await fetch(base + 'partials/footer.html');
        placeholder.innerHTML = await res.text();
    } catch (e) {
        console.warn('Footer partial failed to load', e);
    }

    function getBase() {
        const path = window.location.pathname.replace(/\\/g, '/');
        const depth = (path.match(/\//g) || []).length - 1;
        return depth > 0 ? '../'.repeat(depth) : './';
    }
})();
