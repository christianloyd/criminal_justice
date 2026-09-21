# Product Requirements Document (PRD)
## Philippine Criminal Justice System — Interactive Educational Website

**Version:** 1.0
**Prepared for:** Web development / capstone-style build
**Reference benchmark:** philippine_criminal_justice_system (GitHub Pages, single-page long-scroll site)

---

## 1. Project Overview

### 1.1 Purpose
Build a **multi-page**, interactive educational website that explains the Philippine Criminal Justice System (PCJS) in depth. Unlike the reference site (a single long-scroll page), this build gives each major topic its **own HTML file**, tied together by a shared navigation bar. The site builds on the content structure of the reference site but goes further: every informational "card" becomes a **clickable trigger** that opens a **modal** with expanded, detailed content (definitions, legal citations, statistics, examples), rather than showing everything inline. The goal is a resource that feels like a legal-education micro-app/mini-site, not a single static brochure page.

### 1.2 Problem Statement
The reference site is informative but flat — all content is visible at once in short blurbs, which limits depth (a card can only hold 1–2 sentences before the page becomes overwhelming). There's no way to progressively disclose more detail, no visual identity tied to the subject matter (law/justice), and no interactivity beyond scrolling.

### 1.3 Goals
- Present the same core knowledge domains (history, constitution, structure, laws, enforcement, courts, corrections, challenges) with **significantly more depth per topic**, made possible by the click-to-modal pattern.
- Make the UI feel purpose-built for a justice/legal topic through color, iconography, and motion — not a generic Bootstrap-style template.
- Keep the whole thing a static, dependency-light front-end build (no backend) so it can be hosted the same way as the reference (GitHub Pages or similar).

### 1.4 Non-Goals
- No user accounts, comments, or backend/database.
- No real-time legal database integration (RA numbers/content are static, hardcoded, and should be periodically reviewed for accuracy, not live-fetched).
- Not a substitute for legal advice — site should carry an educational-use disclaimer (as the reference does).

### 1.5 Target Audience
- College students (IT, Criminology, Political Science) using it as a study reference.
- Instructors wanting a visual teaching aid.
- General public wanting a plain-language overview of PCJS.

---

## 2. Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Markup | HTML5, **multi-page** — one `.html` file per top-level nav item, not one long scroll | See §3.6 for the full file map |
| Styling | Tailwind CSS (CDN or CLI build) | Utility-first; custom theme extension for the color palette and font; one shared `styles.css` (or Tailwind config) reused by every page |
| Typography | **Poppins** (Google Fonts, weights 300/400/500/600/700/800) | Headings heavier weight (600–800), body 400 |
| Icons | **Font Awesome** (CDN, solid + regular sets) | `fa-scale-balanced`, `fa-gavel`, `fa-handcuffs`, `fa-building-columns`, `fa-shield-halved`, `fa-file-contract`, `fa-people-group`, etc. |
| Interactivity | Vanilla JavaScript (ES6 modules), split per concern | `nav.js` (shared nav injection + active-page highlight), `modal.js` (shared modal open/close logic, reused by every page), plus one small page-specific script per page (e.g. `laws.js` for the filter, `courts.js` for the stepper) |
| Animation | CSS transitions/keyframes + **Intersection Observer** for scroll-reveal (AOS-style behavior implemented natively, or AOS library via CDN if preferred) | Fade/slide-up on scroll into view; modal fade+scale-in/out; card hover lift — same animation classes reused across all pages |
| Data | JS data files (`data/laws.js`, `data/courts.js`, `data/agencies.js`, `data/history.js`, `data/challenges.js`, etc.) — one per topic, matching the page split | Keeps content separate from markup; each page only loads the data file(s) it needs instead of one giant shared file |
| Shared nav/footer | A single `nav.js` (and optional `footer.js`) injected into every page via JS (e.g. `fetch('partials/nav.html')` or a template string), so the nav bar/footer markup is written **once** and reused, not duplicated by hand in every file | Keeps the "each page is its own file" approach from turning into copy-pasted nav code that drifts out of sync |
| Hosting | Static hosting (GitHub Pages) | No build step required if using Tailwind CDN; optional Tailwind CLI for production purge/minify; multi-page static sites deploy the same way as single-page ones |

---

## 3. Design System

### 3.1 Color Rule — 60/30/10, tied to the justice theme
The palette should read as "law/justice" (authority, trust, formality) while staying accessible (WCAG AA contrast minimum).

