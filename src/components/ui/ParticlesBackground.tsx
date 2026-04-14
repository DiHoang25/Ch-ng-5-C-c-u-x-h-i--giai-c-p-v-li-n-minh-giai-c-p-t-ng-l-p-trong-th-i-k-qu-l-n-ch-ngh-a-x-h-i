"use client";

import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";

export function ParticlesBackground() {
  const reducedMotion = useReducedMotion();

  const particles = useMemo(() => {
    return Array.from({ length: 18 }, (_, index) => ({
      id: index,
      left: `${(index * 17) % 100}%`,
      delay: `${(index % 7) * 1.6}s`,
      duration: `${12 + (index % 5) * 4}s`,
      size: `${5 + (index % 4) * 2}px`
    }));
  }, []);

  if (reducedMotion) {
    return null;
  }

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.14),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(45,212,191,0.14),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(251,191,36,0.1),transparent_34%)]" />
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            width: particle.size,
            height: particle.size
          }}
        />
      ))}
    </div>
  );
}
