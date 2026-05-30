import { BRAND, FOOTER } from "../content/site"
import { Wordmark } from "./Icons"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer band-ink">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="brand-mark">
            <Wordmark />
          </span>
          <span className="brand-name">{BRAND.name}</span>
          <p className="micro footer-blurb">{FOOTER.blurb}</p>
        </div>
        {FOOTER.columns.map((col) => (
          <nav className="footer-col" key={col.heading} aria-label={col.heading}>
            <h2 className="micro footer-heading">{col.heading}</h2>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="container footer-bottom">
        <p className="micro">
          © {year} {BRAND.name}. {BRAND.tagline}.
        </p>
        <p className="micro footer-disclaimer">{FOOTER.disclaimer}</p>
      </div>
    </footer>
  )
}
