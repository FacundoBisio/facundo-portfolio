# Rediseño del portfolio — facundo-portfolio-two

Vas a rediseñar mi portfolio personal (repo actual, deploy en facundo-portfolio-two.vercel.app). Hoy funciona y se ve bien, pero quiero llevarlo a otro nivel: que no parezca hecho por una IA ni salido de un template, que muestre **cómo trabajo** (no solo una lista de proyectos), y que esté alineado con mi nuevo CV orientado a producto.

Trabajá por fases. Al final de cada fase, frená, mostrame qué hiciste (capturas o el link de dev) y esperá mi OK antes de seguir.

---

## Orquestación: vos planificás, los subagentes ejecutan

Esta sesión corre con **Claude Fable** como orquestador. Tu trabajo es pensar, decidir y revisar, no escribir la mayor parte del código.

**Lo que hacés vos (Fable), sin delegar:**
- Fase 0 completa (análisis del repo, Impeccable, `PRODUCT.md`, `DESIGN.md`, crítica del sitio actual).
- Fase 1 completa (estructura, arquitectura, copy).
- Escribir `PLAN.md` en la raíz con: arquitectura final, árbol de carpetas y componentes, tokens de diseño, contratos compartidos (tipos de `projects.ts`, estructura de los diccionarios i18n, tokens de motion: duraciones y easings), y la lista de tareas con dependencias, el agente asignado, los archivos que toca cada tarea y los criterios de aceptación.
- Revisar el resultado de cada subagente contra `PLAN.md` y `DESIGN.md` antes de darlo por terminado. Si algo no cumple, se lo devolvés con el problema concreto.
- Los checkpoints conmigo.

**Subagentes:** creá estas definiciones en `.claude/agents/` (frontmatter con `name`, `description`, `model` y `tools`). Cada uno lee `PLAN.md` y `DESIGN.md` antes de empezar y trabaja solo sobre los archivos que tiene asignados.

| Agente | Modelo | Responsabilidad |
|---|---|---|
| `ui-builder` | opus | Tematizar shadcn/ui, layout, secciones, componentes base |
| `media-carousel` | opus | Carrusel, lightbox, lógica de video, `projects.ts`, script de ffmpeg |
| `motion` | opus | Transiciones y animaciones con Motion, con la skill de Impeccable |
| `i18n-content` | sonnet | Sistema de idiomas, diccionarios EN/ES, toggle, SEO por idioma, swap del CV |
| `qa-auditor` | sonnet | Lighthouse, accesibilidad, responsive, `build` y `lint`, `/impeccable audit`. No edita código: reporta los problemas |

**Reglas de delegación:**
- **Paralelo solo si los archivos no se pisan.** `i18n-content` y la parte de script y datos de `media-carousel` pueden correr en paralelo con `ui-builder`. `motion` va **después** de `ui-builder`, porque anima componentes que tienen que existir primero. `qa-auditor` va al final de cada fase.
- Si dos tareas tocan el mismo archivo, se hacen en secuencia o una aislada en un git worktree, y después mergeás vos.
- Los contratos compartidos (tipos, tokens, keys de i18n) los definís vos en `PLAN.md` **antes** de delegar. Los subagentes no los cambian: si necesitan un cambio, te lo piden.
- Cada subagente termina con un reporte corto: qué archivos tocó, qué decisiones tomó y qué `TODO:` dejó.
- Las reglas generales de abajo valen también para todos los subagentes: no commitean y no agregan atribución.

---

## Reglas generales

- **Antes de tocar nada**, analizá el repo: framework (Vite/React o Next.js), router, estructura de carpetas, estilos, dependencias y cómo se despliega. **No migres de framework** salvo que haya un motivo técnico concreto; si lo hay, explicámelo y esperá mi OK.
- TypeScript estricto. Nada de `any`.
- **Commits:** no hagas commits ni push. Yo commiteo. No agregues `Co-Authored-By` ni ninguna mención a Claude en ningún archivo, commit ni comentario.
- No inventes datos: métricas, clientes, testimonios ni logos que no estén en este prompt o en el repo. Si falta algo, dejá un `TODO:` claro y avisame.
- Todo el contenido en **inglés por defecto**, con traducción completa a **español**.

