import { useTranslations } from 'next-intl'
import type { Messages } from '@/i18n/messages/en'
import { cn } from '@/lib/utils'
import { Section, SectionHeader, TWO_COL } from './Section'

type Row = Messages['experience']['items'][number]

function Rows({ rows }: { rows: Row[] }) {
  return (
    <ol className="border-b border-border">
      {rows.map((row) => (
        <li key={`${row.period}-${row.org}`} className={cn(TWO_COL, 'gap-y-1 border-t border-border py-4')}>
          <p className="pt-1 text-label text-muted-foreground uppercase">{row.period}</p>
          <p className="text-body">
            <span className="font-semibold">{row.role}</span>
            <span className="text-muted-foreground"> · {row.org}</span>
          </p>
        </li>
      ))}
    </ol>
  )
}

/** Compact timeline rows; education and languages in the same row style. */
export function Experience() {
  const t = useTranslations('experience')
  const items = t.raw('items') as Messages['experience']['items']
  const education = t.raw('education') as Messages['experience']['education']

  return (
    <Section id="experience">
      <SectionHeader id="experience" label={t('label')} title={t('title')} />
      <div className="mt-10 lg:mt-14">
        <Rows rows={items} />
      </div>

      <h3 className="mt-12 text-label text-muted-foreground uppercase">{t('educationTitle')}</h3>
      <div className="mt-4">
        <Rows rows={education} />
      </div>

      <div className={cn(TWO_COL, 'mt-12 gap-y-1 border-y border-border py-4')}>
        <h3 className="pt-1 text-label text-muted-foreground uppercase">{t('languagesTitle')}</h3>
        <p className="text-body">{t('languages')}</p>
      </div>
    </Section>
  )
}
