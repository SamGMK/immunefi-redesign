import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="ascii-bg grid-overlay relative overflow-hidden border-t border-white/5 bg-black py-32">
      {/* Radial gradient */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[400px] w-[600px] rounded-full bg-pink/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Every Day You Wait Is Another Day Your Protocol Is{" "}
            <span className="text-glow-pink bg-gradient-to-r from-pink-light to-pink bg-clip-text text-transparent">
              Exposed
            </span>
          </h2>

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
      </div>
    </section>
  );
}
