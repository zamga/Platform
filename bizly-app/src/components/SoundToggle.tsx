import { useAmbientAudio } from "../effects/useAmbientAudio"

export function SoundToggle() {
  const { soundOn, toggle } = useAmbientAudio()
  return (
    <button
      type="button"
      className="soty-sound interactive"
      aria-pressed={soundOn}
      aria-label="Toggle ambient sound"
      onClick={() => void toggle()}
    >
      {soundOn ? "Sound On" : "Sound Off"}
    </button>
  )
}
