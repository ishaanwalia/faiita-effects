"use client";

import { ScrollReveal } from "@/app/components/ScrollReveal";
import { GlassCard } from "@/app/components/GlassCard";
import { mockLeadership } from "@/lib/mock-data";
import { Mail, Phone } from "lucide-react";

export default function LeadershipPage() {
  return (
    <main className="bg-[#0A0A0F]">
      <section className="relative pt-32 pb-20 text-center">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00D4AA]/10 text-[#00D4AA] text-xs font-medium mb-6 border border-[#00D4AA]/20">
              Leadership
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-[-0.03em] mb-4">
              Our <span className="text-[#00D4AA]">Leadership</span>
            </h1>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Meet the leaders guiding India's IT fraternity toward a unified future.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockLeadership.map((leader, i) => (
              <ScrollReveal key={leader.id} delay={i * 100}>
                <GlassCard className="p-8 text-center h-full flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00D4AA] to-[#00D4AA]/50 flex items-center justify-center text-white text-3xl font-bold mb-5 shadow-lg shadow-[#00D4AA]/20">
                    {leader.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{leader.name}</h3>
                  <p className="text-[#00D4AA] text-sm font-medium mb-1">{leader.role}</p>
                  <p className="text-white/40 text-sm mb-4">{leader.state}</p>
                  <p className="text-white/40 text-sm leading-relaxed mb-6 flex-1">{leader.bio}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#00D4AA]/20 transition-colors cursor-pointer">
                      <Mail className="w-4 h-4 text-white/40" />
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#00D4AA]/20 transition-colors cursor-pointer">
                      <Phone className="w-4 h-4 text-white/40" />
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}