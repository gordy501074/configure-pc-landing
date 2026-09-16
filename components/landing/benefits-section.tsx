import { Target, ShieldCheck, Wallet, Zap, Layers } from "lucide-react"
import type { AudienceContent, IconName } from "@/lib/landing-content"

const iconMap: Record<IconName, typeof Target> = {
  target: Target,
  shield: ShieldCheck,
  wallet: Wallet,
  zap: Zap,
  layers: Layers,
}

export function BenefitsSection({ data }: { data: AudienceContent }) {
  return (
    <section id="benefits" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {data.valueTitle}
        </h2>
        <p className="mt-4 text-lg text-slate-600">{data.valueSubtitle}</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {data.valueCards.map((card) => {
          const Icon = iconMap[card.icon]
          return (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{card.text}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
