import { Subhero } from "../components/Subhero"
import { ContentImage } from "../components/ContentImage"
import { DemoForm } from "../components/DemoForm"

export default function ClientAccessPage() {
  return (
    <>
      <Subhero
        kicker="Client access"
        title="Private access"
        prose="A public website can signal institutional readiness while keeping private work private. Client access should feel serious, minimal and controlled."
        media={
          <div className="photo-frame banner">
            <ContentImage img="clientAccess" eager />
          </div>
        }
      />
      <section className="band-paper section-connected">
        <div className="container-premium grid-premium two-column">
          <div className="reveal">
            <p className="kicker ink">Access model</p>
            <p className="prose ink">
              Client login, document exchange and confidential material handling should sit behind secure systems, not
              inside the public marketing surface.
            </p>
          </div>
          <DemoForm className="subscribe-panel reveal">
            <p className="kicker ink">Client login</p>
            <h3 className="ink">Protected environment</h3>
            <div className="subscribe-row">
              <input placeholder="Client ID" type="text" aria-label="Client ID" />
              <button className="button accent interactive" type="submit">
                Continue
              </button>
            </div>
            <p className="micro ink-muted">Demonstration only. No credentials are stored.</p>
          </DemoForm>
        </div>
      </section>
    </>
  )
}
