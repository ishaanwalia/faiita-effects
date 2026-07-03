"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionDividerProps {
  variant?: "wave" | "angle" | "curve";
  color?: string;
  flip?: boolean;
}

export function SectionDivider({
  variant = "wave",
  color = "#0A2540",
  flip = false,
}: SectionDividerProps) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: path,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(path, {
            strokeDashoffset: length * (1 - progress),
          });
        },
      });
    }, path);

    return () => ctx.revert();
  }, []);

  const wavePath = flip
    ? "M0,32 C16,48 32,16 48,32 C64,48 80,16 96,32 C112,48 128,16 144,32 C160,48 176,16 192,32 L192,0 L0,0 Z"
    : "M0,0 C16,16 32,48 48,32 C64,16 80,48 96,32 C112,16 128,48 144,32 C160,16 176,48 192,32 L192,0 L0,0 Z";

  const anglePath = flip
    ? "M0,48 L96,0 L192,48 L192,0 L0,0 Z"
    : "M0,0 L96,48 L192,0 L192,0 L0,0 Z";

  const curvePath = flip
    ? "M0,0 C64,48 128,48 192,0 L192,0 L0,0 Z"
    : "M0,48 C64,0 128,0 192,48 L192,0 L0,0 Z";

  const getPath = () => {
    switch (variant) {
      case "wave": return wavePath;
      case "angle": return anglePath;
      case "curve": return curvePath;
    }
  };

  return (
    <div className="relative w-full h-16 md:h-24 overflow-hidden -mb-1">
      <svg
        viewBox="0 0 192 48"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <path
          ref={pathRef}
          d={getPath()}
          fill={color}
          stroke={color}
          strokeWidth={0.5}
        />
      </svg>
    </div>
  );
}