---

## Fase 0 — Setup de diseño · *Fable*

1. Instalá **Impeccable** en el proyecto (`npx impeccable install`, scope proyecto, provider Claude Code). Si el comando cambió, buscá cómo se instala hoy en impeccable.style y usá eso.
2. Corré `/impeccable init` (o el equivalente actual) para generar `PRODUCT.md` y `DESIGN.md`. Contexto para responder:
   - **Audiencia:** recruiters y hiring managers de empresas de producto internacionales (US/EU, remoto), founders que buscan un dev full-stack, y clientes locales (Argentina).
   - **Objetivo:** que en menos de 30 segundos entiendan que construyo y opero productos reales de punta a punta, y que me escriban o descarguen el CV.
   - **Voz:** directa, técnica sin jerga vacía, segura sin vender humo. Nada de "passionate developer", "cutting-edge" ni "pixel-perfect".
   - **Identidad actual (punto de partida, se puede evolucionar):** dark editorial minimalista, acento lima/verde, tipografías DM Serif Display / Manrope / DM Mono.
   - **Anti-referencias:** landings SaaS genéricas, gradientes violeta-azul, glassmorphism por todos lados, grids de cards iguales con íconos, hero centrado con "Hi, I'm X 👋".
3. Instalá **shadcn/ui** (si no está) y usalo como base de componentes: `Button`, `Carousel` (Embla), `Dialog`, `Tabs`, `Badge`, `Tooltip`, `DropdownMenu`, `Sheet` (menú mobile). **Tematizá shadcn con los tokens de `DESIGN.md`**: no quiero el look default de shadcn.
4. Corré `/impeccable critique` y `/impeccable audit` sobre el sitio **actual** y pasame un resumen de los problemas encontrados antes de rediseñar.

**Checkpoint:** mostrame `PRODUCT.md`, `DESIGN.md` y la crítica del sitio actual.

---

## Fase 1 — Estructura y contenido · *Fable* (termina con `PLAN.md`)

Usá `/impeccable shape` para planificar la UX antes de escribir código. Propuesta de secciones (cuestionala si ves algo mejor):

1. **Hero:** nombre, headline *"Full-Stack Product Developer"*, una línea de propuesta de valor (ver resumen abajo), CTAs **"Download CV"** y **"Get in touch"**, y un indicador *"Córdoba, Argentina · UTC-3 · Open to remote"*.
2. **Selected work:** los proyectos como casos de estudio (ver Fase 2). Este es el corazón del sitio.
3. **How I work:** mi workflow real en 4–5 pasos: discovery con el dueño del negocio → scope y presupuesto por etapas → modelo de datos y arquitectura → build e iteración con demos → deploy, mantenimiento y suscripción. Con una animación o diagrama que lo cuente, no una lista de íconos.
4. **Experience:** timeline compacto basado en el CV.
5. **Stack:** agrupado por área (Frontend / Backend / Data / Infra / AI), sin barras de porcentaje ni "años de experiencia" como gráfico.
6. **Teaching:** bloque corto sobre mi rol docente en el Instituto Salesiano VILLADA (lo uso como prueba de comunicación técnica).
7. **Contact:** email, LinkedIn, GitHub y descarga del CV.

### Contenido fuente (de mi CV en inglés, es la fuente de verdad)

**Summary:** Product-minded full-stack developer with 2+ years shipping web products end to end (data model, APIs, UI, deployment and ongoing iteration) for clients in Argentina and Spain. I currently build and run two subscription-based platforms for paying clients, both going to production in December 2026. Main stack: Next.js, TypeScript and PostgreSQL on serverless infrastructure (Vercel, Cloudflare Workers, AWS Lambda), plus LLM + WhatsApp Business API workflows. Software Engineering student (year 3 of 5) and programming teacher.

**Proyectos (en este orden):**

