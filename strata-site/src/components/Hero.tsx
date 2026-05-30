import { useEffect, useState } from "react"
import { HERO } from "../content/site"
import { ContourField } from "./ContourField"
import { ArrowDown, ArrowRight } from "./Icons"

export function Hero({ reducedMotion }: { reducedMotion: boolean }) {
  // Under reduced-motion the hero is revealed immediately (no animation).
  const [lineIn, setLineIn] = useState(reducedMotion)

  // Trigger the hero clip-reveal shortly after mount.
  useEffect(() => {
    if (reducedMotion) return
    const t = window.setTimeout(() => setLineIn(true), 120)
    return () => window.clearTimeout(t)
  }, [reducedMotion])

  return (
    <section id="top" className="hero band-night">
      <ContourField reducedMotion={reducedMotion} />
      <div className="container hero-inner">
        <p className={`kicker hero-kicker ${lineIn ? "is-in" : ""}`}>{HERO.kicker}</p>
        <h1 className={`display hero-title line-reveal ${lineIn ? "line-in" : ""}`}>
          {HERO.lines.map((line) => (
            <span className="line-mask" key={line}>
              <span>{line}</span>
            </span>
          ))}
        </h1>
        <p className={`lede hero-deck ${lineIn ? "is-in" : ""}`}>{HERO.deck}</p>
        <div className={`hero-cta ${lineIn ? "is-in" : ""}`}>
          <a href={HERO.ctaPrimary.href} className="btn btn--accent">
            {HERO.ctaPrimary.label}
            <ArrowRight />
          </a>
          <a href={HERO.ctaSecondary.href} className="btn">
            {HERO.ctaSecondary.label}
          </a>
        </div>
      </div>
      <a href="#approach" className={`hero-scroll ${lineIn ? "is-in" : ""}`} aria-label="Scroll to approach">
        <span>Scroll</span>
        <ArrowDown size={14} />
      </a>
    </section>
  )
}
