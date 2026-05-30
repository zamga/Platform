import { useEffect, useState } from "react"

/**
 * Minimal hash router. Only path-style hashes (`#/legal`) are treated as
 * routes; in-page anchors (`#contact`) are ignored here and handled by smooth
 * scroll. Returns the current route slug ("" for home).
 */
function readRoute(): string {
  const h = window.location.hash
  if (h.startsWith("#/")) return h.slice(2)
  return ""
}

export function useHashRoute(): string {
  const [route, setRoute] = useState<string>(() =>
    typeof window === "undefined" ? "" : readRoute(),
  )

  useEffect(() => {
    const onHash = () => setRoute(readRoute())
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])

  return route
}
