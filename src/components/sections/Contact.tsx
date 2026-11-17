import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ArrowUpRightIcon, MailIcon } from 'lucide-react'

import { SITE } from '@/content/site'
import { buttonVariants } from '@/components/ui/button'
import { CvLink } from '@/components/layout/CvLink'
import { Spotlight } from '@/components/motion/Spotlight'
import { cn } from '@/lib/utils'
import { Section } from './Section'

const display = (url: string) => url.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, '')

/** One card: photo and pitch, the email as the main action, the other channels as pills. */
export function Contact() {
  const t = useTranslations('contact')
  const rows = [
    { key: 'phone', href: `tel:${SITE.phone.replace(/[^+\d]/g, '')}`, text: SITE.phone, external: false },
    { key: 'linkedin', href: SITE.linkedin, text: display(SITE.linkedin), external: true },
    { key: 'github', href: SITE.github, text: display(SITE.github), external: true },
  ] as const

  return (
    <Section id="contact">
      <div className="rounded-[2rem] p-px [background:linear-gradient(140deg,var(--brand),var(--border)_35%,var(--border)_65%,var(--brand-2))]">
        <Spotlight className="flex flex-col items-center gap-8 rounded-[calc(2rem-1px)] bg-card px-5 py-12 text-center sm:px-10 lg:py-16">
          <div className="flex flex-col items-center gap-5">
            <Image
              src="/images/facundo.webp"
              alt={t('photoAlt')}
              width={88}
              height={88}
              className="size-20 rounded-full object-cover ring-2 ring-brand ring-offset-4 ring-offset-card"
            />
            <p className="text-label text-muted-foreground uppercase">{t('label')}</p>
            <h2 id="contact-title" className="text-display">
              {t('title')}
            </h2>
            <p className="max-w-[52ch] text-body text-muted-foreground">{t('body')}</p>
          </div>

          <a
            href={`mailto:${SITE.email}`}
            className={cn(buttonVariants({ variant: 'default', size: 'lg' }), 'h-auto min-h-12 max-w-full py-3 normal-case [overflow-wrap:anywhere] whitespace-normal')}
          >
            <MailIcon aria-hidden="true" />
            <span className="sr-only">{t('email')}: </span>
            <span className="text-base tracking-normal">{SITE.email}</span>
          </a>

          <ul className="flex flex-wrap justify-center gap-2">
            {rows.map((row) => (
              <li key={row.key}>
                <a
                  href={row.href}
                  {...(row.external && { target: '_blank', rel: 'noopener noreferrer' })}
                  className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'normal-case')}
                >
                  <span className="text-muted-foreground uppercase">{t(row.key)}</span>
                  <span className="tracking-normal">{row.text}</span>
                  {row.external && (
                    <>
                      <span className="sr-only"> ({t('external')})</span>
                      <ArrowUpRightIcon aria-hidden="true" />
                    </>
                  )}
                </a>
              </li>
            ))}
            <li>
              <CvLink className={buttonVariants({ variant: 'outline', size: 'sm' })}>{t('cv')}</CvLink>
            </li>
          </ul>
        </Spotlight>
      </div>
    </Section>
  )
}
