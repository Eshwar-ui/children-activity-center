# BrightSteps Documentation

This folder documents the BrightSteps children's activity center HTML template and aligns the docs with the rules defined in `updated_system_instructions.md`.

## Documentation map

- `README.md`: documentation hub and quick start
- `INSTRUCTIONS.md`: install, edit, and maintenance workflow
- `CUSTOMIZATION.md`: branding, content, assets, and feature customization
- `PAGE-STRUCTURE.md`: page inventory and shared asset layout
- `CREDITS.md`: asset and tooling credits
- `SUPPORT.md`: support scope, handoff notes, and issue reporting
- `CHANGELOG.md`: documentation and template change history
- `QUALITY-CHECKLIST.md`: scored checklist based on the fortified system rules

## Quick start

1. Extract the template files.
2. Open `index.html` from the project root for the primary home page.
3. Open files in `pages/` for internal pages, dashboards, auth, and utility views.
4. Edit shared styling in `assets/css/`.
5. Edit shared interactions in `assets/js/`.

## Required documentation coverage

The fortified instructions require documentation for:

- installation
- customization
- page structure
- credits
- changelog
- support

All of those sections now exist in this folder as markdown files.

## Current project snapshot

- Root home page: `index.html`
- Secondary home pages: `pages/index.html`, `pages/index-2.html`
- Standard content pages: `about.html`, `services.html`, `blog.html`, `contact.html`
- Auth pages: `login.html`, `signup.html`
- Utility pages: `404.html`, `coming-soon.html`
- Dashboard pages: user and admin overview pages plus detail subpages
- Shared CSS: `style.css`, `dark-mode.css`, `rtl.css`, `tailwind-local.css`
- Shared JS: `main.js`, `theme-handler.js`, `dashboard.js`, `animations.js`
- Local fonts: `fredoka.ttf`, `nunitosans.ttf`
- Local brand assets: `logo.svg`, `favicon.svg`, `og-home.webp`

## Compliance note

The documentation follows the fortified rules. The current template implementation still has some gaps against those rules, especially around external script usage and page structure consistency. See `QUALITY-CHECKLIST.md` for the exact pass/fail status.
