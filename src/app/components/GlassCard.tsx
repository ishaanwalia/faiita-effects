// src/app/components/GlassCard.tsx
"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  padding?: "sm" | "md" | "lg" | "xl";
  asMotion?: boolean;
  onClick?: () => void;
}

const paddingMap = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-10",
};

export function GlassCard({
  children,
  className,
  hover = true,
  glow = false,
  padding = "md",
  asMotion = true,
  onClick,
}: GlassCardProps) {
  const baseClasses = cn(
    "relative overflow-hidden rounded-2xl",
    "bg-white/[0.03] backdrop-blur-xl",
    "border border-white/[0.08]",
    paddingMap[padding],
    hover && "transition-all duration-300 hover:-translate-y-1 hover:border-[#00D4AA]/30 hover:bg-white/[0.05]",
    glow && "hover:shadow-[0_0_30px_rgba(0,212,170,0.15)]",
    onClick && "cursor-pointer",
    className
  );

  if (asMotion) {
    return (
      <motion.div
        className={baseClasses}
        whileTap={onClick ? { scale: 0.98 } : undefined}
        onClick={onClick}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        {children}
      </motion.div>
    );
  }

  return (
    <div className={baseClasses} onClick={onClick}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      {children}
    </div>
  );
}