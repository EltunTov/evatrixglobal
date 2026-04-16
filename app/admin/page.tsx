export default function AdminPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
          Super Admin
        </p>
        <h1 className="mt-3 text-4xl font-semibold">Evatrix Control Panel</h1>
        <p className="mt-4 text-white/60">
          Owner-level access shell. Users, access tiers, signals, and system
          controls will be managed here.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Users",
            "Access Tiers",
            "Signals",
            "System Status",
            "Crypto Control",
            "Forex Status",
            "Preview Access",
            "Pro Access",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h2 className="text-lg font-medium">{item}</h2>
              <p className="mt-2 text-sm text-white/45">Placeholder block</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}