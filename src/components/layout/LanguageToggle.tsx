'use client'

import { useLocale, useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { cn } from '@/lib/utils'

/** Links to the same page in the other language. Works without JS. */
export function LanguageToggle({ className }: { className?: string }) {
  const locale = useLocale()
  const t = useTranslations('nav')
  const pathname = usePathname()
  const target = locale === 'en' ? 'es' : 'en'

  return (
    <Link
      href={pathname}
      locale={target}
      // Same page, other language: stay where the reader is instead of jumping to the top.
      scroll={false}
      hrefLang={target}
      lang={target}
      // The accessible name starts with the visible code (WCAG 2.5.3).
      aria-label={`${target}, ${locale === 'en' ? t('switchToEs') : t('switchToEn')}`}
      className={cn(
        'inline-flex size-11 items-center justify-center rounded-sm text-label text-muted-foreground uppercase transition-colors duration-(--dur-fast) ease-(--ease-out) hover:bg-secondary hover:text-foreground',
        className,
      )}
    >
      {target}
    </Link>
  )
}
