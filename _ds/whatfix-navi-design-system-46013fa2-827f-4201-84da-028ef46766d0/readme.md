# Whatfix Navi Design System

A design system extracted from the **"Navi Design System"** Figma file for **Whatfix** — the Digital Adoption Platform (DAP) that overlays in-app guidance (flows, smart tips, task lists, self-help, beacons) onto other software products, plus the admin **Creator Studio** where that guidance is authored.

This project is a self-contained, compiler-indexed design system: token CSS, React component primitives, foundation specimen cards, product UI kits, and this guide.

> **Source:** "Navi Design System.fig" (mounted read-only during authoring). Values here were transcribed from that file — colors, type scale, spacing, elevation and the flame logo vector. If you have the file, it is the ground truth; where this system substitutes (fonts), it is flagged below.

---

## Product context

Whatfix has two primary surfaces this system serves:

1. **Creator Studio (admin dashboard)** — internal-facing web app where product/CS teams build and manage in-app content. Dark Inkredible navigation chrome, data-dense tables, analytics, orange primary actions. See `ui_kits/creator-studio/`.
2. **End-user DAP layer** — the guidance widgets end users see inside *their own* product: the Self Help widget, launcher, smart-tip beacons, task-list checklists, pop-ups. See `ui_kits/dap-widget/`.

---

## CONTENT FUNDAMENTALS

How Whatfix writes:

- **Voice:** clear, encouraging, action-oriented. Guidance-first — the product exists to help people *do* things, so copy leads with the verb: "Create content", "Set up your first project", "Invite teammates".
- **Person:** addresses the user as **you** ("Recommended for you", "Search for help"). Refers to itself in the product's own name, not "we", in UI chrome.
- **Casing:** **Sentence case everywhere** — buttons, headers, menu items, tabs ("New content", not "New Content"). Only proper nouns and product feature names are capitalized (Self Help, Smart Tip, Task List, Creator Studio).
- **Tone:** professional but warm; enterprise SaaS without stiffness. No exclamation-point hype. Confident, concise.
- **Length:** short. Button labels 1–3 words. Empty-state and helper copy are one plain sentence.
- **Numbers/metrics:** set in Roboto Mono, humanized in dense views ("98.6k", "12,480").
- **Emoji:** **not used** in product UI.
- **Examples:** "Guidance that sticks" · "Adoption you can measure" · "Set up your first project · 4 steps · 2 min" · "No flows yet — create your first flow to get started."

---

## VISUAL FOUNDATIONS

