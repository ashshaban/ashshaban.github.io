# moshaban.me Website

Static personal brand website for Mohamed Shaban El-Atmani, hosted on GitHub Pages at **https://moshaban.me/**.

## File Structure

```
/
├── index.html            # Single-page B2B site (no inline styles or scripts)
├── assets/
│   ├── css/styles.css    # Complete visual system — design tokens, layout, components, responsive rules
│   └── js/main.js        # Runtime behavior — AOS init, navbar scroll, mobile menu, tracking, contact form, smooth scroll
├── sitemap.xml           # Single-URL sitemap for https://moshaban.me/
├── robots.txt            # Crawl policy referencing sitemap.xml
├── CNAME                 # Custom domain mapping for GitHub Pages
└── README.md
```

## Implementation: B2B Positioning (Refactored)

The website is positioned to attract CTOs, founders, and business owners seeking operational transformation through AI systems architecture.

### Active Sections

- **Hero** — high-impact positioning with dual CTA (`Request a Session` / `Explore Systems`)
- **About** — manifesto-style engineering philosophy (cyber-physical → AI operations)
- **Core Capabilities** — 4 outcome-focused pillars
- **RoboVAI Ecosystem** — founder-led credibility with Nova, Boost, and Control Layer
- **Why Me** — traditional delivery vs. intelligence architecture contrast
- **Contact** — operations brief form for business leads + direct contact methods

### Intentionally Removed Legacy Sections

The following sections were **deliberately removed** during the B2B repositioning and are **not accidentally deleted**:

- Gallery / photo showcase (personal branding content, not B2B-relevant)
- Certifications grid (credential signalling replaced by outcome-focused copy)
- Public work / teaching content blocks (conflicted with founder-CEO positioning)

**Archive strategy (optional):** A non-linked snapshot of the legacy content can be preserved as `legacy-snapshot.html` for historical reference without affecting the live conversion funnel.

## Required Setup

### 1) Activate Formspree

In `index.html`, update the contact form action:

```
https://formspree.io/f/your-form-id  →  https://formspree.io/f/<real-form-id>
```

Once updated, form submissions route directly to email.

### 2) Connect Analytics (Optional but Recommended)

All CTAs and form events emit through `trackEvent()` in `assets/js/main.js`.

Supported providers (auto-detected at runtime):

| Provider | Global | Events sent |
|---|---|---|
| Google Analytics 4 | `window.gtag` | via `gtag('event', ...)` |
| Plausible | `window.plausible` | via `plausible(name, { props })` |
| GTM Data Layer | `window.dataLayer` | via `dataLayer.push(...)` |

Add any provider's snippet before `</body>` and events wire up automatically.

## SEO Files

- **`sitemap.xml`** — valid XML sitemap with `https://moshaban.me/` as the single canonical URL, `priority: 1.0`, `changefreq: monthly`.
- **`robots.txt`** — allows all crawlers, references sitemap URL.

## Suggested Next Steps

1. Replace Formspree placeholder ID before launch.
2. Add `application/ld+json` JSON-LD (`Person` + `Organization` schema) to `<head>` for richer search results.
3. Add dedicated case pages with quantified client outcomes (cost reduction, cycle time, error rate).
4. Add lightweight social proof signals (selected logos, client quotes, deployment snapshots).
