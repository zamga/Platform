/* All site copy, typed. Original generic corporate-finance content. */

export const BRAND = {
  name: "STRATA",
  tagline: "Corporate Finance & Capital Advisory",
  email: "advisory@strata.example",
}

export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: "Approach", href: "#approach" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Track record", href: "#track-record" },
  { label: "Insights", href: "#insights" },
  { label: "Firm", href: "#firm" },
]

export const HERO = {
  kicker: "Independent · Discreet · Aligned",
  lines: ["Capital decisions", "deserve depth,", "not theatre."],
  deck: "STRATA is an independent corporate finance house advising owners, boards, founders and investors through the decisions that define a company's next decade.",
  ctaPrimary: { label: "Confidential enquiry", href: "#contact" },
  ctaSecondary: { label: "How we work", href: "#approach" },
}

export const MANIFESTO = {
  kicker: "Positioning",
  body: "Every balance sheet is built in layers — ownership, capital, obligation, ambition. We read those layers before the market does, and we frame the decision before momentum decides it for you.",
  signature: "Independent advice. Single accountable partner. No conflicts to manage.",
}

export interface Capability {
  id: string
  index: string
  title: string
  summary: string
  points: string[]
}

export const CAPABILITIES: Capability[] = [
  {
    id: "ma",
    index: "01",
    title: "M&A Advisory",
    summary:
      "Acquisitions, disposals and mergers framed before the market sees a process — where narrative control matters as much as price.",
    points: ["Owner-led sale & liquidity", "Unsolicited approaches", "Cross-border buyer mapping"],
  },
  {
    id: "capital",
    index: "02",
    title: "Capital Solutions",
    summary:
      "Debt, private credit, equity and hybrid capital structured around control, covenants and the flexibility your next decision will need.",
    points: ["Refinancing & maturity walls", "Growth capital", "Bank vs. private credit"],
  },
  {
    id: "private",
    index: "03",
    title: "Private Capital",
    summary:
      "Minority equity, family-office participation and patient structures for owners who value alignment and continuity over speed.",
    points: ["Minority & structured equity", "Owner recapitalisation", "Sponsor liquidity routes"],
  },
  {
    id: "special",
    index: "04",
    title: "Restructuring & Special Situations",
    summary:
      "Redesigning obligations, timing and stakeholder expectations before optionality disappears — and before the market names the situation for you.",
    points: ["Liquidity & covenant pressure", "Balance-sheet redesign", "Stakeholder negotiation"],
  },
  {
    id: "board",
    index: "05",
    title: "Board & Strategic Advisory",
    summary:
      "Board-level judgment for strategic alternatives, conflicts and ownership transitions, with a clean record of the decisions that matter.",
    points: ["Special committee support", "Strategic alternatives review", "Succession & transition"],
  },
]

export interface ApproachStep {
  index: string
  title: string
  body: string
}

export const APPROACH: { kicker: string; title: string; steps: ApproachStep[] } = {
  kicker: "How we work",
  title: "Four moves, in the right order.",
  steps: [
    {
      index: "01",
      title: "Diagnose",
      body: "We start with the situation as it truly is — ownership, liabilities, timing and the constraints no spreadsheet shows. Clarity before motion.",
    },
    {
      index: "02",
      title: "Frame",
      body: "We define the real set of alternatives and the consequence of each, so the decision is made on judgment rather than on the first offer to arrive.",
    },
    {
      index: "03",
      title: "Engage",
      body: "We design a disciplined, selective process — the right counterparties, a controlled information perimeter and tension created without noise.",
    },
    {
      index: "04",
      title: "Execute",
      body: "We carry the transaction to close with senior attention throughout, protecting value, confidentiality and the relationships that outlast the deal.",
    },
  ],
}

export interface Metric {
  value: number
  prefix?: string
  suffix?: string
  label: string
  decimals?: number
}

export const METRICS: { kicker: string; title: string; intro: string; metrics: Metric[] } = {
  kicker: "Track record",
  title: "Measured in outcomes, not announcements.",
  intro:
    "We publish the shape of our work rather than the names behind it. Discretion is the product; the numbers are illustrative of scale and focus.",
  metrics: [
    { value: 11.4, prefix: "€", suffix: "bn", label: "Capital advised", decimals: 1 },
    { value: 140, suffix: "+", label: "Engagements led" },
    { value: 9, label: "Sectors covered" },
    { value: 1, label: "Partner per mandate" },
  ],
}

export interface Engagement {
  tag: string
  title: string
  detail: string
}

