import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "green";
}

export function GlassCard({ children, className, variant = "default" }: GlassCardProps) {
  return (
    <div
      className={cn(
        variant === "green" ? "glass-card-green" : "glass-card",
        className
      )}
    >
      {children}
    </div>
  );
}
