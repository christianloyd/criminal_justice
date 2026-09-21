# Product Requirements Document (PRD)
## Theories of Crime Causation — Interactive Learning Website (Criminology 2 / Crim 2)

**Version:** 2.0
**Prepared for:** Web development / capstone-style build
**Course context:** Criminology 2 (Crim 2) — Theories of Crime Causation
**Structural benchmark:** Same interaction pattern as the original reference site (philippine_criminal_justice_system), but rebuilt as a multi-page site on a new subject.

---

## 1. Project Overview

### 1.1 Purpose
Build a **multi-page**, interactive learning website that teaches the major **Theories of Crime Causation** as covered in a Criminology 2 course. Each school of thought/theory family gets its **own HTML file**, tied together by a shared navigation bar. Every theory or theorist "card" is **clickable** and opens a **modal** with an expanded explanation — assumptions, key proponent(s), core concepts, criticisms, and real-world application/example — rather than cramming everything into a short inline blurb.

### 1.2 Problem Statement
Crim 2 theory content is usually delivered as dense textbook chapters or static PowerPoints, grouped loosely (Classical → Positivist → Sociological → Modern) with little visual differentiation between fundamentally different explanatory logics (a theory about individual biology reads the same on a slide as a theory about neighborhood structure). Students need a resource that (a) visually separates the schools of thought, and (b) lets them drill into one theory at a time without losing the overview.

### 1.3 Goals
- Present the full sweep of crime causation theory — Classical, Positivist/Biological, Psychological, Sociological (Structure/Process/Conflict), and Contemporary/Integrated — with real depth per theory via the modal pattern.
- Make each "family" of theory visually distinct (via icon + accent color) so students build a mental map of the field, not just a flat list.
- Include a dedicated **Key Theorists** reference so names (Lombroso, Merton, Sutherland, Hirschi, Becker, Agnew, etc.) are anchored to faces/bios, not just theory labels.
- Keep it a static, dependency-light front-end (no backend), matching the earlier PCJS-build approach so it's just as easy to host (GitHub Pages).

