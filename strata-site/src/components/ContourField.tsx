import { useEffect, useRef } from "react"

interface ContourFieldProps {
  reducedMotion: boolean
  /** Base stroke color (rgb triplet, no alpha). */
  lineRgb?: string
  /** Accent stroke color (rgb triplet, no alpha). */
  accentRgb?: string
  /** Number of contour lines. */
  lines?: number
}

/**
 * Signature motif: an animated topographic contour field rendered to canvas.
 * Lines undulate with layered sine waves, drift gently with scroll (parallax)
 * and bow softly toward the pointer. Pauses when offscreen or the tab is
 * hidden. Under reduced-motion it renders a single static frame.
 */
export function ContourField({
  reducedMotion,
  lineRgb = "247, 245, 240",
  accentRgb = "63, 129, 125",
  lines = 16,
}: ContourFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = 0
    let height = 0
    let dpr = 1
    // pointer in normalized [-1,1] space; current + target for easing
    const pointer = { x: 0, y: 0, tx: 0, ty: 0, active: 0, tActive: 0 }
    let scrollNorm = 0
    let raf = 0
    let visible = true
    const t0 = performance.now()

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = (timeMs: number) => {
      const time = (timeMs - t0) / 1000
      ctx.clearRect(0, 0, width, height)

      // ease pointer + activation
      pointer.x += (pointer.tx - pointer.x) * 0.06
      pointer.y += (pointer.ty - pointer.y) * 0.06
      pointer.active += (pointer.tActive - pointer.active) * 0.05

      const step = Math.max(6, Math.floor(width / 140))
      const baseGap = height / (lines + 1)
      const px = (pointer.x * 0.5 + 0.5) * width
      const py = (pointer.y * 0.5 + 0.5) * height
      const influence = pointer.active

      for (let i = 0; i < lines; i++) {
        const lineFrac = i / (lines - 1)
        const baseY = baseGap * (i + 1) + scrollNorm * 60 * (lineFrac - 0.5)
        const amp = 14 + 22 * Math.sin(lineFrac * Math.PI) // bulge in the middle
        const phase = time * 0.18 + i * 0.5
        const isAccent = i % 5 === 2

        ctx.beginPath()
        for (let x = -step; x <= width + step; x += step) {
          const xn = x / width
          let y =
            baseY +
            Math.sin(xn * 6.2 + phase) * amp +
            Math.sin(xn * 13.7 - phase * 0.7) * (amp * 0.35)

          // pointer bow: lift lines toward the cursor within a radius
          if (influence > 0.01) {
            const dx = x - px
            const dy = baseY - py
            const dist2 = dx * dx + dy * dy
            const r = 240
            const falloff = Math.exp(-dist2 / (r * r))
            y -= falloff * 46 * influence * Math.sign(dy || 1) * -1
          }

          if (x === -step) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        const alpha = 0.05 + lineFrac * 0.12
        ctx.lineWidth = isAccent ? 1.4 : 1
        ctx.strokeStyle = isAccent
          ? `rgba(${accentRgb}, ${Math.min(0.5, alpha + 0.16)})`
          : `rgba(${lineRgb}, ${alpha})`
        ctx.stroke()
      }
    }

    const loop = (t: number) => {
      if (visible) draw(t)
      raf = requestAnimationFrame(loop)
    }

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      scrollNorm = max > 0 ? window.scrollY / max : 0
    }
    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer.tx = ((e.clientX - rect.left) / rect.width) * 2 - 1
      pointer.ty = ((e.clientY - rect.top) / rect.height) * 2 - 1
      pointer.tActive = 1
    }
    const onLeave = () => {
      pointer.tActive = 0
    }
    const onVisibility = () => {
      visible = document.visibilityState === "visible"
    }

    resize()
    onScroll()

    if (reducedMotion) {
      // single static frame, no loop / listeners
      draw(t0)
      const ro = new ResizeObserver(() => {
        resize()
        draw(t0)
      })
      ro.observe(canvas)
      return () => ro.disconnect()
    }

    raf = requestAnimationFrame(loop)
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("pointermove", onPointer, { passive: true })
    window.addEventListener("pointerleave", onLeave)
    document.addEventListener("visibilitychange", onVisibility)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("pointermove", onPointer)
      window.removeEventListener("pointerleave", onLeave)
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [reducedMotion, lineRgb, accentRgb, lines])

  return <canvas ref={canvasRef} className="contour" aria-hidden="true" />
}
