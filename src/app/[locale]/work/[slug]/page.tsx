import type { Metadata, ResolvingMetadata } from 'next'
import { hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { SITE, localizedUrl } from '@/content/site'
import { featuredProjects, getProject } from '@/content/projects'
import { CaseStudy } from '@/components/work/CaseStudy'

type Params = Promise<{ locale: string; slug: string }>

// Runs once per locale from the parent segment: featured projects × locales.
export function generateStaticParams() {
  return featuredProjects.map((p) => ({ slug: p.slug }))
}

function findFeatured(slug: string) {
  const project = getProject(slug)
  return project?.featured ? project : undefined
}

export async function generateMetadata({ params }: { params: Params }, parent: ResolvingMetadata): Promise<Metadata> {
  const { locale, slug } = await params
  const project = findFeatured(slug)
  if (!hasLocale(routing.locales, locale) || !project) return {}
  // A page-level openGraph/twitter object replaces the parent's, so carry over the locale's site image.
  const { openGraph, twitter } = await parent
  const path = `/work/${project.slug}`
  const title = `${project.name} — ${SITE.name}`
  const description = project.summary[locale]

  return {
    title,
    description,
    alternates: {
      canonical: localizedUrl(locale, path),
      languages: {
        en: localizedUrl('en', path),
        es: localizedUrl('es', path),
        'x-default': localizedUrl('en', path),
      },
    },
    openGraph: {
      type: 'article',
      siteName: SITE.name,
      locale: locale === 'es' ? 'es_AR' : 'en_US',
      title,
      description,
      url: localizedUrl(locale, path),
      images: openGraph?.images,
    },
    twitter: { card: 'summary_large_image', title, description, images: twitter?.images },
  }
}

export default async function CaseStudyPage({ params }: { params: Params }) {
  const { locale, slug } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  const project = findFeatured(slug)
  if (!project) notFound()
  setRequestLocale(locale)

  const index = featuredProjects.indexOf(project)
  const next = featuredProjects[(index + 1) % featuredProjects.length]

  return <CaseStudy project={project} next={next} locale={locale} />
}
