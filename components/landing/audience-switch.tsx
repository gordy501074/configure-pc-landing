"use client"

import { Users, Building2 } from "lucide-react"
import type { Audience } from "@/lib/landing-content"

const options: { value: Audience; label: string; Icon: typeof Users }[] = [
  { value: "b2c", label: "Частным покупателям", Icon: Users },
  { value: "b2b", label: "Бизнес-продавцам ПК", Icon: Building2 },
]

export function AudienceSwitch({
  audience,
  onChange,
  className = "",
}: {
  audience: Audience
  onChange: (a: Audience) => void
  className?: string
}) {
  return (
    <div
      role="tablist"
      aria-label="Выбор аудитории"
      className={`inline-flex w-full max-w-md rounded-full border border-slate-200 bg-white p-1 shadow-sm sm:w-auto ${className}`}
    >
      {options.map(({ value, label, Icon }) => {
        const active = audience === value
        return (
          <button
            key={value}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(value)}
            className={`flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 sm:flex-none ${
              active
                ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
            {label}
          </button>
        )
      })}
    </div>
  )
}
