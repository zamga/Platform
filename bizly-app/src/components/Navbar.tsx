import { useEffect, useRef, useState } from "react"
import { RouteLink } from "./RouteLink"

const PRIMARY = [
  { to: "capabilities", label: "Capabilities", group: ["capabilities", "ma-advisory", "capital-solutions", "private-capital", "restructuring", "board-advisory", "special-situations"] },
  { to: "transactions", label: "Transactions", group: ["transactions", "transaction-founder-liquidity", "transaction-capital-raise", "transaction-cross-border"] },
  { to: "intelligence", label: "Intelligence", group: ["intelligence", "research", "films", "briefings", "subscribe", "pressroom"] },
  { to: "firm", label: "Firm", group: ["firm", "people", "careers", "offices", "client-access"] },
]

export function Navbar({ slug }: { slug: string }) {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  // Esc closes the panel and returns focus to the toggle.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener("keydown", onKey)
    panelRef.current?.querySelector<HTMLElement>("a")?.focus()
    return () => document.removeEventListener("keydown", onKey)
  }, [open])

  const isActive = (item: (typeof PRIMARY)[number]) => item.group.includes(slug)

  return (
    <header className="topbar">
      <div className="container-premium nav">
        <RouteLink to="" className="brand">
          BERGWEISS
        </RouteLink>
        <nav className="navlinks" aria-label="Primary">
          {PRIMARY.map((item) => (
            <RouteLink key={item.to} to={item.to} className={isActive(item) ? "is-active" : ""}>
              {item.label}
            </RouteLink>
          ))}
        </nav>
        <div className="nav-actions">
          <RouteLink to="subscribe" className="micro">
            Subscribe
          </RouteLink>
          <RouteLink to="gate" className="button interactive">
            Gate
          </RouteLink>
          <button
            ref={toggleRef}
            type="button"
            aria-controls="mobile-panel"
            aria-expanded={open}
            className="button interactive menu-toggle"
            onClick={() => setOpen((o) => !o)}
          >
            Menu
          </button>
        </div>
      </div>
      <div className={"mobile-panel" + (open ? " open" : "")} id="mobile-panel" ref={panelRef} hidden={!open}>
        {PRIMARY.map((item) => (
          <RouteLink key={item.to} to={item.to} onClick={() => setOpen(false)}>
            {item.label}
          </RouteLink>
        ))}
        <RouteLink to="subscribe" onClick={() => setOpen(false)}>
          Subscribe
        </RouteLink>
        <RouteLink to="gate" onClick={() => setOpen(false)}>
          Gate
        </RouteLink>
      </div>
    </header>
  )
}