| Proyecto | Qué es | Stack | Link |
|---|---|---|---|
| Virtual Rep CBA | E-commerce de repuestos de motor e inyección. Búsqueda por nombre y código OEM, selector de vehículo (marca/modelo/año), filtros, pedido por WhatsApp. Cliente pago, modelo de suscripción. | Next.js, TS, Tailwind, shadcn/ui, Neon Postgres, Drizzle, Vercel | virtualrepcba-web.vercel.app |
| Contigiani Briñón Real Estate | Web pública + admin de propiedades + CRM propio, reemplaza el sitio y el CRM de terceros del cliente. Buscador, favoritos, tasaciones. Integración con Zonaprop planificada. Suscripción mensual. | Next.js, TS, Cloudflare Workers, Neon, R2, Cron Triggers, Drizzle | contigiani-sitio.facubisio433.workers.dev (preview) |
| Phantom-Stock | SaaS de inventario multi-tenant (producto propio). JWT + RBAC, chatbot con LLM sobre WhatsApp Business API, dashboard con Recharts, backend en AWS Lambda. | React, Node, Express, Postgres, Prisma, LLMs, AWS Lambda | stock-manager-sigma-seven.vercel.app |
| FFMates | E-commerce propio de mates. Migración React → Next.js por performance (SSR/SSG). | Next.js, TS, Zustand, Vercel | tienda-mates.vercel.app |
| Confituras Palmelita (España) | Sitio multilenguaje, carga < 1 s, SEO internacional. | HTML, Vanilla JS, Tailwind v4, PHP | confituras.palmelita.es |
| EUSA Partners (España) | Sitio premium de captación de inversores, SEO técnico completo. | HTML, JS, Tailwind v4, PHP, JSON-LD | eusa-partners.com |
| Agent Creator | App full-stack con backend en Go/Fiber, MySQL, Redis (cache + rate limiting), Docker Compose. | Next.js, Go, MySQL, Redis, Docker | TODO: link al repo |

**Experiencia:** Freelance Full-Stack, plataformas por suscripción (Aug 2026 – Present) · Programming Teacher (MEP), Instituto Salesiano VILLADA (Aug 2026 – Present) · Phantom-Stock (Mar–Jul 2026) · Confituras Palmelita (Dec 2025 – Feb 2026) · EUSA Partners (Oct–Dec 2025) · FFMates (Mar–Oct 2025) · Downisup Córdoba, ONG (Mar–Dec 2024) · Kunan S.A., pasantía (Jul–Oct 2024).

**Educación:** Software Engineering, Universidad Siglo 21 (2024 – present, year 3/5) · Programming Technician, Instituto Salesiano VILLADA (2024). **Idiomas:** Spanish (native), English B2 (Cambridge FCE).

**Contacto:** facubisio433@gmail.com · linkedin.com/in/facundo-bisio · github.com/FacundoBisio

**Checkpoint:** wireframe o estructura de secciones + copy en inglés para revisar antes de implementar.

---

## Fase 2 — Carrusel de proyectos con video y fotos · *`ui-builder` → `media-carousel`*

> Antes de esta fase, `ui-builder` implementa la estructura de la Fase 1 (layout, secciones, componentes tematizados). En paralelo, `media-carousel` puede armar `projects.ts` y el script de ffmpeg.

Cada proyecto destacado (al menos los 4 primeros) tiene un **case study** con un carrusel de medios que muestra el producto en uso y mi proceso:

- **Tipos de slide:** video corto (clip de 15–40 s del producto funcionando), screenshots, y slides de "proceso" (diagrama de arquitectura, modelo de datos, antes/después, captura del admin). Cada slide lleva un caption corto que explique qué se ve.
- **Componente:** `Carousel` de shadcn (Embla) con navegación por teclado, swipe en mobile, indicadores de posición y miniaturas. Al hacer click se abre en `Dialog` a pantalla completa (lightbox).
- **Videos:** `<video muted playsInline loop preload="none" poster=...>`. Autoplay **solo** cuando el slide está visible (IntersectionObserver) y pausa al salir. Formatos MP4 (H.264) + WebM, máximo ~2–4 MB por clip, 1280 px de ancho. Si `prefers-reduced-motion`, no hay autoplay: se muestra el poster con botón de play.
- **Datos:** definí los medios en un archivo tipado (p. ej. `src/content/projects.ts`) con `type: 'video' | 'image' | 'diagram'`, `src`, `poster`, `alt` y `caption` en los dos idiomas. Si un medio todavía no existe, mostrá un placeholder elegante y dejá `TODO:`. Yo grabo los videos después.
- **Script de medios:** creá `scripts/optimize-media.(sh|ts)` que, usando ffmpeg, convierta un `.mov`/`.mp4` crudo en MP4 + WebM comprimidos + un poster `.webp`. También pasá las imágenes a WebP/AVIF. Documentalo en el README.
- El case study (página propia o `Dialog`, elegí lo que funcione mejor y justificalo) incluye: problema del cliente, mi rol, decisiones técnicas clave, stack, resultado o estado, y links.

