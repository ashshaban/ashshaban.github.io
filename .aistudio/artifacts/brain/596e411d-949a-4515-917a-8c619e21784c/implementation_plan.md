# ALIA Strategic Consulting — Smart Digital Business Card

A mobile-first, corporate-grade Smart Digital Business Card and executive portal for **ALIA Strategic Consulting** (*An Amer Vision Group Company*), tailored for **Eng. Mohamed Shaban (AI & Digital Transformation Lead)** with instant NFC/QR sharing, `.vcf` contact export, interactive revenue engine exploration, and strategic consultation booking.

## User Review & Critical Decisions

> [!IMPORTANT]
> All core visual and functional preferences have been aligned based on your input. Review the architectural blueprint below and click **Proceed** to build the application.

- **Confirmed Theme Posture**: **Crisp Light Theme with Deep Navy Headers & Clean White Cards** — Uses a high-contrast `#F8FAFC` neutral canvas, deep navy (`#0A1628` / `#0F172A`) executive header surface, metallic silver/slate hairline borders (`#CBD5E1`), and royal cobalt/gold strategic accents.
- **Confirmed Sharing & QR Experience**: **Two-Sided Flip Card** — Features a smooth 3D/compositor flip transition between the **Front View** (Executive Profile, Contact Grid, and 5 Strategic Engines) and the **Back View** (Scannable dynamic SVG QR Code, NFC tap badge, direct card URL copy, and instant `.vcf` download).
- **Confirmed Interactive Scope**:
  1. **Interactive 5-Engine Explorer**: Tapping any of the 5 ALIA Engines (*Demand, Conversion, Expansion, Intelligence, Transformation*) reveals concrete strategic deliverables, architecture metrics, and how that engine integrates into revenue systems.
  2. **Direct WhatsApp & Google Maps Actions**: One-tap WhatsApp business chat (`+20 114 086 1767`) and direct Google Maps navigation to *Hydepark Business Complex, Building 8G, Sheraton Housing, Cairo, Egypt*.
  3. **Executive Switcher & Live Prop Customizer**: Allows previewing pre-configured ALIA leadership profiles (starting with *Eng. Mohamed Shaban*) or customizing card props live in real time.
  4. **Strategic Consultation Booking Flow**: Validated interactive booking drawer/modal for prospects to request a revenue engineering or AI transformation session.

---

## 1. Overview & Core Concept

- **What It Does**: Delivers an executive digital identity card designed for instant mobile loading via NFC tap or QR scan, while expanding cleanly on desktop viewports into a two-column executive showcase and live card customizer studio.
- **Target Audience / Persona**: Enterprise clients, C-suite partners, and stakeholders meeting ALIA Strategic Consulting leaders at conferences, boardrooms, or executive briefings.
- **Key Value**: Transforms a static business card into an interactive strategic touchpoint that embodies ALIA's signature positioning: *"We don't run marketing. We engineer revenue systems."*

---

## 2. User Experience & Visual Design

- **Key User Flows**:
  1. **First Impression & Profile Inspection**: User scans NFC/QR and lands on the executive header featuring the ALIA Strategic Consulting geometric emblem, Amer Vision Group affiliation, the slogan *"We don't run marketing. We engineer revenue systems."*, and **Eng. Mohamed Shaban**'s profile with the active **Transformation Engine (AI & Digital Transformation)** division indicator.
  2. **Instant Contact Save (`.vcf`) & Direct Outreach**: User taps the floating/sticky **"Save to Contacts"** primary CTA to generate and download a complete, standards-compliant `Mohamed_Shaban_ALIA.vcf` file, or taps any cell in the **Contact Grid** (Phone Call, WhatsApp Chat, Official Email, Website, or Google Maps Directions to Hydepark Business Complex).
  3. **Two-Sided Card Flip (Front ↔ QR Back)**: User taps **"Flip to QR Pass"** in the card header to flip the card to its reverse side, displaying a high-contrast custom QR code encoding the executive's contact card, shareable link copy, and vCard export.
  4. **5 Revenue Engines Interactive Inspection**: Below the contact grid, the user taps across the 5 corporate engines (**Demand**, **Conversion**, **Expansion**, **Intelligence**, **Transformation**). Selecting an engine updates an interactive strategic brief card showing key capabilities and business impact.
  5. **Consultation Request & Executive Customizer**: Prospects tap **"Book Consultation"** to submit a validated discovery request, while internal team members can toggle the **Executive Switcher / Customizer** to preview or personalize dynamic props.

