import { Subhero } from "../components/Subhero"
import { ContentImage } from "../components/ContentImage"
import { SituationCard } from "../components/cards"
import { SITUATIONS } from "../content/data"

export default function TransactionsPage() {
  return (
    <>
      <Subhero
        kicker="Transactions"
        title="Selected engagements"
        prose="Public transaction pages should inform without manufacturing prestige. BERGWEISS presents representative situations to show judgment, not decorative tombstones."
        media={
          <div className="photo-frame banner">
            <ContentImage img="transactionRoom" eager />
          </div>
        }
      />
      <section className="band-paper section-connected">
        <div className="container-premium situations-grid">
          {SITUATIONS.map((s) => (
            <SituationCard key={s.slug} s={s} />
          ))}
        </div>
      </section>
    </>
  )
}
