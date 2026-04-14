'use client'

import { useScroll, motion, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  // Spring makes it feel smoother / less jittery
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'var(--accent)',
        transformOrigin: '0%',
        scaleX,
        zIndex: 200,
        pointerEvents: 'none',
      }}
    />
  )
}
