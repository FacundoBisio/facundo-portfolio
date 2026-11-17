# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences, in priority order:

1. **Recruiters and hiring managers at international product companies** (US/EU, remote roles). They skim many portfolios in a row, usually on a desktop, and decide in well under a minute whether to keep reading. Their job: confirm this person ships real products end to end, then get the CV or make contact.
2. **Founders looking for a full-stack developer.** They want evidence of ownership: someone who can take a product from data model to deployment and keep running it. They read deeper into one or two projects.
3. **Local clients in Argentina** (business owners). Less technical, Spanish-speaking, often on a phone. They want to see work for businesses like theirs and a simple way to get in touch.

## Product Purpose

The personal portfolio of Facundo Bisio, a full-stack product developer based in Córdoba, Argentina.

It exists so that a visitor understands, in under 30 seconds, that he builds **and operates** real products from end to end. Success is one of two actions: the visitor writes to him, or downloads the CV.

It replaces a version that reads as a list of projects. The new one has to show how he works, not only what he made.

## Positioning

Product-minded full-stack developer with 2+ years shipping web products end to end (data model, APIs, UI, deployment and ongoing iteration) for clients in Argentina and Spain.

What a neighbouring portfolio could not truthfully copy:

- He currently builds and runs two subscription-based platforms for paying clients, both going to production in December 2026. He is the operator, not only the builder.
- The work spans the whole chain: discovery with the business owner, staged scope and budget, data model and architecture, build with demos, then deployment, maintenance and a subscription.
- He teaches programming (Instituto Salesiano VILLADA), which stands as proof of technical communication.

## Operating Context

- Deployed on Vercel at `facundo-portfolio-two.vercel.app`.
- Reached from a CV link, a LinkedIn profile, a GitHub profile or a direct message. The visitor usually arrives with a specific question ("is this person worth an interview?") and little time.
- The CV is a first-class artifact: two PDFs, one per language, downloadable from the site.
- Working hours and location matter to remote employers: Córdoba, Argentina, UTC-3, open to remote.

## Capabilities and Constraints

**Content, in this order**

1. Hero: name, the headline "Full-Stack Product Developer", one line of value proposition, "Download CV" and "Get in touch", and the indicator "Córdoba, Argentina · UTC-3 · Open to remote".
2. Selected work, as case studies. This is the core of the site.
3. How I work: the real workflow in 4–5 steps.
4. Experience: a compact timeline.
5. Stack, grouped by area (Frontend / Backend / Data / Infra / AI). No percentage bars and no "years of experience" charts.
6. Teaching: a short block on the teaching role.
7. Contact: email, LinkedIn, GitHub and the CV download.

**Languages**

- English by default, with a complete Spanish translation: project content, captions, meta tags and `alt` text included.
- The CV download follows the active language.

**Case studies**

- Each featured project (at least the first four) has a case study: the client's problem, his role, key technical decisions, stack, result or status, and links.
- Each case study carries a media carousel: short product videos, screenshots and "process" slides (architecture diagram, data model, before/after, admin capture), every slide with a short caption.

**Technical constraints**

- Next.js 15 (App Router), React 19, TypeScript strict with no `any`, Tailwind CSS v4. No framework migration without a concrete technical reason.
- Motion animates only `transform` and `opacity`, respects `prefers-reduced-motion`, and never blocks the first paint of the hero.
- Targets: Lighthouse mobile ≥ 90 Performance and ≥ 95 Accessibility, Best Practices and SEO. Reviewed at 375, 768, 1280 and 1920 px.

**Source of truth**

The English CV. Where the current site disagrees with it (for example "3+ years" and "10+ projects in production" in the current hero), the CV wins.

**Decided**

- The phone number (+54 351 366-2570) stays in Contact in both languages.
- Only the seven projects of the CV are shown. Weather Dashboard and the portfolio itself are removed.

**Undecided**

- LinkedIn URL: the site links to `linkedin.com/in/facundo-bisio-25a104247/`; the CV text shows `linkedin.com/in/facundo-bisio`. Which one resolves is not confirmed.

## Brand Commitments

