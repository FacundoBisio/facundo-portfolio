import { useTranslations } from 'next-intl'
import type { Messages } from '@/i18n/messages/en'
import { ProcessProgress } from '@/components/motion/ProcessProgress'
import { Section } from './Section'

const pad = (n: number) => String(n).padStart(2, '0')

/** Five numbered steps on one vertical line; the heading column stays in view on desktop. */
export function Process() {
  const t = useTranslations('process')
  const steps = t.raw('steps') as Messages['process']['steps']

  return (
    <Section id="process">
      <div className="grid gap-12 min-[900px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] min-[900px]:gap-16">
        <header className="flex flex-col gap-4 min-[900px]:sticky min-[900px]:top-28 min-[900px]:self-start">
          <p className="text-label text-muted-foreground uppercase">{t('label')}</p>
          <h2 id="process-title" className="text-headline">
            {t('title')}
          </h2>
          <p className="max-w-[48ch] text-body">{t('intro')}</p>
        </header>

        <ProcessProgress className="relative">
          {/* The line the steps hang from. ProcessProgress fills it with scroll. */}
          <div
            aria-hidden="true"
            data-process-line
            className="absolute top-0 bottom-0 left-[1.375rem] w-px bg-line-strong"
          />
          <ol className="relative z-[2] flex flex-col gap-12">
            {steps.map((step, i) => (
              <li key={step.title} className="group grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-6">
                <span
                  aria-hidden="true"
                  className="flex size-11 items-center justify-center border border-line-strong bg-background text-label text-muted-foreground group-data-active:border-foreground group-data-active:text-foreground"
                >
                  {pad(i + 1)}
                </span>
                <div className="flex flex-col gap-2 pt-2">
                  <h3 className="text-title">{step.title}</h3>
                  <p className="max-w-[60ch] text-body">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </ProcessProgress>
      </div>
    </Section>
  )
}
