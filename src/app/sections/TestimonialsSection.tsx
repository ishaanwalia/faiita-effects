"use client";

import { useState, useEffect } from "react";
import { ScrollReveal } from "@/app/components/ScrollReveal";
import { mockTestimonials } from "@/lib/mock-data";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % mockTestimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const t = mockTestimonials[active];

  return (
    <section className="py-24 bg-[#0A0A0F] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00D4AA]/5 rounded-full blur-[200px]" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#00D4AA]/10 text-[#00D4AA] text-xs font-medium mb-8 border border-[#00D4AA]/20">
            Testimonials
          </span>
        </ScrollReveal>

        <div className="relative min-h-[280px] flex items-center justify-center">
          {mockTestimonials.map((testimonial, i) => (
            <div
              key={testimonial.id}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                i === active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
              }`}
            >
              <div className="text-6xl text-[#00D4AA]/20 font-serif leading-none mb-6">&ldquo;</div>
              <blockquote className="text-2xl md:text-3xl text-white/80 font-light leading-relaxed max-w-3xl mb-8">
                {testimonial.quote}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#00D4AA]/20 flex items-center justify-center text-[#00D4AA] font-bold">
                  {testimonial.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="text-left">
                  <div className="text-white font-medium">{testimonial.name}</div>
                  <div className="text-white/40 text-sm">{testimonial.role}, {testimonial.state}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {mockTestimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === active ? "bg-[#00D4AA] w-6" : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}