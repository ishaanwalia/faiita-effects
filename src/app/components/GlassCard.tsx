"use client";

import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function GlassCard({
  children,
  className = "",
  hover = true,
  glow = false,
}: GlassCardProps) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl
        bg-white/[0.03] backdrop-blur-xl
        border border-white/[0.08]
        ${hover ? "hover:-translate-y-1 hover:border-[#00D4AA]/30 transition-all duration-300" : ""}
        ${glow ? "after:absolute after:inset-0 after:bg-gradient-to-br after:from-[#00D4AA]/10 after:to-transparent after:opacity-0 hover:after:opacity-100 after:transition-opacity" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}