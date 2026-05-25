import { LiquidCore } from "../components/LiquidCore"
import { MetricsLedger } from "../components/MetricsLedger"
import { Tombstones } from "../components/Tombstones"
import { ContentImage } from "../components/ContentImage"
import { RouteLink } from "../components/RouteLink"
import { DemoForm } from "../components/DemoForm"
import { ServiceTile, SituationCard, MemoCard, ProfileCard } from "../components/cards"
import { SERVICES, SITUATIONS, INSIGHTS, PROFILES, CITY_RAIL } from "../content/data"
import { usePrefersReducedMotion } from "../effects/usePrefersReducedMotion"

export default function HomePage() {
  const reduced = usePrefersReducedMotion()
  return (
    <>
      <section className="home-hero">
        <div className="container-premium grid-premium hero-grid">
          <div className="hero-copy">
            <p className="kicker reveal">BERGWEISS / Corporate Finance</p>
            <h1 className="display reveal">
              Global<br />
              advisory.
            </h1>
            <p className="deck reveal">
              Independent corporate finance and private capital advisory for owners, boards, founders, family offices
              and investors facing consequential decisions.
            </p>
            <div className="cta-row reveal">
              <RouteLink to="capabilities" className="button accent interactive">
                Explore capabilities
              </RouteLink>
              <RouteLink to="subscribe" className="button interactive">
                Subscribe to insights
              </RouteLink>
            </div>
            <div className="hero-ledger reveal">
              <div>
                <p className="kicker">What we do</p>
                <p className="micro">
                  M&A Advisory · Capital Solutions · Private Capital · Restructuring · Board Advisory · Special
                  Situations
                </p>
              </div>
              <div>
                <p className="kicker">What we publish</p>
                <p className="micro">
                  Research notes, film briefings, market observations and selected institutional commentary.
                </p>
              </div>
            </div>
          </div>
          <div className="hero-globe">
            <LiquidCore />
          </div>
        </div>
      </section>

      <MetricsLedger reducedMotion={reduced} />

      <section className="band-paper section-connected">
        <div className="container-premium grid-premium split-spread">
          <div className="spread-copy reveal">
            <p className="kicker ink">Capabilities</p>
            <h2 className="h2 ink">Advisory for decisive moments.</h2>
            <p className="prose ink">
              Our public presentation follows the structure used by top-tier institutions: clear capability groups,
              selected engagements, intelligence, firm information and client access. The emphasis is on judgment, not
              theatre.
            </p>
          </div>
          <div className="spread-media reveal">
            <div className="photo-frame panorama">
              <ContentImage img="boardroom" />
            </div>
          </div>
          <div className="service-tiles">
            {SERVICES.map((s) => (
              <ServiceTile key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="band-ink section-connected">
        <div className="container-premium section-head-row reveal">
          <div>
            <p className="kicker">Selected engagements</p>
            <h2 className="h2">Representative situations, not decorative tombstones.</h2>
          </div>
          <RouteLink to="transactions" className="button interactive">
            All engagements
          </RouteLink>
        </div>
        <div className="container-premium situations-grid">
          {SITUATIONS.map((s) => (
            <SituationCard key={s.slug} s={s} />
          ))}
        </div>
      </section>

      <Tombstones />

      <section className="band-paper section-connected">
        <div className="container-premium grid-premium insights-grid">
          <div className="insights-left reveal">
            <p className="kicker ink">Intelligence</p>
            <h2 className="h2 ink">Research, films and market briefings.</h2>
            <p className="prose ink">
              Leading firms use public insights to demonstrate perspective, relevance and institutional seriousness.
              BERGWEISS adopts that standard with a quieter editorial tone and a more selective output.
            </p>
            <div className="subscribe-panel">
              <p className="kicker ink">Subscribe to insights</p>
              <h3 className="ink">Receive selected research and briefings.</h3>
              <DemoForm className="subscribe-form">
                <div className="subscribe-row">
                  <input placeholder="Work email" type="email" aria-label="Work email" />
                  <button className="button accent interactive" type="submit">
                    Subscribe
                  </button>
                </div>
                <p className="micro ink-muted">
                  Insights, film briefings and selected BERGWEISS publications. No documents should be submitted through
                  this form.
                </p>
              </DemoForm>
            </div>
          </div>
          <div className="insights-right">
            {INSIGHTS.map((i) => (
              <MemoCard key={i.title} insight={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="band-ink section-connected">
        <div className="container-premium grid-premium">
          <div className="global-visual reveal">
            <div className="photo-frame panorama">
              <ContentImage img="memoCorridor" alt="Editorial map of connected global financial centres" />
            </div>
          </div>
          <div className="global-copy reveal">
            <p className="kicker">Global connectivity</p>
            <h2 className="h2">Major cities. Selective routes.</h2>
            <p className="prose">
              The firm’s public presence should feel connected, not fragmented. BERGWEISS presents capabilities,
              insights and access as one continuous advisory system spanning key financial centres and private market
              corridors.
            </p>
            <div className="city-rail micro">
              {CITY_RAIL.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="band-paper section-connected">
        <div className="container-premium grid-premium">
          <div className="firm-copy reveal">
            <p className="kicker ink">Our firm</p>
            <h2 className="h2 ink">People, judgment and continuity.</h2>
            <p className="prose ink">
              Top-tier firms also present the institution itself: who they are, what they publish, how clients access
              the firm and where talent fits.
            </p>
          </div>
          <div className="people-grid">
            {PROFILES.map((p) => (
              <ProfileCard key={p.area} p={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="band-ink section-connected">
        <div className="container-premium grid-premium">
          <div className="access-copy reveal">
            <p className="kicker">Client gate</p>
            <h2 className="h2">
              Send the situation.
              <br />
              Not the file.
            </h2>
            <p className="prose">
              Public websites can open the relationship, but they should not become a data room. BERGWEISS uses a
              controlled gate for context, timing and private follow-up.
            </p>
          </div>
          <div className="access-card reveal">
            <div className="photo-frame">
              <ContentImage img="documents" />
            </div>
            <div className="access-body">
              <p className="kicker">Confidential intake</p>
              <p className="micro">Name, role, situation type, geography, timing and what must remain private.</p>
              <div className="cta-row">
                <RouteLink to="gate" className="button accent interactive">
                  Open the gate
                </RouteLink>
                <RouteLink to="client-access" className="button interactive">
                  Client access
                </RouteLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
