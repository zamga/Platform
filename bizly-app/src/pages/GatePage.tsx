import { Subhero } from "../components/Subhero"
import { ContentImage } from "../components/ContentImage"
import { DemoForm } from "../components/DemoForm"

export default function GatePage() {
  return (
    <>
      <Subhero
        kicker="Client gate"
        title="Send context"
        prose="Do not send confidential documents. Send the situation, the timing and what must remain private."
        media={
          <div className="photo-frame banner">
            <ContentImage img="documents" eager />
          </div>
        }
      />
      <section className="band-paper section-connected">
        <div className="container-premium grid-premium two-column">
          <div className="reveal">
            <p className="kicker ink">Confidential intake</p>
            <p className="prose ink">
              The gate collects high-level context only. If there is fit, a private follow-up channel should be opened
              separately.
            </p>
          </div>
          <DemoForm className="gate-form reveal">
            <label>
              <span>Name</span>
              <input placeholder="Name" required type="text" />
            </label>
            <label>
              <span>Email</span>
              <input placeholder="Email" required type="email" />
            </label>
            <label>
              <span>Role / Company</span>
              <input placeholder="Role / Company" type="text" />
            </label>
            <label>
              <span>Situation type</span>
              <select defaultValue="M&A Advisory">
                <option>M&A Advisory</option>
                <option>Capital Solutions</option>
                <option>Private Capital</option>
                <option>Restructuring</option>
                <option>Board Advisory</option>
                <option>Special Situations</option>
              </select>
            </label>
            <label>
              <span>Geography</span>
              <input placeholder="Geography" type="text" />
            </label>
            <label>
              <span>What must remain private?</span>
              <textarea placeholder="Context only. No confidential documents." rows={6} />
            </label>
            <button className="button accent interactive" type="submit">
              Open confidential review
            </button>
            <p className="micro ink-muted">Demonstration form. No data leaves the local file.</p>
          </DemoForm>
        </div>
      </section>
    </>
  )
}
