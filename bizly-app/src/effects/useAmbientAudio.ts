import { useCallback, useEffect, useRef, useState } from "react"

interface Engine {
  ctx: AudioContext
  master: GainNode
  filter: BiquadFilterNode
  drone: GainNode
  osc: OscillatorNode
}

const INTERACTIVE = "a,button,.interactive,.service-tile,.situation-card,.memo-card,.cms-tombstone"

/**
 * A single WebAudio ambient-drone engine with a hover blip and scroll-velocity
 * filter modulation. Replaces the two duplicate engines in the source file.
 */
export function useAmbientAudio() {
  const [soundOn, setSoundOn] = useState(false)
  const engineRef = useRef<Engine | null>(null)
  const soundOnRef = useRef(false)
  const lastYRef = useRef(0)

  const build = useCallback((): Engine => {
    const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    const ctx = new Ctor()
    const master = ctx.createGain()
    master.gain.value = 0.0001
    const filter = ctx.createBiquadFilter()
    filter.type = "lowpass"
    filter.frequency.value = 3000
    filter.Q.value = 0.7
    const drone = ctx.createGain()
    drone.gain.value = 0.016
    const osc = ctx.createOscillator()
    osc.type = "sine"
    osc.frequency.value = 47
    osc.connect(drone)
    drone.connect(filter)
    filter.connect(master)
    master.connect(ctx.destination)
    osc.start()
    return { ctx, master, filter, drone, osc }
  }, [])

  const click = useCallback(() => {
    const e = engineRef.current
    if (!e || !soundOnRef.current) return
    const { ctx, master } = e
    const o = ctx.createOscillator()
    const g = ctx.createGain()
    const f = ctx.createBiquadFilter()
    o.type = "triangle"
    o.frequency.setValueAtTime(860, ctx.currentTime)
    o.frequency.exponentialRampToValueAtTime(190, ctx.currentTime + 0.055)
    f.type = "bandpass"
    f.frequency.value = 640
    f.Q.value = 8
    g.gain.setValueAtTime(0.0001, ctx.currentTime)
    g.gain.exponentialRampToValueAtTime(0.034, ctx.currentTime + 0.006)
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.065)
    o.connect(f)
    f.connect(g)
    g.connect(master)
    o.start()
    o.stop(ctx.currentTime + 0.075)
  }, [])

  const toggle = useCallback(async () => {
    const next = !soundOnRef.current
    soundOnRef.current = next
    setSoundOn(next)
    if (next) {
      if (!engineRef.current) engineRef.current = build()
      const e = engineRef.current
      await e.ctx.resume()
      e.master.gain.setTargetAtTime(0.12, e.ctx.currentTime, 0.35)
    } else {
      const e = engineRef.current
      if (e) e.master.gain.setTargetAtTime(0.0001, e.ctx.currentTime, 0.16)
    }
  }, [build])

  // Hover blips on interactive elements (capture phase).
  useEffect(() => {
    const onEnter = (ev: Event) => {
      const t = ev.target as Element | null
      if (t?.closest?.(INTERACTIVE)) click()
    }
    document.addEventListener("pointerenter", onEnter, true)
    return () => document.removeEventListener("pointerenter", onEnter, true)
  }, [click])

  // Scroll-velocity filter modulation.
  useEffect(() => {
    lastYRef.current = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      const v = Math.min(1, Math.abs(y - lastYRef.current) / 56)
      lastYRef.current = y
      const e = engineRef.current
      if (e && soundOnRef.current) {
        e.filter.frequency.setTargetAtTime(4200 - v * 3000, e.ctx.currentTime, 0.09)
        e.drone.gain.setTargetAtTime(0.016 + v * 0.03, e.ctx.currentTime, 0.11)
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close the AudioContext on unmount (also covers StrictMode remount in dev).
  useEffect(() => {
    return () => {
      const e = engineRef.current
      if (e) {
        try {
          e.osc.stop()
        } catch {
          /* already stopped */
        }
        void e.ctx.close()
        engineRef.current = null
      }
    }
  }, [])

  return { soundOn, toggle }
}
