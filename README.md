# Theories of Crime Causation (Crim 2 Capstone)

An interactive, educational web application exploring the major theories of crime causation across criminology. This project serves as a comprehensive resource for understanding the foundational schools of thought regarding criminal behavior.

## Overview

The site is built with a simple, scalable Vanilla JavaScript architecture that injects data dynamically into reusable modal components. It features a curated 60/30/10 dark-academia design system using Tailwind CSS via CDN, avoiding the need for a build step while maintaining high-quality aesthetics. The theoretical schools are color-coded (Gold for Classical, Teal for Biological, Indigo for Psychological, Orange for Sociological, and Maroon for Contemporary) to help users visually distinguish between paradigms.

## Project Architecture

### Core Pages
*   **`index.html`**: Homepage introducing the major schools (Classical, Biological, Conflict) and explaining *why* theory matters for public policy and sentencing.
*   **`classical.html`**: Explores the Classical and Neo-classical schools (Beccaria, Bentham) and Deterrence Theory.
*   **`biological.html`**: Explores Positivist thought, from Lombroso's biological determinism to modern neurochemical studies.
*   **`psychological.html`**: Covers psychoanalytic, behavioral, cognitive, personality, and attachment theories.
*   **`sociological.html`**: The most extensive page, featuring a custom JavaScript tab-switcher to organize theories into Social Structure, Social Process, and Social Conflict paradigms.
*   **`contemporary.html`**: Explores modern integrated theories, rational choice, routine activities, and life-course/developmental theories.
*   **`theorists.html`**: A dedicated gallery of the 14 key theorists discussed across the site, complete with dynamic filtering by theoretical family.
*   **`references.html`**: A clean, structured list of the foundational texts that inform the site content.
*   **`contact.html`**: Provides author information (AJ Acapulco) and a demo contact form.

### JavaScript Modals & Interactions

Instead of creating dozens of separate HTML pages for each individual theory, the site heavily utilizes a **shared interactive modal system**. 
Users can click on any theory card to open a modal that displays its deep-dive content (Core assumptions, key concepts, real-world application, and criticisms).

- **`modal.js`**: Handles the accessibility-compliant modal overlay, including focus-trapping and keyboard navigation (Escape to close).
- **`animations.js`**: Reusable IntersectionObserver logic that controls the smooth `.reveal` scroll animations on all pages. 
- **`nav.js` / `footer.js`**: Injects the shared navigation and footer partials into every page dynamically, ensuring a single source of truth for layout structure.

### Data Layer

The content for the modals is stored in modular JavaScript files, keeping the HTML clean and separating the data layer from the presentation layer.
- `data/classical.js`
- `data/biological.js`
- `data/psychological.js`
- `data/sociological.js` (Nested arrays for tab switching)
- `data/contemporary.js`
- `data/theorists.js`

## Technologies Used

*   **HTML5 & CSS3**
*   **Vanilla JavaScript (ES6)**
*   **Tailwind CSS** (via CDN for rapid prototyping and utility classes)
*   **FontAwesome** (for consistent, theme-appropriate iconography)

## Usage

Simply clone or download the repository, ensure all files are in the same directory, and open `index.html` in any modern web browser. No build steps (npm, webpack, etc.) are required.

## Author

Developed by **AJ Acapulco** (BS Criminology, YBVC) as a final course requirement.
