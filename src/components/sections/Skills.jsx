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

const skillGroups = [
  {
    label: 'Core — 5+ años',
    skills: [
      { name: 'JavaScript ES6+', strong: true },
      { name: 'HTML5',           strong: true },
      { name: 'CSS3',            strong: true },
    ],
  },
  {
    label: 'Frontend — 3+ años',
    skills: [
      { name: 'React',        strong: true },
      { name: 'Tailwind CSS', strong: true },
      { name: 'Framer Motion' },
      { name: 'Zustand' },
      { name: 'Context API' },
      { name: 'Recharts' },
    ],
  },
  {
    label: 'Backend — 3 años',
    skills: [
      { name: 'Node.js',        strong: true },
      { name: 'Express',        strong: true },
      { name: 'REST API Design', med: true },
      { name: 'JWT / RBAC',     med: true },
      { name: 'PostgreSQL' },
      { name: 'Prisma ORM' },
    ],
  },
  {
    label: 'IA & Automatización — 1 año',
    skills: [
      { name: 'LLM Integration',       med: true },
      { name: 'WhatsApp Business API', med: true },
      { name: 'Prompt Engineering' },
    ],
  },
  {
    label: 'DevOps & Tools',
    skills: [
      { name: 'Git / GitHub' },
      { name: 'Vercel' },
      { name: 'Render' },
      { name: 'FTP / DNS' },
      { name: 'Docker (básico)' },
      { name: 'Vite' },
    ],
  },
  {
    label: 'SEO & Otros',
    skills: [
      { name: 'SEO Técnico' },
      { name: 'JSON-LD' },
      { name: 'Open Graph' },
      { name: 'Core Web Vitals' },
      { name: 'TypeScript (aprendiendo)' },
      { name: 'Python (básico)' },
    ],
  },
]

const pillStyle = (strong, med) => ({
  fontFamily: 'var(--mono)',
  fontSize: 12,
  padding: '0.35rem 0.8rem',
  border: `0.5px solid ${strong ? 'rgba(200,245,90,0.4)' : med ? 'rgba(74,245,200,0.3)' : 'var(--line2)'}`,
  color: strong ? 'var(--accent)' : med ? 'var(--accent2)' : 'var(--muted)',
  background: strong ? 'rgba(200,245,90,0.06)' : med ? 'rgba(74,245,200,0.05)' : 'transparent',
  letterSpacing: '0.04em',
  display: 'inline-block',
})

export default function Skills() {
  return (
    <section id="skills" style={{ borderBottom: '0.5px solid var(--line)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem 2.5rem' }}>
        <SectionLabel>Skills</SectionLabel>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '280px 1fr',
          gap: '5rem',
          alignItems: 'start',
        }}>
          {/* Sidebar */}
          <div>
            <h2 style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2rem, 3vw, 2.6rem)',
              color: '#f0ede6',
              lineHeight: 1.1,
              marginBottom: '1.2rem',
            }}>
              Stack<br /><em style={{ fontStyle: 'italic', color: 'var(--accent2)' }}>técnico</em>
            </h2>
            <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, marginBottom: '0.8rem' }}>
              Trabajo desde el diseño de esquemas de base de datos hasta la interfaz final. Foco en código limpio, rendimiento real y productos que se pueden mantener.
            </p>
            <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.2rem' }}>
              Actualmente profundizando en TypeScript, Docker y arquitecturas de integración con LLMs.
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontFamily: 'var(--mono)',
              fontSize: 11,
              color: 'var(--muted)',
            }}>
              <span className="dot-pulse" />
              Disponible para roles remote
            </div>
          </div>

          {/* Groups */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {skillGroups.map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 10,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  marginBottom: '0.7rem',
                }}>
                  {group.label}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {group.skills.map(s => (
                    <span key={s.name} style={pillStyle(s.strong, s.med)}>
                      {s.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #skills > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
