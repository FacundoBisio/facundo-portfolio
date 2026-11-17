import { useTranslations } from 'next-intl'
import { STACK } from '@/content/stack'
import { cn } from '@/lib/utils'
import { Section, SectionHeader, TWO_COL } from './Section'

const GROUPS = ['frontend', 'backend', 'data', 'infra', 'ai'] as const

/** Five labelled rows of plain mono text. No bars, no levels. */
export function Stack() {
  const t = useTranslations('stack')

  return (
    <Section id="stack">
      <SectionHeader id="stack" label={t('label')} title={t('title')} intro={t('intro')} />
      <dl className="mt-10 border-b border-border lg:mt-14">
        {GROUPS.map((group) => (
          <div key={group} className={cn(TWO_COL, 'gap-y-1 border-t border-border py-4')}>
            <dt className="pt-1 text-label text-muted-foreground uppercase">{t(`groups.${group}`)}</dt>
            <dd>
              <ul className="flex flex-wrap gap-x-2 gap-y-1 font-mono text-sm leading-relaxed">
                {STACK[group].map((name, i) => (
                  <li key={name} className="flex gap-2">
                    {i > 0 && (
                      <span aria-hidden="true" className="text-muted-foreground">
                        ·
                      </span>
                    )}
                    {name}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
