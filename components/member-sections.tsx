import Link from "next/link"
import type { Member } from "@/data/team"

export function BackLink() {
  return (
    <Link href="/" className="text-sm text-neutral-500 hover:underline">
      ← Kembali
    </Link>
  )
}

export function Photo({
  member,
  className = "h-40 w-40 rounded-3xl object-cover",
}: {
  member: Member
  className?: string
}) {
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img src={member.photo} alt={member.name} className={className} />
  )
}

export function NameRole({
  member,
  nameClass = "text-3xl font-extrabold",
  roleClass = "text-neutral-500",
}: {
  member: Member
  nameClass?: string
  roleClass?: string
}) {
  return (
    <div>
      <h1 className={nameClass}>{member.name}</h1>
      <p className={roleClass}>{member.role}</p>
    </div>
  )
}

export function Bio({
  member,
  className = "",
}: {
  member: Member
  className?: string
}) {
  if (!member.bio) return null
  return (
    <p className={`text-neutral-700 ${className} dark:text-neutral-300`}>
      {member.bio}
    </p>
  )
}

export function CvButton({ member }: { member: Member }) {
  if (!member.cvUrl) return null
  return (
    <a
      href={member.cvUrl}
      target="_blank"
      rel="noreferrer"
      className="mt-4 inline-block rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white dark:bg-white dark:text-neutral-900"
    >
      Download CV
    </a>
  )
}

export function Portfolio({
  member,
  className = "",
}: {
  member: Member
  className?: string
}) {
  if (member.portfolio.length === 0) return null
  return (
    <section className={className}>
      <h2 className="text-xl font-bold">Portofolio</h2>
      <ul className="mt-4 space-y-2">
        {member.portfolio.map((p) => (
          <li key={p.url}>
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-900 underline dark:text-neutral-100"
            >
              {p.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function Experience({
  member,
  className = "",
}: {
  member: Member
  className?: string
}) {
  if (member.experience.length === 0) return null
  return (
    <section className={className}>
      <h2 className="text-xl font-bold">Pengalaman</h2>
      <ol className="mt-4 space-y-4 border-l border-neutral-200 pl-6 dark:border-neutral-800">
        {member.experience.map((e, i) => (
          <li key={i}>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">{e.year}</p>
            <p className="font-semibold">{e.title}</p>
            <p className="text-neutral-600 dark:text-neutral-400">{e.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function MemberNav({ prev, next }: { prev: Member; next: Member }) {
  return (
    <nav className="mt-16 flex justify-between border-t border-neutral-200 pt-6 dark:border-neutral-800">
      <Link
        href={`/member/${prev.id}`}
        className="text-sm font-medium text-neutral-900 hover:underline dark:text-neutral-100"
      >
        ← {prev.name}
      </Link>
      <Link
        href={`/member/${next.id}`}
        className="text-sm font-medium text-neutral-900 hover:underline dark:text-neutral-100"
      >
        {next.name} →
      </Link>
    </nav>
  )
}
