"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { mockStats } from "@/lib/mock-data";
import { ArrowRight, ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "cubic-bezier(0.16, 1, 0.3, 1)", duration: 1 },
      });

      tl.fromTo(labelRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
        .fromTo(headlineRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.3")
        .fromTo(subtitleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
        .fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3")
        .fromTo(scrollRef.current, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.2");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0F]"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00D4AA]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#FFD700]/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span
          ref={labelRef}
          className="inline-block px-4 py-1.5 rounded-full bg-[#00D4AA]/10 text-[#00D4AA] text-xs font-medium mb-6 border border-[#00D4AA]/20"
        >
          Federation of All India Information Technology Associations
        </span>

        <h1
          ref={headlineRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-[-0.03em] mb-6"
        >
          <span className="block">Uniting India's</span>
          <span className="block text-[#00D4AA]">IT Fraternity</span>
          <span className="block">Since 1990</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto mb-10 font-light"
        >
          {mockStats.dealers.toLocaleString("en-IN")}+ dealers. {mockStats.states} states.{" "}
          {mockStats.associations} associations.{" "}
          <span className="text-white/60">One voice.</span>
        </p>

        <div ref={ctaRef} className="flex flex-wrap justify-center gap-4">
          <Link
            href="/states"
            className="group inline-flex items-center gap-2 bg-[#00D4AA] text-[#0A0A0F] h-12 px-8 rounded-full font-semibold text-sm hover:bg-[#00D4AA]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#00D4AA]/25"
          >
            Explore Our Network
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 border border-white/20 text-white/70 h-12 px-8 rounded-full font-medium text-sm hover:bg-white/5 hover:text-white transition-all duration-300"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/20 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-white/30 animate-bounce" />
      </div>
    </section>
  );
}