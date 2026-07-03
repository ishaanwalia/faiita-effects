"use client";

import { useState } from "react";
import { ScrollReveal } from "@/app/components/ScrollReveal";
import { GlassCard } from "@/app/components/GlassCard";
import { mockMembershipTiers, mockFAQ } from "@/lib/mock-data";
import { Check, ArrowRight, ChevronDown } from "lucide-react";

export default function MembershipPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <main className="bg-[#0A0A0F]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 text-center">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00D4AA]/10 text-[#00D4AA] text-xs font-medium mb-6 border border-[#00D4AA]/20">
              Membership
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-[-0.03em] mb-4">
              Join the <span className="text-[#00D4AA]">Federation</span>
            </h1>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Choose the tier that fits your association and unlock the power of a unified national voice.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Tiers */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockMembershipTiers.map((tier, i) => (
              <ScrollReveal key={tier.id} delay={i * 100}>
                <GlassCard
                  className={`p-8 flex flex-col h-full relative ${
                    tier.highlighted ? "border-[#00D4AA]/40 ring-1 ring-[#00D4AA]/20" : ""
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00D4AA] text-[#0A0A0F] text-xs font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="text-3xl font-bold text-[#00D4AA] mb-1">{tier.price}</div>
                    <p className="text-white/40 text-sm">{tier.period}</p>
                    <p className="text-white/40 text-xs mt-2">{tier.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#00D4AA]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#00D4AA]" />
                        </div>
                        <span className="text-white/60 text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      tier.highlighted
                        ? "bg-[#00D4AA] text-[#0A0A0F] hover:bg-[#00D4AA]/90"
                        : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="w-3.5 h-3.5 inline ml-1.5" />
                  </button>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-2">Frequently Asked Questions</h2>
              <p className="text-white/40">Everything you need to know about FAIITA membership</p>
            </div>
          </ScrollReveal>
          <div className="space-y-3">
            {mockFAQ.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="text-white font-medium text-sm">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-white/40 transition-transform ${openFAQ === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFAQ === i && (
                    <div className="px-5 pb-5">
                      <p className="text-white/40 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}