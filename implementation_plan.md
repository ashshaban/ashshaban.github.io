# Complete Bilingual Website Overhaul — moshaban.me

## Goal

Transform the current English-only B2B portfolio into a **bilingual (Arabic + English)** site that restores all missing content from the old version (gallery, timeline, certifications, Techno Egypt, honors, public work, buy-me-a-coffee) while keeping the new elite B2B positioning, tech-noir aesthetic, and sharp copywriting.

## What Changed Between Old → Current

| Feature | Old Site | Current Site | Plan |
|---|---|---|---|
| Language | Arabic-only (RTL) | English-only (LTR) | ✅ Add language toggle (AR/EN) |
| Professional Timeline | ✅ Full timeline (6 entries + images) | ❌ Removed | ✅ Restore |
| Public Work Section | ✅ 5 cards (political/youth) | ❌ Removed | ✅ Restore |
| Techno Egypt Section | ✅ Full section + 16-photo gallery | ❌ Removed | ✅ Restore |
| Certifications | ✅ 12 certification cards + hero image | ❌ Removed | ✅ Restore |
| Honors & Media | ✅ 4 cards (awards, TV, GESR) | ❌ Removed | ✅ Restore |
| Photo Gallery | ✅ Filterable (media/awards/training, 35+ photos) | ❌ Removed | ✅ Restore |
| Buy Me a Coffee | ✅ Support section | ❌ Removed | ✅ Restore |
| About Divider Image | ✅ Animated reveal | ❌ Removed | ✅ Restore |
| About Section | Arabic bio style | English manifesto | ✅ Both versions (language toggle) |
| Hero Section | Arabic positioning | English B2B positioning | ✅ Both versions |
| Capabilities | N/A | ✅ 4 cards | ✅ Keep + translate |
| RoboVAI | Arabic version | English version | ✅ Both versions |
| Why Me / Differentiator | N/A | ✅ Comparison cards | ✅ Keep + translate |
| Contact | Arabic + form | English + form | ✅ Both versions |
| Footer social sections | ✅ Personal + RoboVAI | ✅ Personal + RoboVAI | ✅ Keep |

---

## Proposed Changes

### 1. Language Toggle System

#### [MODIFY] [index.html](file:///d:/apps/my%20Website/ashshaban.github.io-main/ashshaban.github.io-main/index.html)

- Add `<html lang="en" dir="ltr">` with dynamic switching
- Add a language toggle button in the navbar (🌐 EN / AR)
- All text content will use `data-en="..."` and `data-ar="..."` attributes OR duplicate content blocks with `.lang-en` / `.lang-ar` classes
- When Arabic is selected: `dir="rtl"`, font-family prioritizes Tajawal, all `.lang-ar` visible / `.lang-en` hidden
- When English is selected: `dir="ltr"`, font-family prioritizes Inter, all `.lang-en` visible / `.lang-ar` hidden
- **Approach**: Use CSS class on `<body>` (`.is-rtl` / `.is-ltr`) + JS toggle. Dual content spans for text.

### 2. Restore Missing Sections

All sections below will be added back with **bilingual content**:

#### Professional Timeline Section
- Restore the 6-entry vertical timeline (RoboVAI, MCIT, Omal Misr, Merkato, Techno Egypt, DECI)
- Restore the 2 experience-media images above the timeline
- Arabic text from old site + new English translations

#### Public Work Section
- Restore 5 cards: Tahya Misr, Student Union, National Council, Digital Inclusion, IEEE
- Bilingual descriptions

#### Techno Egypt Section
- Full section with vision/mission, features, and 16-photo gallery grid
- Bilingual content

#### Certifications Section
- Restore all 12 certification cards + hero image
- Bilingual card titles (already bilingual in old site)

#### Honors & Media Section
- Restore 4 cards: Libyan Government, Moroccan Government, Media Speaker, GESR Award
- Bilingual descriptions

#### Photo Gallery Section
- Restore filterable gallery with all 35+ photos
- Tab filters: All / Media & Conferences / Awards / Training & Events
- Bilingual tab labels

#### Support/Buy Me a Coffee Section
- Restore the support CTA with bilingual text

#### About Divider Image
- Restore the animated reveal between About and Timeline sections

### 3. CSS Updates

#### [MODIFY] [styles.css](file:///d:/apps/my%20Website/ashshaban.github.io-main/ashshaban.github.io-main/assets/css/styles.css)

- Add RTL-specific overrides (`.is-rtl` class on body)
- Add language toggle button styles
- Add styles for all restored sections: timeline, techno-gallery, cert-grid, gallery with tabs, support section
- Add RTL border-direction fixes (border-right → border-left etc.)
- Ensure responsive breakpoints cover all restored sections
- Add lightbox overlay styles for gallery image viewing

### 4. JavaScript Updates

#### [MODIFY] [main.js](file:///d:/apps/my%20Website/ashshaban.github.io-main/ashshaban.github.io-main/assets/js/main.js)

- Add language toggle function with localStorage persistence
- Add gallery filter function (`filterGallery()`)
- Add about-divider scroll animation
- Add lightbox functionality for gallery images
- Update dir/lang attributes on toggle

---

## User Review Required

> [!IMPORTANT]
> **Bilingual Approach**: I'll use a CSS class toggle approach (`.is-rtl` on `<body>`) with dual `<span class="lang-en">` / `<span class="lang-ar">` elements inside each text block. This keeps it as a single-page static site (no framework needed) while supporting both languages seamlessly. The user's preferred language is stored in `localStorage`.

> [!IMPORTANT]
> **Content Preservation**: The English B2B copy from the current site will be kept. Arabic translations will match the B2B tone (not just restoring the old casual Arabic). However, sections like Public Work and Techno Egypt will retain the original Arabic descriptions since they were already well-written.

> [!WARNING]
> **File Size**: The final `index.html` will be substantial (~2500+ lines) due to bilingual content and 35+ gallery images. This is acceptable for a static GitHub Pages site but worth noting.

## Open Questions

1. **Gallery lightbox**: Should clicking a gallery image open it in a fullscreen overlay, or is the current hover-zoom sufficient?
2. **Default language**: Should the site default to Arabic or English on first visit?
3. **Navigation order**: The old site had 7 nav links. The current has 4. Should I merge them into a clean set covering all sections?

## Verification Plan

### Automated Tests
- Open the site in browser and verify all sections render correctly
- Test language toggle switches between AR (RTL) and EN (LTR)
- Test gallery filter buttons show/hide correct categories
- Test mobile responsive layout
- Test navigation smooth scrolling

### Manual Verification
- Visual review of all sections in both languages
- Screenshot comparison of key sections
