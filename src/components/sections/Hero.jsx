import { motion } from 'framer-motion'

const fadeUp   = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }
const staggerL = { hidden: {}, visible: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } } }
const staggerR = { hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.35 } } }
const ease     = [0.16, 1, 0.3, 1]

const stats = [
  { num: '3+',  label: 'Años de experiencia'    },
  { num: '10+', label: 'Proyectos en producción' },
  { num: 'B2',  label: 'Inglés · Cambridge FCE'  },
  { num: '∞',   label: 'Café consumido'          },
]

export default function Hero() {
  return (
    <section id="inicio" className="hero-grid">

      {/* ── LEFT ── */}
      <motion.div
        className="hero-left"
        variants={staggerL}
        initial="hidden"
        animate="visible"
      >
        {/* Tag */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease }}
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 'clamp(10px, 2.2vw, 11px)',
            color: 'var(--accent)',
            letterSpacing: '0.13em',
            textTransform: 'uppercase',
            marginBottom: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
          }}
        >
          <span style={{ width: 20, height: 1, background: 'var(--accent)', display: 'inline-block', flexShrink: 0 }} />
          Full-Stack Developer · Córdoba, AR
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.75, ease }}
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2.4rem, 7vw, 4.8rem)',
            lineHeight: 1.05,
            color: '#f0ede6',
            marginBottom: '1.4rem',
          }}
        >
          Construyo<br />
          productos <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>reales</em><br />
          que escalan.
        </motion.h1>

        {/* Desc */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.65, ease }}
          style={{
            fontFamily: 'var(--sans)',
            fontSize: 'clamp(13px, 3vw, 15px)',
            color: 'var(--muted)',
            maxWidth: 440,
            lineHeight: 1.75,
            marginBottom: '2.2rem',
          }}
        >
          Soy Facundo Bisio — Full-Stack Developer especializado en React, Node.js e integración
          de IA. Construyo desde el schema de base de datos hasta la interfaz final.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease }}
          style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}
        >
          <a
            href="#proyectos"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'var(--accent)', color: '#0a0a0b',
              fontFamily: 'var(--mono)', fontSize: 'clamp(11px, 2.5vw, 12.5px)',
              fontWeight: 500, padding: '0.75rem 1.4rem',
              textDecoration: 'none', letterSpacing: '0.05em',
              transition: 'opacity 0.2s, transform 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1';    e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Ver proyectos ↓
          </a>
          <a
            href="#contacto"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              border: '0.5px solid var(--line2)', color: 'var(--muted)',
              fontFamily: 'var(--mono)', fontSize: 'clamp(11px, 2.5vw, 12.5px)',
              padding: '0.75rem 1.4rem', textDecoration: 'none',
              letterSpacing: '0.05em', transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--text)'; e.currentTarget.style.color = 'var(--text)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line2)'; e.currentTarget.style.color = 'var(--muted)'; }}
          >
            Contacto →
          </a>
        </motion.div>
      </motion.div>

      {/* ── RIGHT ── */}
      <motion.div
        className="hero-right"
        variants={staggerR}
        initial="hidden"
        animate="visible"
      >
        {/* Stats grid */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, ease }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            border: '0.5px solid var(--line)',
            marginBottom: '2rem',
          }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.5, ease, delay: 0.38 + i * 0.09 }}
              style={{
                padding: 'clamp(1.2rem, 3vw, 1.8rem) clamp(1rem, 2.5vw, 1.5rem)',
                borderRight:  i % 2 === 0 ? '0.5px solid var(--line)' : 'none',
                borderBottom: i < 2       ? '0.5px solid var(--line)' : 'none',
              }}
            >
              <div style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(1.7rem, 4vw, 2.6rem)',
                color: 'var(--accent)',
                lineHeight: 1,
                marginBottom: '0.3rem',
              }}>
                {s.num}
              </div>
              <div style={{
                fontFamily: 'var(--sans)',
                fontSize: 'clamp(10px, 2vw, 12px)',
                color: 'var(--muted)',
                letterSpacing: '0.04em',
                fontWeight: 500,
              }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Availability */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, ease, delay: 0.75 }}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.6rem',
            fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)',
          }}
        >
          <span className="dot-pulse" />
          Disponible para trabajo remoto ·{' '}
          {new Date().toLocaleDateString('es-AR', { month: 'short', year: 'numeric' })}
        </motion.div>
      </motion.div>

    </section>
  )
}
