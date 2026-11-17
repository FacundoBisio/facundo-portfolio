'use client'

import { useTranslations } from 'next-intl'
import type { Locale, MediaSlide } from '@/content/types'

/** Stand-in for media that is not recorded yet: slide type and caption over a hairline cross. */
export function MediaPlaceholder({ slide, locale }: { slide: MediaSlide; locale: Locale }) {
  const t = useTranslations('media')

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-card">
      <svg
        aria-hidden="true"
        className="absolute inset-0 size-full stroke-border"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="0" x2="100" y2="100" vectorEffect="non-scaling-stroke" />
        <line x1="100" y1="0" x2="0" y2="100" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="relative flex max-w-[80%] flex-col items-center gap-2 bg-card px-4 py-3 text-center font-mono text-xs tracking-[0.08em]">
        <span className="text-muted-foreground uppercase">
          {t(slide.type)} · {t('pending')}
        </span>
        <span className="text-foreground">{slide.caption[locale]}</span>
      </div>
    </div>
  )
}
