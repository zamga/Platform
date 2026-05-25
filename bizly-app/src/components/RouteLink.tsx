import type { ReactNode } from "react"
import { hashFromSlug } from "../router/useHashRoute"

interface Props {
  to: string
  className?: string
  children: ReactNode
  onClick?: () => void
}

/**
 * Anchor that navigates via the hash router. Native hash navigation triggers
 * `hashchange`, which the router listens for — no JS click handler needed,
 * so middle-click / open-in-new-tab keep working.
 */
export function RouteLink({ to, className, children, onClick }: Props) {
  return (
    <a href={hashFromSlug(to)} className={className} onClick={onClick}>
      {children}
    </a>
  )
}
