import type { CSSProperties } from "react"
import { ContentImage } from "./ContentImage"
import type { ImageKey } from "../content/images"

interface Tombstone {
  dealType: string
  name: string
  basis: string
  img: ImageKey
  effect: "liquidDistortion" | "smoothWave" | "glitchDisplacement"
}

const TOMBSTONES: Tombstone[] = [
  { dealType: "Liquidity Event", name: "Founder Liquidity", basis: "Minority liquidity without a public signal.", img: "founderLiquidity", effect: "liquidDistortion" },
  { dealType: "Private Capital", name: "Capital Formation", basis: "Growth and refinancing flexibility under timing pressure.", img: "privateCapital", effect: "smoothWave" },
  { dealType: "Strategic Alternatives", name: "Board Advisory", basis: "A clean record of alternatives and consequences.", img: "boardroom", effect: "glitchDisplacement" },
]

export function Tombstones() {
  return (
    <section className="cms-guard-section cms-tombstone-section">
      <div className="container-premium">
        <div className="section-head-row reveal">
          <div>
            <p className="kicker">Representative engagements</p>
            <h2 className="h2">Situations that show judgment.</h2>
          </div>
        </div>
        <div className="cms-tombstone-grid">
          {TOMBSTONES.map((t, i) => (
            <article className="cms-tombstone reveal" data-shader-effect={t.effect} style={{ "--i": i } as CSSProperties} key={t.name}>
              <div className="cms-tombstone-media">
                <ContentImage img={t.img} alt="" />
              </div>
              <div className="cms-tombstone-body">
                <p className="kicker">{t.dealType}</p>
                <h3>{t.name}</h3>
                <p className="micro">{t.basis}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
