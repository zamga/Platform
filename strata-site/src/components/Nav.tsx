import { useEffect, useState } from "react"
import { BRAND, NAV_LINKS } from "../content/site"
import { useActiveSection } from "../effects/useActiveSection"
import { Wordmark } from "./Icons"

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace("#", ""))

export function Nav({ isHome }: { isHome: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS, isHome)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close mobile menu on any navigation click
  const close = () => setMenuOpen(false)

  const brandHref = isHome ? "#top" : "#/"

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href={brandHref} className="brand" onClick={close} aria-label={`${BRAND.name} — home`}>
          <span className="brand-mark">
            <Wordmark />
          </span>
          <span className="brand-name">{BRAND.name}</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {isHome &&
            NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={active === l.href.replace("#", "") ? "is-active" : ""}
              >
                {l.label}
              </a>
            ))}
        </nav>

        <div className="nav-actions">
          <a href={isHome ? "#contact" : "#/"} className="btn btn--accent nav-cta">
            {isHome ? "Confidential enquiry" : "Back to site"}
          </a>
          <button
            className="nav-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`nav-panel ${menuOpen ? "open" : ""}`} onClick={close}>
        {isHome &&
          NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        <a href={isHome ? "#contact" : "#/"} className="nav-panel-cta">
          {isHome ? "Confidential enquiry" : "Back to site"}
        </a>
      </div>
    </header>
  )
}
