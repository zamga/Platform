import { Subhero } from "../components/Subhero"
import { RouteLink } from "../components/RouteLink"

export default function NotFoundPage() {
  return (
    <>
      <Subhero kicker="Not found" title="Page not available" prose="The page you requested is not available." />
      <section className="band-paper section-connected">
        <div className="container-premium">
          <RouteLink to="" className="button accent interactive">
            Return home
          </RouteLink>
        </div>
      </section>
    </>
  )
}
