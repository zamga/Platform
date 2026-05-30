import { INSIGHTS } from "../content/site"
import { ArrowRight } from "./Icons"

export function Insights() {
  return (
    <section id="insights" className="section band-ink insights">
      <div className="container">
        <div className="section-head">
          <p className="kicker reveal">{INSIGHTS.kicker}</p>
          <h2 className="h2 reveal" data-delay="1">
            {INSIGHTS.title}
          </h2>
        </div>
        <div className="insight-grid">
          {INSIGHTS.items.map((it, i) => (
            <a className="insight-card reveal" data-delay={(i % 3) as 0 | 1 | 2} key={it.title} href="#contact">
              <span className="insight-tag kicker">{it.tag}</span>
              <h3 className="h3 insight-title">{it.title}</h3>
              <p className="prose insight-micro">{it.micro}</p>
              <span className="link-arrow insight-link">
                Read note <ArrowRight />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
