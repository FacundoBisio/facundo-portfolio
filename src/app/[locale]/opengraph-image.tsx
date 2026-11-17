import { ImageResponse } from 'next/og'
import en from '@/i18n/messages/en'
import es from '@/i18n/messages/es'
import { SITE } from '@/content/site'

const size = { width: 1200, height: 630 }
const messagesFor = (locale: string) => (locale === 'es' ? es : en)

// Per-locale metadata so og:image:alt and twitter:image:alt follow the page language.
export async function generateImageMetadata({ params }: { params: { locale: string } }) {
  return [{ id: 'card', alt: messagesFor(params.locale).meta.ogAlt, size, contentType: 'image/png' }]
}

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const m = messagesFor(locale)

  // Satori cannot read CSS variables: these literals mirror the tokens in globals.css.
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#0B0B12',
          color: '#EDEDF5',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 24, color: '#7C6CFF', letterSpacing: '0.12em' }}>
          {m.hero.role.toUpperCase()}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 104, fontWeight: 700, lineHeight: 1 }}>{SITE.name}</div>
          <div style={{ display: 'flex', marginTop: 32, fontSize: 40, color: '#9A9AB0' }}>
            {m.hero.statement}
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 24, color: '#9A9AB0' }}>{m.hero.location}</div>
      </div>
    ),
    { ...size },
  )
}
