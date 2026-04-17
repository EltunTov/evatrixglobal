import Link from "next/link";
import EvatrixSiteLogo from "../components/evatrix-site-logo";

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#050816] text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 p-6">
        <EvatrixSiteLogo />

        <h1 className="mt-4 text-2xl font-semibold">Forgot Password</h1>

        <input
          type="email"
          placeholder="Email"
          className="mt-6 w-full rounded-lg bg-white/5 p-3"
        />

        <button className="mt-4 w-full bg-cyan-400 p-3 rounded-lg text-black">
          Send Reset Link
        </button>

        <Link href="/login" className="block mt-4 text-sm text-cyan-300">
          Back to login
        </Link>
      </div>
    </main>
  );
}