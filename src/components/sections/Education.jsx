import { motion } from 'framer-motion'

const SectionLabel = ({ children }) => (
  <div style={{
    fontFamily: 'var(--mono)',
    fontSize: 10.5,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'var(--muted)',
    marginBottom: '3.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  }}>
    {children}
    <span style={{ flex: 1, height: '0.5px', background: 'var(--line2)' }} />
  </div>
)

const education = [
  {
    year: '2024 — Presente · Año 3 / 5',
    title: 'Ingeniería en Software',
    inst: 'Universidad Siglo 21 · Córdoba, Argentina',
  },
  {
    year: 'Graduado 2024',
    title: 'Técnico en Programación',
    inst: 'Instituto Salesiano VILLADA · Córdoba, Argentina',
  },
]

const extras = [
  {
    year: 'Idioma',
    title: 'Español',
    inst: 'Nativo',
  },
  {
    year: 'Cambridge FCE',
    title: 'Inglés — B2',
    inst: 'Comunicación fluida con clientes internacionales',
  },
  {
    year: 'Metodologías',
    title: 'Agile / Scrum',
    inst: 'Sprints, retrospectivas, equipos cross-funcionales',
  },
]

const EduItem = ({ year, title, inst, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay }}
    style={{
      borderTop: '0.5px solid var(--line)',
      padding: '1.8rem 0',
    }}
  >
    <div style={{
      fontFamily: 'var(--mono)',
      fontSize: 11,
      color: 'var(--muted)',
      letterSpacing: '0.05em',
      marginBottom: '0.3rem',
    }}>
      {year}
    </div>
    <div style={{
      fontFamily: 'var(--serif)',
      fontSize: '1.2rem',
      color: '#f0ede6',
      marginBottom: '0.2rem',
    }}>
      {title}
    </div>
    <div style={{ fontSize: 13, color: 'var(--muted)' }}>
      {inst}
    </div>
  </motion.div>
)

export default function Education() {
  return (
    <section id="educacion" style={{ borderBottom: '0.5px solid var(--line)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem 2.5rem' }}>
        <SectionLabel>Formación & Idiomas</SectionLabel>

        <h2 style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
          color: '#f0ede6',
          lineHeight: 1.15,
          marginBottom: '0.5rem',
        }}>
          Educación <em style={{ fontStyle: 'italic', color: 'var(--accent2)' }}>formal</em>
        </h2>

        {/* Education grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0 4rem',
          marginTop: '1rem',
          marginBottom: '1rem',
        }}>
          {education.map((e, i) => (
            <EduItem key={i} {...e} delay={i * 0.07} />
          ))}
        </div>

        {/* Extras grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '0 4rem',
        }}>
          {extras.map((e, i) => (
            <EduItem key={i} {...e} delay={i * 0.07} />
          ))}
        </div>

        {/* Bottom border */}
        <div style={{ borderTop: '0.5px solid var(--line)', marginTop: 0 }} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          #educacion .edu-grid-2 { grid-template-columns: 1fr !important; }
          #educacion .edu-grid-3 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
