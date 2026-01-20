import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'
import Toast from '../ui/Toast'

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
    link.href = '/CV-BISIO-FACUNDO.pdf'
    link.download = 'CV-BISIO-FACUNDO.pdf'
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
        <nav className="container flex h-16 items-center px-6 md:px-12">
          {/* BRAND (Left) */}
          <div className="flex-1">
             <a href="#inicio" className="font-semibold tracking-tight inline-flex items-center gap-2 pl-2">
              <img
                src="/icono.jpg"   
                alt="Foto de Facundo Bisio"
                className="h-8 w-8 rounded-full ring-1 ring-white/10 shadow"
                loading="lazy"
              />
              <span>Facundo Bisio</span>
             </a>
          </div>

          {/* Desktop Links (Center) */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-6">
            <a href="#inicio" className="nav-link">Inicio</a>
            <a href="#sobre-mi" className="nav-link">Sobre mí</a>
            <a href="#experiencia" className="nav-link">Experiencia</a>
            <a href="#contacto" className="nav-link">Contacto</a>
          </div>

          {/* Actions (Right) */}
          <div className="hidden md:flex flex-1 justify-end">
            <button
              onClick={handleDownload}
              className="btn-ghost btn-cv inline-flex items-center gap-2"
            >
              <Download size={18} />
              <span>Descargar CV</span>
            </button>
          </div>

          {/* Toggle móvil */}
          <div className="flex md:hidden flex-1 justify-end">
             <button
              onClick={() => setOpen(!open)}
              aria-label="Abrir menú"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Menú móvil */}
        {open && (
          <div className="md:hidden border-t border-neutral-800 bg-neutral-950/95 backdrop-blur">
            <div className="container py-3 flex flex-col gap-2.5 px-6">
                <a href="#inicio" className="nav-link w-fit" onClick={() => setOpen(false)}>Inicio</a>
                <a href="#sobre-mi" className="nav-link w-fit" onClick={() => setOpen(false)}>Sobre mí</a>
                <a href="#experiencia" className="nav-link w-fit" onClick={() => setOpen(false)}>Experiencia</a>
                <a href="#contacto" className="nav-link w-fit" onClick={() => setOpen(false)}>Contacto</a>
              
              <button
                onClick={() => { handleDownload(); setOpen(false); }}
                className="btn-ghost btn-brand w-fit inline-flex items-center gap-2 mt-2"
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
