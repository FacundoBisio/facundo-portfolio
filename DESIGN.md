---
name: Facundo Bisio — Portfolio
description: Dark editorial portfolio of a full-stack product developer. One lime accent, serif display, mono labels.
colors:
  ink: "#0E100C"
  surface: "#151812"
  raised: "#1D2119"
  paper: "#ECEFE4"
  mute: "#979C8A"
  lime: "#C6F24E"
  lime-deep: "#A9D635"
  line: "#23281D"
  line-strong: "#3A4130"
  signal: "#F2705E"
typography:
  display:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "clamp(2.75rem, 6vw, 5.5rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "clamp(2rem, 4vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1.1
  title:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "DM Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  none: "0px"
  sm: "2px"
  lg: "4px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 22px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.lime-deep}"
    textColor: "{colors.ink}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "12px 22px"
    height: "44px"
  button-outline-hover:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.paper}"
  badge:
    backgroundColor: "transparent"
    textColor: "{colors.mute}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "3px 8px"
  panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "24px"
  dialog:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.paper}"
    rounded: "{rounded.lg}"
---

# Design System: Facundo Bisio — Portfolio

> Status: starting point, set at the beginning of the redesign. The palette, the three typefaces and the rules below are fixed. Layout and component details are refined once the new sections exist; this file is then updated from the built result.

## Overview

**Creative North Star: "The Working Notebook"**

A dark, editorial page that reads like the notes of someone who builds things: a serif voice for the statements, a plain sans for the explanation, and a mono for the facts (dates, stacks, status, file names). It is quiet on purpose. The products shown inside it are the loud part.

The system is minimal in means, not in content. One accent colour, three typefaces, square corners, hairlines, and no decoration that does not carry information. Density is moderate: generous space around headings and media, compact rows for facts.

It rejects generic SaaS landing pages, purple-to-blue gradients, glassmorphism, grids of identical cards with icons, and a centred hero that opens with a greeting.

**Key Characteristics:**
- Dark only. Warm, slightly green near-black; never pure black, never pure white.
- One accent (lime). It marks the single most important thing in view.
- Serif display with a true italic; sans body; mono for facts.
- Square corners and 1px hairlines; depth by tone, not by shadow.
- Product media is the only large imagery.

## Colors

A green-tinted neutral scale with one saturated accent.

### Primary
- **Signal Lime** (`lime`): the primary action, the active state, the focus ring and at most one emphasised word in a heading. Text on it is always `ink`.
- **Pressed Lime** (`lime-deep`): hover and pressed state of the primary action only.

### Neutral
- **Ink** (`ink`): the page background.
- **Surface** (`surface`): panels, media frames and placeholder slides.
- **Raised** (`raised`): dialogs, menus, hover fills.
- **Paper** (`paper`): primary text, and every sentence that carries value.
- **Mute** (`mute`): metadata only: dates, captions, labels, secondary links.
- **Line** (`line`): default hairline between rows and around frames.
- **Strong Line** (`line-strong`): borders of interactive controls (outline buttons, inputs, badges).

### Tertiary
- **Signal Red** (`signal`): errors and destructive actions only. It does not appear in the resting page.

### Named Rules
**The One Lime Rule.** Lime covers no more than a tenth of any screen. If two lime things are visible at once, one of them is wrong.

**The Mute Is For Metadata Rule.** A sentence a visitor should read is set in `paper`. `mute` is for the facts around it.

**The No Tint Rule.** No translucent colour washes, glows or gradients. A colour is a token at full strength or it is not used.

## Typography

**Display Font:** DM Serif Display (with Georgia, serif). Regular and italic, both loaded.
**Body Font:** Manrope (with system-ui, sans-serif).
**Label/Mono Font:** DM Mono (with ui-monospace, monospace).

**Character:** the serif states, the sans explains, the mono records. The contrast between a soft, high-contrast serif and a flat technical mono is the identity.

### Hierarchy
- **Display** (400, `clamp(2.75rem, 6vw, 5.5rem)`, 1.02): the hero statement only. One per page.
- **Headline** (400, `clamp(2rem, 4vw, 3.25rem)`, 1.1): section headings and case-study titles.
- **Title** (Manrope 600, 1.375rem, 1.3): project names in lists, step names, sub-headings.
- **Body** (Manrope 400, 1rem, 1.65): all running text. Maximum line length 68ch. Never below 1rem.
- **Label** (DM Mono 400, 0.75rem, 0.08em, uppercase where it is a label): dates, stack names, status, captions, navigation, button text. Never below 0.75rem.

