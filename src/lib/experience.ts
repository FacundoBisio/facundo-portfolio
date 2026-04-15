export type BadgeType = 'saas' | 'freelance' | 'fullstack' | 'agile' | 'intern'

export interface Experience {
  date: string
  badge: string
  badgeType: BadgeType
  role: string
  company: string
  link?: string
  linkLabel?: string
  bullets: string[]
  tags: string[]
  deepDive?: {
    problems: string[]
    features: string[]
  }
}

export const BADGE_STYLES: Record<BadgeType, { bg: string; color: string }> = {
  saas:      { bg: 'rgba(212, 145, 58, 0.12)', color: 'var(--accent)' },
  freelance: { bg: 'rgba(212, 145, 58, 0.07)', color: 'var(--accent-light)' },
  fullstack: { bg: 'rgba(212, 145, 58, 0.10)', color: 'var(--accent)' },
  agile:     { bg: 'rgba(212, 145, 58, 0.08)', color: 'var(--accent)' },
  intern:    { bg: 'rgba(240, 237, 230, 0.06)', color: 'var(--muted)' },
}

export const experiences: Experience[] = [
  {
    date: 'Mar 2026 — Presente',
    badge: 'SaaS',
    badgeType: 'saas',
    role: 'Full-Stack Developer & AI Integrator',
    company: 'Phantom-Stock · Plataforma SaaS de gestión de inventario',
    link: 'https://stock-manager-sigma-seven.vercel.app/',
    linkLabel: 'stock-manager-sigma-seven.vercel.app',
    bullets: [
      'Diseñé y desarrollé un SaaS completo de gestión de inventario desde cero: DB relacional (PostgreSQL + Prisma ORM), API REST y dashboard en React.',
      'Construí un sistema JWT multi-tenant con control de acceso basado en roles (RBAC) y gestión segura de sesiones.',
      'Integré flujos conversacionales con LLMs conectados nativamente a WhatsApp Business API — automatizando soporte al cliente, ingesta de datos y actualizaciones de inventario por lenguaje natural.',
      'Optimicé el rendimiento frontend para grandes volúmenes: filtrado dinámico, visualización con Recharts y exportación a Excel.',
      'Desplegué el backend serverless en AWS Lambda con Prisma ORM — eliminando la dependencia de servidores dedicados y optimizando costos con escalado automático por demanda.',
    ],
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma ORM', 'JWT / RBAC', 'LLMs', 'WhatsApp API', 'AWS Lambda', 'Vercel'],
    deepDive: {
      problems: [
        'Stock gestionado en hojas de cálculo sin control en tiempo real',
        'Sin trazabilidad de movimientos de inventario por usuario',
        'Soporte al cliente manual y lento vía WhatsApp',
        'Imposible generar reportes de ventas/stock sin exportar manualmente',
        'Múltiples roles (admin, operario, cliente) sin permisos diferenciados',
        'Carga de datos asincrónica sin validaciones automáticas',
      ],
      features: [
        'Gestión de stock multi-tenant en tiempo real desde cualquier dispositivo',
        'Chatbot en WhatsApp con IA: consultas, altas y bajas de stock por chat',
        'Dashboard con Recharts: métricas visuales, filtros dinámicos y tendencias',
        'Exportación a Excel con un click — ideal para reportes contables',
        'RBAC granular: admins, operarios y clientes con vistas separadas',
        'Arquitectura cloud-native: Vercel + Render, zero downtime deploys',
      ],
    },
  },
  {
    date: 'Dic 2025 — Feb 2026',
    badge: 'Freelance',
    badgeType: 'freelance',
    role: 'Front-End Developer',
    company: 'Confituras Palmelita · España',
    link: 'https://confituras.palmelita.es/',
    linkLabel: 'confituras.palmelita.es',
    bullets: [
      'Sitio multi-idioma con carga sub-1s, sin overhead de framework JS y estrategia SEO internacional completa (hreflang, sitemap, robots.txt).',
      'Pipeline completo de deploy en servidor remoto (FTP/DNS) coordinando con cliente internacional.',
    ],
    tags: ['HTML5', 'Vanilla JS', 'Tailwind CSS v4', 'PHP', 'SEO Internacional'],
  },
  {
    date: 'Oct 2025 — Dic 2025',
    badge: 'Freelance',
    badgeType: 'freelance',
    role: 'Front-End Developer',
    company: 'EUSA Partners · España',
    link: 'https://eusa-partners.com/',
    linkLabel: 'eusa-partners.com',
    bullets: [
      'Plataforma premium de adquisición de inversores con animaciones CSS avanzadas, formularios con Optimistic UI y sanitización CORS en endpoints PHP.',
      'Stack de SEO técnico completo: JSON-LD, Open Graph, sitemap XML — logrando puntuaciones altas en Core Web Vitals.',
    ],
    tags: ['HTML5', 'JS', 'Tailwind CSS v4', 'PHP', 'JSON-LD', 'Open Graph'],
  },
  {
    date: 'Mar 2025 — Oct 2025',
    badge: 'Full-Stack',
    badgeType: 'fullstack',
    role: 'Full-Stack Developer',
    company: 'FFMates E-Commerce',
    link: 'https://tienda-mates.vercel.app/',
    linkLabel: 'tienda-mates.vercel.app',
    bullets: [
      'Desarrollé una plataforma e-commerce completa con Next.js — catálogo, carrito, checkout y gestión de pedidos — aprovechando SSR y SSG para tiempos de carga optimizados y mejor posicionamiento SEO.',
      'Implementé gestión de estado global con Zustand para sincronización de carrito en tiempo real, reduciendo la complejidad de componentes ~40%.',
      'Optimicé el rendimiento con next/image para carga lazy de productos, rutas dinámicas por categoría y code splitting automático — logrando scores altos en Core Web Vitals (LCP, CLS, FID).',
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Context API', 'Vercel'],
  },
  {
    date: 'Mar 2024 — Dic 2024',
    badge: 'Agile · NGO',
    badgeType: 'agile',
    role: 'Full-Stack Developer',
    company: 'Downisup Córdoba · ONG',
    bullets: [
      'Desarrollo de módulos React + Tailwind e integración de REST APIs para sincronización de datos en equipo multidisciplinario de 8 personas con metodología Scrum.',
    ],
    tags: ['React', 'Tailwind CSS', 'REST APIs', 'Scrum'],
  },
  {
    date: 'Jul 2024 — Oct 2024',
    badge: 'Pasantía',
    badgeType: 'intern',
    role: 'Software Development Intern',
    company: 'Kunan S.A.',
    bullets: [
      'Mejoras de rendimiento web y buenas prácticas de desarrollo en entorno Agile/Scrum.',
    ],
    tags: [],
  },
]
