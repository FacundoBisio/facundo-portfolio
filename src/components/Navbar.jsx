import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'
import Toast from './Toast'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [toast, setToast] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/CV-Facundo-Bisio.pdf'
    link.download = 'CV-Facundo-Bisio.pdf'
    document.body.appendChild(link)
    link.click()
    link.remove()
    setToast(true)
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-neutral-950 border-b border-neutral-800 ${
          scrolled ? 'shadow-lg shadow-black/10' : ''
        }`}
      >
        <nav className="container flex h-16 items-center justify-between">
          {/* BRAND con avatar */}
          <a href="#inicio" className="font-semibold tracking-tight inline-flex items-center gap-2">
            <img
              src="/icono.jpg"   /* poné tu ruta, p.ej. /me.jpg */
              alt="Foto de Facundo Bisio"
              className="h-7 w-7 rounded-full ring-1 ring-white/10 shadow"
              loading="lazy"
            />
            <span>Facundo Bisio</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-3">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link"
              >
                {l.label}
              </a>
            ))}

            {/* Botón CV (queda como está) */}
            <button
              onClick={handleDownload}
              className="btn-ghost btn-cv inline-flex items-center gap-2 ml-2"
            >
              <Download size={18} />
              <span>Descargar CV</span>
            </button>
          </div>

          {/* Toggle móvil */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Menú móvil */}
        {open && (
          <div className="md:hidden border-t border-neutral-800 bg-neutral-950/95 backdrop-blur">
            <div className="container py-3 flex flex-col gap-2.5">
              {links.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  className="nav-link w-fit"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <button
                onClick={() => { handleDownload(); setOpen(false); }}
                className="btn-ghost btn-brand w-fit inline-flex items-center gap-2"
              >
                <Download size={18} />
                <span>Descargar CV</span>
              </button>
            </div>
          </div>
        )}
      </header>

      <Toast
        open={toast}
        message="Descargando CV..."
        onClose={() => setToast(false)}
      />
    </>
  )
}
