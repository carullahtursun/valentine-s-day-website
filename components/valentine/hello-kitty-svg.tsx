"use client"

export function HelloKittySVG({ className = "", size = 120 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="kittyFace" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="80%" stopColor="#fafafa" />
          <stop offset="100%" stopColor="#f0f0f0" />
        </radialGradient>
        <filter id="kittyGlow">
          <feGaussianBlur stdDeviation="4" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="bowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef5350" />
          <stop offset="50%" stopColor="#c62828" />
          <stop offset="100%" stopColor="#b71c1c" />
        </linearGradient>
        <linearGradient id="bowGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff8a80" />
          <stop offset="50%" stopColor="#e53935" />
          <stop offset="100%" stopColor="#c62828" />
        </linearGradient>
      </defs>

      {/* Head shape - characteristic oval */}
      <ellipse cx="100" cy="108" rx="72" ry="65" fill="url(#kittyFace)" stroke="#e0e0e0" strokeWidth="1" filter="url(#kittyGlow)" />

      {/* Left ear */}
      <path d="M38 68 L28 20 L68 50 Z" fill="url(#kittyFace)" stroke="#e0e0e0" strokeWidth="1" strokeLinejoin="round" />
      <path d="M42 62 L34 28 L64 52 Z" fill="#fce4ec" opacity="0.5" />

      {/* Right ear */}
      <path d="M162 68 L172 20 L132 50 Z" fill="url(#kittyFace)" stroke="#e0e0e0" strokeWidth="1" strokeLinejoin="round" />
      <path d="M158 62 L166 28 L136 52 Z" fill="#fce4ec" opacity="0.5" />

      {/* Bow on right ear - detailed */}
      <g transform="translate(140, 28) rotate(15)">
        {/* Left loop */}
        <ellipse cx="-14" cy="0" rx="16" ry="12" fill="url(#bowGrad)" />
        <ellipse cx="-14" cy="-2" rx="8" ry="5" fill="#ff8a80" opacity="0.4" />
        {/* Right loop */}
        <ellipse cx="14" cy="0" rx="16" ry="12" fill="url(#bowGrad2)" />
        <ellipse cx="14" cy="-2" rx="8" ry="5" fill="#ff8a80" opacity="0.3" />
        {/* Center knot */}
        <ellipse cx="0" cy="0" rx="6" ry="7" fill="#c62828" />
        <ellipse cx="0" cy="-1" rx="3" ry="3" fill="#ef5350" opacity="0.6" />
        {/* Ribbon tails */}
        <path d="M-4 7 C-8 18, -6 24, -10 28" stroke="#b71c1c" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M4 7 C8 18, 6 24, 10 28" stroke="#c62828" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>

      {/* Left eye */}
      <ellipse cx="75" cy="105" rx="6" ry="7" fill="#1a1a1a" />
      <ellipse cx="73" cy="103" rx="2" ry="2.5" fill="#ffffff" opacity="0.7" />

      {/* Right eye */}
      <ellipse cx="125" cy="105" rx="6" ry="7" fill="#1a1a1a" />
      <ellipse cx="123" cy="103" rx="2" ry="2.5" fill="#ffffff" opacity="0.7" />

      {/* Nose */}
      <ellipse cx="100" cy="118" rx="4" ry="3" fill="#ffab91" />
      <ellipse cx="99" cy="117" rx="1.5" ry="1" fill="#ffccbc" opacity="0.6" />

      {/* Whiskers - left */}
      <line x1="30" y1="100" x2="65" y2="108" stroke="#bdbdbd" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="28" y1="115" x2="64" y2="116" stroke="#bdbdbd" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="32" y1="130" x2="66" y2="124" stroke="#bdbdbd" strokeWidth="1.5" strokeLinecap="round" />

      {/* Whiskers - right */}
      <line x1="170" y1="100" x2="135" y2="108" stroke="#bdbdbd" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="172" y1="115" x2="136" y2="116" stroke="#bdbdbd" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="168" y1="130" x2="134" y2="124" stroke="#bdbdbd" strokeWidth="1.5" strokeLinecap="round" />

      {/* Blush marks */}
      <ellipse cx="58" cy="120" rx="10" ry="6" fill="#f8bbd0" opacity="0.5" />
      <ellipse cx="142" cy="120" rx="10" ry="6" fill="#f8bbd0" opacity="0.5" />

      {/* Small heart held in front */}
      <g transform="translate(100, 158)">
        <path
          d="M0 8 L-3.5 4 C-7 0, -7 -5, -3.5 -7 C-1.5 -8.5, 0 -7, 0 -5 C0 -7, 1.5 -8.5, 3.5 -7 C7 -5, 7 0, 3.5 4 Z"
          fill="#e53935"
          stroke="#c62828"
          strokeWidth="0.5"
          style={{ filter: "drop-shadow(0 0 6px rgba(229,57,53,0.5))" }}
        />
        <path d="M0 -3 C-1 -5, -3 -6, -3 -4.5" stroke="#ff8a80" strokeWidth="0.8" fill="none" opacity="0.6" strokeLinecap="round" />
      </g>
    </svg>
  )
}

export function HelloKittyWithRoses({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative" style={{ filter: "drop-shadow(0 0 30px rgba(220,38,38,0.15))" }}>
        <HelloKittySVG size={140} />
      </div>
    </div>
  )
}
