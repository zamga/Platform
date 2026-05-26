import { RouteLink } from "./RouteLink"
import { DemoForm } from "./DemoForm"
import { Disclosure } from "./Disclosure"

const COLUMNS: { heading: string; links: { to: string; label: string }[] }[] = [
  {
    heading: "Capabilities",
    links: [
      { to: "capabilities", label: "Overview" },
      { to: "ma-advisory", label: "M&A Advisory" },
      { to: "capital-solutions", label: "Capital Solutions" },
      { to: "private-capital", label: "Private Capital" },
      { to: "restructuring", label: "Restructuring" },
      { to: "board-advisory", label: "Board Advisory" },
      { to: "special-situations", label: "Special Situations" },
    ],
  },
  {
    heading: "Transactions",
    links: [
      { to: "transactions", label: "Selected Engagements" },
      { to: "transaction-founder-liquidity", label: "Founder Liquidity" },
      { to: "transaction-capital-raise", label: "Capital Raise" },
      { to: "transaction-cross-border", label: "Cross-Border Sale" },
    ],
  },
  {
    heading: "Intelligence",
    links: [
      { to: "intelligence", label: "Overview" },
      { to: "research", label: "Research" },
      { to: "films", label: "Films" },
      { to: "briefings", label: "Briefings" },
      { to: "subscribe", label: "Subscribe" },
      { to: "pressroom", label: "Pressroom" },
    ],
  },
  {
    heading: "Firm",
    links: [
      { to: "firm", label: "About BERGWEISS" },
      { to: "people", label: "People" },
      { to: "careers", label: "Careers" },
      { to: "offices", label: "Offices" },
      { to: "client-access", label: "Client Access" },
      { to: "gate", label: "Gate" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="site-footer band-ink">
      <Disclosure />
      <div className="container-premium footer-grid">
        <div>
          <p className="brand">BERGWEISS</p>
          <p className="prose">
            Independent corporate finance and private capital advisory for owners, boards and investors handling
            consequential decisions.
          </p>
          <DemoForm className="subscribe-form">
            <label className="kicker" htmlFor="footer-subscribe">
              Insight subscription
            </label>
            <div className="subscribe-row">
              <input id="footer-subscribe" placeholder="Email address" type="email" />
              <button className="button accent interactive" type="submit">
                Subscribe
              </button>
            </div>
            <p className="micro">Private market notes, films and selected research updates.</p>
          </DemoForm>
        </div>
        {COLUMNS.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <p className="kicker">{col.heading}</p>
            <ul className="footer-links">
              {col.links.map((l) => (
                <li key={l.to}>
                  <RouteLink to={l.to}>{l.label}</RouteLink>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="container-premium footer-bottom">
        <p className="micro">
          BERGWEISS website content is for informational purposes only and does not constitute investment, legal or tax
          advice. Confidential information should not be submitted through the website until requested.
        </p>
        <div className="footer-bottom-links micro">
          <RouteLink to="client-access">Client Access</RouteLink>
          <RouteLink to="privacy">Privacy</RouteLink>
          <RouteLink to="terms">Terms</RouteLink>
        </div>
      </div>
    </footer>
  )
}
