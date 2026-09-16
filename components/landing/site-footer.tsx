import { Cpu } from "lucide-react"
import { PROJECT_NAME } from "@/lib/landing-content"

const footerLinks = [
  { label: "Возможности", href: "#benefits" },
  { label: "Как это работает", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 text-white">
                <Cpu className="h-4 w-4" aria-hidden="true" />
              </span>
              {PROJECT_NAME}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Продукт находится на стадии MVP. Страница предназначена для сбора заявок на ранний
              доступ.
            </p>
          </div>

          <nav aria-label="Навигация в футере" className="flex flex-col gap-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-600 transition-colors hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-10 border-t border-slate-100 pt-6 text-sm text-slate-500">
          {`© ${PROJECT_NAME}. Ранний доступ.`}
        </p>
      </div>
    </footer>
  )
}
