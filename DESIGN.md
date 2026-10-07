---
name: Luminous Precision
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353943'
  surface-container-lowest: '#0a0e17'
  surface-container-low: '#181b25'
  surface-container: '#1c1f29'
  surface-container-high: '#262a34'
  surface-container-highest: '#31353f'
  on-surface: '#dfe2ef'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#dfe2ef'
  inverse-on-surface: '#2c303a'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#4cd7f6'
  on-tertiary: '#003640'
  tertiary-container: '#009eb9'
  on-tertiary-container: '#002f38'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#0f131c'
  on-background: '#dfe2ef'
  surface-variant: '#31353f'
typography:
  headline-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.03em
  headline-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 38px
    fontWeight: '800'
    lineHeight: 46px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-tablet: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an ultra-refined, high-performance visual identity for a bespoke digital agency. The aesthetic merges **Dark Minimalist Precision** with **Atmospheric Glassmorphism**, projecting uncompromising engineering rigor, high-end creative prowess, and architectural clarity.

### Target Audience & Emotional Response
The target demographic includes tech founders, enterprise design leaders, and progressive product executives seeking transformative web experiences. The interface evokes:
- **Authority and Technical Precision:** Clean grids, mathematical spacing ratios, and razor-sharp typographic hierarchy.
- **Atmospheric Depth:** Layered translucent planes that invite exploration without sensory overload.
- **Controlled Kinetic Energy:** Targeted, high-luminance electric pulses and gradient shears that direct gaze towards strategic conversion points.

### Aesthetic Principles
- **Luminous Chiaroscuro:** Deep, velvety slate-black canvases contrasted against controlled, localized radial light blooms and optical flares.
- **Tactile Glass Layering:** Translucent cards built with hairline glowing strokes (`rgba(255, 255, 255, 0.08)`), sub-pixel inner highlights, and progressive backdrop filtering.
- **Restraint Over Excess:** Glows and chromatic gradients are reserved strictly for key actions, interactive states, and status anchors.

## Colors

The color architecture is built around layered slate-zinc depths illuminated by high-chroma kinetic accents.

### Canvas & Surface Hierarchy
- **Canvas Base (`#090D16`):** The foundational absolute dark slate background.
- **Surface Elevation 1 (`#0D1322`):** Primary section containers and subtle recessed areas.
- **Surface Elevation 2 (`#131B2E`):** Floating modules, interactive cards, and glass backdrops.
- **Surface Border Glow (`rgba(255, 255, 255, 0.08)`): Base perimeter hairline stroke for structural clarity.

### Chromatic Accents
- **Electric Primary (`#3B82F6` / `#2563EB`):** Applied to core interactive triggers, navigation indicators, and directional accents.
- **Vibrant Violet (`#8B5CF6`):** Secondary gradient stops, luxury agency status badges, and tertiary visual interest.
- **Cyan Highlight (`#06B6D4`):** Real-time telemetry, active micro-metrics, and micro-interaction glow terminations.

### Light Radiance Tokens
- **Radial Ambient Bloom:** `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(59, 130, 246, 0.12), transparent 40%)`.
- **Primary Glow:** `0 0 24px -4px rgba(59, 130, 246, 0.45)`.
- **Violet Glow:** `0 0 24px -4px rgba(139, 92, 246, 0.4)`.

## Typography

Typography pairs the structural, geometry-driven modernism of **Plus Jakarta Sans** with the programmatic precision of **Inter**.

### Typographic Roles
- **Display & Headings (Plus Jakarta Sans):** Tightly tracked display hierarchy with deliberate negative letter-spacing creates an assertive, editorial technological presence.
- **Body & Continuous Reading (Inter):** Neutral, hyper-legible shapes tuned for low-light screens that retain clarity across multi-column data views and explanatory pitch decks.
- **Badges, Metrics & Overlines:** Monospaced tracking styles using uppercase `label-sm` with widened tracking (`0.05em`) to evoke technical diagnostics and instrumentation.

## Layout & Spacing

The layout is architected around a flexible 12-column grid system bounded by a maximum container width of `1360px`.

### Grid System & Form Factors
- **Desktop (1280px and above):** 12 columns with `1.5rem` (`24px`) gutters and generous `4rem` (`64px`) margins to frame bespoke creative work with editorial whitespace.
- **Tablet (768px - 1279px):** 8 columns, `1.25rem` (`20px`) gutters, `2rem` (`32px`) margins. Multi-column showcase cards compress from 3-up to 2-up grids.
- **Mobile (Below 768px):** 4 columns, `1rem` (`16px`) gutters, `1.25rem` (`20px`) margins. Structural layouts stack into unified single-column vertical journeys.

### Vertical Rhythm & Pacing
Vertical spacing relies on a strict 8px/4px scale. Section boundaries utilize generous breathing room (typically `space-xl` or extended multipliers such as `5rem` to `8rem`) to allow atmospheric glows to dissipate organically without crowding adjacent content blocks.

## Elevation & Depth

Depth in this system is optical and atmospheric rather than traditional drop-shadow separation. Visual layers exist in physical space through luminescence and transmissive material qualities.

