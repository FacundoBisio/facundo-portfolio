import { ImageResponse } from 'next/og'

export const size        = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0B0B12',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 40,
          position: 'relative',
        }}
      >
        {/* Subtle indigo glow top-left */}
        <div style={{
          position: 'absolute',
          top: -20, left: -20,
          width: 140, height: 140,
          background: 'radial-gradient(circle, rgba(198, 242, 78,0.14) 0%, transparent 70%)',
          borderRadius: '50%',
          display: 'flex',
        }} />

        {/* Geometric F lettermark — scaled to 180px canvas */}
        <div style={{ position: 'relative', display: 'flex', width: 90, height: 95 }}>
          {/* Vertical stem */}
          <div style={{
            position: 'absolute', left: 0, top: 0,
            width: 17, height: 95,
            background: '#7C6CFF', borderRadius: 5,
          }} />
          {/* Top arm */}
          <div style={{
            position: 'absolute', left: 0, top: 0,
            width: 84, height: 17,
            background: '#7C6CFF', borderRadius: 5,
          }} />
          {/* Middle arm */}
          <div style={{
            position: 'absolute', left: 0, top: 39,
            width: 62, height: 17,
            background: '#7C6CFF', borderRadius: 5,
          }} />
        </div>

        {/* Accent dot bottom-right */}
        <div style={{
          position: 'absolute', right: 32, bottom: 32,
          width: 14, height: 14,
          background: '#7C6CFF',
          borderRadius: '50%',
          opacity: 0.5,
          display: 'flex',
        }} />
      </div>
    ),
    { ...size }
  )
}
