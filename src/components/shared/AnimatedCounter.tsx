"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function AnimatedCounter({ value, suffix = "", prefix = "", duration = 2 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      
      setCount(Math.floor(easeOutQuart * value));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration, isInView]);

  return (
    <span ref={ref} className="font-[family-name:var(--font-display)] tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}