### Depth Hierarchy

1. **Ground Plane (Base Canvas):** `#090D16` matte finish with static low-frequency noise (opacity 0.02) to eliminate gradient banding.
2. **Atmospheric Field:** Ambient radial gradients anchored behind interactive regions with soft gaussian blur values between `80px` and `140px`.
3. **Glass Layer 1 (Surface Cards):**
   - Background: `rgba(13, 19, 34, 0.65)`.
   - Backdrop Filter: `blur(16px) saturate(180%)`.
   - Border: Hairline `1px solid rgba(255, 255, 255, 0.08)`.
   - Internal Sheen: Top-to-bottom subtle linear wash (`rgba(255, 255, 255, 0.04)` to `rgba(255, 255, 255, 0)`).
4. **Glass Layer 2 (Modals, Overlays & Flyouts):**
   - Background: `rgba(19, 27, 46, 0.85)`.
   - Backdrop Filter: `blur(24px) saturate(200%)`.
   - Border: Hairline `1px solid rgba(59, 130, 246, 0.25)`.
   - Shadow: `0 20px 48px -8px rgba(0, 0, 0, 0.7), 0 0 32px -4px rgba(59, 130, 246, 0.15)`.

### Interactive Border Illuminations
Hover states trigger an interpolated border brightening from `rgba(255, 255, 255, 0.08)` to active `rgba(59, 130, 246, 0.45)`, simulating current passing through a structural conduit.

## Shapes

The design system adopts a balanced, refined curvature language (Level 2: Rounded). This curvature softens technical rigidity while maintaining clean structural alignment.

### Radius Assignments
- **Core Interactive Elements & Form Controls:** `0.5rem` (`8px`) base radius for buttons, input fields, dropdown triggers, and interactive pills.
- **Surface Cards & Structural Modules (`rounded-lg`):** `1rem` (`16px`) corner radius for content modules, case study showcases, and glass panels.
- **Major Hero Containers & Modals (`rounded-xl`):** `1.5rem` (`24px`) corner radius for primary overlays and full-bleed narrative framing cards.
- **Pill Exceptions:** Status badges, tag chips, and micro telemetry pills strictly maintain a continuous curved pill geometry (`9999px`) to contrast against rectilinear card architecture.

## Components

### Buttons & Conversion CTAs
- **Primary Kinetic Button:**
  - Background: Gradient fill from `#2563EB` to `#3B82F6` with an inner top border of `1px solid rgba(255, 255, 255, 0.25)`.
  - Shadow: `0 8px 20px -4px rgba(37, 99, 235, 0.5)`.
  - Hover: Subtle expansion with an increased spread aura (`0 0 28px rgba(59, 130, 246, 0.6)`) and light transition offset.
  - Typography: `label-md` in pure `#FFFFFF`.
- **Secondary Ghost Glass:**
  - Background: `rgba(255, 255, 255, 0.03)`.
  - Border: `1px solid rgba(255, 255, 255, 0.12)`.
  - Hover: Background lifts to `rgba(255, 255, 255, 0.07)`, border glows electric blue (`rgba(59, 130, 246, 0.5)`).

### Glassmorphism Cards
- Structural containers built on `rgba(13, 19, 34, 0.6)` with `backdrop-filter: blur(16px)`.
- Enclosed with a crisp `1px` stroke of `rgba(255, 255, 255, 0.08)`.
- Interactive cards feature a mouse-following subtle radial gradient overlay (`rgba(59, 130, 246, 0.08)` to `transparent`) on pointer hover.

### Badges & Status Chips
- Pill silhouette (`rounded-full`) with `label-sm` uppercase typography.
- Filled with `rgba(59, 130, 246, 0.1)` tint and a perimeter stroke of `rgba(59, 130, 246, 0.3)`.
- Embellished with an active pulsing neon beacon dot (Cyan `#06B6D4` or Violet `#8B5CF6`) with ping micro-animation.

### Form Inputs & Text Fields
- Background: `#0D1322` with a flush inner depth.
- Border: `1px solid rgba(255, 255, 255, 0.1)`.
- Typography: `body-md` in `#F8FAFC`, placeholder in `#64748B`.
- Focus State: Smooth transit to a dual-ring border (`1px solid #3B82F6`) accompanied by an outer illumination spread: `0 0 16px -2px rgba(59, 130, 246, 0.4)`.

### Selection Controls (Checkboxes & Radios)
- Base: Unchecked container `#0D1322` with `1px solid rgba(255, 255, 255, 0.15)`.
- Checked: Core fills with `#3B82F6` and cyan check icon, producing a contained `0 0 12px rgba(59, 130, 246, 0.6)` bloom.

### Agency Feature: Project Capability Matrix & Showcase Lists
- Minimalist horizontal rows segmented by hairline dividers (`rgba(255, 255, 255, 0.06)`).
- Hovering an entire row triggers a smooth translateX shift of `+8px` on the title, accompanied by an instant fade-in of an ambient neon violet/blue accent highlight behind the row.