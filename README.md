# Philippine Criminal Justice System 🏛️

An interactive, multi-page educational website covering the Philippine Criminal Justice System (PCJS) — built with HTML5, Tailwind CSS, Font Awesome, and Vanilla JavaScript.

## 🌐 Live Pages

| Page | Description |
|---|---|
| `index.html` | Homepage — overview, goals, and site navigation |
| `history.html` | Historical development across 6 eras |
| `constitution.html` | Constitutional provisions & Bill of Rights |
| `structure.html` | The Justice Triangle (3 pillars) |
| `laws.html` | Key criminal laws with search & filter |
| `enforcement.html` | Law enforcement agencies & functions |
| `courts.html` | Court hierarchy & 11-step trial process |
| `corrections.html` | Jails, prisons, probation & rehabilitation |
| `challenges.html` | Systemic challenges & reform proposals |
| `references.html` | Legal & academic source references |
| `contact.html` | About the project & contact form |

## ✨ Features

- **Modal-driven content** — every card opens a detailed accessible modal
- **11-step trial stepper** — interactive horizontal timeline (desktop) / modal list (mobile)
- **Laws filter** — search + 7-category filter across all criminal laws
- **Scroll-reveal animations** — staggered IntersectionObserver animations
- **Shared navigation** — single-source-of-truth nav injected across all pages
- **Responsive design** — mobile hamburger menu, fluid grids
- **Accessible** — focus trapping, keyboard navigation, ARIA labels, `Esc` to close modals

## 🎨 Design System

| Role | Color | Usage |
|---|---|---|
| Base (60%) | `#0F1B33` Deep Judicial Navy | Background |
| Secondary (30%) | `#F7F6F2` Parchment | Text, headings |
| Accent (10%) | `#C9A227` Gavel Gold | Icons, CTAs, highlights |
| Alert | `#8B1E23` Deep Red | Challenges section |

Font: **Poppins** (Google Fonts)

## 📁 Project Structure

```
/
├── index.html … contact.html   # 11 HTML pages
├── styles.css                  # Shared design system
├── README.md
├── partials/
│   ├── nav.html                # Shared navigation bar
│   └── footer.html             # Shared footer
├── js/
│   ├── nav.js                  # Nav injection, sticky, hamburger
│   ├── footer.js               # Footer injection
│   ├── modal.js                # Reusable modal system
│   ├── animations.js           # Scroll-reveal (IntersectionObserver)
│   ├── laws.js                 # Filter + search logic
│   └── courts.js               # Trial stepper logic
└── data/
    ├── history.js              # 6 historical eras
    ├── constitution.js         # Provisions + Bill of Rights
    ├── laws.js                 # Foundational + specialized laws
    ├── agencies.js             # Law enforcement agencies
    ├── courts.js               # Court levels + trial steps + personnel
    ├── corrections.js          # Institutions + community + rehab
    └── challenges.js           # 8 systemic challenges
```

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/christianloyd/criminal_justice.git
   cd criminal_justice
   ```

2. Open with a local server (recommended for nav/footer partial loading):
   - **VS Code:** Install the *Live Server* extension → right-click `index.html` → *Open with Live Server*
   - **Python:** `python -m http.server 8080` then visit `http://localhost:8080`
   - **Node:** `npx serve .`

3. Or simply double-click `index.html` to open in your browser.

> **Note:** The navigation and footer are loaded via `fetch()` from `/partials/`. For the best experience, use a local HTTP server. Opening directly from `file://` may block fetch requests in some browsers (Chrome). You can also start Chrome with `--allow-file-access-from-files`.

## ⚖️ Disclaimer

This website is for **educational purposes only**. It does not constitute legal advice. All laws and procedures described are general summaries. Consult a licensed Philippine attorney for specific legal guidance.

## 📚 Key Legal Sources

- 1987 Philippine Constitution
- Revised Penal Code (Act 3815, 1930)
- Republic Act 6975 (PNP Law)
- Republic Act 9165 (Comprehensive Dangerous Drugs Act)
- Republic Act 9344 (Juvenile Justice & Welfare Act)
- Republic Act 10175 (Cybercrime Prevention Act)
- Rules of Court (AM 19-08-15-SC)

---

*Built as an educational resource on the Philippine Criminal Justice System.*
