import { useEffect, useState } from "react"

/** Clean slug for the home page. */
export const HOME = ""

/**
 * Normalize the raw location.hash into a clean slug.
 * Accepts both clean hashes (`#/capabilities`) and legacy ones
 * (`#capabilities.html`, `#index.html`) for deep-link back-compat.
 */
export function slugFromHash(hash: string): string {
  let raw = hash.replace(/^#/, "").replace(/^\//, "").trim()
  if (raw.endsWith(".html")) raw = raw.slice(0, -5)
  if (raw === "index" || raw === "home") raw = ""
  return raw
}

export function hashFromSlug(slug: string): string {
  return "#/" + slug
}

export function useHashRoute(): { slug: string; navigate: (slug: string) => void } {
  const [slug, setSlug] = useState<string>(() => slugFromHash(location.hash))

  useEffect(() => {
    const onChange = () => {
      const next = slugFromHash(location.hash)
      // Rewrite legacy / non-canonical hashes to the clean form without adding history.
      const canonical = hashFromSlug(next)
      if (location.hash !== canonical) {
        history.replaceState(null, "", canonical)
      }
      setSlug(next)
    }
    onChange()
    window.addEventListener("hashchange", onChange)
    return () => window.removeEventListener("hashchange", onChange)
  }, [])

  const navigate = (next: string) => {
    location.hash = hashFromSlug(next)
  }

  return { slug, navigate }
}
