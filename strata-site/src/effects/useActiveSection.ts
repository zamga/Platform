import { useEffect, useState } from "react"

/**
 * Returns the id of the section currently dominating the viewport, for
 * highlighting the active nav link. `ids` are element ids (without `#`).
 */
export function useActiveSection(ids: string[], enabled: boolean): string {
  const [active, setActive] = useState("")

  useEffect(() => {
    // When disabled (off the home page) the nav links are not rendered, so we
    // simply skip observing; the stale value is never read.
    if (!enabled) return
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (els.length === 0) return

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids, enabled])

  return active
}
