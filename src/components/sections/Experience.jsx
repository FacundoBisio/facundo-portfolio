import { motion } from 'framer-motion'

const SectionLabel = ({ children }) => (
  <div style={{
    fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.18em',
    textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '2.5rem',
    display: 'flex', alignItems: 'center', gap: '1rem',
  }}>
    {children}
    <span style={{ flex: 1, height: '0.5px', background: 'var(--line2)' }} />
  </div>
)

const badgeColors = {
  saas:      { bg: 'rgba(200,245,90,0.1)',  color: 'var(--accent)' },
  freelance: { bg: 'rgba(74,245,200,0.08)', color: 'var(--accent2)' },
  fullstack: { bg: 'rgba(200,245,90,0.1)',  color: 'var(--accent)' },
  agile:     { bg: 'rgba(200,245,90,0.1)',  color: 'var(--accent)' },
  intern:    { bg: 'rgba(245,164,74,0.08)', color: 'var(--accent3)' },
}

const experiences = [
  {
    date: 'Mar 2026 — Presente', badge: 'SaaS', badgeType: 'saas',
    role: 'Full-Stack Developer & AI Integrator',
    company: 'Phantom-Stock · Plataforma SaaS de gestión de inventario',
    link: 'https://stock-manager-sigma-seven.vercel.app/', linkLabel: 'stock-manager-sigma-seven.vercel.app',
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
    date: 'Dic 2025 — Feb 2026', badge: 'Freelance', badgeType: 'freelance',
    role: 'Front-End Developer', company: 'Confituras Palmelita · España',
    link: 'https://confituras.palmelita.es/', linkLabel: 'confituras.palmelita.es',
    bullets: [
      'Sitio multi-idioma con carga sub-1s, sin overhead de framework JS y estrategia SEO internacional completa (hreflang, sitemap, robots.txt).',
      'Pipeline completo de deploy en servidor remoto (FTP/DNS) coordinando con cliente internacional.',
    ],
    tags: ['HTML5', 'Vanilla JS', 'Tailwind CSS v4', 'PHP', 'SEO Internacional'],
  },
  {
    date: 'Oct 2025 — Dic 2025', badge: 'Freelance', badgeType: 'freelance',
    role: 'Front-End Developer', company: 'EUSA Partners · España',
    link: 'https://eusa-partners.com/', linkLabel: 'eusa-partners.com',
    bullets: [
      'Plataforma premium de adquisición de inversores con animaciones CSS avanzadas, formularios con Optimistic UI y sanitización CORS en endpoints PHP.',
      'Stack de SEO técnico completo: JSON-LD, Open Graph, sitemap XML — logrando puntuaciones altas en Core Web Vitals.',
    ],
    tags: ['HTML5', 'JS', 'Tailwind CSS v4', 'PHP', 'JSON-LD', 'Open Graph'],
  },
  {
    date: 'Mar 2025 — Oct 2025', badge: 'Full-Stack', badgeType: 'fullstack',
    role: 'Full-Stack Developer', company: 'FFMates E-Commerce',
    link: 'https://tienda-mates.vercel.app/', linkLabel: 'tienda-mates.vercel.app',
    bullets: [
      'Plataforma e-commerce completa — catálogo de productos, carrito, checkout y gestión de pedidos — desarrollada en solitario.',
      'Estado global con Zustand: sincronización del carrito en tiempo real y reducción de complejidad de componentes en ~40%.',
    ],
    tags: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Zustand', 'Vercel'],
  },
  {
    date: 'Mar 2024 — Dic 2024', badge: 'Agile · NGO', badgeType: 'agile',
    role: 'Full-Stack Developer', company: 'Downisup Córdoba · ONG',
    bullets: ['Desarrollo de módulos React + Tailwind e integración de REST APIs para sincronización de datos en equipo multidisciplinario de 8 personas con metodología Scrum.'],
    tags: ['React', 'Tailwind CSS', 'REST APIs', 'Scrum'],
  },
  {
    date: 'Jul 2024 — Oct 2024', badge: 'Pasantía', badgeType: 'intern',
    role: 'Software Development Intern', company: 'Kunan S.A.',
    bullets: ['Mejoras de rendimiento web y buenas prácticas de desarrollo en entorno Agile/Scrum.'],
    tags: [],
  },
]

