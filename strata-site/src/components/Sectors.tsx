import { SECTORS } from "../content/site"

export function Sectors() {
  return (
    <section className="section band-paper sectors">
      <div className="container sectors-grid">
        <div className="sectors-copy">
          <p className="kicker reveal">{SECTORS.kicker}</p>
          <h2 className="h2 reveal" data-delay="1">
            {SECTORS.title}
          </h2>
          <div className="centres reveal" data-delay="2">
            <span className="micro centres-label">Financial centres</span>
            <ul className="centres-list">
              {SECTORS.centres.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="sectors-list">
          {SECTORS.sectors.map((s, i) => (
            <li className="sector reveal" data-delay={(i % 4) as 0 | 1 | 2 | 3} key={s}>
              <span className="sector-no num">{String(i + 1).padStart(2, "0")}</span>
              <span className="sector-name">{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
