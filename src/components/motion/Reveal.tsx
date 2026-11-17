'use client'

import { useEffect, useRef } from 'react'
import { animate, inView } from 'motion/react'
import { DUR, EASE } from './tokens'

/**
 * Fades its content in with a short rise the first time it enters the viewport.
 * Rendered visible: only content that is still below the fold after hydration is hidden,
 * so without JS, and for anything in the first viewport, nothing ever starts hidden.
 */
export function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || el.getBoundingClientRect().top < window.innerHeight) return

    // Reduced motion keeps the fade and drops the movement.
    const rise = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const from = 'translateY(32px) scale(0.98)'
    el.style.opacity = '0'
    if (rise) {
      el.style.transform = from
      el.style.filter = 'blur(6px)'
    }

    return inView(
      el,
      () => {
        // Explicit end values: Motion reads 'none' as zeroed functions, which would leave scale(0).
        animate(
          el,
          rise
            ? {
                opacity: [0, 1],
                transform: [from, 'translateY(0px) scale(1)'],
                filter: ['blur(6px)', 'blur(0px)'],
              }
            : { opacity: [0, 1] },
          { duration: DUR.reveal, ease: EASE },
        ).then(() => {
          // Leaving a transform or filter behind would trap sticky and fixed descendants.
          el.style.transform = ''
          el.style.filter = ''
        })
      },
      { margin: '0px 0px -10% 0px' },
    )
  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
