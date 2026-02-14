"use client"

import { useEffect, useState } from "react"

interface FloatingHeart {
  id: number
  x: number
  size: number
  delay: number
  duration: number
  opacity: number
  color: string
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([])

  useEffect(() => {
    const colors = ["#c62828", "#e53935", "#ef5350", "#ec407a", "#f06292", "#ad1457"]
    const items: FloatingHeart[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 10 + Math.random() * 18,
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 8,
      opacity: 0.15 + Math.random() * 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setHearts(items)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[7]" aria-hidden="true">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute"
          style={{
            left: `${h.x}%`,
            bottom: "-10%",
            opacity: h.opacity,
            animation: `heartRise ${h.duration}s ease-in-out ${h.delay}s infinite`,
          }}
        >
          <svg width={h.size} height={h.size} viewBox="0 0 24 24" fill={h.color}>
            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" />
          </svg>
        </div>
      ))}

      <style jsx>{`
        @keyframes heartRise {
          0% {
            transform: translateY(0) scale(0.5) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateY(-50vh) scale(1) rotate(10deg);
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-110vh) scale(0.8) rotate(-10deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
