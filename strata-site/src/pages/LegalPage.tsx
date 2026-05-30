import { LEGAL } from "../content/site"
import { ArrowRight } from "../components/Icons"

export function LegalPage() {
  return (
    <section className="section band-paper legal">
      <div className="container legal-inner">
        <p className="kicker reveal">Legal</p>
        <h1 className="h1 reveal" data-delay="1">
          {LEGAL.title}
        </h1>
        <p className="lede reveal" data-delay="2">
          {LEGAL.intro}
        </p>
        <div className="legal-sections">
          {LEGAL.sections.map((s) => (
            <article className="legal-section reveal" key={s.heading}>
              <h2 className="h3">{s.heading}</h2>
              <p className="prose">{s.body}</p>
            </article>
          ))}
        </div>
        <a href="#/" className="link-arrow legal-back">
          Back to site <ArrowRight />
        </a>
      </div>
    </section>
  )
}
