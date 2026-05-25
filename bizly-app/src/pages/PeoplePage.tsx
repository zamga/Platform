import { Subhero } from "../components/Subhero"
import { ContentImage } from "../components/ContentImage"
import { ProfileCard } from "../components/cards"
import { PROFILES } from "../content/data"

export default function PeoplePage() {
  return (
    <>
      <Subhero
        kicker="People"
        title="Senior attention"
        prose="Public people pages should feel institutional even when profiles are concise. The presentation emphasizes role, capability and perspective."
        media={
          <div className="photo-frame banner">
            <ContentImage img="peopleTeam" eager />
          </div>
        }
      />
      <section className="band-paper section-connected">
        <div className="container-premium people-grid">
          {PROFILES.map((p) => (
            <ProfileCard key={p.area} p={p} />
          ))}
        </div>
      </section>
    </>
  )
}
