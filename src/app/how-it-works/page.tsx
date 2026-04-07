import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "How It Works — Immunefi",
  description:
    "Learn how Immunefi protects protocols with bug bounties, security audits, audit competitions, and PR reviews. Pricing, process, and why top protocols trust us.",
};

const stats = [
  { value: "$150B+", label: "Total Value Protected" },
  { value: "45,000+", label: "Security Researchers" },
  { value: "$100M+", label: "Bounties Paid Out" },
  { value: "3,000+", label: "Bug Reports Resolved" },
];

const products = [
  {
    number: "01",
    tag: "Continuous",
    title: "Bug Bounty Programs",
    description:
      "Your protocol goes live on Immunefi's marketplace, visible to 45,000+ security researchers worldwide. Researchers probe your smart contracts, infrastructure, and applications around the clock — submitting detailed vulnerability reports when they find issues.",
    whenToUse: [
      "You have deployed contracts and need continuous security coverage",
      "You want to catch vulnerabilities before attackers do",
      "You need ongoing protection as your codebase evolves",
      "You want to complement periodic audits with always-on monitoring",
    ],
    howItWorks: [
      "We define your program scope — which contracts, chains, and assets are in play",
      "Set reward tiers based on severity (Critical, High, Medium, Low)",
      "Your program goes live on the Immunefi platform",
      "Researchers submit reports; our triage team validates and classifies each one",
      "You receive only confirmed, actionable findings with remediation guidance",
      "Pay only when valid vulnerabilities are found",
    ],
    pricing: "Pay-per-result. You set the reward tiers. No upfront cost. You only pay bounties for valid, verified vulnerabilities.",
    cta: "Launch a Bug Bounty",
    href: "/bug-bounties",
  },
  {
    number: "02",
    tag: "Pre-Launch",
    title: "Security Audits",
    description:
      "A deep-dive manual code review by vetted, top-tier auditors matched to your protocol's specific tech stack and domain. Every line of code is examined for logic errors, reentrancy bugs, access control flaws, economic exploits, and more — before you deploy to mainnet.",
    whenToUse: [
      "You're preparing for a mainnet launch or major upgrade",
      "You need a thorough, expert-led review of new code",
      "Investors, partners, or users require an audit report",
      "You want a detailed severity-classified findings report",
    ],
    howItWorks: [
      "Submit your codebase and documentation for scoping",
      "We match you with auditors who specialize in your protocol's domain",
      "Auditors perform a comprehensive manual and tool-assisted review",
      "You receive a detailed report with findings classified by severity",
      "Remediation period — fix issues and get re-verified",
      "Final report issued, ready for public disclosure",
    ],
    pricing: "Fixed-price engagement scoped upfront based on codebase size, complexity, and timeline. Typical audits range from 1–4 weeks.",
    cta: "Scope an Audit",
    href: "/security-audits",
  },
  {
    number: "03",
    tag: "Competitive",
    title: "Audit Competitions",
    description:
      "Hundreds of independent researchers compete over a fixed time window to find as many vulnerabilities as possible in your codebase. The competitive format drives deeper coverage than a single audit team, with researchers incentivized to find what others miss.",
    whenToUse: [
      "You want maximum coverage from diverse security perspectives",
      "You're launching a high-value protocol and want public credibility",
      "You want to stress-test code that's already been audited",
      "You need fast turnaround with broad researcher participation",
    ],
    howItWorks: [
      "We define scope and prize pool together",
      "Competition is announced to the Immunefi researcher network",
      "Researchers compete over a fixed window (typically 1–3 weeks)",
      "All submissions are triaged and deduplicated by our team",
      "You receive a consolidated findings report ranked by severity",
      "Prizes distributed based on finding quality and uniqueness",
    ],
    pricing: "Fixed prize pool set upfront. You define the total budget and we structure the reward distribution. Scope and launch in as little as 48 hours.",
    cta: "Run a Competition",
    href: "/audit-competitions",
  },
  {
    number: "04",
    tag: "Ongoing",
    title: "PR Reviews",
    description:
      "Every pull request your team merges gets a security review before it hits production. This catches regressions, newly introduced vulnerabilities, and logic errors in real time — closing the gap between periodic audits where most exploits actually originate.",
    whenToUse: [
      "You ship code frequently and need security to keep pace",
      "You want to prevent regressions between audit cycles",
      "Your dev team wants security feedback integrated into their workflow",
      "You've been audited but are actively changing your codebase",
    ],
    howItWorks: [
      "Connect your GitHub repository to Immunefi",
      "Every PR is automatically flagged for security review",
      "Our reviewers analyze changes for vulnerabilities and logic errors",
      "Feedback is delivered directly in your PR as comments",
      "Critical issues are escalated immediately",
      "Continuous coverage that scales with your shipping velocity",
    ],
    pricing: "Subscription-based, priced by repository activity and codebase size. Continuous coverage with no per-finding fees.",
    cta: "Request PR Reviews",
    href: "/pr-reviews",
  },
];

