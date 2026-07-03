"use client";

import { useState } from "react";
import { ScrollReveal } from "@/app/components/ScrollReveal";
import { GlassCard } from "@/app/components/GlassCard";
import { MemberPortal } from "@/app/sections/MemberPortal";

export default function PortalPage() {
  return (
    <main className="bg-[#0A0A0F]">
      <section className="relative pt-32 pb-20 text-center">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00D4AA]/10 text-[#00D4AA] text-xs font-medium mb-6 border border-[#00D4AA]/20">
              Member Portal
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-[-0.03em] mb-4">
              Association <span className="text-[#00D4AA]">Portal</span>
            </h1>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Sign in to access exclusive resources, manage your membership, and connect with fellow associations.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <MemberPortal />
    </main>
  );
}