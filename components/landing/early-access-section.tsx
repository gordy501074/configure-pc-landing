"use client"

import { useState, type FormEvent } from "react"
import { CheckCircle2 } from "lucide-react"
import type { Audience, AudienceContent } from "@/lib/landing-content"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function EarlyAccessSection({
  audience,
  data,
}: {
  audience: Audience
  data: AudienceContent
}) {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!EMAIL_REGEX.test(email.trim())) {
      setError("Укажите корректный email")
      return
    }
    setError("")
    setSubmitted(true)
    console.log({ audience, email: email.trim() })
  }

  return (
    <section id="early-access" className="scroll-mt-20 px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-violet-600 p-1 shadow-xl">
        <div className="rounded-[calc(1.5rem-4px)] bg-white p-8 sm:p-12">
          {submitted ? (
            <div className="flex flex-col items-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
              </span>
              <p className="mt-5 text-xl font-semibold text-slate-900">{data.successText}</p>
            </div>
          ) : (
            <>
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  {data.formTitle}
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">{data.formText}</p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="mx-auto mt-8 max-w-md">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    id="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (error) setError("")
                    }}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "email-error" : undefined}
                    className="w-full flex-1 rounded-full border border-slate-200 bg-white px-5 py-3 text-base text-slate-900 placeholder:text-slate-400 focus-visible:border-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-full bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    {data.formButton}
                  </button>
                </div>
                {error && (
                  <p id="email-error" role="alert" className="mt-2 pl-1 text-sm text-red-600">
                    {error}
                  </p>
                )}
                <p className="mt-4 text-center text-sm text-slate-500">{data.formMicrocopy}</p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
