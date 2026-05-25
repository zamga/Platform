import { Subhero } from "../components/Subhero"
import { ContentImage } from "../components/ContentImage"
import { ServiceTile } from "../components/cards"
import { SERVICES } from "../content/data"

export default function CapabilitiesPage() {
  return (
    <>
      <Subhero
        kicker="Capabilities"
        title="Advisory capabilities"
        prose="An institutional capability overview should feel clear, selective and connected. BERGWEISS groups its advice into services clients already recognize from top-tier firms."
        media={
          <div className="photo-frame banner">
            <ContentImage img="advisoryOffice" eager />
          </div>
        }
      />
      <section className="band-paper section-connected">
        <div className="container-premium service-tiles">
          {SERVICES.map((s) => (
            <ServiceTile key={s.slug} service={s} />
          ))}
        </div>
      </section>
    </>
  )
}
