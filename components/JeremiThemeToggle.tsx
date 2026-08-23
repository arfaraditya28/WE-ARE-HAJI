"use client"
import { useJeremiTheme } from "./jeremi-ThemeContext"

function SunIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={props.className}>
      <circle cx={12} cy={12} r={4} />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}
function MoonIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={props.className}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

// Desktop style like jeremimyid Navbar toggle, plus mobile icon-only variant via prop
export default function JeremiThemeToggle({ variant = "desktop" }: { variant?: "desktop" | "icon" }) {
  const { isDark, toggleTheme } = useJeremiTheme()

  if (variant === "icon") {
    return (
      <button
        onClick={toggleTheme}
        className="rounded-lg p-2 transition"
        style={{ color: "var(--jere-text-secondary)" }}
        aria-label="Toggle theme"
      >
        {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center rounded-lg border px-4 py-2 text-sm font-medium transition"
      style={{ color: "var(--jere-text-secondary)", borderColor: "var(--jere-border)" }}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <>
          <SunIcon className="mr-2 h-4 w-4" />
          <span className="font-mono text-xs">light</span>
        </>
      ) : (
        <>
          <MoonIcon className="mr-2 h-4 w-4" />
          <span className="font-mono text-xs">dark</span>
        </>
      )}
    </button>
  )
}
