'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import type { CarouselApi } from '@/components/ui/carousel'

/** Index of the slide Embla has selected, kept in React state. */
export function useSelectedSnap(api: CarouselApi, initial = 0) {
  const [selected, setSelected] = useState(initial)

  useEffect(() => {
    if (!api) return
    const onSelect = () => setSelected(api.selectedScrollSnap())
    onSelect()
    api.on('select', onSelect).on('reInit', onSelect)
    return () => {
      api.off('select', onSelect).off('reInit', onSelect)
    }
  }, [api])

  return selected
}

const pad = (n: number) => String(n).padStart(2, '0')

const navButton =
  'size-11 rounded-sm border-line-strong bg-transparent hover:bg-secondary aria-disabled:opacity-50'

/** Position indicator ("02 / 04", announced in full) plus previous / next buttons. */
export function SlideNav({ api, selected, total }: { api: CarouselApi; selected: number; total: number }) {
  const t = useTranslations('media')

  return (
    <div className="flex items-center justify-between gap-4">
      <p className="font-mono text-xs tracking-[0.08em] text-muted-foreground" aria-live="polite">
        <span className="sr-only">{t('position', { current: selected + 1, total })}</span>
        <span aria-hidden="true">
          {pad(selected + 1)} / {pad(total)}
        </span>
      </p>
      <div className="flex gap-2">
        <Button
          type="button"
          variant="outline"
          className={navButton}
          focusableWhenDisabled
          disabled={selected === 0}
          onClick={() => api?.scrollPrev()}
          aria-label={t('previous')}
        >
          <ChevronLeftIcon aria-hidden="true" />
        </Button>
        <Button
          type="button"
          variant="outline"
          className={navButton}
          focusableWhenDisabled
          disabled={selected === total - 1}
          onClick={() => api?.scrollNext()}
          aria-label={t('next')}
        >
          <ChevronRightIcon aria-hidden="true" />
        </Button>
      </div>
    </div>
  )
}
