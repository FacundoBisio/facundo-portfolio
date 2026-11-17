import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  // English by default: `/` never redirects by Accept-Language; Spanish is reached via `/es` or the toggle.
  localeDetection: false,
})
