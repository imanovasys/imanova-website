---
name: Kinetic Authority
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#341100'
  on-tertiary-container: '#d95f00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb690'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#783200'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 80px
---

## Brand & Style

This design system establishes a visual language for a Pan-African health consultancy that bridges the gap between high-level government policy and cutting-edge data science. The aesthetic is defined as **Scientific Modernism**: a synthesis of Stripe’s vibrant motion, Apple’s obsession with clarity, and Vercel’s technical rigor.

The brand personality is **Authoritative, Resilient, and Precise**. It avoids clichés in the health and NGO sectors, opting instead for a "Government-grade" technical interface that suggests high-performance infrastructure. The UI utilizes expansive whitespace to denote premium quality, while using intentional, high-contrast accents to guide the eye toward critical data points. 

The emotional response should be one of absolute trust in data-driven outcomes and a sense of forward-moving technological progress across the African continent.

## Colors

The palette is engineered for professional authority and technical precision.

- **Primary (Slate Navy):** A deep, "Government-grade" navy used for core branding, headers, and primary text to establish immediate gravitas.
- **Secondary (Resilience Green):** A vibrant emerald representing growth and health systems. Used for success states and primary calls to action.
- **Tertiary (Sunset Orange):** An energetic accent reflecting the warmth and vitality of the African landscape. Used sparingly for highlights or alerts.
- **Innovation Blue:** A high-vibrancy blue inspired by modern SaaS platforms, used for interactive elements, links, and data visualizations.
- **Neutrals:** A sophisticated range of cool grays (Slate) provides the structural foundation, ensuring the interface remains clean and data-focused.

All color combinations must maintain a minimum 4.5:1 contrast ratio to meet WCAG AA standards, particularly for data labels and body text.

## Typography

This design system uses a dual-sans-serif approach to balance readability with a technical edge. 

**Inter** is the workhorse for headlines and body copy, chosen for its exceptional legibility in data-heavy contexts and its professional, neutral tone. For headlines, tight tracking and semi-bold weights are used to convey a sense of modern authority.

**Geist** is introduced as a secondary mono-spaced-influenced sans for labels, data points, and technical metadata. This creates a "developer-tool" feel that reinforces the firm’s data-driven methodology.

**Scale & Hierarchy:**
- Use **Display-LG** for hero statements and key metrics.
- **Body-MD** is the default for report content and analysis.
- **Label-SM** (Uppercase) is strictly for categorization and small metadata tags.

## Layout & Spacing

The layout philosophy follows a **Rigid Technical Grid** with generous, intentional whitespace (the "Apple" influence). 

- **Grid:** A 12-column fluid grid on desktop, transitioning to a 4-column grid on mobile. 
- **Rhythm:** An 8px base unit (derived from a 4px mini-unit) governs all padding and margins to ensure mathematical consistency.
- **Vertical Spacing:** Use `section-gap` to clearly separate different thematic blocks of data. This "breathable" layout prevents the information-heavy content from feeling overwhelming.
- **Alignment:** All technical widgets and data cards should align strictly to the grid edges to maintain a sense of precision and order.

## Elevation & Depth

To maintain a "Vercel-like" technical minimalism, the design system utilizes **Tonal Layering** and **Low-Contrast Outlines** over heavy shadows.

- **Surface Levels:** 
  - Level 0: Pure white background (#FFFFFF).
  - Level 1: Off-white surface (#F8FAFC) for container backgrounds.
  - Level 2: Subtle border (1px) in `Slate-200` to define card boundaries.
- **Shadows:** Use only one "Ambient Shadow" for floating modals or active dropdowns: a soft, highly diffused 10% opacity slate shadow with no offset, making the element appear to lift naturally from the page.
- **Interactivity:** Use subtle background color shifts (e.g., Slate-50) for hover states rather than increasing shadow depth, keeping the UI flat and professional.

## Shapes

The shape language is **Soft yet Structured**. 

- **Base Radius:** A consistent 0.25rem (4px) radius is used for primary UI elements like input fields, small buttons, and tags. This sharp radius communicates technical precision.
- **Container Radius:** Larger components like cards or data widgets use 0.5rem (8px) to provide a modern, accessible feel without appearing "playful."
- **Interactive Elements:** Checkboxes and radio buttons maintain the sharp 4px radius, reinforcing the systematic, non-rounded aesthetic.

## Components

### Buttons
- **Primary:** Solid Slate Navy with white text. High contrast, sharp corners.
- **Secondary:** Outline-style with 1px border.
- **Ghost:** Innovation Blue text with no background, used for secondary actions in data tables.

### Data Cards
- **Structure:** Level 1 surface, 1px border. No shadow.
- **Header:** Includes a Geist-font label and a primary metric in Inter Bold.
- **Trend Indicators:** Small Green/Red micro-sparklines to show health metric trajectories.

### Input Fields
- **Style:** Clean, 1px Slate-200 border. Focus state uses a 2px Innovation Blue "halo" (outline-offset).
- **Labels:** Always Geist-font, semi-bold, uppercase, positioned above the field.

### Data Widgets & Chips
- **Status Chips:** Small, pill-shaped tags with low-opacity background fills (e.g., 10% Green for "Active").
- **Interactive Charts:** High-contrast line and bar charts using the Primary Navy and Secondary Green. Avoid multi-colored "rainbow" charts; stick to the brand palette for a scientific look.

### Navigation
- **Desktop:** A high-density top-bar with a "Glassmorphic" blur effect (backdrop-filter) when scrolling, keeping the technical focus visible at all times.