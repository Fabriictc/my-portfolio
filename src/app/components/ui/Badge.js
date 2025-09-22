export default function Badge({ label, sub }) {
  return (
    <div className="bg-white/6 rounded-lg p-3 min-h-[70px] flex flex-col justify-center">
      <div className="text-white font-semibold">{label}</div>
      <div className="text-xs text-white/80">{sub}</div>
    </div>
  )
}