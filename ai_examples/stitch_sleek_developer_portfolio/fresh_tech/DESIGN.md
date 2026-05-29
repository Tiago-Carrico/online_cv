---
name: Fresh Tech
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
  on-surface-variant: '#464555'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e4'
  on-secondary-container: '#006f66'
  tertiary: '#7e3000'
  on-tertiary: '#ffffff'
  tertiary-container: '#a44100'
  on-tertiary-container: '#ffd2be'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb695'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7b2f00'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
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
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max-width: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system is a high-clarity, professional framework tailored for software engineering portfolios. It balances the precision of an Integrated Development Environment (IDE) with the polished aesthetics of modern tech marketing. The personality is "Intelligent Minimalism"—prioritizing deep focus, technical authority, and clean execution.

The style is **Modern Corporate** with a **Technical Twist**. It utilizes expansive white space, crisp structural lines, and purposeful motion to guide the viewer through complex information. By pairing human-centric sans-serifs with developer-centric monospaced type, the design system bridges the gap between the code and the user interface.

## Colors
The palette is built on a foundation of "Fresh Tech" neutrals. The background uses a very light Slate to reduce eye strain while maintaining a crisp look, while pure White is reserved for elevated surface containers to create a distinct visual hierarchy.

- **Primary (Indigo):** Used for primary actions, active states, and brand-critical elements. It suggests reliability and depth.
- **Secondary (Teal):** Used for success states, secondary highlights, and "building/output" metaphors. It provides a vibrant, energetic counterpoint to the indigo.
- **Surface Neutrals:** A range of Slates (50–900) provides high-contrast text and subtle structural borders.

## Typography
This design system employs a dual-font strategy to reinforce the engineering narrative. 

**JetBrains Mono** is the voice of the engineer. It is used for headlines, labels, and metadata. This monospaced font brings a "source code" aesthetic to the surface, making headers feel structural and intentional.

**Inter** handles the heavy lifting of communication. It is used for all body copy, descriptions, and UI controls where legibility and reading speed are paramount. The combination ensures the portfolio feels like a sophisticated technical document rather than a generic marketing site.

## Layout & Spacing
The layout follows a **Fluid Grid** model based on an 8px base unit. 

- **Grid:** A 12-column system is used for desktop, collapsing to 4 columns for mobile.
- **Rhythm:** Vertical spacing should be generous to allow the "Fresh Tech" aesthetic to breathe. Use `32px`, `64px`, or `128px` for section spacing.
- **Alignment:** All technical labels (JetBrains Mono) should align strictly to the left edge of body text blocks to maintain a clean vertical axis reminiscent of code indentation.

## Elevation & Depth
Depth is achieved through **Tonal Layering** and **Ambient Indigo Shadows**. 

Instead of traditional neutral shadows, this system uses low-opacity indigo-tinted shadows to keep the "light mode" from feeling washed out. 
- **Level 0 (Background):** Slate 50.
- **Level 1 (Cards/Surface):** Pure White with a 1px border of Slate 200.
- **Level 2 (Hover/Active):** Pure White with a soft, diffused Indigo shadow (rgba(79, 70, 229, 0.08)) and no border.

Avoid heavy blurs; maintain a crisp, engineered feel by using thin borders as the primary separator.

## Shapes
The shape language is **Medium-Rounded**. With a base `0.5rem` (8px) radius, the UI feels modern and approachable without losing the professional "grid-like" structure required for a technical portfolio. 

Large containers (like project hero cards) should use `rounded-xl` (24px) to create a softer, more inviting frame for screenshots, while interactive components like buttons and inputs remain at the standard `rounded` (8px) for a focused feel.

## Components
- **Buttons:** Primary buttons are solid Indigo with white Inter text. Secondary buttons use a Slate 200 border with Indigo text. Use JetBrains Mono for button labels only in "Actionable Code" contexts.
- **Input Fields:** Use a 1px Slate 200 border that transitions to a 2px Indigo border on focus. Place labels above the field in JetBrains Mono.
- **Cards:** White backgrounds with 1px Slate 200 borders. Title headers should be JetBrains Mono.
- **Chips/Tags:** Used for "Tech Stack" indicators. High-contrast Teal backgrounds with dark Teal text (for secondary) or Light Slate with Slate 700 text (for neutral).
- **Code Snippets:** Use a specialized container with a slightly darker Slate 100 background and a "traffic light" window control aesthetic in the top left to mimic an IDE.
- **Lists:** Use custom Teal chevron icons for bullet points to reinforce the "terminal prompt" or "greater than" coding syntax.