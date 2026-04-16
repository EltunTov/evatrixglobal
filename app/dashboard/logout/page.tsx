"use client";

import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  function handleCancel() {
    router.push("/dashboard");
  }

  function handleLogout() {
    try {
      localStorage.removeItem("evatrix_session");
      localStorage.removeItem("evatrix_user");
      sessionStorage.clear();
    } catch (error) {
      console.error("Logout cleanup failed:", error);
    }

    router.push("/");
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_28%),linear-gradient(180deg,_#0b1220_0%,_#0a0f1a_100%)] text-white">
      <div className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 py-10">
        <div className="w-full rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200/70">
            Session Control
          </div>

          <h1 className="text-[32px] font-semibold tracking-tight text-white">
            Log out of Evatrix?
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            You are about to exit your workspace. Your current session will be
            closed and you will be redirected to the public Evatrix entry page.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                Action
              </div>
              <div className="mt-2 text-lg font-semibold text-white">
                End session
              </div>
              <div className="mt-2 text-sm text-slate-400">
                Stored session state will be cleared on logout.
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">
                Redirect
              </div>
              <div className="mt-2 text-lg font-semibold text-white">
                Public entry page
              </div>
              <div className="mt-2 text-sm text-slate-400">
                You can sign in again whenever needed.
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="flex-1 rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}