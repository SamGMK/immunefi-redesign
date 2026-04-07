"use client";

import { useState } from "react";
import Link from "next/link";

interface ServiceFormProps {
  service: string;
  ctaLabel: string;
}

export default function ServiceForm({ service, ctaLabel }: ServiceFormProps) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="card-dark rounded-xl p-10 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-pink/20 bg-pink/10">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            className="text-pink"
          >
            <path
              d="M5 12l5 5L20 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-6 text-2xl font-bold">Request Submitted</h3>
        <p className="mt-3 text-sm text-gray-400">
          Thanks for your interest in {service}. Our team will review your
          details and reach out within 24 hours.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-pink transition-colors hover:text-pink-light"
        >
          Back to Home
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="card-dark rounded-xl p-8 sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Company Name */}
        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-xs font-medium uppercase tracking-widest text-gray-400"
          >
            Company / Protocol Name *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            placeholder="e.g. Acme Protocol"
            className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-pink/40 focus:bg-white/[0.05]"
          />
        </div>

        {/* Website */}
        <div>
          <label
            htmlFor="website"
            className="mb-2 block text-xs font-medium uppercase tracking-widest text-gray-400"
          >
            Company Website *
          </label>
          <input
            type="url"
            id="website"
            name="website"
            required
            placeholder="https://yourprotocol.com"
            className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-pink/40 focus:bg-white/[0.05]"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-xs font-medium uppercase tracking-widest text-gray-400"
          >
            Work Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-pink/40 focus:bg-white/[0.05]"
          />
        </div>

        {/* Telegram */}
        <div>
          <label
            htmlFor="telegram"
            className="mb-2 block text-xs font-medium uppercase tracking-widest text-gray-400"
          >
            Telegram Handle
          </label>
          <input
            type="text"
            id="telegram"
            name="telegram"
            placeholder="@yourhandle"
            className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-pink/40 focus:bg-white/[0.05]"
          />
        </div>

        {/* Role */}
        <div>
          <label
            htmlFor="role"
            className="mb-2 block text-xs font-medium uppercase tracking-widest text-gray-400"
          >
            Your Role
          </label>
          <select
            id="role"
            name="role"
            className="w-full appearance-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-pink/40 focus:bg-white/[0.05]"
          >
            <option value="" className="bg-gray-900">
              Select your role
            </option>
            <option value="founder" className="bg-gray-900">
              Founder / CEO
            </option>
            <option value="cto" className="bg-gray-900">
              CTO / Technical Lead
            </option>
            <option value="security" className="bg-gray-900">
              Security Lead
            </option>
            <option value="engineering" className="bg-gray-900">
              Engineering
            </option>
            <option value="operations" className="bg-gray-900">
              Operations / BizDev
            </option>
            <option value="other" className="bg-gray-900">
              Other
            </option>
          </select>
        </div>

        {/* Chain / Ecosystem */}
        <div>
          <label
            htmlFor="chain"
            className="mb-2 block text-xs font-medium uppercase tracking-widest text-gray-400"
          >
            Chain / Ecosystem
          </label>
          <input
            type="text"
            id="chain"
            name="chain"
            placeholder="e.g. Ethereum, Solana, Cosmos"
            className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-pink/40 focus:bg-white/[0.05]"
          />
        </div>
      </div>

      {/* Additional Details */}
      <div className="mt-6">
        <label
          htmlFor="details"
          className="mb-2 block text-xs font-medium uppercase tracking-widest text-gray-400"
        >
          Additional Details
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          placeholder="Tell us about your protocol, current security setup, and what you're looking for..."
          className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-pink/40 focus:bg-white/[0.05]"
        />
      </div>

      {/* Submit */}
      <div className="mt-8">
        <button type="submit" className="btn-primary w-full justify-center">
          {ctaLabel}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <p className="mt-4 text-center text-xs text-gray-600">
        By submitting, you agree to our{" "}
        <a href="#" className="text-gray-400 underline">
          Privacy Policy
        </a>
        . We&rsquo;ll respond within 24 hours.
      </p>
    </form>
  );
}
