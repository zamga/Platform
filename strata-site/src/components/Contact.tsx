import { useState, type FormEvent } from "react"
import { BRAND, CONTACT } from "../content/site"
import { ArrowRight } from "./Icons"

export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Demonstration only — no network request is made.
    setSent(true)
  }

  return (
    <section id="contact" className="section band-night contact">
      <div className="container grid contact-grid">
        <div className="contact-copy">
          <p className="kicker reveal">{CONTACT.kicker}</p>
          <h2 className="h2 reveal" data-delay="1">
            {CONTACT.title}
          </h2>
          <p className="prose reveal" data-delay="2">
            {CONTACT.body}
          </p>
          <a className="link-arrow contact-email reveal" data-delay="3" href={`mailto:${BRAND.email}`}>
            {BRAND.email} <ArrowRight />
          </a>
        </div>

        <div className="contact-form-wrap reveal" data-delay="1">
          {sent ? (
            <div className="contact-success" role="status">
              <h3 className="h3">{CONTACT.fields.successTitle}</h3>
              <p className="prose">{CONTACT.fields.successBody}</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <label className="field">
                <span>Name</span>
                <input type="text" name="name" autoComplete="name" required />
              </label>
              <label className="field">
                <span>Organisation</span>
                <input type="text" name="org" autoComplete="organization" />
              </label>
              <label className="field">
                <span>Work email</span>
                <input type="email" name="email" autoComplete="email" required />
              </label>
              <label className="field">
                <span>Situation type</span>
                <select name="type" defaultValue="">
                  <option value="" disabled>
                    Select…
                  </option>
                  <option>M&amp;A advisory</option>
                  <option>Capital solutions</option>
                  <option>Private capital</option>
                  <option>Restructuring / special situations</option>
                  <option>Board / strategic advisory</option>
                </select>
              </label>
              <label className="field field--full">
                <span>The situation, in confidence</span>
                <textarea name="note" rows={4} placeholder="Context and timing — no documents, please." />
              </label>
              <button type="submit" className="btn btn--accent contact-submit">
                Send enquiry <ArrowRight />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
