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
      'Arquitecté un SaaS de inventario de punta a punta: diseño relacional con PostgreSQL + Prisma ORM, API REST y dashboard en React con Recharts.',
      'Implementé sistema de auth multi-tenant con JWT y control de acceso basado en roles (RBAC).',
      'Integré flujos conversacionales LLM conectados nativamente a la WhatsApp Business API — automatizando soporte, ingesta de datos y actualizaciones de inventario por lenguaje natural.',
      'Optimicé rendimiento del frontend para datasets grandes: filtrado dinámico, visualización de datos y exportación a Excel.',
    ],
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma ORM', 'JWT / RBAC', 'LLMs', 'WhatsApp API', 'Vercel', 'Render'],
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
      'Plataforma e-commerce completa — catálogo de productos, carrito, checkout y gestión de pedidos — desarrollada en solitario.',
      'Estado global con Zustand: sincronización del carrito en tiempo real y reducción de complejidad de componentes en ~40%.',
    ],
    tags: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Zustand', 'Vercel'],
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
