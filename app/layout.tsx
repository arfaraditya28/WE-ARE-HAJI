// hanung ganteng izin tampil
import type { Metadata } from "next"
import "./globals.css"
import ThemeToggle from "@/components/ThemeToggle"

export const metadata: Metadata = {
  title: "HAJI Mau KKN",
  description: "Pengenalan diri tim HAJI: Hanung, Arfa, Jeremi, Irfan.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('haji-theme')||localStorage.getItem('jere-theme');var isDark=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches);var v=isDark?'dark':'light';if(isDark)document.documentElement.classList.add('dark');document.documentElement.setAttribute('data-theme',v);document.documentElement.style.colorScheme=v;}catch(e){}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white font-sans text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
        {children}
        <ThemeToggle />
      </body>
    </html>
  )
}
