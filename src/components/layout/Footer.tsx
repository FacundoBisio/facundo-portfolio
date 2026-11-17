import { useTranslations } from 'next-intl'
import { ArrowUpIcon } from 'lucide-react'
import { Container } from '@/components/sections/Section'

export function Footer() {
  const t = useTranslations('footer')
  const tHero = useTranslations('hero')

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-6">
        <p className="text-label text-muted-foreground uppercase">
          {tHero('name')} · {t('location')}
        </p>
        <a
          href="#top"
          className="-mx-2 inline-flex min-h-11 items-center gap-2 px-2 text-label text-muted-foreground uppercase transition-colors duration-(--dur-fast) ease-(--ease-out) hover:text-foreground"
        >
          {t('backToTop')}
          <ArrowUpIcon aria-hidden="true" className="size-4" />
        </a>
      </Container>
    </footer>
  )
}
