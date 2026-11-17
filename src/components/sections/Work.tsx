import { useLocale, useTranslations } from 'next-intl'
import { ArrowUpRightIcon } from 'lucide-react'

import { projects } from '@/content/projects'
import type { Locale } from '@/content/types'
import { ProjectRow } from '@/components/work/ProjectRow'
import { Reveal } from '@/components/motion/Reveal'
import { Section, SectionHeader, TWO_COL } from './Section'
import { cn } from '@/lib/utils'

export function Work() {
  const t = useTranslations('work')
  const tContact = useTranslations('contact')
  const locale = useLocale() as Locale
  const featured = projects.filter((p) => p.featured)
  const more = projects.filter((p) => !p.featured)

  return (
    <Section id="work">
      <SectionHeader id="work" label={t('label')} title={t('title')} intro={t('intro')} />

      <ol className="mt-8 divide-y divide-border lg:mt-12">
        {featured.map((project, i) => (
          <li key={project.slug}>
            <Reveal>
              <ProjectRow project={project} locale={locale} flip={i % 2 === 1} />
            </Reveal>
          </li>
        ))}
      </ol>

      <div className={cn(TWO_COL, 'gap-y-6 border-t border-border pt-12 lg:pt-16')}>
        <h3 className="pt-1 text-label text-muted-foreground uppercase">{t('moreTitle')}</h3>
        <ul className="divide-y divide-border border-y border-border">
          {more.map((project) => {
            const link = project.links[0]
            return (
              <li key={project.slug} className="grid gap-x-8 gap-y-2 py-6 sm:grid-cols-[minmax(0,1fr)_auto]">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h4 className="text-body font-semibold">{project.name}</h4>
                    <p className="text-label text-muted-foreground uppercase">{project.kind[locale]}</p>
                  </div>
                  <p className="max-w-[64ch] text-body">{project.summary[locale]}</p>
                  <p className="text-label text-muted-foreground">
                    {project.stack.join(' · ')}
                    <span aria-hidden="true"> — </span>
                    <span className="sr-only">. </span>
                    {project.status[locale]}
                  </p>
                </div>
                {link && (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/visit -my-1 inline-flex min-h-11 items-center gap-2 self-start text-label text-muted-foreground uppercase transition-colors duration-(--dur-fast) ease-(--ease-out) hover:text-foreground"
                  >
                    {t('visit')}
                    <span className="sr-only">
                      : {project.name} ({tContact('external')})
                    </span>
                    {/* Feedback: the arrow steps toward where the link goes. */}
                    <ArrowUpRightIcon
                      aria-hidden="true"
                      className="size-4 transition-transform duration-(--dur-fast) ease-(--ease-out) motion-safe:group-hover/visit:translate-x-0.5 motion-safe:group-hover/visit:-translate-y-0.5 motion-safe:group-focus-visible/visit:translate-x-0.5 motion-safe:group-focus-visible/visit:-translate-y-0.5"
                    />
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
