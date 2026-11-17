'use client'

import { useCallback, useRef, useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import type { Locale, MediaSlide } from '@/content/types'
import { MediaLightbox } from './MediaLightbox'
import { MediaSlideView } from './MediaSlideView'
import { SlideNav, useSelectedSnap } from './SlideNav'

/** Embla option for reduced motion: buttons, keys and thumbnails jump instead of scrolling. */
const INSTANT = { duration: 0 }

/**
 * Case-study media: Embla carousel (arrow keys, swipe), caption, position, thumbnails.
 * Clicking a slide opens the same slides in a full-screen lightbox.
 */
export function MediaCarousel({
  slides,
  locale,
  projectName,
  priority = false,
}: {
  slides: MediaSlide[]
  locale: Locale
  projectName: string
  priority?: boolean
}) {
  const t = useTranslations('media')
  const reduceMotion = useReducedMotion()
  const [api, setApi] = useState<CarouselApi>()
  const selected = useSelectedSnap(api)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxStart, setLightboxStart] = useState(0)
  const lightboxIndex = useRef(0)
  const openButtons = useRef<(HTMLButtonElement | null)[]>([])

  const onIndexChange = useCallback((i: number) => {
    lightboxIndex.current = i
  }, [])

  const onOpenChange = (open: boolean) => {
    setLightboxOpen(open)
    // Leave the carousel on the slide the visitor ended on in the lightbox.
    if (!open) api?.scrollTo(lightboxIndex.current, true)
  }

  if (slides.length === 0) return null

  const current = slides[Math.min(selected, slides.length - 1)]

  return (
    <>
      <Carousel opts={reduceMotion ? INSTANT : undefined} setApi={setApi} aria-label={`${t('carousel')}: ${projectName}`} className="flex flex-col gap-3">
        <CarouselContent>
          {slides.map((slide, i) => (
            <CarouselItem
              key={i}
              // Off-screen slides stay out of the tab order so focus never drags Embla sideways.
              inert={i !== selected}
              aria-label={t('position', { current: i + 1, total: slides.length })}
            >
              <div className="relative">
                <MediaSlideView slide={slide} locale={locale} active={i === selected && !lightboxOpen} priority={priority && i === 0} />
                <button
                  type="button"
                  ref={(el) => {
                    openButtons.current[i] = el
                  }}
                  onClick={() => {
                    setLightboxStart(i)
                    lightboxIndex.current = i
                    setLightboxOpen(true)
                  }}
                  aria-label={`${t('open')}: ${slide.caption[locale]}`}
                  className="absolute inset-0 cursor-zoom-in rounded-2xl focus-visible:outline-offset-[-4px]"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <p className="font-mono text-xs tracking-[0.08em] text-muted-foreground">{current.caption[locale]}</p>

        {slides.length > 1 && (
          <>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {slides.map((slide, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => api?.scrollTo(i)}
                  // Without an image the thumbnail shows the slide type, so the name starts with it (WCAG 2.5.3).
                  aria-label={thumbSrc(slide) ? t('goTo', { index: i + 1 }) : `${t(slide.type)}: ${t('goTo', { index: i + 1 })}`}
                  aria-current={i === selected ? 'true' : undefined}
                  className={cn(
                    'relative flex h-[60px] w-[130px] shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-card transition-[border-color,opacity,transform] duration-(--dur-base) ease-(--ease-out) motion-safe:hover:-translate-y-0.5',
                    i === selected ? 'border-foreground' : 'border-border hover:border-line-strong',
                  )}
                >
                  <Thumbnail slide={slide} />
                </button>
              ))}
            </div>
            <SlideNav api={api} selected={selected} total={slides.length} />
          </>
        )}
      </Carousel>

      <MediaLightbox
        open={lightboxOpen}
        onOpenChange={onOpenChange}
        finalFocus={() => openButtons.current[lightboxIndex.current] ?? null}
        slides={slides}
        locale={locale}
        projectName={projectName}
        startIndex={lightboxStart}
        onIndexChange={onIndexChange}
      />
    </>
  )
}

const thumbSrc = (slide: MediaSlide) => (slide.type === 'video' ? slide.poster : slide.src)

/** Decorative preview inside a labelled button: the image or poster if there is one, else the slide type. */
function Thumbnail({ slide }: { slide: MediaSlide }) {
  const t = useTranslations('media')
  const src = thumbSrc(slide)

  if (!src) {
    return (
      <span aria-hidden="true" className="truncate px-1 font-mono text-xs tracking-[0.08em] text-muted-foreground uppercase">
        {t(slide.type)}
      </span>
    )
  }
  return <Image src={src} alt="" fill sizes="130px" unoptimized={src.endsWith('.svg')} className="object-cover" />
}