### 1.4 Non-Goals
- Not a full Crim 2 syllabus/course platform — no quizzes, grading, or LMS features (can be a v2 idea, not in this PRD's scope).
- Not a legal or clinical resource — theories are presented as academic criminology content, not as tools for diagnosing individuals.
- No backend/database; all content is static, hardcoded in JS data files.

### 1.5 Target Audience
- Criminology students studying Crim 2 (Theories of Crime Causation) for lecture review/exam prep.
- Crim 2 instructors wanting a visual teaching aid to walk through schools of thought in class.
- General learners curious about why people commit crime, from an academic-criminology lens.

---

## 2. Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Markup | HTML5, multi-page — one `.html` file per top-level nav item | Full file map in §3.7 |
| Styling | Tailwind CSS (CDN or CLI build) | Utility-first; custom theme extension for the color palette and font; one shared config reused by every page |
| Typography | **Poppins** (Google Fonts, weights 300/400/500/600/700/800) | Headings heavier weight (600–800), body 400 |
| Icons | **Font Awesome** (CDN, solid + regular sets) | `fa-brain` (psychological), `fa-dna`/`fa-microscope` (biological), `fa-city`/`fa-people-group` (sociological), `fa-scale-balanced` (classical), `fa-arrows-turn-to-dots` (integrated/contemporary), `fa-user-graduate` (theorists), etc. |
| Interactivity | Vanilla JavaScript (ES6 modules), split per concern | `nav.js` (shared nav injection + active-page highlight), `modal.js` (shared modal open/close, reused everywhere), one small page-specific script per page where needed (e.g. `sociological.js` for the structure/process/conflict tab-switcher) |
| Animation | CSS transitions/keyframes + Intersection Observer for scroll-reveal | Fade/slide-up on scroll into view; modal fade+scale-in/out; card hover lift — reused across all pages via `animations.js` |
| Data | JS data files split per theory family (`data/classical.js`, `data/biological.js`, `data/psychological.js`, `data/sociological.js`, `data/contemporary.js`, `data/theorists.js`) | Each page only loads the data file(s) it needs |
| Shared nav/footer | Single `nav.js` / `footer.js` injecting shared partials into every page | Nav/footer markup written once, not hand-copied |
| Hosting | Static hosting (GitHub Pages) | No build step required if using Tailwind CDN |

---

## 3. Design System

### 3.1 Color Rule — 60/30/10, tied to the academic-criminology theme
Since the subject is now theory/academic rather than the justice system itself, the palette should read as "scholarly criminology" — analytical, credible, a little clinical — while staying warm enough not to feel like a dry textbook.

| Role | % Usage | Color Direction | Suggested Hex | Where it's used |
|---|---|---|---|---|
| **Dominant (60%)** | Backgrounds, large surfaces | Deep academic navy / near-black slate, alternating with a warm parchment/off-white | `#101A33` (dark navy sections), `#F7F6F1` (parchment/light sections) | Page backgrounds, nav bar, modal backdrop |
| **Secondary (30%)** | Cards, panels, secondary text, borders | Neutral slate / muted blue-gray | `#3A4A68` (panel navy) or `#E8E6DE` (card parchment) | Card surfaces, table rows, dividers, body text |
| **Accent (10%)** | CTAs, active states, links, icon chips | Amber/Gold ("Insight Gold") as the primary accent | `#C9A227` | Buttons, active nav state, icon backgrounds, modal accents |

**Per-family icon-chip color coding** (still inside the 10% accent budget, used only for small icon chips/tags — not full backgrounds) so students learn to associate a color with a school of thought at a glance:
| Theory Family | Chip accent (used sparingly) |
|---|---|
| Classical & Neo-Classical | Gold `#C9A227` (default accent) |
| Biological/Trait (Positivist) | Teal `#2E7D6B` |
| Psychological | Indigo `#4C4AA8` |
| Sociological | Burnt orange `#B0651B` |
| Contemporary/Integrated | Deep maroon `#8B1E3F` |

These per-family colors are used only as small tag/chip accents on cards and modal headers (to keep the 60/30/10 balance intact) — the dominant/secondary navy-and-parchment structure stays constant across every page.

### 3.2 Typography
Same as before: Poppins throughout — H1 700–800 (~3–4rem), H2 700 (~2–2.5rem), H3/card titles 600 (~1.25rem), body 400 (~1rem, line-height 1.6), small/meta (theorist names, years) 500 (~0.8rem) in the family's accent color.

### 3.3 Iconography (Font Awesome)
- Overview → `fa-magnifying-glass-chart`
- Classical/Neo-Classical → `fa-scale-balanced`
- Biological/Trait → `fa-dna`
- Psychological → `fa-brain`
- Sociological (overall) → `fa-people-group` / `fa-city` (social structure), `fa-arrows-left-right` (social process), `fa-hand-fist` (social conflict)
- Contemporary/Integrated → `fa-diagram-project`
- Key Theorists → `fa-user-graduate`
- References → `fa-bookmark`
- Contact → `fa-envelope`

### 3.4 Animation Requirements
Same pattern as the earlier PCJS PRD: staggered fade/slide-up card entry on scroll (Intersection Observer), card hover lift + accent border highlight, modal fade+scale open/close (~200–250ms), `Esc`/backdrop-click to close, sticky nav that compresses on scroll.

### 3.5 Modal Component Spec
Every clickable theory or theorist card opens a modal with:
1. **Header:** icon chip (family-accent color) + theory/theorist name + family tag (e.g., "Sociological — Social Process")
2. **Body:**
   - Full explanation (2–4 paragraphs): core assumption about *why* crime happens
   - "Key Concepts" bullet list (e.g., for Strain Theory: legitimate goals, blocked means, modes of adaptation)
   - "Key Proponent(s)" block with name(s) and era
   - "Real-World Application / Example" — a short, generic illustrative scenario (not a real case) showing the theory in action
   - "Criticisms / Limitations" bullet list — important for exam-style critical thinking
3. **Footer:** close button; optional "Related theories" chips (e.g., Strain Theory modal links to General Strain Theory and Subculture Theory)

---

## 4. Site Architecture & Content Specification

### 4.1 Home / Overview (`index.html`)
- Hero: title + short framing definition — what "crime causation" means and why multiple competing theories exist (no single theory fully explains all crime).
- 3 clickable "Schools of Thought" cards: **Classical School** (free will, rational choice, deterrence), **Positivist School** (crime has identifiable causes — biological/psychological/social), **Critical/Conflict School** (crime and law defined by power structures). Each modal expands on the school's core philosophy and how it differs from the others.
- 4 clickable "Why Theories Matter" cards: Crime Prevention Policy, Sentencing & Corrections Philosophy, Rehabilitation Program Design, Understanding Recidivism — each modal ties the abstract theory family to a real policy implication.

### 4.2 Classical & Neo-Classical Theories (`classical.html`)
Clickable cards, one per theory:
| Theory | Card teaser | Modal detail to include |
|---|---|---|
| Classical Theory | Free will, rational calculation of pleasure/pain | Cesare Beccaria's *On Crimes and Punishments* (1764), proportionality of punishment, certainty/swiftness/severity |
| Utilitarianism | "Greatest happiness" principle applied to punishment | Jeremy Bentham's hedonistic calculus, panopticon concept |
| Neo-Classical Theory | Refinement allowing mitigating factors | Age, mental capacity, and circumstance as modifiers to pure free-will assumption; influence on modern sentencing guidelines |
| Deterrence Theory (as an extension) | General vs. specific deterrence | Distinction and modern application (e.g., mandatory minimums debates, generically framed) |

### 4.3 Biological / Trait Theories (`biological.html`)
| Theory | Card teaser | Modal detail |
|---|---|---|
| Lombroso's Atavism | "Born criminal" physical stigmata theory | Cesare Lombroso, *L'Uomo Delinquente* (1876), atavistic traits, historical context and why it's now considered discredited/criticized |
| Constitutional/Body Type Theory | Somatotypes linked to temperament | William Sheldon's endomorph/mesomorph/ectomorph typology, criticisms (correlation vs. causation) |
| Genetic & Twin/Adoption Studies | Heritability of criminal tendency | Twin studies, adoption studies, XYY chromosome theory and why it was largely debunked as deterministic |
| Neurochemical & Brain-based Theories | Brain structure/chemistry links to aggression | Frontal lobe dysfunction, neurotransmitter imbalance (serotonin/dopamine), limitations of purely biological determinism |

### 4.4 Psychological Theories (`psychological.html`)
| Theory | Card teaser | Modal detail |
|---|---|---|
| Psychoanalytic Theory | Unconscious conflicts drive behavior | Sigmund Freud's id/ego/superego, underdeveloped superego link to criminality |
| Behavioral Theory | Crime as learned behavior via reinforcement | B.F. Skinner, operant conditioning, reward/punishment shaping |
| Cognitive Theory | How people process information/moral reasoning | Moral development stages — Lawrence Kohlberg's levels, link between lower moral reasoning and offending |
| Personality Theory | Trait clusters associated with offending | Antisocial personality traits, impulsivity, low self-control (bridge to Gottfredson & Hirschi's General Theory of Crime) |
| Attachment Theory | Early bonding failure and later behavior | John Bowlby's maternal deprivation hypothesis, criticisms |

### 4.5 Sociological Theories (`sociological.html`)
Structured as **three tabs/groups on one page** (Social Structure / Social Process / Social Conflict), each with its own clickable card set — this page is the most content-dense, mirroring how Crim 2 usually clusters sociological theory.

**Social Structure:**
| Theory | Modal detail |
|---|---|
| Social Disorganization Theory | Shaw & McKay, Chicago School, concentric zone model, neighborhood instability |
| Strain Theory (Anomie) | Robert Merton, culturally approved goals vs. legitimate means, modes of adaptation (conformity, innovation, ritualism, retreatism, rebellion) |
| Subculture Theory | Albert Cohen's status frustration/reaction formation; Cloward & Ohlin's differential opportunity (criminal/conflict/retreatist subcultures) |

**Social Process:**
| Theory | Modal detail |
|---|---|
| Differential Association Theory | Edwin Sutherland, crime as learned through intimate group interaction, 9 propositions summarized |
| Social Learning Theory | Ronald Akers, extension of differential association with reinforcement/modeling (Bandura influence) |
| Social Control (Social Bond) Theory | Travis Hirschi, four bonds — attachment, commitment, involvement, belief |
| Labeling Theory | Howard Becker, Edwin Lemert — primary vs. secondary deviance, self-fulfilling prophecy of the "criminal" label |

**Social Conflict:**
| Theory | Modal detail |
|---|---|
| Conflict Theory | George Vold / Marxist-influenced criminology — law as a tool of the powerful; crime defined by whoever controls law-making |
| Radical/Critical Criminology | Capitalism's structural role in crime causation, critique of the justice system as class-biased |
| Feminist Criminology | Gender as central to understanding offending and victimization, critique of male-centered theory-building |

### 4.6 Contemporary & Integrated Theories (`contemporary.html`)
| Theory | Card teaser | Modal detail |
|---|---|---|
| Rational Choice Theory | Modern revival of classical free-will logic | Cost-benefit decision-making at the point of offending, situational factors |
| Routine Activity Theory | Crime requires convergence of 3 elements | Cohen & Felson — motivated offender, suitable target, absence of capable guardian |
| General Strain Theory | Expanded strain beyond blocked goals | Robert Agnew — negative relationships, loss of positive stimuli, presentation of negative stimuli as strain sources |
| Life-Course/Developmental Theory | Offending changes across the lifespan | Sampson & Laub's age-graded theory, Moffitt's life-course-persistent vs. adolescence-limited offenders |
| Integrated Theory | Combining multiple theory families | Why single-theory explanations are limited; example of a simple integrated model (e.g., biosocial approaches combining biological predisposition + social environment) |

### 4.7 Key Theorists (`theorists.html`)
A gallery of clickable theorist cards (portrait/name/era on the card; modal with bio + their theory + significance):
Cesare Beccaria, Jeremy Bentham, Cesare Lombroso, William Sheldon, Sigmund Freud, Lawrence Kohlberg, Robert Merton, Edwin Sutherland, Travis Hirschi, Howard Becker, Robert Agnew, Marcus Felson & Lawrence Cohen, Michael Gottfredson & Travis Hirschi (General Theory of Crime), Terrie Moffitt.
Each modal: short bio, the theory they're best known for (linking back to its page/section), and one line on their lasting influence on criminology.

### 4.8 References & Sources (`references.html`)
Categorized bibliography (Foundational Texts, Journal Articles/Studies, Textbooks commonly used in Crim 2, Online Academic Resources) — kept as a plain list, not modal-based, same reasoning as the earlier PRD (it's a bibliography, not content to "expand").

### 4.9 Contact (`contact.html`)
Team/developer contact info, styled consistently with the rest of the site.

---

## 5. File Map
\`\`\`
/
├── index.html            → Home / Overview
├── classical.html        → Classical & Neo-Classical Theories
├── biological.html       → Biological / Trait Theories
├── psychological.html    → Psychological Theories
├── sociological.html     → Sociological Theories (Structure / Process / Conflict tabs)
├── contemporary.html     → Contemporary & Integrated Theories
├── theorists.html        → Key Theorists gallery
├── references.html       → References & Sources
├── contact.html          → Contact
├── /partials/
│   ├── nav.html
│   └── footer.html
├── /js/
│   ├── nav.js             → injects nav, sets active-page state
│   ├── footer.js
│   ├── modal.js            → shared modal logic (every page)
│   ├── animations.js       → shared scroll-reveal logic
│   └── sociological.js     → tab-switcher for Structure/Process/Conflict groups
├── /data/
│   ├── classical.js
│   ├── biological.js
│   ├── psychological.js
│   ├── sociological.js
│   ├── contemporary.js
│   └── theorists.js
└── /assets/
\`\`\`
Nav bar and footer are written once (`partials/`) and injected into all 9 pages via `nav.js`/`footer.js` — matching the "each button = its own file, not one file doing everything" requirement.

---

## 6. Functional Requirements Summary
| # | Requirement |
|---|---|
| FR1 | Every theory/theorist card is clickable and opens its corresponding modal. |
| FR2 | Modal content on each page is data-driven from that page's own `data/*.js` file. |
| FR3 | Sticky nav, shared across all 9 pages via `nav.js`, highlighting the current page. |
| FR3a | Nav/footer markup exists once (`partials/`) and is injected everywhere, never hand-duplicated per file. |
| FR4 | Scroll-triggered reveal animations for all card grids and headers, shared via `animations.js`. |
| FR5 | Sociological page has a working tab-switcher between Social Structure / Social Process / Social Conflict groups. |
| FR6 | Theorist cards cross-link to their associated theory's page/modal where practical. |
| FR7 | Fully responsive: 1-column stacks on mobile, 2–3 columns on tablet/desktop. |
| FR8 | Modal is accessible: focus-trapped, `Esc`-closable, ARIA roles (`role="dialog"`, `aria-modal="true"`). |
| FR9 | Footer disclaimer noting content is for academic/educational purposes (Crim 2 study aid), not clinical or legal use. |

## 7. Non-Functional Requirements
- **Performance:** Tailwind purged/minified for production; Font Awesome subset loaded via CDN.
- **Accessibility:** WCAG AA contrast on both navy and parchment backgrounds; full keyboard navigability.
- **Browser support:** latest evergreen browsers.
- **Maintainability:** adding a new theory should only require editing the relevant `data/*.js` file, never touching HTML/JS logic.

## 8. Success Criteria
- All 5 major theory families (Classical, Biological, Psychological, Sociological, Contemporary/Integrated) plus a Key Theorists page are represented as separate, real files.
- Each theory's modal content includes, at minimum: explanation, key concept(s), proponent(s), example, and criticism — matching real Crim 2 exam-style depth.
- Color usage stays roughly 60/30/10 (navy/parchment dominant, slate secondary, gold + family-accent chips as the 10%).
- Site is fully navigable and legible on mobile.

## 9. Open Questions / Decisions Needed Before Build
- Should the Sociological page's three groups (Structure/Process/Conflict) be **tabs on one page**, or should each become its **own separate file** too (i.e., `social-structure.html`, `social-process.html`, `social-conflict.html`) for full consistency with "every button its own file"?
- Do you want the Key Theorists page, or should theorist bios just live inside each theory's own modal (no separate gallery)?
- Should theory pages include a short self-check quiz (e.g., "which theory explains this scenario?") as a stretch feature, or keep strictly to explanation/reference content for now?
- Any specific textbook/reference your Crim 2 subject follows, so citations in §4.8 match what your students actually use?

---

*End of PRD. Once §9 is resolved, this breaks into a build task list: data schema per theory family → shared partials/nav/modal/animation scripts → per-page markup → Tailwind theme config → responsive/accessibility QA.*
