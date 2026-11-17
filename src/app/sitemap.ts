import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
import { localizedUrl } from '@/content/site'
import { featuredProjects } from '@/content/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', ...featuredProjects.map((p) => `/work/${p.slug}`)]
  const lastModified = new Date()

  return paths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: localizedUrl(locale, path),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(routing.locales.map((l) => [l, localizedUrl(l, path)])),
      },
    })),
  )
}
