// hanung ganteng izin tampil
"use client"

import { useState, useEffect, useRef } from "react"
import { getMember, getAdjacent } from "@/data/team"
import { BackLink, MemberNav } from "@/components/member-sections"
import FadeIn from "@/components/FadeIn"

/* ── Ikon teknologi ───────────────────────────────────────── */
const SKILL_INFO: Record<string, { icon: React.ReactNode; tone: string; desc: string }> = {
  React: {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm10.6-2c0-1-.3-1.9-.9-2.7.5-.9.7-2 .5-3.1-.2-1.3-1.1-2.4-2.4-2.7-1.1-.3-2.2-.1-3.1.5-.8-.6-1.7-.9-2.7-.9-1.5 0-2.9.8-3.6 2.1-1-.1-2 0-2.9.5-1.2.6-2 1.7-2.3 3-.3 1.1-.1 2.2.5 3.1-.6.8-.9 1.7-.9 2.7 0 1.5.8 2.9 2.1 3.6-.1 1 0 2 .5 2.9.6 1.2 1.7 2 3 2.3 1.1.3 2.2.1 3.1-.5.8.6 1.7.9 2.7.9 1.5 0 2.9-.8 3.6-2.1 1 .1 2 0 2.9-.5 1.2-.6 2-1.7 2.3-3 .3-1.1.1-2.2-.5-3.1.6-.8.9-1.7.9-2.7zm-10.6 6c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
      </svg>
    ),
    tone: "#0ea5b7",
    desc: "Library JavaScript untuk membangun antarmuka berbasis komponen yang dapat digunakan ulang.",
  },
  "Next.js": {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    tone: "#525252",
    desc: "Framework React dengan rendering sisi server, routing berbasis file, dan optimasi bawaan.",
  },
  "Tailwind CSS": {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.11 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.48 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35.98 1 2.11 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.48 12 7 12z" />
      </svg>
    ),
    tone: "#0891b2",
    desc: "Framework CSS utility-first untuk menyusun tampilan langsung di markup secara konsisten.",
  },
  JavaScript: {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9v6.5a1.5 1.5 0 01-3 0M13 15.5c.5.6 1.3 1 2.3 1 1.3 0 2.2-.7 2.2-1.7 0-2.2-4.2-1.5-4.2-3.6 0-1 .8-1.7 2-1.7.9 0 1.6.3 2 .9" />
      </svg>
    ),
    tone: "#ca8a04",
    desc: "Bahasa pemrograman utama di sisi web, dipakai untuk logika aplikasi dan interaksi halaman.",
  },
  HTML: {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 6l-4 6 4 6M16 6l4 6-4 6M13 4l-2 16" />
      </svg>
    ),
    tone: "#ea580c",
    desc: "Fondasi struktur dan semantik halaman web, termasuk aksesibilitas elemen.",
  },
  CSS: {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16l-1.5 15L12 21l-6.5-2L4 4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 8H9l.4 3.5h6.2L15 16l-3 1-3-1" />
      </svg>
    ),
    tone: "#2563eb",
    desc: "Pengatur tata letak, tipografi, dan animasi — termasuk Flexbox, Grid, dan responsive design.",
  },
  Git: {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="6" cy="18" r="2.5" />
        <circle cx="17" cy="12" r="2.5" />
        <path strokeLinecap="round" d="M6 8.5v7M8.4 7.2A6 6 0 0114.5 11" />
      </svg>
    ),
    tone: "#dc2626",
    desc: "Version control untuk melacak perubahan kode dan berkolaborasi lewat branch & pull request.",
  },
  Figma: {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 2a3 3 0 000 6h3V2H8zm0 8a3 3 0 000 6h3v-6H8zm0 8a3 3 0 106 0v-2H8v2zm5-16v6h3a3 3 0 000-6h-3zm3 8a3 3 0 10-3 3h3v-3z" />
      </svg>
    ),
    tone: "#a855f7",
    desc: "Design tool berbasis browser untuk prototyping, wireframing, dan kolaborasi desain UI secara real-time.",
  },
  Canva: {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 12l5 5 5-5M12 3v14" />
      </svg>
    ),
    tone: "#7c3aed",
    desc: "Platform desain grafis online untuk membuat presentasi, poster, media sosial, dan konten visual lainnya.",
  },
  Python: {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.95 2C8.116 2 8.41 3.647 8.41 3.647L8.415 5.35h3.6v.525H6.337S4 5.614 4 9.497c0 3.882 2.148 3.743 2.148 3.743h1.282v-1.8s-.069-2.148 2.113-2.148h3.636s2.045.033 2.045-1.977V4.022S15.52 2 11.95 2zm-2.01 1.162a.738.738 0 110 1.477.738.738 0 010-1.477zM12.05 22c3.834 0 3.54-1.647 3.54-1.647l-.005-1.703h-3.6v-.525h5.678S20 18.386 20 14.503c0-3.882-2.148-3.743-2.148-3.743h-1.282v1.8s.069 2.148-2.113 2.148h-3.636S8.776 14.675 8.776 16.685v3.293S8.48 22 12.05 22zm2.01-1.162a.738.738 0 110-1.477.738.738 0 010 1.477z"/>
      </svg>
    ),
    tone: "#3b82f6",
    desc: "Bahasa pemrograman serbaguna yang umum dipakai untuk scripting, data science, machine learning, dan automasi.",
  },
  "C++": {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 7l-5 5 5 5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h4m-2-2v4m3 2h4m-2-2v4" />
      </svg>
    ),
    tone: "#0284c7",
    desc: "Bahasa pemrograman sistem beperforma tinggi dengan manajemen memori manual, dipakai untuk game engine, embedded, dan algoritma.",
  },
}

