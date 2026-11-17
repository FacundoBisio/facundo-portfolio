import { useTranslations } from 'next-intl'
import { ArrowRightIcon } from 'lucide-react'

import { Link } from '@/i18n/navigation'
import type { Locale, Project } from '@/content/types'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { MediaCarousel } from '@/components/media/MediaCarousel'
import { Spotlight } from '@/components/motion/Spotlight'
import { cn } from '@/lib/utils'

/** Stack names as static chips. */
export function StackChips({ stack, className }: { stack: string[]; className?: string }) {
  return (
    <ul className={cn('flex flex-wrap gap-2', className)}>
      {stack.map((name) => (
        <li key={name}>
          <Badge>{name}</Badge>
        </li>
      ))}
    </ul>
  )
}

/** A featured project as a card: its media carousel on one side, the facts and the case-study link on the other. */
export function ProjectRow({ project, locale, index }: { project: Project; locale: Locale; index: number }) {
  const t = useTranslations('work')

  return (
    <Spotlight className="grid gap-6 rounded-3xl border border-border bg-card p-4 shadow-[0_24px_60px_-40px_rgb(0_0_0/0.6)] transition-[border-color] duration-(--dur-slow) hover:border-line-strong sm:p-6 min-[900px]:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] min-[900px]:gap-10 lg:p-8">
      <div className="min-w-0">
        <MediaCarousel slides={project.media} locale={locale} projectName={project.name} />
      </div>

      <div className="flex flex-col gap-5 min-[900px]:py-2">
        <div className="flex items-baseline justify-between gap-4">
          <p className="text-label text-muted-foreground uppercase">{project.kind[locale]}</p>
          <span aria-hidden="true" className="font-mono text-xs text-muted-foreground">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <h3 className="text-headline">{project.name}</h3>
        <p className="max-w-[60ch] text-body text-muted-foreground">{project.summary[locale]}</p>
        <p className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-3 py-1 text-label">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-brand-2" />
          <span className="sr-only">{t('statusLabel')}: </span>
          {project.status[locale]}
        </p>
        <div className="flex flex-col gap-2">
          <p className="text-label text-muted-foreground uppercase">{t('stackLabel')}</p>
          <StackChips stack={project.stack} />
        </div>
        <Link href={`/work/${project.slug}`} className={cn(buttonVariants({ variant: 'outline' }), 'mt-auto w-fit')}>
          {t('viewCase')}
          <span className="sr-only">: {project.name}</span>
          <ArrowRightIcon aria-hidden="true" />
        </Link>
      </div>
    </Spotlight>
  )
}