- **Visual Identity & Theme**:
  - *Aesthetic Direction*: Corporate, Sleek, & Strategic — Swiss-inspired executive precision with crisp light surfaces, deep authoritative navy headers, and metallic slate structural detailing.
  - *Color Palette & Mood*:
    - **60% Dominant Canvas**: Crisp Alabaster / Cool Daylight (`#F8FAFC` / `bg-slate-50`) and pure white card surfaces (`#FFFFFF`).
    - **30% Structural & Executive Surfaces**: Deep Strategic Navy (`#0B1528` / `bg-slate-900`) for the executive card header and primary CTAs, paired with Metallic Silver/Slate hairline borders (`#E2E8F0` / `border-slate-200`) and muted slate typography (`#475569`).
    - **10% Strategic Accent**: Electric Cobalt (`#1D4ED8` / `blue-700`) for active engine selection, interactive focus rings, and key action affordances.
  - *Typography & Hierarchy*:
    - **Display / Brand & Executive Name**: `Plus Jakarta Sans` (600/700 weights, tight tracking, `text-wrap: balance`) for executive authority.
    - **Body & Strategic Copy**: `DM Sans` (400/500 weights) for crisp legibility across mobile screens.
    - **Monospace / Numerals**: `JetBrains Mono` (`tabular-nums`) for phone numbers, building codes, and strategic metrics.
  - *Component Styling & Layout*:
    - **Mobile-First Ergonomics ($375\text{px}\text{–}430\text{px}$)**: Every interactive button, contact row, and engine selector enforces a minimum $44 \times 44\text{px}$ touch hitbox. Fixed bottom bar obeys the $\le 15\%$ mobile sticky viewport cap.
    - **Responsive Desktop Expansion ($1440\text{px}$)**: Expands on desktop (`lg:grid-cols-12`) so the interactive flip card sits on the left/center column while the right column provides the live **Executive Profile Switcher / Props Customizer** and **5-Engine Strategic Architecture Overview**, preventing a narrow "desert island" strip on desktop monitors.
    - **Zero-Pill Discipline**: Static metadata (company affiliation, division subtitle, location details) uses clean unboxed typography with subtle `·` and `/` separators rather than decorative pill capsules.

- **Interactive Feedback & Motion**:
  - Smooth $\le 200\text{ms}$ compositor transitions (`transform`, `opacity`) for card flipping, engine tab switching, copy-to-clipboard confirmation toasts, and `.vcf` download feedback.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Self-Contained Single-File Architecture (`src/App.tsx`) with Dynamic Props**
  - *Chosen Approach*: Consolidate the complete Smart Digital Business Card component, dynamic executive props interface, `.vcf` generator, deterministic SVG QR matrix renderer, 5-Engine interactive explorer, consultation modal, and executive switcher into a clean, modular single-file React component (`src/App.tsx`).
  - *Why*: Directly fulfills the requirement for a clean, portable Single File Component ready for immediate execution while supporting dynamic props (`ProfileProps`) and hardcoded default preview data for **Eng. Mohamed Shaban**.
- **Decision 2: Client-Side Standards-Compliant vCard 3.0 Generator & Custom SVG QR Code**
  - *Chosen Approach*: Generate downloadable `.vcf` blobs client-side using UTF-8 vCard 3.0 syntax (including full name, title, organization, phone, email, website, and Cairo Sheraton Housing physical address) and render a crisp, zero-dependency SVG QR code on the card's back face.
  - *Why*: Guarantees instant offline-capable reliability without external image URL failures or third-party QR API latency.

