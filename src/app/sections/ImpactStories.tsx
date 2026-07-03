"use client";

import { ScrollReveal } from "@/app/components/ScrollReveal";
import { ArrowRight, TrendingUp, Users, Building2, Award } from "lucide-react";

const stories = [
  {
    title: "GST Simplification Drive",
    before: "Complex multi-slab GST compliance burdening 50,000+ IT channel partners with 18% tax on most products",
    after: "Simplified GST returns, reduced compliance costs, and successful advocacy for IT hardware tax rationalization",
    impact: "35% reduction in compliance overhead",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Digital India Skilling Initiative",
    before: "Lack of organized training programs for IT channel partners in tier-2 and tier-3 cities",
    after: "Launched nationwide upskilling program reaching 10,000+ partners with certification in cloud, cybersecurity, and AI",
    impact: "10,000+ partners trained across 25 states",
    icon: Users,
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "State Association Federation",
    before: "Isolated state-level IT associations with limited national representation and bargaining power",
    after: "Unified 28 state associations under FAIITA with collective advocacy at central and state government levels",
    impact: "28 associations united nationally",
    icon: Building2,
    color: "from-purple-500 to-violet-600",
  },
  {
    title: "CERT-In Compliance Support",
    before: "Confusion and non-compliance risks due to new cybersecurity directives for IT channel partners",
    after: "Comprehensive compliance framework, workshops, and advisory support for all member associations",
    impact: "90% compliance rate among members",
    icon: Award,
    color: "from-amber-500 to-orange-600",
  },
];

export function ImpactStories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF9933]/10 text-[#FF9933] text-sm font-medium mb-4">
              Impact Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Before & After: FAIITA's Impact
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories of how FAIITA has transformed the IT landscape for channel partners across India
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {stories.map((story, i) => (
            <ScrollReveal key={story.title} delay={i * 100}>
              <div className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  {/* Before */}
                  <div className="lg:col-span-2 p-8 bg-red-50/50 relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                        <span className="text-red-500 font-bold text-lg">×</span>
                      </div>
                      <span className="text-sm font-semibold text-red-500 uppercase tracking-wider">
                        Before
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {story.before}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden lg:flex items-center justify-center relative">
                    <div className="w-12 h-12 rounded-full bg-[#FF9933] flex items-center justify-center shadow-lg shadow-[#FF9933]/20 z-10">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full h-0.5 bg-gradient-to-r from-red-200 via-[#FF9933] to-emerald-200" />
                    </div>
                  </div>

                  {/* After */}
                  <div className="lg:col-span-2 p-8 bg-emerald-50/50 relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <span className="text-emerald-500 font-bold text-lg">✓</span>
                      </div>
                      <span className="text-sm font-semibold text-emerald-500 uppercase tracking-wider">
                        After
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      {story.after}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                      <story.icon className="w-3.5 h-3.5" />
                      {story.impact}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}