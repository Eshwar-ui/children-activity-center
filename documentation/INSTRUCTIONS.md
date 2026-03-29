# Development Instructions

This guide explains how to work on the BrightSteps template without breaking the shared structure described in `updated_system_instructions.md`.

## 1. Installation

1. Download or extract the project into a local folder.
2. Keep the existing structure intact:
   - `assets/`
   - `pages/`
   - `documentation/`
   - root files such as `index.html`, `README.md`, `robots.txt`, and `sitemap.xml`
3. Preview the root home page by opening `index.html`.
4. Preview internal pages by opening files inside `pages/`.

## 2. Shared asset locations

- CSS: `assets/css/`
- JavaScript: `assets/js/`
- Fonts: `assets/fonts/`
- Images: `assets/images/hero/`, `assets/images/content/`, `assets/images/ui/`

Keep shared assets in these folders so relative paths remain predictable across pages.

## 3. Customization workflow

### Branding

Update the main brand tokens in `assets/css/style.css` under `:root`.

Key variables currently include:

- `--color-primary`
- `--color-primary-deep`
- `--color-secondary`
- `--color-accent`
- `--color-bg`
- `--color-text`

### Typography

Fonts are locally hosted through `@font-face` in `assets/css/style.css`.

- Display and headings: `Fredoka Local`
- Body copy: `Nunito Sans Local`

If you replace fonts:

1. place the font files in `assets/fonts/`
2. update the `@font-face` declarations
3. keep `font-display: swap`
4. avoid CDN font imports

### Images and branding assets

- Logo: `assets/images/ui/logo.svg`
- Favicon: `assets/images/ui/favicon.svg`
- OG image: `assets/images/ui/og-home.webp`
- Content images: `assets/images/content/`

When swapping imagery, keep files local and preserve descriptive `alt` text.

## 4. Theme and direction

### Dark mode

- Shared styles live in `assets/css/dark-mode.css`
- Shared logic lives in `assets/js/theme-handler.js`
- The template uses `localStorage` to persist theme selection

### RTL

- Layout overrides live in `assets/css/rtl.css`
- Direction state is toggled in JavaScript and applied to the `<html>` element
- Use the same toggle IDs across pages to keep behavior consistent

## 5. JavaScript files

- `assets/js/main.js`: mobile navigation, dashboard drawer behavior, active state handling, theme/RTL button behavior
- `assets/js/theme-handler.js`: document-level theme and direction persistence helpers
- `assets/js/dashboard.js`: dashboard sidebar and chart helpers
- `assets/js/animations.js`: reserved shared animation logic

Prefer shared scripts over page-specific inline script blocks when extending behavior.

## 6. SEO and accessibility touchpoints

For each page, check:

- unique `<title>`
- meta description
- one clear H1
- OG tags
- Twitter card tags
- JSON-LD where appropriate
- descriptive image `alt` text
- keyboard-reachable controls
- `aria-label` values on icon-only buttons

## 7. Documentation maintenance

If you add, remove, or rename pages, update:

- `documentation/PAGE-STRUCTURE.md`
- `documentation/CHANGELOG.md`
- `documentation/QUALITY-CHECKLIST.md` if the change affects compliance

If you replace assets or tooling, also update `documentation/CREDITS.md`.
