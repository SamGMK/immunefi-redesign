import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceForm from "@/components/ServiceForm";

export const metadata = {
  title: "Run an Audit Competition — Immunefi",
  description:
    "Hundreds of researchers compete to find your vulnerabilities. More eyes, more coverage, more confidence.",
};

export default function AuditCompetitions() {
  const features = [
    "Crowdsourced security with competitive incentives",
    "Broader coverage than a single audit team",
    "Transparent process with public credibility",
    "Scope and launch in 48 hours",
    "Detailed findings report with severity rankings",
  ];

  return (
    <>
      <Navigation />
      <main className="ascii-bg relative min-h-screen pt-24">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-[500px] w-[700px] rounded-full bg-pink/5 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Left — Info */}
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M13 8H3M7 4L3 8l4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back to Home
              </Link>

              <div className="mt-8 flex items-center gap-3">
                <span className="font-mono text-sm text-gray-600">03</span>
                <span className="text-xs font-medium uppercase tracking-widest text-pink">
                  Competitions
                </span>
              </div>

              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Run an{" "}
                <span className="text-glow-pink bg-gradient-to-r from-pink-light to-pink bg-clip-text text-transparent">
                  Audit Competition
                </span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-gray-400">
                Hundreds of researchers compete to find your vulnerabilities.
                More eyes, more coverage, more confidence.
              </p>

              <ul className="mt-10 space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="mt-0.5 shrink-0 text-pink"
                    >
                      <path
                        d="M5 12l5 5L20 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 card-dark inline-block rounded-lg p-5">
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Avg. researchers per competition
                </p>
                <p className="mt-1 text-2xl font-bold text-white">200+</p>
              </div>
            </div>

            {/* Right — Form */}
            <div>
              <ServiceForm
                service="Audit Competitions"
                ctaLabel="Run a Competition"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