- **Color vibe:** a warm, confident palette anchored by **brand orange** (`--color-primary-400` = `#C74900`) for calls-to-action and attention cues, over a cool near-black ink (**Inkredible**, `--color-secondary-1000` = `#1F1F32`) used for navigation chrome and primary text. Neutrals are very slightly cool grey. Semantic colors (Success green, Warning amber, Critical red, Info blue) are reserved strictly for meaning, never decoration. Extended accents (Crimson, Bright Blue, Human warm-brown) exist for illustration/marketing moments and are used *sparingly*.
- **Orange is precious.** It marks the single primary action, the active-nav accent, and end-user attention cues (beacons, launcher). Don't flood a screen with it.
- **Type:** **Inter** across the whole UI — Bold for headings, Semibold for subheadings, Regular for body. **Roboto Mono** for metrics, counts and code. Headings carry slight negative tracking (-0.01em); labels are 12px uppercase with +0.03em tracking. Type scale runs 34→12px (see Type cards).
- **Spacing:** 4px base grid (2 / 4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64).
- **Corner radii:** small **4px** (buttons, checkboxes, inputs-in-a-row), medium **8px** (inputs, selects), large **12px** (cards, modals, drawers), full **36px** (pills, chips, avatars, launcher).
- **Cards:** white surface, 12px radius, **1px subtle border** (`--border-subtle`) *plus* a soft elevation-01 shadow; hover lifts to elevation-03 with a -2px translate when interactive.
- **Elevation:** 5-level shadow system, warm-tinted, from resting card (01) → tooltip (02) → popover/menu (03) → drawer (04) → modal/overlay (05). Overlays dim the page with `rgba(31,31,50,0.45)` (Inkredible at 45%).
- **Borders:** hairline 1px is the default; 2px for focus and emphasis; 4px reserved. Border color scale from subtle (`--color-secondary-200`) to strong (`--color-secondary-400`).
- **Backgrounds:** flat and calm — white page, `--surface-subtle` (#F6F6F9) for app canvases, no gradients or textures in product UI. No hero photography in the app; illustration/photography belongs to marketing.
- **Focus:** 3px info-blue halo (`box-shadow: 0 0 0 3px var(--color-info-100)` + blue border) on inputs.
- **Hover states:** neutral surfaces darken to `--surface-hover`; primary buttons step one shade darker (400→500); soft-tinted rows use the intent's 50 tint.
- **Press states:** buttons darken a further shade (500→600); no scale-shrink.
- **Animation:** restrained. 120–160ms ease transitions on background/border/shadow; the only looping motion is the end-user **beacon pulse** (brand-orange expanding ring) that signals a Smart Tip. Reduced-motion friendly.
- **Transparency/blur:** used only for overlay scrims; no glassmorphism in product UI.
- **Imagery vibe:** where present, warm and human; product screens themselves stay neutral so the orange guidance layer pops.

---

## ICONOGRAPHY

- **Icon set:** **Tabler Icons** — the outline (stroke) family the Navi file is built on (component names like `alert-circle`, `chevron-down`, `arrow-bar-left`, `adjustments-horizontal` map 1:1 to Tabler). Stroke style, ~1.75–2px weight, rounded joins, 24px grid.
- **Delivery:** loaded via the **Tabler webfont** from CDN (`@tabler/icons-webfont@3`). The `Icon` component is a thin wrapper — `<Icon name="rocket" size={20} />`. This is an **intentional addition** (a glyph wrapper) so the hundreds of Figma icon components resolve to one dependency instead of hundreds of SVG files.
- **No emoji, no unicode-as-icon.** Metrics use Roboto Mono numerals, not icon glyphs.
- **Brand mark:** the Whatfix **flame** is an authentic two-tone vector (orange `#FFA450` / `#F55800`) recovered from the file — see `components/brand/Logo.jsx`.

> **Substitutions / caveats**
> - **Fonts:** the .fig ships no font binaries. **Inter** and **Roboto Mono** (the families named in the file) are pulled from Google Fonts. If you have the licensed originals, drop them in and update `tokens/fonts.css`.
> - **Wordmark:** the file's "whatfix" wordmark is custom outlined lettering; the `Logo variant="full"` renders the wordmark in **Inter Bold** as an approximation. Supply the real wordmark SVG to replace it.
> - **Icons:** Tabler via CDN stands in for the file's icon components (which are themselves Tabler-based). Swap for a vendored/licensed set for production/offline use.

---

## Intentional additions

Components with no 1:1 counterpart in the source, added for the system to function:
- **`Icon`** — wrapper over the Tabler webfont, so the file's large icon library is one dependency.
- **`Logo`** — packages the recovered flame vector + wordmark as a component.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (imports only). Consumers link this.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css` (spacing + radius + border + elevation).
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill wrapper.

**Components** (`window.WhatfixNaviDesignSystem_46013f`)
- `components/core/` — Button, IconButton, SplitButton, ToggleButton, Link, Divider, Kbd, Icon
- `components/forms/` — Input, TextArea, Select, SearchField, NumberInput, Checkbox, Radio, Switch, Slider
- `components/feedback/` — Badge, Tag, Chip, Banner, Callout, Tooltip, Spinner, ProgressBar, Skeleton, AlertPictogram, EmptyState
- `components/data/` — Card, Avatar, AvatarGroup, List (+ ListItem)
- `components/navigation/` — Tabs, Breadcrumbs, Pagination, Stepper, Accordion, ContentSwitcher
- `components/overlay/` — Modal, AlertModal, Drawer, Popover, Menu
- `components/brand/` — Logo

**UI kits**
- `ui_kits/creator-studio/` — Whatfix Creator Studio admin dashboard
- `ui_kits/dap-widget/` — end-user Self Help widget over a host app

**Foundation cards** — `guidelines/*.card.html` (Colors, Type, Spacing groups in the Design System tab).

---

## Using this system

Foundation cards and components render in the **Design System** tab. In HTML, load the bundle and read components from the namespace:

```html
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3/dist/tabler-icons.min.css">
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, Card, Badge } = window.WhatfixNaviDesignSystem_46013f;
</script>
```
