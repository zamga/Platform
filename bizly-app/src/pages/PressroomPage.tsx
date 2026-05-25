import { Subhero } from "../components/Subhero"
import { ContentImage } from "../components/ContentImage"

const ITEMS = [
  {
    kicker: "Firm update",
    title: "BERGWEISS launches new intelligence subscription",
    micro: "A new public content format for research notes, film briefings and selected market commentary.",
  },
  {
    kicker: "Commentary",
    title: "Why leading firms publish perspective instead of process",
    micro: "Top-tier institutional sites use content to demonstrate judgment, not to expose their internal mechanics.",
  },
]

export default function PressroomPage() {
  return (
    <>
      <Subhero
        kicker="Pressroom"
        title="News and commentary"
        prose="Public institutions also present news, updates and selected commentary. BERGWEISS keeps this layer selective."
        media={
          <div className="photo-frame banner">
            <ContentImage img="newsroom" eager />
          </div>
        }
      />
      <section className="band-paper section-connected">
        <div className="container-premium memo-list">
          {ITEMS.map((i) => (
            <article className="memo-article reveal" key={i.title}>
              <p className="kicker ink">{i.kicker}</p>
              <h3 className="ink">{i.title}</h3>
              <p className="micro ink-muted">{i.micro}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
