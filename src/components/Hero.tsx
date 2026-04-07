import Link from "next/link";

export default function Hero() {
  const logos = [
    "Jito",
    "Layer Zero",
    "Chainlink",
    "Sky",
    "Arbitrum",
    "Babylon",
    "Berachain",
    "Optimism",
    "Pendle",
    "Scroll",
    "Sei",
    "Stacks",
    "The Graph",
    "Three Sigma",
    "Plume",
  ];

  return (
    <section className="ascii-bg grid-overlay relative overflow-hidden pb-20 pt-32">
      {/* Radial gradient accent */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
        <div className="h-[600px] w-[800px] rounded-full bg-pink/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main headline */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Stop Protocol Exploits
            <br />
            <span className="text-glow-pink bg-gradient-to-r from-pink-light to-pink bg-clip-text text-transparent">
              Before They Cost You Everything
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">
            Protocols that use Immunefi receive an average of{" "}
            <span className="font-semibold text-white">
              2.5 critical vulnerabilities
            </span>{" "}
            in their inbox each year — vulnerabilities that could completely wipe
            them out.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/threat-assessment" className="btn-primary">
              Get Your Free Threat Assessment
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="ml-1"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link href="/how-it-works" className="btn-secondary">
              See How It Works
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mx-auto mt-20 max-w-3xl">
          <div className="glow-pink-sm grid grid-cols-1 gap-6 rounded-lg border border-white/5 bg-white/[0.02] px-8 py-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/10">
            <div className="text-center">
              <div className="text-2xl font-bold text-white sm:text-3xl">
                $150B+
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                In Assets Protected
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white sm:text-3xl">
                $50B+
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                Protocols Secured
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white sm:text-3xl">
                45,000+
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                Security Researchers
              </div>
            </div>
          </div>
        </div>

        {/* Client logos */}
        <div className="mx-auto mt-20 max-w-5xl">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {logos.map((name) => (
              <span
                key={name}
                className="text-xs font-medium uppercase tracking-widest text-gray-600 transition-colors hover:text-gray-400"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
