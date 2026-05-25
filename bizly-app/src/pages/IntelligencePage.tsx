import { Subhero } from "../components/Subhero"
import { ContentImage } from "../components/ContentImage"
import { MemoCard, FilmCard } from "../components/cards"
import { INSIGHTS, FILMS } from "../content/data"

export default function IntelligencePage() {
  return (
    <>
      <Subhero
        kicker="Intelligence"
        title="Research and briefings"
        prose="Top-tier firms use public content to demonstrate perspective, not to teach process. BERGWEISS groups research, film briefings, market notes and subscriptions into a clear institutional content system."
        media={
          <div className="photo-frame banner">
            <ContentImage img="newsroom" eager />
          </div>
        }
      />
      <section className="band-paper section-connected">
        <div className="container-premium grid-premium insights-grid">
          <div className="insights-left reveal">
            <p className="kicker ink">Content hubs</p>
            <h2 className="h2 ink">Research, films, briefings and subscription.</h2>
            <p className="prose ink">
              Each module has a role: research explains, films humanize perspective, briefings condense market signals,
              and subscription turns occasional visits into a durable relationship.
            </p>
          </div>
          <div className="insights-right">
            {INSIGHTS.map((i) => (
              <MemoCard key={i.title} insight={i} />
            ))}
          </div>
        </div>
      </section>
      <section className="band-ink section-connected">
        <div className="container-premium films-grid">
          {FILMS.map((f) => (
            <FilmCard key={f.title} film={f} />
          ))}
        </div>
      </section>
    </>
  )
}
