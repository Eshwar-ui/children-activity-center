# Quality Checklist And Scoring

This checklist is derived from `updated_system_instructions.md`.

## Scoring model

- Each checklist item is worth 5 points.
- Maximum score: 100
- 90-100: Production ready
- 75-89: Needs minor fixes
- 60-74: Needs major improvements
- Below 60: Rejected

## Mandatory fail conditions

Fail regardless of score if any of these remain true:

- missing favicon
- external images or fonts
- navbar or footer inconsistency
- missing SEO tags
- no documentation

## Core checklist

- [x] Required root `index.html` exists
- [x] Documentation folder exists and is markdown-only
- [x] Root `README.md` exists
- [x] `robots.txt` exists
- [x] `sitemap.xml` exists
- [x] Local font files exist in `assets/fonts/`
- [x] Shared dark mode stylesheet exists
- [x] Shared RTL stylesheet exists
- [x] Local logo exists
- [x] Local favicon exists

## Additional mandatory checks

- [ ] Architecture matches the immutable target exactly
- [ ] Two home pages are implemented in the required locations only
- [ ] Standard-page navbar is identical across all standard pages
- [ ] Standard-page footer is identical across all standard pages
- [ ] No external script or asset CDNs are used
- [ ] Every page uses only local production-ready dependencies
- [ ] Home pages each follow the 4-5 section rule
- [ ] SEO tags are present and complete on every page
- [ ] Dashboard pages follow the exact required pair only
- [ ] Documentation and implementation are fully aligned

## Current score

- Passed items: 10
- Score: 50/100
- Status: Rejected under the fortified scoring model

## Why the current score fails

- The project contains more dashboard and home page variants than the immutable structure describes.
- Multiple pages still load external CDN scripts.
- Some page metadata patterns are inconsistent across the project.
- The documentation is now complete, but the implementation still needs structural cleanup for full compliance.

## Recommended next fixes

1. Replace external CDN usage with local bundled assets.
2. Normalize navbar and footer markup across all standard pages.
3. Audit every page head for title, description, OG, Twitter, and JSON-LD consistency.
4. Reconcile the current page inventory with the immutable structure in `updated_system_instructions.md`.
