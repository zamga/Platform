import { useCallback, useEffect, useRef } from "react"
import Lenis from "lenis"

/**
 * Inertia smooth-scrolling via Lenis. Lenis drives native scroll position so
 * existing scroll listeners keep working. Disabled under reduced-motion.
 * Also wires anchor (`#id`) clicks to a smooth Lenis scroll. Returns a helper
 * to jump to top on route change.
 */
export function useSmoothScroll(reducedMotion: boolean) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    if (reducedMotion) return
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    lenisRef.current = lenis
    let raf = 0
    const loop = (t: number) => {
      lenis.raf(t)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a")
      if (!target) return
      const href = target.getAttribute("href")
      if (!href || !href.startsWith("#") || href.startsWith("#/")) return
      const id = href.slice(1)
      const el = document.getElementById(id)
      if (!el) return
      e.preventDefault()
      lenis.scrollTo(el, { offset: -76, duration: 1.2 })
      history.replaceState(null, "", href)
    }
    document.addEventListener("click", onClick)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener("click", onClick)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [reducedMotion])

  return useCallback(() => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [])
}
