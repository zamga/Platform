import { Subhero } from "../components/Subhero"
import { ContentImage } from "../components/ContentImage"
import { RouteLink } from "../components/RouteLink"

export default function CareersPage() {
  return (
    <>
      <Subhero
        kicker="Careers"
        title="Join the firm"
        prose="Like top-tier institutions, BERGWEISS should treat careers as part of the public story: standards, exposure and the kind of work people enter to do."
        media={
          <div className="photo-frame banner">
            <ContentImage img="careers" eager />
          </div>
        }
      />
      <section className="band-paper section-connected">
        <div className="container-premium grid-premium two-column">
          <div className="reveal">
            <p className="kicker ink">Work at BERGWEISS</p>
            <ul className="ledger-list ink-list">
              <li>Exposure to strategic situations, capital structures and private transactions</li>
              <li>Editorial discipline in research and communication</li>
              <li>Small-team responsibility and direct senior access</li>
            </ul>
          </div>
          <div className="reveal">
            <RouteLink to="gate" className="button accent interactive">
              Introduce yourself
            </RouteLink>
          </div>
        </div>
      </section>
    </>
  )
}
