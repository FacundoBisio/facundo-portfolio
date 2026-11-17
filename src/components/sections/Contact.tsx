import { useTranslations } from 'next-intl'
import { ArrowUpRightIcon } from 'lucide-react'

import { SITE } from '@/content/site'
import { buttonVariants } from '@/components/ui/button'
import { CvLink } from '@/components/layout/CvLink'
import { cn } from '@/lib/utils'
import { Section, SectionHeader, TWO_COL } from './Section'

const display = (url: string) => url.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, '')

export function Contact() {
  const t = useTranslations('contact')
  const rows = [
    { key: 'phone', href: `tel:${SITE.phone.replace(/[^+\d]/g, '')}`, text: SITE.phone, external: false },
    { key: 'linkedin', href: SITE.linkedin, text: display(SITE.linkedin), external: true },
    { key: 'github', href: SITE.github, text: display(SITE.github), external: true },
  ] as const

  return (
    <Section id="contact">
      <SectionHeader id="contact" label={t('label')} title={t('title')} intro={t('body')} />

      <div className={cn(TWO_COL, 'mt-10 lg:mt-14')}>
        <div className="flex min-w-0 flex-col gap-10 min-[900px]:col-start-2">
          <a
            href={`mailto:${SITE.email}`}
            className="flex min-h-11 w-fit max-w-full items-center font-display text-[clamp(1.5rem,6vw,3.25rem)] leading-tight [overflow-wrap:anywhere] underline decoration-line-strong decoration-1 underline-offset-[0.15em] transition-colors duration-(--dur-fast) ease-(--ease-out) hover:decoration-primary"
          >
            <span className="sr-only">{t('email')}: </span>
            {SITE.email}
          </a>

          <dl className="border-b border-border">
            {rows.map((row) => (
              <div
                key={row.key}
                className="grid grid-cols-[6rem_minmax(0,1fr)] items-center gap-x-6 border-t border-border sm:grid-cols-[8rem_minmax(0,1fr)]"
              >
                <dt className="text-label text-muted-foreground uppercase">{t(row.key)}</dt>
                <dd className="min-w-0">
                  <a
                    href={row.href}
                    {...(row.external && { target: '_blank', rel: 'noopener noreferrer' })}
                    className="inline-flex min-h-12 max-w-full items-center gap-2 text-body [overflow-wrap:anywhere] transition-colors duration-(--dur-fast) ease-(--ease-out) hover:text-muted-foreground"
                  >
                    {row.text}
                    {row.external && (
                      <>
                        <span className="sr-only"> ({t('external')})</span>
                        <ArrowUpRightIcon aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
                      </>
                    )}
                  </a>
                </dd>
              </div>
            ))}
          </dl>

          <CvLink className={cn(buttonVariants({ variant: 'default' }), 'w-fit')}>{t('cv')}</CvLink>
        </div>
      </div>
    </Section>
  )
}
