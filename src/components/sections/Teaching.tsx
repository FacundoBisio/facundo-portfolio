import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Section, SectionHeader, TWO_COL } from './Section'

// TODO: new portrait. public/images/yoiconico.jpg was dropped: it carries a photographer watermark.
export function Teaching() {
  const t = useTranslations('teaching')

  return (
    <Section id="teaching">
      <SectionHeader id="teaching" label={t('label')} title={t('title')} />
      <div className={cn(TWO_COL, 'mt-6')}>
        <p className="max-w-[64ch] text-body min-[900px]:col-start-2">{t('body')}</p>
      </div>
    </Section>
  )
}
