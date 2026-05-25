import { useEffect, useRef } from "react"

/** Frosted "Liquid Capital Core" artifact — the canonical home hero visual. */
export function LiquidCore() {
  const shellRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const shell = shellRef.current
    if (!shell) return
    const onMove = (e: PointerEvent) => {
      const r = shell.getBoundingClientRect()
      shell.style.setProperty("--mx", (((e.clientX - r.left) / r.width) * 100).toFixed(2) + "%")
      shell.style.setProperty("--my", (((e.clientY - r.top) / r.height) * 100).toFixed(2) + "%")
    }
    shell.addEventListener("pointermove", onMove, { passive: true })
    return () => shell.removeEventListener("pointermove", onMove)
  }, [])

  return (
    <div className="liquid-core-shell" ref={shellRef}>
      <div className="liquid-core-badge">Liquid Capital Core</div>
      <svg
        className="liquid-core-svg"
        viewBox="0 0 720 720"
        role="img"
        aria-label="Liquid Capital Core: a frosted glass institutional finance artifact with orbital data paths."
      >
        <defs>
          <radialGradient id="coreGlass" cx="42%" cy="30%" r="72%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity=".94" />
            <stop offset="18%" stopColor="#bdf0ff" stopOpacity=".62" />
            <stop offset="48%" stopColor="#1d8ecb" stopOpacity=".32" />
            <stop offset="74%" stopColor="#071722" stopOpacity=".68" />
            <stop offset="100%" stopColor="#020202" stopOpacity=".96" />
          </radialGradient>
          <linearGradient id="coreEdge" x1="0" x2="1">
            <stop offset="0%" stopColor="#78dbff" stopOpacity=".82" />
            <stop offset="48%" stopColor="#ffffff" stopOpacity=".42" />
            <stop offset="100%" stopColor="#d7ff3f" stopOpacity=".74" />
          </linearGradient>
          <filter id="liquidDisplace">
            <feTurbulence type="fractalNoise" baseFrequency="0.014 0.026" numOctaves="3" seed="7" result="noise">
              <animate
                attributeName="baseFrequency"
                values="0.012 0.022;0.019 0.032;0.012 0.022"
                dur="10s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="34" xChannelSelector="R" yChannelSelector="G" />
            <feGaussianBlur stdDeviation=".18" />
          </filter>
          <filter id="coreGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <ellipse className="liquid-orbit o1" cx="360" cy="360" rx="318" ry="98" transform="rotate(-18 360 360)" />
        <ellipse className="liquid-orbit o2" cx="360" cy="360" rx="286" ry="286" transform="rotate(8 360 360)" />
        <ellipse className="liquid-orbit o3" cx="360" cy="360" rx="350" ry="124" transform="rotate(32 360 360)" />
        <g className="liquid-core-main" filter="url(#liquidDisplace)">
          <path
            d="M360 82 C470 92 590 170 622 300 C658 442 566 578 424 632 C288 684 138 604 92 462 C44 316 136 162 266 104 C300 88 330 80 360 82Z"
            fill="url(#coreGlass)"
            opacity=".88"
          />
          <path
            d="M348 142 C450 126 546 220 548 340 C550 474 454 562 340 548 C232 535 152 430 174 306 C194 196 266 154 348 142Z"
            fill="rgba(255,255,255,.055)"
            stroke="url(#coreEdge)"
            strokeWidth="1.4"
          />
          <path
            className="liquid-core-inner"
            d="M374 206 C442 206 500 274 486 362 C470 456 386 500 302 462 C228 430 214 334 260 270 C286 232 326 208 374 206Z"
            fill="rgba(120,219,255,.22)"
            stroke="rgba(255,255,255,.28)"
            strokeWidth="1"
          />
          <path
            className="liquid-core-inner"
            d="M402 260 C452 284 458 364 410 414 C362 464 282 438 270 372 C258 306 332 226 402 260Z"
            fill="rgba(215,255,63,.12)"
            stroke="rgba(215,255,63,.30)"
            strokeWidth="1"
          />
        </g>
        <g filter="url(#coreGlow)">
          <path className="liquid-data-line" d="M104 388 C214 280 318 246 470 170 C552 130 612 138 660 186" />
          <path className="liquid-data-line" d="M94 470 C208 396 340 394 450 468 C530 522 594 520 654 478" />
          <path className="liquid-data-line" d="M168 164 C260 238 356 278 502 282 C570 282 616 318 650 374" />
          <circle className="liquid-data-node" cx="104" cy="388" r="4.6" />
          <circle className="liquid-data-node" cx="470" cy="170" r="4.6" />
          <circle className="liquid-data-node" cx="654" cy="478" r="4.6" />
          <circle className="liquid-data-node" cx="502" cy="282" r="4.6" />
          <circle className="liquid-data-node" cx="360" cy="360" r="5.2" />
        </g>
      </svg>
      <div className="liquid-core-caption">
        <div>
          <p className="kicker">Spatial Ledger</p>
          <p className="micro">A frosted institutional artifact: glass, metal, capital flow and controlled asymmetry behind the interface.</p>
        </div>
        <div>
          <p className="kicker">Global Coverage</p>
          <p className="micro">New York · London · Frankfurt · Zurich · Ljubljana · Dubai · Singapore</p>
        </div>
      </div>
    </div>
  )
}
