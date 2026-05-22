import { DatabaseIcon, PersonIcon, PulseIcon, TrendUp } from "./icons"

export function HeroCards() {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-2xl bg-black p-6 text-white shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <PulseIcon className="text-emerald-400" />
            <span>Live AI score</span>
          </div>
          <span className="rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-xs text-neutral-300">
            Mercator d.o.o.
          </span>
        </div>

        <p className="text-4xl font-bold tracking-tight lg:text-5xl">
          A+ <span className="font-normal text-neutral-500">/ 9.2</span>
        </p>
        <p className="mt-2 text-sm leading-relaxed text-neutral-400">
          Excellent creditworthiness · Low default risk · 24 months stable
        </p>

        <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-neutral-800">
          <div className="h-full w-[92%] rounded-full bg-white" />
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          {[
            { label: "Revenue", value: "€2.1B" },
            { label: "Staff", value: "10,400" },
            { label: "Trend", value: "+4%", trend: true },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-neutral-900 px-3 py-2.5"
            >
              <p className="text-[10px] uppercase tracking-wide text-neutral-500">
                {stat.label}
              </p>
              <p className="mt-0.5 flex items-center gap-1 text-sm font-semibold">
                {stat.value}
                {stat.trend && <TrendUp className="text-emerald-400" />}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="mb-3 flex items-center gap-2 text-sm text-neutral-500">
          <DatabaseIcon />
          <span>Indexed entities</span>
        </div>
        <p className="text-4xl font-bold tracking-tight text-black lg:text-5xl">
          214,839
        </p>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-neutral-500">
          <span>+ 1.2M individuals tracked</span>
          <PersonIcon className="text-neutral-400" />
        </p>
      </div>
    </div>
  )
}
