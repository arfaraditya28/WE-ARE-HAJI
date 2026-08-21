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
    name: "Jeremi",
    role: "—",
    photo: "/placeholder.svg",
    bio: "",
    portfolio: [],
    experience: [],
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
