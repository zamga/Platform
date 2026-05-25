import { IMAGES, type ImageKey } from "../content/images"

interface Props {
  img: ImageKey
  /** Override the registry alt (e.g. decorative usage → empty string). */
  alt?: string
  /** Eager-load + high priority for above-the-fold hero images. */
  eager?: boolean
  className?: string
}

export function ContentImage({ img, alt, eager, className }: Props) {
  const asset = IMAGES[img]
  return (
    <img
      src={asset.src}
      width={asset.w}
      height={asset.h}
      alt={alt ?? asset.alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : "auto"}
    />
  )
}
