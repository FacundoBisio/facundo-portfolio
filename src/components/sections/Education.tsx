import { FadeIn } from '@/components/motion/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'

interface EduItem {
  year: string
  title: string
  inst: string
}

const education: EduItem[] = [
  { year: '2024 — Presente · Año 3 / 5', title: 'Ingeniería en Software',  inst: 'Universidad Siglo 21 · Córdoba, Argentina' },
  { year: 'Graduado 2024',               title: 'Técnico en Programación', inst: 'Instituto Salesiano VILLADA · Córdoba, Argentina' },
]

const extras: EduItem[] = [
  { year: 'Idioma',        title: 'Español',       inst: 'Nativo' },
  { year: 'Cambridge FCE', title: 'Inglés — B2',   inst: 'Comunicación fluida con clientes internacionales' },
  { year: 'Metodologías',  title: 'Agile / Scrum', inst: 'Sprints, retrospectivas, equipos cross-funcionales' },
]

function EduRow({ year, title, inst }: EduItem) {
  return (
    <div style={{ borderTop: '0.5px solid var(--line)', padding: '1.6rem 0' }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>
        {year}
      </div>
      <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1rem, 3vw, 1.2rem)', color: 'var(--text)', marginBottom: '0.2rem' }}>
        {title}
      </div>
      <div style={{ fontSize: 'clamp(12px, 2.5vw, 13px)', color: 'var(--muted)' }}>
        {inst}
      </div>
    </div>
  )
}

export default function Education() {
  return (
    <section id="educacion" style={{ borderBottom: '0.5px solid var(--line)' }}>
      <div className="section-inner">
        <SectionLabel>Formación & Idiomas</SectionLabel>

        <FadeIn>
          <h2 style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
            color: 'var(--text)',
            lineHeight: 1.15,
            marginBottom: '0.5rem',
          }}>
            Educación{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>formal</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.06}>
          <div className="edu-grid-2" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>
            {education.map((e, i) => <EduRow key={i} {...e} />)}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="edu-grid-3">
            {extras.map((e, i) => <EduRow key={i} {...e} />)}
          </div>
          <div style={{ borderTop: '0.5px solid var(--line)' }} />
        </FadeIn>

      </div>
    </section>
  )
}
