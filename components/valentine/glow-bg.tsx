"use client"

export function GlowBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, hsl(340,30%,12%) 0%, hsl(340,30%,6%) 60%, hsl(340,35%,4%) 100%)",
        }}
      />
      {/* Top left rose glow */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full animate-pulse"
        style={{
          background: "radial-gradient(circle, rgba(198,40,40,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          animationDuration: "6s",
        }}
      />
      {/* Bottom right peony glow */}
      <div
        className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full animate-pulse"
        style={{
          background: "radial-gradient(circle, rgba(236,64,122,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
          animationDuration: "8s",
          animationDelay: "3s",
        }}
      />
      {/* Center gold glow */}
      <div
        className="absolute top-[30%] left-[40%] w-[30%] h-[30%] rounded-full animate-pulse"
        style={{
          background: "radial-gradient(circle, rgba(255,213,79,0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
          animationDuration: "10s",
          animationDelay: "1s",
        }}
      />
    </div>
  )
}
