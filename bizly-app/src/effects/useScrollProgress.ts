import { useEffect } from "react"

/** Drives the fixed `.progress` reading bar at the top of the viewport. */
export function useScrollProgress() {
  useEffect(() => {
    const bar = document.querySelector<HTMLElement>(".progress")
    if (!bar) return
    let raf = 0
    const update = () => {
      raf = 0
      const h = document.documentElement.scrollHeight - window.innerHeight
      bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%"
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])
}
