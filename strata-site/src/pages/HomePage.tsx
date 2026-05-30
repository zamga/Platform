import { Hero } from "../components/Hero"
import { Manifesto } from "../components/Manifesto"
import { Approach } from "../components/Approach"
import { Capabilities } from "../components/Capabilities"
import { TrackRecord } from "../components/TrackRecord"
import { Sectors } from "../components/Sectors"
import { Insights } from "../components/Insights"
import { Firm } from "../components/Firm"
import { Contact } from "../components/Contact"

export function HomePage({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <>
      <Hero reducedMotion={reducedMotion} />
      <Manifesto />
      <Approach />
      <Capabilities />
      <TrackRecord reducedMotion={reducedMotion} />
      <Sectors />
      <Insights />
      <Firm />
      <Contact />
    </>
  )
}
