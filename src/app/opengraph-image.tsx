import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt    = 'Facundo Bisio — Full-Stack Developer'
export const size   = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0C0C0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Amber radial glow */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            left: -100,
            width: 560,
            height: 420,
            background:
              'radial-gradient(circle at center, rgba(212,145,58,0.22) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Subtle grid lines — horizontal */}
        {[160, 290, 420, 550].map((y) => (
          <div
            key={y}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: y,
              height: '0.5px',
              background: 'rgba(240,237,230,0.05)',
            }}
          />
        ))}
        {/* Subtle grid lines — vertical */}
        {[240, 480, 720, 960].map((x) => (
          <div
            key={x}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: x,
              width: '0.5px',
              background: 'rgba(240,237,230,0.05)',
            }}
          />
        ))}

        {/* Top content */}
        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
          {/* Monospace label */}
          <div
            style={{
              fontSize: 13,
              color: '#D4913A',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: 44,
              fontFamily: "'Courier New', monospace",
            }}
          >
            fb.dev · Full-Stack Developer · Córdoba, AR
          </div>

          {/* Name — two lines */}
          <div
            style={{
              fontSize: 100,
              fontWeight: 800,
              color: '#F0EDE6',
              lineHeight: 1,
              letterSpacing: '-0.025em',
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            FACUNDO
          </div>
          <div
            style={{
              fontSize: 100,
              fontWeight: 800,
              color: '#D4913A',
              lineHeight: 1,
              letterSpacing: '-0.025em',
              marginBottom: 44,
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            BISIO
          </div>

          {/* Amber rule */}
          <div
            style={{
              width: 56,
              height: 2,
              background: '#D4913A',
              marginBottom: 28,
            }}
          />

          {/* Stack */}
          <div
            style={{
              fontSize: 18,
              color: '#8A8480',
              letterSpacing: '0.05em',
              fontFamily: "'Courier New', monospace",
            }}
          >
            React · Node.js · TypeScript · PostgreSQL · Next.js · LLMs
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          {/* Availability */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontSize: 15,
              color: '#8A8480',
              fontFamily: "'Courier New', monospace",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#D4913A',
              }}
            />
            Available for remote work worldwide
          </div>

          {/* GitHub */}
          <div
            style={{
              fontSize: 15,
              color: 'rgba(240,237,230,0.25)',
              fontFamily: "'Courier New', monospace",
              letterSpacing: '0.08em',
            }}
          >
            github.com/FacundoBisio
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
