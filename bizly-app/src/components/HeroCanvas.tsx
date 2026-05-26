import { useEffect, useRef } from "react"

/**
 * Immersive WebGL entrance — an abstract "capital flow" field rendered with a
 * custom fragment shader: slow drifting filaments of light over a deep navy
 * ground, threaded with the firm's gold accent. Pure WebGL (no three.js) keeps
 * the payload to a few KB so the entrance never costs the performance budget.
 *
 * Behaviour:
 *  - clamps device-pixel-ratio and tracks size via ResizeObserver
 *  - pauses when the tab is hidden or the canvas scrolls off-screen
 *  - subtle, smoothed pointer parallax
 *  - reduced-motion: paints a single static frame, no animation loop
 *  - releases all GL resources on unmount; survives context loss/restore
 */

const VERT = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`

const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_pointer;

// value noise + fbm ---------------------------------------------------------
float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  float a = hash(i), b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0)), d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0, amp = 0.5;
  for (int i = 0; i < 5; i++){ v += amp * noise(p); p *= 2.02; amp *= 0.5; }
  return v;
}

void main(){
  vec2 uv = gl_FragCoord.xy / u_res.xy;
  float aspect = u_res.x / u_res.y;
  vec2 p = uv;
  p.x *= aspect;

  float t = u_time * 0.045;
  vec2 par = (u_pointer - 0.5) * 0.18;

  // domain-warp the space so streams meander like capital seeking routes
  vec2 q = vec2(fbm(p * 1.6 + vec2(0.0, t) + par),
                fbm(p * 1.6 + vec2(5.2, -t * 0.8) - par));
  vec2 r = vec2(fbm(p * 2.1 + q * 1.8 + vec2(1.7, 9.2)),
                fbm(p * 2.1 + q * 1.8 + vec2(8.3, 2.8)));
  float flow = fbm(p * 2.4 + r * 2.2 + vec2(0.0, t * 1.5));

  // luminous filaments: thresholded ridges of the flow field
  float ridge = abs(fract(flow * 4.0 + t * 2.0) - 0.5);
  float fil = smoothstep(0.06, 0.0, ridge) * smoothstep(0.18, 0.62, flow);

  // vertical lift — streams brighten toward the upper field
  float lift = smoothstep(0.0, 1.05, uv.y);

  // palette: deep navy ground -> mid navy -> gold filaments
  vec3 deep = vec3(0.020, 0.055, 0.110);
  vec3 mid  = vec3(0.043, 0.110, 0.205);
  vec3 gold = vec3(0.760, 0.600, 0.310);

  vec3 col = mix(deep, mid, smoothstep(0.0, 1.0, flow) * (0.55 + 0.45 * lift));
  col += gold * fil * (0.55 + 0.6 * lift);
  // faint secondary haze of gold along broad flow gradients
  col += gold * 0.05 * smoothstep(0.55, 0.95, flow);

  // radial vignette to seat the type
  float vig = smoothstep(1.25, 0.25, length((uv - 0.5) * vec2(aspect, 1.0)));
  col *= 0.55 + 0.45 * vig;

  // dither to kill banding on the dark ramp
  col += (hash(gl_FragCoord.xy + u_time) - 0.5) / 255.0;

  gl_FragColor = vec4(col, 1.0);
}
`

function compile(gl: WebGLRenderingContext, type: number, src: string): WebGLShader | null {
  const sh = gl.createShader(type)
  if (!sh) return null
  gl.shaderSource(sh, src)
  gl.compileShader(sh)
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    console.warn("HeroCanvas shader error:", gl.getShaderInfoLog(sh))
    gl.deleteShader(sh)
    return null
  }
  return sh
}

