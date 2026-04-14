import { FadeIn } from '@/components/motion/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { SITE } from '@/lib/site'

const contactLinks = [
  { type: 'Email',     label: SITE.email,                          href: `mailto:${SITE.email}` },
  { type: 'LinkedIn',  label: 'linkedin.com/in/facundo-bisio',     href: SITE.linkedin },
  { type: 'GitHub',    label: 'github.com/FacundoBisio',           href: SITE.github },
  { type: 'Teléfono',  label: SITE.phone,                         href: `tel:${SITE.phone.replace(/\s/g, '')}` },
]

export default function Contact() {
  return (
    <section id="contacto" style={{ borderBottom: '0.5px solid var(--line)' }}>
      <div className="section-inner">
        <SectionLabel>Contacto</SectionLabel>

        <div className="contact-grid">

          {/* Left */}
          <FadeIn>
            <h2 style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
              color: 'var(--text)',
              lineHeight: 1.15,
              marginBottom: '1.2rem',
            }}>
              Hablemos de tu{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>próximo</em>{' '}
              proyecto
            </h2>
            <p style={{ fontSize: 'clamp(13px, 3vw, 15px)', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '0.8rem' }}>
              Estoy disponible para roles full-stack remotos, freelance o proyectos de integración con IA.
              Trabajo con clientes en Argentina, España y Latinoamérica.
            </p>
            <p style={{ fontSize: 'clamp(13px, 3vw, 15px)', color: 'var(--muted)', lineHeight: 1.75 }}>
              Respondo en menos de 24 horas — en español o inglés.
            </p>
          </FadeIn>

          {/* Right — link list */}
          <FadeIn delay={0.12}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {contactLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact-row"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 0',
                    borderBottom: '0.5px solid var(--line)',
                    textDecoration: 'none',
                    gap: '0.5rem',
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 10,
                    color: 'var(--muted)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    minWidth: 68,
                    flexShrink: 0,
                  }}>
                    {link.type}
                  </span>
                  <span style={{
                    fontFamily: 'var(--sans)',
                    fontSize: 'clamp(12px, 3vw, 14px)',
                    color: 'var(--text)',
                    flex: 1,
                    paddingLeft: '0.8rem',
                    wordBreak: 'break-all',
                  }}>
                    {link.label}
                  </span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--accent)', flexShrink: 0 }}>↗</span>
                </a>
              ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