const reasons = [
  {
    title: "Largest Security Network in Web3",
    description:
      "45,000+ vetted researchers across every chain, language, and protocol type. No other platform gives you access to this depth of talent.",
  },
  {
    title: "Battle-Tested by Top Protocols",
    description:
      "Chainlink, Optimism, The Graph, Polygon, Synthetix, MakerDAO, and hundreds more trust Immunefi to protect billions in user funds.",
  },
  {
    title: "Expert Triage — Not Just a Marketplace",
    description:
      "Every vulnerability report is validated by our in-house triage team. You only see confirmed, actionable findings — not noise.",
  },
  {
    title: "Most Diverse Ecosystem Support",
    description:
      "EVM, Solana, Cosmos, Move, Substrate, StarkNet, and more. We support the widest range of chains and execution environments of any security company.",
  },
  {
    title: "Highest Bounties Attract Top Talent",
    description:
      "Immunefi has facilitated the largest bug bounty payouts in history, including $10M+ single bounties. Top rewards attract the best researchers to your program.",
  },
  {
    title: "End-to-End Managed Service",
    description:
      "From program design to triage to disclosure — we handle everything. Your team focuses on building while we manage the security operations.",
  },
];

const timeline = [
  {
    day: "Day 1",
    title: "Discovery Call",
    description: "30-minute call to assess your protocol, risk profile, and security needs.",
  },
  {
    day: "Day 1–2",
    title: "Scope & Program Design",
    description: "We define assets in scope, reward tiers, and the right combination of services for your protocol.",
  },
  {
    day: "Day 2–3",
    title: "Launch",
    description: "Your program goes live. Researchers start hunting. You start receiving validated reports.",
  },
  {
    day: "Ongoing",
    title: "Continuous Protection",
    description: "Triage, escalation, remediation support, and program optimization — indefinitely.",
  },
];

