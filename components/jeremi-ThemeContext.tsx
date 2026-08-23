"use client"
import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from "react"

type Theme = "light" | "dark"

interface JeremiThemeValue {
  theme: Theme
  isDark: boolean
  toggleTheme: () => void
  setTheme: (mode: Theme) => void
}

const JeremiThemeContext = createContext<JeremiThemeValue | undefined>(undefined)

export function JeremiThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light")

  // Init from localStorage (key jere-theme isolated from haji-theme)
  useEffect(() => {
    try {
      const stored = localStorage.getItem("jere-theme") as Theme | null
      if (stored === "light" || stored === "dark") {
        setThemeState(stored)
        document.documentElement.setAttribute("data-theme", stored)
        document.documentElement.style.colorScheme = stored
      } else {
        // default light like jeremimyid
        document.documentElement.setAttribute("data-theme", "light")
        document.documentElement.style.colorScheme = "light"
      }
    } catch {}
  }, [])

  // Sync to DOM + storage
  useEffect(() => {
    try {
      document.documentElement.setAttribute("data-theme", theme)
      document.documentElement.style.colorScheme = theme
      localStorage.setItem("jere-theme", theme)
    } catch {}
  }, [theme])

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"))
  }, [])

  const setTheme = useCallback((mode: Theme) => setThemeState(mode), [])

  return (
    <JeremiThemeContext.Provider value={{ theme, isDark: theme === "dark", toggleTheme, setTheme }}>
      {/* FOUC guard: ensure data-theme exists even before mount for no-JS flicker */}
      <div data-theme={theme} className="contents">
        {children}
      </div>
    </JeremiThemeContext.Provider>
  )
}

export function useJeremiTheme(): JeremiThemeValue {
  const ctx = useContext(JeremiThemeContext)
  if (!ctx) throw new Error("useJeremiTheme must be used within JeremiThemeProvider")
  return ctx
}
