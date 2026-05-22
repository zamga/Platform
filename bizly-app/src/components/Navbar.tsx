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
  return (
    <header className="flex items-center justify-between px-6 py-4 lg:px-10">
      <a href="#" className="flex items-center gap-2.5 text-black no-underline">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white">
          <StarLogo className="w-3.5 h-3.5" />
        </span>
        <span className="text-lg font-semibold tracking-tight">Bizly.ai</span>
      </a>

      <nav className="hidden items-center gap-1 rounded-full border border-neutral-200 bg-white/80 px-2 py-1.5 shadow-sm md:flex">
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

      <div className="flex items-center gap-4">
        <a
          href="#"
          className="hidden text-sm font-medium text-neutral-600 no-underline hover:text-black sm:inline"
        >
          Sign in
        </a>
        <a
          href="#"
          className="flex items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-sm font-medium text-white no-underline transition-opacity hover:opacity-90"
        >
          <StarLogo className="w-3 h-3" />
          Try AI Free
        </a>
      </div>
    </header>
  )
}