const FALLBACK_SKILL = {
  icon: (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  tone: "#737373",
  desc: "Keahlian teknis pendukung yang digunakan dalam pengembangan proyek.",
}

/* ── Metadata proyek: kategori & stack ─────────────────────── */
type ProjectKind = "web" | "interactive"

const PROJECT_META: { match: string; kind: ProjectKind; tags: string[] }[] = [
  { match: "keuangan", kind: "web", tags: ["React", "Express", "PostgreSQL", "JWT"] },
  { match: "birthday", kind: "interactive", tags: ["Next.js", "React 19", "Animasi"] },
  { match: "portofolio", kind: "web", tags: ["Next.js", "Tailwind CSS", "TypeScript"] },
]

function projectMeta(title: string) {
  const key = title.toLowerCase()
  return PROJECT_META.find((m) => key.includes(m.match))
}

/* ── Ikon hobi: satu keluarga bentuk, warna mengikuti aksen ── */
function hobbyIcon(name: string) {
  const n = name.toLowerCase()
  if (n.includes("coding")) {
    return <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  }
  if (n.includes("baca") || n.includes("buku")) {
    return (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    )
  }
  if (n.includes("game")) {
    return (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
    )
  }
  return (
    <>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </>
  )
}

interface TerminalLog {
  type: "input" | "output" | "error"
  text: string
}

const WINNING_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
]

function calculateWinner(squares: (string | null)[]) {
  for (const [a, b, c] of WINNING_LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a]
  }
  return null
}

/* Label seksi yang lembut, menggantikan heading uppercase tebal */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[13px] font-medium tracking-wide text-neutral-500 dark:text-neutral-400">
      {children}
    </h2>
  )
}

