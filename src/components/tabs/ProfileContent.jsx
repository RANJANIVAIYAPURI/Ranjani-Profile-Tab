// ─── ProfileContent ───────────────────────────────────────────────────────────
// Renders the Profile tab panel.
// No props needed — extend with a `user` prop to make it dynamic.

function ProfileContent() {
  return (
    <div className="animate-fadeUp">

      {/* Avatar + Info */}
      <div className="flex flex-wrap items-start gap-4 mb-7">
        <div className="p-0.5 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 shrink-0">
          <div className="w-16 h-16 rounded-full bg-[#0b0c10] flex items-center justify-center text-lg font-bold text-slate-100">
            RV
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-bold text-slate-100 mb-0.5">Ranjani V</h2>
          <p className="text-sm text-slate-500 mb-2">@ranjani · Chennai, IN</p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-semibold bg-blue-950 text-blue-400 border border-blue-900 rounded-full px-3 py-0.5">
              Python Dev
            </span>
            <span className="text-xs font-semibold bg-blue-950 text-blue-400 border border-blue-900 rounded-full px-3 py-0.5">
              React Dev
            </span>
          </div>
        </div>

        <button className="text-xs font-semibold text-slate-400 border border-slate-700 rounded-xl px-4 py-2 hover:border-blue-500 hover:text-blue-400 transition-all duration-200 shrink-0">
          Edit Profile
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 bg-[#0d1117] border border-slate-800 rounded-2xl overflow-hidden mb-6">
        {[
          ["284",   "Posts"],
          ["12.4k", "Followers"],
          ["891",   "Following"],
          ["4.8★",  "Rating"],
        ].map(([value, label], i) => (
          <div key={label} className={`py-4 text-center ${i < 3 ? "border-r border-slate-800" : ""}`}>
            <span className="block text-lg font-bold text-slate-100">{value}</span>
            <span className="block text-xs text-slate-500 mt-0.5">{label}</span>
          </div>
        ))}
      </div>

      {/* Bio */}
      <div>
        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">About</h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          Building beautiful interfaces and exploring the intersection of design and engineering.
          Open to collaborations.
        </p>
      </div>
    </div>
  );
}

export default ProfileContent;
