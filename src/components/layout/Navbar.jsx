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
  const [open, setOpen]       = useState(false)
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

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.1rem 2.5rem',
      borderBottom: '0.5px solid var(--line)',
      background: scrolled ? 'rgba(10,10,11,0.96)' : 'rgba(10,10,11,0.88)',
      backdropFilter: 'blur(12px)',
      transition: 'background 0.3s',
    }}>
      {/* Logo */}
      <span style={{
        fontFamily: 'var(--mono)',
        fontSize: 13,
        color: 'var(--accent)',
        letterSpacing: '0.05em',
      }}>
        fb.dev
      </span>

      {/* Desktop links */}
      <ul style={{
        display: 'flex',
        gap: '2.2rem',
        listStyle: 'none',
        margin: 0,
        padding: 0,
      }} className="hidden-mobile">
        {links.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 12.5,
                fontWeight: 500,
                color: 'var(--muted)',
                textDecoration: 'none',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CV button */}
      <button
        onClick={handleDownload}
        className="hidden-mobile"
        style={{
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
          letterSpacing: '0.05em',
          transition: 'border-color 0.2s, color 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--text)'; e.currentTarget.style.color = 'var(--text)'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line2)'; e.currentTarget.style.color = 'var(--muted)'; }}
      >
        <Download size={13} />
        Download CV
      </button>

      {/* Mobile toggle */}
      <button
        className="show-mobile"
        onClick={() => setOpen(!open)}
        style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer' }}
        aria-label="Menú"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0, right: 0,
          background: 'rgba(10,10,11,0.98)',
          borderBottom: '0.5px solid var(--line)',
          padding: '1.5rem 2.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem',
        }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 13,
                color: 'var(--muted)',
                textDecoration: 'none',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
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
              marginTop: '0.5rem',
            }}
          >
            <Download size={13} /> Download CV
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
