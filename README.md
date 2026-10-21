# AJR Industries website

A static, seven-page company website. No package installation or build is required.

## Local development

From this directory run:

```sh
python3 -m http.server 8000
```

Open the served site in your own browser. To view a downloaded copy, extract the complete website folder, keep the `assets` folder beside the HTML files, and open `index.html`. Downloading only the HTML file will omit its styling and scripts. Refresh the browser after pulling updated files. Each HTML page can also be opened directly on your computer. Shared design tokens, typography, spacing, grids, and components live in `assets/styles.css`; navigation and inquiry-draft interactions live in `assets/site.js`.

## Content and launch handoff

- Replace clearly labeled photography figures with approved, real AJR images. Use descriptive alt text, explicit image dimensions, responsive sizing, and lazy loading below the hero. No stock or generated image is represented as AJR's facility or work.
- Existing equipment, platform names, company details, and capability descriptions have been retained from the original project, not independently verified. Confirm them before publication.
- Pressure testing was originally described as “10,000 lb.” Its pressure units and operating rating require company confirmation; the capability page marks this ambiguity instead of guessing a conversion.
- Existing ITAR, NIST 800-171, Certified Quality Clinic, and Flight Safety statements are retained on the Quality page with documentation/status placeholders. No new certifications or customer relationships have been added.
- Supply company-approved history, team information, credential documents, technical capability data, and any approved project examples.
- Contact currently supports telephone contact and a local text-file inquiry draft. The draft is not submitted, stored remotely, or emailed. A real submission service and approved recipient are still needed before enabling online quote delivery.

## Design direction

Black, white, and neutral gray with small red accents on the brand divider, active-navigation underline, and keyboard focus, plus clear technical hierarchy, consistent page navigation, and a prominent quote path. The homepage follows: hero, capabilities, trust indicators, industries/platforms, equipment, quality, quote CTA. No reveal animations or dependency on JavaScript for content visibility.

The requested Sentry reference could not be inspected because access from the development environment was denied (HTTP/proxy 403). The redesign applies the user's stated industrial design principles; no Sentry branding, copy, photography, or layouts were used.
