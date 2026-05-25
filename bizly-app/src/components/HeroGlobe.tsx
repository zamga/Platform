const CITIES: { cx: number; cy: number; tx: number; ty: number; label: string }[] = [
  { cx: 120, cy: 138, tx: 128, ty: 130, label: "NEW YORK" },
  { cx: 203, cy: 106, tx: 211, ty: 98, label: "LONDON" },
  { cx: 221, cy: 100, tx: 229, ty: 92, label: "FRANKFURT" },
  { cx: 212, cy: 112, tx: 220, ty: 104, label: "ZURICH" },
  { cx: 229, cy: 116, tx: 237, ty: 108, label: "LJUBLJANA" },
  { cx: 268, cy: 140, tx: 276, ty: 132, label: "DUBAI" },
  { cx: 318, cy: 181, tx: 326, ty: 173, label: "SINGAPORE" },
]

/** Rotating wireframe earth with connected financial centres (films / offices). */
export function HeroGlobe() {
  return (
    <div className="globe-shell reveal">
      <div>
        <p className="kicker">Global Coverage</p>
        <p className="micro">Selective corridors, major financial centres and private transaction routes.</p>
      </div>
      <svg
        className="globe"
        viewBox="0 0 420 300"
        role="img"
        aria-label="Rotating wireframe earth showing major cities connected by animated routes."
      >
        <g className="globe-rotor">
          <ellipse className="wire" cx="210" cy="150" rx="132" ry="132" />
          <ellipse className="wire" cx="210" cy="150" rx="106" ry="132" />
          <ellipse className="wire" cx="210" cy="150" rx="68" ry="132" />
          <ellipse className="wire" cx="210" cy="150" rx="132" ry="106" />
          <ellipse className="wire" cx="210" cy="150" rx="132" ry="72" />
          <ellipse className="wire" cx="210" cy="150" rx="132" ry="38" />
          <path className="wire" d="M78 150 H342" />
          <path className="wire faint" d="M95 105 Q210 65 325 105" />
          <path className="wire faint" d="M95 195 Q210 235 325 195" />
          <path className="flight" d="M120 138 Q160 66 203 106" />
          <path className="flight" d="M203 106 Q223 93 229 116" />
          <path className="flight" d="M212 112 Q246 100 268 140" />
          <path className="flight" d="M229 116 Q286 110 318 181" />
          <path className="flight" d="M120 138 Q225 65 318 181" />
          {CITIES.map((c) => (
            <g className="city-label" key={c.label}>
              <circle className="city-point" cx={c.cx} cy={c.cy} r="4" />
              <text x={c.tx} y={c.ty}>
                {c.label}
              </text>
            </g>
          ))}
          <circle className="orbit-ring" cx="210" cy="150" r="148" />
          <circle className="orbit-dot" cx="210" cy="2" r="5" />
        </g>
      </svg>
    </div>
  )
}