---

## 4. Technical Architecture & Data Strategy

### Architecture & Component Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     App Root (Single-File Component)                    │
│  State: activeProfile, isFlipped, selectedEngine, isBookingOpen, toast  │
└───────────────────┬─────────────────────────────────┬───────────────────┘
                    │                                 │
     ┌──────────────▼──────────────┐   ┌──────────────▼──────────────┐
     │  Smart Business Card View   │   │  Desktop Strategic Studio   │
     │  (Front & Back Flip Card)   │   │  & Mobile Action Drawers    │
     └──────────────┬──────────────┘   └──────────────┬──────────────┘
                    │                                 │
     ┌──────────────┼──────────────┐   ┌──────────────┼──────────────┐
     ▼              ▼              ▼   ▼              ▼              ▼
┌─────────┐  ┌────────────┐  ┌───────────┐  ┌──────────────┐  ┌───────────┐
│  Front  │  │ Contact &  │  │   Back    │  │  5-Engine    │  │ Executive │
│ Header  │  │ Direct Act │  │  QR Pass  │  │ Interactive  │  │ Switcher &│
│ & Brand │  │ Grid (Tel, │  │ & .vcf    │  │ Detail Panel │  │ Consult   │
│ Tagline │  │ WA, Map)   │  │ Generator │  │ (5 Engines)  │  │ Booking   │
└─────────┘  └────────────┘  └───────────┘  └──────────────┘  └───────────┘
```

### Data Model & State

- **`ExecutiveProfile` Props Interface**:
  - `name`: `"Eng. Mohamed Shaban"`
  - `title`: `"AI & Digital Transformation Lead"`
  - `company`: `"ALIA Strategic Consulting"`
  - `parentGroup`: `"An Amer Vision Group Company"`
  - `slogan`: `"We don't run marketing. We engineer revenue systems."`
  - `serviceEngine`: `"Transformation Engine (AI & Digital Transformation)"`
  - `engineKey`: `'transformation' | 'demand' | 'conversion' | 'expansion' | 'intelligence'`
  - `phone`: `"01140861767"` (`+201140861767` for international tel/WhatsApp dialing)
  - `email`: `"Info@ALIA-BD.com"`
  - `website`: `"Alia-BD.com"`
  - `address`: `"Hydepark – business complex, Building No. 8G, Sheraton Housing, Cairo, Egypt"`
- **`CompanyEngine` Model (5 Core Engines)**:
  1. **Demand**: Market positioning, account-based demand architecture, and qualified pipeline acquisition.
  2. **Conversion**: Revenue operations (RevOps), sales funnel engineering, and deal velocity optimization.
  3. **Expansion**: Customer lifetime value (LTV) architecture, cross-sell systems, and net revenue retention.
  4. **Intelligence**: Executive telemetry, predictive revenue analytics, and attribution modeling.
  5. **Transformation**: AI integration, enterprise workflow automation, and digital infrastructure modernization (*Eng. Mohamed Shaban's primary division*).

### Interactive Component & State Mapping

- **`handleDownloadVcf()`**: Synthesizes active `ExecutiveProfile` fields into a `text/vcard;charset=utf-8` Blob, triggers an automatic download (`Eng_Mohamed_Shaban_ALIA.vcf`), and displays a confirmation toast.
- **`handleFlipCard()`**: Toggles `isFlipped` state between the Front Profile view and the Back QR Pass view, with keyboard accessibility and quick copy-link action.
- **`handleEngineSelect(engineId)`**: Updates `selectedEngine` state to highlight the chosen engine icon and display its strategic architecture brief, deliverables, and direct consultation trigger.
- **`handleCopyField(value, label)`**: Copies phone, email, address, or profile URL to the clipboard with immediate visual feedback.
- **`handleConsultationSubmit(formData)`**: Validates name, corporate email, phone, and selected engine focus, transitioning the modal to a confirmed booking receipt with calendar/WhatsApp follow-up options.
