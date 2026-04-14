import { FadeIn } from '@/components/motion/FadeIn'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { projects } from '@/lib/projects'

export default function Projects() {
  return (
    <section id="proyectos" style={{ borderBottom: '0.5px solid var(--line)' }}>
      <div className="section-inner">
        <SectionLabel>Proyectos</SectionLabel>

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
            Lo que{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>construí</em>
          </h2>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.num}
                className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
                style={{
                  padding: 'clamp(1.4rem, 3vw, 2rem) clamp(1.2rem, 3vw, 1.8rem)',
                  borderRight:  '0.5px solid var(--line)',
                  borderBottom: '0.5px solid var(--line)',
                  height: '100%',
                  ...(project.featured ? {
                    background: 'var(--bg2)',
                    borderColor: 'rgba(212, 145, 58, 0.18)',
                  } : {}),
                }}
              >
                {/* Number */}
                <div style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 10,
                  color: 'var(--line2)',
                  letterSpacing: '0.1em',
                  marginBottom: '1rem',
                }}>
                  {project.num}{project.featured ? ' · Destacado' : ''}
                </div>

                {/* Title */}
                <div style={{
                  fontFamily: 'var(--display)',
                  fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
                  color: 'var(--text)',
                  marginBottom: '0.4rem',
                }}>
                  {project.title}
                </div>

                {/* Description */}
                <p style={{
                  fontSize: 'clamp(11px, 2.5vw, 12.5px)',
                  color: 'var(--muted)',
                  marginBottom: '1rem',
                  lineHeight: 1.55,
                }}>
                  {project.subtitle}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.1rem' }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 10,
                      color: 'var(--muted)',
                      border: '0.5px solid var(--line2)',
                      padding: '2px 7px',
                      letterSpacing: '0.04em',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-accent"
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: 11,
                        color: 'var(--accent)',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                      }}
                    >
                      ↗ {project.featured ? 'Live Demo' : 'Live'}
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-muted"
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: 11,
                        color: 'var(--muted)',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                      }}
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
