import { useEffect, useRef, useState } from "react"
import { ENGAGEMENTS, METRICS, type Metric } from "../content/site"

function useCountUp(target: number, run: boolean, reduced: boolean, durationMs = 1400) {
  const [value, setValue] = useState(reduced ? target : 0)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!run || startedRef.current) return
    startedRef.current = true
    // Reduced-motion: value already initialised to target, nothing to animate.
    if (reduced) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs)
      const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
      setValue(target * eased)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, target, reduced, durationMs])

  return value
}

function MetricItem({ metric, run, reduced }: { metric: Metric; run: boolean; reduced: boolean }) {
  const v = useCountUp(metric.value, run, reduced)
  const display = metric.decimals ? v.toFixed(metric.decimals) : Math.round(v).toString()
  return (
    <div className="metric">
      <span className="metric-value num">
        {metric.prefix}
        {display}
        {metric.suffix}
      </span>
      <span className="metric-label micro">{metric.label}</span>
    </div>
  )
}

export function TrackRecord({ reducedMotion }: { reducedMotion: boolean }) {
  const [run, setRun] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRun(true)
          io.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="track-record" className="section band-night track">
      <div className="container">
        <div className="section-head">
          <p className="kicker reveal">{METRICS.kicker}</p>
          <h2 className="h2 reveal" data-delay="1">
            {METRICS.title}
          </h2>
          <p className="prose track-intro reveal" data-delay="2">
            {METRICS.intro}
          </p>
        </div>

        <div className="metrics" ref={ref}>
          {METRICS.metrics.map((m) => (
            <MetricItem key={m.label} metric={m} run={run} reduced={reducedMotion} />
          ))}
        </div>

        <div className="engagements">
          {ENGAGEMENTS.map((e) => (
            <article className="engagement reveal" key={e.title}>
              <span className="engagement-tag kicker">{e.tag}</span>
              <h3 className="h3 engagement-title">{e.title}</h3>
              <p className="prose engagement-detail">{e.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
