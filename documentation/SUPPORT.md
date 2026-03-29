# Support

This file defines what to check before requesting or handing off support for the template.

## Before asking for support

Confirm the issue includes:

- the page filename
- the affected viewport size
- whether dark mode or RTL was enabled
- the browser used
- any console errors

## First checks

1. Verify shared asset paths are still correct.
2. Confirm the page still loads `style.css`, `dark-mode.css`, and `rtl.css`.
3. Confirm the page still loads the expected shared JavaScript.
4. Check whether the issue is only present in a dashboard page or only in a standard page.
5. Re-test after clearing cached `localStorage` theme and direction values.

## Handoff notes for developers

When handing off this template to another developer or client, include:

- the project root
- the `documentation/` folder
- the current `sitemap.xml`
- the current `robots.txt`
- any deployment-specific URL changes needed for OG, Twitter, and JSON-LD metadata

## Known documentation-based follow-up items

The quality checklist currently identifies gaps between the fortified rules and the current implementation. Review `documentation/QUALITY-CHECKLIST.md` before production delivery.

## Support scope

This documentation covers:

- installation
- page and asset structure
- customization points
- compliance review guidance

If new pages, integrations, or build steps are added, update the documentation before handoff.
