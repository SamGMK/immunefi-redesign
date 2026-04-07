"use client";

import { useState } from "react";

const products = [
  {
    id: "bug-bounties",
    number: "01",
    tag: "BBPs",
    title: "Bug Bounties",
    description:
      "85,000+ security researchers hunting vulnerabilities in your protocol 24/7. Continuous coverage that scales with your attack surface.",
    features: [
      "Access to the largest web3 security researcher network",
      "Continuous protection — not a one-time snapshot",
      "Managed triage and severity classification",
      "Custom scope and reward structure",
    ],
    cta: "Launch a Bug Bounty",
    ctaHref: "/bug-bounties",
    accent: "pink",
  },
  {
    id: "security-audits",
    number: "02",
    tag: "Audits",
    title: "Security Audits",
    description:
      "Deep-dive code review by top-tier auditors before you deploy. Catch critical flaws before they reach mainnet.",
    features: [
      "Vetted auditors with protocol-specific expertise",
      "Comprehensive code and architecture review",
      "Detailed report with severity classifications",
      "Remediation guidance and re-verification",
    ],
    cta: "Scope an Audit",
    ctaHref: "/security-audits",
    accent: "white",
  },
  {
    id: "audit-competitions",
    number: "03",
    tag: "Competitions",
    title: "Audit Competitions",
    description:
      "Hundreds of researchers compete to find your vulnerabilities. More eyes, more coverage, more confidence.",
    features: [
      "Crowdsourced security with competitive incentives",
      "Broader coverage than a single audit team",
      "Transparent process with public credibility",
      "Scope and launch in 48 hours",
    ],
    cta: "Run a Competition",
    ctaHref: "/audit-competitions",
    accent: "white",
  },
  {
    id: "pr-reviews",
    number: "04",
    tag: "Ongoing",
    title: "PR Reviews",
    description:
      "Security-reviewed pull requests before they merge. Catch regressions and new vulnerabilities in real time as your code evolves.",
    features: [
      "Security review integrated into your dev workflow",
      "Catch vulnerabilities introduced by code changes",
      "Prevent regressions between audit cycles",
      "Continuous coverage that keeps pace with shipping",
    ],
    cta: "Request PR Reviews",
    ctaHref: "/pr-reviews",
    accent: "white",
  },
];

export default function Products() {
  const [activeTab, setActiveTab] = useState(0);
  const active = products[activeTab];

  return (
    <section
      id="products"
      className="ascii-bg section-padding relative bg-black"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-pink">
            Our Platform
          </p>
          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Four Layers. Zero Gaps.
          </h2>
        </div>

        {/* Tab navigation */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="flex gap-1 rounded-xl border border-white/5 bg-white/[0.02] p-1.5">
            {products.map((product, i) => (
              <button
                key={product.id}
                onClick={() => setActiveTab(i)}
                className={`flex-1 rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                  i === activeTab
                    ? "bg-pink text-white shadow-lg shadow-pink/20"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span className="hidden sm:inline">{product.title}</span>
                <span className="sm:hidden">{product.tag}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Product card */}
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="card-dark relative overflow-hidden p-8 sm:p-12">
            {/* Subtle gradient */}
            {activeTab === 0 && (
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-pink/5 to-transparent" />
            )}

            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm text-gray-600">
                  {active.number}
                </span>
                <span className="text-xs font-medium uppercase tracking-widest text-pink">
                  {active.tag}
                </span>
              </div>

              <h3 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                {active.title}
              </h3>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-400">
                {active.description}
              </p>

              <ul className="mt-8 space-y-3">
                {active.features.map((feature) => (
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

              <div className="mt-10">
                <a
                  href={active.ctaHref}
                  className={`inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-semibold transition-all ${
                    activeTab === 0
                      ? "btn-primary"
                      : "border border-white/10 text-white hover:border-white/20 hover:bg-white/5"
                  }`}
                >
                  {active.cta}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
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
        </div>
      </div>
    </section>
  );
}
