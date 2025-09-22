import Badge from './ui/Badge'

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-white/10 rounded-xl p-6 shadow-inner">
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
  )
}