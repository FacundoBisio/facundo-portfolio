import { useEffect, useRef } from 'react'

export default function Particles({ className = '' }) {
  const ref = useRef(null)
  const animRef = useRef(0)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d', { alpha: true })
    let w = canvas.width = canvas.offsetWidth
    let h = canvas.height = canvas.offsetHeight

    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = w * DPR
    canvas.height = h * DPR
    ctx.scale(DPR, DPR)

    const count = Math.round((w * h) / 22000) // densidad suave
    const parts = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 1 + Math.random() * 1.5,
      vx: 0.05 + Math.random() * 0.15,
      vy: -0.05 + Math.random() * 0.05
    }))

    const color = 'rgba(14,165,233,0.12)' // brand muy sutil

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      // leve gradiente radial para “glow”
      const g = ctx.createRadialGradient(w*0.8, h*0.2, 0, w*0.8, h*0.2, Math.max(w,h)*0.8)
      g.addColorStop(0, 'rgba(14,165,233,0.10)')
      g.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = g
      ctx.fillRect(0,0,w,h)

      // puntos
      ctx.fillStyle = color
      parts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x > w + 10) p.x = -10
        if (p.y > h + 10) p.y = -10
        if (p.y < -10) p.y = h + 10
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      })

      animRef.current = requestAnimationFrame(draw)
    }

    animRef.current = requestAnimationFrame(draw)

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
      canvas.width = w * DPR
      canvas.height = h * DPR
      ctx.scale(DPR, DPR)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={ref} className={`w-full h-full ${className}`} />
}
