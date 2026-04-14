import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={cn('flex items-center gap-4 mb-10', className)}
      style={{
        fontFamily: 'var(--mono)',
        fontSize: '10.5px',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--muted)',
      }}
    >
      {children}
      <span
        style={{
          flex: 1,
          height: '0.5px',
          background: 'var(--line2)',
          display: 'block',
        }}
      />
    </div>
  )
}
