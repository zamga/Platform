import { Subhero } from "../components/Subhero"
import { FILM_POSTER, VIDEOS } from "../content/images"
import { MemoArticle } from "../components/cards"
import { INSIGHTS } from "../content/data"

export default function ResearchPage() {
  return (
    <>
      <Subhero
        kicker="Research"
        title="Selected research"
        prose="Company, sector, capital and corridor observations for private decisions."
        media={
          <div className="photo-frame banner">
            <video controls poster={FILM_POSTER} preload="none">
              <source src={VIDEOS.filmMarketOutlook} type="video/mp4" />
            </video>
          </div>
        }
      />
      <section className="band-paper section-connected">
        <div className="container-premium memo-list">
          {INSIGHTS.map((i) => (
            <MemoArticle key={i.title} insight={i} />
          ))}
        </div>
      </section>
    </>
  )
}
