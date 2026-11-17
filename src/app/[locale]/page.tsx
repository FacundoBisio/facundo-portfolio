import type { Metadata } from 'next'
import { hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { localizedUrl } from '@/content/site'
import { Hero } from '@/components/sections/Hero'
import { Work } from '@/components/sections/Work'
import { Process } from '@/components/sections/Process'
import { Experience } from '@/components/sections/Experience'
import { Stack } from '@/components/sections/Stack'
import { Teaching } from '@/components/sections/Teaching'
import { Contact } from '@/components/sections/Contact'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) return {}
  return {
    alternates: {
      canonical: localizedUrl(locale),
      languages: {
        en: localizedUrl('en'),
        es: localizedUrl('es'),
        'x-default': localizedUrl('en'),
      },
    },
  }
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  setRequestLocale(locale)

  return (
    <>
      <Hero />
      <Work />
      <Process />
      <Experience />
      <Stack />
      <Teaching />
      <Contact />
    </>
  )
}
