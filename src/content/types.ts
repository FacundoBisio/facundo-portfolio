// Shared content contracts. Changes go through PLAN.md.

export type Locale = 'en' | 'es'

export type Localized<T = string> = Record<Locale, T>

export type MediaType = 'video' | 'image' | 'diagram'

export interface MediaSlide {
  type: MediaType
  /** MP4 for video, WebP/AVIF/SVG otherwise. Undefined = not recorded yet: the placeholder renders. */
  src?: string
  /** WebM alternative, video only. */
  webm?: string
  /** Poster image, video only. */
  poster?: string
  alt: Localized
  caption: Localized
}

export interface ProjectLink {
  label: Localized
  href: string
}

export interface CaseStudy {
  problem: Localized
  role: Localized
  decisions: Localized<string[]>
  outcome: Localized
}

export interface Project {
  slug: string
  name: string
  /** Featured projects get a case-study page and a media carousel. */
  featured: boolean
  /** Short line under the name, e.g. "Client · subscription". */
  kind: Localized
  summary: Localized
  stack: string[]
  status: Localized
  links: ProjectLink[]
  caseStudy?: CaseStudy
  media: MediaSlide[]
}
