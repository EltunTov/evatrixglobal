type EvatrixSiteLogoProps = {
  className?: string;
};

export default function EvatrixSiteLogo({
  className = "",
}: EvatrixSiteLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 220 220"
        className="h-[42px] w-[42px] shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="evxShieldStroke" x1="35" y1="190" x2="185" y2="25">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="55%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#CFFAFE" />
          </linearGradient>

          <linearGradient id="evxBarFill" x1="62" y1="164" x2="162" y2="54">
            <stop offset="0%" stopColor="#163EAD" />
            <stop offset="50%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#DDF8FF" />
          </linearGradient>

          <linearGradient id="evxLine" x1="54" y1="136" x2="182" y2="46">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#E0F7FF" />
          </linearGradient>

          <filter id="evxSoftGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M110 18L176 45V104C176 149 147 183 110 202C73 183 44 149 44 104V45L110 18Z"
          stroke="url(#evxShieldStroke)"
          strokeWidth="10"
          fill="rgba(56,189,248,0.02)"
        />

        <rect x="66" y="102" width="16" height="38" rx="3" fill="url(#evxBarFill)" />
        <rect x="92" y="80" width="16" height="60" rx="3" fill="url(#evxBarFill)" />
        <rect x="118" y="60" width="16" height="80" rx="3" fill="url(#evxBarFill)" />
        <rect x="144" y="42" width="16" height="98" rx="3" fill="url(#evxBarFill)" />

        <path
          d="M58 132L95 107L121 121L183 54"
          stroke="url(#evxLine)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#evxSoftGlow)"
        />

        <path
          d="M170 54H183V67"
          stroke="url(#evxLine)"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="leading-none">
        <div
          className="text-[18px] font-black uppercase tracking-[0.08em] text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #F8FCFF 0%, #E3F2FF 38%, #9DD5FF 100%)",
            textShadow: "0 0 14px rgba(56,189,248,0.12)",
            fontFamily:
              'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          }}
        >
          EVATRIX
        </div>

        <div
          className="mt-1 text-[9px] uppercase tracking-[0.22em] text-slate-300/90"
          style={{
            fontFamily:
              'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          }}
        >
          Global Market Intelligence
        </div>
      </div>
    </div>
  );
}