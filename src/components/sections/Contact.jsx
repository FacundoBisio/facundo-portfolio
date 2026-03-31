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

const contactLinks = [
  { type: 'Email',    label: 'facubisio433@gmail.com',             href: 'mailto:facubisio433@gmail.com' },
  { type: 'LinkedIn', label: 'linkedin.com/in/facundo-bisio',      href: 'https://www.linkedin.com/in/facundo-bisio-25a104247/' },
  { type: 'GitHub',   label: 'github.com/FacundoBisio',            href: 'https://github.com/FacundoBisio' },
  { type: 'Portfolio',label: 'facundo-portfolio-two.vercel.app',   href: 'https://facundo-portfolio-two.vercel.app' },
  { type: 'Teléfono', label: '+54 351 366-2570',                   href: 'tel:+543513662570' },
]

export default function Contact() {
  return (
    <section id="contacto" style={{ borderBottom: '0.5px solid var(--line)' }}>
      <div className="section-inner">
        <SectionLabel>Contacto</SectionLabel>

        <div className="contact-grid">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', color: '#f0ede6', lineHeight: 1.15, marginBottom: '1.2rem' }}>
              Hablemos de tu{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--accent2)' }}>próximo</em>{' '}
              proyecto
            </h2>
            <p style={{ fontSize: 'clamp(13px, 3vw, 15px)', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '0.8rem' }}>
              Estoy disponible para roles full-stack remotos, freelance o proyectos de integración con IA.
              Trabajo con clientes en Argentina, España y Latinoamérica.
            </p>
            <p style={{ fontSize: 'clamp(13px, 3vw, 15px)', color: 'var(--muted)', lineHeight: 1.75 }}>
              Respondo en menos de 24 horas — en español o inglés.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {contactLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '1rem 0', borderBottom: '0.5px solid var(--line)',
                    textDecoration: 'none', transition: 'background 0.2s, padding 0.2s',
                    gap: '0.5rem',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg2)'; e.currentTarget.style.paddingLeft = '0.6rem'; e.currentTarget.style.paddingRight = '0.6rem'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.paddingLeft = '0'; e.currentTarget.style.paddingRight = '0'; }}
                >
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', minWidth: 68, flexShrink: 0 }}>
                    {link.type}
                  </span>
                  <span style={{ fontFamily: 'var(--sans)', fontSize: 'clamp(12px, 3vw, 14px)', color: 'var(--text)', flex: 1, paddingLeft: '0.8rem', wordBreak: 'break-all' }}>
                    {link.label}
                  </span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--accent)', flexShrink: 0 }}>↗</span>
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
