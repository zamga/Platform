import { useEffect, useRef, type CSSProperties } from "react"

interface Metric {
  label: string
  basis: string
  target: number
  suffix?: string
}

const METRICS: Metric[] = [
  { label: "Financial centres", basis: "Major capital corridors connected by advisory coverage.", target: 7 },
  { label: "Advisory disciplines", basis: "M&A, capital solutions, private capital, restructuring, board advisory and special situations.", target: 6 },
  { label: "Representative engagements", basis: "Anonymised situations published to show judgment, not decorative tombstones.", target: 3 },
  { label: "Senior point of contact", basis: "Every engagement carries senior attention from first conversation to close.", target: 1 },
]

const SCHEMA = [
  { kicker: "Independence", title: "No products to sell.", body: "No financing, no balance sheet — only advice. Incentives stay aligned with the decision in front of the client." },
  { kicker: "Discretion", title: "A gate, not a data room.", body: "A controlled intake replaces a public document exchange. Confidential material is requested only when there is fit." },
  { kicker: "Perspective", title: "Authored, not automated.", body: "Editorial research, films and market notes surface judgment instead of exposing an internal process manual." },
]

export function MetricsLedger({ reducedMotion }: { reducedMotion: boolean }) {
  const ledgerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ledger = ledgerRef.current
    if (!ledger) return
    const values = Array.from(ledger.querySelectorAll<HTMLElement>("[data-count-target]"))
    const setFinal = () =>
      values.forEach((el) => {
        const target = Number(el.dataset.countTarget || 0)
        el.textContent = target.toLocaleString("en-US") + (el.dataset.suffix || "")
      })
    if (reducedMotion) {
      ledger.classList.add("is-in")
      setFinal()
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          ledger.classList.add("is-in")
          const start = performance.now()
          const duration = 950
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration)
            const eased = 1 - Math.pow(1 - p, 4)
            values.forEach((el) => {
              const target = Number(el.dataset.countTarget || 0)
              el.textContent = Math.round(target * eased).toLocaleString("en-US") + (el.dataset.suffix || "")
            })
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          io.disconnect()
        })
      },
      { threshold: 0.28 },
    )
    io.observe(ledger)
    return () => io.disconnect()
  }, [reducedMotion])

  return (
    <section className="cms-guard-section">
      <div className="container-premium cms-guard-grid">
        <div className="cms-guard-copy reveal">
          <span className="cms-model-status">Built on judgment</span>
          <p className="kicker">How the firm works</p>
          <h2 className="h2">Clarity before capital.</h2>
          <p className="prose">
            BERGWEISS presents capabilities, perspective and access as one continuous system — measured, selective and
            authored, the way leading institutions present themselves in public.
          </p>
        </div>
        <div className="cms-ledger reveal" ref={ledgerRef}>
          {METRICS.map((m, i) => (
            <div className="cms-ledger-row" style={{ "--i": i } as CSSProperties} key={m.label}>
              <div className="cms-ledger-label">
                <p className="kicker">{m.label}</p>
                <p className="micro">{m.basis}</p>
              </div>
              <p className="cms-ledger-value" data-count-target={m.target} data-suffix={m.suffix ?? ""}>
                0{m.suffix ?? ""}
              </p>
            </div>
          ))}
        </div>
        <div className="cms-schema-panel">
          {SCHEMA.map((s) => (
            <article className="cms-schema-card reveal" key={s.kicker}>
              <p className="kicker">{s.kicker}</p>
              <h3>{s.title}</h3>
              <p className="micro">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
