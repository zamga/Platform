import { FIRM } from "../content/site"

export function Firm() {
  return (
    <section id="firm" className="section band-paper firm">
      <div className="container firm-grid">
        <div className="firm-copy">
          <p className="kicker reveal">{FIRM.kicker}</p>
          <h2 className="h2 reveal" data-delay="1">
            {FIRM.title}
          </h2>
          <p className="prose reveal" data-delay="2">
            {FIRM.body}
          </p>
        </div>
        <div className="firm-pillars">
          {FIRM.pillars.map((p, i) => (
            <article className="firm-pillar reveal" data-delay={(i % 3) as 0 | 1 | 2} key={p.title}>
              <h3 className="h3 firm-pillar-title">{p.title}</h3>
              <p className="prose firm-pillar-body">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
