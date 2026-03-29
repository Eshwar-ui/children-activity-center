# Customization Guide

This file covers the most common changes made to the BrightSteps template.

## Brand colors and spacing

Edit `assets/css/style.css` under `:root`.

Primary tokens currently include:

- `--color-primary`
- `--color-primary-deep`
- `--color-secondary`
- `--color-accent`
- `--color-warning`
- `--color-success`

Spacing follows a 4px-based scale through variables such as:

- `--space-1: 4px`
- `--space-2: 8px`
- `--space-4: 16px`
- `--space-8: 32px`
- `--space-12: 48px`

## Fonts

Local fonts are defined in `assets/css/style.css`:

- `Fredoka Local`
- `Nunito Sans Local`

To replace them:

1. add new files to `assets/fonts/`
2. update the `@font-face` blocks
3. update `--font-display`, `--font-heading`, and `--font-body`

## Logo and favicon

Replace these files if the brand changes:

- `assets/images/ui/logo.svg`
- `assets/images/ui/favicon.svg`

Make sure every page still points to the same shared brand files.

## Images

Use the existing local image folders:

- `assets/images/hero/`
- `assets/images/content/`
- `assets/images/ui/`

Recommended process:

1. export optimized WebP images
2. keep filenames descriptive
3. update matching `alt` text
4. keep card imagery local

## Navigation and footer

The fortified rules require identical navbar and footer markup across standard pages. If you edit either shared area:

1. update all standard pages together
2. leave dashboard, auth, and coming-soon exceptions separate
3. retest theme toggle, RTL toggle, and mobile menu behavior

## Dashboards

Dashboard-specific behavior is handled by:

- `assets/js/dashboard.js`
- `assets/js/main.js`

When editing dashboard pages:

- keep sidebar controls keyboard reachable
- preserve topbar actions and utility controls
- keep overview and detail pages in sync with the same visual language

## SEO content

Per page, update:

- title
- description
- OG title and description
- OG image
- canonical or public URL if deployed
- JSON-LD values where present

## Documentation updates after customization

After major edits, update:

- `documentation/PAGE-STRUCTURE.md` if page inventory changes
- `documentation/CREDITS.md` if assets or tooling change
- `documentation/CHANGELOG.md` with the date and summary
