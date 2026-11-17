'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { PauseIcon, PlayIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { Locale, MediaSlide } from '@/content/types'
import { MediaPlaceholder } from './MediaPlaceholder'
import { useAutoplayInView } from './useAutoplayInView'

/** One media item in a rounded frame at the recordings' 1280×592 ratio: video, image, diagram, or the placeholder when `src` is missing. */
export function MediaSlideView({
  slide,
  locale,
  active,
  priority = false,
}: {
  slide: MediaSlide
  locale: Locale
  active: boolean
  priority?: boolean
}) {
  return (
    <div
      className={cn(
        'relative aspect-[1280/592] w-full overflow-hidden rounded-2xl',
        // Diagrams are 16:10 SVGs on #0B0B12: matching the fill hides the side bands.
        slide.type === 'diagram' ? 'bg-[#0B0B12]' : 'bg-card',
      )}
    >
      {!slide.src ? (
        <MediaPlaceholder slide={slide} locale={locale} />
      ) : slide.type === 'video' ? (
        <SlideVideo slide={slide} src={slide.src} locale={locale} active={active} />
      ) : (
        <Image
          src={slide.src}
          alt={slide.alt[locale]}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 1200px, 100vw"
          unoptimized={slide.src.endsWith('.svg')}
          className={slide.type === 'diagram' ? 'object-contain' : 'object-cover'}
        />
      )}
    </div>
  )
}

function SlideVideo({
  slide,
  src,
  locale,
  active,
}: {
  slide: MediaSlide
  src: string
  locale: Locale
  active: boolean
}) {
  const t = useTranslations('media')
  const ref = useRef<HTMLVideoElement>(null)
  const { playing, toggle } = useAutoplayInView(ref, active)

  return (
    <>
      <video
        ref={ref}
        muted
        playsInline
        loop
        preload="none"
        poster={slide.poster}
        aria-label={slide.alt[locale]}
        className="absolute inset-0 size-full object-cover"
      >
        {slide.webm && <source src={slide.webm} type="video/webm" />}
        <source src={src} type="video/mp4" />
      </video>
      <Button
        type="button"
        variant="outline"
        onClick={toggle}
        aria-label={playing ? t('pause') : t('play')}
        className="absolute bottom-3 left-3 z-10 size-11 rounded-full border-line-strong bg-background/80 backdrop-blur hover:bg-secondary"
      >
        {playing ? <PauseIcon aria-hidden="true" /> : <PlayIcon aria-hidden="true" />}
      </Button>
    </>
  )
}
