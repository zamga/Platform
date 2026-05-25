import { useEffect } from "react"
import { useHashRoute } from "./router/useHashRoute"
import { routeForSlug } from "./content/routes"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { SpatialCanvas } from "./components/SpatialCanvas"
import { SoundToggle } from "./components/SoundToggle"
import { SeoHead } from "./components/SeoHead"
import { usePrefersReducedMotion } from "./effects/usePrefersReducedMotion"
import { useScrollProgress } from "./effects/useScrollProgress"
import { useRevealOnScroll } from "./effects/useRevealOnScroll"

export default function App() {
  const { slug } = useHashRoute()
  const route = routeForSlug(slug)
  const reduced = usePrefersReducedMotion()

  useScrollProgress()
  useRevealOnScroll(slug, reduced)

  // Scroll to top + brief route-transition motion on navigation.
  useEffect(() => {
    window.scrollTo(0, 0)
    if (reduced) return
    document.body.classList.add("soty-route-transition")
    const t = window.setTimeout(() => document.body.classList.remove("soty-route-transition"), 260)
    return () => window.clearTimeout(t)
  }, [slug, reduced])

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SpatialCanvas group={route.group} reducedMotion={reduced} />
      <div className="progress" aria-hidden="true" />
      <Navbar slug={slug} />
      <main id="main" tabIndex={-1}>
        <SeoHead title={route.title} description={route.description} />
        {route.element}
      </main>
      <Footer />
      <SoundToggle />
    </>
  )
}
