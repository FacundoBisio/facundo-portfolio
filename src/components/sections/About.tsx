import Image from 'next/image'
import { FadeIn } from '@/components/motion/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'

const chips = [
  'Ingeniería en Software · Siglo 21',
  'Técnico en Programación · ITS Villada',
  'Cambridge FCE — Inglés B2',
  'Agile / Scrum',
]

const paragraphs = [
  'Soy Facundo Bisio, desarrollador de Córdoba, Argentina, actualmente cursando el 3° año de Ingeniería en Software en Universidad Siglo 21 y graduado como Técnico en Programación en ITS Villada.',
  'Trabajo de punta a punta: diseño relacional con PostgreSQL + Prisma ORM, APIs REST con Node.js/Express y frontends en React con Tailwind. Mi proyecto flagship, Phantom-Stock, es un SaaS de inventario multi-tenant con autenticación JWT/RBAC y chatbot de WhatsApp impulsado por LLMs.',
  'Como freelance desarrollé sitios para clientes en España — Confituras Palmelita (multi-idioma, SEO internacional, sub-1s) y EUSA Partners (plataforma de inversores con Optimistic UI y Core Web Vitals altos).',
  'Actualmente profundizando en TypeScript, Docker y arquitecturas de integración con LLMs. Inglés B2 (Cambridge FCE) — trabajo con clientes internacionales con fluidez.',
]

export default function About() {
  return (
    <section id="sobre-mi" style={{ borderBottom: '0.5px solid var(--line)' }}>
      <div className="section-inner">
        <SectionLabel>Sobre mí</SectionLabel>

        <div className="about-grid">

          {/* Text */}
          <FadeIn>
            <h2
              style={{
                fontFamily: 'var(--display)',
                fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
                color: 'var(--text)',
                lineHeight: 1.15,
                marginBottom: '1.5rem',
              }}
            >
              Ingeniería en Software<br />
              <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
                full-stack de verdad
              </em>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.8rem' }}>
              {paragraphs.map((p, i) => (
                <p key={i} style={{ fontSize: 'clamp(13px, 3vw, 15px)', color: 'var(--muted)', lineHeight: 1.75 }}>
                  {p}
                </p>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {chips.map((chip) => (
                <span
                  key={chip}
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                    color: 'var(--muted)',
                    border: '0.5px solid var(--line2)',
                    padding: '3px 10px',
                    letterSpacing: '0.04em',
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Photo */}
          <FadeIn delay={0.15}>
            <div
              style={{
                border: '0.5px solid var(--line2)',
                overflow: 'hidden',
                aspectRatio: '4/5',
                maxWidth: 340,
              }}
            >
              <Image
                src="/images/yoiconico.jpg"
                alt="Facundo Bisio — Full-Stack Developer"
                width={340}
                height={425}
                priority
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(15%)',
                  display: 'block',
                }}
              />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
