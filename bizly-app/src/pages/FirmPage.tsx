import { Subhero } from "../components/Subhero"
import { ContentImage } from "../components/ContentImage"

export default function FirmPage() {
  return (
    <>
      <Subhero
        kicker="Our firm"
        title="Institutional calm"
        prose="BERGWEISS is positioned as an independent corporate finance and private capital advisory house. Public content should make the institution legible: its areas of judgment, its perspectives and how clients access it."
        media={
          <div className="photo-frame banner">
            <ContentImage img="firmInterior" eager />
          </div>
        }
      />
      <section className="band-paper section-connected">
        <div className="container-premium grid-premium two-column">
          <div className="reveal">
            <p className="kicker ink">Positioning</p>
            <h2 className="h2 ink">A smaller institution with sharper authorship.</h2>
            <p className="prose ink">
              The public presentation takes cues from the clarity of global firms while preserving a more authored
              editorial system, a more private tone and a deliberate avoidance of unsupported claims.
            </p>
          </div>
          <div className="reveal">
            <div className="photo-frame">
              <ContentImage img="documents" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
