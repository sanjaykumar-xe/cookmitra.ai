# DESIGN.md — CookMitra Design System & Brand Guide

This document serves as the single source of truth for the visual design system, brand identity, component conventions, typography, and interaction patterns across all CookMitra pages and features.

---

## 1. Brand Identity & Color Palette

### Primary Brand Color
- **Primary Brand Color**: `#F4A21A` (Warm Amber-Orange)
- **Primary Foreground / Text on Brand**: `#FFFFFF` or High-Contrast Dark (`#1E1B18`) for accessibility.

### Color Hierarchy
- **Primary Accent**: `#F4A21A` (Warm Amber)
- **Background Tones**:
  - Light Theme Background: `#FAFAF9` / `hsl(40 20% 98%)`
  - Surface Card Background: `#FFFFFF` / `hsl(0 0% 100%)`
  - Dark Theme Background: `#121110` / `hsl(40 10% 7%)`
  - Dark Theme Card Surface: `#1C1A17` / `hsl(40 10% 11%)`
- **Text & Contrast**:
  - Headings & Titles: High contrast dark text `#1C1917` (Light) / `#F5F5F4` (Dark)
  - Body & Description Text: Comfortable contrast `#44403C` (Light) / `#D6D3D1` (Dark) — *never overly faint or illegible*.

### Feature Category Pastel Icon Background Tints
Icons are housed in light, pastel-tinted rounded-square containers (`rounded-xl p-2.5`):
- **AI Features** (AI Recipe Generator, Chef Momo Chat): **Amber Tint** (`bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400`)
- **Health & Healing Foods**: **Pink Tint** (`bg-pink-500/10 text-pink-600 dark:bg-pink-500/20 dark:text-pink-400`)
- **Reference & Encyclopedia**: **Teal Tint** (`bg-teal-500/10 text-teal-600 dark:bg-teal-500/20 dark:text-teal-400`)
- **Planning & Meal Planner**: **Blue Tint** (`bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400`)

---

## 2. Logo & Iconography

### Logo Specification
- **Logo Icon**: `ti-flame` (Tabler Icons outline style) in `#F4A21A`.
- **Logo Style**: Thin outline style, no background container, paired with brand typography.

### Iconography Guidelines
- **Icon Set**: Tabler Icons (`ti-` outline variants) or Lucide equivalent in thin outline style.
- **Icon Presentation**: Single color, thin outline stroke width (`strokeWidth={1.75}`).
- **Icon Enclosure**: Enclosed in light pastel-tinted rounded-square backgrounds mapped by feature category.

---

## 3. Typography & Hierarchy

### Font Families
- **Headline / Title Font**: `Playfair Display`, serif (or `font-serif`).
- **Body & Subtitle Font**: `Inter`, `Noto Sans`, sans-serif (or `font-sans`).

### Strict Typography Rule
Serif headlines (`font-serif`, `Playfair Display`) must be used consistently for:
1. **Page Titles & Main Hero Headings** (`h1`, `text-3xl` to `text-5xl`, `font-serif font-bold`)
2. **Section Headers & Category Titles** (`h2`, `h3`, `text-xl` to `text-2xl`, `font-serif font-semibold`)
3. **Individual Card & Recipe Titles** (e.g. recipe name on cards, pantry item group titles, feature card headers).

*Body text, instructions, ingredients, badges, and buttons use clean sans-serif.*

### Body & Description Text Sizing & Readability
- **Standard Body Copy**: `text-sm` (14px) or `text-base` (16px) with `leading-relaxed` (1.625 line-height).
- **Card Descriptions & Subtitles**: `text-sm` (14px) `font-medium leading-relaxed` (never smaller than 14px for main paragraph content).
- **Secondary Metadata & Badges**: `text-xs` (12px) `font-semibold uppercase tracking-wider`.
- **Contrast & Legibility**: Body copy MUST maintain comfortable contrast ratio against background surfaces (`text-stone-700` / `#44403C` in light mode; `text-stone-300` / `#D6D3D1` in dark mode). Never use overly light-gray or faint muted tints for readable copy.

---

