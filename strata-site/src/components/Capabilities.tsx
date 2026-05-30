import { CAPABILITIES, type Capability } from "../content/site"
import { ArrowRight } from "./Icons"

function CapabilityCard({ cap, index }: { cap: Capability; index: number }) {
  return (
    <article className="cap-card reveal" data-delay={(index % 4) as 0 | 1 | 2 | 3}>
      <span className="cap-border" aria-hidden="true" />
      <header className="cap-head">
        <span className="cap-index num">{cap.index}</span>
        <h3 className="h3 cap-title">{cap.title}</h3>
      </header>
      <p className="prose cap-summary">{cap.summary}</p>
      <ul className="cap-points">
        {cap.points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <a href="#contact" className="link-arrow cap-link">
        Discuss a mandate <ArrowRight />
      </a>
    </article>
  )
}

export function Capabilities() {
  return (
    <section id="capabilities" className="section band-ink capabilities">
      <div className="container">
        <div className="section-head">
          <p className="kicker reveal">Capabilities</p>
          <h2 className="h2 reveal" data-delay="1">
            Five disciplines, one accountable partner.
          </h2>
        </div>
        <div className="cap-grid">
          {CAPABILITIES.map((cap, i) => (
            <CapabilityCard key={cap.id} cap={cap} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
