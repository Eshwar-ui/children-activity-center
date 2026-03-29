---
name: Website Audit Skill
description: Audits an HTML website template against the quality standards defined in the system instructions.
---

# Website Audit Skill

The **Website Audit Skill** is a specialized toolset designed to evaluate HTML website templates against the "Fortified v2" quality standards. These standards ensure that every template produced is production-ready, highly accessible, SEO-optimized, and features a premium design system.

This skill combines **automated script-based validation** with a **manual checklist** to provide a 360-degree quality score.

---

## 🚀 How to Use This Skill

### 1. Automatic Validation
Run the built-in audit script to check for file structure, SEO basics, and common technical pitfalls.

**Command:**
```powershell
node "c:\Users\Eswar\.gemini\antigravity\skills\website_audit\scripts\audit.js"
```

**What it checks:**
- Presence of required root files (`index.html`, `README.md`, `robots.txt`, etc.).
- Folder architecture (`assets/`, `pages/`).
- External dependency violations (image hotlinking, CDN fonts).
- Basic SEO health (Single H1, Image Alt attributes, Favicon presence).

### 2. Manual Checklist Review
The script cannot verify visual quality or complex interactions. You must manually go through the [Full Audit Checklist](#-full-audit-checklist) below.

### 3. Scoring & Status
The final grade is calculated as follows:
- **Pass (90–100)**: ✅ Production Ready. Ready for delivery.
- **Warning (75–89)**: ⚠️ Needs Minor Fixes. Issues that don't break the user experience but should be polished.
- **Fail (<75 or Mandatory Failure)**: ❌ Rejected. Must be fixed before submission.

---

## 🛠️ Full Audit Checklist

### 🏗️ Core Architecture (Automated & Manual)
- [ ] **Root Landing**: `index.html` exists and acts as the project gateway.
- [ ] **Variations**: At least two home page variations (`index.html`, `index-2.html`) must be provided.
- [ ] **Structure**: Follows `assets/{css,js,images,fonts}` and `pages/` directory pattern.
- [ ] **Cleanliness**: ❌ No `node_modules`, build artifacts, or complex JS framework files.

### 🧭 Navigation & Footer (Manual)
- [ ] **Consistency**: Shared Navbar/Footer components must be 100% identical across all pages.
- [ ] **Interactivity**: Sidebar/Hamburger menus must be fully functional on mobile.
- [ ] **Toggles**: Dark Mode and RTL toggles must be easily accessible (usually in the Top Nav).
- [ ] **Active States**: The current page must be clearly highlighted in the navigation links.

### 🎨 Assets & Design System (Automated & Manual)
- [ ] **Local First**: ❌ NO external image URLs (Unsplash/LoremFlickr etc.). Use local placeholder or generated images.
- [ ] **Local Typography**: ❌ NO Google Fonts CDNs. All fonts must be local using `@font-face`.
- [ ] **Token System**: CSS variables (Tailwind or Vanilla) must be used for colors, spacing, and sizing.
- [ ] **Rhythm**: Spacing follows a strict grid system (e.g., 4px/8px increments).

### ⚡ Technical Performance (Manual)
- [ ] **Dark Mode**: Must support a `dark` class on the `<html>` or `<body>` element with localStorage persistence.
- [ ] **RTL Support**: Must support `dir="rtl"` with a dedicated `rtl.css` or Tailwind `rtl:` modifiers.
- [ ] **Lazy Loading**: All non-critical images must use `loading="lazy"`.
- [ ] **Accessibility**: Compliance with WCAG 2.1 AA (Aria labels on buttons, focus states, high contrast).

### 🔍 SEO & Meta (Automated)
- [ ] **Title Tags**: Unique, descriptive titles (under 60 chars) on all pages.
- [ ] **Meta Descriptions**: Compelling summaries (150-160 chars).
- [ ] **Hierarchy**: Exactly one `<h1>` per page.
- [ ] **Social**: OG (Open Graph) and Twitter meta tags must be present.

---

## 🚫 Mandatory Failure Conditions
The project results in an **immediate score of 0** if any of the following occur:
1.  **Missing Favicon**: Crucial for professional branding.
2.  **Hotlinked Assets**: External images or CDN fonts (violates "Local First" rule).
3.  **Broken Navigation**: Links leading to 404s or inconsistent headers across sub-pages.
4.  **No Documentation**: Missing `README.md` or `documentation/README.md`.

---

## 📖 Troubleshooting the Audit Script

### Error: "Found X external image URLs"
The script detected `http` or `https` in a `src` attribute. 
**Fix**: Download the image to `/assets/images/` and update the path to a relative link.

### Error: "Missing favicon links"
The script expects `<link rel="icon" ...>` or `<link rel="shortcut icon" ...>` in the `<head>` of every HTML file.
**Fix**: Ensure every file in the root and `/pages` contains the favicon link.

### Error: "Multiple H1 tags found"
Each page should have only one primary heading for SEO and accessibility.
**Fix**: Convert secondary H1s to H2 or H3.

---

## 📝 Maintenance
To update the audit criteria, modify `scripts/audit.js` to add new test cases to the `scanHtmlFiles` function.
