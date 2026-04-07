"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How quickly can we get started?",
    answer:
      "Most programs can be scoped and launched within 48 hours of your discovery call. For audit competitions and full audits, timelines depend on codebase complexity, but we move fast.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing is tailored to your protocol's size, complexity, and security needs. Bug bounty programs are pay-for-results — you only pay when valid vulnerabilities are found. Audits and competitions are scoped and priced upfront.",
  },
  {
    question: "What does the onboarding process look like?",
    answer:
      "It starts with a discovery call where we assess your security needs. From there, we design your program scope, set reward tiers, and launch. Our team handles the heavy lifting — you just need to be available for technical questions.",
  },
  {
    question: "What happens when a critical vulnerability is found?",
    answer:
      "Our triage team validates and classifies the report, then escalates it to your team immediately with a detailed technical breakdown and recommended remediation steps. We manage the disclosure process end to end.",
  },
  {
    question: "How are bug reports triaged and validated?",
    answer:
      "Every report goes through our expert triage team who validate the vulnerability, assess severity, and filter out noise. You only see confirmed, actionable findings — not duplicates or invalid reports.",
  },
  {
    question:
      "Can we adjust our bounty/audit scope and rewards after launch?",
    answer:
      "Absolutely. Your program is fully flexible. You can update scope, adjust reward tiers, add new assets, and modify terms at any time as your protocol evolves.",
  },
  {
    question: "What do we need to prepare before the discovery call?",
    answer:
      "Have a general understanding of your protocol architecture, deployed contracts, and any previous audits or security work. We'll guide you through the rest during the call.",
  },
  {
    question: "How do you attract researchers to our specific program?",
    answer:
      "We leverage our network of 85,000+ researchers, feature your program across our platform, and use targeted outreach to specialists with relevant expertise. Competitive rewards and clear scope attract top talent.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding relative bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-pink">
            FAQ
          </p>
          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="space-y-0 divide-y divide-white/5">
            {faqs.map((faq, i) => (
              <div key={i} className="group">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between py-6 text-left transition-colors"
                >
                  <span
                    className={`pr-8 text-base font-medium transition-colors ${
                      openIndex === i ? "text-white" : "text-gray-300 group-hover:text-white"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`shrink-0 text-gray-500 transition-transform duration-200 ${
                      openIndex === i ? "rotate-45" : ""
                    }`}
                  >
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i
                      ? "max-h-96 pb-6 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm leading-relaxed text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
