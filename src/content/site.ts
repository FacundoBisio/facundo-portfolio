import type { Locale } from './types'

export const SITE = {
  name: 'Facundo Bisio',
  email: 'facubisio433@gmail.com',
  phone: '+54 351 366-2570',
  linkedin: 'https://www.linkedin.com/in/facundo-bisio-25a104247/',
  github: 'https://github.com/FacundoBisio',
  url: 'https://facundo-portfolio-two.vercel.app',
  cv: {
    en: { href: '/cv/Facundo-Bisio-CV-EN.pdf', filename: 'Facundo-Bisio-CV-EN.pdf' },
    es: { href: '/cv/Facundo-Bisio-CV-ES.pdf', filename: 'Facundo-Bisio-CV-ES.pdf' },
  },
} as const

/** Absolute URL of a path in a given language. English has no prefix. */
export function localizedUrl(locale: Locale, path = ''): string {
  const prefix = locale === 'en' ? '' : '/es'
  return `${SITE.url}${prefix}${path}` || SITE.url
}
