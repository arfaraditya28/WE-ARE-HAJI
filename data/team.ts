// hanung ganteng izin tampil
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
  photoPosition?: string
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
    role: "Software Engineer | Informatics Student",
    photo: "/asset/asset-hanung/pp-hanung.png",
    photoPosition: "50% 15%",
    bio: "",
    portfolio: [],
    experience: [],
  },
  {
    id: "arfa",
    name: "Arfa",
    role: "Senior Developer | Informatics Student",
    photo: "/asset/asset-arfa/arfa.jpg",
    bio: "Mahasiswa Program Studi Teknik Informatika di Institut Teknologi Sumatera (ITERA). Ex Immo 118 & Top Indonesia Beatrix😎😝",
    cvUrl: "/asset/asset-arfa/cv-arfa.pdf",
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
  },
  {
    id: "jeremi",
    name: "Jeremi",
    role: "Techtusiast",
    photo: "/foto-jeremi.webp",
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
    role: "Full-Stack Developer | Informatics Student",
    photo: "/asset/asset-irfan/gambar-pp-irfan.png",
    bio: "Mahasiswa Informatika semester 5 yang berfokus pada pengembangan perangkat lunak, Artificial Intelegence. Aktif berorganisasi dan selalu terbuka untuk belajar teknologi baru serta berkolaborasi dalam tim untuk menciptakan solusi digital.",
    cvUrl: "/Irfan-Ramadhan-resume-2.pdf",
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
        image: "/asset/asset-irfan/logo-itera.png"
      },
      {
        title: "MAN 1 Metro ",
        year: "2021 - 2024",
        desc: "Jurusan MIPA.",
        image: "/asset/asset-irfan/man-1-metro.jpg"
      },
      {
        title: "SMP Muhammadiyah Ahmad Dahlan Metro",
        year: "2018 - 2021",
        desc: "Pendidikan Menengah Pertama.",
        image: "/asset/asset-irfan/logo-muad.jpg"
      }
    ],
    organizations: [
      {
        title: "Staff Ekstra Campus - Himpunan Mahasiswa Informatika",
        year: "2026 - sekarang",
        desc: "Sebagai delegari HMIF ITERA, bertugas untuk menjalin hubungan dengan organisasi dan Himpunan lain.",
        image: "/asset/asset-irfan/hmif-itera.jpg"
      },
      {
        title: "Purna Paskibraka Indonesia",
        year: "2022 - sekarang",
        desc: "Anggota Purna Paskibraka Indonesia Cabang Kota Metro.",
        image: "/asset/asset-irfan/logo-ppi.jpg"
      }
    ],
    committees: [
      {
        title: "Staff Sub Divisi Management Acara - Informatics Festival",
        year: "2026",
        desc: "Berperan dalam pengelolaan perlombaan pada acaa Informatics Festival 2026.",
        image: "/placeholder.svg"
      },
      {
        title: "Staff Sub Divisi Content Research - PPLK ITERA",
        year: "2026",
        desc: "Melakukan riset, pengumpulan, dan validasi data sebagai bahan penyusunan konten website PPLK 2026.",
        image: "/placeholder.svg"
      },
      {
        title: "Staff Sub Divisi Dana Usaha - Informatics Festival",
        year: "2025",
        desc: "Berperan dan membantu memenuhi kebutuhan pendanaan acara melalui kegiatan dana usaha.",
        image: "/placeholder.svg"
      }
    ],
    projects: [
      {
        title: "Aplikasi Pencatatan Keuangan",
        year: "2023",
        desc: "Aplikasi pelacakan finansial full-stack dengan visualisasi data grafik interaktif (Recharts), keamanan login berbasis JWT & Google OAuth, serta manajemen database PostgreSQL.",
        url: "https://github.com/irfanramadhan123/Pencatatan_Keuangan",
        image: "/asset/asset-irfan/ss-uangku.png"
      },
      {
        title: "Interactive Birthday Gift Website (pippiyy)",
        year: "2024",
        desc: "Kado digital interaktif yang mengimplementasikan amplop Wax Seal animatif, Polaroid Photo Wall, dan pemutar musik latar. Dibangun menggunakan Next.js & React 19.",
        url: "https://github.com/irfanramadhan123/pippiyy",
        image: "/asset/asset-irfan/ss_pippiy.png"
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
