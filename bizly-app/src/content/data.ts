import type { ImageKey, VideoKey } from "./images"

export interface Service {
  slug: string
  tileKicker: string
  title: string
  tileMicro: string
  image: ImageKey
  overviewProse: string
  selectedView: string
  whereItApplies: string[]
  whatWeFocusOn: string[]
}

export const SERVICES: Service[] = [
  {
    slug: "ma-advisory",
    tileKicker: "Strategic M&A",
    title: "M&A Advisory",
    tileMicro: "Independent judgment for acquisitions, disposals, mergers and unsolicited approaches.",
    image: "maAdvisory",
    overviewProse:
      "BERGWEISS advises owners, boards and investors where a transaction must be framed before the market sees a process. Public auctions are only one route; frequently they are not the strongest one.",
    selectedView: "Selected counterparties, disciplined disclosure and a quieter path to price discovery.",
    whereItApplies: [
      "Owner-led sale or partial liquidity",
      "Unsolicited strategic approach",
      "Divestiture of a non-core asset",
      "Cross-border buyer universe",
      "Board review of strategic alternatives",
    ],
    whatWeFocusOn: ["Buyer universe quality", "Narrative control", "Valuation tension", "Governance sensitivity", "Execution credibility"],
  },
  {
    slug: "capital-solutions",
    tileKicker: "Capital Solutions",
    title: "Capital Solutions",
    tileMicro: "Capital advice where flexibility, control and timing matter as much as price.",
    image: "capitalRaise",
    overviewProse:
      "Debt, private credit, equity and hybrid capital alter governance as well as cost. BERGWEISS frames the alternatives before capital becomes a public signal.",
    selectedView: "The cheapest capital can become the most expensive if it narrows the next decision.",
    whereItApplies: [
      "Refinancing before maturity pressure",
      "Growth capital without premature control loss",
      "Bank market versus private credit",
      "Hybrid capital evaluation",
      "Sponsor or family ownership alternatives",
    ],
    whatWeFocusOn: ["Cost and covenant logic", "Control rights", "Exit flexibility", "Disclosure management", "Investor fit"],
  },
  {
    slug: "private-capital",
    tileKicker: "Private Capital",
    title: "Private Capital",
    tileMicro: "Private capital for owners who value patience, alignment and control.",
    image: "privateCapital",
    overviewProse:
      "We advise on minority equity, strategic capital, family office participation, sponsor liquidity and direct investment structures where terms must support the long horizon.",
    selectedView: "Private capital should widen strategic freedom, not quietly transfer it.",
    whereItApplies: [
      "Minority equity or structured capital",
      "Family office direct investment",
      "Owner recapitalization",
      "Strategic capital partner selection",
      "Continuation or sponsor liquidity routes",
    ],
    whatWeFocusOn: ["Alignment and governance", "Control preservation", "Information perimeter", "Exit optionality", "Long-term investor fit"],
  },
  {
    slug: "restructuring",
    tileKicker: "Restructuring",
    title: "Restructuring & Recapitalization",
    tileMicro: "Independent advice when liquidity, liabilities or stakeholders compress the range of choices.",
    image: "restructuring",
    overviewProse:
      "Restructuring is not only distress work. It is the redesign of obligations, timing and stakeholder expectations before optionality disappears.",
    selectedView: "Clarity is created before the market decides what the situation is called.",
    whereItApplies: [
      "Liquidity or covenant pressure",
      "Debt maturity concentration",
      "Shareholder, sponsor or creditor tension",
      "Sale, refinance or recapitalization alternatives",
      "Balance-sheet redesign under pressure",
    ],
    whatWeFocusOn: ["Stakeholder map", "Scenario pathing", "Negotiation discipline", "Communication control", "Recapitalization options"],
  },
  {
    slug: "board-advisory",
    tileKicker: "Board Advisory",
    title: "Board Advisory",
    tileMicro: "Board-level judgment for strategic alternatives, conflicts and consequential ownership decisions.",
    image: "boardAdvisory",
    overviewProse:
      "When sale, refinance, recapitalization and independence all remain possible, boards require a clean record of alternatives, consequences and governance sensitivity.",
    selectedView: "Boards need judgment that reduces noise, not more activity around the table.",
    whereItApplies: [
      "Inbound strategic interest",
      "Conflict-sensitive decision process",
      "Special committee environment",
      "Succession or ownership transition",
      "Capital allocation under pressure",
    ],
    whatWeFocusOn: ["Decision record", "Alternative analysis", "Conflict perimeter", "Fiduciary sensitivity", "External narrative risk"],
  },
  {
    slug: "special-situations",
    tileKicker: "Special Situations",
    title: "Special Situations",
    tileMicro: "Advisory for situations where categories overlap and timing becomes decisive.",
    image: "transactionRoom",
    overviewProse:
      "When financing, M&A, governance and stakeholder pressure converge, the route matters more than the label. BERGWEISS structures options before external narratives take over.",
    selectedView: "Special situations reward calm sequencing, not visible motion.",
    whereItApplies: [
      "Financing and sale alternatives overlap",
      "Quiet bilateral route may outperform auction",
      "Stakeholders are misaligned",
      "Market rumor could damage value",
      "Urgent decision without a full public process",
    ],
    whatWeFocusOn: ["Situation diagnosis", "Counterparty discipline", "Information perimeter", "Fallback alternatives", "Negotiation credibility"],
  },
]

