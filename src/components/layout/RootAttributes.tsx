'use client'

import { useLayoutEffect } from 'react'
import { useLocale } from 'next-intl'

/**
 * Switching language re-renders <html>, which drops the data-theme and data-intro set by the head scripts.
 * Put them back on every locale change, before paint.
 */
export function RootAttributes() {
  const locale = useLocale()

  useLayoutEffect(() => {
    const root = document.documentElement
    try {
      const saved = localStorage.getItem('theme')
      root.dataset.theme =
        saved === 'light' || saved === 'dark' ? saved : matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
      if (sessionStorage.getItem('intro')) root.dataset.intro = 'seen'
    } catch {}
  }, [locale])

  return null
}
