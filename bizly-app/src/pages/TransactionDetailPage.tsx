import { Subhero } from "../components/Subhero"
import { ContentImage } from "../components/ContentImage"
import { SITUATIONS } from "../content/data"

export function TransactionDetailPage({ slug }: { slug: string }) {
  const s = SITUATIONS.find((x) => x.slug === slug)!
  return (
    <>
      <Subhero
        kicker="Representative engagement"
        title={s.title}
        prose={s.micro}
        media={
          <div className="photo-frame banner">
            <ContentImage img={s.image} eager />
          </div>
        }
      />
      <section className="band-paper section-connected">
        <div className="container-premium grid-premium two-column">
          <div className="reveal">
            <p className="kicker ink">Context</p>
            <h2 className="h2 ink">An anonymized engagement format.</h2>
            <p className="prose ink">
              We avoid fake values, logos or claims. Representative engagements explain strategic context, not a
              regulated transaction archive.
            </p>
          </div>
          <div className="reveal">
            <p className="kicker ink">Selected elements</p>
            <ul className="ledger-list ink-list">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
