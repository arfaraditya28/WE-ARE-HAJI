import { getMember, getAdjacent } from "@/data/team"
import {
  BackLink,
  Photo,
  NameRole,
  Bio,
  Portfolio,
  Experience,
  CvButton,
  MemberNav,
} from "@/components/member-sections"

export default function IrfanPage() {
  const member = getMember("irfan")!
  const { prev, next } = getAdjacent("irfan")

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <BackLink />
      <div className="mt-8 grid gap-10 md:grid-cols-[260px_1fr]">
        <aside className="md:sticky md:top-10 md:self-start">
          <Photo
            member={member}
            className="h-48 w-48 rounded-2xl object-cover ring-4 ring-indigo-100"
          />
          <NameRole
            member={member}
            nameClass="mt-4 text-3xl font-extrabold text-indigo-700 dark:text-indigo-300"
            roleClass="text-indigo-500 dark:text-indigo-400"
          />
          <CvButton member={member} />
        </aside>
        <div className="space-y-12">
          <Bio member={member} className="text-lg text-neutral-700" />
          <Portfolio member={member} />
          <Experience member={member} />
        </div>
      </div>
      <MemberNav prev={prev} next={next} />
    </main>
  )
}
