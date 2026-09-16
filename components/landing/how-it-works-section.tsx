import type { AudienceContent } from "@/lib/landing-content"

export function HowItWorksSection({ data }: { data: AudienceContent }) {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {data.howTitle}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{data.howSubtitle}</p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {data.steps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-base font-semibold text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
