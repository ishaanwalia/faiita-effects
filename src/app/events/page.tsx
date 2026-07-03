"use client";

import { ScrollReveal } from "@/app/components/ScrollReveal";
import { EventBooking } from "@/app/sections/EventBooking";
import { mockEvents } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";
import { Calendar, MapPin, Users } from "lucide-react";

export default function EventsPage() {
  return (
    <main className="bg-[#0A0A0F]">
      <section className="relative pt-32 pb-20 text-center">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#00D4AA]/10 text-[#00D4AA] text-xs font-medium mb-6 border border-[#00D4AA]/20">
              Events
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-[-0.03em] mb-4">
              Learn. Network. <span className="text-[#00D4AA]">Grow.</span>
            </h1>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Connect with the community at our upcoming events across India.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <EventBooking />

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-10">All Events</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockEvents.map((event, i) => (
              <ScrollReveal key={event.id} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">{event.title}</h3>
                      <p className="text-white/40 text-sm">{event.description}</p>
                    </div>
                    <span className="text-xs font-medium text-[#00D4AA] bg-[#00D4AA]/10 px-3 py-1 rounded-full whitespace-nowrap">
                      {event.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-white/30 text-sm">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(event.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {event.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" />
                      {event.registered}/{event.capacity}
                    </span>
                  </div>
                  <div className="mt-4 w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#00D4AA] transition-all"
                      style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                    />
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