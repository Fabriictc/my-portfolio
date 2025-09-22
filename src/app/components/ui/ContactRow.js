export default function ContactRow({ label, value, link }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-20 text-sm text-white/80">{label}</div>
      {link ? (
        <a 
          href={value.startsWith('http') ? value : `https://${value}`} 
          className="text-white/90 underline hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {value}
        </a>
      ) : (
        <div className="text-white/90">{value}</div>
      )}
    </div>
  )
}