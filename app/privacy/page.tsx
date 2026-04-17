export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/62 md:text-base">
            This Privacy Policy describes how Evatrix handles account data,
            access information, and basic member-related platform records.
          </p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-white/72 md:text-base">
            <section>
              <h2 className="text-xl font-semibold text-white">1. Information We Collect</h2>
              <p className="mt-3">
                We may collect account-level information such as email address,
                authentication-related records, subscription status, and
                platform-access activity.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">2. How Data Is Used</h2>
              <p className="mt-3">
                Data is used to manage access layers, maintain account security,
                support billing-related workflows, and improve platform
                reliability and operational visibility.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">3. Data Protection</h2>
              <p className="mt-3">
                Reasonable technical and organizational safeguards are used to
                protect member information and platform access records.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">4. Contact</h2>
              <p className="mt-3">
                Privacy-related requests, corrections, or account access issues
                may be handled through the official Evatrix support path.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}