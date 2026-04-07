export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                className="text-white"
              >
                <path
                  d="M16 2L3 9v14l13 7 13-7V9L16 2zm0 3.5L25.5 10 16 14.5 6.5 10 16 5.5zM5.5 11.5l9.5 5v10l-9.5-5v-10zm21 0v10l-9.5 5v-10l9.5-5z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-base font-bold">immunefi</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
              The leading Web3 security platform. Protecting protocols from
              exploits with bug bounties, audits, and continuous security.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Platform
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition-colors hover:text-white"
                >
                  Bug Bounties
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition-colors hover:text-white"
                >
                  Security Audits
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition-colors hover:text-white"
                >
                  Audit Competitions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition-colors hover:text-white"
                >
                  PR Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Resources
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition-colors hover:text-white"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition-colors hover:text-white"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition-colors hover:text-white"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition-colors hover:text-white"
                >
                  Leaderboard
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition-colors hover:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition-colors hover:text-white"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition-colors hover:text-white"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition-colors hover:text-white"
                >
                  Token
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Immunefi. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-gray-600 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-gray-600 transition-colors hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
