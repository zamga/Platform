import type { ReactNode } from "react"
import HomePage from "../pages/HomePage"
import CapabilitiesPage from "../pages/CapabilitiesPage"
import { ServiceDetailPage } from "../pages/ServiceDetailPage"
import TransactionsPage from "../pages/TransactionsPage"
import { TransactionDetailPage } from "../pages/TransactionDetailPage"
import IntelligencePage from "../pages/IntelligencePage"
import ResearchPage from "../pages/ResearchPage"
import FilmsPage from "../pages/FilmsPage"
import BriefingsPage from "../pages/BriefingsPage"
import SubscribePage from "../pages/SubscribePage"
import FirmPage from "../pages/FirmPage"
import PeoplePage from "../pages/PeoplePage"
import CareersPage from "../pages/CareersPage"
import OfficesPage from "../pages/OfficesPage"
import ClientAccessPage from "../pages/ClientAccessPage"
import GatePage from "../pages/GatePage"
import PressroomPage from "../pages/PressroomPage"
import { LegalPage } from "../pages/LegalPage"
import NotFoundPage from "../pages/NotFoundPage"
import { SERVICES, SITUATIONS } from "./data"

export interface RouteDef {
  slug: string
  title: string
  description: string
  /** Spatial-canvas mode group (0 home, 1 capabilities, 2 transactions, 3 intelligence, 4 firm, 5 gate). */
  group: number
  element: ReactNode
}

const serviceRoutes: RouteDef[] = SERVICES.map((s) => ({
  slug: s.slug,
  title: s.title,
  description: s.tileMicro,
  group: 1,
  element: <ServiceDetailPage slug={s.slug} />,
}))

const transactionRoutes: RouteDef[] = SITUATIONS.map((s) => ({
  slug: s.slug,
  title: s.title,
  description: s.micro,
  group: 2,
  element: <TransactionDetailPage slug={s.slug} />,
}))

export const ROUTES: RouteDef[] = [
  { slug: "", title: "Corporate Finance & Private Capital Advisory", description: "Independent corporate finance and private capital advisory for owners, boards, founders and investors facing consequential decisions.", group: 0, element: <HomePage /> },
  { slug: "capabilities", title: "Advisory Capabilities", description: "M&A, capital solutions, private capital, restructuring, board advisory and special situations.", group: 1, element: <CapabilitiesPage /> },
  ...serviceRoutes,
  { slug: "transactions", title: "Selected Engagements", description: "Representative situations that show judgment, not decorative tombstones.", group: 2, element: <TransactionsPage /> },
  ...transactionRoutes,
  { slug: "intelligence", title: "Intelligence", description: "Research, film briefings, market notes and subscription from BERGWEISS.", group: 3, element: <IntelligencePage /> },
  { slug: "research", title: "Selected Research", description: "Company, sector, capital and corridor observations for private decisions.", group: 3, element: <ResearchPage /> },
  { slug: "films", title: "Briefing Films", description: "Short institutional film briefings on capital, M&A and strategic situations.", group: 3, element: <FilmsPage /> },
  { slug: "briefings", title: "Market Briefings", description: "Shorter observations and recurring notes designed for regular reading.", group: 3, element: <BriefingsPage /> },
  { slug: "subscribe", title: "Subscribe to Insights", description: "Selected research, films and briefings — sustained relevance, not email volume.", group: 3, element: <SubscribePage /> },
  { slug: "firm", title: "Our Firm", description: "An independent corporate finance and private capital advisory house.", group: 4, element: <FirmPage /> },
  { slug: "people", title: "People", description: "Senior attention across strategic advisory, capital, private capital and research.", group: 4, element: <PeoplePage /> },
  { slug: "careers", title: "Careers", description: "Exposure to strategic situations, capital structures and private transactions.", group: 4, element: <CareersPage /> },
  { slug: "offices", title: "Offices", description: "Connectivity across key financial centres and decision corridors.", group: 4, element: <OfficesPage /> },
  { slug: "client-access", title: "Client Access", description: "A serious, minimal and controlled private access environment.", group: 4, element: <ClientAccessPage /> },
  { slug: "gate", title: "Client Gate", description: "Send the situation, the timing and what must remain private — not the file.", group: 5, element: <GatePage /> },
  { slug: "pressroom", title: "Pressroom", description: "News, updates and selected commentary from BERGWEISS.", group: 4, element: <PressroomPage /> },
  { slug: "privacy", title: "Privacy", description: "Privacy, information use and data handling.", group: 0, element: <LegalPage title="Privacy" prose="Privacy, information use and data handling." /> },
  { slug: "terms", title: "Terms", description: "Terms of use, disclaimers and website conditions.", group: 0, element: <LegalPage title="Terms" prose="Terms of use, disclaimers and website conditions." /> },
]

const BY_SLUG = new Map(ROUTES.map((r) => [r.slug, r]))

export const NOT_FOUND: RouteDef = {
  slug: "404",
  title: "Page not available",
  description: "The page you requested is not available.",
  group: 0,
  element: <NotFoundPage />,
}

export function routeForSlug(slug: string): RouteDef {
  return BY_SLUG.get(slug) ?? NOT_FOUND
}
