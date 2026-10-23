# AJR Industries website

A static company website with ten pages and shared CSS/JavaScript. No package installation or build is required.

## Local development

From this directory run:

```sh
python3 -m http.server 8000
```

Open the served site in your browser. For a downloaded copy, extract the complete website folder, keep `assets` beside the HTML files, and open `index.html`. Downloading just the HTML file omits styling and scripts. Refresh your browser after updating files.

The main pages are Home, Capabilities, Equipment, Quality, Industries, About, and Contact. Company resources—News, Careers, and Vendor Terms—are linked from the utility navigation and footer. Original History & Parts and Facts material is organized into About, Capabilities, Equipment, Quality, and Industries.

Shared design tokens and responsive components live in `assets/styles.css`. Navigation, manual photo-gallery controls, and the vendor print action live in `assets/site.js`.

## Content and source handoff

Content was checked against the original AJR pages supplied as screenshots and then retrieved directly when domain access became available. See [content sources](docs/content-sources.md).

- Equipment comparisons contain the full source inventory: 20 rows representing 28 units. Matching VU65A configurations are grouped; different sizes remain separate. Dimensions retain the source label **Machine size** and inch units. They are not relabeled as axis travel or guaranteed usable part capacity.
- Processing equipment and Bridgeport mills have no source dimensions; the page explicitly requests confirmation. The source’s pressure rating of **10,000 LBS** remains unresolved and is not converted to PSI.
- Company-listed quality-system references and qualifications are presented without inventing certificate numbers, approval scope, or a CMMC certification. Current documentation can be confirmed directly with AJR.
- News items retain their historical years. Anniversary text refers to 2025, award performance to 2024/2021, and installation news to 2021/2019. Image galleries belong to their respective stories and do not autoplay.
- Careers reflects the source’s **no current openings** status and uses the actual application email link. Shift times are examples, not office hours.
- All 22 vendor clauses preserve the live source’s wording, including apparent source typos. Changes to policy wording should be supplied separately by AJR; do not silently revise contractual terms while styling the page.
- Named platforms/programs and public quote forms are intentionally excluded. Contact is direct phone/email/address. No online submission or file-upload flow is present.
- All 12 user-supplied part photographs are included unchanged. The complete captioned gallery is on `about.html#parts`; Capabilities and Industries use selected examples. See [part photo inventory](docs/part-photos.md).
- All 11 supplied equipment photographs are included unchanged in their original JPEG, PNG, and WebP formats. The complete gallery is on `equipment.html#equipment-photos`; Home features the Makino D800Z and Quality uses the Mitutoyo Crysta Apex image. Images include alternative text and dimensions, use lazy loading below the hero, and open at full size from the galleries. See [equipment photo inventory](docs/equipment-photos.md). No generated imagery is represented as AJR’s work.

## Design direction

Black, white, and neutral gray, with small red accents. Consistent navigation, restrained typography, clear technical information, and direct company contact. No reveal animations or dependency on JavaScript for content visibility.

The Sentry reference was initially inaccessible; the redesign applies the user’s stated industrial design principles without reusing Sentry branding, copy, or images.

## News and certification imagery

The nine supplied News photographs are matched to their five dated stories, with separate four-slide Makino F9 and two-slide DMU 50 galleries. Controls do not autoplay, announce the count, and work by keyboard; all slides remain visible without JavaScript. The installed F9 is also the Home hero, and About uses its setup image. The supplied DNV mark is included on Quality. Every visible photo placeholder has been replaced using supplied imagery. See [News photo inventory](docs/news-photos.md).

One original screenshot photo remains absent from the supplied files: the separate glass trophy inscribed **2021**. The 2021 story uses its supplied banner; the glass trophy marked **2024** stays with the RTX story.
