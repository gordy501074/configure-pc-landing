import { Check } from "lucide-react"
import type { AudienceContent } from "@/lib/landing-content"

export function TrustSection({ data }: { data: AudienceContent }) {
  return (
    <section id="trust" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 lg:py-24">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
              Стадия MVP
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {data.trustTitle}
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">{data.trustText}</p>
          </div>

          <ul className="space-y-4">
            {data.trustChecklist.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="font-medium text-slate-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
