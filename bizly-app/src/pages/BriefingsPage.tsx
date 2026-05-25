import { Subhero } from "../components/Subhero"
import { ContentImage } from "../components/ContentImage"
import { RouteLink } from "../components/RouteLink"
import { INSIGHTS } from "../content/data"

export default function BriefingsPage() {
  return (
    <>
      <Subhero
        kicker="Briefings"
        title="Market briefings"
        prose="Shorter observations and recurring notes designed for regular reading and subscription."
        media={
          <div className="photo-frame banner">
            <ContentImage img="researchArchive" eager />
          </div>
        }
      />
      <section className="band-paper section-connected">
        <div className="container-premium briefing-grid">
          {INSIGHTS.map((i) => (
            <article className="briefing-card reveal" key={i.title}>
              <p className="kicker ink">Briefing</p>
              <h3 className="ink">{i.title}</h3>
              <p className="micro ink-muted">{i.micro}</p>
              <RouteLink to="subscribe" className="button interactive">
                Request update
              </RouteLink>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
