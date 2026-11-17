import Image from 'next/image'
import { useLocale } from 'next-intl'

import { Link } from '@/i18n/navigation'
import { featuredProjects } from '@/content/projects'
import type { Locale } from '@/content/types'

/** An endless strip of each project's home page. Pauses on hover; static and scrollable under reduced motion. */
export function ProjectMarquee() {
  const locale = useLocale() as Locale
  const once = featuredProjects.flatMap((p) => {
    const slide = p.media.find((m) => m.type === 'image' && m.src)
    return slide?.src ? [{ project: p, src: slide.src, alt: slide.alt[locale] }] : []
  })
  // Each half must be wider than a wide screen, or the loop shows an empty gap before it wraps.
  const items = [...once, ...once]

  // The second copy only makes the loop seamless, so it is hidden from assistive tech and the tab order.
  const copy = (hidden: boolean) =>
    items.map(({ project, src, alt }, i) => {
      // Only the first run of the first half is exposed; the repeats are decoration.
      const repeat = hidden || i >= once.length
      return (
        <li key={`${project.slug}-${hidden}-${i}`} aria-hidden={repeat || undefined} className="shrink-0 pr-4">
          <Link
            href={`/work/${project.slug}`}
            tabIndex={repeat ? -1 : undefined}
            className="group/item relative block w-[300px] overflow-hidden rounded-2xl border border-border bg-card sm:w-[380px]"
          >
            <span className="block aspect-[1280/592] overflow-hidden">
              <Image
                src={src}
                alt={repeat ? '' : alt}
                width={380}
                height={176}
                className="size-full object-cover transition-transform duration-700 ease-(--ease-out) group-hover/item:scale-105"
              />
            </span>
            <span className="flex items-center justify-between px-4 py-3 text-label uppercase">
              {project.name}
              <span
                aria-hidden="true"
                className="text-muted-foreground transition-transform duration-(--dur-base) group-hover/item:translate-x-1"
              >
                →
              </span>
            </span>
          </Link>
        </li>
      )
    })

  return (
    <div className="marquee relative overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <ul className="marquee-track flex w-max">
        {copy(false)}
        {copy(true)}
      </ul>
    </div>
  )
}
