/**
 * courts.js — Stepper logic for courts.html
 */
(function () {
    function renderCard(item, container) {
        const card = document.createElement('div');
        card.className = 'card reveal'; card.setAttribute('tabindex', '0'); card.setAttribute('role', 'button');
        card.innerHTML = `<div style="display:flex;gap:1rem;align-items:flex-start;"><div class="icon-chip"><i class="fa-solid ${item.icon}"></i></div><div><p class="badge badge-gold" style="margin-bottom:0.375rem;">${item.tag}</p><h3 style="color:var(--parchment);font-weight:600;font-size:1rem;margin-bottom:0.375rem;">${item.title}</h3><p style="font-size:0.85rem;line-height:1.5;">${item.teaser}</p></div></div>`;
        card.addEventListener('click', () => Modal.open({ icon: item.icon, title: item.title, tag: item.tag, body: item.body }));
        card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); } });
        container.appendChild(card);
    }

    document.addEventListener('DOMContentLoaded', () => {
        // Court levels
        const cg = document.getElementById('courts-grid');
        if (cg) courtsData.levels.forEach(l => renderCard(l, cg));

        // Personnel
        const pg = document.getElementById('personnel-grid');
        if (pg) courtsData.personnel.forEach(p => renderCard(p, pg));

        // --- Desktop Stepper ---
        const track = document.getElementById('stepper-track');
        const progress = document.getElementById('stepper-progress');
        const detail = document.getElementById('step-detail');
        const steps = courtsData.trialSteps;
        let activeIndex = -1;

        if (track && steps) {
            steps.forEach((step, i) => {
                const item = document.createElement('div');
                item.className = 'step-item';
                item.setAttribute('tabindex', '0');
                item.setAttribute('role', 'button');
                item.setAttribute('aria-label', 'Step ' + (i + 1) + ': ' + step.label);
                item.innerHTML = `
          <div class="step-circle">${i + 1}</div>
          <span class="step-label">${step.label}</span>`;

                item.addEventListener('click', () => activateStep(i));
                item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activateStep(i); } });
                track.appendChild(item);
            });

            function activateStep(i) {
                activeIndex = i;
                const allItems = track.querySelectorAll('.step-item');
                allItems.forEach((el, idx) => {
                    el.classList.toggle('active', idx === i);
                    el.classList.toggle('completed', idx < i);
                });

                // Progress bar: spans from first to currently active
                const totalSteps = steps.length;
                const pct = totalSteps > 1 ? (i / (totalSteps - 1)) * 90 : 0;
                if (progress) progress.style.width = pct + '%';

                // Update detail panel
                const s = steps[i];
                detail.innerHTML = `
          <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.75rem;">
            <div class="icon-chip"><i class="fa-solid ${s.icon}"></i></div>
            <div>
              <p class="badge badge-gold" style="margin-bottom:0.25rem;">Step ${i + 1} of ${totalSteps}</p>
              <h3 style="color:var(--parchment);font-weight:700;font-size:1.0625rem;">${s.title}</h3>
            </div>
          </div>
          <div style="font-size:0.875rem;line-height:1.7;color:var(--slate);">${s.body}</div>
          <div style="display:flex;gap:0.75rem;margin-top:1rem;flex-wrap:wrap;">
            ${i > 0 ? `<button onclick="activateStepGlobal(${i - 1})" class="btn-outline" style="font-size:0.75rem;padding:0.375rem 0.875rem;"><i class="fa-solid fa-arrow-left"></i> Previous</button>` : ''}
            ${i < totalSteps - 1 ? `<button onclick="activateStepGlobal(${i + 1})" class="btn-gold" style="font-size:0.75rem;padding:0.375rem 0.875rem;">Next <i class="fa-solid fa-arrow-right"></i></button>` : `<span style="font-size:0.8125rem;color:var(--gold);display:flex;align-items:center;gap:0.375rem;"><i class="fa-solid fa-check-circle"></i> End of Trial Process</span>`}
          </div>`;
            }

            // Expose activateStep globally for inline button handlers
            window.activateStepGlobal = activateStep;

            // Auto-activate step 0 on load
            activateStep(0);
        }

        // --- Mobile Stepper ---
        const mobileContainer = document.getElementById('mobile-steps');
        if (mobileContainer && steps) {
            steps.forEach((step, i) => {
                const item = document.createElement('div');
                item.className = 'step-item-mobile';
                item.setAttribute('tabindex', '0');
                item.setAttribute('role', 'button');
                item.innerHTML = `
          <div class="step-circle-mobile">${i + 1}</div>
          <div>
            <p style="color:var(--parchment);font-weight:600;font-size:0.875rem;margin-bottom:0.2rem;">${step.label}</p>
            <p style="font-size:0.75rem;color:var(--slate);">${step.teaser || ''}</p>
          </div>`;
                item.addEventListener('click', () => Modal.open({ icon: step.icon, title: 'Step ' + (i + 1) + ': ' + step.title, tag: 'Trial Step', body: step.body }));
                item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.click(); } });
                mobileContainer.appendChild(item);
            });
        }

        if (window.initReveal) initReveal();
    });
})();
