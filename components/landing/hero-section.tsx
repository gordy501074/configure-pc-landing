"use client"

import { ArrowRight, Check, Sparkles } from "lucide-react"
import type { Audience, AudienceContent } from "@/lib/landing-content"
import { AudienceSwitch } from "./audience-switch"
import { HeroCard } from "./hero-card"

export function HeroSection({
  audience,
  onAudienceChange,
  data,
}: {
  audience: Audience
  onAudienceChange: (a: Audience) => void
  data: AudienceContent
}) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/80 via-white to-white"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:pb-24 lg:pt-20">
        <div className="flex justify-center lg:justify-start">
          <AudienceSwitch audience={audience} onChange={onAudienceChange} />
        </div>

        <div className="mt-10 grid items-center gap-12 lg:mt-14 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              {data.badge}
            </span>

            <h1 className="mt-5 text-pretty text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {data.h1}
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              {data.h2}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#early-access"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                {data.primaryCta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Как это работает
              </a>
            </div>

            <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {data.heroBullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-6">
            <HeroCard ctaLabel={data.primaryCta} />
          </div>
        </div>
      </div>
    </section>
  )
}
