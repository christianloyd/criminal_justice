/**
 * modal.js — Shared, reusable modal system.
 *
 * Usage:
 *   openModal({ icon, iconClass, title, tag, body })
 *   closeModal()
 *
 * Pages populate modals by calling openModal() from card click handlers.
 */

const Modal = (() => {
    let lastFocused = null;
    let initialized = false;

    function init() {
        if (initialized) return;
        initialized = true;

        // Create the modal markup once
        const html = `
      <div id="modal-backdrop" class="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-200" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div id="modal-panel" class="relative bg-navy-panel border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl transform scale-95 opacity-0 transition-all duration-250">
          <!-- Header -->
          <div id="modal-header" class="flex items-start gap-4 p-6 border-b border-white/10">
            <div id="modal-icon-wrap" class="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 bg-gold/20 text-gold"></div>
            <div class="flex-1 min-w-0">
              <span id="modal-tag" class="inline-block text-[10px] font-semibold uppercase tracking-widest text-gold bg-gold/10 px-2 py-0.5 rounded mb-1"></span>
              <h3 id="modal-title" class="text-parchment font-bold text-xl leading-tight"></h3>
            </div>
            <button id="modal-close-btn" class="ml-2 shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-slate hover:text-parchment hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-gold" aria-label="Close modal">
              <i class="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>
          <!-- Body -->
          <div id="modal-body" class="p-6 space-y-4 text-slate text-sm leading-relaxed"></div>
          <!-- Footer (optional related chips injected here) -->
          <div id="modal-footer" class="px-6 pb-6 flex flex-wrap gap-2"></div>
        </div>
      </div>`;

        document.body.insertAdjacentHTML('beforeend', html);

        const backdrop = document.getElementById('modal-backdrop');
        const closeBtn = document.getElementById('modal-close-btn');

        closeBtn.addEventListener('click', closeModal);
        backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'Tab') trapFocus(e);
        });
    }

    function openModal({ icon = 'fa-scale-balanced', iconClass = '', title = '', tag = '', body = '', related = [] }) {
        init();
        lastFocused = document.activeElement;

        document.getElementById('modal-icon-wrap').innerHTML = `<i class="fa-solid ${icon}"></i>`;
        if (iconClass) document.getElementById('modal-icon-wrap').className = `w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 ${iconClass}`;
        document.getElementById('modal-tag').textContent = tag;
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-body').innerHTML = body;

        // Related chips
        const footer = document.getElementById('modal-footer');
        footer.innerHTML = '';
        if (related && related.length) {
            related.forEach(r => {
                const chip = document.createElement('button');
                chip.className = 'text-xs px-3 py-1 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-colors';
                chip.textContent = r.label;
                chip.addEventListener('click', () => r.action && r.action());
                footer.appendChild(chip);
            });
        }

        const backdrop = document.getElementById('modal-backdrop');
        const panel = document.getElementById('modal-panel');

        backdrop.classList.remove('pointer-events-none');
        document.body.style.overflow = 'hidden';

        requestAnimationFrame(() => {
            backdrop.classList.remove('opacity-0');
            panel.classList.remove('scale-95', 'opacity-0');
            panel.classList.add('scale-100', 'opacity-100');
        });

        // Focus first focusable inside modal
        setTimeout(() => {
            const focusable = panel.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (focusable.length) focusable[0].focus();
        }, 50);
    }

    function closeModal() {
        const backdrop = document.getElementById('modal-backdrop');
        if (!backdrop || backdrop.classList.contains('opacity-0')) return;
        const panel = document.getElementById('modal-panel');

        backdrop.classList.add('opacity-0');
        panel.classList.remove('scale-100', 'opacity-100');
        panel.classList.add('scale-95', 'opacity-0');

        setTimeout(() => {
            backdrop.classList.add('pointer-events-none');
            document.body.style.overflow = '';
            if (lastFocused) lastFocused.focus();
        }, 250);
    }

    function trapFocus(e) {
        const panel = document.getElementById('modal-panel');
        if (!panel) return;
        const focusable = Array.from(panel.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
            e.preventDefault();
            (e.shiftKey ? last : first).focus();
        }
    }

    return { open: openModal, close: closeModal };
})();

window.Modal = Modal;
