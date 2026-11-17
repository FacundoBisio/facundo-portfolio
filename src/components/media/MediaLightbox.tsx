'use client'

import { useEffect, useState } from 'react'
import { Dialog as DialogPrimitive } from '@base-ui/react/dialog'
import { useTranslations } from 'next-intl'
import { XIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import { Dialog, DialogClose, DialogOverlay, DialogPortal, DialogTitle } from '@/components/ui/dialog'
import type { Locale, MediaSlide } from '@/content/types'
import { MediaSlideView } from './MediaSlideView'
import { SlideNav, useSelectedSnap } from './SlideNav'

interface LightboxProps {
  slides: MediaSlide[]
  locale: Locale
  projectName: string
  startIndex: number
  onIndexChange: (index: number) => void
}

/**
 * Full-screen view of the same slides. Esc closes it (Base UI Dialog); focus goes to
 * whatever `finalFocus` returns, so the caller can hand it back to the slide now in view.
 */
export function MediaLightbox({
  open,
  onOpenChange,
  finalFocus,
  ...body
}: LightboxProps & {
  open: boolean
  onOpenChange: (open: boolean) => void
  finalFocus: () => HTMLElement | null
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-background/90 supports-backdrop-filter:backdrop-blur-none" />
        <DialogPrimitive.Popup
          finalFocus={() => finalFocus() ?? true}
          className="fixed inset-2 z-50 flex flex-col rounded-lg border border-line-strong bg-popover p-4 text-popover-foreground outline-none duration-150 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0 sm:inset-6 sm:p-6"
        >
          <LightboxBody {...body} />
        </DialogPrimitive.Popup>
      </DialogPortal>
    </Dialog>
  )
}

// Mounted on every open, so Embla starts on the slide that was clicked.
function LightboxBody({ slides, locale, projectName, startIndex, onIndexChange }: LightboxProps) {
  const t = useTranslations('media')
  // Read once on open (client only); under reduced motion slides jump instead of scrolling.
  const [opts] = useState(() => ({
    startIndex,
    ...(window.matchMedia('(prefers-reduced-motion: reduce)').matches && { duration: 0 }),
  }))
  const [api, setApi] = useState<CarouselApi>()
  const selected = useSelectedSnap(api, startIndex)

  useEffect(() => onIndexChange(selected), [selected, onIndexChange])

  return (
    // The carousel wraps the header too, so arrow keys work while focus is on the close button.
    <Carousel opts={opts} setApi={setApi} aria-label={`${t('carousel')}: ${projectName}`} className="flex min-h-0 flex-1 flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <DialogTitle className="font-mono text-xs font-normal tracking-[0.08em] text-muted-foreground uppercase">
          {projectName}
        </DialogTitle>
        <DialogClose
          render={
            <Button
              variant="outline"
              className="size-11 rounded-sm border-line-strong bg-transparent hover:bg-secondary"
              aria-label={t('close')}
            />
          }
        >
          <XIcon aria-hidden="true" />
        </DialogClose>
      </div>

      <div className="flex min-h-0 flex-1 items-center">
        <CarouselContent>
          {slides.map((slide, i) => (
            <CarouselItem
              key={i}
              inert={i !== selected}
              aria-label={t('position', { current: i + 1, total: slides.length })}
            >
              <figure className="mx-auto flex w-full max-w-[calc((100dvh-13rem)*2.16)] flex-col gap-3">
                <MediaSlideView slide={slide} locale={locale} active={i === selected} />
                <figcaption className="font-mono text-xs tracking-[0.08em] text-muted-foreground">
                  {slide.caption[locale]}
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
      </div>

      <SlideNav api={api} selected={selected} total={slides.length} />
    </Carousel>
  )
}
