// ─── ChatContent ──────────────────────────────────────────────────────────────
// Renders the Chat tab panel with a list of messages.
// Extend with props to make messages dynamic from an API.

const MESSAGES = [
  { id: 1, name: "Santhosh Kumar S",    time: "2m ago",    text: "Hey! Did you check the new design system?", unread: true,  avatar: "SK" },
  { id: 2, name: "Dev Team",    time: "1h ago",    text: "Sprint review at 4 PM — don't miss it!",    unread: true,  avatar: "DT" },
  { id: 3, name: "Gayathri V R.",    time: "3h ago",    text: "The component looks great, nice work 🔥",   unread: false, avatar: "GV" },
  { id: 4, name: "Aazhini S.",  time: "Yesterday", text: "Can we sync tomorrow morning?",             unread: false, avatar: "AS" },
  { id: 5, name: "Design Club", time: "2d ago",    text: "New Figma tokens are live!",               unread: false, avatar: "DC" },
];

function ChatContent() {
  return (
    <div className="animate-fadeUp">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-bold text-slate-100">Messages</h3>
        <button className="w-8 h-8 flex items-center justify-center bg-blue-950 border border-blue-900 rounded-lg text-blue-400 hover:bg-blue-900 transition-colors">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5"  y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>

      {/* Message List */}
      <div className="flex flex-col gap-0.5">
        {MESSAGES.map((m) => (
          <div
            key={m.id}
            className={`flex items-center gap-3 px-3 py-3.5 rounded-xl cursor-pointer transition-colors relative
              ${m.unread ? "bg-blue-950/30" : "hover:bg-slate-800/50"}`}
          >
            {/* Avatar */}
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-900 to-blue-950 text-blue-400 text-xs font-bold flex items-center justify-center shrink-0">
              {m.avatar}
            </div>

            {/* Body */}
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-0.5">
                <span className="text-sm font-semibold text-slate-100">{m.name}</span>
                <span className="text-xs text-slate-500 shrink-0 ml-2">{m.time}</span>
              </div>
              <p className="text-xs text-slate-500 truncate">{m.text}</p>
            </div>

            {/* Unread dot */}
            {m.unread && <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatContent;
