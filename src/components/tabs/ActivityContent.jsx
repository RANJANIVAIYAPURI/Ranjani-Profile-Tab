// ─── ActivityContent ──────────────────────────────────────────────────────────
// Renders the Activity tab panel as a vertical timeline.

const ACTIVITY_ITEMS = [
  { text: "Published a new article on React patterns",    time: "2h ago",    dot: "bg-emerald-400" },
  { text: "Commented on Priya's design system post",      time: "5h ago",    dot: "bg-blue-400"    },
  { text: "Started following Karthik and 2 others",       time: "Yesterday", dot: "bg-violet-400"  },
  { text: "Liked 8 posts in the React community",         time: "2d ago",    dot: "bg-rose-400"    },
  { text: "Shared a component snippet",                   time: "3d ago",    dot: "bg-emerald-400" },
];

function ActivityContent() {
  return (
    <div className="animate-fadeUp">
      <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-5">
        Recent Activity
      </h3>

      <div className="flex flex-col">
        {ACTIVITY_ITEMS.map((item, i) => (
          <div key={i} className="flex gap-4 pb-6">
            {/* Timeline dot + line */}
            <div className="flex flex-col items-center">
              <div className={`w-2.5 h-2.5 rounded-full mt-1 shrink-0 ${item.dot}`} />
              {i < ACTIVITY_ITEMS.length - 1 && (
                <div className="w-0.5 flex-1 bg-slate-800 mt-1" />
              )}
            </div>

            {/* Text */}
            <div className="flex-1 pb-1">
              <p className="text-sm font-medium text-slate-300 mb-1">{item.text}</p>
              <span className="text-xs text-slate-500">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityContent;
