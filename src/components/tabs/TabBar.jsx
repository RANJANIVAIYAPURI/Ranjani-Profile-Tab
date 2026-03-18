// ─── TabBar ───────────────────────────────────────────────────────────────────
// Reusable horizontal tab navigation bar.
//
// Props:
//   tabs     → array of tab objects from constants/tabs.jsx
//   activeTab → currently active tab value (string)
//   onTabChange → callback when a tab is clicked (newTab: string) => void

function TabBar({ tabs, activeTab, onTabChange }) {
  return (
    <nav
      role="tablist"
      className="flex bg-slate-900 border border-slate-800 rounded-2xl p-1.5 gap-1 mb-5"
    >
      {tabs.map((t) => {
        const isActive = activeTab === t.value;
        return (
          <button
            key={t.value}
            role="tab"
            aria-selected={isActive}
            onClick={() => onTabChange(t.value)}
            className={`
              flex-1 flex items-center justify-center gap-1.5
              px-2 py-2.5 text-xs font-medium rounded-xl
              cursor-pointer transition-all duration-200
              whitespace-nowrap relative
              ${isActive
                ? "bg-gradient-to-br from-blue-950 to-blue-900 text-blue-400 border border-blue-800 shadow-lg shadow-blue-950/40"
                : "text-slate-500 hover:text-slate-300 hover:bg-slate-800"
              }
            `}
          >
            {t.icon}
            <span className="hidden sm:inline">{t.label}</span>

            {/* Badge (e.g. unread count) */}
            {t.badge && (
              <span
                className={`
                  absolute top-1 right-1 text-[9px] font-bold
                  rounded-full px-1 py-px leading-tight text-white
                  ${isActive ? "bg-blue-500" : "bg-red-500"}
                `}
              >
                {t.badge}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
}

export default TabBar;
