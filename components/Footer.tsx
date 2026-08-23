// hanung ganteng izin tampil
export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-10 text-center text-sm dark:border-neutral-800">
      <p className="text-neutral-500 dark:text-neutral-400">
        © {new Date().getFullYear()} HAJI.
      </p>
    </footer>
  )
}
