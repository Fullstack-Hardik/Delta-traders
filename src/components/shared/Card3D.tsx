import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Card3DProps {
  children: ReactNode;
  className?: string;
}

export function Card3D({ children, className }: Card3DProps) {
  return (
    <div className={cn("card-3d relative", className)}>
      {children}
    </div>
  );
}
