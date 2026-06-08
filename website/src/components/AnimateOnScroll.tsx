"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  animation?: string;
  delay?: number;
}

export default function AnimateOnScroll({
  children,
  className = "",
  animation = "animate-slide-up",
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animation : "opacity-0"}`}
      style={{ animationDelay: isVisible ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
