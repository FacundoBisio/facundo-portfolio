import type { Metadata } from 'next'
import { Manrope, DM_Mono } from 'next/font/google'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import '../globals.css'
import { routing } from '@/i18n/routing'
import { SITE, localizedUrl } from '@/content/site'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { THEME_SCRIPT } from '@/components/layout/ThemeToggle'
import { RootAttributes } from '@/components/layout/RootAttributes'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  display: 'swap',
  weight: ['400', '500'],
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) return {}
  const t = await getTranslations({ locale, namespace: 'meta' })
  return {
    metadataBase: new URL(SITE.url),
    title: t('title'),
    description: t('description'),
    authors: [{ name: SITE.name }],
    creator: SITE.name,
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      locale: locale === 'es' ? 'es_AR' : 'en_US',
      alternateLocale: locale === 'es' ? 'en_US' : 'es_AR',
      title: t('title'),
      description: t('description'),
      url: localizedUrl(locale),
    },
    twitter: { card: 'summary_large_image', title: t('title'), description: t('description') },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: 'meta' })
  const tNav = await getTranslations({ locale, namespace: 'nav' })
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.name,
    jobTitle: (await getTranslations({ locale, namespace: 'hero' }))('role'),
    description: t('description'),
    url: localizedUrl(locale),
    email: `mailto:${SITE.email}`,
    address: { '@type': 'PostalAddress', addressLocality: 'Córdoba', addressCountry: 'AR' },
    sameAs: [SITE.linkedin, SITE.github],
    inLanguage: locale,
  }

  return (
    <html
      lang={locale}
      // data-theme is set by THEME_SCRIPT before hydration.
      suppressHydrationWarning
      className={`${manrope.variable} ${dmMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        {/* The intro curtain plays once per tab session; later loads mark it seen before paint, and the first one
            does too once the hero has finished, so in-app navigation is not held back by the intro delay. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var r=document.documentElement;if(sessionStorage.getItem('intro'))r.dataset.intro='seen';else{sessionStorage.setItem('intro','1');setTimeout(function(){r.dataset.intro='seen'},3200)}}catch(e){}`,
          }}
        />
      </head>
      <body>
        <div aria-hidden="true" className="intro-curtain">
          <span>{SITE.name}</span>
        </div>
        <div aria-hidden="true" className="ambient">
          <span />
          <span />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        <NextIntlClientProvider>
          <RootAttributes />
          <a
            href="#main"
            className="fixed top-2 left-2 z-50 flex min-h-11 -translate-y-24 items-center rounded-sm bg-primary px-4 py-3 text-label text-primary-foreground uppercase focus:translate-y-0"
          >
            {tNav('skip')}
          </a>
          <Navbar />
          <main id="main" tabIndex={-1} className="pt-16 outline-none">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
