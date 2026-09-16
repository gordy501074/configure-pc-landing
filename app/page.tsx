"use client"

import { useEffect, useState } from "react"
import { content, type Audience } from "@/lib/landing-content"
import { SiteHeader } from "@/components/landing/site-header"
import { HeroSection } from "@/components/landing/hero-section"
import { BenefitsSection } from "@/components/landing/benefits-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { TrustSection } from "@/components/landing/trust-section"
import { FaqSection } from "@/components/landing/faq-section"
import { EarlyAccessSection } from "@/components/landing/early-access-section"
import { SiteFooter } from "@/components/landing/site-footer"

export default function Page() {
  const [audience, setAudience] = useState<Audience>("b2c")
  const data = content[audience]

  useEffect(() => {
    document.title = data.documentTitle
  }, [data.documentTitle])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <main>
        <HeroSection audience={audience} onAudienceChange={setAudience} data={data} />
        <BenefitsSection data={data} />
        <HowItWorksSection data={data} />
        <TrustSection data={data} />
        <FaqSection />
        <EarlyAccessSection audience={audience} data={data} />
      </main>
      <SiteFooter />
    </div>
  )
}