| Role | % Usage | Color Direction | Suggested Hex | Where it's used |
|---|---|---|---|---|
| **Dominant (60%)** | Backgrounds, large surfaces | Deep Judicial Navy / near-black slate | `#0F1B33` (dark navy) for dark sections, `#F7F6F2` (parchment off-white) for light sections | Page background, section backgrounds, nav bar, modal backdrop |
| **Secondary (30%)** | Cards, panels, secondary text, borders | Neutral slate / muted blue-gray | `#3B4A6B` (panel navy) or `#E7E5DE` (card parchment) | Card surfaces, table rows, section dividers, body text color |
| **Accent (10%)** | CTAs, active states, icons, highlights, links | Gavel Gold / Justice Bronze, with a Philippine-flag-nod deep red for warnings/challenges section | `#C9A227` (gold), `#8B1E23` (deep red, used sparingly for the "Challenges" section only) | Buttons, active nav underline, icon backgrounds, modal "close"/accent border, hover states |

- Gold (`#C9A227`) = authority, integrity, achievement — used for primary interactive accents (buttons, active states, icon chips).
- Deep red is **reserved only** for the Challenges & Issues section (overcrowding, recidivism, wrongful convictions) to visually flag "problem" content without clashing with the rest of the site.
- Light and dark section bands should alternate (parchment ↔ navy) to break up a long single-page scroll, similar in rhythm to the reference site's alternating backgrounds, but tied intentionally to the 60/30/10 split rather than arbitrary section coloring.

### 3.2 Typography
- Font: Poppins throughout.
- Hierarchy:
  - H1 (hero title): 700–800, ~3–4rem
  - H2 (section titles): 700, ~2–2.5rem, uppercase or small-caps tracking optional
  - H3 (card titles / modal titles): 600, ~1.25rem
  - Body: 400, ~1rem, line-height 1.6 for legal-text readability
  - Small/meta (citations, RA numbers): 500, ~0.8rem, gold accent color

### 3.3 Iconography (Font Awesome)
Each major domain gets a consistent icon used both on its card and inside its modal header:
- Overview → `fa-scale-balanced`
- History → `fa-landmark` / `fa-clock-rotate-left`
- Constitution → `fa-book-open`
- Law Enforcement / PNP → `fa-shield-halved`
- NBI → `fa-magnifying-glass`
- BFP → `fa-fire-flame-curved`
- Coast Guard → `fa-anchor`
- Courts → `fa-building-columns` / `fa-gavel`
- Corrections → `fa-lock` / `fa-handcuffs`
- Challenges → `fa-triangle-exclamation`
- References → `fa-bookmark`
- Contact → `fa-envelope`

### 3.4 Animation Requirements
| Interaction | Behavior |
|---|---|
| Section entry (scroll into viewport) | Fade + slide-up (~20px), staggered per card (~80–120ms delay between siblings), using Intersection Observer |
| Card hover | Slight lift (`translateY(-4px)`) + shadow increase + gold border highlight; icon chip scales up slightly |
| Card click → Modal open | Backdrop fades in (opacity 0→1, ~200ms); modal panel scales/slides in (0.95→1 scale + slight translateY), ~250ms ease-out |
| Modal close | Reverse of open; also closable via `Esc` key, backdrop click, and an explicit close (×) button |
| Nav active-page state | Current page's nav link is underlined/colored gold on load (see §3.6) |
| Trial-process stepper | Each of the 11 steps animates its connecting line/progress fill as the user scrolls or clicks through, similar to a timeline progress bar |
| Sticky nav | Nav bar compresses (reduced height/padding) and gains a background/shadow once the user scrolls past the hero |

### 3.5 Modal Component Spec
Every clickable card opens a modal with a consistent structure:
1. **Header:** icon chip (gold on navy or navy on parchment) + title + category tag (e.g., "Republic Act" / "Constitutional Right" / "Court Level")
2. **Body:**
   - Expanded description (2–4 paragraphs, more detailed than the card teaser)
   - "Key Points" bullet list
   - Legal basis / citation block (RA number, article/section, year enacted) styled as a highlighted quote-style box
   - Where relevant: a small stat or example ("Penalty range: 6 months–4 years imprisonment" / "Est. 2024 caseload: ...")
3. **Footer:** close button; optional "Related" chips that jump to another related modal (e.g., RA 9165 modal links to "Dangerous Drugs Board" agency modal)

Accessibility: modal must trap focus, be dismissible by keyboard, and restore scroll position/focus to the triggering card on close.

