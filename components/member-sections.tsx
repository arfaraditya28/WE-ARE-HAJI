import Link from "next/link"
import type { Member, ImageItem, ProjectItem } from "@/data/team"

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
      <h1 className={`gradient-text ${nameClass}`}>{member.name}</h1>
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

export function Hobbies({ hobbies, className = "" }: { hobbies?: string[]; className?: string }) {
  if (!hobbies || hobbies.length === 0) return null
  return (
    <section className={className}>
      <h2 className="text-xl font-bold">Hobi</h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {hobbies.map((h, i) => (
          <li key={i} className="rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
            {h}
          </li>
        ))}
      </ul>
    </section>
  )
}

export function Skills({ skills, className = "" }: { skills?: string[]; className?: string }) {
  if (!skills || skills.length === 0) return null
  return (
    <section className={className}>
      <h2 className="text-xl font-bold">Keahlian (Skills)</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((s, i) => (
          <span key={i} className="rounded-md border border-neutral-200 bg-white px-3 py-1 text-sm font-medium text-neutral-700 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
            {s}
          </span>
        ))}
      </div>
    </section>
  )
}

export function ImageGallerySection({
  title,
  items,
  className = "",
}: {
  title: string
  items?: (ImageItem | ProjectItem)[]
  className?: string
}) {
  if (!items || items.length === 0) return null
  return (
    <section className={className}>
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {items.map((item, i) => {
          const isProject = 'url' in item
          const url = (item as ProjectItem).url
          const content = (
            <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-300 hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)] dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-indigo-700 dark:hover:shadow-[0_8px_30px_rgba(99,102,241,0.1)]">
              {item.image && (
                <div className="relative h-40 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
              )}
              <div className="flex flex-1 flex-col p-4">
                {item.year && <span className="mb-1 text-xs font-medium text-indigo-500">{item.year}</span>}
                <h3 className="font-bold text-neutral-900 dark:text-white">{item.title}</h3>
                {item.desc && <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{item.desc}</p>}
              </div>
            </div>
          )

          if (isProject && url) {
            return (
              <a key={i} href={url} target="_blank" rel="noreferrer" className="block h-full group">
                {content}
              </a>
            )
          }

          return <div key={i} className="block h-full">{content}</div>
        })}
      </div>
    </section>
  )
}