export function HeroCanvas({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return

    const gl = (canvas.getContext("webgl", { antialias: true, alpha: false, powerPreference: "high-performance" }) ||
      canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null
    if (!gl) return // CSS gradient fallback remains visible

    let raf = 0
    let program: WebGLProgram | null = null
    let buffer: WebGLBuffer | null = null
    let vs: WebGLShader | null = null
    let fs: WebGLShader | null = null
    let uRes: WebGLUniformLocation | null = null
    let uTime: WebGLUniformLocation | null = null
    let uPointer: WebGLUniformLocation | null = null
    let disposed = false

    const dpr = () => Math.min(window.devicePixelRatio || 1, 1.75)
    const pointer = { x: 0.5, y: 0.45 }
    const target = { x: 0.5, y: 0.45 }
    let visible = true
    let running = false

    function build() {
      vs = compile(gl!, gl!.VERTEX_SHADER, VERT)
      fs = compile(gl!, gl!.FRAGMENT_SHADER, FRAG)
      if (!vs || !fs) return false
      program = gl!.createProgram()
      if (!program) return false
      gl!.attachShader(program, vs)
      gl!.attachShader(program, fs)
      gl!.linkProgram(program)
      if (!gl!.getProgramParameter(program, gl!.LINK_STATUS)) {
        console.warn("HeroCanvas link error:", gl!.getProgramInfoLog(program))
        return false
      }
      gl!.useProgram(program)
      buffer = gl!.createBuffer()
      gl!.bindBuffer(gl!.ARRAY_BUFFER, buffer)
      gl!.bufferData(gl!.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl!.STATIC_DRAW)
      const loc = gl!.getAttribLocation(program, "a_pos")
      gl!.enableVertexAttribArray(loc)
      gl!.vertexAttribPointer(loc, 2, gl!.FLOAT, false, 0, 0)
      uRes = gl!.getUniformLocation(program, "u_res")
      uTime = gl!.getUniformLocation(program, "u_time")
      uPointer = gl!.getUniformLocation(program, "u_pointer")
      return true
    }

    function resize() {
      const w = Math.max(1, Math.floor(canvas!.clientWidth * dpr()))
      const h = Math.max(1, Math.floor(canvas!.clientHeight * dpr()))
      if (canvas!.width !== w || canvas!.height !== h) {
        canvas!.width = w
        canvas!.height = h
        gl!.viewport(0, 0, w, h)
      }
    }

    function render(timeMs: number) {
      if (disposed || !program) return
      resize()
      pointer.x += (target.x - pointer.x) * 0.05
      pointer.y += (target.y - pointer.y) * 0.05
      gl!.uniform2f(uRes, canvas!.width, canvas!.height)
      gl!.uniform1f(uTime, reduced ? 18.0 : timeMs / 1000)
      gl!.uniform2f(uPointer, pointer.x, pointer.y)
      gl!.drawArrays(gl!.TRIANGLES, 0, 3)
    }

    function loop(t: number) {
      if (disposed) return
      render(t)
      raf = requestAnimationFrame(loop)
    }

    function start() {
      if (running || disposed || reduced) return
      running = true
      raf = requestAnimationFrame(loop)
    }
    function stop() {
      running = false
      if (raf) cancelAnimationFrame(raf)
      raf = 0
    }

    if (!build()) return

    const ro = new ResizeObserver(() => {
      resize()
      if (reduced || !running) render(performance.now())
    })
    ro.observe(canvas)

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true
        if (visible && !document.hidden) start()
        else stop()
      },
      { threshold: 0 },
    )
    io.observe(canvas)

    const onPointer = (e: PointerEvent) => {
      target.x = e.clientX / window.innerWidth
      target.y = e.clientY / window.innerHeight
    }
    const onVisibility = () => {
      if (document.hidden) stop()
      else if (visible) start()
    }
    const onLost = (e: Event) => {
      e.preventDefault()
      stop()
    }
    const onRestored = () => {
      if (build()) {
        resize()
        if (reduced) render(performance.now())
        else start()
      }
    }

    if (!reduced) window.addEventListener("pointermove", onPointer, { passive: true })
    document.addEventListener("visibilitychange", onVisibility)
    canvas.addEventListener("webglcontextlost", onLost as EventListener)
    canvas.addEventListener("webglcontextrestored", onRestored as EventListener)

    resize()
    if (reduced) render(performance.now())
    else start()

    return () => {
      disposed = true
      stop()
      ro.disconnect()
      io.disconnect()
      window.removeEventListener("pointermove", onPointer)
      document.removeEventListener("visibilitychange", onVisibility)
      canvas.removeEventListener("webglcontextlost", onLost as EventListener)
      canvas.removeEventListener("webglcontextrestored", onRestored as EventListener)
      if (buffer) gl.deleteBuffer(buffer)
      if (program) gl.deleteProgram(program)
      if (vs) gl.deleteShader(vs)
      if (fs) gl.deleteShader(fs)
      gl.getExtension("WEBGL_lose_context")?.loseContext()
    }
  }, [reduced])

  return <canvas ref={ref} className="hero-canvas" aria-hidden="true" />
}
