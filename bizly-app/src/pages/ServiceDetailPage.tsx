import { Subhero } from "../components/Subhero"
import { ContentImage } from "../components/ContentImage"
import { RouteLink } from "../components/RouteLink"
import { SERVICES } from "../content/data"

export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = SERVICES.find((s) => s.slug === slug)!
  return (
    <>
      <Subhero
        kicker={service.tileKicker}
        title={service.title}
        prose={service.tileMicro}
        media={
          <div className="photo-frame banner">
            <ContentImage img={service.image} eager />
          </div>
        }
      />

      <section className="band-paper section-connected">
        <div className="container-premium grid-premium two-column">
          <div className="reveal">
            <p className="kicker ink">Overview</p>
            <h2 className="h2 ink">A capability presented with institutional clarity.</h2>
            <p className="prose ink">{service.overviewProse}</p>
          </div>
          <div className="highlight-card reveal">
            <p className="kicker ink">Selected view</p>
            <p className="prose ink">{service.selectedView}</p>
          </div>
        </div>
      </section>

      <section className="band-ink section-connected">
        <div className="container-premium grid-premium">
          <div className="ledger-col reveal">
            <p className="kicker">Where it applies</p>
            <ul className="ledger-list">
              {service.whereItApplies.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="ledger-col reveal">
            <p className="kicker">What we focus on</p>
            <ul className="ledger-list">
              {service.whatWeFocusOn.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="band-paper section-connected">
        <div className="container-premium grid-premium">
          <div className="related-copy reveal">
            <p className="kicker ink">Related intelligence</p>
            <h2 className="h2 ink">Perspective, not public process.</h2>
            <p className="prose ink">
              Leading firms publish market-facing insights, not internal playbooks. BERGWEISS uses research, film
              briefings and market notes to surface judgment without turning the site into a procedural manual.
            </p>
          </div>
          <div className="stacked-actions reveal">
            <RouteLink to="intelligence" className="button accent interactive">
              Open intelligence
            </RouteLink>
            <RouteLink to="gate" className="button interactive">
              Open confidential gate
            </RouteLink>
          </div>
        </div>
      </section>
    </>
  )
}
