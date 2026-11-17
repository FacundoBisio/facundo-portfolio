'use client'

import { cn } from '@/lib/utils'

/** A soft glow that follows the pointer across the card (`.spotlight` in globals.css). Mouse only. */
export function Spotlight({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={cn('spotlight', className)}
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse') return
        const r = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
        e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
      }}
    />
  )
}
