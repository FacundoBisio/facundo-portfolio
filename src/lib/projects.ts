export interface Project {
  num: string
  featured?: boolean
  title: string
  subtitle: string
  tags: string[]
  live?: string
  repo?: string
}

export const projects: Project[] = [
  {
    num: '01',
    featured: true,
    title: 'Phantom-Stock SaaS',
    subtitle:
      'Plataforma SaaS de gestión de inventario multi-tenant con IA conversacional integrada en WhatsApp. Permite a PYMEs controlar su stock, generar reportes y atender clientes sin salir de WhatsApp. Construido de cero con PostgreSQL, Prisma ORM, Node.js, React y Recharts.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'LLMs', 'WhatsApp API', 'JWT/RBAC', 'Recharts'],
    live: 'https://stock-manager-sigma-seven.vercel.app/',
  },
  {
    num: '02',
    title: 'FFMates E-Commerce',
    subtitle:
      'Plataforma e-commerce completa migrada a Next.js con TypeScript — catálogo, carrito (Zustand), checkout y gestión de pedidos. SSR/SSG para tiempos de carga optimizados y mejor SEO, next/image para lazy loading de productos, rutas dinámicas por categoría y code splitting automático. Altos scores en Core Web Vitals (LCP, CLS, FID). Desarrollado end-to-end en solitario.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Context API', 'Vercel'],
    live: 'https://tienda-mates.vercel.app/',
  },
  {
    num: '03',
    title: 'Confituras Palmelita',
    subtitle:
      "Sitio corporativo multi-idioma para empresa española de confituras. Sub-1s de carga, zero JS framework overhead, SEO internacional con hreflang y sitemap. Deploy completo FTP/DNS.",
    tags: ['HTML5', 'Tailwind v4', 'PHP', "SEO Int'l"],
    live: 'https://confituras.palmelita.es/',
  },
  {
    num: '04',
    title: 'EUSA Partners',
    subtitle:
      'Plataforma de captación de inversores con animaciones CSS premium, formularios optimistas, sanitización CORS en PHP y stack técnico SEO completo (JSON-LD, Open Graph, Core Web Vitals altos).',
    tags: ['HTML5', 'Tailwind v4', 'PHP', 'JSON-LD'],
    live: 'https://eusa-partners.com/',
  },
  {
    num: '05',
    title: 'Weather Dashboard',
    subtitle:
      'App meteorológica mobile-first con transiciones animadas (Framer Motion), gráficos de pronóstico multi-día (Recharts), integración con OpenWeatherMap API y manejo de errores async.',
    tags: ['React', 'Tailwind CSS', 'Recharts', 'Framer Motion'],
    live: 'https://facu-weather.vercel.app',
    repo: 'https://github.com/FacundoBisio/clima-app',
  },
  {
    num: '06',
    title: 'Este Portfolio',
    subtitle:
      'Portfolio personal construido con Next.js 15, TypeScript, Tailwind CSS v4 y Framer Motion 12. App Router, Server Components, metadata API y fuentes optimizadas con next/font.',
    tags: ['Next.js 15', 'TypeScript', 'Tailwind v4', 'Framer Motion'],
    live: 'https://facundo-portfolio-two.vercel.app',
    repo: 'https://github.com/FacundoBisio/facundo-portfolio',
  },
]
