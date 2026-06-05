import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FloatingBadgeProps {
  children: ReactNode;
  className?: string;
  delayIndex?: 1 | 2 | 3;
}

export function FloatingBadge({ children, className, delayIndex = 1 }: FloatingBadgeProps) {
  return (
    <div
      className={cn(
        "floating-badge absolute inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold shadow-xl border border-gray-100 text-brand-dark",
        delayIndex === 2 && "[&:nth-child(2)]",
        delayIndex === 3 && "[&:nth-child(3)]",
        className
      )}
    >
      {children}
    </div>
  );
}
