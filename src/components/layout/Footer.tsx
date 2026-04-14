import { SITE } from '@/lib/site'

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '0.5px solid var(--line)',
        padding: '1.8rem 1.25rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '0.4rem',
        fontFamily: 'var(--mono)',
        fontSize: 11,
        color: 'var(--muted)',
      }}
    >
      <span>
        © {new Date().getFullYear()} {SITE.name} · {SITE.location}
      </span>
      <span>Disponible para trabajo remoto worldwide</span>
    </footer>
  )
}
