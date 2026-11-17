import type { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

// Next adds `noindex` to every 404; the layout sets no robots tag, so this one stands alone.
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'notFound' })
  return { title: t('title') }
}

export default function NotFound() {
  const t = useTranslations('notFound')
  return (
    <div className="mx-auto max-w-3xl px-4 py-24">
      <h1 className="font-display text-4xl">{t('title')}</h1>
      <p className="mt-6">
        <Link href="/" className="inline-flex min-h-11 items-center underline underline-offset-4">
          {t('back')}
        </Link>
      </p>
    </div>
  )
}
