import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { ArrowRightIcon } from 'lucide-react'

import { Link } from '@/i18n/navigation'
import { featuredProjects } from '@/content/projects'
import type { Locale } from '@/content/types'
import { buttonVariants } from '@/components/ui/button'
import { CvLink } from '@/components/layout/CvLink'
import { MediaSlideView } from '@/components/media/MediaSlideView'
import { ScrollCover } from '@/components/motion/ScrollCover'
import { cn } from '@/lib/utils'
import { Container } from './Section'

/** Stagger delay for the `.enter` load animation (globals.css). */
const d = (ms: number) => ({ '--d': `${ms}ms` }) as React.CSSProperties

/**
 * Poster panel: the text on the left, the portrait large on the right half (on top on phones), tinted per theme,
 * a numbered row of what I do along the bottom. Colours come from the --hp-* variables in globals.css: deep indigo in dark mode, lavender in light.
 * Below it, the product being built now as a cover that opens its case study.
 */
export function Hero() {
  const t = useTranslations('hero')
  const tWork = useTranslations('work')
  const locale = useLocale() as Locale
  const pillars = t.raw('pillars') as string[]
  const project = featuredProjects[0]
  const slide = project.media.find((m) => m.type === 'video') ?? project.media[0]
  const href = `/work/${project.slug}`

  return (
    <section aria-labelledby="hero-title">
      <div className="px-3 pt-3 sm:px-4 sm:pt-4">
        <div className="relative isolate mx-auto flex min-h-[calc(100svh-6rem)] max-w-[1400px] flex-col overflow-hidden rounded-[2rem] hero-panel bg-(--hp-bg) text-(--hp-fg)">
          {/* Indigo field the photo is blended into. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 [background:var(--hp-field)]"
          />
          {/* Decorative portrait (the name is in the heading), blended into the field per theme (globals.css).
              Phone: on top, full width. lg: the right side. Two fade layers: the wrapper fades toward the text, the
              image fades top and bottom. The blend lives on the wrapper, since a masked wrapper isolates its children. */}
          <div className="hero-photo relative -z-10 aspect-[4/5] w-full max-lg:max-h-[60svh] lg:absolute lg:right-0 lg:bottom-0 lg:aspect-auto lg:h-[92%] lg:w-[44%] lg:[mask-image:linear-gradient(90deg,transparent_0%,#000_35%)]">
            <Image
              src="/images/facundo-full.webp"
              alt=""
              width={1000}
              height={1362}
              priority
              sizes="(min-width: 1024px) 640px, 100vw"
              className="size-full object-cover object-[50%_25%] [mask-image:linear-gradient(180deg,#000_60%,transparent_100%)] lg:[mask-image:linear-gradient(180deg,transparent_0%,#000_14%,#000_72%,transparent_100%)]"
            />
          </div>

          <div className="flex flex-1 flex-col justify-center gap-6 px-6 pb-10 sm:px-10 max-lg:-mt-24 lg:max-w-[52%] lg:px-14 lg:pt-28 lg:pb-12">
            <h1 id="hero-title" className="flex flex-col">
              <span className="enter text-lg font-semibold text-(--hp-muted) sm:text-xl" style={d(150)}>
                {t('name')}
              </span>
              {/* Each word rises from behind its own mask. */}
              <span className="mt-2 block text-[clamp(2.75rem,7vw,6rem)] leading-[0.92] font-bold tracking-[-0.045em]">
                {t('roleShort')
                  .split(' ')
                  .map((word, i) => (
                    <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-top">
                      <span className="rise inline-block" style={d(220 + i * 110)}>
                        {word}
                      </span>
                      {' '}
                    </span>
                  ))}
              </span>
            </h1>
            <p className="enter max-w-[28rem] text-2xl leading-tight font-bold tracking-tight" style={d(400)}>
              {t('statement')}
            </p>
            <p className="enter max-w-[32rem] text-body text-(--hp-muted)" style={d(480)}>
              {t('value')}
            </p>
            <div className="enter mt-2 flex flex-wrap gap-3" style={d(560)}>
              <a href="#work" className={cn(buttonVariants({ variant: 'default' }), 'bg-(--hp-fg) text-(--hp-bg) hover:opacity-90')}>
                {t('ctaWork')}
                <ArrowRightIcon aria-hidden="true" />
              </a>
              <CvLink
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'border-(--hp-line) text-(--hp-fg) hover:bg-(--hp-line)',
                )}
              >
                {t('ctaCv')}
              </CvLink>
            </div>
          </div>

          <ol className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-(--hp-line) px-6 py-6 sm:px-10 lg:grid-cols-4 lg:px-14 lg:py-8">
            {pillars.map((pillar, i) => (
              <li key={pillar} className="enter flex flex-col gap-1.5" style={d(650 + i * 80)}>
                <span className="font-mono text-xs text-(--hp-accent)">
                  <span aria-hidden="true" className="mr-1 inline-block size-1.5 rounded-full bg-[#3DD6F5] align-middle" />
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm font-semibold">{pillar}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <Container className="flex flex-col items-center pt-16 pb-16 lg:pt-24 lg:pb-24">
        {slide && (
          <ScrollCover className="w-full max-w-[1040px]">
            <figure className="flex flex-col gap-4">
              <div className="relative rounded-[17px] p-px [background:linear-gradient(140deg,var(--brand),transparent_40%,transparent_60%,var(--brand-2))] shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--brand)_55%,transparent)]">
                <MediaSlideView slide={slide} locale={locale} active />
                {/* Whole frame opens the case study; the play/pause button sits above it (z-10). */}
                <Link
                  href={href}
                  aria-label={`${tWork('viewCase')}: ${project.name}`}
                  className="absolute inset-0 rounded-[17px] focus-visible:outline-offset-4"
                />
              </div>
              <figcaption className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                <span className="text-label text-muted-foreground uppercase">{t('featuredLabel')}</span>
                <Link
                  href={href}
                  className="inline-flex min-h-11 items-center gap-2 text-body font-semibold transition-colors duration-(--dur-base) hover:text-brand"
                >
                  {project.name}
                  <ArrowRightIcon aria-hidden="true" className="size-4" />
                </Link>
              </figcaption>
            </figure>
          </ScrollCover>
        )}
        <p className="mt-10 text-label text-muted-foreground uppercase">{t('location')}</p>
      </Container>
    </section>
  )
}
