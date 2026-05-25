import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  seed: number
  size: number
}

interface Props {
  group: number
  reducedMotion: boolean
}

/** Fixed full-viewport particle field that morphs by route group and reacts to pointer + scroll. */
export function SpatialCanvas({ group, reducedMotion }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const groupRef = useRef(group)

  useEffect(() => {
    groupRef.current = group
  }, [group])

  useEffect(() => {
    const root = document.documentElement
    let lastY = window.scrollY
    let velocity = 0
    const onVel = () => {
      const y = window.scrollY
      velocity = Math.min(1, Math.abs(y - lastY) / 52)
      lastY = y
      root.style.setProperty("--soty-velocity", velocity.toFixed(3))
    }
    window.addEventListener("scroll", onVel, { passive: true })

    const canvas = canvasRef.current
    if (reducedMotion || !canvas) {
      return () => window.removeEventListener("scroll", onVel)
    }
    const ctx = canvas.getContext("2d", { alpha: true })!

    let W = 0
    let H = 0
    let particles: Particle[] = []
    const pointer = { x: -9999, y: -9999 }
    let raf = 0

    const newParticle = (i: number, count: number): Particle => {
      const angle = (i / count) * Math.PI * 2
      const radius = Math.min(W, H) * (0.18 + Math.random() * 0.28)
      return {
        x: W / 2 + Math.cos(angle) * radius + (Math.random() - 0.5) * 140,
        y: H * 0.45 + Math.sin(angle) * radius * 0.62 + (Math.random() - 0.5) * 80,
        vx: 0,
        vy: 0,
        seed: Math.random(),
        size: 0.8 + Math.random() * 1.8,
      }
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = Math.max(1, Math.floor(W * dpr))
      canvas.height = Math.max(1, Math.floor(H * dpr))
      canvas.style.width = W + "px"
      canvas.style.height = H + "px"
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = W < 760 ? 90 : W < 1100 ? 170 : 260
      particles = Array.from({ length: count }, (_, i) => newParticle(i, count))
    }

    const target = (i: number, t: number) => {
      const cx = W * 0.58
      const cy = H * 0.42
      const n = particles.length || 1
      const mode = groupRef.current
      if (mode === 1) return { x: W * 0.7 + ((i % 18) - 9) * 10, y: H * 0.7 - Math.floor(i / 18) * 7 }
      if (mode === 2) return { x: W * 0.63 + ((i % 9) - 4) * 26, y: H * 0.28 + Math.floor(i / 9) * 13 }
      if (mode === 3) return { x: W * 0.18 + (i % 22) * ((W * 0.64) / 22), y: H * 0.22 + Math.floor(i / 22) * 18 }
      if (mode >= 4) {
        const a = (i / n) * Math.PI * 2
        const r = Math.min(W, H) * 0.16
        return { x: W * 0.78 + Math.cos(a) * r * 0.55, y: H * 0.48 + Math.sin(a) * r }
      }
      const a = (i / n) * Math.PI * 2 + t * 0.00008
      const r = Math.min(W, H) * (0.2 + 0.11 * Math.sin(i * 2.1))
      return { x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r * 0.56 }
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, W, H)
      const grad = ctx.createRadialGradient(W * 0.62, H * 0.36, 0, W * 0.62, H * 0.36, Math.max(W, H) * 0.62)
      grad.addColorStop(0, "rgba(120,219,255,.075)")
      grad.addColorStop(0.42, "rgba(82,229,110,.026)")
      grad.addColorStop(1, "rgba(0,0,0,0)")
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, W, H)
      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const tar = target(i, t)
        p.vx += (tar.x - p.x) * 0.0025
        p.vy += (tar.y - p.y) * 0.0025
        const pdx = p.x - pointer.x
        const pdy = p.y - pointer.y
        const d2 = pdx * pdx + pdy * pdy
        if (d2 < 11000) {
          const f = (1 - d2 / 11000) * 1.4
          p.vx += (pdx / Math.sqrt(d2 + 1)) * f
          p.vy += (pdy / Math.sqrt(d2 + 1)) * f
        }
        p.vx *= 0.91
        p.vy *= 0.91
        p.x += p.vx
        p.y += p.vy
        const alpha = 0.12 + p.seed * 0.3 + velocity * 0.2
        ctx.fillStyle = p.seed > 0.54 ? `rgba(82,229,110,${alpha})` : `rgba(120,219,255,${alpha})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size + velocity * 1.2, 0, Math.PI * 2)
        ctx.fill()
        if (i % 7 === 0) {
          const q = particles[(i + 17) % particles.length]
          const dist = Math.hypot(p.x - q.x, p.y - q.y)
          if (dist < 190) {
            ctx.strokeStyle = `rgba(120,219,255,${Math.max(0, 0.12 - dist / 1800)})`
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }

    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX
      pointer.y = e.clientY
    }
    const onLeave = () => {
      pointer.x = -9999
      pointer.y = -9999
    }
    const onVisibility = () => {
      if (document.hidden) {
        if (raf) cancelAnimationFrame(raf)
        raf = 0
      } else if (!raf) {
        raf = requestAnimationFrame(draw)
      }
    }

    resize()
    window.addEventListener("resize", resize, { passive: true })
    window.addEventListener("pointermove", onMove, { passive: true })
    window.addEventListener("pointerleave", onLeave, { passive: true })
    document.addEventListener("visibilitychange", onVisibility)
    raf = requestAnimationFrame(draw)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onVel)
      window.removeEventListener("resize", resize)
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerleave", onLeave)
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [reducedMotion])

  return (
    <div id="soty-spatial-layer" aria-hidden="true">
      <canvas id="soty-spatial-canvas" ref={canvasRef} />
    </div>
  )
}
