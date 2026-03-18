import { useState } from "react";

// ─── Toggle ───────────────────────────────────────────────────────────────────
// Reusable toggle switch sub-component (local to Settings).
function Toggle({ val, set }) {
  return (
    <button
      onClick={() => set(!val)}
      className={`relative w-11 h-6 rounded-full border transition-all duration-300 shrink-0
        ${val ? "bg-blue-700 border-blue-500" : "bg-slate-800 border-slate-700"}`}
    >
      <span
        className={`absolute top-0.5 w-4 h-4 rounded-full transition-all duration-300
          ${val ? "left-[22px] bg-white" : "left-0.5 bg-slate-500"}`}
      />
    </button>
  );
}

// ─── SettingsContent ──────────────────────────────────────────────────────────
// Renders the Settings tab panel with toggles and danger zone.
function SettingsContent() {
  const [dark,  setDark]  = useState(true);
  const [notif, setNotif] = useState(true);
  const [email, setEmail] = useState(false);

  const preferences = [
    { label: "Dark Mode",           sub: "Use dark theme across the app",    val: dark,  set: setDark  },
    { label: "Push Notifications",  sub: "Receive alerts for new activity",  val: notif, set: setNotif },
    { label: "Email Digest",        sub: "Weekly summary to your inbox",     val: email, set: setEmail },
  ];

  return (
    <div className="animate-fadeUp">

      {/* Preferences */}
      <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
        Preferences
      </h3>

      {preferences.map(({ label, sub, val, set }) => (
        <div key={label} className="flex items-center justify-between py-4 border-b border-slate-800">
          <div>
            <p className="text-sm font-semibold text-slate-200 mb-0.5">{label}</p>
            <p className="text-xs text-slate-500">{sub}</p>
          </div>
          <Toggle val={val} set={set} />
        </div>
      ))}

      {/* Danger Zone */}
      <div className="h-px bg-slate-800 my-6" />
      <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
        Danger Zone
      </h3>
      <button className="text-sm font-semibold text-red-400 bg-red-950/40 border border-red-900 rounded-xl px-5 py-2.5 hover:bg-red-950/70 transition-colors">
        Delete Account
      </button>
    </div>
  );
}

export default SettingsContent;
