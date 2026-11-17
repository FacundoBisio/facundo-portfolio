import { useLocale, useTranslations } from 'next-intl'
import { SITE } from '@/content/site'
import type { Locale } from '@/content/types'

/** Downloads the CV of the active language. Style it with `className`. */
export function CvLink({ className, children }: { className?: string; children?: React.ReactNode }) {
  const locale = useLocale() as Locale
  const t = useTranslations('nav')
  const cv = SITE.cv[locale]
  return (
    <a href={cv.href} download={cv.filename} className={className}>
      {children ?? t('downloadCv')}
    </a>
  )
}
