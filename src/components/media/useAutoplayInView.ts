'use client'

import { useCallback, useEffect, useState, useSyncExternalStore, type RefObject } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(QUERY)
  mql.addEventListener('change', onChange)
  return () => mql.removeEventListener('change', onChange)
}

export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    // No autoplay until the client knows the preference.
    () => true,
  )
}

/**
 * Plays the video only while its slide is the active one and at least half of it is on screen.
 * Under reduced motion nothing starts on its own; `toggle` lets the visitor play or pause.
 */
export function useAutoplayInView(ref: RefObject<HTMLVideoElement | null>, active: boolean) {
  const reduced = usePrefersReducedMotion()
  // null = follow the default (autoplay unless reduced motion); boolean = the visitor chose.
  const [choice, setChoice] = useState<boolean | null>(null)
  const [inView, setInView] = useState(false)
  const [playing, setPlaying] = useState(false)

  const wantsPlay = choice ?? !reduced

  useEffect(() => {
    const video = ref.current
    if (!video) return
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.5,
    })
    observer.observe(video)
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    video.addEventListener('play', onPlay)
    video.addEventListener('pause', onPause)
    return () => {
      observer.disconnect()
      video.removeEventListener('play', onPlay)
      video.removeEventListener('pause', onPause)
    }
  }, [ref])

  useEffect(() => {
    const video = ref.current
    if (!video) return
    if (wantsPlay && active && inView) {
      // Rejected when the browser blocks playback; the play button stays available.
      video.play().catch(() => setPlaying(false))
    } else {
      video.pause()
    }
  }, [ref, wantsPlay, active, inView])

  const toggle = useCallback(() => {
    const video = ref.current
    if (!video) return
    if (video.paused) {
      setChoice(true)
      video.play().catch(() => setPlaying(false))
    } else {
      setChoice(false)
      video.pause()
    }
  }, [ref])

  return { playing, toggle }
}
