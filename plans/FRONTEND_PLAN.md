# Frontend Implementation Plan

## Observations from `website_code_v1`
The updated React codebase introduces several advanced architectural and UX decisions compared to the initial HTML prototype:

1. **Dual Archetype System (Theme + Data Switching)**:
   - The application doesn't just switch colors; it switches entire data profiles (e.g., `Alex Morgan` for Fresh Tech vs `DEV_ARCHITECT` for Obsidian Synth).
   - The `activeArchetype` state controls both the data source and the theme style simultaneously.

2. **Styling & Theming Engine**:
   - Instead of relying entirely on CSS variables, the application heavily utilizes Tailwind CSS utility classes with ternary operators (`${isDark ? 'dark-classes' : 'light-classes'}`) and the `dark` class on the `documentElement`.
   - The Obsidian Synth theme uses deep darks (`#06060e`), purples, and pinks. The Fresh Tech theme uses clean lights (`#f8f9ff`), indigos, and emeralds.

3. **Page Structure & Layout Updates**:
   - **Floating Switcher**: A global top bar (`z-[60]`) above the main navigation contains the archetype toggle buttons and a "Customize Resume" trigger.
   - **Main Navbar**: Sticky navigation below the switcher with anchor links.
   - **Hero Section**: Includes a dynamic `<CodePlayground>` widget instead of a static abstract graphic.
   - **Projects Section**: Features "Blueprint Sandbox" cards. Clicking them opens an interactive `<ProjectVisualization>` modal.
   - **Contact Section**: Features an interactive `<ContactForm>`.
   - **Resume Customization**: A `<ResumeModal>` allows users to edit profile meta-data before generating a resume.

## What is Needed to Build the Page

To implement this advanced design in our Vite + React project, we need the following:

### 1. Configuration & Global Styles
- **`tailwind.config.js`**: Enable `darkMode: 'class'` and define specific colors used in the design (e.g., `#06060e`, `#f8f9ff`). Add `JetBrains Mono` and `Inter` fonts.
- **`index.css`**: Keep it minimal, mostly for importing fonts and Tailwind directives. The grid background logic is handled dynamically via inline styles in `App.tsx`.

### 2. Data Structure (`src/data.ts` or `src/data/`)
- Export two distinct profiles (`alexMorganProfile` and `devArchitectProfile`) containing bio, roles, experience arrays, project arrays, and code snippets.

### 3. React Components (in `src/components/`)
- `ProjectVisualization.jsx`: Modal for displaying detailed project architecture.
- `ResumeModal.jsx`: Modal for customizing and viewing the resume.
- `CodePlayground.jsx`: An interactive code snippet viewer for the hero section.
- `ContactForm.jsx`: The contact section form logic.

### 4. Main Application (`src/App.jsx`)
- Manage state for `activeArchetype`, `selectedProject`, `showResume`, and `isMobileMenuOpen`.
- Implement the `useEffect` hook to toggle the `dark` class on the `<html>` root based on `activeArchetype`.
- Assemble the UI layout: Global Switcher -> Navbar -> Hero -> About -> Skills -> Experience -> Projects -> Contact -> Footer.

### 5. Assets & Tooling
- Install `lucide-react` for the extensive iconography used throughout the app.
- Install `@fontsource/jetbrains-mono` and `@fontsource/inter`.

## Mockup Validation
Here is the generated mockup of the updated UI based on `website_code_v1`:

![Website Code V1 Mockup](file:///C:/Users/ferre/.gemini/antigravity-ide/brain/d8d13d22-a1ba-4fe4-92d1-a93e7c99a91a/website_code_v1_mockup_1779404902954.png)
