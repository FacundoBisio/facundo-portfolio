import { useTranslations } from 'next-intl'
import { ArrowRightIcon } from 'lucide-react'

import { Link } from '@/i18n/navigation'
import type { Locale, Project } from '@/content/types'
import { Badge } from '@/components/ui/badge'
import { MediaSlideView } from '@/components/media/MediaSlideView'
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

/** A featured project as a full-width row: media frame on one side, the facts on the other. */
export function ProjectRow({ project, locale, flip }: { project: Project; locale: Locale; flip: boolean }) {
  const t = useTranslations('work')
  const href = `/work/${project.slug}`
  // A key screen reads better in a row than the video placeholder the hero already shows.
  const slide = project.media.find((m) => m.type === 'image') ?? project.media[0]

  return (
    <article className="group/row grid items-center gap-8 py-12 min-[900px]:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] min-[900px]:gap-12 lg:py-16">
      {slide && (
        // Same destination as the text link below; kept out of the tab order to avoid a duplicate stop.
        // Feedback: hovering either link, or focusing the text one, nudges the frame so both read as one destination.
        <Link
          href={href}
          tabIndex={-1}
          aria-hidden="true"
          className={cn(
            'block transition-[transform,opacity] duration-(--dur-base) ease-(--ease-out) motion-safe:group-has-[a:hover]/row:scale-[1.01] motion-safe:group-has-[a:focus-visible]/row:scale-[1.01] motion-reduce:group-has-[a:hover]/row:opacity-85 motion-reduce:group-has-[a:focus-visible]/row:opacity-85',
            flip && 'min-[900px]:order-2',
          )}
        >
          <MediaSlideView slide={slide} locale={locale} active={false} />
        </Link>
      )}

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h3 className="text-title">{project.name}</h3>
          <p className="text-label text-muted-foreground uppercase">{project.kind[locale]}</p>
        </div>
        <p className="max-w-[60ch] text-body">{project.summary[locale]}</p>
        <dl className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <dt className="text-label text-muted-foreground uppercase">{t('statusLabel')}</dt>
            <dd className="text-body">{project.status[locale]}</dd>
          </div>
          <div className="flex flex-col gap-2">
            <dt className="text-label text-muted-foreground uppercase">{t('stackLabel')}</dt>
            <dd>
              <StackChips stack={project.stack} />
            </dd>
          </div>
        </dl>
        <Link
          href={href}
          className="-my-1 inline-flex min-h-11 w-fit items-center gap-2 text-label text-foreground uppercase underline decoration-line-strong underline-offset-4 transition-colors duration-(--dur-fast) ease-(--ease-out) hover:decoration-current"
        >
          {t('viewCase')}
          <span className="sr-only">: {project.name}</span>
          <ArrowRightIcon
            aria-hidden="true"
            className="size-4 transition-transform duration-(--dur-fast) ease-(--ease-out) motion-safe:group-has-[a:hover]/row:translate-x-1 motion-safe:group-has-[a:focus-visible]/row:translate-x-1"
          />
        </Link>
      </div>
    </article>
  )
}
