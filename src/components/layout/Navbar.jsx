import { useState, useEffect } from 'react'
import { Download, Menu, X } from 'lucide-react'

const links = [
  { href: '#inicio',      label: 'Inicio' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos',   label: 'Proyectos' },
  { href: '#skills',      label: 'Skills' },
  { href: '#contacto',    label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleDownload = () => {
    const a = document.createElement('a')
    a.href     = '/Facundo_Bisio_CV.docx'
    a.download = 'Facundo_Bisio_CV.docx'
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  const linkStyle = {
    fontFamily: 'var(--mono)',
    fontSize: 12.5,
    fontWeight: 500,
    color: 'var(--muted)',
    textDecoration: 'none',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    transition: 'color 0.2s',
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 1.25rem',
      borderBottom: '0.5px solid var(--line)',
      background: scrolled ? 'rgba(10,10,11,0.96)' : 'rgba(10,10,11,0.88)',
      backdropFilter: 'blur(12px)',
      transition: 'background 0.3s',
    }}>
      {/* Logo */}
      <span style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--accent)', letterSpacing: '0.05em' }}>
        fb.dev
      </span>

      {/* Desktop links */}
      <ul className="nav-desktop" style={{ gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
        {links.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              style={linkStyle}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop CV button */}
      <button
        onClick={handleDownload}
        className="nav-desktop"
        style={{
          alignItems: 'center',
          gap: '0.45rem',
          border: '0.5px solid var(--line2)',
          background: 'transparent',
          color: 'var(--muted)',
          fontFamily: 'var(--mono)',
          fontSize: 12,
          padding: '0.5rem 1rem',
          cursor: 'pointer',
          letterSpacing: '0.05em',
          transition: 'border-color 0.2s, color 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--text)'; e.currentTarget.style.color = 'var(--text)'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line2)'; e.currentTarget.style.color = 'var(--muted)'; }}
      >
        <Download size={13} style={{ marginRight: 4 }} />
        Download CV
      </button>

      {/* Mobile toggle */}
      <button
        className="nav-mobile"
        onClick={() => setOpen(!open)}
        style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer', padding: '0.25rem' }}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0, right: 0,
          background: 'rgba(10,10,11,0.98)',
          borderBottom: '0.5px solid var(--line)',
          padding: '1.5rem 1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.1rem',
        }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ ...linkStyle, fontSize: 14 }}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => { handleDownload(); setOpen(false); }}
            style={{
              alignSelf: 'flex-start',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              border: '0.5px solid var(--line2)',
              background: 'transparent',
              color: 'var(--muted)',
              fontFamily: 'var(--mono)',
              fontSize: 12,
              padding: '0.55rem 1.1rem',
              cursor: 'pointer',
              marginTop: '0.3rem',
            }}
          >
            <Download size={13} /> Download CV
          </button>
        </div>
      )}
    </nav>
  )
}
