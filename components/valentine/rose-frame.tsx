"use client"

import { DetailedRose, PeonyFlower } from "./svg-roses"

export function RoseFrame() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[15]" aria-hidden="true">
      {/* Top left cluster */}
      <div className="absolute -top-2 -left-2 animate-sway" style={{ animationDuration: "5s" }}>
        <DetailedRose size={70} color="#c62828" className="opacity-80" />
      </div>
      <div className="absolute top-8 left-10 animate-sway" style={{ animationDuration: "6s", animationDelay: "0.5s" }}>
        <PeonyFlower size={60} className="opacity-70" />
      </div>
      <div className="absolute top-0 left-16 animate-sway" style={{ animationDuration: "4.5s", animationDelay: "1s" }}>
        <DetailedRose size={50} color="#b71c1c" className="opacity-60" />
      </div>

      {/* Top right cluster */}
      <div className="absolute -top-2 -right-2 animate-sway" style={{ animationDuration: "5.5s", animationDelay: "0.3s" }}>
        <PeonyFlower size={70} className="opacity-80" />
      </div>
      <div className="absolute top-8 right-10 animate-sway" style={{ animationDuration: "4.8s", animationDelay: "0.8s" }}>
        <DetailedRose size={55} color="#c62828" className="opacity-70" />
      </div>
      <div className="absolute top-1 right-16 animate-sway" style={{ animationDuration: "6s", animationDelay: "1.2s" }}>
        <DetailedRose size={45} color="#8e0000" className="opacity-55" />
      </div>

      {/* Bottom left cluster */}
      <div className="absolute -bottom-4 -left-3 rotate-180 animate-sway" style={{ animationDuration: "5s", animationDelay: "0.6s" }}>
        <DetailedRose size={65} color="#c62828" className="opacity-75" />
      </div>
      <div className="absolute bottom-6 left-8 rotate-180 animate-sway" style={{ animationDuration: "5.5s", animationDelay: "1s" }}>
        <PeonyFlower size={55} className="opacity-65" />
      </div>

      {/* Bottom right cluster */}
      <div className="absolute -bottom-4 -right-3 rotate-180 animate-sway" style={{ animationDuration: "5.2s", animationDelay: "0.4s" }}>
        <PeonyFlower size={65} className="opacity-75" />
      </div>
      <div className="absolute bottom-6 right-8 rotate-180 animate-sway" style={{ animationDuration: "4.5s", animationDelay: "1.3s" }}>
        <DetailedRose size={50} color="#b71c1c" className="opacity-60" />
      </div>

      {/* Side accents - left */}
      <div className="absolute top-1/3 -left-4 animate-float-slow hidden md:block" style={{ animationDuration: "7s" }}>
        <DetailedRose size={45} color="#c62828" className="opacity-40" />
      </div>
      <div className="absolute top-1/2 -left-2 animate-float-slow hidden md:block" style={{ animationDuration: "8s", animationDelay: "2s" }}>
        <PeonyFlower size={40} className="opacity-35" />
      </div>

      {/* Side accents - right */}
      <div className="absolute top-1/3 -right-4 animate-float-slow hidden md:block" style={{ animationDuration: "7.5s", animationDelay: "1s" }}>
        <PeonyFlower size={45} className="opacity-40" />
      </div>
      <div className="absolute top-1/2 -right-2 animate-float-slow hidden md:block" style={{ animationDuration: "9s", animationDelay: "3s" }}>
        <DetailedRose size={40} color="#b71c1c" className="opacity-35" />
      </div>

      {/* Vine lines - subtle decorative curves */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-[0.08]" viewBox="0 0 1000 1000" fill="none">
        <path d="M0 200 C100 180, 200 220, 150 300 C100 380, 50 320, 0 350" stroke="#4caf50" strokeWidth="1.5" />
        <path d="M1000 200 C900 180, 800 220, 850 300 C900 380, 950 320, 1000 350" stroke="#4caf50" strokeWidth="1.5" />
        <path d="M0 700 C100 720, 200 680, 150 600" stroke="#4caf50" strokeWidth="1.5" />
        <path d="M1000 700 C900 720, 800 680, 850 600" stroke="#4caf50" strokeWidth="1.5" />
      </svg>
    </div>
  )
}
