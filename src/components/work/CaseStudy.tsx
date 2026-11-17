import { useTranslations } from 'next-intl'
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react'

import { Link } from '@/i18n/navigation'
import type { Locale, Project } from '@/content/types'
import { MediaCarousel } from '@/components/media/MediaCarousel'
import { Container, TWO_COL } from '@/components/sections/Section'
import { cn } from '@/lib/utils'
import { StackChips } from './ProjectRow'

/** One block of the case study: its name in the facts column, the content in the wide one. */
function Block({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={id} className={cn(TWO_COL, 'gap-y-3 border-t border-border py-8 lg:py-10')}>
      <h2 id={id} className="pt-1 text-label text-muted-foreground uppercase">
        {title}
      </h2>
      <div className="max-w-[68ch]">{children}</div>
    </section>
  )
}

export function CaseStudy({ project, next, locale }: { project: Project; next: Project; locale: Locale }) {
  const t = useTranslations('caseStudy')
  const tWork = useTranslations('work')
  const tContact = useTranslations('contact')
  const cs = project.caseStudy

  return (
    <article>
      <Container className="pt-6 pb-16 lg:pt-10 lg:pb-24">
        <Link
          href={{ pathname: '/', hash: 'work' }}
          className="-mx-1 inline-flex min-h-11 items-center gap-2 px-1 text-label text-muted-foreground uppercase transition-colors duration-(--dur-fast) ease-(--ease-out) hover:text-foreground"
        >
          <ArrowLeftIcon aria-hidden="true" className="size-4" />
          {t('back')}
        </Link>

        <header className={cn(TWO_COL, 'mt-8 gap-y-3')}>
          <p className="pt-3 text-label text-muted-foreground uppercase">{project.kind[locale]}</p>
          <div className="flex max-w-[68ch] flex-col gap-4">
            <h1 className="text-headline">{project.name}</h1>
            <p className="text-body">{project.summary[locale]}</p>
            <p className="text-label uppercase">
              <span className="text-muted-foreground">{tWork('statusLabel')} · </span>
              {project.status[locale]}
            </p>
          </div>
        </header>

        {project.media.length > 0 && (
          <section aria-labelledby="media-title" className="mt-10 lg:mt-14">
            <h2 id="media-title" className="sr-only">
              {t('media')}
            </h2>
            <MediaCarousel slides={project.media} locale={locale} projectName={project.name} priority />
          </section>
        )}

        <div className="mt-12 border-b border-border lg:mt-16">
          {cs && (
            <>
              <Block id="problem" title={t('problem')}>
                <p className="text-body">{cs.problem[locale]}</p>
              </Block>
              <Block id="role" title={t('role')}>
                <p className="text-body">{cs.role[locale]}</p>
              </Block>
              <Block id="decisions" title={t('decisions')}>
                <ul className="flex flex-col gap-3">
                  {cs.decisions[locale].map((d) => (
                    <li
                      key={d}
                      className="relative pl-6 text-body before:absolute before:left-0 before:text-muted-foreground before:content-['—']"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              </Block>
              <Block id="outcome" title={t('outcome')}>
                <p className="text-body">{cs.outcome[locale]}</p>
              </Block>
            </>
          )}
          <Block id="stack" title={t('stack')}>
            <StackChips stack={project.stack} />
          </Block>
          {project.links.length > 0 && (
            <Block id="links" title={t('links')}>
              <ul className="flex flex-col">
                {project.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="-my-1 inline-flex min-h-11 max-w-full items-center gap-2 text-body [overflow-wrap:anywhere] underline decoration-line-strong underline-offset-4 transition-colors duration-(--dur-fast) ease-(--ease-out) hover:decoration-current"
                    >
                      {link.label[locale]} · {link.href.replace(/^https:\/\//, '')}
                      <span className="sr-only"> ({tContact('external')})</span>
                      <ArrowUpRightIcon aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
                    </a>
                  </li>
                ))}
              </ul>
            </Block>
          )}
        </div>

        <nav aria-labelledby="next-title" className={cn(TWO_COL, 'gap-y-3 pt-12 lg:pt-16')}>
          <h2 id="next-title" className="pt-3 text-label text-muted-foreground uppercase">
            {t('next')}
          </h2>
          <Link
            href={`/work/${next.slug}`}
            className="group inline-flex min-h-11 w-fit items-center gap-4 text-headline underline decoration-line-strong decoration-1 underline-offset-[0.15em] transition-colors duration-(--dur-fast) ease-(--ease-out) hover:decoration-current"
          >
            {next.name}
            <ArrowRightIcon aria-hidden="true" className="size-6 shrink-0 text-muted-foreground" />
          </Link>
        </nav>
      </Container>
    </article>
  )
}
