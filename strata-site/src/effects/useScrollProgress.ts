import { useEffect } from "react"

/** Drives the width of the fixed `.progress` bar from scroll position. */
export function useScrollProgress() {
  useEffect(() => {
    const bar = document.querySelector<HTMLElement>(".progress")
    if (!bar) return
    let raf = 0
    const update = () => {
      raf = 0
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      const pct = max > 0 ? (doc.scrollTop || window.scrollY) / max : 0
      bar.style.width = `${Math.min(1, Math.max(0, pct)) * 100}%`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
}
