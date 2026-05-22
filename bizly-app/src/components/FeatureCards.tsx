import { BellIcon, BrainIcon, ChatIcon, ReportIcon } from "./icons"

const features = [
  {
    icon: BrainIcon,
    title: "AI Predictions",
    description:
      "Forecast bankruptcy risk 6 months ahead with 94% accuracy.",
  },
  {
    icon: ChatIcon,
    title: "Chat with data",
    description:
      "Ask in plain Slovene or English. No filters, no SQL.",
  },
  {
    icon: BellIcon,
    title: "Smart alerts",
    description:
      "Get pinged the moment a partner's risk profile changes.",
  },
  {
    icon: ReportIcon,
    title: "Auto reports",
    description:
      "Full due-diligence PDF generated in under 30 seconds.",
  },
]

export function FeatureCards() {
  return (
    <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {features.map(({ icon: Icon, title, description }) => (
        <article
          key={title}
          className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-700">
            <Icon />
          </div>
          <h3 className="text-base font-semibold text-black">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-500">
            {description}
          </p>
        </article>
      ))}
    </section>
  )
}
