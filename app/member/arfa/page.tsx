// hanung ganteng izin tampil
"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { getAdjacent } from "@/data/team"
import { arfa } from "./data"
import { useRouter } from "next/navigation"

/* ── icon helpers ───────────────────────────────────── */
function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M15 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7z" />
      <path d="M14 2v4a2 2 0 002 2h4" />
      <line x1="10" y1="9" x2="8" y2="9" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1a2.7 2.7 0 01.8-1.7c-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.3-3.2a4.5 4.5 0 01.1-3.2s1-.3 3.4 1.3a11.5 11.5 0 016.2 0c2.3-1.6 3.3-1.3 3.3-1.3a4.5 4.5 0 01.1 3.2 4.6 4.6 0 011.3 3.2c0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3z" />
    </svg>
  )
}

/* ── social icon picker ────────────────────────────── */
function getSocialIcon(label: string) {
  const l = label.toLowerCase()
  if (l.includes("instagram")) return <InstagramIcon />
  if (l.includes("linkedin")) return <LinkedInIcon />
  if (l.includes("github")) return <GithubIcon />
  return <GlobeIcon />
}

/* ── scroll reveal wrapper ─────────────────────────── */
function FadeIn({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  )
}

/* ── main page ─────────────────────────────────────── */
export default function ArfaPage() {
  const member = arfa
  const { prev, next } = getAdjacent("arfa")
  const router = useRouter()

  /* ── Keyboard navigation: ← prev, → next ── */
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      // Don't navigate if user is typing in an input/textarea
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === "INPUT" || tag === "TEXTAREA") return

      if (e.key === "ArrowLeft") {
        router.push(`/member/${prev.id}`)
      } else if (e.key === "ArrowRight") {
        router.push(`/member/${next.id}`)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [prev.id, next.id, router])

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* ── Background ── */}
      <div className="pointer-events-none fixed inset-0 -z-30 bg-neutral-50 dark:bg-neutral-950" />

      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="arfa-grid pointer-events-none fixed inset-0 -z-20 opacity-[0.035] dark:opacity-[0.06]"
      />

      {/* Gradient blobs */}
      <div
        aria-hidden="true"
        className="animate-blob pointer-events-none fixed -left-32 -top-32 -z-10 h-[500px] w-[500px] rounded-full bg-sky-200/25 blur-[120px] dark:bg-sky-800/30"
      />
      <div
        aria-hidden="true"
        className="animate-blob pointer-events-none fixed -right-24 top-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-blue-200/20 blur-[100px] dark:bg-blue-900/25"
        style={{ animationDelay: "-5s" }}
      />
      <div
        aria-hidden="true"
        className="animate-blob pointer-events-none fixed -bottom-24 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-sky-300/15 blur-[130px] dark:bg-sky-900/20"
        style={{ animationDelay: "-10s" }}
      />
      <div
        aria-hidden="true"
        className="animate-blob pointer-events-none fixed bottom-1/3 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-blue-100/20 blur-[100px] dark:bg-blue-800/20"
        style={{ animationDelay: "-15s" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-100/15 blur-[140px] dark:bg-sky-950/30"
      />

      {/* ── Content ── */}
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 md:py-12">
        {/* Back button */}
        <FadeIn>
          <a
            href="/"
            className="arfa-btn-ghost inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium text-neutral-500 transition-all duration-300 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800/60 dark:hover:text-neutral-100"
          >
            <ArrowLeftIcon />
            <span>Kembali</span>
          </a>
        </FadeIn>

        {/* ── Hero Section ── */}
        <FadeIn>
          <header className="arfa-card mt-6 overflow-hidden rounded-2xl border border-neutral-200/70 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <div className="grid gap-0 md:grid-cols-12">
              {/* Photo — appears FIRST on mobile, stays right on desktop */}
              <div className="relative flex items-center justify-center p-8 md:order-2 md:col-span-5 md:p-10">
                <div className="relative overflow-hidden rounded-2xl border border-neutral-200 shadow-lg dark:border-neutral-700">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="aspect-[3/4] w-56 object-cover object-[50%_30%] transition-transform duration-700 hover:scale-105 sm:w-64"
                  />
                </div>
              </div>

              {/* Info — appears SECOND on mobile, stays left on desktop */}
              <div className="flex flex-col items-center justify-center p-8 text-center md:order-1 md:col-span-7 md:items-start md:p-12 md:text-left">
                <div className="inline-flex w-fit items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500" />
                  NIM {member.role}
                </div>

                <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl dark:text-white">
                  {member.name}
                </h1>

                <div className="mt-7 grid gap-3 sm:grid-cols-2 md:max-w-md">
                  {member.cvUrl && (
                    <a
                      href={member.cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-xl border border-neutral-100 bg-neutral-50/60 px-4 py-4 transition-all duration-300 hover:border-neutral-200 hover:bg-neutral-900 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-800/40 dark:hover:border-neutral-600 dark:hover:bg-white"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-500 transition-all duration-300 group-hover:border-neutral-700 group-hover:bg-neutral-800 group-hover:text-white dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:group-hover:border-neutral-300 dark:group-hover:bg-neutral-100 dark:group-hover:text-neutral-900">
                        <DocumentIcon />
                      </div>
                      <span className="text-sm font-semibold text-neutral-700 transition-colors duration-300 group-hover:text-white dark:text-neutral-200 dark:group-hover:text-neutral-900">
                        Lihat CV
                      </span>
                      <span className="ml-auto text-neutral-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-neutral-400 dark:text-neutral-600 dark:group-hover:text-neutral-500">
                        <ExternalLinkIcon />
                      </span>
                    </a>
                  )}
                  <a
                    href={member.portfolio[0]?.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-neutral-100 bg-neutral-50/60 px-4 py-4 transition-all duration-300 hover:border-neutral-200 hover:bg-neutral-900 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-800/40 dark:hover:border-neutral-600 dark:hover:bg-white"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-500 transition-all duration-300 group-hover:border-neutral-700 group-hover:bg-neutral-800 group-hover:text-white dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:group-hover:border-neutral-300 dark:group-hover:bg-neutral-100 dark:group-hover:text-neutral-900">
                      <StarIcon />
                    </div>
                    <span className="text-sm font-semibold text-neutral-700 transition-colors duration-300 group-hover:text-white dark:text-neutral-200 dark:group-hover:text-neutral-900">
                      Portfolio
                    </span>
                    <span className="ml-auto text-neutral-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-neutral-400 dark:text-neutral-600 dark:group-hover:text-neutral-500">
                      <ExternalLinkIcon />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </header>
        </FadeIn>

        {/* ── About Section (full width) ── */}
        <FadeIn>
          <div className="mt-5">
            <SectionCard label="Tentang">
              <p className="text-[15px] leading-[1.75] text-neutral-600 dark:text-neutral-300">
                {member.bio}
              </p>
            </SectionCard>
          </div>
        </FadeIn>

        {/* ── Experience Timeline ── */}
        <FadeIn>
          <div className="mt-5">
            <SectionCard label="Pengalaman">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute bottom-0 left-[7px] top-0 w-px bg-neutral-200 dark:bg-neutral-700" />

                <div className="space-y-5">
                  {member.experience.map((e, i) => (
                    <div key={i} className="group relative flex items-center gap-5 pl-0">
                      {/* Timeline dot */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="flex h-[15px] w-[15px] items-center justify-center rounded-full border-[2px] border-neutral-300 bg-white transition-colors duration-300 group-hover:border-neutral-500 dark:border-neutral-600 dark:bg-neutral-900 dark:group-hover:border-neutral-400">
                          <div className="h-[5px] w-[5px] rounded-full bg-neutral-300 transition-colors duration-300 group-hover:bg-neutral-500 dark:bg-neutral-600 dark:group-hover:bg-neutral-400" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 rounded-xl border border-neutral-100 bg-neutral-50/60 p-5 transition-all duration-300 group-hover:border-neutral-200 group-hover:bg-neutral-50 group-hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-800/40 dark:group-hover:border-neutral-700 dark:group-hover:bg-neutral-800/70">
                        <span className="inline-block rounded border border-neutral-200 bg-white px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                          {e.year}
                        </span>
                        <h3 className="mt-2 text-[15px] font-bold leading-snug text-neutral-800 dark:text-neutral-100">
                          {e.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                          {e.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-7 text-sm text-neutral-400 dark:text-neutral-500">
                Informasi lebih lanjut bisa dilihat di{" "}
                <a
                  href="https://arfaraditya.my.id"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-neutral-600 underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 hover:text-neutral-900 hover:decoration-neutral-500 dark:text-neutral-300 dark:decoration-neutral-600 dark:hover:text-white dark:hover:decoration-neutral-400"
                >
                  arfaraditya.my.id
                </a>
              </p>
            </SectionCard>
          </div>
        </FadeIn>

        {/* ── Social Media ── */}
        <FadeIn>
          <div className="mt-5">
            <SectionCard label="Sosial Media">
              <div className="grid gap-3 sm:grid-cols-3">
                {member.socials.map((s) => (
                  <a
                    key={s.url}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-neutral-100 bg-neutral-50/60 px-4 py-4 transition-all duration-300 hover:border-neutral-200 hover:bg-neutral-900 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-800/40 dark:hover:border-neutral-600 dark:hover:bg-white"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-500 transition-all duration-300 group-hover:border-neutral-700 group-hover:bg-neutral-800 group-hover:text-white dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:group-hover:border-neutral-300 dark:group-hover:bg-neutral-100 dark:group-hover:text-neutral-900">
                      {getSocialIcon(s.label)}
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-semibold text-neutral-700 transition-colors duration-300 group-hover:text-white dark:text-neutral-200 dark:group-hover:text-neutral-900">
                        {s.label}
                      </span>
                    </div>
                    <span className="text-neutral-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-neutral-400 dark:text-neutral-600 dark:group-hover:text-neutral-500">
                      <ExternalLinkIcon />
                    </span>
                  </a>
                ))}
              </div>
            </SectionCard>
          </div>
        </FadeIn>

        {/* ── Navigation ── */}
        <FadeIn>
          <nav className="mt-8 grid grid-cols-2 gap-3">
            <a
              href={`/member/${prev.id}`}
              className="group flex items-center gap-3 rounded-xl border border-neutral-200/70 bg-white px-5 py-4 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 transition-colors duration-300 group-hover:bg-neutral-200 group-hover:text-neutral-600 dark:bg-neutral-800 dark:text-neutral-500 dark:group-hover:bg-neutral-700 dark:group-hover:text-neutral-300">
                <ChevronLeftIcon />
              </span>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-400 dark:text-neutral-500">
                  Sebelumnya
                </p>
                <p className="text-sm font-bold text-neutral-700 dark:text-neutral-200">
                  {prev.name}
                </p>
              </div>
            </a>
            <a
              href={`/member/${next.id}`}
              className="group flex items-center justify-end gap-3 rounded-xl border border-neutral-200/70 bg-white px-5 py-4 text-right transition-all duration-300 hover:border-neutral-300 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
            >
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-400 dark:text-neutral-500">
                  Selanjutnya
                </p>
                <p className="text-sm font-bold text-neutral-700 dark:text-neutral-200">
                  {next.name}
                </p>
              </div>
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 text-neutral-400 transition-colors duration-300 group-hover:bg-neutral-200 group-hover:text-neutral-600 dark:bg-neutral-800 dark:text-neutral-500 dark:group-hover:bg-neutral-700 dark:group-hover:text-neutral-300">
                <ChevronRightIcon />
              </span>
            </a>
          </nav>
        </FadeIn>

        <div className="h-8" />
      </div>

      {/* ── Page-scoped styles ── */}
      <style jsx>{`
        .arfa-grid {
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.07) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(0, 0, 0, 0.07) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        :global(.dark) .arfa-grid {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            );
        }
      `}</style>
    </main>
  )
}

/* ── Section Card component ────────────────────────── */
function SectionCard({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <section className="arfa-card rounded-2xl border border-neutral-200/70 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-8 dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-none dark:hover:shadow-none">
      <h2 className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-neutral-900 dark:text-white">
        {label}
      </h2>
      {children}
    </section>
  )
}
