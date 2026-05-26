const ITEMS: { idx: string; heading: string; body: string }[] = [
  {
    idx: "01",
    heading: "No Offer or Solicitation",
    body: "Nothing on this website constitutes an offer to sell, or a solicitation of an offer to buy, any security, instrument or interest, nor advice in any jurisdiction where such an offer or solicitation would be unlawful.",
  },
  {
    idx: "02",
    heading: "Not Investment Advice",
    body: "Content is provided for general informational purposes only and does not constitute investment, legal, accounting or tax advice. It is not tailored to the objectives or circumstances of any recipient.",
  },
  {
    idx: "03",
    heading: "Securities & Broker-Dealer",
    body: "Securities-related services, where offered, are conducted through duly registered or licensed affiliates. Member FINRA / SIPC. Advisory services are subject to applicable SEC and local regulatory requirements.",
  },
  {
    idx: "04",
    heading: "Forward-Looking Statements",
    body: "Certain statements reflect current views on future events and involve known and unknown risks and uncertainties. Actual results may differ materially. No obligation is assumed to update any forward-looking statement.",
  },
  {
    idx: "05",
    heading: "Confidential Information",
    body: "No confidential or privileged information should be transmitted through this website until expressly requested. Unsolicited submissions create no advisory, fiduciary or other relationship with the firm.",
  },
  {
    idx: "06",
    heading: "Jurisdiction & Eligibility",
    body: "Information is directed only at persons in jurisdictions where its publication and access are lawful. Products and services described may not be available to, or suitable for, all clients in all locations.",
  },
]

/** FINRA / SEC-style regulatory disclosures presented as first-class editorial
 *  typography rather than buried legal text. */
export function Disclosure() {
  return (
    <section className="disclosure container-premium" aria-label="Regulatory and important information">
      <div className="disclosure-head">
        <p className="kicker">Regulatory &amp; Important Information</p>
        <p className="disclosure-lead">Clarity is part of the advice. The full footing of every engagement, in plain type.</p>
      </div>
      <div className="disclosure-grid">
        {ITEMS.map((it) => (
          <div className="disclosure-item" key={it.idx}>
            <span className="idx">{it.idx}</span>
            <h3>{it.heading}</h3>
            <p>{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
