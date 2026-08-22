export interface PortfolioLink {
  label: string
  url: string
}

export interface Experience {
  year: string
  title: string
  desc: string
}

export interface ImageItem {
  title: string
  desc?: string
  year?: string
  image?: string
}

export interface ProjectItem extends ImageItem {
  url?: string
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
  hobbies?: string[]
  education?: ImageItem[]
  organizations?: ImageItem[]
  committees?: ImageItem[]
  projects?: ProjectItem[]
  skills?: string[]
  certificates?: ImageItem[]
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
    name: "Muhammad Irfan Ramadhan",
    role: "Full-Stack Developer | Informatics Student",
    photo: "/image/gambar-pp-irfan.png",
    bio: "Mahasiswa Informatika semester 5 yang berfokus pada pengembangan perangkat lunak, Artificial Intelegence. Aktif berorganisasi dan selalu terbuka untuk belajar teknologi baru serta berkolaborasi dalam tim untuk menciptakan solusi digital.",
    cvUrl: "/cv-irfan.pdf",
    portfolio: [
      { label: "GitHub", url: "https://github.com/irfanramadhan123" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/irfan-ramadhan" },
      { label: "Email", url: "mailto:uwiniyan@gmail.com" }
    ],
    experience: [
      {
        year: "2025 - Sekarang",
        title: "Web Developer",
        desc: "Merancang dan membangun aplikasi web interaktif menggunakan ekosistem modern seperti React, Next.js, Express, dan PostgreSQL."
      }
    ],
    hobbies: ["Coding", "Membaca Buku", "Bermain Game", "Berolahraga"],
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Git", "Figma", "Canva", "Python", "C++"],
    education: [
      {
        title: "S1 Teknik Informatika - Institut Teknologi Sumatera",
        year: "2024 - Sekarang",
        desc: "Fokus pada Rekayasa Perangkat Lunak dan Artificial Intelegence. IPK: 3.8/4.0",
        image: "/image/logo-itera.png"
      },
      {
        title: "MAN 1 Metro ",
        year: "2021 - 2024",
        desc: "Jurusan MIPA.",
        image: "/image/man-1-metro.jpg"
      },
      {
        title: "SMP Muhammadiyah Ahmad Dahlan Metro",
        year: "2018 - 2021",
        desc: "Pendidikan Menengah Pertama.",
        image: "/image/logo-muad.jpg"
      }
    ],
    organizations: [
      {
        title: "Staff Ekstra Campus - Himpunan Mahasiswa Informatika",
        year: "2026 - sekarang",
        desc: "Sebagai delegari HMIF ITERA, bertugas untuk menjalin hubungan dengan organisasi dan Himpunan lain.",
        image: "/image/hmif-itera.jpg"
      },
      {
        title: "Purna Paskibraka Indonesia",
        year: "2022 - sekarang",
        desc: "Anggota Purna Paskibraka Indonesia Cabang Kota Metro.",
        image: "/image/logo-ppi.jpg"
      }
    ],
    committees: [
      {
        title: "Staff Sub Divisi Management Acara - Hijau bergelora",
        year: "2025",
        desc: "Merencanakan dan mengeksekusi kegiatan perayaan Hari Kemerdekaan Indonesia yang diselengarakan oleh HMIF ITERA.",
        image: "/placeholder.svg"
      },
      {
        title: "Staff Sub Divisi Management Acara - Informatics Goes To TPB (IGTTPB)",
        year: "2025",
        desc: "Membantu dalam perancangan Rundown acara IGTTPB.",
        image: "/placeholder.svg"
      },
      {
        title: "Staff Sub Divisi Dana Usaha - Informatics Festival",
        year: "2025",
        desc: "Berperan dan membantu memenuhi kebutuhan pendanaan acara melalui kegiatan dana usaha.",
        image: "/placeholder.svg"
      },
      {
        title: "Staff Sub Divisi Operasional - Web3 Goes To ITERA",
        year: "2026",
        desc: "Mengelola kebutuhan operasional untuk memastikan rangkaian acara berjalan dengan baik.",
        image: "/placeholder.svg"
      },
      {
        title: "Staff Divisi Acara - Point Project 4.0",
        year: "2024",
        desc: "Membantu dalam perancangan rundown acara lomba Point Project.",
        image: "/placeholder.svg"
      },
      {
        title: "Staff Sub Divisi Content Research - PPLK ITERA",
        year: "2026",
        desc: "Melakukan riset, pengumpulan, dan validasi data sebagai bahan penyusunan konten website PPLK 2026.",
        image: "/placeholder.svg"
      },
      {
        title: "Staff Sub Divisi Management Acara - Informatics Festival",
        year: "2026",
        desc: "Berperan dalam pengelolaan perlombaan pada acaa Informatics Festival 2026.",
        image: "/placeholder.svg"
      }
    ],
    projects: [
      {
        title: "Aplikasi Pencatatan Keuangan",
        year: "2023",
        desc: "Aplikasi pelacakan finansial full-stack dengan visualisasi data grafik interaktif (Recharts), keamanan login berbasis JWT & Google OAuth, serta manajemen database PostgreSQL.",
        url: "https://github.com/irfanramadhan123/Pencatatan_Keuangan",
        image: "/image/ss-uangku.png"
      },
      {
        title: "Interactive Birthday Gift Website (pippiyy)",
        year: "2024",
        desc: "Kado digital interaktif yang mengimplementasikan amplop Wax Seal animatif, Polaroid Photo Wall, dan pemutar musik latar. Dibangun menggunakan Next.js & React 19.",
        url: "https://github.com/irfanramadhan123/pippiyy",
        image: "/image/ss_pippiy.png"
      },

    ],
    certificates: [
      {
        title: "Asisten Praktikum Mata Kuliah Pengenalan Komputasi",
        year: "2026",
        desc: "Diterbitkan oleh PTPB ITERA.",
        image: "/placeholder.svg"
      },
    ]
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