export default function IrfanPage() {
  const member = getMember("irfan")!
  const { prev, next } = getAdjacent("irfan")

  const accent = "cyan"
  const [activeTab, setActiveTab] = useState<"about" | "projects" | "skills" | "timeline">("about")
  const [timelineMode, setTimelineMode] = useState<"work" | "education">("work")
  const [activeSkill, setActiveSkill] = useState<string | null>(null)
  const [projectFilter, setProjectFilter] = useState<"all" | ProjectKind>("all")
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  /* Terminal */
  const [terminalInput, setTerminalInput] = useState("")
  const [terminalLogs, setTerminalLogs] = useState<TerminalLog[]>([
    { type: "output", text: "Irfan's dev console — v2.0" },
    { type: "output", text: "Ketik 'help' untuk daftar perintah, atau 'play' untuk mini-game." },
  ])

  /* Tic-tac-toe (easter egg di dalam terminal) */
  const [isGameActive, setIsGameActive] = useState(false)
  const [gameState, setGameState] = useState<(string | null)[]>(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)
  const [gameMsg, setGameMsg] = useState("Giliranmu — pilih kotak untuk bermain sebagai 'X'.")

  const logBoxRef = useRef<HTMLDivElement>(null)

  /* Gulirkan log terminal saja, tanpa menyeret seluruh halaman */
  useEffect(() => {
    const box = logBoxRef.current
    if (box) box.scrollTop = box.scrollHeight
  }, [terminalLogs, isGameActive])

  /* Giliran bot */
  useEffect(() => {
    if (!isGameActive || isXNext) return
    if (calculateWinner(gameState) || gameState.every((c) => c !== null)) return

    const timer = setTimeout(() => {
      const empty = gameState.reduce<number[]>((acc, cell, idx) => (cell === null ? [...acc, idx] : acc), [])
      let chosen = -1

      for (const player of ["O", "X"]) {
        for (const line of WINNING_LINES) {
          const vals = [gameState[line[0]], gameState[line[1]], gameState[line[2]]]
          if (vals.filter((v) => v === player).length === 2 && vals.filter((v) => v === null).length === 1) {
            chosen = line[vals.findIndex((v) => v === null)]
            break
          }
        }
        if (chosen !== -1) break
      }
      if (chosen === -1) chosen = empty[Math.floor(Math.random() * empty.length)]

      const next = [...gameState]
      next[chosen] = "O"
      setGameState(next)

      if (calculateWinner(next)) {
        setGameMsg("AI menang. Ketik 'reset' untuk main lagi.")
        setTerminalLogs((p) => [...p, { type: "error", text: "AI menang — ketik 'reset' untuk coba lagi." }])
      } else if (next.every((c) => c !== null)) {
        setGameMsg("Seri. Ketik 'reset' untuk main lagi.")
        setTerminalLogs((p) => [...p, { type: "output", text: "Permainan seri." }])
      } else {
        setIsXNext(true)
        setGameMsg("Giliranmu.")
      }
    }, 550)

    return () => clearTimeout(timer)
  }, [isGameActive, isXNext, gameState])

  const handleCellClick = (idx: number) => {
    if (!isGameActive || !isXNext || gameState[idx] !== null || calculateWinner(gameState)) return

    const next = [...gameState]
    next[idx] = "X"
    setGameState(next)

    if (calculateWinner(next)) {
      setGameMsg("Kamu menang! Ketik 'reset' untuk main lagi.")
      setTerminalLogs((p) => [...p, { type: "output", text: "Kamu menang! Ketik 'reset' untuk main lagi." }])
    } else if (next.every((c) => c !== null)) {
      setGameMsg("Seri. Ketik 'reset' untuk main lagi.")
      setTerminalLogs((p) => [...p, { type: "output", text: "Permainan seri." }])
    } else {
      setIsXNext(false)
      setGameMsg("AI sedang berpikir...")
    }
  }

  const resetGame = () => {
    setGameState(Array(9).fill(null))
    setIsXNext(true)
    setGameMsg("Papan direset. Giliranmu sebagai 'X'.")
  }

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const input = terminalInput.trim().toLowerCase()
    if (!input) return

    setTerminalLogs((p) => [...p, { type: "input", text: input }])
    setTerminalInput("")

    if (isGameActive && (input === "reset" || input === "exit")) {
      if (input === "reset") {
        resetGame()
        setTerminalLogs((p) => [...p, { type: "output", text: "Papan Tic-Tac-Toe direset." }])
      } else {
        setIsGameActive(false)
        setTerminalLogs((p) => [...p, { type: "output", text: "Keluar dari mode permainan." }])
      }
      return
    }

    const push = (lines: string[], type: TerminalLog["type"] = "output") =>
      setTerminalLogs((p) => [...p, ...lines.map((text) => ({ type, text }))])

    switch (input) {
      case "help":
        push([
          "Perintah yang tersedia:",
          "  about     — ringkasan singkat",
          "  skills    — daftar keahlian teknis",
          "  projects  — proyek yang pernah dibuat",
          "  timeline  — riwayat pengalaman",
          "  contact   — tautan kontak",
          "  play      — mini-game Tic-Tac-Toe",
          "  clear     — bersihkan layar",
        ])
        break
      case "about":
        push([`${member.name} — ${member.role}`, member.bio])
        break
      case "skills":
        push([member.skills?.join(", ") ?? "-"])
        break
      case "projects":
        push(member.projects?.map((p) => `• ${p.title} (${p.year}) — ${p.desc}`) ?? [])
        break
      case "timeline":
        push(member.experience?.map((e) => `[${e.year}] ${e.title}`) ?? [])
        break
      case "contact":
        push(member.portfolio.map((p) => `${p.label}: ${p.url}`))
        break
      case "play":
        setIsGameActive(true)
        resetGame()
        push(["Memulai Tic-Tac-Toe melawan bot...", "Ketik 'reset' untuk mengulang, 'exit' untuk keluar."])
        break
      case "clear":
        setTerminalLogs([])
        break
      default:
        push([`Perintah tidak dikenal: '${input}'. Ketik 'help'.`], "error")
    }
  }

  const filteredProjects = member.projects?.filter((proj) => {
    if (projectFilter === "all") return true
    return projectMeta(proj.title)?.kind === projectFilter
  })

  const roleParts = member.role.split("|").map((r) => r.trim()).filter(Boolean)
  const initials = member.name.trim().slice(0, 2).toUpperCase()
  const hasPhoto = Boolean(member.photo) && member.photo !== "/placeholder.svg"

  const stats = [
    { value: member.projects?.length ?? 0, label: "Proyek" },
    { value: member.skills?.length ?? 0, label: "Keahlian" },
    { value: (member.organizations?.length ?? 0) + (member.committees?.length ?? 0), label: "Organisasi & panitia" },
    { value: member.certificates?.length ?? 0, label: "Sertifikat" },
  ]

  const tabs = [
    { id: "about", label: "Tentang" },
    { id: "projects", label: "Proyek" },
    { id: "skills", label: "Keahlian" },
    { id: "timeline", label: "Riwayat" },
  ] as const

  return (
    <div
      data-accent={accent}
      className="relative min-h-screen w-full overflow-x-hidden bg-neutral-50 pb-24 text-neutral-900 transition-colors duration-500 dark:bg-neutral-950 dark:text-neutral-100"
    >
      {/* Background Dots Grid - Gray, subtle, covers full page */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-35 dark:opacity-20" 
        style={{
          backgroundImage: `radial-gradient(circle, #a3a3a3 1px, transparent 1px)`,
          backgroundSize: '16px 16px',
        }}
      />

      {/* ── HEADER ────────────────────────────────────────── */}
      <header className="relative z-20 mx-auto flex w-full max-w-[1240px] flex-col items-start justify-between gap-4 px-5 pb-2 pt-7 sm:flex-row md:px-8">
        <BackLink />
      </header>

      {/* ── KONTEN ────────────────────────────────────────── */}
      <main className="relative z-10 mx-auto mt-6 grid w-full max-w-[1240px] grid-cols-1 gap-7 px-5 md:px-8 lg:grid-cols-12">
        {/* ── Kolom kiri: kartu profil ── */}
        <aside className="space-y-6 lg:sticky lg:top-8 lg:col-span-4 lg:self-start">
          <FadeIn>
            <div className="surface overflow-hidden rounded-[28px]">
              <div className="flex flex-col items-center px-6 pb-6 pt-7 text-center">
                <div className="relative">
                  <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-[26px] border border-neutral-200/80 dark:border-neutral-800/80 p-[2px] transition-transform duration-500 hover:scale-[1.02]">
                    <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[23px] bg-white dark:bg-neutral-900">
                      {hasPhoto ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img src={member.photo} alt={member.name} className="h-full w-full object-cover" />
                      ) : (
                        <span className="acc-gradient-text text-3xl font-semibold tracking-tight">{initials}</span>
                      )}
                    </div>
                  </div>
                </div>

                <h1 className="mt-5 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                  {member.name}
                </h1>

                <div className="mt-2.5 flex flex-wrap justify-center gap-1.5">
                  {roleParts.map((r) => (
                    <span key={r} className="acc-tint acc-text rounded-full px-2.5 py-1 text-[11px] font-medium">
                      {r}
                    </span>
                  ))}
                </div>

                {/* Kontak */}
                <div className="mt-5 flex gap-2">
                  {member.portfolio.map((p) => {
                    const key = p.label.toLowerCase()
                    let icon: React.ReactNode

                    if (key === "github") {
                      icon = (
                        <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                      )
                    } else if (key === "linkedin") {
                      icon = (
                        <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      )
                    } else {
                      icon = (
                        <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )
                    }

                    return (
                      <a
                        key={p.url}
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        title={p.label}
                        aria-label={p.label}
                        className="surface-quiet acc-link rounded-2xl p-2.5 text-neutral-500 transition-all duration-300 dark:text-neutral-400"
                      >
                        {icon}
                      </a>
                    )
                  })}
                </div>

                {member.cvUrl && (
                  <a
                    href={member.cvUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="acc-fill acc-glow mt-5 w-full rounded-2xl px-6 py-2.5 text-center text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Unduh CV
                  </a>
                )}
              </div>

              {/* Statistik ringkas — semuanya dihitung dari data, bukan angka karangan */}
              <div className="grid grid-cols-2 border-t border-black/5 dark:border-white/5">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`px-4 py-3.5 text-center ${i % 2 === 0 ? "border-r border-black/5 dark:border-white/5" : ""} ${
                      i < 2 ? "border-b border-black/5 dark:border-white/5" : ""
                    }`}
                  >
                    <div className="acc-text text-lg font-semibold tabular-nums">{s.value}</div>
                    <div className="mt-0.5 text-[11px] leading-tight text-neutral-500 dark:text-neutral-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Hobi — satu keluarga warna, tidak lagi pelangi */}
          {member.hobbies && member.hobbies.length > 0 && (
            <FadeIn delay={80}>
              <div className="surface space-y-3 rounded-[28px] p-6">
                <SectionLabel>Minat &amp; hobi</SectionLabel>
                <div className="flex flex-wrap gap-2">
                  {member.hobbies.map((h) => (
                    <span
                      key={h}
                      className="surface-quiet group flex items-center gap-2 rounded-2xl px-3 py-2 text-[13px] text-neutral-700 transition-all duration-300 hover:-translate-y-0.5 dark:text-neutral-300"
                    >
                      <svg
                        className="acc-text h-4 w-4 transition-transform duration-500 group-hover:scale-110"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        viewBox="0 0 24 24"
                      >
                        {hobbyIcon(h)}
                      </svg>
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          )}
        </aside>

        {/* ── Kolom kanan: tab konten ── */}
        <section className="space-y-6 lg:col-span-8">
          <FadeIn delay={40}>
            <div className="surface flex gap-1 rounded-2xl p-1.5" role="tablist">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 rounded-xl px-3 py-2 text-[13px] font-medium transition-all duration-300 ${
                      isActive
                        ? "acc-tint acc-text"
                        : "text-neutral-500 hover:bg-black/[0.03] hover:text-neutral-800 dark:text-neutral-400 dark:hover:bg-white/[0.04] dark:hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </FadeIn>

          <div className="min-h-[420px]">
            {/* ── 1. TENTANG ── */}
            {activeTab === "about" && (
              <FadeIn delay={60} className="space-y-7">
                <div className="surface rounded-[28px] p-6 md:p-7">
                  <h2 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white">Tentang saya</h2>
                  <p className="mt-3 text-[15px] leading-[1.75] text-neutral-600 dark:text-neutral-300">{member.bio}</p>
                </div>

                {member.organizations && member.organizations.length > 0 && (
                  <div className="space-y-3">
                    <SectionLabel>Pengalaman organisasi</SectionLabel>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {member.organizations.map((org, i) => (
                        <div key={i} className="surface lift flex gap-4 rounded-3xl p-5">
                          {org.image && org.image !== "/placeholder.svg" && (
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 ring-1 ring-black/5">
                              <img src={org.image} alt={org.title} className="h-full w-full object-contain" />
                            </div>
                          )}
                          <div className="min-w-0 flex-1">
                            {org.year && <span className="acc-text text-[11px] font-medium">{org.year}</span>}
                            <h3 className="mt-1 text-sm font-semibold leading-snug text-neutral-900 dark:text-white">{org.title}</h3>
                            {org.desc && (
                              <p className="mt-2 text-[13px] leading-relaxed text-neutral-500 dark:text-neutral-400">{org.desc}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Kepanitiaan — datanya sudah ada tapi sebelumnya tidak pernah dirender */}
                {member.committees && member.committees.length > 0 && (
                  <div className="space-y-3">
                    <SectionLabel>Kepanitiaan</SectionLabel>
                    <div className="surface divide-y divide-black/5 overflow-hidden rounded-3xl dark:divide-white/5">
                      {member.committees.map((c, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-4 px-5 py-4 transition-colors duration-300 hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
                        >
                          <span className="acc-tint acc-text mt-0.5 shrink-0 rounded-lg px-2 py-1 text-[11px] font-medium tabular-nums">
                            {c.year ?? "—"}
                          </span>
                          <div className="min-w-0">
                            <h3 className="text-sm font-medium leading-snug text-neutral-900 dark:text-white">{c.title}</h3>
                            {c.desc && (
                              <p className="mt-1 text-[13px] leading-relaxed text-neutral-500 dark:text-neutral-400">{c.desc}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {member.certificates && member.certificates.length > 0 && (
                  <div className="space-y-3">
                    <SectionLabel>Sertifikat</SectionLabel>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {member.certificates.map((cert, i) => (
                        <div key={i} className="surface lift flex items-start gap-3.5 rounded-3xl p-5">
                          <div className="acc-tint acc-text shrink-0 rounded-xl p-2.5">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div className="min-w-0">
                            {cert.year && <span className="text-[11px] text-neutral-400">{cert.year}</span>}
                            <h3 className="text-sm font-semibold leading-snug text-neutral-900 dark:text-white">{cert.title}</h3>
                            {cert.desc && (
                              <p className="mt-1.5 text-[13px] leading-relaxed text-neutral-500 dark:text-neutral-400">{cert.desc}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </FadeIn>
            )}

            {/* ── 2. PROYEK ── */}
            {activeTab === "projects" && (
              <FadeIn delay={60} className="space-y-5">
                <div className="surface-quiet inline-flex gap-1 rounded-2xl p-1">
                  {([
                    { id: "all", label: "Semua" },
                    { id: "web", label: "Web App" },
                    { id: "interactive", label: "Interaktif" },
                  ] as const).map((f) => (
                    <button
                      key={f.id}
                      onClick={() => {
                        setProjectFilter(f.id)
                        setExpandedProject(null)
                      }}
                      className={`rounded-xl px-3.5 py-1.5 text-xs font-medium transition-all duration-300 ${
                        projectFilter === f.id
                          ? "acc-fill text-white"
                          : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>

                <div className="grid gap-5">
                  {filteredProjects?.map((proj) => {
                    const isExpanded = expandedProject === proj.title
                    const meta = projectMeta(proj.title)
                    const key = proj.title.toLowerCase()

                    return (
                      <article
                        key={proj.title}
                        className={`surface overflow-hidden rounded-[28px] transition-all duration-500 ${
                          isExpanded ? "acc-ring" : "lift"
                        }`}
                      >
                        <button
                          onClick={() => setExpandedProject(isExpanded ? null : proj.title)}
                          aria-expanded={isExpanded}
                          className="w-full text-left"
                        >
                          {/* Sampul: render foto proyek jika ada dan bukan placeholder, jika tidak gunakan gradasi aksen */}
                          <div className="relative flex h-32 items-end overflow-hidden px-6 pb-5">
                            {proj.image && proj.image !== "/placeholder.svg" ? (
                              <>
                                <img src={proj.image} alt={proj.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                              </>
                            ) : (
                              <>
                                <div className="acc-gradient absolute inset-0" />
                                <div
                                  className="absolute inset-0 opacity-25"
                                  style={{
                                    backgroundImage:
                                      "radial-gradient(circle at 1px 1px, rgba(255,255,255,.55) 1px, transparent 0)",
                                    backgroundSize: "18px 18px",
                                  }}
                                />
                              </>
                            )}
                            <div className="relative flex w-full items-end justify-between gap-3">
                              <div className="min-w-0">
                                <span className="text-[11px] font-medium text-white/75">{proj.year}</span>
                                <h3 className="truncate text-lg font-semibold tracking-tight text-white">{proj.title}</h3>
                              </div>
                              <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-sm">
                                {isExpanded ? "Tutup" : "Detail"}
                                <svg
                                  className={`h-3 w-3 transition-transform duration-500 ${isExpanded ? "rotate-180" : ""}`}
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                              </span>
                            </div>
                          </div>

                          <div className="px-6 pb-5 pt-5">
                            <p className="text-[14px] leading-relaxed text-neutral-600 dark:text-neutral-300">{proj.desc}</p>
                            {meta && (
                              <div className="mt-4 flex flex-wrap gap-1.5">
                                {meta.tags.map((t) => (
                                  <span
                                    key={t}
                                    className="surface-quiet rounded-lg px-2.5 py-1 text-[11px] font-medium text-neutral-600 dark:text-neutral-400"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </button>

                        {isExpanded && (
                          <div className="fade-in-up px-6 pb-6">
                            {key.includes("keuangan") && (
                              <div className="surface-quiet space-y-3 rounded-2xl p-4">
                                <div className="flex items-center justify-between border-b border-black/5 pb-2 text-[11px] text-neutral-500 dark:border-white/5 dark:text-neutral-400">
                                  <span>Pratinjau — dashboard finansial</span>
                                  <span className="acc-text font-medium">Mockup</span>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                  {[
                                    { l: "Pemasukan", v: "+Rp 4,5jt" },
                                    { l: "Pengeluaran", v: "-Rp 1,2jt" },
                                    { l: "Saldo", v: "Rp 3,3jt" },
                                  ].map((c) => (
                                    <div key={c.l} className="rounded-xl bg-white p-2.5 dark:bg-neutral-900">
                                      <span className="text-[10px] text-neutral-400">{c.l}</span>
                                      <div className="acc-text text-xs font-semibold tabular-nums">{c.v}</div>
                                    </div>
                                  ))}
                                </div>
                                <div className="flex h-20 items-end justify-between gap-1.5 rounded-xl bg-white p-3 dark:bg-neutral-900">
                                  {[30, 45, 35, 60, 78, 50, 84].map((h, idx) => (
                                    <div
                                      key={idx}
                                      className="acc-fill w-full rounded-t-md transition-all duration-500"
                                      style={{ height: `${h}%`, opacity: 0.35 + (h / 100) * 0.6 }}
                                    />
                                  ))}
                                </div>
                              </div>
                            )}

                            {key.includes("birthday") && (
                              <div className="surface-quiet space-y-3 rounded-2xl p-4">
                                <div className="flex items-center justify-between border-b border-black/5 pb-2 text-[11px] text-neutral-500 dark:border-white/5 dark:text-neutral-400">
                                  <span>Pratinjau — gerbang &ldquo;heart seal&rdquo;</span>
                                  <span className="acc-text font-medium">Interaktif</span>
                                </div>
                                <div className="flex flex-col items-center rounded-xl bg-white px-4 py-6 text-center dark:bg-neutral-900">
                                  <div className="acc-tint acc-text flex h-12 w-12 items-center justify-center rounded-full">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg>
                                  </div>
                                  <span className="mt-3 text-[13px] font-medium text-neutral-800 dark:text-neutral-200">
                                    Kunci tersegel wax
                                  </span>
                                  <p className="mt-1 max-w-[260px] text-[12px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                                    Buka untuk melihat polaroid wall, surat interaktif, dan musik latar.
                                  </p>
                                </div>
                              </div>
                            )}

                            {key.includes("portofolio") && (
                              <div className="surface-quiet space-y-3 rounded-2xl p-4">
                                <div className="flex items-center justify-between border-b border-black/5 pb-2 text-[11px] text-neutral-500 dark:border-white/5 dark:text-neutral-400">
                                  <span>Pratinjau — struktur halaman</span>
                                  <span className="acc-text font-medium">Source</span>
                                </div>
                                <pre className="overflow-x-auto rounded-xl bg-neutral-900 p-4 font-mono text-[11px] leading-relaxed text-neutral-300 dark:bg-black/50">
                                  <code>{`export default function TeamGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {team.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  )
}`}</code>
                                </pre>
                              </div>
                            )}

                            {proj.url && (
                              <a
                                href={proj.url}
                                target="_blank"
                                rel="noreferrer"
                                className="acc-fill mt-4 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
                              >
                                Lihat di GitHub
                                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            )}
                          </div>
                        )}
                      </article>
                    )
                  })}
                </div>
              </FadeIn>
            )}

            {/* ── 3. KEAHLIAN ── */}
            {activeTab === "skills" && (
              <FadeIn delay={60} className="space-y-5">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {member.skills?.map((s) => {
                    const info = SKILL_INFO[s] ?? FALLBACK_SKILL
                    const isActive = activeSkill === s

                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setActiveSkill(isActive ? null : s)}
                        onMouseEnter={() => setActiveSkill(s)}
                        aria-pressed={isActive}
                        className={`surface flex items-center gap-3 rounded-2xl px-4 py-3.5 text-left transition-all duration-300 ${
                          isActive ? "acc-ring -translate-y-0.5" : "lift"
                        }`}
                      >
                        <span
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                          style={{ backgroundColor: `${info.tone}1a`, color: info.tone }}
                        >
                          {info.icon}
                        </span>
                        <span className="truncate text-[13px] font-medium text-neutral-800 dark:text-neutral-200">{s}</span>
                      </button>
                    )
                  })}
                </div>

                {/* Detail keahlian: kini bisa dibuka lewat klik, bukan hover saja
                    (hover tidak tersedia di perangkat sentuh) */}
                <div className="surface-quiet flex min-h-[96px] flex-col justify-center rounded-3xl p-5">
                  {activeSkill ? (
                    <div>
                      <h4 className="acc-text text-[13px] font-semibold">{activeSkill}</h4>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                        {(SKILL_INFO[activeSkill] ?? FALLBACK_SKILL).desc}
                      </p>
                    </div>
                  ) : (
                    <p className="text-center text-[13px] text-neutral-400">
                      Pilih salah satu keahlian untuk melihat penjelasannya.
                    </p>
                  )}
                </div>
              </FadeIn>
            )}

            {/* ── 4. RIWAYAT ── */}
            {activeTab === "timeline" && (
              <FadeIn delay={60} className="space-y-5">
                <div className="surface-quiet inline-flex gap-1 rounded-2xl p-1">
                  {([
                    { id: "work", label: "Pengalaman" },
                    { id: "education", label: "Pendidikan" },
                  ] as const).map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setTimelineMode(m.id)}
                      className={`rounded-xl px-4 py-1.5 text-xs font-medium transition-all duration-300 ${
                        timelineMode === m.id
                          ? "acc-fill text-white"
                          : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>

                <div className="relative ml-2 space-y-5 border-l border-black/[0.07] py-1 pl-7 dark:border-white/[0.08]">
                  {(timelineMode === "work" ? member.experience : member.education ?? []).map((item, i) => {
                    const hasImg = "image" in item && typeof (item as any).image === "string" && (item as any).image !== "/placeholder.svg"
                    return (
                      <div key={i} className="relative">
                        <span className="timeline-node acc-border absolute -left-[35px] top-2 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 bg-white dark:bg-neutral-950">
                          <span className="acc-fill h-1.5 w-1.5 rounded-full" />
                        </span>
                        <div className="surface lift flex gap-4 rounded-3xl p-5">
                          {hasImg && (
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5 ring-1 ring-black/5">
                              <img src={(item as any).image} alt={item.title} className="h-full w-full object-contain" />
                            </div>
                          )}
                          <div className="min-w-0 flex-1">
                            {item.year && <span className="acc-text text-[11px] font-medium">{item.year}</span>}
                            <h3 className="mt-1 text-sm font-semibold leading-snug text-neutral-900 dark:text-white">{item.title}</h3>
                            {item.desc && (
                              <p className="mt-2 text-[13px] leading-relaxed text-neutral-500 dark:text-neutral-400">{item.desc}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </FadeIn>
            )}
          </div>
        </section>

        {/* ── Terminal: dipindah ke lebar penuh agar layout tidak sesak ── */}
        <div className="lg:col-span-12">
          <FadeIn delay={80}>
            <div className="surface overflow-hidden rounded-[28px]">
              <div className="flex items-center justify-between border-b border-black/5 bg-black/[0.02] px-5 py-3 dark:border-white/5 dark:bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="font-mono text-[11px] text-neutral-500 dark:text-neutral-400">visitor@irfan-dev</span>
                </div>
                <span className="hidden text-[11px] text-neutral-400 sm:block">
                  Coba ketik <code className="acc-text font-mono">help</code> atau <code className="acc-text font-mono">play</code>
                </span>
              </div>

              <div
                ref={logBoxRef}
                className="scrollbar-thin h-56 space-y-1.5 overflow-y-auto bg-neutral-950 p-5 font-mono text-[11.5px] leading-relaxed text-neutral-300"
              >
                {terminalLogs.map((log, i) => (
                  <div key={i} className="whitespace-pre-wrap">
                    {log.type === "input" && <span className="text-emerald-400">visitor@irfan-dev:~$ {log.text}</span>}
                    {log.type === "output" && <span>{log.text}</span>}
                    {log.type === "error" && <span className="text-rose-400">{log.text}</span>}
                  </div>
                ))}

                {isGameActive && (
                  <div className="my-3 max-w-xs space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <span className="text-[10px] tracking-wide text-neutral-400">Tic-Tac-Toe</span>
                      <span className="text-[10px] font-medium text-amber-400">
                        {isXNext ? "Giliranmu (X)" : "Giliran AI (O)"}
                      </span>
                    </div>

                    <div className="mx-auto grid w-32 grid-cols-3 gap-2">
                      {gameState.map((cell, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleCellClick(idx)}
                          aria-label={`Kotak ${idx + 1}`}
                          className={`flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-black/40 text-sm font-semibold transition-all hover:bg-white/10 active:scale-95 ${
                            cell === "X" ? "text-emerald-400" : cell === "O" ? "text-rose-400" : ""
                          }`}
                        >
                          {cell ?? ""}
                        </button>
                      ))}
                    </div>

                    <p className="text-center text-[10px] leading-normal text-neutral-400">{gameMsg}</p>

                    <div className="flex justify-center gap-2">
                      <button
                        type="button"
                        onClick={resetGame}
                        className="rounded-lg bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white hover:bg-white/20"
                      >
                        Reset
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setIsGameActive(false)
                          setTerminalLogs((p) => [...p, { type: "output", text: "Permainan ditutup." }])
                        }}
                        className="rounded-lg bg-rose-500/15 px-2.5 py-1 text-[10px] font-medium text-rose-300 hover:bg-rose-500/25"
                      >
                        Keluar
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 bg-neutral-950 px-5 py-3">
                <span className="shrink-0 font-mono text-[11.5px] text-emerald-400">visitor@irfan-dev:~$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  className="w-full border-none bg-transparent font-mono text-[11.5px] text-neutral-200 outline-none placeholder:text-neutral-600"
                  placeholder="ketik 'help'..."
                  aria-label="Perintah terminal"
                  disabled={isGameActive && !isXNext}
                />
              </form>
            </div>
          </FadeIn>
        </div>
      </main>

      <footer className="relative z-10 mx-auto w-full max-w-[1240px] px-5 md:px-8">
        <MemberNav prev={prev} next={next} />
      </footer>
    </div>
  )
}
