import { Cpu, ShieldCheck } from "lucide-react"

const rows = [
  { label: "Сценарий", value: "Работа / Универсальный / Игры" },
  { label: "Бюджет", value: "Задаётся пользователем" },
  { label: "Совместимость", value: "Проверка на этапе подбора" },
  { label: "Варианты конфигураций", value: "Несколько сборок" },
]

export function HeroCard({ ctaLabel }: { ctaLabel: string }) {
  return (
    <div
      className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5"
      aria-hidden="true"
    >
      <div
        className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-blue-600/10 to-violet-600/10 blur-lg"
      />
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 text-white">
            <Cpu className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-semibold text-slate-900">Черновик конфигурации</p>
            <p className="text-xs text-slate-500">Предпросмотр интерфейса</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
          <ShieldCheck className="h-3.5 w-3.5" />
          Совместимо
        </span>
      </div>

      <dl className="mt-4 space-y-3">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between gap-4">
            <dt className="text-sm text-slate-500">{row.label}</dt>
            <dd className="text-right text-sm font-medium text-slate-900">{row.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-5 grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="rounded-lg border border-slate-100 bg-slate-50 p-3"
          >
            <div className="h-1.5 w-8 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />
            <div className="mt-2 h-1.5 w-full rounded-full bg-slate-200" />
            <div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-slate-200" />
          </div>
        ))}
      </div>

      <div className="mt-5 w-full rounded-full bg-gradient-to-r from-blue-600 to-violet-600 py-2.5 text-center text-sm font-semibold text-white">
        {ctaLabel}
      </div>
    </div>
  )
}
