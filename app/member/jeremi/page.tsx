import Link from "next/link"
import { getMember, getAdjacent } from "@/data/team"
import { JereBackLink, JereMemberNav, jereSkills } from "@/components/jeremi-sections"
import JeremiThemeToggle from "@/components/JeremiThemeToggle"

export default function JeremiPage() {
  const member = getMember("jeremi")!
  const { prev, next } = getAdjacent("jeremi")

  return (
    <main
      className="flex-grow overflow-x-hidden"
      style={{ backgroundColor: "var(--jere-bg-primary)", color: "var(--jere-text-primary)" }}
    >
      {/* Sticky header — light/dark toggle like jeremimyid Navbar */}
      <header
        className="sticky top-0 z-20 flex items-center justify-between border-b px-6 py-3 backdrop-blur-md md:px-8 lg:px-16"
        style={{ backgroundColor: "var(--jere-nav-bg)", borderColor: "var(--jere-border)" }}
      >
        <Link href="/" className="flex items-center gap-2 text-sm font-bold" style={{ color: "var(--jere-text-primary)" }}>
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-xs font-extrabold" style={{ backgroundColor: "var(--jere-accent)", color: "var(--jere-bg-primary)" }}>
            J
          </span>
          jeremi — HAJI
        </Link>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline text-xs" style={{ color: "var(--jere-text-muted)" }}>
            light / dark
          </span>
          <JeremiThemeToggle />
        </div>
      </header>

      {/* HERO — mirrors jere.work Home hero */}
      <section className="relative overflow-hidden pt-4 md:pt-12">
        {/* radial ornaments */}
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{ background: "radial-gradient(circle at top left, var(--jere-accent) 15%, transparent 40%)" }}
        />
        <div
          className="pointer-events-none absolute right-0 top-1/4 h-64 w-64 rounded-full opacity-30 md:h-96 md:w-96"
          style={{ background: "radial-gradient(circle, var(--jere-accent) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12 md:grid md:grid-cols-2 md:items-center md:gap-16 md:py-20 lg:px-16">
          {/* Text — order 2 on mobile like jere.work */}
          <div className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
            <JereBackLink />
            <h1
              className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl"
              style={{ color: "var(--jere-text-primary)" }}
            >
              Jeremi
              <br />
              <span className="relative inline-block">
                <span style={{ color: "var(--jere-accent)" }}>Pison Efrat</span>
                <svg
                  className="absolute -bottom-2 left-0 h-2 w-full opacity-30"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  style={{ color: "var(--jere-accent)" }}
                >
                  <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth={2} />
                </svg>
              </span>
              <br />
              <span style={{ color: "var(--jere-text-primary)" }}>Sianturi</span>
            </h1>

            <p
              className="mt-6 text-lg font-semibold md:text-xl"
              style={{ color: "var(--jere-text-secondary)" }}
            >
              {member.role}
            </p>
            <p
              className="mt-3 text-sm font-semibold uppercase tracking-widest opacity-60"
              style={{ color: "var(--jere-accent)" }}
            >
              Informatics • Fullstack • Networking
            </p>
            <p
              className="mt-8 max-w-lg text-base leading-relaxed opacity-80 md:text-lg"
              style={{ color: "var(--jere-text-secondary)" }}
            >
              {member.bio}
            </p>

            <div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
              <a
                href="https://jere.work"
                target="_blank"
                rel="noreferrer"
                className="group relative flex w-full items-center justify-center gap-3 rounded-xl px-8 py-4 text-sm font-bold shadow-lg transition-all duration-300 hover:shadow-[var(--jere-accent)]/20 active:scale-95 sm:w-auto"
                style={{
                  backgroundColor: "var(--jere-accent)",
                  color: "#ffffff",
                  boxShadow: "0 10px 30px color-mix(in srgb, var(--jere-accent) 25%, transparent)",
                }}
              >
                Lihat Portofolio
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link
                href="/#team"
                className="flex w-full items-center justify-center gap-3 rounded-xl border px-8 py-4 text-sm font-bold backdrop-blur-sm transition-all duration-300 hover:bg-[var(--jere-border)] active:scale-95 sm:w-auto"
                style={{ borderColor: "var(--jere-border)", color: "var(--jere-text-secondary)" }}
              >
                Lihat Tim
              </Link>
            </div>
          </div>

          {/* Photo — order 1 on mobile */}
          <div className="relative order-1 mb-12 mt-4 md:order-2 md:my-0">
            <div
              className="absolute -inset-4 rounded-[40px] opacity-20 md:-inset-8"
              style={{ background: "radial-gradient(circle, var(--jere-accent) 0%, transparent 80%)" }}
            />
            <div className="relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg">
              <div
                className="absolute -right-4 -top-4 h-24 w-24 rounded-tr-3xl border-r-2 border-t-2"
                style={{ borderColor: "var(--jere-accent)" }}
              />
              <div
                className="absolute -bottom-4 -left-4 h-24 w-24 rounded-bl-3xl border-b-2 border-l-2"
                style={{ borderColor: "var(--jere-accent)" }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={member.photo}
                alt={member.name}
                className="h-full w-full rounded-3xl border-4 object-cover shadow-2xl shadow-black/10"
                style={{ borderColor: "var(--jere-bg-secondary)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-12 md:py-24" style={{ backgroundColor: "var(--jere-bg-primary)" }}>
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center sm:px-8">
          <h2 className="text-3xl font-bold leading-tight sm:text-5xl" style={{ color: "var(--jere-text-primary)" }}>
            Tentang Jeremi
          </h2>
          <div className="mb-8 mt-8 h-1 w-20 rounded-full opacity-30" style={{ backgroundColor: "var(--jere-accent)" }} />
          <p
            className="max-w-3xl text-base leading-relaxed opacity-80 md:text-xl"
            style={{ color: "var(--jere-text-secondary)" }}
          >
            Mahasiswa Informatika & Freelance Web Developer di Lampung. Spesialis membangun antarmuka modern dengan
            React & Next.js, dengan ketertarikan kuat pada performa, aksesibilitas, dan detail craft yang rapi.
          </p>
        </div>
      </section>

      {/* TECHNICAL EXPERTISE — 4 cards like jere.work */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--jere-bg-primary)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight md:text-6xl" style={{ color: "var(--jere-text-primary)" }}>
              Technical <span style={{ color: "var(--jere-accent)" }}>Expertise</span>
            </h2>
            <p
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-70 md:text-lg"
              style={{ color: "var(--jere-text-secondary)" }}
            >
              Skillset yang dibangun lewat rigor akademik dan eksperimen hands-on di lab Informatika.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {jereSkills.map((s) => (
              <div
                key={s.title}
                className="group flex flex-col rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[var(--jere-accent)]/5 active:scale-[0.98]"
                style={{ backgroundColor: "var(--jere-bg-secondary)", borderColor: "var(--jere-border)" }}
              >
                <div
                  className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110"
                  style={{ backgroundColor: s.bg }}
                >
                  <s.Icon className="h-8 w-8" style={{ color: s.color }} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight" style={{ color: "var(--jere-text-primary)" }}>
                  {s.title}
                </h3>
                <ul className="mt-auto space-y-3 pt-6">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-center gap-3 text-sm font-medium opacity-70"
                      style={{ color: "var(--jere-text-secondary)" }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: s.color }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE & PORTFOLIO */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--jere-bg-primary)" }}>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-16">
          {/* Experience timeline */}
          <div
            className="rounded-3xl border p-8"
            style={{ backgroundColor: "var(--jere-bg-secondary)", borderColor: "var(--jere-border)" }}
          >
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "var(--jere-text-primary)" }}>
              Pengalaman
            </h2>
            <ol className="mt-6 space-y-6 border-l pl-6" style={{ borderColor: "var(--jere-border)" }}>
              {member.experience.map((e, i) => (
                <li key={i} className="relative">
                  <span
                    className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: "var(--jere-accent)" }}
                  />
                  <p className="text-sm" style={{ color: "var(--jere-text-secondary)" }}>
                    {e.year}
                  </p>
                  <p className="font-semibold" style={{ color: "var(--jere-text-primary)" }}>
                    {e.title}
                  </p>
                  <p className="text-sm leading-relaxed opacity-80" style={{ color: "var(--jere-text-secondary)" }}>
                    {e.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Portfolio */}
          <div
            className="rounded-3xl border p-8"
            style={{ backgroundColor: "var(--jere-bg-secondary)", borderColor: "var(--jere-border)" }}
          >
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "var(--jere-text-primary)" }}>
              Portofolio
            </h2>
            <ul className="mt-6 space-y-3">
              {member.portfolio.map((p) => (
                <li key={p.url}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-2xl border px-5 py-4 transition hover:-translate-y-0.5"
                    style={{ borderColor: "var(--jere-border)", backgroundColor: "var(--jere-bg-tertiary)" }}
                  >
                    <span className="text-sm font-medium" style={{ color: "var(--jere-text-primary)" }}>
                      {p.label}
                    </span>
                    <span
                      className="text-sm transition group-hover:translate-x-1"
                      style={{ color: "var(--jere-accent)" }}
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <JereMemberNav prev={prev} next={next} />
        </div>
      </section>
    </main>
  )
}
