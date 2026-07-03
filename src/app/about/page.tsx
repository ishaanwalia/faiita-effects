"use client";

import { ScrollReveal } from "@/app/components/ScrollReveal";
import { GlobeSection } from "@/app/sections/GlobeSection";
import { mockTimeline, mockPartners } from "@/lib/mock-data";
import { Shield, Users, Target, Heart } from "lucide-react";

const values = [
  { icon: Shield, title: "Unity", desc: "Bringing together IT associations across all states under one national federation." },
  { icon: Target, title: "Advocacy", desc: "Representing the collective voice of IT channel partners before government and regulators." },
  { icon: Heart, title: "Integrity", desc: "Operating with transparency, ethics, and unwavering commitment to our members." },
  { icon: Users, title: "Growth", desc: "Empowering IT dealers through knowledge, networking, and business opportunities." },
];

export default function AboutPage() {
  return (
    <main className="bg-[#0A0A0F]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 text-center">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00D4AA]/10 text-[#00D4AA] text-xs font-medium mb-6 border border-[#00D4AA]/20">
              About FAIITA
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-[-0.03em] mb-4">
              Three Decades of <span className="text-[#00D4AA]">Unity</span>
            </h1>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Uniting India's IT fraternity since 1990 — representing 50,000+ channel partners across 25 states.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 3D Globe */}
      <GlobeSection />

      {/* Mission */}
      <section className="py-24 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <p className="text-3xl md:text-4xl text-white/80 font-light leading-relaxed max-w-4xl mx-auto">
              &ldquo;To represent, protect, and advance the interests of India's IT dealer community through unified advocacy, knowledge sharing, and collective growth.&rdquo;
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#0A0A0F] relative">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00D4AA]/10 text-[#00D4AA] text-xs font-medium mb-8 border border-[#00D4AA]/20">
              Our Journey
            </span>
            <h2 className="text-4xl font-bold text-white mb-16">Timeline</h2>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
            {mockTimeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 100}>
                <div className={`relative flex items-start gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="hidden md:block flex-1 text-right">
                    {i % 2 === 0 && (
                      <>
                        <div className="text-3xl font-bold text-[#00D4AA]">{item.year}</div>
                        <div className="text-white font-semibold mt-1">{item.event}</div>
                        <div className="text-white/40 text-sm mt-1">{item.description}</div>
                      </>
                    )}
                  </div>
                  <div className="relative flex-shrink-0 w-8 h-8 rounded-full bg-[#00D4AA] flex items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-[#0A0A0F]" />
                  </div>
                  <div className="flex-1 md:hidden">
                    <div className="text-2xl font-bold text-[#00D4AA]">{item.year}</div>
                    <div className="text-white font-semibold mt-1">{item.event}</div>
                    <div className="text-white/40 text-sm mt-1">{item.description}</div>
                  </div>
                  <div className="hidden md:block flex-1">
                    {i % 2 !== 0 && (
                      <>
                        <div className="text-3xl font-bold text-[#00D4AA]">{item.year}</div>
                        <div className="text-white font-semibold mt-1">{item.event}</div>
                        <div className="text-white/40 text-sm mt-1">{item.description}</div>
                      </>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#00D4AA]/10 text-[#00D4AA] text-xs font-medium mb-4 border border-[#00D4AA]/20">
                Our Values
              </span>
              <h2 className="text-4xl font-bold text-white">What We Stand For</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-500 group">
                  <div className="w-12 h-12 rounded-xl bg-[#00D4AA]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <v.icon className="w-6 h-6 text-[#00D4AA]" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{v.title}</div>
                  <div className="text-white/40 text-sm leading-relaxed">{v.desc}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-[#0A0A0F] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#00D4AA]/10 text-[#00D4AA] text-xs font-medium mb-4 border border-[#00D4AA]/20">
                Partners
              </span>
              <h2 className="text-4xl font-bold text-white">Our Technology Partners</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mockPartners.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 50}>
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center hover:bg-white/[0.06] transition-all duration-300 grayscale hover:grayscale-0">
                  <span className="text-white/30 text-lg font-bold tracking-wider">{p.name}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}