### Named Rules
**The Real Italic Rule.** Italic is used only in DM Serif Display, which has one. No synthesised slant anywhere.

**The One Emphasis Rule.** A heading may emphasise at most one word or phrase (italic, optionally lime), and only when that word is the point. Most headings emphasise nothing. The device is not a house style applied to every section.

**The Fixed Floor Rule.** Body text is sized in `rem`, not scaled with the viewport. Only display and headline sizes are fluid.

## Layout

- Single page, vertical, with one content column up to 1200px wide and 20px side gutters on phones, 32px from 640px, 40px from 1024px.
- Sections are separated by space first (96px on desktop, 64px on phones) and a hairline second.
- Asymmetric two-column compositions on desktop (a narrow facts column beside a wide content column); a single column below 900px.
- Media frames keep a fixed 16:10 ratio so that video, image and placeholder slides never shift the layout.
- Touch targets are at least 44px.

## Elevation & Depth

Flat. No shadows on the resting page. Depth comes from the three background tones (`ink`, `surface`, `raised`) and from hairlines.

### Named Rules
**The Tone Not Shadow Rule.** A layer above the page (dialog, menu, sheet) is `raised` with a `line-strong` border and a dimmed `ink` backdrop. It has no drop shadow and no backdrop blur.

## Shapes

Square by default (0px). Interactive controls and badges take a 2px radius, enough to stop looking like a rendering error. Dialogs and the lightbox take 4px. Nothing is pill-shaped and nothing is circular except a status dot.

Borders are 1px solid. No 0.5px borders, and no thick side stripes as accents.

## Components

All base components come from shadcn/ui (Base UI primitives) and read the tokens above through CSS variables. The default shadcn look (rounded-lg, neutral greys, soft shadows) is a defect.

### Buttons
- **Shape:** 2px radius, 44px high, DM Mono label.
- **Primary:** `lime` fill, `ink` text. One per view.
- **Outline:** transparent with a `line-strong` border and `paper` text.
- **Hover / Focus:** primary darkens to `lime-deep`; outline fills with `raised`. Focus is a 2px `lime` outline with a 2px offset on every interactive element.
- **Ghost / Link:** `mute` text that turns `paper` on hover, with an underline for links inside text.

### Chips
- **Style:** transparent, `line-strong` border, `mute` mono text, 2px radius. Used for stack names and status. Static; not interactive unless it is a real filter.

### Cards / Containers
- **Corner Style:** square.
- **Background:** `surface`, or none with hairlines above and below.
- **Shadow Strategy:** none.
- **Border:** 1px `line`.
- **Internal Padding:** 24px.
- Cards are never nested, and a list of projects is not a grid of identical cards.

### Navigation
- A fixed bar on `ink` with a hairline below, no blur. Name on the left; section links, the EN/ES toggle and the CV download on the right.
- Links are mono labels in `mute`; the current section is `paper`.
- Below 768px the links move into a sheet that opens from the right, closes with Esc and returns focus to the button.

### Media Frame (signature)
- A 16:10 frame on `surface` with a 1px `line` border, a mono caption below, and position indicators.
- A slide whose media does not exist yet shows the slide type and its caption in mono on `surface`, with a hairline cross. It looks intentional and it is honest about what is missing.

### Motion
- Durations 150ms (feedback), 250ms (state change), 400ms (entrance). One easing: `cubic-bezier(0.22, 1, 0.36, 1)`.
- Only `transform` and `opacity` are animated. With reduced motion, movement is removed and fades remain.
- The hero is readable at first paint; nothing starts hidden waiting for script.

## Do's and Don'ts

### Do:
- **Do** use the CSS variables (`--background`, `--foreground`, `--primary`, `--muted-foreground`, `--border`, `--ring`) or their Tailwind utilities for every colour.
- **Do** set dates, stack names, status and captions in DM Mono.
- **Do** give every interactive element a visible `lime` focus outline.
- **Do** keep body text at 1rem or larger and labels at 0.75rem or larger.
- **Do** let product screenshots and video be the largest visual on any screen.

### Don't:
- **Don't** use gradients, glows, glass, backdrop blur, grain overlays or grid backgrounds.
- **Don't** use a pulsing dot, a scroll progress bar or scroll hijacking.
- **Don't** hard-code a hex or `rgba()` value in a component.
- **Don't** italicise a word in every heading.
- **Don't** fake an italic or a bold the loaded fonts do not have.
- **Don't** use `mute` for sentences that carry value.
- **Don't** build a grid of identical cards, with or without icons.
