import { team } from "@/data/team"
import MemberCard from "./MemberCard"

export default function TeamGrid() {
  return (
    <section id="team" className="mx-auto max-w-6xl px-6 pt-4 pb-20">
      <h2 className="text-center text-2xl font-bold sm:text-3xl">Anggota Tim</h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((m) => (
          <MemberCard key={m.id} member={m} />
        ))}
      </div>
    </section>
  )
}