## 4. Card & Layout Conventions

### Density & Whitespace
- **Density**: Tight, professional UI density inspired by Linear and Notion (avoiding oversized, bulky padding or excessive empty space).
- **Internal Padding**: `p-4` to `p-5` for standard cards; `p-6` for major section containers.

### Edge & Shadow Styling
- **Corners**: Moderate rounded corners (`rounded-2xl` or `rounded-xl`).
- **Borders & Shadows**: Subtle 1px borders (`border border-stone-200/80 dark:border-stone-800/80`) paired with soft, non-heavy shadows (`shadow-sm hover:shadow-md transition-shadow duration-300`).

---

## 5. Buttons & Action States

### Primary Buttons
- **Shape**: Solid **pill-shaped** buttons (`rounded-full`).
- **Fill**: Warm Amber (`bg-[#F4A21A] hover:bg-[#E09015] text-white font-medium shadow-sm px-6 py-2.5`).

### Secondary Buttons
- **Shape**: Outlined or ghost **pill-shaped** buttons (`rounded-full`).
- **Style**: `border border-stone-300 dark:border-stone-700 bg-transparent hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 px-5 py-2.5`).

### Disabled Button States
- **Contrast Requirement**: Disabled buttons MUST remain clearly legible with strong contrast (never washed-out or pale gray on pale white).
- **Style**: Muted dark contrast (`bg-stone-300 text-stone-600 cursor-not-allowed dark:bg-stone-800 dark:text-stone-400`) or high-contrast dark text over muted brand fill.

---

## 6. Motion & Scroll Animation Conventions

- **Duration**: Scroll-triggered entrance animations use a visible duration of **0.8s to 1.0s** (`duration={0.8}` to `1.0`).
- **Stagger Delays**: Multi-item grids or lists use staggered entrance delays of **150ms to 200ms** between items (`delay={index * 0.15}`).
- **Viewport Trigger Offset**: Motion triggers must use `margin: "0px 0px -100px 0px"` (or `amount: 0.2`) so motion is smoothly visible during normal scroll speeds rather than snapping instantly into view.

---

## 7. Layout & Footer Visibility Rules

### Browsing & Informational Pages (Footer REMAIN VISIBLE)
The application footer IS SHOWN on browsing and content exploration pages:
1. Landing Page (`/`)
2. Home Page (`/home`)
3. Recipes Explorer (`/recipes`)
4. Recipe Detail Page (`/recipes/[id]`)
5. Healing Foods (`/healing-foods`)
6. Encyclopedia (`/encyclopedia`)
7. Community (`/community`)
8. Saved Recipes (`/my-recipes`)

### Task-Focused & Interactive Pages (Footer IS REMOVED)
The application footer IS HIDDEN/REMOVED on focused workspace pages:
1. AI Recipe Generator (`/ai-recipes`)
2. Cook Mode (`/cook-mode`)
3. Chef Momo AI Chat (`/ai-chat`)
4. Login (`/login`)
5. Signup (`/signup`)
6. Healthy Meal Planner (`/healthy-meal-planner`)
7. User Settings (`/settings`)

---

## 8. Card Interaction Patterns (3D Flip Card Mechanics)

Standard reusable 3D flip card component pattern established in `src/app/globals.css`:

### Structure & CSS Utility Specifications
- **Perspective Container**: `.flip-card-container` with `perspective: 1500px;`
- **Inner Rotating Card**: `.flip-card-inner` with `position: relative; width: 100%; height: 100%; transform-style: preserve-3d; transition: transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);`
- **Flipped Trigger Class**: `.flip-card-inner.is-flipped` applies `transform: rotateY(180deg);`
- **Front & Back Faces**: `.flip-card-front` and `.flip-card-back` share:
  ```css
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  top: 0;
  left: 0;
  ```
  - Front Face At Rest: `transform: rotateY(0deg);`
  - Back Face At Rest: `transform: rotateY(180deg);`

### Device Adaptability Rule
- **Desktop Viewports**: Flip triggers on card hover (`onMouseEnter={() => setIsFlipped(true)}` / `onMouseLeave={() => setIsFlipped(false)}`).
- **Touch & Mobile Viewports**: Flip toggles on tap/click (`onClick={() => setIsFlipped(!isFlipped)}`).