- **Name:** Facundo Bisio. **Headline:** Full-Stack Product Developer.
- **Voice:** direct, technical without empty jargon, confident without overselling. Never "passionate developer", "cutting-edge" or "pixel-perfect".
- **It must not look generated or lifted from a template.**
- **Anti-references:** generic SaaS landing pages, purple-to-blue gradients, glassmorphism everywhere, grids of identical cards with icons, a centred hero that opens with "Hi, I'm X 👋".

## Evidence on Hand

**Projects** (in display order)

| Project | What it is | Stack | Link |
|---|---|---|---|
| Virtual Rep CBA | E-commerce for engine and injection parts. Search by name and OEM code, vehicle selector (make/model/year), filters, ordering over WhatsApp. Paying client, subscription model. | Next.js, TypeScript, Tailwind, shadcn/ui, Neon Postgres, Drizzle, Vercel | virtualrepcba-web.vercel.app |
| Contigiani Briñón Real Estate | Public site + property admin + in-house CRM, replacing the client's third-party site and CRM. Search, favourites, valuations. Zonaprop integration planned. Monthly subscription. | Next.js, TypeScript, Cloudflare Workers, Neon, R2, Cron Triggers, Drizzle | contigiani-sitio.facubisio433.workers.dev (preview) |
| Phantom-Stock | Multi-tenant inventory SaaS (own product). JWT + RBAC, LLM chatbot over the WhatsApp Business API, Recharts dashboard, backend on AWS Lambda. | React, Node, Express, Postgres, Prisma, LLMs, AWS Lambda | stock-manager-sigma-seven.vercel.app |
| FFMates | Own e-commerce for mates. Migrated from React to Next.js for performance (SSR/SSG). | Next.js, TypeScript, Zustand, Vercel | tienda-mates.vercel.app |
| Confituras Palmelita (Spain) | Multilingual site, loads in under 1 s, international SEO. | HTML, Vanilla JS, Tailwind v4, PHP | confituras.palmelita.es |
| EUSA Partners (Spain) | Premium investor-acquisition site, full technical SEO. | HTML, JS, Tailwind v4, PHP, JSON-LD | eusa-partners.com |

**Experience:** Freelance Full-Stack, subscription platforms (Aug 2026 – present) · Programming Teacher (MEP), Instituto Salesiano VILLADA (Aug 2026 – present) · Phantom-Stock (Mar–Jul 2026) · Confituras Palmelita (Dec 2025 – Feb 2026) · EUSA Partners (Oct–Dec 2025) · FFMates (Mar–Oct 2025) · Downisup Córdoba, NGO (Mar–Dec 2024) · Kunan S.A., internship (Jul–Oct 2024).

**Education:** Software Engineering, Universidad Siglo 21 (2024 – present, year 3 of 5) · Programming Technician, Instituto Salesiano VILLADA (2024). **Languages:** Spanish (native), English B2 (Cambridge FCE).

**Contact:** facubisio433@gmail.com · +54 351 366-2570 · LinkedIn · github.com/FacundoBisio

**Assets in the repository:** a portrait photo (`public/images/yoiconico.jpg`) and the previous CV (`public/FacundoBisio_CV.pdf`, to be replaced).

**Not on hand yet, and not to be fabricated**

- Product videos, screenshots, architecture diagrams and data-model diagrams for the case studies. Recorded later; until then each slot shows a placeholder.
- The two new CV PDFs (`FacundoBisio_11-26_CV_EN_Product.pdf`, `FacundoBisio_11-26_CV.pdf`).
- Metrics, client names beyond those listed, testimonials and logos. None exist in the source material; none may be invented.

## Product Principles

1. **Proof over claims.** Show the product running and the decision behind it. An adjective is never the evidence.
2. **Operator, not only builder.** Every project says what happened after launch: who pays, who maintains it, what state it is in.
3. **Thirty seconds first, depth on demand.** The first screen answers who, what and how to reach him. The case studies reward the reader who stays.
4. **Nothing invented.** A missing number is a visible gap to fill later, never a plausible guess.
5. **Two languages, one site.** English and Spanish are equally complete. Neither is a degraded copy of the other.

## Accessibility & Inclusion

WCAG 2.1 AA: contrast, visible focus, complete keyboard navigation (carousel and lightbox included), `alt` text on every media item, a skip link, and a reduced-motion experience that keeps fades but drops movement and autoplay.
