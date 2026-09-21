/**
 * laws.js — Filter and search logic for laws.html
 */
(function () {
    function renderLawCard(item, container) {
        const card = document.createElement('div');
        card.className = 'card reveal';
        card.dataset.cat = item.category;
        card.dataset.search = (item.title + ' ' + item.ra + ' ' + item.year + ' ' + item.teaser).toLowerCase();
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.innerHTML = `
      <div style="display:flex;gap:1rem;align-items:flex-start;">
        <div class="icon-chip"><i class="fa-solid ${item.icon}"></i></div>
        <div style="flex:1;">
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.375rem;">
            <span class="badge badge-gold">${item.ra}</span>
            <span class="badge badge-slate">${item.year}</span>
          </div>
          <h3 style="color:var(--parchment);font-weight:600;font-size:0.9375rem;margin-bottom:0.375rem;">${item.title}</h3>
          <p style="font-size:0.8125rem;line-height:1.5;">${item.teaser}</p>
        </div>
      </div>`;
        card.addEventListener('click', () => {
            const body = item.body + (item.penalty
                ? `<div class="highlight-box mt-3"><p class="text-xs font-semibold" style="color:var(--gold);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.25rem;">Enforcing Agency</p><p style="font-size:0.8125rem;">${item.agency || 'N/A'}</p></div>`
                : '');
            Modal.open({ icon: item.icon, title: item.title, tag: item.tag, body });
        });
        card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); } });
        container.appendChild(card);
        return card;
    }

    document.addEventListener('DOMContentLoaded', () => {
        const fGrid = document.getElementById('foundational-grid');
        const sGrid = document.getElementById('specialized-grid');

        lawsData.foundational.forEach(l => renderLawCard(l, fGrid));
        lawsData.specialized.forEach(l => renderLawCard(l, sGrid));

        if (window.initReveal) initReveal();

        // Filter logic
        let currentCat = 'all';
        let currentSearch = '';

        function applyFilter() {
            const cards = sGrid.querySelectorAll('.card');
            let visible = 0;
            cards.forEach(card => {
                const catMatch = currentCat === 'all' || card.dataset.cat === currentCat;
                const searchMatch = !currentSearch || card.dataset.search.includes(currentSearch);
                const show = catMatch && searchMatch;
                card.style.display = show ? '' : 'none';
                if (show) visible++;
            });
            document.getElementById('no-results').style.display = visible === 0 ? 'block' : 'none';
        }

        document.getElementById('filter-btns').addEventListener('click', e => {
            const btn = e.target.closest('.filter-btn');
            if (!btn) return;
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCat = btn.dataset.cat;
            applyFilter();
        });

        document.getElementById('law-search').addEventListener('input', e => {
            currentSearch = e.target.value.trim().toLowerCase();
            applyFilter();
        });
    });
})();
