import Stat from './ui/Stat'

export default function HeroSection() {
  const PROFILE_IMAGE_URL = '/profile.png'

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Hero Text */}
      <section className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          I build Laravel SaaS &amp; business systems that scale.
        </h2>
        <p className="text-white/90 text-lg max-w-xl">
          Specializing in credit scoring systems for SACCOs, payroll &amp; HR platforms, and workflow automation. 
          I help SMEs turn manual processes into reliable, automated software.
        </p>

        <div className="flex gap-4">
          <a href="#contact" className="inline-block bg-white text-teal-700 px-5 py-3 rounded-lg font-semibold shadow">
            Hire Me
          </a>
          <a href="#projects" className="inline-block border border-white/30 text-white px-5 py-3 rounded-lg font-medium">
            See My Work
          </a>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Stat label="SaaS" value="Multi‑tenancy, Billing" />
          <Stat label="Fintech" value="Credit Scoring, M‑Pesa" />
          <Stat label="Frontend" value="React, Tailwind" />
          <Stat label="Cloud" value="Deployments, CI/CD" />
        </div>
      </section>

      {/* Profile image */}
      <aside className="flex items-center justify-center">
        <div className="w-72 h-72 rounded-2xl overflow-hidden ring-4 ring-white/20 shadow-xl bg-white/10">
          <img src={PROFILE_IMAGE_URL} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </aside>
    </div>
  )
}