import glassTowers from "../assets/content/glass-towers.webp"
import boardroom from "../assets/content/boardroom.webp"
import founderLiquidity from "../assets/content/founder-liquidity.webp"
import capitalRaise from "../assets/content/capital-raise.webp"
import crossBorder from "../assets/content/cross-border.webp"
import memoAiSoftware from "../assets/content/memo-ai-software.webp"
import memoPrivateCredit from "../assets/content/memo-private-credit.webp"
import memoCorridor from "../assets/content/memo-corridor.webp"
import privateCapital from "../assets/content/private-capital.webp"
import careers from "../assets/content/careers.webp"
import documents from "../assets/content/documents.webp"
import advisoryOffice from "../assets/content/advisory-office.webp"
import transactionRoom from "../assets/content/transaction-room.webp"
import newsroom from "../assets/content/newsroom.webp"
import filmPoster from "../assets/content/film-poster.webp"
import researchArchive from "../assets/content/research-archive.webp"
import eventAtrium from "../assets/content/event-atrium.webp"
import firmInterior from "../assets/content/firm-interior.webp"
import peopleTeam from "../assets/content/people-team.webp"
import clientAccess from "../assets/content/client-access.webp"
import maAdvisory from "../assets/content/ma-advisory.webp"
import restructuring from "../assets/content/restructuring.webp"
import boardAdvisory from "../assets/content/board-advisory.webp"

import filmMarketOutlook from "../assets/content/film-market-outlook.mp4"
import filmCapitalStructure from "../assets/content/film-capital-structure.mp4"
import filmBoardroomNotes from "../assets/content/film-boardroom-notes.mp4"

export interface ImageAsset {
  src: string
  w: number
  h: number
  alt: string
}

// Every content photograph shares the same 1200×814 aspect ratio.
const D = { w: 1200, h: 814 }

export const IMAGES = {
  glassTowers: { ...D, src: glassTowers, alt: "Glass office towers against an evening city skyline" },
  boardroom: { ...D, src: boardroom, alt: "Senior advisers in a boardroom discussion" },
  founderLiquidity: { ...D, src: founderLiquidity, alt: "Quiet meeting room arranged for a confidential discussion" },
  capitalRaise: { ...D, src: capitalRaise, alt: "Modern financial district interior at dusk" },
  crossBorder: { ...D, src: crossBorder, alt: "International financial district skyline" },
  memoAiSoftware: { ...D, src: memoAiSoftware, alt: "Abstract data visualisation on a dark display" },
  memoPrivateCredit: { ...D, src: memoPrivateCredit, alt: "Close-up of financial documents and charts" },
  memoCorridor: { ...D, src: memoCorridor, alt: "Editorial map of connected global financial centres" },
  privateCapital: { ...D, src: privateCapital, alt: "Private meeting space with natural light" },
  careers: { ...D, src: careers, alt: "Professionals collaborating in an open workspace" },
  documents: { ...D, src: documents, alt: "Confidential documents arranged on a desk" },
  advisoryOffice: { ...D, src: advisoryOffice, alt: "Advisory office interior" },
  transactionRoom: { ...D, src: transactionRoom, alt: "Transaction room overlooking the city" },
  newsroom: { ...D, src: newsroom, alt: "Editorial newsroom desk" },
  filmPoster: { ...D, src: filmPoster, alt: "Film briefing title frame" },
  researchArchive: { ...D, src: researchArchive, alt: "Research archive and reading room" },
  eventAtrium: { ...D, src: eventAtrium, alt: "Institutional event atrium" },
  firmInterior: { ...D, src: firmInterior, alt: "Calm institutional interior" },
  peopleTeam: { ...D, src: peopleTeam, alt: "Advisory team in conversation" },
  clientAccess: { ...D, src: clientAccess, alt: "Secure client access environment" },
  maAdvisory: { ...D, src: maAdvisory, alt: "Strategic advisory meeting" },
  restructuring: { ...D, src: restructuring, alt: "Negotiation table during a restructuring discussion" },
  boardAdvisory: { ...D, src: boardAdvisory, alt: "Board members in a strategic session" },
} as const satisfies Record<string, ImageAsset>

export type ImageKey = keyof typeof IMAGES

export const VIDEOS = {
  filmMarketOutlook,
  filmCapitalStructure,
  filmBoardroomNotes,
} as const

export type VideoKey = keyof typeof VIDEOS
export const FILM_POSTER = filmPoster
