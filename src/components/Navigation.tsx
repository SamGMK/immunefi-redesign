"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              className="text-white"
            >
              <path
                d="M16 2L3 9v14l13 7 13-7V9L16 2zm0 3.5L25.5 10 16 14.5 6.5 10 16 5.5zM5.5 11.5l9.5 5v10l-9.5-5v-10zm21 0v10l-9.5 5v-10l9.5-5z"
                fill="currentColor"
              />
            </svg>
            <span className="text-lg font-bold tracking-tight">immunefi</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#products"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Platform
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Security Researchers
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Token
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Blog
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="#"
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              Login
            </a>
            <a
              href="#"
              className="rounded-md bg-white px-5 py-2 text-sm font-semibold text-black transition-all hover:bg-gray-200"
            >
              Explore Bounties
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="border-t border-white/5 pb-6 pt-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#products" className="text-sm text-gray-400">
                Platform
              </a>
              <a href="#" className="text-sm text-gray-400">
                Security Researchers
              </a>
              <a href="#" className="text-sm text-gray-400">
                Token
              </a>
              <a href="#" className="text-sm text-gray-400">
                Blog
              </a>
              <a href="#" className="text-sm text-gray-400">
                Login
              </a>
              <a
                href="#"
                className="mt-2 rounded-md bg-white px-5 py-2 text-center text-sm font-semibold text-black"
              >
                Explore Bounties
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
