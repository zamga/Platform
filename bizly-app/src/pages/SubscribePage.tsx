import { Subhero } from "../components/Subhero"
import { ContentImage } from "../components/ContentImage"
import { DemoForm } from "../components/DemoForm"

export default function SubscribePage() {
  return (
    <>
      <Subhero
        kicker="Subscription"
        title="Stay close"
        prose="Subscribe to selected BERGWEISS insights, films and briefings. Like top-tier firms, the goal is sustained relevance, not email volume."
        media={
          <div className="photo-frame banner">
            <ContentImage img="eventAtrium" eager />
          </div>
        }
      />
      <section className="band-paper section-connected">
        <div className="container-premium grid-premium two-column">
          <div className="reveal">
            <p className="kicker ink">What you receive</p>
            <ul className="ledger-list ink-list">
              <li>Selected research and market notes</li>
              <li>Film briefings and conversations</li>
              <li>Institutional perspectives on capital, M&A and strategic situations</li>
            </ul>
          </div>
          <div className="subscribe-panel reveal">
            <p className="kicker ink">Insight subscription</p>
            <h2 className="h2 ink">Receive selected updates.</h2>
            <DemoForm className="subscribe-form">
              <div className="subscribe-row">
                <input placeholder="Work email" type="email" aria-label="Work email" />
                <button className="button accent interactive" type="submit">
                  Subscribe
                </button>
              </div>
            </DemoForm>
          </div>
        </div>
      </section>
    </>
  )
}
