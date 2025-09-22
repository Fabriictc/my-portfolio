export default function Header() {
  return (
    <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-semibold">
          EM
        </div>
        <div>
          <h1 className="text-white text-xl font-semibold">Emmanuel Amanga</h1>
          <p className="text-white/80 text-sm">Laravel &amp; Full‑Stack Developer • SaaS for SMEs &amp; SACCOs</p>
        </div>
      </div>
      <nav className="hidden md:flex gap-6 items-center text-white/90">
        <a href="#work" className="hover:underline">Work</a>
        <a href="#skills" className="hover:underline">Skills</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="bg-white/10 px-3 py-2 rounded-md">Contact</a>
      </nav>
    </header>
  )
}