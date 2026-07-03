"use client";

import { ScrollReveal } from "@/app/components/ScrollReveal";
import { GlassCard } from "@/app/components/GlassCard";
import { AnimatedCounter } from "@/components/animated-counter";
import { FileText, Clock, TrendingUp, CheckCircle, AlertTriangle, Activity } from "lucide-react";

const policyUpdates = [
  {
    title: "GST Council Meeting - July 2026",
    status: "live",
    summary: "FAIITA submits recommendation for IT hardware GST reduction from 18% to 12%",
    date: "2026-07-15",
    impact: "High",
  },
  {
    title: "CERT-In Directive 2026",
    status: "resolved",
    summary: "Compliance deadline extended for IT channel partners after FAIITA representation",
    date: "2026-06-28",
    impact: "Medium",
  },
  {
    title: "Digital India 2.0 Framework",
    status: "live",
    summary: "New public procurement policy favors domestic IT channel partners",
    date: "2026-06-20",
    impact: "High",
  },
  {
    title: "State IT Policy Alignment",
    status: "upcoming",
    summary: "12 states align IT policies with central incentives for channel partners",
    date: "2026-08-01",
    impact: "Medium",
  },
];

const liveUpdates = policyUpdates.filter((p) => p.status === "live");
const resolvedCount = policyUpdates.filter((p) => p.status === "resolved").length;
const totalPolicies = policyUpdates.length;
const highImpact = policyUpdates.filter((p) => p.impact === "High").length;

export function PolicyDashboard() {
  return (
    <section className="py-20 bg-[#0A2540] relative overflow-hidden">
      {/* Particle background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#FF9933] rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#2d8a4e] rounded-full blur-[128px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF9933]/20 text-[#FF9933] text-sm font-medium mb-4">
              Policy Dashboard
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advocacy in Action
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Real-time policy updates and advocacy progress for India's IT channel partners
            </p>
          </div>
        </ScrollReveal>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <ScrollReveal delay={0}>
            <GlassCard className="text-center p-6" hover={false}>
              <div className="w-10 h-10 mx-auto rounded-lg bg-[#FF9933]/20 flex items-center justify-center mb-3">
                <FileText className="w-5 h-5 text-[#FF9933]" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                <AnimatedCounter target={totalPolicies} duration={1.5} />
              </div>
              <div className="text-white/50 text-xs uppercase tracking-wider">
                Active Policies
              </div>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <GlassCard className="text-center p-6" hover={false}>
              <div className="w-10 h-10 mx-auto rounded-lg bg-emerald-500/20 flex items-center justify-center mb-3">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                <AnimatedCounter target={resolvedCount} duration={1.5} />
              </div>
              <div className="text-white/50 text-xs uppercase tracking-wider">
                Resolved
              </div>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <GlassCard className="text-center p-6" hover={false}>
              <div className="w-10 h-10 mx-auto rounded-lg bg-amber-500/20 flex items-center justify-center mb-3">
                <Activity className="w-5 h-5 text-amber-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                <AnimatedCounter target={liveUpdates.length} duration={1.5} />
              </div>
              <div className="text-white/50 text-xs uppercase tracking-wider">
                Live Now
              </div>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <GlassCard className="text-center p-6" hover={false}>
              <div className="w-10 h-10 mx-auto rounded-lg bg-red-500/20 flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5 text-red-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                <AnimatedCounter target={highImpact} duration={1.5} />
              </div>
              <div className="text-white/50 text-xs uppercase tracking-wider">
                High Impact
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>

        {/* Policy Updates List */}
        <ScrollReveal delay={200}>
          <div className="space-y-4">
            {policyUpdates.map((update, i) => (
              <ScrollReveal key={update.title} delay={i * 100}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    {/* Status badge */}
                    <div className="flex-shrink-0 mt-1">
                      {update.status === "live" ? (
                        <span className="flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          LIVE
                        </span>
                      ) : update.status === "resolved" ? (
                        <span className="flex items-center gap-1.5 bg-blue-500/20 text-blue-400 text-xs font-semibold px-2.5 py-1 rounded-full">
                          <CheckCircle className="w-3 h-3" />
                          RESOLVED
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5 bg-gray-500/20 text-gray-400 text-xs font-semibold px-2.5 py-1 rounded-full">
                          <Clock className="w-3 h-3" />
                          UPCOMING
                        </span>
                      )}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1">
                        {update.title}
                      </h3>
                      <p className="text-white/60 text-sm">{update.summary}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-white/30 text-xs">
                          {update.date}
                        </span>
                        <span
                          className={`text-xs font-medium ${
                            update.impact === "High"
                              ? "text-red-400"
                              : update.impact === "Medium"
                              ? "text-amber-400"
                              : "text-white/40"
                          }`}
                        >
                          {update.impact} Impact
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}