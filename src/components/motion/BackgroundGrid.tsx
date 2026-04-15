'use client'

import { useScroll, useTransform, motion } from 'framer-motion'

export function BackgroundGrid() {
  const { scrollY } = useScroll()

  // Shift background-position-y proportional to scroll.
  // The grid tile is 56px — moving the bg ~0.28px per scroll-px
  // means ~1 full tile every 200px of scroll → feels like moving through it.
  const bgY = useTransform(scrollY, (v) => `${v * 0.65}px`)

  return (
    <motion.div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(240, 237, 230, 0.045) 1px, transparent 1px),
          linear-gradient(90deg, rgba(240, 237, 230, 0.045) 1px, transparent 1px)
        `,
        backgroundSize: '56px 56px',
        backgroundPositionY: bgY,
        transform: 'perspective(500px) rotateX(48deg)',
        transformOrigin: '50% 72%',
        WebkitMaskImage:
          'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.55) 22%, rgba(0,0,0,0.55) 68%, transparent 100%)',
        maskImage:
          'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.55) 22%, rgba(0,0,0,0.55) 68%, transparent 100%)',
      }}
    />
  )
}