---

## Fase 3 — Motion y transiciones · *`motion`*

Quiero que el sitio se sienta vivo y fluido, pero **cada animación tiene que tener un propósito** (guiar la atención, mostrar relaciones, dar feedback). Usá `/impeccable animate` y la referencia de motion de Impeccable.

- Librería: **Motion** (`motion/react`, ex Framer Motion). Para transiciones entre vistas o entre la card y el case study, usá `layoutId` (shared element) o la View Transitions API si el router lo soporta.
- Ideas a evaluar: entrada del hero con stagger de texto, reveal on scroll en las secciones (sutil, una sola vez), card → case study con shared layout, hover con micro-interacciones en cards y botones, transición animada al cambiar de idioma, sección "How I work" con progreso ligado al scroll, cursor o spotlight sutil en el hero (solo desktop).
- **Límites:** solo animar `transform` y `opacity`, nada de layout thrashing. Duraciones de 150–500 ms con easing consistente definido en tokens. Respetar `prefers-reduced-motion` (sin desplazamientos ni autoplay, solo fades). Nada que bloquee el LCP: el hero tiene que ser legible al primer paint.

---

## Fase 4 — Idiomas (EN / ES) · *`i18n-content`* (puede ir en paralelo desde la Fase 2)

- **Inglés por defecto** y español completo, incluido el contenido de proyectos, captions, meta tags y `alt`.
- Si es Next.js, usá `next-intl` con rutas `/` (en) y `/es`. Si es Vite/React, usá un sistema liviano tipado (diccionarios `en.ts` / `es.ts` con un tipo compartido, para que falte una key y no compile), con el idioma en la URL (`?lang=es` o `/es`) y en `localStorage`.
- **Toggle EN/ES** visible en el header (y en el `Sheet` mobile), accesible (`aria-label`, `lang` del `<html>` actualizado) y con una transición suave del contenido.
- `hreflang` y meta tags por idioma.

---

## Fase 5 — CV · *`i18n-content`*

- Reemplazá el CV viejo por los nuevos. Te los dejo en la raíz del repo; movelos a `public/cv/`:
  - `FacundoBisio_11-26_CV_EN_Product.pdf` → **CV por defecto** (modo EN).
  - `FacundoBisio_11-26_CV.pdf` → se descarga cuando el sitio está en ES.
- Borrá el PDF viejo y actualizá **todas** las referencias (hero, contacto, footer, meta).
- El botón "Download CV" / "Descargar CV" sirve el archivo del idioma activo, con el atributo `download` y un nombre de archivo limpio.

---

## Fase 6 — Calidad y cierre · *`qa-auditor` reporta → Fable asigna los fixes → `qa-auditor` verifica*

1. Corré `/impeccable audit`, `/impeccable critique` y `/impeccable polish`, y corregí lo que salga.
2. Accesibilidad: contraste AA, foco visible, navegación completa por teclado (carrusel y lightbox incluidos), `alt` en todos los medios, skip link.
3. Performance: Lighthouse mobile ≥ 90 en Performance y ≥ 95 en Accessibility, Best Practices y SEO. Lazy load de todo lo que está fuera del primer viewport. Fuentes con `font-display: swap` y preload de la principal.
4. Responsive: revisalo en 375, 768, 1280 y 1920 px.
5. SEO: title y description por idioma, Open Graph con imagen nueva, `sitemap`, JSON-LD `Person`.
6. Asegurate de que `build` y `lint` pasen sin errores.
7. Pasame un resumen final con: qué cambió, la lista de `TODO:` pendientes (videos a grabar, links que faltan) y cómo grabar y procesar los videos con el script.
