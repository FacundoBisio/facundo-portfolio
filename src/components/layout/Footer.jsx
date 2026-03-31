export default function Footer() {
  return (
    <footer style={{
      borderTop: '0.5px solid var(--line)',
      padding: '2rem 2.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '0.5rem',
      fontFamily: 'var(--mono)',
      fontSize: 12,
      color: 'var(--muted)',
    }}>
      <span>© {new Date().getFullYear()} Facundo Bisio · Córdoba, Argentina</span>
      <span>Disponible para trabajo remoto worldwide 🌎</span>
    </footer>
  )
}
