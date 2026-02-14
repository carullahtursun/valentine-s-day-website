"use client"

import { useEffect, useState } from "react"

export function BloomingRose({
  size = 80,
  color = "#c62828",
  delay = 0,
  className = "",
}: {
  size?: number
  color?: string
  delay?: number
  className?: string
}) {
  const [bloomed, setBloomed] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setBloomed(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  const darkColor = color === "#c62828" ? "#8e0000" : "#7b1545"
  const midColor = color === "#c62828" ? "#b71c1c" : "#ad1457"
  const lightColor = color === "#c62828" ? "#ef5350" : "#ec407a"
  const highlightColor = color === "#c62828" ? "#ff8a80" : "#f48fb1"

  return (
    <div className={`${className}`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
        style={{ overflow: "visible" }}
      >
        <defs>
          <radialGradient id={`brg-${color}-${delay}`} cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor={highlightColor} stopOpacity="0.9" />
            <stop offset="30%" stopColor={lightColor} />
            <stop offset="60%" stopColor={color} />
            <stop offset="100%" stopColor={darkColor} />
          </radialGradient>
          <radialGradient id={`bri-${color}-${delay}`} cx="50%" cy="40%" r="35%">
            <stop offset="0%" stopColor={highlightColor} stopOpacity="0.8" />
            <stop offset="100%" stopColor={midColor} />
          </radialGradient>
          <filter id={`brgl-${color}-${delay}`}>
            <feGaussianBlur stdDeviation="3" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Stem - always visible */}
        <path d="M60 100 C60 100, 58 108, 60 118" stroke="#2e7d32" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M60 108 C52 102, 42 104, 38 108 C42 110, 52 112, 60 108 Z" fill="#388e3c" opacity="0.8" />

        {/* Outer petals - layer 1 (bloom with scale) */}
        <g
          style={{
            transformOrigin: "60px 55px",
            transition: `transform ${1.2}s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms, opacity 0.8s ease ${delay}ms`,
            transform: bloomed ? "scale(1) rotate(0deg)" : "scale(0) rotate(-45deg)",
            opacity: bloomed ? 1 : 0,
          }}
        >
          <ellipse cx="60" cy="55" rx="38" ry="42" fill={`url(#brg-${color}-${delay})`} opacity="0.95" filter={`url(#brgl-${color}-${delay})`} />
          <path d="M22 55 C22 30, 42 18, 60 20 C50 28, 38 40, 35 55 Z" fill={midColor} opacity="0.9" />
          <path d="M98 55 C98 30, 78 18, 60 20 C70 28, 82 40, 85 55 Z" fill={midColor} opacity="0.85" />
          <path d="M25 60 C20 78, 35 98, 60 100 C45 90, 32 76, 30 62 Z" fill={darkColor} opacity="0.8" />
          <path d="M95 60 C100 78, 85 98, 60 100 C75 90, 88 76, 90 62 Z" fill={darkColor} opacity="0.75" />
        </g>

        {/* Middle petals - layer 2 */}
        <g
          style={{
            transformOrigin: "60px 52px",
            transition: `transform ${1.0}s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay + 300}ms, opacity 0.8s ease ${delay + 300}ms`,
            transform: bloomed ? "scale(1) rotate(0deg)" : "scale(0) rotate(30deg)",
            opacity: bloomed ? 1 : 0,
          }}
        >
          <ellipse cx="60" cy="52" rx="28" ry="32" fill={`url(#bri-${color}-${delay})`} opacity="0.9" />
          <path d="M32 52 C32 34, 45 25, 60 27 C52 33, 42 42, 40 52 Z" fill={lightColor} opacity="0.85" />
          <path d="M88 52 C88 34, 75 25, 60 27 C68 33, 78 42, 80 52 Z" fill={color} opacity="0.8" />
          <path d="M36 58 C34 72, 44 84, 60 86 C50 78, 42 68, 40 58 Z" fill={midColor} opacity="0.75" />
          <path d="M84 58 C86 72, 76 84, 60 86 C70 78, 78 68, 80 58 Z" fill={darkColor} opacity="0.7" />
        </g>

        {/* Inner petals */}
        <g
          style={{
            transformOrigin: "60px 50px",
            transition: `transform ${0.9}s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay + 600}ms, opacity 0.8s ease ${delay + 600}ms`,
            transform: bloomed ? "scale(1) rotate(0deg)" : "scale(0) rotate(-20deg)",
            opacity: bloomed ? 1 : 0,
          }}
        >
          <ellipse cx="60" cy="50" rx="18" ry="22" fill={lightColor} opacity="0.9" />
          <path d="M42 50 C42 38, 50 30, 60 32 C55 37, 48 43, 47 50 Z" fill={highlightColor} opacity="0.7" />
          <path d="M78 50 C78 38, 70 30, 60 32 C65 37, 72 43, 73 50 Z" fill={lightColor} opacity="0.75" />
        </g>

        {/* Core spiral */}
        <g
          style={{
            transformOrigin: "60px 44px",
            transition: `transform ${0.8}s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay + 900}ms, opacity 0.6s ease ${delay + 900}ms`,
            transform: bloomed ? "scale(1)" : "scale(0)",
            opacity: bloomed ? 1 : 0,
          }}
        >
          <path d="M55 42 C55 36, 60 34, 64 38 C66 42, 62 46, 58 44 Z" fill={highlightColor} opacity="0.85" />
          <ellipse cx="60" cy="44" rx="6" ry="8" fill={midColor} opacity="0.5" />
          <path d="M57 40 C58 37, 62 36, 63 39 C63 41, 60 43, 58 42 Z" fill={highlightColor} opacity="0.9" />
          <ellipse cx="50" cy="38" rx="4" ry="6" fill={highlightColor} opacity="0.3" transform="rotate(-20 50 38)" />
          <ellipse cx="72" cy="42" rx="3" ry="5" fill={highlightColor} opacity="0.2" transform="rotate(15 72 42)" />
        </g>
      </svg>
    </div>
  )
}

export function BloomingPeony({
  size = 90,
  delay = 0,
  className = "",
}: {
  size?: number
  delay?: number
  className?: string
}) {
  const [bloomed, setBloomed] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setBloomed(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  return (
    <div className={`${className}`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 130 130"
        fill="none"
        aria-hidden="true"
        style={{ overflow: "visible" }}
      >
        <defs>
          <radialGradient id={`bpg-${delay}`} cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#fce4ec" />
            <stop offset="25%" stopColor="#f8bbd0" />
            <stop offset="55%" stopColor="#f06292" />
            <stop offset="100%" stopColor="#c2185b" />
          </radialGradient>
          <radialGradient id={`bpi-${delay}`} cx="50%" cy="40%" r="40%">
            <stop offset="0%" stopColor="#fce4ec" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ec407a" />
          </radialGradient>
          <filter id={`bpgl-${delay}`}>
            <feGaussianBlur stdDeviation="2.5" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Leaves - always visible first */}
        <path d="M65 95 C55 88, 40 90, 35 96 C40 98, 55 100, 65 95 Z" fill="#388e3c" opacity="0.7" />
        <path d="M65 95 C75 88, 90 90, 95 96 C90 98, 75 100, 65 95 Z" fill="#2e7d32" opacity="0.6" />

        {/* Outer fluffy petals */}
        {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((angle, i) => (
          <ellipse
            key={i}
            cx="65"
            cy="30"
            rx="18"
            ry="28"
            fill={`url(#bpg-${delay})`}
            opacity={0.7 + (i % 3) * 0.1}
            transform={`rotate(${angle} 65 60)`}
            filter={`url(#bpgl-${delay})`}
            style={{
              transformOrigin: "65px 60px",
              transition: `opacity ${1.2}s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay + i * 80}ms, transform ${1.2}s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay + i * 80}ms`,
              opacity: bloomed ? (0.7 + (i % 3) * 0.1) : 0,
            }}
          />
        ))}

        {/* Middle layer */}
        {[20, 60, 100, 140, 180, 220, 260, 300, 340].map((angle, i) => (
          <ellipse
            key={`m-${i}`}
            cx="65"
            cy="38"
            rx="13"
            ry="22"
            fill={`url(#bpi-${delay})`}
            transform={`rotate(${angle} 65 60)`}
            style={{
              transformOrigin: "65px 60px",
              transition: `opacity ${1.0}s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay + 400 + i * 60}ms`,
              opacity: bloomed ? (0.75 + (i % 2) * 0.1) : 0,
            }}
          />
        ))}

        {/* Inner ruffled petals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <ellipse
            key={`in-${i}`}
            cx="65"
            cy="45"
            rx="9"
            ry="16"
            fill="#f8bbd0"
            transform={`rotate(${angle} 65 60)`}
            style={{
              transformOrigin: "65px 60px",
              transition: `opacity ${0.8}s ease ${delay + 800 + i * 50}ms`,
              opacity: bloomed ? (0.6 + (i % 3) * 0.1) : 0,
            }}
          />
        ))}

        {/* Center */}
        <circle
          cx="65" cy="60" r="10" fill="#fce4ec"
          style={{
            transition: `opacity 0.6s ease ${delay + 1200}ms, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay + 1200}ms`,
            opacity: bloomed ? 0.8 : 0,
            transform: bloomed ? "scale(1)" : "scale(0)",
            transformOrigin: "65px 60px",
          }}
        />
        <circle
          cx="65" cy="60" r="6" fill="#fff9c4"
          style={{
            transition: `opacity 0.5s ease ${delay + 1400}ms`,
            opacity: bloomed ? 0.7 : 0,
          }}
        />
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <circle
            key={`s-${i}`}
            cx="65" cy="55" r="1.5" fill="#ffeb3b"
            transform={`rotate(${angle} 65 60)`}
            style={{
              transition: `opacity 0.4s ease ${delay + 1500 + i * 50}ms`,
              opacity: bloomed ? 0.8 : 0,
            }}
          />
        ))}
      </svg>
    </div>
  )
}
