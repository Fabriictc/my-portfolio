export default function Stat({ label, value }) {
  return (
    <div className="bg-white/6 rounded-lg p-3">
      <div className="text-sm text-white/90 font-semibold">{label}</div>
      <div className="text-xs text-white/80">{value}</div>
    </div>
  )
}