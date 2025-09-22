
export default function LandingPage() {
  const PROFILE_IMAGE_URL = '/profile.png' // replace with '/profile.jpg' (put your image in public/) or a full URL

  return (
    <div className="min-h-screen bg-gradient-to-tr from-teal-600 via-sky-600 to-orange-400 text-gray-900 antialiased">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white font-semibold">EM</div>
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

      <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Hero */}
        <section className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">I build Laravel SaaS &amp; business systems that scale.</h2>
          <p className="text-white/90 text-lg max-w-xl">Specializing in credit scoring systems for SACCOs, payroll &amp; HR platforms, and workflow automation. I help SMEs turn manual processes into reliable, automated software.</p>

          <div className="flex gap-4">
            <a href="#contact" className="inline-block bg-white text-teal-700 px-5 py-3 rounded-lg font-semibold shadow">Hire Me</a>
            <a href="#projects" className="inline-block border border-white/30 text-white px-5 py-3 rounded-lg font-medium">See My Work</a>
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

        {/* Skills & Stack */}
        <section id="skills" className="md:col-span-2 bg-white/10 rounded-xl p-6 shadow-inner">
          <h3 className="text-white text-2xl font-semibold mb-4">Tech Stack &amp; Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Badge label="Laravel" sub="APIs, Queues, Cashier" />
            <Badge label="React / Inertia" sub="Interactive UIs" />
            <Badge label="Postgres / MySQL" sub="Data modeling" />
            <Badge label="Docker / CI" sub="Deploy & automate" />
            <Badge label="Redis / Queues" sub="Background jobs" />
            <Badge label="Stripe / M‑Pesa" sub="Payments & billing" />
            <Badge label="Filament / Livewire" sub="Admin interfaces" />
            <Badge label="Testing" sub="Pest / PHPUnit" />
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="md:col-span-2 space-y-6">
          <h3 className="text-white text-2xl font-semibold">Selected Projects</h3>

          <ProjectCard
            title="Loan & Credit Scoring Platform"
            tags={["Laravel", "Multi‑tenancy", "Fintech"]}
            desc="MVP for SACCOs: member management, loans, repayments, and rule‑based credit scoring. Integrated reporting and subscription billing."
          />

          <ProjectCard
            title="HR & Payroll SaaS"
            tags={["Laravel", "M‑Pesa", "PDF payslips"]}
            desc="Employee management, attendance tracking, payslip generation and payroll runs for SMEs."
          />

          <ProjectCard
            title="Workflow Automation & Approval Matrix"
            tags={["Vue/React", "Approvals", "Audit Logs"]}
            desc="Configurable approval workflows for document routing and compliance."
          />
        </section>

        {/* Contact */}
        <section id="contact" className="md:col-span-2 bg-white/5 rounded-xl p-6"> 
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h3 className="text-white text-2xl font-semibold">Work with me</h3>
              <p className="text-white/90 mt-2">I take on freelance projects, long-term contracts, and SaaS partnerships. Book a call or send a brief.</p>

              <div className="mt-4 space-y-2">
                <ContactRow label="Email" value="hello@yourdomain.com" />
                <ContactRow label="Location" value="Nairobi, Kenya" />
                <ContactRow label="LinkedIn" value="https://www.linkedin.com/in/emmanuel-amanga/" link />
              </div>

              <div className="mt-6 flex gap-3">
                <a className="inline-block bg-white/10 px-4 py-2 rounded" href="#">Download CV</a>
                <a className="inline-block bg-white text-teal-700 px-4 py-2 rounded" href="#">Contact</a>
              </div>
            </div>

            <form className="w-full md:w-96 bg-white/10 rounded p-4 flex flex-col gap-3">
              <input placeholder="Your name" className="p-3 rounded bg-white/20 text-white outline-none" />
              <input placeholder="Email" className="p-3 rounded bg-white/20 text-white outline-none" />
              <textarea placeholder="Project brief" rows={4} className="p-3 rounded bg-white/20 text-white outline-none" />
              <button className="mt-2 bg-white text-teal-700 py-3 rounded font-semibold">Send message</button>
            </form>
          </div>
        </section>

        <footer className="md:col-span-2 py-8 text-center text-white/90">
          <p>© {new Date().getFullYear()} Emmanuel Amanga — Laravel &amp; SaaS Developer</p>
        </footer>
      </main>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="bg-white/6 rounded-lg p-3">
      <div className="text-sm text-white/90 font-semibold">{label}</div>
      <div className="text-xs text-white/80">{value}</div>
    </div>
  )
}

function Badge({ label, sub }) {
  return (
    <div className="bg-white/6 rounded-lg p-3 min-h-[70px] flex flex-col justify-center">
      <div className="text-white font-semibold">{label}</div>
      <div className="text-xs text-white/80">{sub}</div>
    </div>
  )
}

function ProjectCard({ title, desc, tags = [] }) {
  return (
    <div className="bg-white/6 rounded-lg p-4 flex flex-col md:flex-row gap-4 items-start">
      <div className="flex-1">
        <h4 className="text-white font-semibold text-lg">{title}</h4>
        <p className="text-white/90 mt-2">{desc}</p>
        <div className="mt-3 flex gap-2 flex-wrap">
          {tags.map((t) => (
            <span key={t} className="text-xs bg-white/10 px-2 py-1 rounded">{t}</span>
          ))}
        </div>
      </div>
      <div className="w-40 text-right text-white/70">Status: MVP</div>
    </div>
  )
}

function ContactRow({ label, value, link }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-20 text-sm text-white/80">{label}</div>
      {link ? (
        <a href={`https://${value}`} className="text-white/90 underline">{value}</a>
      ) : (
        <div className="text-white/90">{value}</div>
      )}
    </div>
  )
}
