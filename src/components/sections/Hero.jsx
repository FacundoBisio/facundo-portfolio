import { motion } from 'framer-motion'

// ── Variantes reutilizables ──────────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0  },
}

// Cada hijo de un staggerContainer se anima con delay incremental
const staggerLeft = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
}

const staggerRight = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.35 } },
}

const ease = [0.16, 1, 0.3, 1]

// ── Datos ────────────────────────────────────────────────────────────────────
const stats = [
  { num: '3+',  label: 'Años de experiencia'    },
  { num: '10+', label: 'Proyectos en producción' },
  { num: 'B2',  label: 'Inglés · Cambridge FCE'  },
  { num: '∞',   label: 'Café consumido'          },
]

// ── Componente ───────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        borderBottom: '0.5px solid var(--line)',
      }}
    >
      {/* ── LEFT COLUMN ──────────────────────────────────────────────────── */}
      <motion.div
        variants={staggerLeft}
        initial="hidden"
        animate="visible"
        style={{
          padding: 'clamp(6rem, 10vw, 9rem) clamp(1.5rem, 4vw, 3.5rem) 5rem',
          borderRight: '0.5px solid var(--line)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Tag */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease }}
          style={{
            fontFamily: 'var(--mono)',
            fontSize: 11,
            color: 'var(--accent)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.7rem',
          }}
        >
          <span style={{ width: 24, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
          Full-Stack Developer · Córdoba, AR
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.75, ease }}
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(2.8rem, 5vw, 4.8rem)',
            lineHeight: 1.05,
            color: '#f0ede6',
            marginBottom: '1.8rem',
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
            fontSize: 15,
            color: 'var(--muted)',
            maxWidth: 440,
            lineHeight: 1.75,
            marginBottom: '2.8rem',
          }}
        >
          Soy Facundo Bisio — Full-Stack Developer especializado en React, Node.js e integración de IA.
          Construyo desde el schema de base de datos hasta la interfaz final.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6, ease }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
        >
          <a
            href="#proyectos"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--accent)',
              color: '#0a0a0b',
              fontFamily: 'var(--mono)',
              fontSize: 12.5,
              fontWeight: 500,
              padding: '0.8rem 1.6rem',
              textDecoration: 'none',
              letterSpacing: '0.05em',
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
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: '0.5px solid var(--line2)',
              color: 'var(--muted)',
              fontFamily: 'var(--mono)',
              fontSize: 12.5,
              padding: '0.8rem 1.6rem',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--text)'; e.currentTarget.style.color = 'var(--text)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line2)'; e.currentTarget.style.color = 'var(--muted)'; }}
          >
            Contacto →
          </a>
        </motion.div>
      </motion.div>

      {/* ── RIGHT COLUMN ─────────────────────────────────────────────────── */}
      <motion.div
        variants={staggerRight}
        initial="hidden"
        animate="visible"
        style={{
          padding: 'clamp(6rem, 10vw, 9rem) clamp(1.5rem, 4vw, 3.5rem) 5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Stats grid — cada celda tiene su propia animación */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, ease }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            border: '0.5px solid var(--line)',
            marginBottom: '2.5rem',
          }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.5, ease, delay: 0.38 + i * 0.09 }}
              style={{
                padding: '1.8rem 1.5rem',
                borderRight:  i % 2 === 0 ? '0.5px solid var(--line)' : 'none',
                borderBottom: i < 2       ? '0.5px solid var(--line)' : 'none',
              }}
            >
              <div style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(2rem, 3vw, 2.6rem)',
                color: 'var(--accent)',
                lineHeight: 1,
                marginBottom: '0.3rem',
              }}>
                {s.num}
              </div>
              <div style={{
                fontFamily: 'var(--sans)',
                fontSize: 12,
                color: 'var(--muted)',
                letterSpacing: '0.05em',
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
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontFamily: 'var(--mono)',
            fontSize: 12,
            color: 'var(--muted)',
          }}
        >
          <span className="dot-pulse" />
          Disponible para trabajo remoto · {new Date().toLocaleDateString('es-AR', { month: 'short', year: 'numeric' })}
        </motion.div>
      </motion.div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 768px) {
          #inicio { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
