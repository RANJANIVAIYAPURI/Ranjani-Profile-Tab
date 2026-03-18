import useTabFromUrl        from "./hooks/useTabFromUrl";
import TABS                 from "./constants/tabs";
import TabBar               from "./components/tabs/TabBar";
import ProfileContent       from "./components/tabs/ProfileContent";
import ChatContent          from "./components/tabs/ChatContent";
import NotificationsContent from "./components/tabs/NotificationsContent";
import SettingsContent      from "./components/tabs/SettingsContent";
import ActivityContent      from "./components/tabs/ActivityContent";

// ─── Tab content map ──────────────────────────────────────────────────────────
// To add a new tab: add it to constants/tabs.jsx AND add it here.
const TAB_CONTENT = {
  profile:       <ProfileContent />,
  chat:          <ChatContent />,
  notifications: <NotificationsContent />,
  settings:      <SettingsContent />,
  activity:      <ActivityContent />,
};

// ─── App ──────────────────────────────────────────────────────────────────────
function App() {
  const { tab, setTab } = useTabFromUrl({
    param:      "tab",
    defaultTab: "profile",
    tabs:       TABS.map((t) => t.value),
  });

  return (
    <div className="min-h-screen bg-[#0b0c10] text-slate-100 flex justify-center px-4 py-10 pb-20">
      <div className="w-full max-w-2xl">

        

        {/* Tab Navigation — reusable TabBar component */}
        <TabBar
          tabs={TABS}
          activeTab={tab}
          onTabChange={setTab}
        />

        {/* Tab Content Panel — key forces re-mount for fade animation */}
        <div
          key={tab}
          role="tabpanel"
          className="bg-slate-900 border border-slate-800 rounded-2xl p-7"
        >
          {TAB_CONTENT[tab]}
        </div>
      </div>

      {/* fadeUp animation — Tailwind needs config to extend keyframes,
          so we keep this one small <style> block here */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0);   }
        }
        .animate-fadeUp { animation: fadeUp 0.2s ease both; }
      `}</style>
    </div>
  );
}

export default App;
