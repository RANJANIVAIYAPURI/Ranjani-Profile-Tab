// ─── NotificationsContent ─────────────────────────────────────────────────────
// Renders the Notifications tab panel.

const NOTIFICATIONS = [
  { id: 1, icon: "❤️", text: "Meera liked your post",                  time: "Just now",  isNew: true  },
  { id: 2, icon: "💬", text: "Priya commented: 'Amazing work!'",        time: "5m ago",    isNew: true  },
  { id: 3, icon: "👥", text: "3 new followers this week",               time: "1h ago",    isNew: true  },
  { id: 4, icon: "🔔", text: "Your post reached 1,000 views",           time: "3h ago",    isNew: false },
  { id: 5, icon: "📌", text: "Karthik mentioned you in a thread",       time: "Yesterday", isNew: false },
  { id: 6, icon: "🎉", text: "You've been featured in Dev Spotlight",   time: "2d ago",    isNew: false },
];

function NotificationsContent() {
  return (
    <div className="animate-fadeUp">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-bold text-slate-100">Notifications</h3>
        <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
          Mark all read
        </button>
      </div>

      {/* Notification List */}
      <div className="flex flex-col gap-0.5">
        {NOTIFICATIONS.map((n) => (
          <div
            key={n.id}
            className={`flex items-center gap-3 px-3 py-3.5 rounded-xl cursor-pointer transition-colors
              ${n.isNew ? "bg-blue-950/30" : "hover:bg-slate-800/50"}`}
          >
            <div className="text-xl w-10 text-center shrink-0">{n.icon}</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-200">{n.text}</p>
              <span className="text-xs text-slate-500">{n.time}</span>
            </div>
            {n.isNew && <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationsContent;
