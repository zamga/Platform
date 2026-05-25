import { Subhero } from "../components/Subhero"
import { HeroGlobe } from "../components/HeroGlobe"
import { OFFICES } from "../content/data"

export default function OfficesPage() {
  return (
    <>
      <Subhero
        kicker="Offices"
        title="Connected cities"
        prose="Offices and coverage should show where the firm thinks and where it works—not fabricate a global empire. BERGWEISS emphasizes connectivity across key cities and decision corridors."
      />
      <section className="band-paper section-connected">
        <div className="container-premium grid-premium">
          <div className="subhero-media">
            <HeroGlobe />
          </div>
        </div>
        <div className="container-premium city-table reveal">
          {OFFICES.map((o) => (
            <div key={o.city}>
              <p className="kicker ink">{o.city}</p>
              <p className="micro ink-muted">{o.micro}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
