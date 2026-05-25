import type { ReactNode } from "react"

interface Props {
  kicker: string
  title: string
  prose?: string
  media?: ReactNode
}

export function Subhero({ kicker, title, prose, media }: Props) {
  return (
    <section className="subhero">
      <div className="container-premium grid-premium">
        <div className="subhero-copy reveal">
          <p className="kicker">{kicker}</p>
          <h1 className="h1">{title}</h1>
          {prose && <p className="prose">{prose}</p>}
        </div>
        {media && <div className="subhero-media reveal">{media}</div>}
      </div>
    </section>
  )
}
