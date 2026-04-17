export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
            Terms of Use
          </h1>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/62 md:text-base">
            These Terms of Use govern access to Evatrix, including free preview
            access, premium visibility layers, and any related features, tools,
            and member environments.
          </p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-white/72 md:text-base">
            <section>
              <h2 className="text-xl font-semibold text-white">1. Platform Access</h2>
              <p className="mt-3">
                Evatrix provides structured market visibility, access-controlled
                signal presentation, and member-facing tools intended for
                informational and workflow purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">2. Member Responsibility</h2>
              <p className="mt-3">
                Users are responsible for maintaining secure credentials,
                protecting account access, and using the platform in accordance
                with applicable law and internal account permissions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">3. Service Scope</h2>
              <p className="mt-3">
                Access layers, features, visibility depth, pricing structure, and
                release timing may change as the platform evolves.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">4. No Guarantee</h2>
              <p className="mt-3">
                Platform information, analytics, and signal visibility do not
                guarantee financial outcomes, profitability, or execution results.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}