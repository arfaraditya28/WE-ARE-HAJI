import Link from "next/link"
import type { Member } from "@/data/team"

export default function MemberCard({ member }: { member: Member }) {
  return (
    <Link
      href={`/member/${member.id}`}
      className="group block rounded-2xl border border-neutral-200 bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={member.photo}
        alt={member.name}
        className="mx-auto h-28 w-28 rounded-full object-cover"
      />
      <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
        {member.name}
      </h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">{member.role}</p>
      <span className="mt-4 block text-sm font-medium text-neutral-900 group-hover:underline dark:text-neutral-100">
        Lihat profil →
      </span>
    </Link>
  )
}
