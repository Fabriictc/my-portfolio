export default function ContactForm() {
  return (
    <form className="w-full md:w-96 bg-white/10 rounded p-4 flex flex-col gap-3">
      <input 
        placeholder="Your name" 
        className="p-3 rounded bg-white/20 text-white outline-none placeholder:text-white/60" 
      />
      <input 
        placeholder="Email" 
        type="email"
        className="p-3 rounded bg-white/20 text-white outline-none placeholder:text-white/60" 
      />
      <textarea 
        placeholder="Project brief" 
        rows={4} 
        className="p-3 rounded bg-white/20 text-white outline-none placeholder:text-white/60 resize-none" 
      />
      <button 
        type="submit"
        className="mt-2 bg-white text-teal-700 py-3 rounded font-semibold hover:bg-white/90 transition-colors"
      >
        Send message
      </button>
    </form>
  )
}