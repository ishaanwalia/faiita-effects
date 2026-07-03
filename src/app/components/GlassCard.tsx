"use client";

import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-6",
        hover && "transition-all duration-500 hover:bg-white/15 hover:border-white/30 hover:shadow-3xl hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}