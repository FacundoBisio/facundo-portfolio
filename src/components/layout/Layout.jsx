import { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './Navbar'
import Footer from './Footer'

/**
 * Layout principal.
 *
 * Lighthouse checklist aplicado aquí:
 *  ✓ Smooth scroll con Lenis (no CSS scroll-behavior que bloquea el hilo)
 *  ✓ Sin spotlight/blur pesado en el background
 *  ✓ <main> con role semántico correcto
 *  ✓ Skip-to-content link para accesibilidad (Score A11y)
 */
export default function Layout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Smooth scroll para links internos
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a')
      if (!target) return
      const href = target.getAttribute('href')
      if (href?.startsWith('#')) {
        e.preventDefault()
        const el = document.querySelector(href)
        if (el) lenis.scrollTo(el, { offset: -80 })
      }
    }
    document.addEventListener('click', handleAnchorClick)

    return () => {
      lenis.destroy()
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  return (
    <>
      {/* Skip-to-content: invisible salvo con foco de teclado — mejora Score A11y */}
      <a
        href="#inicio"
        style={{
          position: 'absolute',
          left: '-9999px',
          top: 'auto',
          width: 1,
          height: 1,
          overflow: 'hidden',
        }}
        onFocus={e => {
          e.currentTarget.style.left = '1rem'
          e.currentTarget.style.top  = '1rem'
          e.currentTarget.style.width  = 'auto'
          e.currentTarget.style.height = 'auto'
          e.currentTarget.style.zIndex = '9999'
          e.currentTarget.style.background = 'var(--accent)'
          e.currentTarget.style.color = '#0a0a0b'
          e.currentTarget.style.padding = '0.5rem 1rem'
          e.currentTarget.style.fontFamily = 'var(--mono)'
          e.currentTarget.style.fontSize = '13px'
        }}
        onBlur={e => {
          e.currentTarget.style.left   = '-9999px'
          e.currentTarget.style.width  = '1px'
          e.currentTarget.style.height = '1px'
        }}
      >
        Ir al contenido principal
      </a>

      <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh' }}>
        <Navbar />
        {/* role="main" + id para el skip-link */}
        <main id="main-content" role="main" style={{ paddingTop: '57px' }}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
