import { RouteLink } from "./RouteLink"
import { ContentImage } from "./ContentImage"
import { VIDEOS, FILM_POSTER, type VideoKey } from "./../content/images"
import type { Service, Situation, Insight, Profile, Film } from "../content/data"

export function ServiceTile({ service }: { service: Service }) {
  return (
    <article className="service-tile interactive reveal">
      <RouteLink to={service.slug}>
        <p className="kicker">{service.tileKicker}</p>
        <h3>{service.title}</h3>
        <p className="micro">{service.tileMicro}</p>
        <span className="tile-link">Open service</span>
      </RouteLink>
    </article>
  )
}

export function SituationCard({ s }: { s: Situation }) {
  return (
    <article className="situation-card reveal interactive">
      <div className="photo-frame">
        <ContentImage img={s.image} alt="" />
      </div>
      <div className="situation-copy">
        <p className="kicker">Representative engagement</p>
        <h3>{s.title}</h3>
        <p className="micro">{s.micro}</p>
        <ul className="bullet-list micro">
          {s.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <RouteLink to={s.slug} className="button interactive">
          View engagement
        </RouteLink>
      </div>
    </article>
  )
}

export function MemoCard({ insight }: { insight: Insight }) {
  return (
    <article className="memo-card interactive reveal">
      <RouteLink to={insight.to}>
        <div className="photo-frame memo-thumb">
          <ContentImage img={insight.image} alt="" />
        </div>
        <div>
          <p className="kicker">Intelligence</p>
          <h3>{insight.title}</h3>
          <p className="micro">{insight.micro}</p>
        </div>
      </RouteLink>
    </article>
  )
}

export function MemoArticle({ insight }: { insight: Insight }) {
  return (
    <article className="memo-article reveal">
      <div className="photo-frame memo-thumb">
        <ContentImage img={insight.image} alt="" />
      </div>
      <div>
        <p className="kicker">Research note</p>
        <h3>{insight.title}</h3>
        <p className="micro">{insight.micro}</p>
      </div>
    </article>
  )
}

export function ProfileCard({ p }: { p: Profile }) {
  return (
    <article className="profile-card interactive reveal">
      <div className="photo-frame square">
        <ContentImage img={p.image} alt="" />
      </div>
      <div>
        <p className="kicker">{p.role}</p>
        <h3>{p.area}</h3>
        <p className="micro">{p.micro}</p>
      </div>
    </article>
  )
}

export function FilmCard({ film }: { film: Film }) {
  return (
    <article className="video-card reveal">
      <div className="photo-frame">
        <video controls poster={FILM_POSTER} preload="none">
          <source src={VIDEOS[film.video as VideoKey]} type="video/mp4" />
        </video>
      </div>
      <div>
        <p className="kicker">Film briefing</p>
        <h3>{film.title}</h3>
        <p className="micro">{film.micro}</p>
      </div>
    </article>
  )
}
