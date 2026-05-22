import { useState } from "react"
import { HomeIcon, StarLogo } from "./icons"

const navItems = [
  { label: "Home", active: true, icon: true },
  { label: "Services", active: false },
  { label: "AI Features", active: false },
  { label: "Pricing", active: false },
  { label: "About", active: false },
  { label: "Contact", active: false },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative px-4 py-3 sm:px-6 lg:px-10">
      <div className="flex items-center justify-between gap-3">
        <a href="#" className="flex shrink-0 items-center gap-2 text-black no-underline">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white">
            <StarLogo className="w-3.5 h-3.5" />
          </span>
          <span className="text-base font-semibold tracking-tight sm:text-lg">
            Bizly.ai
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-neutral-200 bg-white/80 px-2 py-1.5 shadow-sm lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors no-underline ${
                item.active
                  ? "bg-neutral-100 text-black"
                  : "text-neutral-500 hover:text-black"
              }`}
            >
              {item.icon && <HomeIcon className="w-3.5 h-3.5" />}
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="#"
            className="hidden text-sm font-medium text-neutral-600 no-underline hover:text-black md:inline"
          >
            Sign in
          </a>
          <a
            href="#"
            className="flex items-center gap-1.5 rounded-xl bg-black px-3 py-2 text-xs font-medium text-white no-underline sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm"
          >
            <StarLogo className="w-3 h-3" />
            <span className="hidden xs:inline sm:inline">Try AI Free</span>
            <span className="sm:hidden">Try Free</span>
          </a>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              {menuOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4.3 4.3a1 1 0 011.4 0L10 8.6l4.3-4.3a1 1 0 111.4 1.4L11.4 10l4.3 4.3a1 1 0 01-1.4 1.4L10 11.4l-4.3 4.3a1 1 0 01-1.4-1.4L8.6 10 4.3 5.7a1 1 0 010-1.4z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="mt-3 flex flex-col gap-1 rounded-2xl border border-neutral-200 bg-white p-2 shadow-lg lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium no-underline ${
                item.active
                  ? "bg-neutral-100 text-black"
                  : "text-neutral-600"
              }`}
            >
              {item.icon && <HomeIcon className="w-4 h-4" />}
              {item.label}
            </a>
          ))}
          <a
            href="#"
            className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-600 no-underline md:hidden"
          >
            Sign in
          </a>
        </nav>
      )}
    </header>
  )
}
