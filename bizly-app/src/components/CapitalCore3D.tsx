import { useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { usePrefersReducedMotion } from "../effects/usePrefersReducedMotion"

const SNOISE = `
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x,289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0); const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy)); vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.0-g; vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+1.0*C.xxx; vec3 x2=x0-i2+2.0*C.xxx; vec3 x3=x0-1.0+3.0*C.xxx;
  i=mod(i,289.0);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=1.0/7.0; vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy; vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0; vec4 s1=floor(b1)*2.0+1.0; vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0); m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}`

const VERT = `
uniform float uTime; uniform float uAmp;
varying vec3 vNormal; varying vec3 vView; varying float vDisp;
${SNOISE}
void main(){
  float n1 = snoise(normalize(position)*1.5 + uTime*0.16);
  float n2 = snoise(normalize(position)*3.1 - uTime*0.11);
  float disp = (n1*0.62 + n2*0.38) * uAmp;
  vec3 pos = position + normal * disp;
  vDisp = disp;
  vNormal = normalize(normalMatrix * normal);
  vec4 mv = modelViewMatrix * vec4(pos,1.0);
  vView = mv.xyz;
  gl_Position = projectionMatrix * mv;
}`

const FRAG = `
precision highp float;
uniform vec3 uA; uniform vec3 uB; uniform vec3 uDeep;
varying vec3 vNormal; varying vec3 vView; varying float vDisp;
void main(){
  vec3 V = normalize(-vView);
  float fres = pow(1.0 - max(dot(normalize(vNormal), V), 0.0), 2.4);
  vec3 base = mix(uDeep, uA, smoothstep(-0.35, 0.35, vDisp));
  vec3 col = mix(base, uB, fres*0.85);
  col += fres * 0.7 * uA;
  gl_FragColor = vec4(col, 0.94);
}`

function Core({ reduced }: { reduced: boolean }) {
  const mesh = useRef<THREE.Mesh>(null)
  const mat = useRef<THREE.ShaderMaterial>(null)
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAmp: { value: 0.34 },
      uA: { value: new THREE.Color("#78dbff") },
      uB: { value: new THREE.Color("#d7ff3f") },
      uDeep: { value: new THREE.Color("#06131e") },
    }),
    [],
  )

  useFrame((state) => {
    if (mat.current) mat.current.uniforms.uTime.value = reduced ? 0.4 : state.clock.elapsedTime
    if (mesh.current) {
      const px = state.pointer.x
      const py = state.pointer.y
      const ty = px * 0.5
      const tx = -py * 0.35
      mesh.current.rotation.y += (ty - mesh.current.rotation.y) * 0.05 + (reduced ? 0 : 0.0009)
      mesh.current.rotation.x += (tx - mesh.current.rotation.x) * 0.05
    }
  })

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.35, 24]} />
      <shaderMaterial
        ref={mat}
        vertexShader={VERT}
        fragmentShader={FRAG}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  )
}

// Static particle cloud — generated once at module load (outside React render).
const PARTICLES = (() => {
  const N = 900
  const positions = new Float32Array(N * 3)
  const colors = new Float32Array(N * 3)
  const a = new THREE.Color("#78dbff")
  const b = new THREE.Color("#52e56e")
  for (let i = 0; i < N; i++) {
    const r = 1.9 + Math.random() * 2.4
    const th = Math.random() * Math.PI * 2
    const ph = Math.acos(2 * Math.random() - 1)
    positions[i * 3] = r * Math.sin(ph) * Math.cos(th)
    positions[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th) * 0.7
    positions[i * 3 + 2] = r * Math.cos(ph)
    const c = Math.random() > 0.5 ? a : b
    colors[i * 3] = c.r
    colors[i * 3 + 1] = c.g
    colors[i * 3 + 2] = c.b
  }
  return { positions, colors }
})()

function Particles({ reduced }: { reduced: boolean }) {
  const ref = useRef<THREE.Points>(null)
  const { positions, colors } = PARTICLES

  useFrame((state) => {
    if (ref.current && !reduced) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.04 + state.pointer.x * 0.2
      ref.current.rotation.x = state.pointer.y * -0.15
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.85}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function CapitalCore3D() {
  const reduced = usePrefersReducedMotion()
  return (
    <div className="liquid-core-shell">
      <div className="liquid-core-badge">Liquid Capital Core</div>
      <Canvas
        className="liquid-core-canvas"
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 4.2], fov: 42 }}
        frameloop={reduced ? "demand" : "always"}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <Core reduced={reduced} />
        <Particles reduced={reduced} />
      </Canvas>
      <div className="liquid-core-caption">
        <div>
          <p className="kicker">Spatial Ledger</p>
          <p className="micro">Capital rendered as a living object — glass, light and flow behind the interface.</p>
        </div>
        <div>
          <p className="kicker">Global Coverage</p>
          <p className="micro">New York · London · Frankfurt · Zurich · Ljubljana · Dubai · Singapore</p>
        </div>
      </div>
    </div>
  )
}
