"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type UrlEntry = {
  id: number;
  value: string;
};

export default function ThreatAssessment() {
  const [urls, setUrls] = useState<UrlEntry[]>([{ id: 1, value: "" }]);
  const [email, setEmail] = useState("");
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);

  function addUrl() {
    setUrls((prev) => [...prev, { id: Date.now(), value: "" }]);
  }

  function removeUrl(id: number) {
    if (urls.length > 1) {
      setUrls((prev) => prev.filter((u) => u.id !== id));
    }
  }

  function updateUrl(id: number, value: string) {
    setUrls((prev) => prev.map((u) => (u.id === id ? { ...u, value } : u)));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setRunning(true);
    setTimeout(() => {
      setRunning(false);
      setDone(true);
    }, 3000);
  }

  return (
    <>
      <Navigation />
      <main className="ascii-bg grid-overlay relative min-h-screen pt-24">
        {/* Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-[500px] w-[700px] rounded-full bg-pink/5 blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <a
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
          </a>

          <div className="mt-10 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-pink">
              Free Assessment
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Threat{" "}
              <span className="text-glow-pink bg-gradient-to-r from-pink-light to-pink bg-clip-text text-transparent">
                Assessment
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-gray-400">
              Paste your GitHub repository or any block explorer contract URL
              below. We&rsquo;ll analyze your code for potential
              vulnerabilities and attack vectors.
            </p>
            <p className="mx-auto mt-3 max-w-lg text-sm text-gray-500">
              We support the most diverse range of ecosystems of any security
              company — EVM, Solana, Cosmos, Move, Substrate, and more.
            </p>
          </div>

          {/* Form */}
          {done ? (
            <div className="mt-12 card-dark rounded-xl p-10 text-center">
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
              <h3 className="mt-6 text-2xl font-bold">
                Assessment Submitted
              </h3>
              <p className="mt-3 text-sm text-gray-400">
                We&rsquo;re analyzing your code now. You&rsquo;ll receive a
                detailed threat report at{" "}
                <span className="font-medium text-white">{email}</span> within
                48 hours.
              </p>
              <a
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
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-12">
              <div className="card-dark rounded-xl p-8 sm:p-10">
                {/* URL inputs */}
                <label className="mb-3 block text-xs font-medium uppercase tracking-widest text-gray-400">
                  GitHub or Block Explorer URLs *
                </label>

                <div className="space-y-3">
                  {urls.map((entry, i) => (
                    <div key={entry.id} className="flex gap-2">
                      <div className="relative flex-1">
                        <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-600">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                          </svg>
                        </div>
                        <input
                          type="url"
                          required
                          value={entry.value}
                          onChange={(e) => updateUrl(entry.id, e.target.value)}
                          placeholder={
                            i === 0
                              ? "https://github.com/org/repo or any block explorer URL"
                              : "Add another URL..."
                          }
                          className="w-full rounded-lg border border-white/10 bg-white/[0.03] py-3.5 pl-11 pr-4 font-mono text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-pink/40 focus:bg-white/[0.05]"
                        />
                      </div>
                      {urls.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeUrl(entry.id)}
                          className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-lg border border-white/10 text-gray-600 transition-colors hover:border-red-500/30 hover:text-red-400"
                          aria-label="Remove URL"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M18 6L6 18M6 6l12 12" />
                          </svg>
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={addUrl}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-white"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  Add another URL
                </button>

                {/* Email */}
                <div className="mt-8">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium uppercase tracking-widest text-gray-400"
                  >
                    Email for Report Delivery *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder-gray-600 outline-none transition-colors focus:border-pink/40 focus:bg-white/[0.05]"
                  />
                </div>

                {/* Submit */}
                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={running}
                    className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {running ? (
                      <>
                        <svg
                          className="h-4 w-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                            className="opacity-25"
                          />
                          <path
                            d="M4 12a8 8 0 018-8"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            className="opacity-75"
                          />
                        </svg>
                        Running Threat Assessment...
                      </>
                    ) : (
                      <>
                        Run Threat Assessment
                        <svg
                          width="16"
                          height="16"
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
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Info cards */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="card-dark rounded-lg p-5 text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-pink"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <p className="mt-3 text-xs font-medium text-gray-400">
                    Smart contract vulnerability scan
                  </p>
                </div>
                <div className="card-dark rounded-lg p-5 text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-pink"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <p className="mt-3 text-xs font-medium text-gray-400">
                    Report delivered within 48 hours
                  </p>
                </div>
                <div className="card-dark rounded-lg p-5 text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-pink"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <p className="mt-3 text-xs font-medium text-gray-400">
                    100% free — no commitment
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
