import { useCallback, useEffect, useRef } from "react"
import Lenis from "lenis"

/**
 * Inertia smooth-scrolling via Lenis. Lenis drives native scroll position, so
 * existing scroll listeners (progress bar, reveal-on-scroll) keep working.
 * Disabled under reduced-motion. Returns a ref so callers can jump to top on
 * route change without fighting the smoothing.
 */
export function useSmoothScroll(reducedMotion: boolean) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    if (reducedMotion) return
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true })
    lenisRef.current = lenis
    let raf = 0
    const loop = (t: number) => {
      lenis.raf(t)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [reducedMotion])

  return useCallback(() => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [])
}
