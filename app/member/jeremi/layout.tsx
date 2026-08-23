import type { ReactNode } from "react"
import { JeremiThemeProvider } from "@/components/jeremi-ThemeContext"

export default function JeremiLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* FOUC guard — default light like jeremimyid */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){try{var s=localStorage.getItem('jere-theme');var t=s||'light';document.documentElement.setAttribute('data-theme',t);document.documentElement.style.colorScheme=t;}catch(e){}})();`,
        }}
      />
      <JeremiThemeProvider>{children}</JeremiThemeProvider>
    </>
  )
}
