import { cn } from '@/lib/utils'
import { Reveal } from '@/components/motion/Reveal'

/** The one content column: 1200px max, 20 / 32 / 40px gutters (DESIGN.md › Layout). */
export function Container({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('mx-auto w-full max-w-[1200px] px-5 sm:px-8 lg:px-10', className)} {...props} />
}

/** Narrow facts column beside a wide content column, from 900px; one column below. */
export const TWO_COL = 'grid gap-x-12 min-[900px]:grid-cols-[12rem_minmax(0,1fr)]'

/** Home section: anchor id, hairline above, 64px / 96px vertical space. */
export function Section({
  id,
  className,
  children,
}: {
  id: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn('border-t border-border py-16 lg:py-24', className)}>
      <Container>
        <Reveal>{children}</Reveal>
      </Container>
    </section>
  )
}

/** Mono section name in the facts column, the headline and intro in the wide one. */
export function SectionHeader({
  id,
  label,
  title,
  intro,
}: {
  id: string
  label: string
  title: string
  intro?: string
}) {
  return (
    <header className={cn(TWO_COL, 'gap-y-4')}>
      <p className="pt-2 text-label text-muted-foreground uppercase">{label}</p>
      <div className="flex max-w-[68ch] flex-col gap-4">
        <h2 id={`${id}-title`} className="text-headline">
          {title}
        </h2>
        {intro && <p className="text-body">{intro}</p>}
      </div>
    </header>
  )
}
