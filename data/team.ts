export interface PortfolioLink {
  label: string
  url: string
}

export interface Experience {
  year: string
  title: string
  desc: string
}

export interface Member {
  id: "arfa" | "jeremi" | "irfan" | "hanung"
  name: string
  role: string
  photo: string
  bio: string
  cvUrl?: string
  portfolio: PortfolioLink[]
  experience: Experience[]
}

export const team: Member[] = [
  {
    id: "hanung",
    name: "Hanung",
    role: "—",
    photo: "/placeholder.svg",
    bio: "",
    portfolio: [],
    experience: [],
  },
  {
    id: "arfa",
    name: "Arfa",
    role: "—",
    photo: "/placeholder.svg",
    bio: "",
    portfolio: [],
    experience: [],
  },
  {
    id: "jeremi",
    name: "Jeremi Pison Efrat Sianturi",
    role: "Software Engineer — Fullstack Developer",
    photo: "/placeholder.svg",
    bio: "Informatics student & Freelance Web Developer. Saya membangun antarmuka modern dengan React & Next.js, fokus pada performa, aksesibilitas, dan pengalaman pengguna yang bersih.",
    cvUrl: "https://jere.work/cv",
    portfolio: [
      { label: "pplkitera.com — PPLK ITERA 2026 Website", url: "https://pplkitera.com" },
      { label: "nodryx.com", url: "https://nodryx.com" },
      { label: "resisst.web.id", url: "https://resisst.web.id" },
    ],
    experience: [
      { year: "2024 — Sekarang", title: "Freelance Web Developer", desc: "Membangun aplikasi web modern untuk klien UMKM & personal brand dengan React, Next.js, dan Node.js." },
      { year: "2026", title: "PPLK ITERA 2026 — Kepala Divisi IMTEK", desc: "Memimpin Divisi Implementasi Teknologi pada Program Pengenalan Lingkungan Kampus ITERA 2026, mengelola implementasi sistem, infrastruktur digital, dan dukungan teknis skala ribuan peserta." },
    ],
  },
  {
    id: "irfan",
    name: "Irfan",
    role: "—",
    photo: "/placeholder.svg",
    bio: "",
    portfolio: [],
    experience: [],
  },
]

export function getMember(id: string): Member | undefined {
  return team.find((m) => m.id === id)
}

export function getAdjacent(id: string): { prev: Member; next: Member } {
  const i = team.findIndex((m) => m.id === id)
  const len = team.length
  return {
    prev: team[(i - 1 + len) % len],
    next: team[(i + 1) % len],
  }
}
