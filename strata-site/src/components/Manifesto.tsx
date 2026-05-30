import { MANIFESTO } from "../content/site"

export function Manifesto() {
  return (
    <section className="section band-paper manifesto">
      <div className="container">
        <p className="kicker reveal">{MANIFESTO.kicker}</p>
        <p className="manifesto-body display-sans reveal" data-delay="1">
          {MANIFESTO.body}
        </p>
        <p className="manifesto-sig micro reveal" data-delay="2">
          {MANIFESTO.signature}
        </p>
      </div>
    </section>
  )
}
