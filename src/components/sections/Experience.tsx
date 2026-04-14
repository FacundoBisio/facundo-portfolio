import { FadeIn } from '@/components/motion/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { experiences, BADGE_STYLES } from '@/lib/experience'

export default function Experience() {
  return (
    <section id="experiencia" style={{ borderBottom: '0.5px solid var(--line)' }}>
      <div className="section-inner">
        <SectionLabel>Experiencia</SectionLabel>

        <FadeIn>
          <h2
            style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
              color: 'var(--text)',
              lineHeight: 1.15,
              marginBottom: '2rem',
            }}
          >
            Trabajo{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>real</em>{' '}
            en producción
          </h2>
        </FadeIn>

        <div>
          {experiences.map((exp, i) => {
            const bc = BADGE_STYLES[exp.badgeType]
            return (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="exp-row">

                  {/* Meta */}
                  <div style={{ paddingTop: '0.1rem' }}>
                    <div style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 11,
                      color: 'var(--muted)',
                      letterSpacing: '0.05em',
                      marginBottom: '0.5rem',
                    }}>
                      {exp.date}
                    </div>
                    <span style={{
                      display: 'inline-block',
                      fontFamily: 'var(--mono)',
                      fontSize: 10,
                      padding: '2px 8px',
                      background: bc.bg,
                      color: bc.color,
                      letterSpacing: '0.05em',
                    }}>
                      {exp.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--sans)',
                      fontSize: 'clamp(0.9rem, 3vw, 1rem)',
                      fontWeight: 600,
                      color: 'var(--text)',
                      marginBottom: '0.2rem',
                    }}>
                      {exp.role}
                    </h3>
                    <div style={{ fontSize: 'clamp(12px, 2.5vw, 13px)', color: 'var(--muted)', marginBottom: '0.8rem' }}>
                      {exp.company}
                    </div>

                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {exp.bullets.map((b, j) => (
                        <li key={j} style={{
                          fontSize: 'clamp(12px, 2.8vw, 14px)',
                          color: 'var(--muted)',
                          paddingLeft: '1.1rem',
                          position: 'relative',
                          lineHeight: 1.6,
                        }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontSize: 11, top: '0.15rem' }}>→</span>
                          {b}
                        </li>
                      ))}
                    </ul>

                    {exp.tags.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.9rem' }}>
                        {exp.tags.map((t) => (
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
                    )}

                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-accent"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontFamily: 'var(--mono)',
                          fontSize: 11,
                          color: 'var(--accent)',
                          textDecoration: 'none',
                          marginTop: '0.8rem',
                          wordBreak: 'break-all',
                        }}
                      >
                        ↗ {exp.linkLabel}
                      </a>
                    )}

                    {/* Deep-dive panel (Phantom-Stock) */}
                    {exp.deepDive && (
                      <div style={{
                        background: 'var(--bg2)',
                        border: '0.5px solid rgba(212, 145, 58, 0.2)',
                        padding: 'clamp(1.2rem, 3vw, 2rem) clamp(1rem, 3vw, 2.2rem)',
                        marginTop: '1.2rem',
                      }}>
                        <div style={{
                          fontFamily: 'var(--mono)',
                          fontSize: 10,
                          color: 'var(--accent)',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          marginBottom: '1rem',
                        }}>
                          // Phantom-Stock — deep dive
                        </div>
                        <div className="deep-dive-grid">
                          <div>
                            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                              Problemas que resuelve
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                              {exp.deepDive.problems.map((p, k) => (
                                <li key={k} style={{ fontSize: 'clamp(11px, 2.5vw, 12.5px)', color: 'var(--muted)', display: 'flex', gap: '0.5rem', alignItems: 'flex-start', lineHeight: 1.5 }}>
                                  <span style={{ color: 'var(--accent)', fontSize: 11, flexShrink: 0, marginTop: '0.1rem' }}>✗</span>{p}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                              Features diferenciadores
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                              {exp.deepDive.features.map((f, k) => (
                                <li key={k} style={{ fontSize: 'clamp(11px, 2.5vw, 12.5px)', color: 'var(--muted)', display: 'flex', gap: '0.5rem', alignItems: 'flex-start', lineHeight: 1.5 }}>
                                  <span style={{ color: 'var(--accent-light)', fontSize: 11, flexShrink: 0, marginTop: '0.1rem' }}>+</span>{f}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </FadeIn>
            )
          })}
          <div style={{ borderTop: '0.5px solid var(--line)' }} />
        </div>
      </div>
    </section>
  )
}
