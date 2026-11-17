import type { Project } from './types'

// Facts come from the CV table in prompt-portfolio-redesign.md and the previous
// src/lib/experience.ts (deleted; see git history). Nothing here may be added without a source.
// Media: a slide without `src` renders the placeholder. Process recordings with
// `node scripts/optimize-media.mjs <slug> <files…>` and fill src / webm / poster.

const PROD_DEC_2026 = {
  en: 'Going to production in December 2026',
  es: 'Sale a producción en diciembre de 2026',
}

const LIVE_SITE = { en: 'Live site', es: 'Sitio en línea' }

export const projects: Project[] = [
  {
    slug: 'contigiani-brinon',
    name: 'Contigiani Briñón Real Estate',
    featured: true,
    kind: { en: 'Client · monthly subscription', es: 'Cliente · suscripción mensual' },
    summary: {
      en: 'Public site, property admin and an in-house CRM (in development) for a real estate agency, replacing the third-party site and CRM it used before. Search, favourites and valuations.',
      es: 'Web pública, admin de propiedades y CRM propio (en desarrollo) para una inmobiliaria, en reemplazo del sitio y el CRM de terceros que usaba. Buscador, favoritos y tasaciones.',
    },
    stack: ['Next.js', 'TypeScript', 'Cloudflare Workers', 'Neon', 'Cloudflare R2', 'Cron Triggers', 'Drizzle'],
    status: PROD_DEC_2026,
    links: [
      {
        label: { en: 'Preview', es: 'Vista previa' },
        href: 'https://contigiani-sitio.facubisio433.workers.dev',
      },
    ],
    caseStudy: {
      problem: {
        en: 'The agency ran on a third-party website and a separate third-party CRM. Enquiries arrived in different places and loading a property took time. The goal is one platform built for them that covers both.',
        es: 'La inmobiliaria funcionaba con un sitio web de terceros y un CRM de terceros por separado. Las consultas llegaban por distintos lados y cargar una propiedad llevaba tiempo. El objetivo es una sola plataforma hecha para ellos que cubra las dos cosas.',
      },
      role: {
        en: 'I build and run the platform end to end for a paying client: public site, property admin, CRM (in development) and deployment. It is paid as a monthly subscription.',
        es: 'Construyo y opero la plataforma de punta a punta para un cliente que paga: web pública, admin de propiedades, CRM (en desarrollo) y deploy. Se cobra como suscripción mensual.',
      },
      decisions: {
        en: [
          'One product covers the public site, the property admin and the CRM, now in development, replacing two third-party tools.',
          'Every enquiry lands in one place, tied to the property and the client it belongs to.',
          'Property loading and client management are built around how the agency works, to cut the hours spent on both.',
          'Search, favourites and valuations on the public site, with a design made for the agency rather than a template.',
          'Next.js on Cloudflare Workers, with files stored in Cloudflare R2.',
          'Cron Triggers for scheduled jobs.',
          'Neon Postgres with Drizzle as the data layer.',
        ],
        es: [
          'Un solo producto cubre la web pública, el admin de propiedades y el CRM, hoy en desarrollo, en lugar de dos herramientas de terceros.',
          'Todas las consultas llegan a un solo lugar, asociadas a la propiedad y al cliente que corresponde.',
          'La carga de propiedades y el manejo de clientes siguen la forma de trabajar de la inmobiliaria, para ahorrar horas en las dos tareas.',
          'Buscador, favoritos y tasaciones en la web pública, con un diseño hecho para la inmobiliaria y no una plantilla.',
          'Next.js en Cloudflare Workers, con los archivos en Cloudflare R2.',
          'Cron Triggers para las tareas programadas.',
          'Neon Postgres con Drizzle como capa de datos.',
        ],
      },
      outcome: {
        en: 'Going to production in December 2026 on a monthly subscription. The CRM is in development: today every enquiry already lands in one inbox in the panel. An integration with Zonaprop is planned. The link below is a preview.',
        es: 'Sale a producción en diciembre de 2026 con suscripción mensual. El CRM está en desarrollo: hoy todas las consultas ya llegan a una sola bandeja en el panel. Hay una integración con Zonaprop planificada. El link de abajo es una vista previa.',
      },
    },
    media: [
      {
        type: 'image',
        src: '/media/contigiani-brinon/home.webp',
        alt: {
          en: 'The Contigiani Briñón home page: full-width hero with the agency name, the "Ideas que se concretan" headline and buttons to browse properties or request a valuation.',
          es: 'La portada de Contigiani Briñón: hero a todo el ancho con el nombre de la inmobiliaria, el título "Ideas que se concretan" y botones para ver propiedades o pedir una tasación.',
        },
        caption: {
          en: 'Home page of the public site.',
          es: 'Portada de la web pública.',
        },
      },
      {
        type: 'video',
        src: '/media/contigiani-brinon/search.mp4',
        webm: '/media/contigiani-brinon/search.webm',
        poster: '/media/contigiani-brinon/search.webp',
        alt: {
          en: 'Screen recording of the Contigiani Briñón public site: filtering properties and opening a listing.',
          es: 'Grabación de pantalla de la web pública de Contigiani Briñón: filtrado de propiedades y apertura de una ficha.',
        },
        caption: {
          en: 'Property search on the public site.',
          es: 'Búsqueda de propiedades en la web pública.',
        },
      },
      {
        type: 'image',
        src: '/media/contigiani-brinon/admin.webp',
        alt: {
          en: 'The property editor: publication status controls and the photo manager with drag-to-reorder and cover selection.',
          es: 'El editor de propiedades: controles de estado de publicación y el gestor de fotos con orden por arrastre y elección de portada.',
        },
        caption: {
          en: 'Property admin: creating and editing listings.',
          es: 'Admin de propiedades: alta y edición de fichas.',
        },
      },
      {
        type: 'image',
        src: '/media/contigiani-brinon/crm.webp',
        alt: {
          en: 'The enquiries inbox of the Contigiani Briñón panel: each enquiry linked to its property, with a status and WhatsApp, call and email actions. Contact details are placeholders.',
          es: 'La bandeja de consultas del panel de Contigiani Briñón: cada consulta asociada a su propiedad, con estado y acciones de WhatsApp, llamada y email. Los datos de contacto son de ejemplo.',
        },
        caption: {
          en: 'The enquiries inbox, the base of the CRM in development.',
          es: 'La bandeja de consultas, base del CRM en desarrollo.',
        },
      },
      {
        type: 'image',
        src: '/media/contigiani-brinon/featured.webp',
        alt: {
          en: 'Featured listings grid: property cards with photo, price, location, bedrooms, bathrooms and area, plus a valuation call-to-action on the side.',
          es: 'Grilla de inmuebles destacados: tarjetas con foto, precio, ubicación, dormitorios, baños y superficie, y un llamado a pedir tasación al costado.',
        },
        caption: {
          en: 'Featured properties on the home page.',
          es: 'Inmuebles destacados en la portada.',
        },
      },
      {
        type: 'image',
        src: '/media/contigiani-brinon/map.webp',
        alt: {
          en: 'Property search in map view: price markers over a map of Córdoba with the result count and the list/map switch.',
          es: 'Búsqueda de propiedades en vista mapa: marcadores con precio sobre un mapa de Córdoba, con la cantidad de resultados y el cambio entre lista y mapa.',
        },
        caption: {
          en: 'Search results on the map.',
          es: 'Resultados de búsqueda en el mapa.',
        },
      },
      {
        type: 'diagram',
        src: '/media/contigiani-brinon/architecture.svg',
        alt: {
          en: 'Architecture diagram: Next.js on Cloudflare Workers, Neon Postgres through Drizzle, files in R2 and scheduled jobs on Cron Triggers.',
          es: 'Diagrama de arquitectura: Next.js en Cloudflare Workers, Neon Postgres con Drizzle, archivos en R2 y tareas programadas con Cron Triggers.',
        },
        caption: {
          en: 'Architecture: Workers, Neon, R2 and Cron Triggers.',
          es: 'Arquitectura: Workers, Neon, R2 y Cron Triggers.',
        },
      },
    ],
  },
  {
    slug: 'virtual-rep-cba',
    name: 'Virtual Rep CBA',
    featured: true,
    kind: { en: 'Client · subscription', es: 'Cliente · suscripción' },
    summary: {
      en: 'E-commerce for engine and injection parts. Search by part name or OEM code, a make, model and year vehicle selector, filters, and orders sent over WhatsApp.',
      es: 'E-commerce de repuestos de motor e inyección. Búsqueda por nombre o código OEM, selector de vehículo por marca, modelo y año, filtros y pedidos por WhatsApp.',
    },
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Neon Postgres', 'Drizzle', 'Vercel'],
    status: PROD_DEC_2026,
    links: [{ label: LIVE_SITE, href: 'https://virtualrepcba-web.vercel.app' }],
    caseStudy: {
      problem: {
        en: 'The client sells engine and injection parts and used to sell from a PDF catalogue: no live prices, no way to check whether a part fits a given car, and every quote done by hand. Buyers identify a part by its name, by its OEM code or by the vehicle it goes in, and the store has to answer all three before an order can start.',
        es: 'El cliente vende repuestos de motor e inyección y antes vendía con un catálogo en PDF: sin precios al día, sin forma de saber si una pieza sirve para un auto y con cada presupuesto armado a mano. Quien compra identifica una pieza por su nombre, por su código OEM o por el vehículo en el que va, y la tienda tiene que responder a las tres búsquedas antes de que empiece un pedido.',
      },
      role: {
        en: 'I build and run the platform end to end for a paying client: data model, catalogue and search, storefront and deployment. It is paid as a subscription.',
        es: 'Construyo y opero la plataforma de punta a punta para un cliente que paga: modelo de datos, catálogo y búsqueda, tienda y deploy. Se cobra como suscripción.',
      },
      decisions: {
        en: [
          'Search works on both the part name and the OEM code.',
          'A make, model and year selector narrows the catalogue to one vehicle, and filters refine it further.',
          'The buyer builds a quote on the spot, with prices and vehicle compatibility, and sends it as an order over WhatsApp, which is where this client\x27s customers already buy.',
          'Postgres on Neon with Drizzle as the data layer, Next.js on Vercel.',
        ],
        es: [
          'La búsqueda funciona por nombre de la pieza y por código OEM.',
          'Un selector de marca, modelo y año reduce el catálogo a un vehículo, y los filtros lo afinan.',
          'Quien compra arma un presupuesto al instante, con precios y compatibilidad por vehículo, y lo manda como pedido por WhatsApp, que es donde ya compran los clientes de este negocio.',
          'Postgres en Neon con Drizzle como capa de datos, Next.js en Vercel.',
        ],
      },
      outcome: {
        en: 'Going to production in December 2026. The client pays a subscription and I keep the platform running after launch.',
        es: 'Sale a producción en diciembre de 2026. El cliente paga una suscripción y yo mantengo la plataforma después del lanzamiento.',
      },
    },
    media: [
      {
        type: 'image',
        src: '/media/virtual-rep-cba/home.webp',
        alt: {
          en: 'The Virtual Rep CBA home page: headline on the left and a search box for a part name or code on the right.',
          es: 'La portada de Virtual Rep CBA: título a la izquierda y un buscador por nombre o código de repuesto a la derecha.',
        },
        caption: {
          en: 'Home page with the part search.',
          es: 'Portada con el buscador de repuestos.',
        },
      },
      {
        type: 'video',
        src: '/media/virtual-rep-cba/search.mp4',
        webm: '/media/virtual-rep-cba/search.webm',
        poster: '/media/virtual-rep-cba/search.webp',
        alt: {
          en: 'Screen recording of the Virtual Rep CBA store: choosing a Peugeot 208 2020 in the vehicle selector, searching for brake parts and adding a compatible disc to the order.',
          es: 'Grabación de pantalla de la tienda Virtual Rep CBA: elección de un Peugeot 208 2020 en el selector de vehículo, búsqueda de repuestos de freno y un disco compatible agregado al pedido.',
        },
        caption: {
          en: 'From the vehicle to a compatible part in the order.',
          es: 'Del vehículo a un repuesto compatible en el pedido.',
        },
      },
      {
        type: 'image',
        src: '/media/virtual-rep-cba/vehicle-selector.webp',
        alt: {
          en: 'The vehicle selector with make, model and year fields above the parts catalogue.',
          es: 'El selector de vehículo con los campos marca, modelo y año sobre el catálogo de repuestos.',
        },
        caption: {
          en: 'Vehicle selector: make, model and year narrow the catalogue.',
          es: 'Selector de vehículo: marca, modelo y año acotan el catálogo.',
        },
      },
      {
        type: 'image',
        src: '/media/virtual-rep-cba/results.webp',
        alt: {
          en: 'Search results for a part, with the filter panel beside the list.',
          es: 'Resultados de búsqueda de una pieza, con el panel de filtros junto a la lista.',
        },
        caption: {
          en: 'Search results with filters.',
          es: 'Resultados de búsqueda con filtros.',
        },
      },
      {
        type: 'image',
        src: '/media/virtual-rep-cba/cart.webp',
        alt: {
          en: 'The order panel: one item with price and quantity, the estimated total and optional vehicle fields to confirm compatibility.',
          es: 'El panel del pedido: un producto con precio y cantidad, el total estimado y campos opcionales del vehículo para confirmar compatibilidad.',
        },
        caption: {
          en: 'The order panel with vehicle details.',
          es: 'El panel del pedido con los datos del vehículo.',
        },
      },
      {
        type: 'diagram',
        src: '/media/virtual-rep-cba/architecture.svg',
        alt: {
          en: 'Architecture diagram: Next.js on Vercel reading Neon Postgres through Drizzle, with orders handed off to WhatsApp.',
          es: 'Diagrama de arquitectura: Next.js en Vercel leyendo Neon Postgres a través de Drizzle, con los pedidos derivados a WhatsApp.',
        },
        caption: {
          en: 'Architecture: Next.js on Vercel, Neon Postgres through Drizzle.',
          es: 'Arquitectura: Next.js en Vercel, Neon Postgres con Drizzle.',
        },
      },
    ],
  },
  {
    slug: 'ffmates',
    name: 'FFMates',
    featured: true,
    kind: { en: 'Own store · e-commerce', es: 'Tienda propia · e-commerce' },
    summary: {
      en: 'My own online store for mates: catalogue, cart, checkout and order management. Migrated from React to Next.js for performance.',
      es: 'Mi tienda online de mates: catálogo, carrito, checkout y gestión de pedidos. Migrada de React a Next.js por performance.',
    },
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Vercel'],
    status: { en: 'Live · built March to October 2025', es: 'En línea · desarrollada de marzo a octubre de 2025' },
    links: [{ label: LIVE_SITE, href: 'https://tienda-mates.vercel.app' }],
    caseStudy: {
      problem: {
        en: 'The store started as a React app rendered in the browser. Load time and search ranking needed pages that arrive already rendered.',
        es: 'La tienda empezó como una app de React renderizada en el navegador. El tiempo de carga y el posicionamiento en buscadores pedían páginas que lleguen ya renderizadas.',
      },
      role: {
        en: 'My own store. I built it alone, end to end.',
        es: 'Tienda propia. La desarrollé solo, de punta a punta.',
      },
      decisions: {
        en: [
          'Migrated from React to Next.js to render pages with SSR and SSG.',
          'Zustand for global state, so the cart stays in sync across the store.',
          'next/image for lazy-loaded product images, dynamic routes per category, and automatic code splitting.',
        ],
        es: [
          'Migración de React a Next.js para renderizar las páginas con SSR y SSG.',
          'Zustand para el estado global, así el carrito queda sincronizado en toda la tienda.',
          'next/image para cargar las imágenes de producto en diferido, rutas dinámicas por categoría y code splitting automático.',
        ],
      },
      outcome: {
        en: 'Live. Built between March and October 2025.',
        es: 'En línea. Desarrollada entre marzo y octubre de 2025.',
      },
    },
    media: [
      {
        type: 'image',
        src: '/media/ffmates/home.webp',
        alt: {
          en: 'The FFMates home page: green hero with the "El mate que te define" headline and buttons to explore the mates or read the story.',
          es: 'La portada de FFMates: hero verde con el título "El mate que te define" y botones para explorar los mates o leer la historia.',
        },
        caption: {
          en: 'Home page of the store.',
          es: 'Portada de la tienda.',
        },
      },
      {
        type: 'video',
        src: '/media/ffmates/checkout.mp4',
        webm: '/media/ffmates/checkout.webm',
        poster: '/media/ffmates/checkout.webp',
        alt: {
          en: 'Screen recording of the FFMates store: browsing a category, adding two mates to the cart and reaching the WhatsApp checkout.',
          es: 'Grabación de pantalla de la tienda FFMates: recorrido por una categoría, dos mates agregados al carrito y el checkout por WhatsApp.',
        },
        caption: {
          en: 'From the catalogue to checkout.',
          es: 'Del catálogo al checkout.',
        },
      },
      {
        type: 'image',
        src: '/media/ffmates/category.webp',
        alt: {
          en: 'A category page of the FFMates catalogue with its product grid.',
          es: 'Una página de categoría del catálogo de FFMates con su grilla de productos.',
        },
        caption: {
          en: 'Catalogue by category.',
          es: 'Catálogo por categoría.',
        },
      },
      {
        type: 'image',
        src: '/media/ffmates/cart.webp',
        alt: {
          en: 'The FFMates cart with products, quantities and the total.',
          es: 'El carrito de FFMates con productos, cantidades y el total.',
        },
        caption: {
          en: 'The cart, kept in sync with Zustand.',
          es: 'El carrito, sincronizado con Zustand.',
        },
      },
      {
        type: 'image',
        src: '/media/ffmates/about.webp',
        alt: {
          en: 'The "Nuestra historia" page: intro text, a row of the store\'s own figures and three cards on craftsmanship, nationwide shipping and personal attention.',
          es: 'La página "Nuestra historia": texto de presentación, una fila con datos de la tienda y tres tarjetas sobre calidad artesanal, envíos a todo el país y atención personalizada.',
        },
        caption: {
          en: 'The about page.',
          es: 'La página de nosotros.',
        },
      },
    ],
  },
  {
    slug: 'phantom-stock',
    name: 'Phantom-Stock',
    featured: true,
    kind: { en: 'Own product · SaaS', es: 'Producto propio · SaaS' },
    summary: {
      en: 'Multi-tenant inventory SaaS. Stock, roles and reports in a web dashboard, plus an LLM chatbot on WhatsApp that answers questions and updates stock by chat.',
      es: 'SaaS de inventario multi-tenant. Stock, roles y reportes en un dashboard web, más un chatbot con LLM en WhatsApp que responde consultas y actualiza el stock por chat.',
    },
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'JWT + RBAC', 'LLMs', 'WhatsApp Business API', 'Recharts', 'Cloudflare Workers'],
    status: { en: 'In use · runs the stock of FFMates', es: 'En uso · lleva el stock de FFMates' },
    links: [{ label: LIVE_SITE, href: 'https://stock-manager.facubisio433.workers.dev' }],
    caseStudy: {
      problem: {
        en: 'Small businesses tracking stock in spreadsheets: no real-time view, no record of who moved what, reports exported by hand, several roles with the same permissions, and customer questions answered one by one on WhatsApp.',
        es: 'Pymes que llevan el stock en planillas: sin visión en tiempo real, sin registro de quién movió qué, reportes exportados a mano, varios roles con los mismos permisos y consultas de clientes respondidas una por una por WhatsApp.',
      },
      role: {
        en: 'My own product. I designed and built all of it: relational schema, REST API, authentication, dashboard, the WhatsApp chatbot and the serverless deployment.',
        es: 'Producto propio. Lo diseñé y desarrollé completo: esquema relacional, API REST, autenticación, dashboard, el chatbot de WhatsApp y el deploy serverless.',
      },
      decisions: {
        en: [
          'Multi-tenant from the start, with JWT sessions and role-based access: admins, operators and customers each get their own view.',
          'An LLM connected to the WhatsApp Business API, so stock can be checked, added and removed by chat.',
          'PostgreSQL with Prisma as the data layer.',
          'Backend on Cloudflare Workers: no dedicated server, and it scales with demand.',
          'A Recharts dashboard with dynamic filters, and Excel export for reports.',
        ],
        es: [
          'Multi-tenant desde el principio, con sesiones JWT y acceso por roles: admins, operarios y clientes tienen cada uno su vista.',
          'Un LLM conectado a la WhatsApp Business API, para consultar, dar de alta y dar de baja stock por chat.',
          'PostgreSQL con Prisma como capa de datos.',
          'Backend en Cloudflare Workers: sin servidor dedicado y con escalado según la demanda.',
          'Un dashboard con Recharts y filtros dinámicos, y exportación a Excel para los reportes.',
        ],
      },
      outcome: {
        en: 'Built between March and July 2026. I use it myself to manage the stock of FFMates, my own e-commerce. The app is live at the link below.',
        es: 'Desarrollado entre marzo y julio de 2026. Lo uso yo mismo para llevar el stock de FFMates, mi e-commerce. La app está en línea en el link de abajo.',
      },
    },
    media: [
      {
        type: 'image',
        src: '/media/phantom-stock/home.webp',
        alt: {
          en: 'The Phantom Stock landing page: "Gestioná tu inventario de forma inteligente" headline, access buttons and a preview of the inventory summary.',
          es: 'La landing de Phantom Stock: título "Gestioná tu inventario de forma inteligente", botones de acceso y una vista previa del resumen de inventario.',
        },
        caption: {
          en: 'Landing page.',
          es: 'Landing page.',
        },
      },
      {
        type: 'video',
        src: '/media/phantom-stock/assistant.mp4',
        webm: '/media/phantom-stock/assistant.webm',
        poster: '/media/phantom-stock/assistant.webp',
        alt: {
          en: 'Screen recording of the Phantom-Stock dashboard: the in-app assistant opens and answers a request for an inventory summary.',
          es: 'Grabación de pantalla del dashboard de Phantom-Stock: se abre el asistente integrado y responde un pedido de resumen del inventario.',
        },
        caption: {
          en: 'Asking the in-app assistant about stock.',
          es: 'Consulta de stock al asistente integrado.',
        },
      },
      {
        type: 'image',
        src: '/media/phantom-stock/dashboard.webp',
        alt: {
          en: 'The Phantom-Stock dashboard: inventory totals, a category comparison chart and the stock status breakdown.',
          es: 'El dashboard de Phantom-Stock: totales del inventario, un gráfico comparativo por categoría y el estado del stock.',
        },
        caption: {
          en: 'Dashboard: charts with dynamic filters.',
          es: 'Dashboard: gráficos con filtros dinámicos.',
        },
      },
      {
        type: 'image',
        src: '/media/phantom-stock/roles.webp',
        alt: {
          en: 'The Share inventory panel, where each employee gets their own account with the reader or administrator role.',
          es: 'El panel Compartir inventario, donde cada empleado recibe su propia cuenta con rol de lector o administrador.',
        },
        caption: {
          en: 'Team access: reader and administrator roles.',
          es: 'Acceso del equipo: roles de lector y administrador.',
        },
      },
      {
        type: 'image',
        src: '/media/phantom-stock/panel.webp',
        alt: {
          en: 'The stock panel: inventory totals, a low-stock alert and the product table with SKU, price, stock and actions. Sample data.',
          es: 'El panel de stock: totales del inventario, una alerta de stock crítico y la tabla de productos con SKU, precio, stock y acciones. Datos de ejemplo.',
        },
        caption: {
          en: 'The stock panel and product table.',
          es: 'El panel de stock y la tabla de productos.',
        },
      },
      {
        type: 'image',
        src: '/media/phantom-stock/plans.webp',
        alt: {
          en: 'The plans page: Free, Pro and Enterprise cards with product limits and weekly assistant queries.',
          es: 'La página de planes: tarjetas Free, Pro y Enterprise con límites de productos y consultas semanales al asistente.',
        },
        caption: {
          en: 'Plans and their limits.',
          es: 'Planes y sus límites.',
        },
      },
      {
        type: 'diagram',
        src: '/media/phantom-stock/architecture.svg',
        alt: {
          en: 'Architecture diagram: React front end, Express API on Cloudflare Workers, PostgreSQL through Prisma, and an LLM connected to the WhatsApp Business API.',
          es: 'Diagrama de arquitectura: front end en React, API Express en Cloudflare Workers, PostgreSQL con Prisma y un LLM conectado a la WhatsApp Business API.',
        },
        caption: {
          en: 'Architecture: React, Express on Workers, Postgres, LLM and WhatsApp.',
          es: 'Arquitectura: React, Express en Workers, Postgres, LLM y WhatsApp.',
        },
      },
    ],
  },
  {
    slug: 'confituras-palmelita',
    name: 'Confituras Palmelita',
    featured: false,
    kind: { en: 'Client · Spain', es: 'Cliente · España' },
    summary: {
      en: 'Multilingual site for a Spanish jam maker. Loads in under a second, with international SEO: hreflang, sitemap and robots.txt.',
      es: 'Sitio multilenguaje para una empresa española de confituras. Carga en menos de un segundo, con SEO internacional: hreflang, sitemap y robots.txt.',
    },
    stack: ['HTML', 'Vanilla JS', 'Tailwind CSS v4', 'PHP'],
    status: { en: 'December 2025 to February 2026 · no longer online', es: 'Diciembre de 2025 a febrero de 2026 · ya no está en línea' },
    links: [],
    media: [],
  },
  {
    slug: 'eusa-partners',
    name: 'EUSA Partners',
    featured: false,
    kind: { en: 'Client · Spain', es: 'Cliente · España' },
    summary: {
      en: 'Investor-acquisition site with full technical SEO: JSON-LD, Open Graph and an XML sitemap.',
      es: 'Sitio de captación de inversores con SEO técnico completo: JSON-LD, Open Graph y sitemap XML.',
    },
    stack: ['HTML', 'JavaScript', 'Tailwind CSS v4', 'PHP', 'JSON-LD'],
    status: { en: 'October to December 2025 · no longer online', es: 'Octubre a diciembre de 2025 · ya no está en línea' },
    links: [],
    media: [
      {
        type: 'image',
        src: '/media/eusa-partners/home.webp',
        alt: {
          en: 'The EUSA home page: "Co-Build a Global, Investor-Ready Startup." headline over a skyline, with buttons for founders and investors.',
          es: 'La portada de EUSA: título "Co-Build a Global, Investor-Ready Startup." sobre edificios, con botones para fundadores e inversores.',
        },
        caption: {
          en: 'Home page.',
          es: 'Portada.',
        },
      },
      {
        type: 'image',
        src: '/media/eusa-partners/audiences.webp',
        alt: {
          en: 'Two panels side by side: "Raise & Scale" for founders and "Access Pre-Vetted Deal Flow" for investors.',
          es: 'Dos paneles lado a lado: "Raise & Scale" para fundadores y "Access Pre-Vetted Deal Flow" para inversores.',
        },
        caption: {
          en: 'One page, two audiences: founders and investors.',
          es: 'Una página, dos públicos: fundadores e inversores.',
        },
      },
      {
        type: 'image',
        src: '/media/eusa-partners/programs.webp',
        alt: {
          en: 'The programs section: four cards for Fundraising, Fundraising Sprint, Revenue Engine and Co-Founder Match.',
          es: 'La sección de programas: cuatro tarjetas para Fundraising, Fundraising Sprint, Revenue Engine y Co-Founder Match.',
        },
        caption: {
          en: 'The programs.',
          es: 'Los programas.',
        },
      },
    ],
  },
]

export const featuredProjects: Project[] = projects.filter((p) => p.featured)

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
