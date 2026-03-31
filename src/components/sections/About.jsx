import { motion } from 'framer-motion'
import profileImg from '../../assets/yoiconico.jpg'

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

export default function About() {
  return (
    <section id="sobre-mi" style={{ borderBottom: '0.5px solid var(--line)' }}>
      <div className="section-inner">
        <SectionLabel>Sobre mí</SectionLabel>

        <div className="about-grid">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
              color: '#f0ede6', lineHeight: 1.15, marginBottom: '1.5rem',
            }}>
              Ingeniería en Software<br />
              <em style={{ fontStyle: 'italic', color: 'var(--accent2)' }}>full-stack de verdad</em>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'Soy Facundo Bisio, desarrollador de Córdoba, Argentina, actualmente cursando el 3° año de Ingeniería en Software en Universidad Siglo 21 y graduado como Técnico en Programación en ITS Villada.',
                'Trabajo de punta a punta: diseño relacional con PostgreSQL + Prisma ORM, APIs REST con Node.js/Express y frontends en React con Tailwind. Mi proyecto flagship, Phantom-Stock, es un SaaS de inventario multi-tenant con autenticación JWT/RBAC y chatbot de WhatsApp impulsado por LLMs.',
                'Como freelance desarrollé sitios para clientes en España — Confituras Palmelita (multi-idioma, SEO internacional, sub-1s) y EUSA Partners (plataforma de inversores con Optimistic UI y Core Web Vitals altos).',
                'Actualmente profundizando en TypeScript, Docker y arquitecturas de integración con LLMs. Inglés B2 (Cambridge FCE) — trabajo con clientes internacionales con fluidez.',
              ].map((p, i) => (
                <p key={i} style={{ fontSize: 'clamp(13px, 3vw, 15px)', color: 'var(--muted)', lineHeight: 1.75 }}>{p}</p>
              ))}
            </div>

            {/* Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.8rem' }}>
              {['Ingeniería en Software · Siglo 21', 'Técnico en Programación · ITS Villada', 'Cambridge FCE — Inglés B2', 'Agile / Scrum'].map(chip => (
                <span key={chip} style={{
                  fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)',
                  border: '0.5px solid var(--line2)', padding: '3px 10px', letterSpacing: '0.04em',
                }}>
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="about-photo"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={profileImg}
              alt="Foto de perfil de Facundo Bisio, Full-Stack Developer"
              fetchpriority="high"
              decoding="async"
              width="340"
              height="425"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)', display: 'block' }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