export const ENGAGEMENTS: Engagement[] = [
  {
    tag: "Founder liquidity",
    title: "Minority liquidity without a public signal",
    detail:
      "A founder-led company secured partial liquidity from a single aligned investor while preserving control, employee confidence and customer trust.",
  },
  {
    tag: "Capital solutions",
    title: "Refinancing ahead of a maturity wall",
    detail:
      "Compared bank, private-credit and minority-equity routes under timing pressure, closing flexible capital with covenants that protected future optionality.",
  },
  {
    tag: "Cross-border M&A",
    title: "Selective sale across three jurisdictions",
    detail:
      "Built a wider buyer map by adjacency and urgency, separating strategic outreach from financial signalling to widen price tension confidentially.",
  },
]

export const SECTORS: { kicker: string; title: string; sectors: string[]; centres: string[] } = {
  kicker: "Coverage",
  title: "Sector depth, selective geography.",
  sectors: [
    "Technology & Software",
    "Industrials & Engineering",
    "Healthcare & Life Sciences",
    "Consumer & Brands",
    "Financial Services",
    "Energy & Transition",
    "Business Services",
    "Real Assets",
    "Infrastructure",
  ],
  centres: ["London", "Zurich", "Frankfurt", "New York", "Singapore"],
}

export interface Insight {
  tag: string
  title: string
  micro: string
}

export const INSIGHTS: { kicker: string; title: string; items: Insight[] } = {
  kicker: "Insights",
  title: "Perspective, selectively shared.",
  items: [
    {
      tag: "M&A",
      title: "Software valuations move from narrative to evidence",
      micro: "Buyer scrutiny is shifting from growth stories to measurable durability, and discipline is returning to private software transactions.",
    },
    {
      tag: "Capital",
      title: "Private credit is now a governance decision",
      micro: "The strongest capital route is often determined less by coupon than by consent rights, flexibility and future optionality.",
    },
    {
      tag: "Strategy",
      title: "The case for deciding before you are forced to",
      micro: "Optionality is most valuable — and most fragile — in the quarters before a situation becomes visible to the market.",
    },
  ],
}

export const FIRM = {
  kicker: "The firm",
  title: "Senior attention, start to finish.",
  body: "STRATA is an independent advisory house, deliberately small. The partner who wins your trust is the partner who does the work — no hand-offs, no conflicts of interest from financing or principal positions, no incentive but your outcome.",
  pillars: [
    { title: "Independent", body: "No lending book, no balance sheet, no products to place. Our only revenue is your result." },
    { title: "Discreet", body: "Information perimeters are designed first. The work is invisible until it should not be." },
    { title: "Aligned", body: "One partner accountable per mandate, engaged from first diagnosis to final close." },
  ],
}

export const CONTACT = {
  kicker: "Confidential enquiry",
  title: "Send the situation, not the file.",
  body: "A short note about the context and timing is enough to begin. Please do not send confidential documents through this form — we will arrange a secure channel.",
  fields: {
    successTitle: "Thank you.",
    successBody: "Your note has been received. A partner will respond directly and discreetly.",
  },
}

export const FOOTER = {
  blurb: "Independent corporate finance and capital advisory.",
  columns: [
    {
      heading: "Advisory",
      links: [
        { label: "M&A Advisory", href: "#capabilities" },
        { label: "Capital Solutions", href: "#capabilities" },
        { label: "Private Capital", href: "#capabilities" },
        { label: "Special Situations", href: "#capabilities" },
      ],
    },
    {
      heading: "Firm",
      links: [
        { label: "Approach", href: "#approach" },
        { label: "Track record", href: "#track-record" },
        { label: "Insights", href: "#insights" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy", href: "#/legal" },
        { label: "Terms", href: "#/legal" },
        { label: "Disclaimer", href: "#/legal" },
      ],
    },
  ],
  disclaimer:
    "STRATA is a fictitious firm presented for design demonstration purposes. Nothing on this site constitutes financial advice or an offer of services.",
}

export const LEGAL = {
  title: "Legal & Disclosures",
  intro: "This site is a design demonstration for a fictitious advisory firm.",
  sections: [
    {
      heading: "Privacy",
      body: "No personal data submitted through this demonstration site is stored, transmitted to a server, or processed. The enquiry form is illustrative and performs no network request.",
    },
    {
      heading: "Terms",
      body: "Content is provided as-is for the purpose of demonstrating an award-grade corporate finance website. No reliance should be placed on any statement, figure or representation contained herein.",
    },
    {
      heading: "Disclaimer",
      body: "STRATA is not a real entity. Figures, engagements and coverage are illustrative and do not describe any actual transactions, clients or results. Nothing constitutes investment, legal or financial advice.",
    },
  ],
}
