"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  delay?: number;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className = "",
  from = { y: 40, opacity: 0 },
  to = { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
  delay = 0,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(el, from, {
        ...to,
        scrollTrigger: {
          trigger: el,
          start: `top bottom-=${(1 - threshold) * 100}%`,
          toggleActions: "play none none reverse",
        },
        delay,
      });
    }, el);

    return () => ctx.revert();
  }, [from, to, delay, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}