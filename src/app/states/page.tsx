"use client";

import { useState } from "react";
import { ScrollReveal } from "@/app/components/ScrollReveal";
import { IndiaMapSection } from "@/app/sections/IndiaMapSection";
import { mockStates } from "@/lib/mock-data";
import { Search, Users, Phone, Mail, Calendar } from "lucide-react";

export default function StatesPage() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "members">("name");

  const filtered = mockStates
    .filter((s) => s.name.toLowerCase().includes(search.toLowerCase()) || s.association.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => sortBy === "name" ? a.name.localeCompare(b.name) : b.members - a.members);

  return (
    <main className="bg-[#0A0A0F]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 text-center">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00D4AA]/10 text-[#00D4AA] text-xs font-medium mb-6 border border-[#00D4AA]/20">
              State Associations
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-[-0.03em] mb-4">
              <span className="text-[#00D4AA]">25 States</span>, One Federation
            </h1>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Click on any state to explore its association details, leadership, and member count.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive Map */}
      <IndiaMapSection />

      {/* State List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
              <h2 className="text-3xl font-bold text-white">All State Associations</h2>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input
                    type="text"
                    placeholder="Search states..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-64 pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-[#00D4AA]/30"
                  />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "name" | "members")}
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#00D4AA]/30"
                >
                  <option value="name" className="bg-[#0A0A0F]">Sort by Name</option>
                  <option value="members" className="bg-[#0A0A0F]">Sort by Members</option>
                </select>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((state, i) => (
              <ScrollReveal key={state.code} delay={i * 50}>
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-[#00D4AA]/20 transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-white font-bold">{state.name}</h3>
                      <p className="text-white/40 text-sm">{state.association}</p>
                    </div>
                    <div className="flex items-center gap-1 text-[#00D4AA] text-sm font-medium">
                      <Users className="w-3.5 h-3.5" />
                      {state.members.toLocaleString("en-IN")}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white/30 text-xs mb-2">
                    <Calendar className="w-3 h-3" />
                    Est. {state.established}
                  </div>
                  <div className="flex items-center gap-2 text-white/30 text-xs mb-2">
                    <Phone className="w-3 h-3" />
                    {state.contact}
                  </div>
                  <div className="flex items-center gap-2 text-white/30 text-xs">
                    <Mail className="w-3 h-3" />
                    {state.email}
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/5">
                    <span className="text-white/50 text-xs">President: </span>
                    <span className="text-white/70 text-xs font-medium">{state.president}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}