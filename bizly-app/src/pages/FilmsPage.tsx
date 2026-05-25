import { Subhero } from "../components/Subhero"
import { HeroGlobe } from "../components/HeroGlobe"
import { FilmCard } from "../components/cards"
import { FILMS } from "../content/data"

export default function FilmsPage() {
  return (
    <>
      <Subhero
        kicker="Films"
        title="Briefing films"
        prose="Short films support public perspective the way leading institutions increasingly use video, podcasts and talks to extend insight distribution."
        media={<HeroGlobe />}
      />
      <section className="band-paper section-connected">
        <div className="container-premium films-grid">
          {FILMS.map((f) => (
            <FilmCard key={f.title} film={f} />
          ))}
        </div>
      </section>
    </>
  )
}
