'use client'

import { useRef } from 'react'
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react'

/** Centre of a step's 44px number box, measured from the top of its row. */
const MARKER = 22

/**
 * Wraps the Process steps. A fill grows down the `data-process-line` track as the steps
 * cross the middle of the viewport, and each step whose number the fill has reached gets
 * `data-active`. Without JS the track and the steps render as they are.
 */
export function ProcessProgress({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end center'] })

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    const el = ref.current
    if (!el) return
    const reached = p * el.offsetHeight
    // Read every position first, then write, so the loop does not force a layout per step.
    const steps = Array.from(el.querySelectorAll<HTMLElement>('ol > li'))
    const active = steps.map((li) => li.offsetTop + MARKER <= reached)
    steps.forEach((li, i) => li.toggleAttribute('data-active', active[i]))
  })

  return (
    <div ref={ref} className={className}>
      {/* Scroll-linked movement is dropped under reduced motion; the steps still mark themselves. */}
      {!reduce && (
        <motion.div
          aria-hidden="true"
          style={{ scaleY: scrollYProgress }}
          className="absolute top-0 bottom-0 left-[1.375rem] z-[1] w-px origin-top bg-foreground"
        />
      )}
      {children}
    </div>
  )
}
