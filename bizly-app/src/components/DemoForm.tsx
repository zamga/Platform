import { useState, type FormEvent, type ReactNode } from "react"

interface Props {
  className?: string
  children: ReactNode
  note?: string
}

const DEFAULT_NOTE =
  "Thank you. This preview does not transmit data, but the interaction has been recorded in the demo interface."

/** Local-only form: prevents submission and shows a confirmation message. */
export function DemoForm({ className, children, note = DEFAULT_NOTE }: Props) {
  const [submitted, setSubmitted] = useState(false)
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }
  return (
    <form className={className} onSubmit={onSubmit} noValidate>
      {children}
      {submitted && (
        <p className="micro demo-confirm" role="status">
          {note}
        </p>
      )}
    </form>
  )
}
