"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { value: 50000, suffix: "+", label: "Dealers" },
  { value: 25, suffix: "", label: "States" },
  { value: 28, suffix: "", label: "Associations" },
  { value: 34, suffix: "", label: "Years of Unity" },
  { value: 156, suffix: "+", label: "Events Hosted" },
];

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (isInView) {
      setStartCount(true);
    }
  }, [isInView]);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-[#0A0A0F]">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-[#00D4AA]/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#00D4AA] mb-2 font-mono">
                {startCount ? (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    delay={index * 0.2}
                    suffix={stat.suffix}
                    separator=","
                  />
                ) : (
                  <span>0</span>
                )}
              </div>
              <div className="text-xs md:text-sm text-[#A0A0B0] uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}