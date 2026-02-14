"use client"

import { useEffect, useState } from "react"

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
  color: string
}

export function SparkleField() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const colors = ["#ffd54f", "#fff9c4", "#ffe0b2", "#ffccbc", "#f8bbd0", "#ffffff"]
    const items: Sparkle[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 5,
      delay: Math.random() * 6,
      duration: 2 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setSparkles(items)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[8]" aria-hidden="true">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            backgroundColor: s.color,
            boxShadow: `0 0 ${s.size * 3}px ${s.color}`,
            animation: `sparkleAnim ${s.duration}s ease-in-out ${s.delay}s infinite`,
            opacity: 0,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes sparkleAnim {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
          }
        }
      `}</style>
    </div>
  )
}
