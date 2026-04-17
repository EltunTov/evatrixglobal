export default function RiskDisclosurePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
            Risk Disclosure
          </h1>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/62 md:text-base">
            Trading digital assets, leveraged products, and related instruments
            involves substantial risk and may not be suitable for all users.
          </p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-white/72 md:text-base">
            <section>
              <h2 className="text-xl font-semibold text-white">1. Market Risk</h2>
              <p className="mt-3">
                Prices may move rapidly and unpredictably. Users may incur
                significant losses over short periods of time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">2. No Financial Advice</h2>
              <p className="mt-3">
                Evatrix provides informational visibility, workflow structure,
                and platform-level signal presentation. Nothing on the platform
                should be interpreted as personalized investment advice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">3. User Responsibility</h2>
              <p className="mt-3">
                Each user remains solely responsible for their own decisions,
                risk management, trade execution, and capital exposure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">4. Performance Context</h2>
              <p className="mt-3">
                Historical visibility, performance displays, or showcase content
                do not guarantee future outcomes.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}