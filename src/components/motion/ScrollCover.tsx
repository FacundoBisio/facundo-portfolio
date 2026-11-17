'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'

/** Tilted and slightly smaller at the top of the page; settles flat and full size as it scrolls into view. */
export function ScrollCover({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] })
  // A spring on top of the scroll value keeps the motion smooth on wheel steps.
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 })
  const scale = useTransform(progress, [0, 1], [0.9, 1])
  const rotateX = useTransform(progress, [0, 1], [14, 0])

  return (
    <div ref={ref} className={className} style={{ perspective: 1400 }}>
      <motion.div style={reduce ? undefined : { scale, rotateX, transformOrigin: 'center top' }}>{children}</motion.div>
    </div>
  )
}