export default function Experience() {
  return (
    <section id="experiencia" style={{ borderBottom: '0.5px solid var(--line)' }}>
      <div className="section-inner">
        <SectionLabel>Experiencia</SectionLabel>

        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', color: '#f0ede6', lineHeight: 1.15, marginBottom: '2rem' }}>
          Trabajo <em style={{ fontStyle: 'italic', color: 'var(--accent2)' }}>real</em> en producción
        </h2>

        <div>
          {experiences.map((exp, i) => {
            const bc = badgeColors[exp.badgeType] || badgeColors.saas
            return (
              <motion.div
                key={i}
                className="exp-row"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                {/* Meta */}
                <div className="exp-meta">
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                    {exp.date}
                  </div>
                  <span style={{ display: 'inline-block', fontFamily: 'var(--mono)', fontSize: 10, padding: '2px 8px', background: bc.bg, color: bc.color, letterSpacing: '0.05em' }}>
                    {exp.badge}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(0.9rem, 3vw, 1rem)', fontWeight: 600, color: 'var(--text)', marginBottom: '0.2rem' }}>
                    {exp.role}
                  </h3>
                  <div style={{ fontSize: 'clamp(12px, 2.5vw, 13px)', color: 'var(--muted)', marginBottom: '0.8rem' }}>
                    {exp.company}
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {exp.bullets.map((b, j) => (
                      <li key={j} style={{ fontSize: 'clamp(12px, 2.8vw, 14px)', color: 'var(--muted)', paddingLeft: '1.1rem', position: 'relative', lineHeight: 1.6 }}>
                        <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontSize: 11, top: '0.15rem' }}>→</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {exp.tags.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.9rem' }}>
                      {exp.tags.map(t => (
                        <span key={t} style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)', border: '0.5px solid var(--line2)', padding: '2px 7px', letterSpacing: '0.04em' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {exp.link && (
                    <a href={exp.link} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent2)', textDecoration: 'none', marginTop: '0.8rem', opacity: 0.8, transition: 'opacity 0.2s', wordBreak: 'break-all' }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '0.8'}
                    >
                      ↗ {exp.linkLabel}
                    </a>
                  )}

                  {/* Deep-dive */}
                  {exp.deepDive && (
                    <div style={{ background: 'var(--bg2)', border: '0.5px solid rgba(200,245,90,0.2)', padding: 'clamp(1.2rem, 3vw, 2rem) clamp(1rem, 3vw, 2.2rem)', marginTop: '1.2rem' }}>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                        // Phantom-Stock — deep dive
                      </div>
                      <div className="deep-dive-grid">
                        <div>
                          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                            Problemas que resuelve
                          </div>
                          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                            {exp.deepDive.problems.map((p, k) => (
                              <li key={k} style={{ fontSize: 'clamp(11px, 2.5vw, 12.5px)', color: 'var(--muted)', display: 'flex', gap: '0.5rem', alignItems: 'flex-start', lineHeight: 1.5 }}>
                                <span style={{ color: 'var(--accent)', fontSize: 11, flexShrink: 0, marginTop: '0.1rem' }}>✗</span>{p}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                            Features diferenciadores
                          </div>
                          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                            {exp.deepDive.features.map((f, k) => (
                              <li key={k} style={{ fontSize: 'clamp(11px, 2.5vw, 12.5px)', color: 'var(--muted)', display: 'flex', gap: '0.5rem', alignItems: 'flex-start', lineHeight: 1.5 }}>
                                <span style={{ color: 'var(--accent2)', fontSize: 11, flexShrink: 0, marginTop: '0.1rem' }}>+</span>{f}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
          <div style={{ borderTop: '0.5px solid var(--line)' }} />
        </div>
      </div>
    </section>
  )
}
