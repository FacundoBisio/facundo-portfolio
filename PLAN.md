# PLAN — portfolio redesign

Read with `DESIGN.md` (visual rules, normative) and `PRODUCT.md` (product truth). Source facts: `prompt-portfolio-redesign.md`.

## 1. Architecture

- Next.js 15 App Router, React 19, TypeScript strict, Tailwind v4, shadcn/ui (Base UI primitives, already installed and themed in `src/app/globals.css`).
- **i18n:** `next-intl`. English at `/`, Spanish at `/es` (`localePrefix: 'as-needed'`). All routes live under `src/app/[locale]/`.
- **Case study = its own page**, `/work/[slug]` and `/es/work/[slug]`, statically generated. Reason: a shareable URL a recruiter can be sent, indexable per language, room for the media carousel, and no modal focus trap around long content. The lightbox inside it is the only Dialog.
- **Motion:** package `motion` (`motion/react`). `framer-motion` and `lenis` are removed.
- **Removed from the old site:** `BackgroundGrid`, `ScrollProgress`, `SmoothScroll`, grain overlay, radial glow, pulsing dot, hero stats grid, `About`, `Education`, `Skills` sections, `src/lib/projects.ts`, `src/lib/experience.ts`, `dist/`, `public/_headers`, `src/assets/`, `public/icono.jpg`, `public/FacundoBisio_CV.pdf`, unused favicons in `public/`.

## 2. Folder tree (target)

```
src/
  app/
    globals.css                    tokens (done) + base styles
    [locale]/
      layout.tsx                   html lang, fonts, providers, Navbar, Footer, JSON-LD
      page.tsx                     home: Hero, Work, Process, Experience, Stack, Teaching, Contact
      not-found.tsx
      opengraph-image.tsx
      work/[slug]/page.tsx         case study
    robots.ts  sitemap.ts  icon.svg  apple-icon.tsx
  middleware.ts
  i18n/
    routing.ts  request.ts  navigation.ts
    messages/en.ts (done)  messages/es.ts
  content/
    types.ts (done)  projects.ts  stack.ts  site.ts
  components/
    ui/                            shadcn components
    layout/   Navbar.tsx  MobileNav.tsx  LanguageToggle.tsx  Footer.tsx  CvLink.tsx
    sections/ Hero.tsx  Work.tsx  Process.tsx  Experience.tsx  Stack.tsx  Teaching.tsx  Contact.tsx
    work/     ProjectRow.tsx  CaseStudy.tsx
    media/    MediaCarousel.tsx  MediaSlideView.tsx  MediaLightbox.tsx  MediaPlaceholder.tsx  useAutoplayInView.ts
    motion/   Reveal.tsx  tokens.ts
scripts/optimize-media.mjs
public/cv/Facundo-Bisio-CV-EN.pdf  Facundo-Bisio-CV-ES.pdf   (done)
public/media/<slug>/…                                        (empty until recorded)
```

## 3. Design tokens

Defined once in `src/app/globals.css` and documented in `DESIGN.md`. Use Tailwind utilities (`bg-background`, `text-foreground`, `text-muted-foreground`, `bg-primary`, `text-primary-foreground`, `bg-card`, `bg-secondary`, `border-border`, `border-line-strong`, `ring-ring`, `font-display`, `font-sans`, `font-mono`). No hex, no `rgba()`, no inline `style` colours in components.

Type scale as utilities to add in `globals.css` (`@utility`): `text-display`, `text-headline`, `text-title`, `text-body`, `text-label` per `DESIGN.md`.

## 4. Shared contracts (fixed)

### 4.1 Content types — `src/content/types.ts` (written)

`Locale`, `Localized<T>`, `MediaSlide`, `ProjectLink`, `CaseStudy`, `Project`.

`src/content/projects.ts` exports:

```ts
export const projects: Project[]                 // in the order of section 5
export const featuredProjects: Project[]         // featured === true
export function getProject(slug: string): Project | undefined
```

`src/content/site.ts` exports `SITE` (name, email, phone, linkedin, github, url, `cv: Record<Locale, { href: string; filename: string }>`).
`src/content/stack.ts` exports `STACK: Record<'frontend' | 'backend' | 'data' | 'infra' | 'ai', string[]>`.

