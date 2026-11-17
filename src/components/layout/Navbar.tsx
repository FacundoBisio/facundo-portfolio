'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

import { Link, usePathname } from '@/i18n/navigation'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CvLink } from './CvLink'
import { LanguageToggle } from './LanguageToggle'
import { ThemeToggle } from './ThemeToggle'
import { MobileNav, NAV_SECTIONS } from './MobileNav'

/** Section in the middle band of the viewport, for the current-link state. Home only. */
function useCurrentSection(enabled: boolean) {
  const [current, setCurrent] = useState<string | null>(null)

  useEffect(() => {
    if (!enabled) return
    const sections = NAV_SECTIONS.map((id) => document.getElementById(id)).filter((el) => el !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setCurrent(entry.target.id)
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => {
      observer.disconnect()
      setCurrent(null)
    }
  }, [enabled])

  return current
}

export function Navbar() {
  const t = useTranslations('nav')
  const tHero = useTranslations('hero')
  const pathname = usePathname()
  const current = useCurrentSection(pathname === '/')

  return (
    <header id="top" className="enter fixed inset-x-0 top-0 z-40 border-b border-border bg-background/75 backdrop-blur-md transition-colors duration-(--dur-slow)">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          aria-label={t('home')}
          className="-mx-1 inline-flex min-h-11 items-center gap-2 px-1 text-lg font-bold tracking-tight whitespace-nowrap"
        >
          {tHero('name')}
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center">
            {NAV_SECTIONS.map((id) => (
              <li key={id}>
                <Link
                  href={{ pathname: '/', hash: id }}
                  aria-current={current === id ? 'location' : undefined}
                  className={cn(
                    // Underline grows from the left on hover and stays for the current section.
                    'relative inline-flex min-h-11 items-center px-2 text-label uppercase transition-colors duration-(--dur-base) ease-(--ease-out) lg:px-3',
                    'after:absolute after:inset-x-2 after:bottom-2.5 after:h-px after:origin-left after:scale-x-0 after:bg-ring after:transition-transform after:duration-(--dur-slow) after:ease-(--ease-out) hover:after:scale-x-100 lg:after:inset-x-3',
                    current === id && 'after:scale-x-100',
                    current === id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {t(id)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
          <CvLink className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'hidden lg:inline-flex')} />
          <MobileNav className="md:hidden" />
        </div>
      </div>
    </header>
  )
}
