import { useEffect } from "react"
import { useHashRoute } from "./router/useHashRoute"
import { routeForSlug } from "./content/routes"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { SeoHead } from "./components/SeoHead"
import { usePrefersReducedMotion } from "./effects/usePrefersReducedMotion"
import { useScrollProgress } from "./effects/useScrollProgress"
import { useRevealOnScroll } from "./effects/useRevealOnScroll"
import { useSmoothScroll } from "./effects/useSmoothScroll"

export default function App() {
  const { slug } = useHashRoute()
  const route = routeForSlug(slug)
  const reduced = usePrefersReducedMotion()

  const scrollToTop = useSmoothScroll(reduced)
  useScrollProgress()
  useRevealOnScroll(slug, reduced)

  // Scroll to top + brief route-transition motion on navigation.
  useEffect(() => {
    scrollToTop()
    if (reduced) return
    document.body.classList.add("soty-route-transition")
    const t = window.setTimeout(() => document.body.classList.remove("soty-route-transition"), 240)
    return () => window.clearTimeout(t)
  }, [slug, reduced, scrollToTop])

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="progress" aria-hidden="true" />
      <div className="route-veil" aria-hidden="true" />
      <Navbar slug={slug} />
      <main id="main" tabIndex={-1}>
        <SeoHead title={route.title} description={route.description} />
        {route.element}
      </main>
      <Footer />
    </>
  )
}
