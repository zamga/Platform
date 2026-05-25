import { Subhero } from "../components/Subhero"

interface Props {
  title: string
  prose: string
}

export function LegalPage({ title, prose }: Props) {
  return (
    <>
      <Subhero kicker="Legal" title={title} prose={prose} />
      <section className="band-paper section-connected">
        <div className="container-premium">
          <p className="prose ink">
            This page is a design prototype. Replace with jurisdiction-specific legal language, entity information,
            privacy notices, cookie disclosures and regulatory statements before publication.
          </p>
        </div>
      </section>
    </>
  )
}
