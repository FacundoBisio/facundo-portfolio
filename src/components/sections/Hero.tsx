import { useLocale, useTranslations } from 'next-intl'
import { ArrowRightIcon } from 'lucide-react'

import { Link } from '@/i18n/navigation'
import { featuredProjects } from '@/content/projects'
import type { Locale } from '@/content/types'
import { buttonVariants } from '@/components/ui/button'
import { CvLink } from '@/components/layout/CvLink'
import { MediaSlideView } from '@/components/media/MediaSlideView'
import { Container } from './Section'

/** Asymmetric: the statement on the left, the product being built now on the right. No stats. */
export function Hero() {
  const t = useTranslations('hero')
  const locale = useLocale() as Locale
  const project = featuredProjects[0]
  const slide = project.media[0]

  return (
    <section aria-labelledby="hero-title">
      <Container className="grid gap-12 pt-12 pb-16 min-[900px]:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] min-[900px]:items-end min-[900px]:gap-16 lg:pt-20 lg:pb-24">
        <div className="flex flex-col">
          <h1 id="hero-title">
            <span className="block text-label text-muted-foreground uppercase">
              {t('name')} — {t('role')}
            </span>
            <span className="mt-6 block text-display">{t('statement')}</span>
          </h1>
          <p className="mt-8 max-w-[52ch] text-body">{t('value')}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CvLink className={buttonVariants({ variant: 'default' })}>{t('ctaCv')}</CvLink>
            <a href="#contact" className={buttonVariants({ variant: 'outline' })}>
              {t('ctaContact')}
            </a>
          </div>
          <p className="mt-8 text-label text-muted-foreground uppercase">{t('location')}</p>
        </div>

        {slide && (
          <figure className="flex flex-col gap-3">
            <MediaSlideView slide={slide} locale={locale} active priority />
            <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4">
              <span className="text-label text-muted-foreground uppercase">{t('featuredLabel')}</span>
              <Link
                href={`/work/${project.slug}`}
                className="group inline-flex min-h-11 items-center gap-2 text-body font-semibold underline decoration-line-strong underline-offset-4 transition-colors duration-(--dur-fast) ease-(--ease-out) hover:decoration-current"
              >
                {project.name}
                <ArrowRightIcon aria-hidden="true" className="size-4" />
              </Link>
            </figcaption>
          </figure>
        )}
      </Container>
    </section>
  )
}
