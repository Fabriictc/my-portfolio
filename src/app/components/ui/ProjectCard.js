export default function ProjectCard({ title, desc, tags = [], status = "MVP" }) {
  return (
    <div className="bg-white/6 rounded-lg p-4 flex flex-col md:flex-row gap-4 items-start">
      <div className="flex-1">
        <h4 className="text-white font-semibold text-lg">{title}</h4>
        <p className="text-white/90 mt-2">{desc}</p>
        <div className="mt-3 flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs bg-white/10 px-2 py-1 rounded text-white/90"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="w-40 text-right text-white/70">Status: {status}</div>
    </div>
  )
}