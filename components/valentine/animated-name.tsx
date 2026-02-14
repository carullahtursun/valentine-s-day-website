"use client"

import { useEffect, useState } from "react"

export function AnimatedName({ name, show }: { name: string; show: boolean }) {
  const [visibleLetters, setVisibleLetters] = useState(0)

  useEffect(() => {
    if (!show) return
    let i = 0
    const interval = setInterval(() => {
      i++
      setVisibleLetters(i)
      if (i >= name.length) clearInterval(interval)
    }, 120)
    return () => clearInterval(interval)
  }, [show, name.length])

  return (
    <div className="text-center" style={{ perspective: "800px" }}>
      <h1 className="font-script text-5xl md:text-7xl lg:text-8xl leading-tight tracking-wide">
        {name.split("").map((letter, i) => (
          <span
            key={i}
            className="inline-block transition-all duration-700"
            style={{
              opacity: i < visibleLetters ? 1 : 0,
              transform: i < visibleLetters ? "translateY(0) rotateX(0deg)" : "translateY(30px) rotateX(-90deg)",
              transitionDelay: `${i * 80}ms`,
              background: "linear-gradient(135deg, #ffd54f 0%, #ffab91 25%, #ef5350 50%, #ec407a 75%, #f8bbd0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: i < visibleLetters ? "drop-shadow(0 0 20px rgba(239,83,80,0.4))" : "none",
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </h1>
    </div>
  )
}

export function TypewriterText({ text, show, delay = 0 }: { text: string; show: boolean; delay?: number }) {
  const [displayText, setDisplayText] = useState("")
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!show) return
    const startTimer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(startTimer)
  }, [show, delay])

  useEffect(() => {
    if (!started) return
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayText(text.slice(0, i))
      if (i >= text.length) clearInterval(interval)
    }, 50)
    return () => clearInterval(interval)
  }, [started, text])

  return (
    <p
      className="font-script text-xl md:text-2xl lg:text-3xl text-center transition-opacity duration-1000"
      style={{
        color: "hsl(340, 80%, 78%)",
        textShadow: "0 0 30px rgba(220,38,38,0.2)",
        opacity: started ? 1 : 0,
      }}
    >
      {displayText}
      {started && displayText.length < text.length && (
        <span className="animate-pulse" style={{ color: "hsl(40, 70%, 60%)" }}>|</span>
      )}
    </p>
  )
}