### 3.6 Navigation Bar Spec
- One shared nav bar component, injected on every page (via `nav.js`), so it only has to be built/edited once.
- Nav items map 1:1 to pages (not anchors): **Home, History, Constitution, Structure, Laws, Enforcement, Courts, Corrections, Challenges, References, Contact.**
- The nav highlights the **current page** (not scroll position, since scroll-spy only makes sense within one page) — done by comparing `window.location.pathname` against each link's `href` on load.
- Sticky on scroll, same gold-accent active-state treatment as originally planned, just page-based instead of scroll-based.
- Mobile: collapses into a hamburger/slide-out menu (same shared component, responsive via Tailwind breakpoints).
- A slim footer (site name, disclaimer, quick links) is likewise a shared, injected component (`footer.js`) so it isn't hand-duplicated across 11 files either.

### 3.7 File Map
```
/
├── index.html            → Home / Overview (hero, key characteristics, primary goals)
├── history.html          → Historical Development
├── constitution.html     → Constitutional Framework
├── structure.html        → System Structure / Justice Triangle
├── laws.html             → Key Criminal Laws (+ filter)
├── enforcement.html      → Law Enforcement Agencies
├── courts.html           → Judicial System (+ 11-step trial stepper)
├── corrections.html      → Corrections System
├── challenges.html       → Challenges & Issues
├── references.html       → References & Sources
├── contact.html          → Contact
├── /partials/
│   ├── nav.html          → shared nav markup (injected by nav.js)
│   └── footer.html       → shared footer markup (injected by footer.js)
├── /js/
│   ├── nav.js            → injects nav.html, sets active-page state
│   ├── footer.js         → injects footer.html
│   ├── modal.js          → shared modal open/close/focus-trap logic (used by every page)
│   ├── animations.js     → shared Intersection Observer scroll-reveal setup
│   ├── laws.js           → laws.html-only: filter/search logic
│   └── courts.js         → courts.html-only: trial-process stepper logic
├── /data/
│   ├── history.js
│   ├── constitution.js
│   ├── laws.js
│   ├── agencies.js
│   ├── courts.js
│   ├── corrections.js
│   └── challenges.js
└── /assets/               → any local images/illustrations if needed
```
Each page loads: shared CSS → `nav.js` + `footer.js` + `modal.js` + `animations.js` → its own `data/*.js` → its own page-specific script (if any). This is what "every button has its own file" means in practice — each nav button routes to a real, separate HTML file with its own data/script, rather than the whole site being one file with anchor-jumps.

---

## 4. Site Architecture & Content Specification

Same overall narrative arc as the reference site, but each topic now lives on **its own page** (see §3.7 file map) instead of a scroll section, and each is expanded with more granular, clickable content. Below is the page-by-page content plan — this is the actual detail to populate each page's `data/*.js` and modals with.