export default function HowItWorks() {
  return (
    <>
      <Navigation />
      <main className="relative bg-black">
        {/* Hero */}
        <section className="ascii-bg grid-overlay relative overflow-hidden pb-20 pt-32">
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
            <div className="h-[500px] w-[700px] rounded-full bg-pink/5 blur-[120px]" />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-pink">
              How It Works
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              The Complete Security Platform for{" "}
              <span className="text-glow-pink bg-gradient-to-r from-pink-light to-pink bg-clip-text text-transparent">
                Web3 Protocols
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
              Four integrated security layers that protect your protocol before
              launch, at launch, and as you ship. Here&rsquo;s exactly how each
              one works, when to use it, and what it costs.
            </p>

            {/* Back link */}
            <a
              href="/"
              className="mt-8 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white"
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
            </a>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-white/5 bg-black py-12">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-white sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-gray-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Deep Dive */}
        <section className="section-padding">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="text-center">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-pink">
                Our Services
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Four Layers. Zero Gaps.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
                Each service addresses a different phase of your security
                lifecycle. Most protocols combine two or more for comprehensive
                coverage.
              </p>
            </div>

            <div className="mt-20 space-y-24">
              {products.map((product) => (
                <div
                  key={product.number}
                  id={product.title.toLowerCase().replace(/\s+/g, "-")}
                  className="scroll-mt-24"
                >
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] font-mono text-sm font-bold text-pink">
                      {product.number}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-widest text-gray-500">
                      {product.tag}
                    </span>
                  </div>

                  <h3 className="mt-4 text-3xl font-bold tracking-tight">
                    {product.title}
                  </h3>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-400">
                    {product.description}
                  </p>

                  <div className="mt-10 grid gap-6 lg:grid-cols-3">
                    {/* When to use */}
                    <div className="card-dark rounded-xl p-6">
                      <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-pink"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                        When to Use
                      </h4>
                      <ul className="mt-4 space-y-3">
                        {product.whenToUse.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm leading-relaxed text-gray-400"
                          >
                            <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-pink" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* How it works */}
                    <div className="card-dark rounded-xl p-6">
                      <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-pink"
                        >
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        Process
                      </h4>
                      <ol className="mt-4 space-y-3">
                        {product.howItWorks.map((step, i) => (
                          <li
                            key={step}
                            className="flex items-start gap-3 text-sm leading-relaxed text-gray-400"
                          >
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/5 font-mono text-[10px] font-bold text-gray-500">
                              {i + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Pricing */}
                    <div className="card-dark flex flex-col rounded-xl p-6">
                      <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-pink"
                        >
                          <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                        </svg>
                        Pricing
                      </h4>
                      <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-400">
                        {product.pricing}
                      </p>
                      <a
                        href={product.href}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-pink transition-colors hover:text-pink-light"
                      >
                        {product.cta}
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M3 8h10M9 4l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider-pink" />

        {/* Recommended Stacks */}
        <section className="section-padding">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="text-center">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-pink">
                Recommended
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Which Services Do You Need?
              </h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
              <div className="card-dark rounded-xl p-6">
                <div className="text-xs font-medium uppercase tracking-widest text-pink">
                  Pre-Launch
                </div>
                <h3 className="mt-3 text-lg font-bold">
                  Launching a New Protocol
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Ship with confidence before day one.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-sm text-gray-300">
                    <span className="text-pink">&#x2713;</span> Security Audit
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-sm text-gray-300">
                    <span className="text-pink">&#x2713;</span> Bug Bounty
                    Program
                  </div>
                </div>
              </div>

              <div className="card-dark relative overflow-hidden rounded-xl p-6">
                <div className="absolute right-3 top-3 rounded-full bg-pink/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-pink">
                  Most Popular
                </div>
                <div className="text-xs font-medium uppercase tracking-widest text-pink">
                  Full Coverage
                </div>
                <h3 className="mt-3 text-lg font-bold">
                  Established Protocol
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Maximum protection across all surfaces.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-sm text-gray-300">
                    <span className="text-pink">&#x2713;</span> Bug Bounty
                    Program
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-sm text-gray-300">
                    <span className="text-pink">&#x2713;</span> Audit
                    Competition
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-sm text-gray-300">
                    <span className="text-pink">&#x2713;</span> PR Reviews
                  </div>
                </div>
              </div>

              <div className="card-dark rounded-xl p-6">
                <div className="text-xs font-medium uppercase tracking-widest text-pink">
                  Active Development
                </div>
                <h3 className="mt-3 text-lg font-bold">
                  Shipping Fast
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Security that keeps pace with your team.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-sm text-gray-300">
                    <span className="text-pink">&#x2713;</span> PR Reviews
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-sm text-gray-300">
                    <span className="text-pink">&#x2713;</span> Bug Bounty
                    Program
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider-pink" />

        {/* Why Immunefi */}
        <section className="section-padding">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="text-center">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-pink">
                Why Immunefi
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Reasons to Believe
              </h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason) => (
                <div key={reason.title} className="card-dark rounded-xl p-6">
                  <h3 className="text-base font-bold">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider-pink" />

        {/* Timeline */}
        <section className="section-padding">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="text-center">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-pink">
                Getting Started
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                From Discovery Call to Protected in 48 Hours
              </h2>
            </div>

            <div className="mx-auto mt-16 max-w-3xl">
              <div className="relative space-y-0">
                {/* Vertical line */}
                <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-pink/40 via-white/10 to-transparent" />

                {timeline.map((step, i) => (
                  <div key={step.day} className="relative flex gap-6 pb-12">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black">
                      <span
                        className={`h-3 w-3 rounded-full ${
                          i === 0 ? "bg-pink" : "bg-white/20"
                        }`}
                      />
                    </div>
                    <div className="pt-1">
                      <span className="font-mono text-xs font-bold text-pink">
                        {step.day}
                      </span>
                      <h3 className="mt-1 text-lg font-bold">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="divider-pink" />

        {/* Supported Ecosystems */}
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-pink">
              Ecosystem Support
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              The Most Diverse Coverage in Web3 Security
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
              No matter what chain or execution environment your protocol runs
              on, we have researchers and auditors with deep domain expertise.
            </p>

            <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3">
              {[
                "Ethereum",
                "Solana",
                "Cosmos",
                "Polygon",
                "Arbitrum",
                "Optimism",
                "Avalanche",
                "BNB Chain",
                "Base",
                "StarkNet",
                "zkSync",
                "Sui",
                "Aptos",
                "Polkadot",
                "Near",
                "Fantom",
                "Scroll",
                "Linea",
                "Blast",
                "Sei",
                "Celestia",
                "Berachain",
              ].map((chain) => (
                <span
                  key={chain}
                  className="rounded-full border border-white/5 bg-white/[0.02] px-4 py-2 text-xs font-medium text-gray-400"
                >
                  {chain}
                </span>
              ))}
              <span className="rounded-full border border-pink/20 bg-pink/5 px-4 py-2 text-xs font-medium text-pink">
                + many more
              </span>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="ascii-bg grid-overlay relative overflow-hidden border-t border-white/5 py-24">
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-[300px] w-[500px] rounded-full bg-pink/5 blur-[100px]" />
          </div>
          <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Secure Your Protocol?
            </h2>
            <p className="mt-4 text-base text-gray-400">
              Start with a free threat assessment or talk to our team about the
              right security stack for your protocol.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href="/threat-assessment" className="btn-primary">
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
              </a>
              <a href="/bug-bounties" className="btn-secondary">
                Talk to Our Team
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
