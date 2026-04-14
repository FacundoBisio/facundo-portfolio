'use client'

import { useState, useEffect } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { NAV_LINKS, SITE } from '@/lib/site'

const SECTION_IDS = ['inicio', 'sobre-mi', 'experiencia', 'proyectos', 'skills', 'educacion', 'contacto']

export default function Navbar() {
  const [open, setOpen]               = useState(false)
  const [scrolled, setScrolled]       = useState(false)
  const [activeSection, setActive]    = useState<string>('inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-35% 0px -60% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const linkBase: React.CSSProperties = {
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
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 1.25rem',
        borderBottom: '0.5px solid var(--line)',
        background: scrolled ? 'rgba(12,12,10,0.97)' : 'rgba(12,12,10,0.88)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        transition: 'background 0.3s',
      }}
    >
      {/* Logo */}
      <a
        href="#inicio"
        style={{
          fontFamily: 'var(--mono)',
          fontSize: 13,
          color: 'var(--accent)',
          letterSpacing: '0.05em',
          textDecoration: 'none',
        }}
      >
        fb.dev
      </a>

      {/* Desktop links */}
      <ul
        className="hidden md:flex"
        style={{ gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}
      >
        {NAV_LINKS.map((link) => {
            const isActive = link.href === `#${activeSection}`
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{ ...linkBase, color: isActive ? 'var(--accent)' : 'var(--muted)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = isActive ? 'var(--accent)' : 'var(--muted)' }}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
      </ul>

      {/* Desktop CV button */}
      <a
        href={SITE.cv}
        download
        className="hidden md:inline-flex items-center gap-2"
        style={{
          border: '0.5px solid var(--line2)',
          color: 'var(--muted)',
          fontFamily: 'var(--mono)',
          fontSize: 12,
          padding: '0.5rem 1rem',
          letterSpacing: '0.05em',
          textDecoration: 'none',
          transition: 'border-color 0.2s, color 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--text)'
          e.currentTarget.style.color = 'var(--text)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--line2)'
          e.currentTarget.style.color = 'var(--muted)'
        }}
      >
        <Download size={13} />
        Download CV
      </a>

      {/* Mobile toggle */}
      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--muted)',
          cursor: 'pointer',
          padding: '0.25rem',
        }}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0, right: 0,
            background: 'rgba(12,12,10,0.99)',
            borderBottom: '0.5px solid var(--line)',
            padding: '1.5rem 1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.1rem',
          }}
        >
          {NAV_LINKS.map((link) => {
              const isActive = link.href === `#${activeSection}`
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{ ...linkBase, fontSize: 14, color: isActive ? 'var(--accent)' : 'var(--muted)' }}
                >
                  {link.label}
                </a>
              )
            })}
          <a
            href={SITE.cv}
            download
            onClick={() => setOpen(false)}
            style={{
              alignSelf: 'flex-start',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              border: '0.5px solid var(--line2)',
              color: 'var(--muted)',
              fontFamily: 'var(--mono)',
              fontSize: 12,
              padding: '0.55rem 1.1rem',
              marginTop: '0.3rem',
              textDecoration: 'none',
            }}
          >
            <Download size={13} /> Download CV
          </a>
        </div>
      )}
    </nav>
  )
}
