import { useEffect } from "react"
import { BRAND } from "./content/site"
import { useHashRoute } from "./router/useHashRoute"
import { usePrefersReducedMotion } from "./effects/usePrefersReducedMotion"
import { useScrollProgress } from "./effects/useScrollProgress"
import { useRevealOnScroll } from "./effects/useRevealOnScroll"
import { useSmoothScroll } from "./effects/useSmoothScroll"
import { Nav } from "./components/Nav"
import { Footer } from "./components/Footer"
import { HomePage } from "./pages/HomePage"
import { LegalPage } from "./pages/LegalPage"

export default function App() {
  const route = useHashRoute()
  const reduced = usePrefersReducedMotion()
  const isHome = route === ""

  const scrollToTop = useSmoothScroll(reduced)
  useScrollProgress()
  useRevealOnScroll(route, reduced)

  // Reset scroll + document title on route change.
  useEffect(() => {
    scrollToTop()
    document.title = isHome
      ? `${BRAND.name} — ${BRAND.tagline}`
      : `Legal & Disclosures — ${BRAND.name}`
  }, [route, isHome, scrollToTop])

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="progress" aria-hidden="true" />
      <Nav isHome={isHome} />
      <main id="main" tabIndex={-1}>
        {isHome ? <HomePage reducedMotion={reduced} /> : <LegalPage />}
      </main>
      <Footer />
    </>
  )
}
