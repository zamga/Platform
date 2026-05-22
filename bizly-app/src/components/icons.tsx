type IconProps = { className?: string }

export function StarLogo({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 1.5l1.2 3.7h3.8L10.4 7.6l1.2 3.7L8 9.9l-3.6 1.4 1.2-3.7L3 5.2h3.8L8 1.5z" />
    </svg>
  )
}

export function HomeIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 10.5L10 4l7 6.5V16a1 1 0 01-1 1h-4v-5H8v5H4a1 1 0 01-1-1v-5.5z" strokeLinejoin="round" />
    </svg>
  )
}

export function MicIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="7" y="3" width="6" height="10" rx="3" />
      <path d="M4 10a6 6 0 0012 0M10 16v2" strokeLinecap="round" />
    </svg>
  )
}

export function ArrowRight({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 10h12M12 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CheckIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 8l3.5 3.5L13 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PulseIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <circle cx="10" cy="10" r="3" />
      <circle cx="10" cy="10" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    </svg>
  )
}

export function DatabaseIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="10" cy="5" rx="6" ry="2.5" />
      <path d="M4 5v10c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V5" />
      <path d="M4 10c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5" />
    </svg>
  )
}

export function PersonIcon({ className = "w-3.5 h-3.5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor">
      <circle cx="8" cy="5" r="2.5" />
      <path d="M3 14c0-2.8 2.2-5 5-5s5 2.2 5 5" />
    </svg>
  )
}

export function BrainIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 4c-2 0-3.5 1.5-3.5 3.5 0 .8.3 1.5.8 2-1.2.5-2 1.7-2 3 0 1.9 1.6 3.5 3.5 3.5.5 0 1-.1 1.5-.3.5 1.2 1.7 2 3 2 2.2 0 4-1.8 4-4 0-1.3-.8-2.5-2-3 .5-.5.8-1.2.8-2C15.5 5.5 14 4 12 4z" strokeLinecap="round" />
    </svg>
  )
}

export function ChatIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 6h14a2 2 0 012 2v7a2 2 0 01-2 2H9l-4 3V8a2 2 0 012-2z" strokeLinejoin="round" />
    </svg>
  )
}

export function BellIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 4a5 5 0 00-5 5v3l-2 2h14l-2-2V9a5 5 0 00-5-5z" strokeLinejoin="round" />
      <path d="M10 19a2 2 0 004 0" strokeLinecap="round" />
      <circle cx="17" cy="6" r="3" fill="#ef4444" stroke="none" />
    </svg>
  )
}

export function ReportIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M7 4h7l4 4v12a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1z" />
      <path d="M14 4v4h4M10 12h6M10 16h4" strokeLinecap="round" />
      <circle cx="9" cy="11" r="2" />
    </svg>
  )
}

export function TrendUp({ className = "w-3 h-3" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 8l3-3 2 2 3-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
