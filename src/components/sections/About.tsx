import { useTranslations } from 'next-intl'
import type { Messages } from '@/i18n/messages/en'
import { STACK } from '@/content/stack'
import { Section, SectionHeader } from './Section'

const GROUPS = ['frontend', 'backend', 'data', 'infra', 'ai'] as const

const CARD = 'rounded-3xl border border-border bg-card p-6 lg:p-8'

/** Experience, stack and teaching in one short section: three cards instead of three sections. */
export function About() {
  const t = useTranslations('about')
  const tExp = useTranslations('experience')
  const tStack = useTranslations('stack')
  const tTeach = useTranslations('teaching')
  const items = tExp.raw('items') as Messages['experience']['items']
  const education = tExp.raw('education') as Messages['experience']['education']

  return (
    <Section id="about">
      <SectionHeader id="about" label={t('label')} title={t('title')} />

      <div className="mt-10 grid gap-4 lg:mt-14 lg:grid-cols-2">
        <article className={`${CARD} lg:row-span-2`}>
          <h3 className="text-label text-muted-foreground uppercase">{tExp('label')}</h3>
          <ol className="mt-5 flex flex-col">
            {[...items, ...education].map((row) => (
              <li
                key={`${row.period}-${row.org}`}
                className="relative border-l border-border py-3 pl-5 before:absolute before:top-[1.15rem] before:-left-[4.5px] before:size-2 before:rounded-full before:bg-brand"
              >
                <p className="text-label text-muted-foreground uppercase">{row.period}</p>
                <p className="mt-1 text-body">
                  <span className="font-semibold">{row.role}</span>
                  <span className="text-muted-foreground"> · {row.org}</span>
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-body text-muted-foreground">
            <span className="text-label uppercase">{tExp('languagesTitle')}:</span> {tExp('languages')}
          </p>
        </article>

        <article className={CARD}>
          <h3 className="text-label text-muted-foreground uppercase">{tStack('label')}</h3>
          <dl className="mt-5 flex flex-col gap-4">
            {GROUPS.map((group) => (
              <div key={group}>
                <dt className="text-label text-muted-foreground uppercase">{tStack(`groups.${group}`)}</dt>
                <dd>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {STACK[group].map((name) => (
                      <li
                        key={name}
                        className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs transition-colors duration-(--dur-base) hover:border-brand hover:text-brand"
                      >
                        {name}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </article>

        <article className={CARD}>
          <h3 className="text-label text-muted-foreground uppercase">{tTeach('label')}</h3>
          <p className="mt-5 text-body">{tTeach('body')}</p>
        </article>
      </div>
    </Section>
  )
}
