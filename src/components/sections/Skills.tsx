import { FadeIn } from '@/components/motion/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'

interface Skill {
  name: string
  level?: 'strong' | 'med'
}

interface SkillGroup {
  label: string
  skills: Skill[]
}

const skillGroups: SkillGroup[] = [
  {
    label: 'Core — 5+ años',
    skills: [
      { name: 'JavaScript ES6+', level: 'strong' },
      { name: 'HTML5',           level: 'strong' },
      { name: 'CSS3',            level: 'strong' },
    ],
  },
  {
    label: 'Frontend — 3+ años',
    skills: [
      { name: 'Next.js',      level: 'strong' },
      { name: 'React',        level: 'strong' },
      { name: 'TypeScript',   level: 'strong' },
      { name: 'Tailwind CSS', level: 'strong' },
      { name: 'Framer Motion' },
      { name: 'Zustand' },
      { name: 'Context API' },
      { name: 'Recharts' },
    ],
  },
  {
    label: 'Backend — 3 años',
    skills: [
      { name: 'Node.js',        level: 'strong' },
      { name: 'Express',        level: 'strong' },
      { name: 'REST API Design', level: 'med' },
      { name: 'JWT / RBAC',     level: 'med' },
      { name: 'PostgreSQL' },
      { name: 'Prisma ORM' },
    ],
  },
  {
    label: 'IA & Automatización — 1 año',
    skills: [
      { name: 'LLM Integration',      level: 'med' },
      { name: 'WhatsApp Business API', level: 'med' },
      { name: 'Prompt Engineering' },
    ],
  },
  {
    label: 'DevOps & Tools',
    skills: [
      { name: 'Git / GitHub' },
      { name: 'Vercel' },
      { name: 'AWS Lambda' },
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
      { name: 'Python (básico)' },
    ],
  },
]

function pillStyle(level?: 'strong' | 'med'): React.CSSProperties {
  if (level === 'strong') return {
    fontFamily: 'var(--mono)',
    fontSize: 'clamp(10px, 2vw, 12px)',
    padding: '0.3rem 0.75rem',
    border: '0.5px solid rgba(212, 145, 58, 0.4)',
    color: 'var(--accent)',
    background: 'rgba(212, 145, 58, 0.07)',
    letterSpacing: '0.04em',
    display: 'inline-block',
  }
  if (level === 'med') return {
    fontFamily: 'var(--mono)',
    fontSize: 'clamp(10px, 2vw, 12px)',
    padding: '0.3rem 0.75rem',
    border: '0.5px solid var(--line2)',
    color: 'var(--text)',
    background: 'transparent',
    letterSpacing: '0.04em',
    display: 'inline-block',
  }
  return {
    fontFamily: 'var(--mono)',
    fontSize: 'clamp(10px, 2vw, 12px)',
    padding: '0.3rem 0.75rem',
    border: '0.5px solid var(--line)',
    color: 'var(--muted)',
    background: 'transparent',
    letterSpacing: '0.04em',
    display: 'inline-block',
  }
}

export default function Skills() {
  return (
    <section id="skills" style={{ borderBottom: '0.5px solid var(--line)' }}>
      <div className="section-inner">
        <SectionLabel>Skills</SectionLabel>

        <div className="skills-layout">

          {/* Sidebar */}
          <FadeIn>
            <h2 style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(1.8rem, 5vw, 2.6rem)',
              color: 'var(--text)',
              lineHeight: 1.1,
              marginBottom: '1.2rem',
            }}>
              Stack<br />
              <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>técnico</em>
            </h2>
            <p style={{ fontSize: 'clamp(13px, 2.5vw, 14px)', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '0.8rem' }}>
              Trabajo desde el diseño de esquemas de base de datos hasta la interfaz final.
              Foco en código limpio, rendimiento real y productos que se pueden mantener.
            </p>
            <p style={{ fontSize: 'clamp(13px, 2.5vw, 14px)', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.2rem' }}>
              Especializado en Next.js, TypeScript e integración de LLMs en productos SaaS B2B.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)' }}>
              <span className="dot-pulse" />
              Disponible para roles remote
            </div>
          </FadeIn>

          {/* Skill groups */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
            {skillGroups.map((group, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div>
                  <div style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 10,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                    marginBottom: '0.6rem',
                  }}>
                    {group.label}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {group.skills.map((s) => (
                      <span key={s.name} style={pillStyle(s.level)}>{s.name}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
