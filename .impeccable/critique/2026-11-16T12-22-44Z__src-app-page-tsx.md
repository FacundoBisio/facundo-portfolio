---
target: sitio actual (homepage)
total_score: 17
max_score: 28
na_heuristics: 7,9,10
p0_count: 1
p1_count: 3
target_identity: "file:C:\\Users\\facub\\OneDrive\\Desktop\\facundo-portfolio\\src\\app\\page.tsx"
target_fingerprint: "sha256:27228103b6a490e905a0fdf162eaeae1ffae5eb37031f33caa6124ba63d8d4ce"
target_path: "C:\\Users\\facub\\OneDrive\\Desktop\\facundo-portfolio\\src\\app\\page.tsx"
timestamp: 2026-11-16T12-22-44Z
slug: src-app-page-tsx
---
Method: dual-agent (A: design review · B: detector + browser overlay)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Nav highlight goes stale over "Sobre mí" and "Educación" (no nav entry) |
| 2 | Match System / Real World | 1 | Spanish-only for a mostly English-speaking audience; stack jargon instead of outcomes |
| 3 | User Control and Freedom | 3 | Lenis overrides native scroll; mobile drawer has no Esc or outside-tap close |
| 4 | Consistency and Standards | 2 | Spanish/English mix; contradictory numbers; Experience and Projects repeat the same four items |
| 5 | Error Prevention | 3 | `break-all` on links; phone row dials on tap |
| 6 | Recognition Rather Than Recall | 3 | Project links say only "Live" |
| 7 | Flexibility and Efficiency | n/a | Portfolio surface |
| 8 | Aesthetic and Minimalist Design | 2 | ~32 skill pills, 12 deep-dive bullets, duplicated sections, most text under 12px |
| 9 | Error Recovery | n/a | No forms or error states |
| 10 | Help and Documentation | n/a | Portfolio surface |
| **Total** | | **17/28 (61%)** | **Acceptable** |

## Design Specificity Verdict

**LLM assessment:** category-interchangeable. It avoids the owner's literal anti-references but lands in the adjacent "dark developer portfolio" template: grain overlay, scrolling perspective grid, radial accent glow, blurred sticky nav, scroll progress bar, Lenis, pulsing availability dot, four-box hero stats (including "∞ Café consumido"), `fb.dev` logo for a domain he does not own, mono uppercase eyebrows with hairlines, tag-pill clouds, a grid of identical text-only project cards, and the same "plain words + one amber italic word" headline seven times. No product visual exists anywhere; the only image is a watermarked event portrait.

**Deterministic scan:** static CLI scan 0 findings; in-page detector 9 findings over 6 rules: undersized-ui-text ×6 (`SectionLabel.tsx:14`, 10.5px), tiny-text (`Hero.tsx:225`, 11px), pulsing-dot (`globals.css:88-98`), codex-grid-background (`BackgroundGrid.tsx:21-25`), em-dash-overuse (27–28 in body text), italic-serif-display (the "serif" half is a false positive from the `Georgia, serif` fallback; the italic is real and browser-synthesised because Bricolage is loaded without an italic).

**Visual overlays:** injected successfully in a "[Human]" tab on localhost:3000; cleared on reload.

## Overall Impression

Calm, coherent skin over a CV rendered as HTML. Biggest opportunity: show the products running and the decisions behind them, in English.

## What's Working

1. Disciplined palette and surfaces: one accent, warm off-white on warm near-black, hairlines, square corners, no glass, no nested cards.
2. The Phantom-Stock "problems / features" block (`Experience.tsx`) is the only content that shows product thinking; it is the seed of the case-study format.
3. Engineering hygiene: reduced motion handled in `FadeIn` and hero, sections stay server components, no horizontal overflow at 390px, working CV download and OG image.

## Priority Issues

- **[P0] Spanish-only for an English-speaking audience.** `lang="es"`, `og:locale=es_AR`, all copy hard-coded in Spanish. Fix: English default, Spanish at `/es`, copy in dictionaries, metadata per locale. Command: /impeccable harden.
- **[P1] No proof and no "how he works"; same content three times.** Zero product visuals; About, Experience and Projects repeat the same four projects. Fix: one Work section of case studies with media, an "Earlier" list for the rest, drop "Este Portfolio" and Weather Dashboard. Command: /impeccable shape.
- **[P1] Credibility contradictions in the hero.** "3+ años" vs "5+ años" vs a timeline starting 2024; "10+ proyectos" vs six listed; "Vercel + Render" vs AWS Lambda; unmeasured "~40%" and "scores altos"; the coffee stat. Fix: delete the stats grid, state experience once per the CV, replace adjectives with measured values or remove them. Command: /impeccable clarify.
- **[P1] Typography undermines the identity.** Faux italics as the only brand device, display type all at weight 400, 65% of text nodes under 12px on mobile, project numbers at 1.27:1 contrast. Fix: real italic or no italic, heavier display weight, 16px body / 12px label floor, no `vw` clamps on body text. Command: /impeccable typeset.
- **[P2] Conversion path under-weighted, small a11y gaps.** Primary CTA is "Ver proyectos"; CV is a ghost button and missing from Contact; contact copy excludes US/EU readers; 30px hamburger without `aria-expanded`; no skip link; no designed focus style; JS-only hover. Command: /impeccable layout.

## Persona Red Flags

**International recruiter, 30-second skim:** cannot read the headline; sees "B2 Inglés" on a site with no English; no time zone; "Download CV" is the least visible header control; never reaches the Phantom-Stock deep dive (~1,900px down).

**Jordan (non-developer founder or local client):** the page speaks only in stack terms; no statement of what he does for a business or how an engagement works; contact is four raw rows.

**Casey (mobile):** ~12 screens of scroll, Experience alone ~4; CV behind a 30px hamburger; 11px "Live" links ~18px tall; no sticky CTA.

**Sam (keyboard / screen reader):** no skip link; default focus ring only; drawer without `aria-expanded`, focus trap or Esc; project titles are `div`s; decorative glyphs read aloud.

## Minor Observations

- `.contact-row:hover` animates `padding-inline` (layout shift).
- Hero availability date is `new Date()` in a client component: no information, hydration risk.
- About image has `priority` though below the fold.
- `0.5px` borders render inconsistently on non-retina screens.
- Display font falls back to `Georgia, serif` for a grotesque.
- Phone number and personal email in plain text on an international-facing site.

## Questions to Consider

1. If the first screen showed a product running, would the headline, the stats or the About section be needed at all?
2. Why inflate ("3+", "10+", "que escalan") when "solo-built and operating a multi-tenant SaaS in year 3 of engineering" is true and stronger?
3. What on this page could only have been made by him?