*This 3D flip mechanic is the standard pattern for interactive feature cards and recipe cards across the application and should be reused rather than reinvented.*

---

## 9. Data Display Integrity & Statistics Policy

### Dynamic Sourcing Policy
- All numeric statistics and collection totals (e.g. recipe count, pantry item count, community notes count) MUST be dynamically calculated from live data sources (`recipes.length` or active Firestore queries) rather than hardcoding aspirational marketing copy (e.g. "1000+").

### Recipe Count Standard
- **Ground-Truth Database Count**: Exactly **934 recipes** across all 28 Indian states & union territories (sourced from `src/lib/recipes/index.ts`).
- **Display Consistency**: All pages displaying total recipe counts (Landing `/`, Home `/home`, Recipe Explorer `/recipes`) MUST reflect the dynamic count (**934 recipes**) and filtered output formats (`Showing X of 934 recipes`).

---

## 10. Responsive & Mobile Breakpoint Conventions

### Breakpoint Tokens
- **Standard Tailwind Breakpoints**:
  - `sm`: `640px` (Small tablets / large phones)
  - `md`: `768px` (Tablets / small laptops)
  - `lg`: `1024px` (Desktops)
  - `xl`: `1280px` (Large desktops)

### Responsive Layout & Grid Collapse Rules
- **Recipe & Card Grids**: 4-column desktop grids collapse to 3-column on `lg`, 2-column on `md`, and 1-column full-width on mobile (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`).
- **Feature Grids**: 3-column grids collapse to single column on mobile (`grid-cols-1 md:grid-cols-3`).
- **Container Padding Scaling**: `px-4 sm:px-6 lg:px-8` for page wrappers; `p-4 sm:p-5` for card padding.
- **Hero Headings**: Scale fluidly (`text-3xl sm:text-4xl md:text-5xl`).

### Mobile Component Adaptations
1. **Navigation**: Persistent icon sidebar (`hidden md:flex`) transitions to responsive hamburger sheet / top-bottom mobile nav bar (`flex md:hidden`).
2. **Interactive Cards**: 3D Flip cards toggle on tap (`onClick`) on touch devices rather than hover.
3. **Modal Dialogs & Filters**: Render as full-width slide-over drawers or bottom sheets on mobile viewports (`w-full sm:max-w-md`).

---

## 11. Summary of Tokens & Rules for Code Generation

| Category | Specification |
| :--- | :--- |
| **Brand Color** | `#F4A21A` (Warm Amber-Orange) |
| **Logo** | `ti-flame` Tabler Icon in `#F4A21A`, thin outline style, no background |
| **Typography** | Serif (`Playfair Display`) for Page Titles, Section Headers, AND Card/Recipe Titles; Sans-serif (`Inter`) for body |
| **Body Font Size** | `text-sm` (14px) / `text-base` (16px) with `leading-relaxed` (min 14px for copy); `#44403C` light / `#D6D3D1` dark |
| **Card Density** | Tight Linear/Notion-style density (`p-4` to `p-5`), soft shadows, `rounded-2xl` |
| **3D Flip Card** | `.flip-card-container` (`perspective: 1500px`), `.flip-card-inner` (`0.6s cubic-bezier`), `backface-visibility: hidden` |
| **Data Integrity** | Dynamic data sourcing (`recipes.length` = **934 recipes**) across all summary & explorer pages |
| **Responsive Rules** | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`; `px-4 sm:px-6 lg:px-8`; Mobile touch tap flips |
| **Feature Tints** | Amber (AI), Pink (Healing Foods), Teal (Encyclopedia), Blue (Planning) |
| **Buttons** | Solid Amber Pill (`rounded-full`) for primary; Ghost Pill for secondary; High-contrast disabled |
| **Animations** | `0.8s - 1.0s` duration, `150ms - 200ms` stagger, `-100px` viewport margin |
| **Footer Policy** | Visible on browsing pages; Hidden on task-focused/interactive pages |
