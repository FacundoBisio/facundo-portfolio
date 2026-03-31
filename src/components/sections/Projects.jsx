import { motion } from 'framer-motion'
import { projects } from '../../data/projects'

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

export default function Projects() {
  return (
    <section id="proyectos" style={{ borderBottom: '0.5px solid var(--line)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem 2.5rem' }}>
        <SectionLabel>Proyectos</SectionLabel>

        <h2 style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
          color: '#f0ede6',
          lineHeight: 1.15,
          marginBottom: '2rem',
        }}>
          Lo que <em style={{ fontStyle: 'italic', color: 'var(--accent2)' }}>construí</em>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          border: '0.5px solid var(--line)',
        }}>
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              style={{
                padding: '2rem 1.8rem',
                borderRight: '0.5px solid var(--line)',
                borderBottom: '0.5px solid var(--line)',
                transition: 'background 0.2s',
                position: 'relative',
                ...(p.featured ? {
                  gridColumn: 'span 2',
                  background: 'var(--bg2)',
                  borderColor: 'rgba(200,245,90,0.15)',
                } : {}),
              }}
              onMouseEnter={e => { if (!p.featured) e.currentTarget.style.background = 'var(--bg2)' }}
              onMouseLeave={e => { if (!p.featured) e.currentTarget.style.background = 'transparent' }}
            >
              <div style={{
                fontFamily: 'var(--mono)',
                fontSize: 10,
                color: 'var(--line2)',
                letterSpacing: '0.1em',
                marginBottom: '1.2rem',
              }}>
                {p.num}{p.featured ? ' · Destacado' : ''}
              </div>

              <div style={{
                fontFamily: 'var(--serif)',
                fontSize: '1.35rem',
                color: '#f0ede6',
                marginBottom: '0.4rem',
              }}>
                {p.title}
              </div>

              <div style={{
                fontSize: 12.5,
                color: 'var(--muted)',
                marginBottom: '1rem',
                lineHeight: 1.55,
              }}>
                {p.subtitle}
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {p.tags.map(t => (
                  <span key={t} style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 10,
                    color: 'var(--muted)',
                    border: '0.5px solid var(--line2)',
                    padding: '2px 7px',
                    letterSpacing: '0.04em',
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.2rem' }}>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 11,
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    ↗ {p.featured ? 'Live Demo' : 'Live'}
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 11,
                      color: 'var(--muted)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
