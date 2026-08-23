import Link from "next/link"
import type { Member } from "@/data/team"

// Small SVG icons inline - no extra dependency, style like jere.work skill cards
function IconCode(props: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}
function IconNetwork(props: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <circle cx={12} cy={12} r={3} />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 9 15a1.65 1.65 0 0 0-1-1.51A1.65 1.65 0 0 0 6.18 13l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 11 10a1.65 1.65 0 0 0 1-1.51V8a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 15Z" />
    </svg>
  )
}
function IconTerminal(props: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <polyline points="4 17 10 11 4 5" />
      <line x1={12} y1={19} x2={20} y2={19} />
    </svg>
  )
}
function IconLayers(props: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  )
}

export const jereSkills = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
    Icon: IconCode,
    color: "var(--jere-accent)",
    bg: "color-mix(in srgb, var(--jere-accent) 15%, transparent)",
  },
  {
    title: "Backend",
    items: ["Node.js", "API Design", "Database"],
    Icon: IconTerminal,
    color: "#a855f7",
    bg: "rgba(168,85,247,0.15)",
  },
  {
    title: "Networking",
    items: ["Computer Network", "Linux", "Infra Basics"],
    Icon: IconNetwork,
    color: "#22c55e",
    bg: "rgba(34,197,94,0.15)",
  },
  {
    title: "Craft",
    items: ["UI/UX Detail", "Performance", "A11y"],
    Icon: IconLayers,
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.15)",
  },
] as const

export function JereBackLink() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-sm font-medium transition"
      style={{ color: "var(--jere-text-secondary)" }}
    >
      <span aria-hidden>←</span> Kembali
    </Link>
  )
}

export function JereMemberNav({ prev, next }: { prev: Member; next: Member }) {
  return (
    <nav
      className="mt-16 flex justify-between border-t pt-6"
      style={{ borderColor: "var(--jere-border)" }}
    >
      <Link
        href={`/member/${prev.id}`}
        className="text-sm font-medium transition hover:opacity-80"
        style={{ color: "var(--jere-text-secondary)" }}
      >
        ← {prev.name}
      </Link>
      <Link
        href={`/member/${next.id}`}
        className="text-sm font-medium transition hover:opacity-80"
        style={{ color: "var(--jere-text-secondary)" }}
      >
        {next.name} →
      </Link>
    </nav>
  )
}
