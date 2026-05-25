interface Props {
  title: string
  description: string
}

/**
 * Per-route document metadata. React 19 hoists <title>/<meta> rendered
 * anywhere in the tree into <head>, so no helper library is needed.
 */
export function SeoHead({ title, description }: Props) {
  const full = `${title} — BERGWEISS`
  return (
    <>
      <title>{full}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={full} />
      <meta name="twitter:description" content={description} />
    </>
  )
}
