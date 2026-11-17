import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react'

import { Link } from '@/i18n/navigation'
import type { Locale, Project } from '@/content/types'
import { buttonVariants } from '@/components/ui/button'
import { MediaCarousel } from '@/components/media/MediaCarousel'
import { Reveal } from '@/components/motion/Reveal'
import { Spotlight } from '@/components/motion/Spotlight'
import { Container } from '@/components/sections/Section'
import { cn } from '@/lib/utils'
import { StackChips } from './ProjectRow'

const CARD = 'rounded-3xl border border-border bg-card p-6 lg:p-8'
const d = (ms: number) => ({ '--d': `${ms}ms` }) as React.CSSProperties

/** A titled block of the story. */
function Block({ id, title, children, className }: { id: string; title: string; children: React.ReactNode; className?: string }) {
  return (
    <Reveal>
      <section aria-labelledby={id} className={cn(CARD, className)}>
        <h2 id={id} className="text-label text-muted-foreground uppercase">
          {title}
        </h2>
        <div className="mt-4">{children}</div>
      </section>
    </Reveal>
  )
}

export function CaseStudy({ project, next, locale }: { project: Project; next: Project; locale: Locale }) {
  const t = useTranslations('caseStudy')
  const tWork = useTranslations('work')
  const tContact = useTranslations('contact')
  const cs = project.caseStudy
  const nextCover = next.media.find((m) => m.type === 'image' && m.src)

  return (
    <article>
      <Container className="pt-6 pb-16 lg:pt-10 lg:pb-24">
        <Link href={{ pathname: '/', hash: 'work' }} className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }), 'enter -ml-4')}>
          <ArrowLeftIcon aria-hidden="true" />
          {t('back')}
        </Link>

        {/* Header: centered, like the home hero. */}
        <header className="mx-auto mt-8 flex max-w-[48rem] flex-col items-center gap-5 text-center">
          <p
            className="enter rounded-full border border-border bg-card/60 px-3 py-1.5 text-label text-muted-foreground uppercase backdrop-blur"
            style={d(80)}
          >
            {project.kind[locale]}
          </p>
          <h1 className="enter text-display" style={d(180)}>
            {project.name}
          </h1>
          <p className="enter max-w-[60ch] text-body text-muted-foreground" style={d(280)}>
            {project.summary[locale]}
          </p>
          <div className="enter flex flex-wrap items-center justify-center gap-3" style={d(380)}>
            <p className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-label">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-brand-2" />
              <span className="sr-only">{tWork('statusLabel')}: </span>
              {project.status[locale]}
            </p>
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: 'default', size: 'sm' })}
              >
                {link.label[locale]}
                <span className="sr-only"> ({tContact('external')})</span>
                <ArrowUpRightIcon aria-hidden="true" />
              </a>
            ))}
          </div>
        </header>

        {project.media.length > 0 && (
          <section aria-labelledby="media-title" className="enter mt-12 lg:mt-16" style={d(480)}>
            <h2 id="media-title" className="sr-only">
              {t('media')}
            </h2>
            <div className="rounded-[1.75rem] p-px [background:linear-gradient(140deg,var(--brand),var(--border)_35%,var(--border)_65%,var(--brand-2))] shadow-[0_30px_80px_-40px_color-mix(in_oklab,var(--brand)_50%,transparent)]">
              <div className="rounded-[calc(1.75rem-1px)] bg-card p-3 sm:p-5">
                <MediaCarousel slides={project.media} locale={locale} projectName={project.name} priority />
              </div>
            </div>
          </section>
        )}

        {/* Story on the left; on wide screens the facts stay in view beside it. */}
        <div className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <div className="flex flex-col gap-4">
            {cs && (
              <>
                <Block id="problem" title={t('problem')}>
                  <p className="text-body">{cs.problem[locale]}</p>
                </Block>
                <Block id="role" title={t('role')}>
                  <p className="text-body">{cs.role[locale]}</p>
                </Block>
                <Block id="decisions" title={t('decisions')}>
                  <ol className="grid gap-3 sm:grid-cols-2">
                    {cs.decisions[locale].map((item, i) => (
                      <li
                        key={item}
                        className="flex gap-3 rounded-2xl border border-border bg-background/40 p-4 text-body transition-colors duration-(--dur-base) hover:border-brand"
                      >
                        <span aria-hidden="true" className="font-mono text-xs text-brand">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </Block>
                <Block
                  id="outcome"
                  title={t('outcome')}
                  className="border-transparent bg-[linear-gradient(140deg,color-mix(in_oklab,var(--brand)_18%,var(--card)),var(--card)_60%)]"
                >
                  <p className="text-body">{cs.outcome[locale]}</p>
                </Block>
              </>
            )}
          </div>

          <aside className="lg:sticky lg:top-24">
            <Reveal>
              <section aria-labelledby="stack" className={CARD}>
                <h2 id="stack" className="text-label text-muted-foreground uppercase">
                  {t('stack')}
                </h2>
                <StackChips stack={project.stack} className="mt-4" />
              </section>
            </Reveal>
          </aside>
        </div>

        <nav aria-labelledby="next-title" className="mt-16 lg:mt-24">
          <Reveal>
            <h2 id="next-title" className="text-label text-muted-foreground uppercase">
              {t('next')}
            </h2>
            <Link href={`/work/${next.slug}`} className="group/next mt-4 block rounded-3xl">
              <Spotlight className="grid items-center gap-6 overflow-hidden rounded-3xl border border-border bg-card p-4 transition-colors duration-(--dur-slow) group-hover/next:border-brand sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] sm:p-6">
                <div className="flex flex-col gap-2 px-2">
                  <p className="text-label text-muted-foreground uppercase">{next.kind[locale]}</p>
                  <p className="inline-flex items-center gap-3 text-headline">
                    {next.name}
                    <ArrowRightIcon aria-hidden="true" className="size-6 shrink-0 text-brand" />
                  </p>
                </div>
                {nextCover?.src && (
                  <div className="aspect-[1280/592] overflow-hidden rounded-2xl">
                    <Image
                      src={nextCover.src}
                      alt=""
                      width={640}
                      height={296}
                      className="size-full object-cover transition-transform duration-700 ease-(--ease-out) group-hover/next:scale-105"
                    />
                  </div>
                )}
              </Spotlight>
            </Link>
          </Reveal>
        </nav>
      </Container>
    </article>
  )
}
