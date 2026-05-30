import { useEffect } from "react"

/**
 * Adds `.is-in` to `.reveal` elements (and `.line-in` to `.line-reveal`
 * containers) as they enter the viewport. Re-scans when `key` changes so
 * freshly mounted route content animates. Honors reduced-motion by revealing
 * everything immediately.
 */
export function useRevealOnScroll(key: string, reducedMotion: boolean) {
  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal, .line-reveal"))
    if (reducedMotion) {
      reveals.forEach((el) => {
        el.classList.add(el.classList.contains("line-reveal") ? "line-in" : "is-in")
      })
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement
            el.classList.add(el.classList.contains("line-reveal") ? "line-in" : "is-in")
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    )
    reveals.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [key, reducedMotion])
}