### 4.1 Hero / Overview
- Title, subtitle, and a short definition (same as reference: integrated institutions/procedures under the 1987 Constitution).
- 4 **clickable** "Key Characteristic" cards (Civil Law System, Democratic Framework, Mixed Jurisdiction, Accessible Justice) — each opens a modal explaining *why* that characteristic matters, with 1 concrete example each (e.g., "Civil Law System" modal explains Spanish-code origins and cites the Revised Penal Code's Spanish Codigo Penal roots).
- 4 **clickable** "Primary Goals" cards (Public Safety, Justice, Community Protection, Rehabilitation) — modal expands each into supporting sub-goals and which of the three components (enforcement/judiciary/corrections) is primarily responsible.

### 4.2 Historical Development
Expand each era card's modal with: political context, key legal instruments passed in that era, and a notable event.
| Era | Card teaser | Modal detail to include |
|---|---|---|
| Pre-Colonial (before 1565) | Datu-administered customary law | Barangay-based adjudication, "Kalantiaw" code discussion (with appropriate historical caveats), restorative/communal justice concepts |
| Spanish Colonial (1565–1898) | Spanish legal codes, Church influence | Introduction of Codigo Penal (1870s), civil law tradition roots, inquisitorial procedure influence |
| American Colonial (1898–1946) | Common law elements, modern police | Establishment of the Insular Constabulary/Philippine Constabulary, 1935 Constitution, Commonwealth-era codification |
| Post-Independence (1946–1972) | Independent judiciary expansion | 1935 Constitution continuation, RPC amendments, growth of DOJ/NBI |
| Martial Law (1972–1981) | 1973 Constitution, expanded executive power | PDs issued by decree, human-rights concerns (arbitrary detention, military tribunals), suspension of habeas corpus contexts |
| Modern Democratic (1987–present) | 1987 Constitution restoration | Bill of Rights strengthening, EDSA-post reforms, RA 6975 (PNP creation), ongoing modernization acts |

### 4.3 Constitutional Framework
- 3 clickable provision cards (Judiciary/Art. VIII, Bill of Rights/Art. III, Police Power/Art. XII) — modal gives full text summary + 1 illustrative case reference for each (kept generic/anonymized, not real-case citations that could be inaccurate).
- **Rights table becomes 6 clickable rows** (Due Process, Search & Seizure protection, Self-Incrimination, Right to Counsel, Speedy Trial, Presumption of Innocence). Clicking a row opens a modal with: full section text summary, a plain-language explanation, and a "what happens if this right is violated" note (e.g., exclusionary rule for illegal searches).

### 4.4 System Structure ("Justice Triangle")
- Interactive diagram/graphic showing Law Enforcement ⇄ Judiciary ⇄ Corrections as a triangle; each vertex is clickable and jumps/scrolls to (or opens a summary modal for) that section.
- Each of the 3 pillar cards (as in reference) expands in its modal into its full sub-agency list with one-line descriptions of each.

### 4.5 Key Criminal Laws
- Foundational laws (RPC, Rules of Court, 1987 Constitution) as 3 clickable cards.
- **Specialized laws table → 8 clickable law cards** (grid instead of table, or a filterable table where each row opens a modal). Each modal includes:
  - Full official title
  - RA number & year enacted
  - Summary of key provisions
  - Penalty range (general, not case-specific advice)
  - Enforcing/implementing agency
  
  Laws to cover in detail (expand beyond the reference's 8 with a couple more if desired): RA 9208 (Anti-Trafficking), RA 9165 (Dangerous Drugs), RA 10627 (Anti-Bullying), RA 10175 (Cybercrime), RA 8049 (Anti-Hazing), RA 9262 (VAWC), RA 11479 (Anti-Terrorism), RA 3019 & RA 6713 (Anti-Corruption). Optional additions: RA 9344 (Juvenile Justice), RA 10951 (RPC fine/penalty adjustment), RA 10592 (Good Conduct Time Allowance — also referenced in Corrections).
- Include a simple **search/filter bar** above the laws grid (filter by keyword or category: Drugs, Cybercrime, Gender-based violence, Corruption, Terrorism, Trafficking) — a step beyond the reference site's static table.

### 4.6 Law Enforcement Agencies
- PNP deep-dive card opens a modal with the **full organizational chart** (NAPOLCOM → PNP → Regional/Provincial → City/Municipal → Barangay Public Safety) as a simple nested list or mini-diagram, plus its specialized units (CIDG, DIDM, AIDG, HPG, TMG) and specialized services (Anti-Cybercrime Group, WCPC, Aviation Group, Logistics Group) each with a one-line function.
- Other agencies (BFP, NBI, Coast Guard) each get their own clickable card + modal with: mandate, founding legal basis, jurisdiction scope, and 2–3 example crime types they handle.
- Functions table (Crime Prevention, Investigation, Apprehension, Evidence Handling, Community Relations) → 5 clickable function cards, each modal explaining the legal standard involved (e.g., "Apprehension" modal explains warrant requirements and in flagrante delicto rule under Rule 113).

### 4.7 Judicial System
- Court hierarchy: 6 clickable cards (Supreme Court, Court of Appeals, RTC, MTC in Metro Manila, MTC outside Metro Manila, Specialized Courts). Each modal: jurisdiction, composition (number of justices/judges), appeal path in/out of that court, and example case types.
- **Criminal Trial Process — 11-step interactive stepper** (this should be the site's signature interactive element, more detailed than the reference):
  1. Investigation — police investigation & evidence gathering
  2. Arrest & Custody — warrant vs. in flagrante delicto; custody time limits
  3. Preliminary Investigation — prosecutor's probable-cause determination; timelines
  4. Filing of Information — contents of an Information; venue rules
  5. Initial Appearance — rights advisement, bail options
  6. Plea Negotiation & Arraignment — plea types, plea-bargaining framework
  7. Pre-Trial Conference — stipulations, marking of evidence
  8. Trial — order of trial, burden of proof, right to confrontation
  9. Decision — required contents of a judgment (facts, law, dispositive portion)
  10. Sentencing — RPC graduation of penalties, mitigating/aggravating circumstances
  11. Appeals — periods, modes of appeal (notice of appeal vs. petition for review), further review to the Supreme Court

  Each step, when clicked, opens a modal with a deeper explanation, the applicable Rule of Court reference, and estimated typical timelines (clearly labeled as general/typical, not guaranteed).
- Key court personnel (Judges, Prosecutors, Defense Attorneys/PAO, Court Officials) as 4 clickable cards with expanded role descriptions and qualification requirements.

### 4.8 Corrections System
- Jails vs. Prisons distinction as 2 clickable cards (BJMP vs. BuCor jurisdiction split, the 3-year sentence threshold rule, and major facilities e.g. New Bilibid Prison).
- Community-based corrections: Probation, Parole, Community Service, Reintegration Programs — 4 clickable cards, each modal detailing eligibility criteria and the supervising agency (PPA).
- Rehabilitation programs table → 5 clickable program cards (Basic Education, Vocational Training, Drug Rehabilitation, Mental Health Services, Moral & Spiritual Formation), each modal listing example activities and intended outcomes.
- Corrections challenges list retained as a supporting bullet list inside the section's intro (not a full modal set, to avoid redundancy with §4.9).

### 4.9 Challenges & Issues (accent color: deep red)
- 8 clickable challenge cards (Overcrowding, Recidivism, Case Backlogs, Judicial Delays, Inequitable Justice, Wrongful Convictions, Drug War Concerns, Inadequate Resources). Each modal should include:
  - Explanation of the issue
  - Root causes
  - Illustrative (clearly labeled as general/typical, not sourced to a specific year unless verified) statistic or range, matching the reference's "200–600% capacity" style framing
  - Reform proposals/ongoing initiatives, where applicable
- System-wide issues list retained as a supporting bullet list.

### 4.10 References & Sources
- Keep as a categorized, non-modal reference list (Constitutional Documents, Primary Laws, Enforcement Regulations, Judiciary, Corrections, Studies, Human Rights) — this section is a bibliography, not a candidate for the card/modal pattern.

### 4.11 Conclusion
- Summary text + 4 recap cards (Constitutional Foundation, Three-Part System, Current Challenges, Reform Efforts) — kept lightweight, non-modal, to close the page on a calmer visual note.

### 4.12 Contact
- Team member list retained as-is (grid of names/emails), styled with the same design system.

---

## 5. Functional Requirements Summary

| # | Requirement |
|---|---|
| FR1 | Every card defined in §4 must be keyboard- and mouse-clickable and open its corresponding modal. |
| FR2 | Modal content on each page is data-driven from that page's own `data/*.js` file — no hardcoded duplicate content in HTML, and no page pulling in another page's data unnecessarily. |
| FR3 | Sticky nav, shared across all pages via `nav.js`, highlighting whichever page is currently open. |
| FR3a | Nav and footer markup exist in exactly one place each (`partials/nav.html`, `partials/footer.html`) and are injected into every page — never hand-copied per file. |
| FR4 | Scroll-triggered reveal animations for all card grids and section headers. |
| FR5 | Laws section includes a working keyword/category filter. |
| FR6 | Trial-process section renders as a visually connected step sequence (progress line/timeline), each step clickable. |
| FR7 | Fully responsive: 1-column card stacks on mobile, 2–3 columns on tablet/desktop. |
| FR8 | Modal is accessible: focus-trapped, `Esc`-closable, ARIA roles (`role="dialog"`, `aria-modal="true"`). |
| FR9 | Educational-use disclaimer retained in the footer, matching the reference site's intent. |

## 6. Non-Functional Requirements
- **Performance:** Tailwind should be purged/minified for production; Font Awesome loaded via subset or CDN with only needed icon styles; total initial load should stay lightweight since there's no backend.
- **Accessibility:** WCAG AA color contrast for text on both navy and parchment backgrounds; all interactive elements reachable by keyboard.
- **Browser support:** Latest evergreen browsers (Chrome, Edge, Firefox, Safari).
- **Maintainability:** Content changes (adding a new law, updating a statistic) should only require editing `data.js`, not the HTML/JS logic.

## 7. Success Criteria
- Every section from the reference site is represented, with materially more depth accessible via modals (not just longer inline text).
- Color usage is demonstrably split roughly 60/30/10 across dominant/secondary/accent roles.
- Site is navigable and legible on mobile without horizontal scrolling.
- No broken modal state (e.g., can always close and reopen any card without needing a page refresh).

## 8. Open Questions / Decisions Needed Before Build
- Should the "Trial Process" stepper be a horizontal timeline (desktop) that collapses to a vertical list (mobile), or vertical everywhere?
- Should the laws section's filter be a simple JS `.includes()` text filter, or category-tag buttons (Drugs / Cybercrime / Gender-based violence / etc.)?
- Do you want a dark-mode toggle, or is the navy/parchment alternating-section approach sufficient as "the" visual identity?
- Confirm whether real citations/statistics need sourcing footnotes inside modals, or general/illustrative figures (as the reference site uses) are acceptable.

---

*End of PRD. Once you confirm the open questions in §8 and any edits to the content plan in §4, this can be broken down into a build task list (data schema → static markup/sections → Tailwind theme config → modal component → animation/scroll-spy logic → filter logic → responsive QA).*
