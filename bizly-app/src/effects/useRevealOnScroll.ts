import { useEffect } from "react"

/**
 * Toggles `.is-in` on `.reveal` elements as they enter the viewport.
 * Re-runs whenever `key` changes (i.e. on route change) so freshly
 * mounted page content animates in. Honors reduced-motion by revealing
 * everything immediately.
 */
export function useRevealOnScroll(key: string, reducedMotion: boolean) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"))
    if (reducedMotion) {
      els.forEach((el) => el.classList.add("is-in"))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in")
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [key, reducedMotion])
}
