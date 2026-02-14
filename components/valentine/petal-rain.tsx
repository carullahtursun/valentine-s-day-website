"use client"

import { memo, useEffect, useId, useState } from "react"

interface Petal {
  id: number
  x: number
  delay: number
  duration: number
  size: number
  rotation: number
  swayAmount: number
  swayDuration: number
  opacity: number
  type: "rose" | "peony"
}

function PetalRainInner() {
  const uid = useId()
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    const items: Petal[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 8 + Math.random() * 10,
      size: 12 + Math.random() * 16,
      rotation: Math.random() * 360,
      swayAmount: 30 + Math.random() * 60,
      swayDuration: 2 + Math.random() * 2,
      opacity: 0.4 + Math.random() * 0.5,
      type: Math.random() > 0.4 ? "rose" : "peony",
    }))
    setPetals(items)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
      <svg className="absolute w-0 h-0">
        <defs>
          {petals.map((p) =>
            p.type === "rose" ? (
              <linearGradient key={`g-${p.id}`} id={`${uid}-pg-${p.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef5350" stopOpacity="0.95" />
                <stop offset="60%" stopColor="#c62828" />
                <stop offset="100%" stopColor="#8e0000" stopOpacity="0.8" />
              </linearGradient>
            ) : (
              <linearGradient key={`g-${p.id}`} id={`${uid}-ppg-${p.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f8bbd0" stopOpacity="0.95" />
                <stop offset="60%" stopColor="#ec407a" />
                <stop offset="100%" stopColor="#c2185b" stopOpacity="0.8" />
              </linearGradient>
            )
          )}
        </defs>
      </svg>

      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute petal-container"
          style={{
            left: `${p.x}%`,
            top: "-5%",
            opacity: p.opacity,
            animationName: "petalFall",
            animationDuration: `${p.duration}s`,
            animationTimingFunction: "linear",
            animationDelay: `${p.delay}s`,
            animationIterationCount: "infinite",
          }}
        >
          <div
            className="petal-sway"
            style={{
              animationName: "petalSway",
              animationDuration: `${p.swayDuration}s`,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              animationDirection: "alternate",
              transform: `rotate(${p.rotation}deg)`,
            }}
          >
            <svg width={p.size} height={p.size * 1.2} viewBox="0 0 20 24" fill="none">
              {p.type === "rose" ? (
                <>
                  <path
                    d="M10 0 C14 4, 20 10, 18 16 C16 22, 12 24, 10 24 C8 24, 4 22, 2 16 C0 10, 6 4, 10 0 Z"
                    fill={`url(#${uid}-pg-${p.id})`}
                  />
                  <path d="M10 3 C10 8, 11 14, 10 21" stroke="#b71c1c" strokeWidth="0.4" opacity="0.35" fill="none" />
                </>
              ) : (
                <path
                  d="M10 0 C16 3, 20 9, 19 15 C18 20, 14 24, 10 24 C6 24, 2 20, 1 15 C0 9, 4 3, 10 0 Z"
                  fill={`url(#${uid}-ppg-${p.id})`}
                />
              )}
            </svg>
          </div>
        </div>
      ))}

      <style jsx global>{`
        @keyframes petalFall {
          0% {
            transform: translateY(-5vh) rotate(0deg);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          85% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(105vh) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes petalSway {
          0% {
            transform: translateX(-30px) rotate(-15deg);
          }
          100% {
            transform: translateX(30px) rotate(15deg);
          }
        }
      `}</style>
    </div>
  )
}

export const PetalRain = memo(PetalRainInner)
