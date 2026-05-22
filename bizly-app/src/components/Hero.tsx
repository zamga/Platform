import { ArrowRight, CheckIcon, MicIcon, StarLogo } from "./icons"
import { HeroCards } from "./HeroCards"

export function Hero() {
  return (
    <section className="rounded-[var(--radius-shell)] bg-[#f5f5f5] p-6 lg:p-10">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-xs font-medium text-neutral-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            AI-powered intelligence · v2.0 live
          </div>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-neutral-400 sm:text-5xl lg:text-[3.25rem]">
            Know any company or person{" "}
            <span className="text-black">before</span> you trust them.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-500 lg:text-lg">
            Bizly.ai analyzes 200,000+ Slovenian businesses and millions of
            public data points. Whether you&apos;re a consumer checking a
            contractor or a CFO vetting a supplier — get answers in seconds.
          </p>

          <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-2 shadow-sm sm:flex-row sm:items-center">
            <div className="flex flex-1 items-center gap-3 px-3 py-2">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600">
                <StarLogo className="w-3.5 h-3.5" />
              </span>
              <input
                type="text"
                placeholder={`Ask anything: "Is Mercator a safe employer?" or er...`}
                className="w-full min-w-0 border-0 bg-transparent text-sm text-black outline-none placeholder:text-neutral-400"
              />
            </div>
            <div className="flex items-center gap-2 px-1 pb-1 sm:pb-0 sm:pr-1">
              <button
                type="button"
                className="flex items-center gap-2 rounded-xl border border-neutral-200 px-4 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
              >
                <MicIcon />
                Voice
              </button>
              <button
                type="button"
                className="flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Search
                <ArrowRight />
              </button>
            </div>
          </div>

          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-600">
            {["Free for consumers", "No card required", "GDPR compliant"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckIcon className="text-emerald-600" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        <HeroCards />
      </div>
    </section>
  )
}
