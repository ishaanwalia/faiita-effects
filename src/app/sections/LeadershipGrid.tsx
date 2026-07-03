"use client";

import { GlassCard } from "@/app/components/GlassCard";
import { ScrollReveal } from "@/app/components/ScrollReveal";
import { mockLeadership } from "@/lib/mock-data";
import { Users } from "lucide-react";

export function LeadershipGrid() {
  return (
    <section className="py-20 bg-[#0A2540] relative overflow-hidden">
      {/* Background particle effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#FF9933] rounded-full blur-[128px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF9933]/20 text-[#FF9933] text-sm font-medium mb-4">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              National Leadership
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Meet the leaders driving FAIITA's mission to unite India's IT fraternity
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockLeadership.map((leader, i) => (
            <ScrollReveal key={leader.name} delay={i * 100}>
              <GlassCard className="text-center p-8 h-full flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF9933] to-[#e68a2e] flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg shadow-[#FF9933]/20">
                  {leader.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {leader.name}
                </h3>
                <p className="text-[#FF9933] text-sm font-medium mb-2">
                  {leader.role}
                </p>
                <p className="text-white/50 text-sm mb-3">{leader.state}</p>
                <p className="text-white/40 text-xs leading-relaxed">
                  {leader.bio}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-white/50 text-sm">
              <Users className="w-4 h-4" />
              <span>Representing {mockLeadership.length} national leadership positions</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}