### 4.2 Messages — `src/i18n/messages/en.ts` (written, is the copy)

`export type Messages = typeof en`. `es.ts` is `const es: Messages = {…}`. Keys are fixed; components read them with `useTranslations` / `getTranslations`. Project content is not in messages: it is `Localized` inside `projects.ts`, read with the active locale.

### 4.3 Media components

```ts
// src/components/media/MediaCarousel.tsx  ('use client')
export function MediaCarousel(props: { slides: MediaSlide[]; locale: Locale; projectName: string; priority?: boolean }): JSX.Element
// src/components/media/MediaSlideView.tsx
export function MediaSlideView(props: { slide: MediaSlide; locale: Locale; active: boolean; priority?: boolean }): JSX.Element
```

Labels come from the `media` namespace of the messages.

### 4.4 Motion tokens — `src/components/motion/tokens.ts`

```ts
export const EASE = [0.22, 1, 0.36, 1] as const
export const DUR = { fast: 0.15, base: 0.25, slow: 0.4 } as const
```

Matching CSS variables exist: `--ease-out`, `--dur-fast`, `--dur-base`, `--dur-slow`.

### 4.5 Section ids (anchors, same in both languages)

`work`, `process`, `experience`, `stack`, `teaching`, `contact`. Main content id: `main`.

## 5. Content

**Projects, in order.** Featured (case study + carousel): `contigiani-brinon` (shown in the hero), `virtual-rep-cba`, `ffmates`, `phantom-stock`. Listed under "More work": `confituras-palmelita`, `eusa-partners`.

Facts come from the table in `prompt-portfolio-redesign.md` and, for Phantom-Stock, FFMates, Palmelita and EUSA, from the previous `src/lib/experience.ts` in git history (`git show HEAD:src/lib/experience.ts`). Rules for writing case studies:

- Use only those facts. No numbers that are not in the sources. The unmeasured claims in the old file ("~40%", "high scores", "3+ years", "10+ projects") are dropped.
- Phantom-Stock backend runs on AWS Lambda (the old "Vercel + Render" line is wrong).
- Status wording: Virtual Rep CBA and Contigiani Briñón "going to production in December 2026"; Contigiani link is a preview.
- Each featured project gets 4 slides: one `video` (product in use), two `image` (key screens), one `diagram` (architecture or data model). All `src` undefined for now, each with a `// TODO: record` comment, a real caption and alt in both languages.

**Stack** (`stack.ts`): Frontend: Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, Zustand. Backend: Node.js, Express, Go (Fiber), REST APIs, JWT + RBAC. Data: PostgreSQL, Neon, Drizzle, Prisma, MySQL, Redis. Infra: Vercel, Cloudflare Workers, Cloudflare R2, Cron Triggers, AWS Lambda, Docker Compose. AI: LLM workflows, Custom AI agents, WhatsApp Business API.

**Contact:** facubisio433@gmail.com · +54 351 366-2570 · LinkedIn `https://www.linkedin.com/in/facundo-bisio-25a104247/` (`TODO: confirm URL`) · `https://github.com/FacundoBisio`.

## 6. Page structure

1. **Navbar:** name (text, links home) · Work / Process / Experience / Stack / Contact · EN/ES toggle · Download CV (outline). Below 768px: name + toggle + menu button opening a `Sheet`. Skip link first in the DOM.
2. **Hero** (asymmetric, not centred): left column: mono role label, display statement, value line, primary "Download CV" + outline "Get in touch", mono location line. Right column: the media frame of the first featured project with the "Now building" label and its name, linking to its case study. No stats.
3. **Work:** featured projects as full-width alternating rows (media frame one side, text the other: name, kind, summary, stack chips, status, "Read the case study"). Then "More work" as a compact hairline list (name, summary, stack, link). Not a card grid.
4. **Process:** five numbered steps on a vertical line; desktop: sticky heading column left, steps right. The line is the element `motion` later ties to scroll.
5. **Experience:** compact timeline rows (period in mono, role, org). Education and languages under it, same row style.
6. **Stack:** five groups as labelled rows of plain mono text separated by `·` or chips per `DESIGN.md`. No bars, no levels.
7. **Teaching:** one short block, portrait optional (`public/images/yoiconico.jpg` is not used: it carries a photographer watermark. `TODO: new portrait`).
8. **Contact:** large email link, then phone, LinkedIn, GitHub rows and the primary CV button.
9. **Footer:** name, location, back to top.

