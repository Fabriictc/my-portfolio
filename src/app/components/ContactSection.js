import ContactRow from './ui/ContactRow'
import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white/5 rounded-xl p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <h3 className="text-white text-2xl font-semibold">Work with me</h3>
          <p className="text-white/90 mt-2">
            I take on freelance projects, long-term contracts, and SaaS partnerships. Book a call or send a brief.
          </p>

          <div className="mt-4 space-y-2">
            <ContactRow label="Email" value="emmanuelamanga2013@gmail.com" />
            <ContactRow label="Location" value="Nairobi, Kenya" />
            <ContactRow label="LinkedIn" value="https://www.linkedin.com/in/emmanuel-amanga/" link />
          </div>

          <div className="mt-6 flex gap-3">
            <a className="inline-block bg-white/10 px-4 py-2 rounded" href="#">
              Download CV
            </a>
            <a className="inline-block bg-white text-teal-700 px-4 py-2 rounded" href="#">
              Contact
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}