export interface Situation {
  slug: string
  title: string
  image: ImageKey
  micro: string
  bullets: string[]
}

export const SITUATIONS: Situation[] = [
  {
    slug: "transaction-founder-liquidity",
    title: "Founder liquidity without public signal",
    image: "founderLiquidity",
    micro: "A founder-led business explores minority liquidity while preserving strategic control, employee confidence and customer trust.",
    bullets: [
      "Defined a limited counterparty universe before outreach.",
      "Evaluated minority, strategic and hybrid capital routes.",
      "Protected optionality by separating liquidity from control.",
    ],
  },
  {
    slug: "transaction-capital-raise",
    title: "Private capital raise under timing pressure",
    image: "capitalRaise",
    micro: "A company requires growth capital and refinancing flexibility without a broad process that would signal pressure to the market.",
    bullets: [
      "Compared bank, private credit and minority equity structures.",
      "Created a disclosure perimeter for sensitive operating information.",
      "Sequenced investor engagement around governance constraints.",
    ],
  },
  {
    slug: "transaction-cross-border",
    title: "Cross-border sale with selective buyer mapping",
    image: "crossBorder",
    micro: "A regional champion evaluates strategic interest across multiple jurisdictions where the obvious buyer set is incomplete.",
    bullets: [
      "Built a wider buyer map based on adjacency, urgency and sector fit.",
      "Separated strategic outreach from financial signaling.",
      "Protected confidentiality while widening price tension.",
    ],
  },
]

export interface Insight {
  to: string
  title: string
  micro: string
  image: ImageKey
}

export const INSIGHTS: Insight[] = [
  {
    to: "research",
    image: "memoAiSoftware",
    title: "AI software M&A moves from narrative to evidence",
    micro: "Valuation discipline is returning to private software transactions as buyer scrutiny moves from growth stories to measurable durability.",
  },
  {
    to: "briefings",
    image: "memoPrivateCredit",
    title: "Private credit is now a governance decision",
    micro: "The strongest capital route is often determined less by coupon than by consent rights, flexibility and future optionality.",
  },
  {
    to: "research",
    image: "memoCorridor",
    title: "The DACH-Adriatic corridor remains underbanked",
    micro: "Cross-border capital and advisory coverage is still fragmented across founder-led companies and regional champions.",
  },
]

export interface Profile {
  role: string
  area: string
  micro: string
  image: ImageKey
}

export const PROFILES: Profile[] = [
  { role: "Managing Director", area: "Strategic Advisory", image: "boardroom", micro: "Board-level advice on ownership decisions, strategic alternatives and selective counterparty processes." },
  { role: "Partner", area: "Capital Solutions", image: "capitalRaise", micro: "Capital structure, private credit, minority equity and refinancing situations under timing sensitivity." },
  { role: "Partner", area: "Private Capital", image: "privateCapital", micro: "Private investor matching, family capital and patient ownership structures." },
  { role: "Partner", area: "Research & Intelligence", image: "careers", micro: "Market memos, briefing materials and decision support for private transactions." },
]

export interface Film {
  video: VideoKey
  title: string
  micro: string
}

export const FILMS: Film[] = [
  { video: "filmMarketOutlook", title: "Market Outlook: Private Capital", micro: "A short film briefing on private capital routes, disclosure discipline and owner optionality." },
  { video: "filmCapitalStructure", title: "Capital Structure as Strategy", micro: "How financing terms change governance, flexibility and the company’s next decision." },
  { video: "filmBoardroomNotes", title: "Boardroom Notes", micro: "An institutional perspective on board-level clarity when strategic alternatives converge." },
]

export const CITY_RAIL = ["New York", "London", "Zurich", "Frankfurt", "Ljubljana", "Dubai", "Singapore"]

export const OFFICES = [
  { city: "London", micro: "International capital, investor access, strategic transactions." },
  { city: "Vienna", micro: "Regional advisory, ownership transitions, corridor judgment." },
  { city: "Ljubljana", micro: "Founders, family capital and regional champion situations." },
]