**Case study page:** back link · name (headline) · kind and status · MediaCarousel · problem / my role / key decisions (list) / where it stands · stack · links · next case study.

## 7. Tasks

| # | Task | Agent | Depends on | Files | Acceptance |
|---|---|---|---|---|---|
| T1 | i18n routing, Spanish messages, SEO, CV, cleanup | `i18n-content` | — | `src/i18n/{routing,request,navigation}.ts`, `src/i18n/messages/es.ts`, `src/middleware.ts`, `next.config.ts`, `src/app/[locale]/{layout,not-found,opengraph-image}.tsx`, `src/app/{robots,sitemap}.ts`, `src/content/site.ts`, `src/components/layout/{LanguageToggle,CvLink}.tsx`, `eslint.config.mjs`, deletions listed in section 1 except section components | `/` renders in English with `<html lang="en">`, `/es` in Spanish with `lang="es"`; `es.ts` typed as `Messages`; metadata, OG, `hreflang` alternates and JSON-LD `Person` per locale; sitemap lists home and case studies in both languages; `CvLink` serves the file of the active locale with `download`; old CV and its references gone; `eslint .` runs; `next-intl` and `motion` installed, `framer-motion` and `lenis` uninstalled; a temporary `[locale]/page.tsx` that renders the hero strings is enough until T3 |
| T2 | Projects data, media components, media script | `media-carousel` | — | `src/content/projects.ts`, `src/components/media/*`, `scripts/optimize-media.mjs`, `public/media/.gitkeep`, README section "Media" | Contracts 4.1 and 4.3 exactly; carousel has keyboard arrows, swipe, position indicator, thumbnails, lightbox Dialog with Esc and focus return; video autoplays only in view and never under reduced motion (poster + play button); placeholder per `DESIGN.md` for `src` undefined; script converts `.mov`/`.mp4` to MP4 + WebM + `.webp` poster at 1280px and images to WebP + AVIF, fails with a clear message when ffmpeg is missing |
| T3 | Layout, sections, case study page, shadcn theming | `ui-builder` | T1, T2 | `src/app/globals.css`, `src/app/[locale]/page.tsx`, `src/app/[locale]/work/[slug]/page.tsx`, `src/content/stack.ts`, `src/components/{layout/Navbar,layout/MobileNav,layout/Footer}.tsx`, `src/components/sections/*`, `src/components/work/*`, `src/components/ui/*`, deletion of old sections, `src/components/motion/{BackgroundGrid,ScrollProgress,SmoothScroll,FadeIn}.tsx`, `src/lib/{projects,experience,site}.ts` | Section 6 implemented; every string from messages or `projects.ts`; no inline colour styles, no hex; body ≥ 1rem, labels ≥ 0.75rem; touch targets ≥ 44px; one `h1` per page, ordered headings; skip link; visible focus; works at 375, 768, 1280, 1920 with no horizontal scroll; `tsc` and `next build` pass |
| T4 | Motion | `motion` | T3 | `src/components/motion/*`, and animation props/wrappers inside files from T3 | Tokens 4.4 only; hero visible at first paint without JS; section reveal once, opacity + small translate; Process line progress tied to scroll; hover/press feedback on rows and buttons; language switch does not flash; reduced motion: fades only; only `transform`/`opacity` |
| T5 | Audit | `qa-auditor` | T4 | none (read-only) | Report per its definition |
| T6 | Fixes from T5 | assigned per finding | T5 | per finding | Findings P0–P2 closed, re-verified by `qa-auditor` |

## 8. Known environment notes

- `next dev --turbopack` fails to resolve Google Fonts on this machine; the `dev` script uses webpack.
- A dev server may be running on port 3000. Do not start a second one on the same port; do not run `next build` while relying on it (use `npx tsc --noEmit` during work, `next build` at the end of a task).
- No commits, no pushes, no attribution lines, no mention of AI tooling anywhere.
