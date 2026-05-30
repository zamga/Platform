import { APPROACH } from "../content/site"

export function Approach() {
  return (
    <section id="approach" className="section band-paper approach">
      <div className="container grid approach-grid">
        <div className="approach-aside">
          <div className="approach-sticky">
            <p className="kicker reveal">{APPROACH.kicker}</p>
            <h2 className="h2 reveal" data-delay="1">
              {APPROACH.title}
            </h2>
            <p className="prose reveal" data-delay="2">
              A deliberate sequence keeps judgment ahead of momentum — so the decision is yours,
              made on the full picture, before the market decides for you.
            </p>
          </div>
        </div>
        <ol className="approach-steps">
          {APPROACH.steps.map((step) => (
            <li className="approach-step reveal" key={step.index}>
              <span className="approach-index num">{step.index}</span>
              <div className="approach-step-body">
                <h3 className="h3">{step.title}</h3>
                <p className="prose">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
