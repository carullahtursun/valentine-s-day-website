"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { GlowBackground } from "@/components/valentine/glow-bg"
import { PetalRain } from "@/components/valentine/petal-rain"
import { SparkleField } from "@/components/valentine/sparkle-field"
import { FloatingHearts } from "@/components/valentine/floating-hearts"
import { RoseFrame } from "@/components/valentine/rose-frame"
import { HelloKittyWithRoses } from "@/components/valentine/hello-kitty-svg"
import { AnimatedName, TypewriterText } from "@/components/valentine/animated-name"
import { LoveMessage } from "@/components/valentine/love-message"
import { DetailedRose, PeonyFlower } from "@/components/valentine/svg-roses"
import { BloomingRose, BloomingPeony } from "@/components/valentine/blooming-rose"

export default function ValentinePage() {
  const [phase, setPhase] = useState<"intro" | "transition" | "main">("intro")
  const [showMain, setShowMain] = useState(false)
  const mouseLightRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (mouseLightRef.current) {
      mouseLightRef.current.style.left = `${e.clientX - 200}px`
      mouseLightRef.current.style.top = `${e.clientY - 200}px`
    }
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [handleMouseMove])

  useEffect(() => {
    if (phase === "transition") {
      const t = setTimeout(() => setPhase("main"), 2500)
      return () => clearTimeout(t)
    }
    if (phase === "main") {
      const t = setTimeout(() => setShowMain(true), 500)
      return () => clearTimeout(t)
    }
  }, [phase])

  // === INTRO SCREEN ===
  if (phase === "intro") {
    return (
      <main className="h-dvh w-full flex items-center justify-center relative overflow-hidden">
        <GlowBackground />
        <SparkleField />

        {/* Mouse follow light */}
        <div
          ref={mouseLightRef}
          className="fixed pointer-events-none z-10 w-[350px] h-[350px] rounded-full"
          style={{
            left: -9999,
            top: -9999,
            background: "radial-gradient(circle, rgba(220,38,38,0.05) 0%, transparent 70%)",
            filter: "blur(30px)",
            transition: "left 0.7s ease-out, top 0.7s ease-out",
          }}
          aria-hidden="true"
        />

        <div className="relative z-20 flex flex-col items-center gap-8 px-6">
          {/* Hello Kitty with blooming roses */}
          <div className="relative animate-float" style={{ animationDuration: "5s" }}>
            <HelloKittyWithRoses />

            {/* Blooming roses around Hello Kitty */}
            <div className="absolute -top-6 -left-14">
              <BloomingRose size={50} color="#c62828" delay={300} className="opacity-85" />
            </div>
            <div className="absolute -top-4 -right-12">
              <BloomingPeony size={48} delay={600} className="opacity-80" />
            </div>
            <div className="absolute -bottom-6 -left-4">
              <BloomingPeony size={42} delay={900} className="opacity-75" />
            </div>
            <div className="absolute -bottom-4 -right-10">
              <BloomingRose size={45} color="#b71c1c" delay={1200} className="opacity-80" />
            </div>

            {/* Glow behind */}
            <div
              className="absolute inset-0 -z-10 rounded-full animate-pulse"
              style={{
                background: "radial-gradient(circle, rgba(220,38,38,0.15) 0%, transparent 60%)",
                filter: "blur(25px)",
                transform: "scale(1.5)",
                animationDuration: "3s",
              }}
            />
          </div>

          {/* Intro text */}
          <div className="text-center space-y-3">
            <p
              className="font-script text-3xl md:text-5xl"
              style={{
                color: "hsl(340, 80%, 78%)",
                textShadow: "0 0 40px rgba(220,38,38,0.3)",
              }}
            >
              {'Sana bir surprizim var...'}
            </p>
            <p
              className="text-xs md:text-sm tracking-[0.35em] uppercase font-serif"
              style={{ color: "hsl(40, 60%, 55%)" }}
            >
              {'14 Subat Sevgililer Gunu'}
            </p>
          </div>

          {/* Button */}
          <button
            onClick={() => setPhase("transition")}
            className="group relative px-14 py-4 rounded-full text-[hsl(0,0%,100%)] font-script text-2xl md:text-3xl tracking-wide transition-all duration-500 hover:scale-105 active:scale-95 cursor-pointer overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(348,83%,45%) 0%, hsl(330,60%,45%) 50%, hsl(348,83%,40%) 100%)",
              boxShadow: "0 4px 40px rgba(220,38,38,0.3), 0 0 80px rgba(220,38,38,0.1), inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" />
              </svg>
              {'Ac ve Gor'}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" />
              </svg>
            </span>
            {/* Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer bg-[length:200%_100%]" />
          </button>
        </div>
      </main>
    )
  }

  // === TRANSITION ===
  if (phase === "transition") {
    return (
      <main className="h-dvh w-full flex items-center justify-center relative overflow-hidden">
        <GlowBackground />
        <SparkleField />

        <div className="flex flex-col items-center gap-6 animate-fade-in-scale">
          {/* Big beating heart */}
          <div className="animate-heartbeat" style={{ filter: "drop-shadow(0 0 40px rgba(220,38,38,0.4))" }}>
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="bigHeart" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ef5350" />
                  <stop offset="50%" stopColor="#c62828" />
                  <stop offset="100%" stopColor="#ad1457" />
                </linearGradient>
              </defs>
              <path
                d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z"
                fill="url(#bigHeart)"
              />
            </svg>
          </div>

          {/* Blooming roses appear during transition */}
          <div className="flex items-center gap-4">
            <BloomingRose size={50} color="#c62828" delay={200} />
            <BloomingPeony size={55} delay={500} />
            <BloomingRose size={50} color="#b71c1c" delay={800} />
          </div>

          <p
            className="font-script text-3xl md:text-4xl animate-fade-in-up"
            style={{
              color: "hsl(340, 80%, 78%)",
              textShadow: "0 0 30px rgba(220,38,38,0.3)",
              animationDelay: "0.8s",
              animationFillMode: "both",
            }}
          >
            {'Seni cok seviyorum...'}
          </p>
        </div>
      </main>
    )
  }

  // === MAIN SCENE ===
  return (
    <main className="h-dvh w-full flex items-center justify-center relative overflow-hidden">
      <GlowBackground />
      <PetalRain />
      <SparkleField />
      <FloatingHearts />
      <RoseFrame />

      {/* Mouse follow */}
      <div
        ref={mouseLightRef}
        className="fixed pointer-events-none z-10 w-[400px] h-[400px] rounded-full"
        style={{
          left: -9999,
          top: -9999,
          background: "radial-gradient(circle, rgba(220,38,38,0.04) 0%, transparent 70%)",
          filter: "blur(40px)",
          transition: "left 1s ease-out, top 1s ease-out",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className={`relative z-30 flex flex-col items-center gap-4 md:gap-5 px-4 max-w-2xl mx-auto transition-all duration-[1500ms] ${
          showMain ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* Date badge */}
        <div
          className={`flex items-center gap-3 px-6 py-2.5 rounded-full backdrop-blur-md transition-all duration-1000 delay-200 ${
            showMain ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
          style={{
            background: "rgba(30,10,18,0.6)",
            border: "1px solid rgba(220,38,38,0.12)",
            boxShadow: "0 0 40px rgba(220,38,38,0.05)",
          }}
        >
          <span
            className="text-xs md:text-sm tracking-[0.3em] uppercase font-serif"
            style={{ color: "hsl(40, 60%, 58%)" }}
          >
            {'14 Subat 2026'}
          </span>
          <div className="animate-heartbeat">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="hsl(348,83%,55%)" aria-hidden="true">
              <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" />
            </svg>
          </div>
          <span
            className="text-xs md:text-sm tracking-[0.3em] uppercase font-serif"
            style={{ color: "hsl(40, 60%, 58%)" }}
          >
            {'Sevgililer Gunu'}
          </span>
        </div>

        {/* Hello Kitty center piece with blooming roses */}
        <div
          className={`relative transition-all duration-1000 delay-500 ${
            showMain ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="relative animate-float" style={{ animationDuration: "6s" }}>
            <HelloKittyWithRoses />
            {/* Blooming rose accents around kitty */}
            <div className="absolute -top-6 -left-12">
              <BloomingRose size={40} color="#c62828" delay={1500} className="opacity-75" />
            </div>
            <div className="absolute -top-4 -right-10">
              <BloomingPeony size={38} delay={1800} className="opacity-70" />
            </div>
            {/* Glow */}
            <div
              className="absolute inset-0 -z-10 rounded-full animate-pulse"
              style={{
                background: "radial-gradient(circle, rgba(220,38,38,0.12) 0%, transparent 60%)",
                filter: "blur(20px)",
                transform: "scale(1.8)",
                animationDuration: "3s",
              }}
            />
          </div>
        </div>

        {/* Name */}
        <AnimatedName name="Ahsen Tutar" show={showMain} />

        {/* Subtitle with typewriter */}
        <TypewriterText
          text="Seni seviyorum, bugun ve her gun..."
          show={showMain}
          delay={2000}
        />

        {/* Flower divider with blooming roses */}
        <div
          className={`flex items-center gap-2 transition-all duration-1000 delay-[3500ms] ${
            showMain ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-[hsl(348,83%,55%)]/25" />
          <BloomingRose size={32} color="#c62828" delay={4000} className="opacity-70" />
          <BloomingPeony size={30} delay={4300} className="opacity-65" />
          <BloomingRose size={32} color="#b71c1c" delay={4600} className="opacity-70" />
          <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-[hsl(348,83%,55%)]/25" />
        </div>

        {/* Love letter */}
        <LoveMessage show={showMain} />

        {/* Bottom signature */}
        <div
          className={`flex items-center gap-3 pt-1 transition-all duration-1000 delay-[6000ms] ${
            showMain ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="h-px w-10 md:w-16 bg-gradient-to-r from-transparent to-[hsl(348,83%,55%)]/20" />
          <div className="animate-heartbeat">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="hsl(348,83%,55%)" opacity="0.5" aria-hidden="true">
              <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" />
            </svg>
          </div>
          <span className="font-script text-sm" style={{ color: "hsl(340, 20%, 50%)" }}>
            {'Sonsuza dek seninle'}
          </span>
          <div className="animate-heartbeat" style={{ animationDelay: "0.4s" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="hsl(330,60%,60%)" opacity="0.5" aria-hidden="true">
              <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" />
            </svg>
          </div>
          <div className="h-px w-10 md:w-16 bg-gradient-to-l from-transparent to-[hsl(348,83%,55%)]/20" />
        </div>
      </div>
    </main>
  )
}
