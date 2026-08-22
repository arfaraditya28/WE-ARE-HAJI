import type { Member } from "@/data/team"

interface SocialLink {
  label: string
  url: string
}

type ArfaMember = Member & { socials: SocialLink[] }

export const arfa: ArfaMember = {
  id: "arfa",
  name: "Muhammad Arfa Raditya",
  role: "124140015",
  photo: "/arfa.jpg",
  bio: "Mahasiswa Program Studi Teknik Informatika di Institut Teknologi Sumatera (ITERA). Ex Immo 118 & Top Indonesia Beatrix😎😝",
  cvUrl: "/cv-arfa.pdf",
  portfolio: [{ label: "arfaraditya.my.id", url: "https://arfaraditya.my.id" }],
  experience: [
    {
      year: "2026 – Sekarang",
      title: "Departemen Eksternal — Divisi Ekstra Kampus HMIF ITERA",
      desc: "Menjalin komunikasi dan kerja sama dengan organisasi di luar kampus melalui koordinasi dengan berbagai pihak eksternal untuk memperluas jaringan relasi himpunan.",
    },
    {
      year: "2025",
      title: "Staff Divisi Fundraising — Sub Divisi Dana Usaha Informatics Festival",
      desc: "Berperan dalam Sub Divisi Dana Usaha Infest untuk membantu memenuhi kebutuhan pendanaan acara melalui kegiatan dana usaha.",
    },
    {
      year: "2026",
      title: "Staff Divisi Implementasi Teknologi —Sub Divisi Content Research Program Pengenalan Lingkungan Kampus (PPLK) ITERA",
      desc: "Melakukan riset, pengumpulan, dan validasi data sebagai bahan penyusunan konten website PPLK 2026.",
    },
    {
      year: "2026",
      title: "Staff Divisi Acara — Sub Divisi Manajemen Lomba Informatics Festival",
      desc: "Berperan dalam pengelolaan perlombaan pada acara Informatics Festival 2026, khususnya kompetisi Mobile Legends, dengan mengatur alur pertandingan dan memastikan perlombaan berjalan dengan baik.",
    },
  ],
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/raditya.arfa/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-arfa-raditya-726411323/" },
    { label: "Github", url: "https://github.com/arfaraditya28" },
  ],
}
