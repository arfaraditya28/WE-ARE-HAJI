// hanung ganteng izin tampil
import Link from "next/link"
import { getMember, getAdjacent } from "@/data/team"

export default function HanungPage() {
  const member = getMember("hanung")!
  const { prev, next } = getAdjacent("hanung")

  return (
    <main className="relative flex h-[100dvh] w-full overflow-hidden">
      <iframe
        src="https://hanungakbar.my.id/"
        title="Website Hanung Akbar"
        className="h-full w-full"
        style={{ border: 0 }}
        allowFullScreen
      />

      {/* Tombol kembali ke halaman utama */}
      <Link
        href="/"
        className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur transition-colors hover:bg-white hover:text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900/80 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white"
      >
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Kembali
      </Link>

      {/* Navigasi antar member: simbol <> di tengah bawah, nama muncul saat hover */}
      <nav className="pointer-events-none absolute bottom-4 left-0 right-0 z-10 flex items-center justify-center gap-3">
        {/* Sebelumnya */}
        <Link
          href={`/member/${prev.id}`}
          className="pointer-events-auto group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white/80 text-xl font-bold text-neutral-700 shadow-sm backdrop-blur transition-colors hover:bg-white hover:text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900/80 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white"
        >
          <span aria-hidden="true">&lt;</span>
          {/* Tooltip nama member sebelumnya */}
          <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-xs font-medium text-neutral-700 opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
            {prev.name}
          </span>
        </Link>

        {/* Selanjutnya */}
        <Link
          href={`/member/${next.id}`}
          className="pointer-events-auto group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white/80 text-xl font-bold text-neutral-700 shadow-sm backdrop-blur transition-colors hover:bg-white hover:text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900/80 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white"
        >
          <span aria-hidden="true">&gt;</span>
          {/* Tooltip nama member selanjutnya */}
          <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-neutral-200 bg-white px-2.5 py-1 text-xs font-medium text-neutral-700 opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
            {next.name}
          </span>
        </Link>
      </nav>
    </main>
  )
}