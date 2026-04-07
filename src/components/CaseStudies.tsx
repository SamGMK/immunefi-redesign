export default function CaseStudies() {
  const studies = [
    {
      tag: "Immunefi x Plume",
      title:
        "How Plume Uncovered 11 Critical Vulnerabilities Before They Reached Production",
      gradient: "from-pink/10 to-transparent",
    },
    {
      tag: "Immunefi x Moonbeam",
      title:
        "How Moonbeam Prevented $100M in Potential Losses With Immunefi",
      gradient: "from-white/5 to-transparent",
    },
  ];

  return (
    <section className="section-padding relative bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-pink">
            Proven Results
          </p>
          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Real Protocols. Real Security Outcomes.
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-2">
          {studies.map((study) => (
            <div
              key={study.tag}
              className="group card-dark relative overflow-hidden p-8 sm:p-10"
            >
              {/* Gradient accent */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${study.gradient} pointer-events-none`}
              />

              <div className="relative z-10">
                <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-400">
                  {study.tag}
                </span>

                <h3 className="mt-6 text-xl font-bold leading-snug tracking-tight sm:text-2xl">
                  {study.title}
                </h3>

                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-pink transition-all group-hover:gap-3"
                >
                  Learn More
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
          ))}
        </div>
      </div>
    </section>
  );
}
