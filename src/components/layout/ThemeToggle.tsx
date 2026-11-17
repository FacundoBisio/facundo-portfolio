'use client'

import { useTranslations } from 'next-intl'
import { MoonIcon, SunIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

/** Runs in <head> before paint: saved choice, else the OS preference. Avoids a flash of the wrong theme. */
export const THEME_SCRIPT = `try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark')t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';document.documentElement.dataset.theme=t}catch(e){}`

/** Flips light/dark with a circular reveal from the button where View Transitions exist. */
export function ThemeToggle({ className }: { className?: string }) {
  const t = useTranslations('nav')

  function toggle(e: React.MouseEvent<HTMLButtonElement>) {
    const root = document.documentElement
    const next = root.dataset.theme === 'light' ? 'dark' : 'light'
    const apply = () => {
      root.dataset.theme = next
      try {
        localStorage.setItem('theme', next)
      } catch {}
    }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!document.startViewTransition || reduce) return apply()

    const { clientX: x, clientY: y } = e
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
    document.startViewTransition(apply).ready.then(() => {
      root.animate(
        { clipPath: [`circle(0 at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 550, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', pseudoElement: '::view-transition-new(root)' },
      )
    })
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t('toggleTheme')}
      className={cn(
        'group inline-flex size-11 items-center justify-center rounded-full text-muted-foreground transition-[color,background-color,transform] duration-(--dur-base) ease-(--ease-out) hover:bg-secondary hover:text-foreground motion-safe:active:scale-90',
        className,
      )}
    >
      {/* Both icons rendered; CSS picks one by theme, so server and client markup match. */}
      <SunIcon aria-hidden="true" className="hidden size-[18px] transition-transform duration-(--dur-slow) ease-(--ease-out) group-hover:rotate-45 [[data-theme=dark]_&]:block" />
      <MoonIcon aria-hidden="true" className="hidden size-[18px] transition-transform duration-(--dur-slow) ease-(--ease-out) group-hover:-rotate-12 [[data-theme=light]_&]:block" />
    </button>
  )
}
