export default function Testimonials() {
  const tweets = [
    {
      avatar: "P",
      avatarColor: "bg-orange-600",
      name: "PSTAKE",
      handle: "@pStakeFinance",
      verified: true,
      content: (
        <>
          <span className="text-pink">&#x1f6a8;</span> pSTAKE on Cosmos
          Security Update
          <br />
          <br />
          Earlier today, a critical severity bug was disclosed on the pSTAKE{" "}
          <span className="text-blue-400">@immunefi</span> Bug Bounty program
          and has since been acknowledged and resolved.
        </>
      ),
    },
    {
      avatar: "S",
      avatarColor: "bg-amber-500",
      name: "Scroll",
      handle: "@Scroll_ZKP",
      verified: true,
      content: (
        <>
          6/Massive Shoutouts
          <br />
          <br />
          <span className="text-blue-400">@axiom_xyz</span> for their
          responsible disclosure and collaboration on fixing the OpenVM circuit
          issue.
          <br />
          <br />
          <span className="text-blue-400">@WhiteHatMage</span> for spotting the
          bridge vulnerability and responsibly reporting it via{" "}
          <span className="text-blue-400">@immunefi</span>, who&rsquo;s been
          awarded a{" "}
          <span className="font-semibold text-white">$1M USD bounty</span>.
        </>
      ),
      meta: "8:15 pm · 2 May 2025 · 24.1K Views",
    },
    {
      avatar: "Z",
      avatarColor: "bg-purple-600",
      name: "Zapper",
      handle: "@zapper_fi",
      verified: true,
      content: (
        <>
          <span className="text-pink">&#x1f6a8;</span> We&rsquo;ve recently
          disabled our <span className="text-blue-400">@sushiswap</span> and{" "}
          <span className="text-blue-400">@Uniswap</span> withdrawals due to a
          vulnerability disclosed by{" "}
          <span className="text-blue-400">@Immunefi</span>&rsquo;s whitehat{" "}
          <span className="text-blue-400">@lucash_dev</span>
          <br />
          <br />
          Our team has promptly paused the affected contracts.
          <br />
          <br />
          Full report to follow in the next 72h. Thank you for your patience
          everyone!
        </>
      ),
    },
  ];

  return (
    <section className="section-padding relative bg-black">
      <div className="divider-pink mb-20" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-pink">
            Testimonials
          </p>
          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Real Protocols. Real Security Outcomes.
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {tweets.map((tweet) => (
            <div
              key={tweet.handle}
              className="card-dark flex flex-col rounded-xl p-6"
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${tweet.avatarColor} text-sm font-bold text-white`}
                >
                  {tweet.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-white">
                      {tweet.name}
                    </span>
                    {tweet.verified && (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-blue-400"
                      >
                        <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z" />
                      </svg>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">{tweet.handle}</span>
                </div>
              </div>

              {/* Content */}
              <div className="mt-4 flex-1 text-sm leading-relaxed text-gray-300">
                {tweet.content}
              </div>

              {/* Meta */}
              {tweet.meta && (
                <div className="mt-4 text-xs text-gray-600">{tweet.meta}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
