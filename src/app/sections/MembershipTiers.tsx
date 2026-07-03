"use client";

import Link from "next/link";
import { ScrollReveal } from "@/app/components/ScrollReveal";
import { GlassCard } from "@/app/components/GlassCard";
import { mockMembershipTiers } from "@/lib/mock-data";
import { Check, ArrowRight } from "lucide-react";

export function MembershipTiers() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF9933]/10 text-[#FF9933] text-sm font-medium mb-4">
              Membership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Choose Your Membership Tier
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select the tier that best fits your association's needs and unlock
              exclusive benefits
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {mockMembershipTiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 150}>
              <GlassCard
                className={`p-8 flex flex-col h-full ${
                  i === 1
                    ? "border-[#FF9933]/40 bg-white/15 ring-2 ring-[#FF9933]/20 relative"
                    : ""
                }`}
                hover={true}
              >
                {i === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF9933] text-white text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {tier.name}
                  </h3>
                  <div className="text-3xl font-bold text-[#FF9933] mb-1">
                    {tier.price}
                  </div>
                  <p className="text-white/40 text-sm">per year</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#FF9933]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#FF9933]" />
                      </div>
                      <span className="text-white/70 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/membership">
                  <button
                    className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      i === 1
                        ? "bg-[#FF9933] text-white hover:bg-[#e68a2e] hover:shadow-lg hover:shadow-[#FF9933]/25"
                        : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-3.5 h-3.5 inline ml-1.5" />
                  </button>
                </Link>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}