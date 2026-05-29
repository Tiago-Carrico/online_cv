---
name: Obsidian Synth
colors:
  surface: '#13121c'
  surface-dim: '#13121c'
  surface-bright: '#393842'
  surface-container-lowest: '#0d0d16'
  surface-container-low: '#1b1b24'
  surface-container: '#1f1f28'
  surface-container-high: '#292933'
  surface-container-highest: '#34343e'
  on-surface: '#e4e1ee'
  on-surface-variant: '#cfc2d6'
  inverse-surface: '#e4e1ee'
  inverse-on-surface: '#302f39'
  outline: '#988d9f'
  outline-variant: '#4d4354'
  surface-tint: '#ddb7ff'
  primary: '#ddb7ff'
  on-primary: '#490080'
  primary-container: '#b76dff'
  on-primary-container: '#400071'
  inverse-primary: '#842bd2'
  secondary: '#ffb0cd'
  on-secondary: '#640039'
  secondary-container: '#aa0266'
  on-secondary-container: '#ffbad3'
  tertiary: '#fabc4e'
  on-tertiary: '#432c00'
  tertiary-container: '#bd871a'
  on-tertiary-container: '#3a2600'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#f0dbff'
  primary-fixed-dim: '#ddb7ff'
  on-primary-fixed: '#2c0051'
  on-primary-fixed-variant: '#6900b3'
  secondary-fixed: '#ffd9e4'
  secondary-fixed-dim: '#ffb0cd'
  on-secondary-fixed: '#3e0022'
  on-secondary-fixed-variant: '#8c0053'
  tertiary-fixed: '#ffdead'
  tertiary-fixed-dim: '#fabc4e'
  on-tertiary-fixed: '#281900'
  on-tertiary-fixed-variant: '#604100'
  background: '#13121c'
  on-background: '#e4e1ee'
  surface-variant: '#34343e'
typography:
  display:
    fontFamily: JetBrains Mono
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  max-width: 1200px
---

## Brand & Style
The design system is engineered for a high-performance developer portfolio, emphasizing technical precision and a sophisticated "night-owl" aesthetic. The style is a hybrid of **Minimalism** and **Glassmorphism**, set against a **High-Contrast** true dark background. 

The emotional goal is to evoke a sense of focused, late-night engineering—clean, authoritative, and modern. Visuals are grounded by architectural alignment, using neon accents not as decoration, but as functional signifiers for interactive elements and data highlights.

## Colors
The palette is built on a "True Dark" foundation to ensure maximum OLED efficiency and visual depth. 

- **Base:** `#06060e` (Ink/Obsidian) serves as the universal background.
- **Primary:** `#a855f7` (Neon Purple) is used for primary actions, active states, and critical technical labels.
- **Secondary:** `#ec4899` (Soft Pink) is reserved for supplementary highlights, code syntax nuances, and decorative accents.
- **Surface:** Surfaces use a layering technique of the base color with a very low-opacity white overlay or a subtle purple-tinted border to create separation without breaking the dark immersion.

## Typography
The typographic hierarchy contrasts the "engineered" feel of JetBrains Mono with the high readability of Inter.

- **Headings & Data:** JetBrains Mono is used for all headings, labels, and technical data points. It should always appear with slightly tighter letter-spacing in large formats and standard spacing for labels.
- **Body Content:** Inter is used for all long-form text, descriptions, and CV entries to ensure accessibility and professional clarity.
- **Visual Weight:** Use font weight to establish hierarchy rather than size alone. All "Display" and "Headline" types should be semi-bold or bold to stand out against the dark background.

## Layout & Spacing
The layout follows a **Fixed Grid** model for desktop, centered within the viewport to create a structured, editorial CV feel.

- **Grid:** A 12-column grid system with generous 24px gutters.
- **Structure:** Content sections are separated by significant vertical whitespace (80px–120px) to allow the high-contrast elements to breathe.
- **Adaptation:** On mobile, the layout collapses to a single column with 20px side margins. Grid containers should transition from horizontal flex layouts to vertical stacks.
- **Rhythm:** All spacing (padding, margins) must be multiples of the 4px base unit.

## Elevation & Depth
This design system avoids traditional drop shadows in favor of **Tonal Layering** and **Glassmorphism**.

- **Z-Axis:** Depth is communicated through border intensity and background opacity.
- **Level 0 (Base):** `#06060e`.
- **Level 1 (Cards/Sections):** A translucent fill of `rgba(255, 255, 255, 0.03)` with a 1px solid border of `rgba(168, 85, 247, 0.1)`. 
- **Level 2 (Overlays/Popovers):** Higher backdrop-blur (20px) and a brighter border `rgba(168, 85, 247, 0.3)`.
- **Glow:** For interactive states (like a hovered project card), use a very soft, diffused outer glow using the primary color (`#a855f7`) at 10% opacity, rather than a black shadow.

## Shapes
The shape language is "Soft-Technical." Elements use a small, consistent radius to maintain a modern feel while remaining sharp and disciplined.

- **Components:** Standard buttons and input fields use a `0.25rem` (4px) radius.
- **Containers:** Project cards and large section containers use a `0.5rem` (8px) radius.
- **Icons:** Use linear, 2px stroke icons to match the technical weight of JetBrains Mono.

## Components

### Buttons
- **Primary:** Solid `#a855f7` background with `#06060e` text for maximum contrast. No border.
- **Secondary/Ghost:** Transparent background, 1px border of `#a855f7`, and `#a855f7` text.
- **Interaction:** On hover, primary buttons should increase brightness slightly; ghost buttons should gain a subtle background tint (`rgba(168, 85, 247, 0.1)`).

### Cards (Project/Experience)
- **Style:** Glassmorphic containers with a `backdrop-filter: blur(12px)`. 
- **Border:** A consistent 1px stroke using the subtle purple-tinted border color.
- **Header:** Use `label-md` for metadata (dates, technologies) in the secondary pink color.

### Chips/Tags
- Small, uppercase `label-md` text.
- Background: `rgba(168, 85, 247, 0.1)`.
- Border: 1px solid `rgba(168, 85, 247, 0.2)`.
- Use these for tech-stack listings and status indicators.

### Inputs
- **Field:** Dark fill (`#000000`) with a subtle 1px border. 
- **Focus:** Border changes to primary purple with a 2px outer "ring" of the same color at 20% opacity.
- **Text:** White for input, `text_muted` for placeholders.

### Lists
- Use custom bullets: 4px squares or 2px horizontal lines in the primary purple color to maintain the technical/code-editor aesthetic.