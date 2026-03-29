# Credits

This file records the current asset and tooling sources used by the template.

## Local project assets

- Logo: `assets/images/ui/logo.svg`
- Favicon: `assets/images/ui/favicon.svg`
- Social preview image: `assets/images/ui/og-home.webp`
- Content imagery: files in `assets/images/content/`
- Local fonts: `assets/fonts/fredoka.ttf`, `assets/fonts/nunitosans.ttf`

## Project files authored in-template

- Core stylesheet: `assets/css/style.css`
- Dark mode stylesheet: `assets/css/dark-mode.css`
- RTL stylesheet: `assets/css/rtl.css`
- Local utility stylesheet: `assets/css/tailwind-local.css`
- Shared scripts: `assets/js/main.js`, `assets/js/theme-handler.js`, `assets/js/dashboard.js`

## Current implementation note

The fortified instruction file requires local assets and production-ready local dependencies. The documentation reflects that target, but the current template still references some external script CDNs in page files, including Tailwind Play CDN and GSAP CDN assets. Those references should be replaced or bundled if strict compliance is required.

## Documentation source of truth

The standards used for this documentation come from:

- `updated_system_instructions.md`

If external assets, licensed media, or third-party code are added later, record them here with the exact file or page locations that use them.
