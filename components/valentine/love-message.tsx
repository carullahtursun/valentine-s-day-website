"use client"

import { useEffect, useState } from "react"
import { getDailyMessage } from "./daily-messages"

export function LoveMessage({ show }: { show: boolean }) {
  const [visible, setVisible] = useState(false)
  const message = getDailyMessage()

  useEffect(() => {
    if (!show) return
    const t = setTimeout(() => setVisible(true), 4500)
    return () => clearTimeout(t)
  }, [show])

  return (
    <div
      className={`relative max-w-md mx-auto px-6 py-5 md:px-8 md:py-6 rounded-2xl backdrop-blur-md transition-all duration-[2000ms] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        background: "rgba(30, 10, 18, 0.5)",
        border: "1px solid rgba(220,38,38,0.12)",
        boxShadow: "0 0 60px rgba(220,38,38,0.06), inset 0 1px 0 rgba(255,255,255,0.03)",
      }}
    >
      {/* Decorative quote marks */}
      <span
        className="absolute -top-3 left-4 font-serif text-4xl select-none"
        style={{ color: "hsl(348,83%,55%)", opacity: 0.25 }}
        aria-hidden="true"
      >
        {'\u201C'}
      </span>

      <div className="space-y-3 text-center">
        <p
          className="font-script text-lg md:text-xl leading-relaxed"
          style={{ color: "hsl(340, 40%, 80%)" }}
        >
          {message.line1}
        </p>
        <p
          className="font-script text-lg md:text-xl leading-relaxed"
          style={{ color: "hsl(340, 40%, 80%)" }}
        >
          {message.line2}
        </p>
        <div className="pt-2 flex items-center justify-center gap-2">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-[hsl(348,83%,55%)]/30" />
          <span className="font-script text-base" style={{ color: "hsl(40, 60%, 58%)" }}>
            {message.closing}
          </span>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-[hsl(348,83%,55%)]/30" />
        </div>
      </div>

      <span
        className="absolute -bottom-3 right-4 font-serif text-4xl select-none"
        style={{ color: "hsl(348,83%,55%)", opacity: 0.25 }}
        aria-hidden="true"
      >
        {'\u201D'}
      </span>
    </div>
  )
}
