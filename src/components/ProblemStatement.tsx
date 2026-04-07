export default function ProblemStatement() {
  const stats = [
    {
      number: "$25M",
      label: "Average cost of a single hack in direct theft",
    },
    {
      number: "84%",
      label: "Of hacked tokens never recover",
    },
    {
      number: "191",
      label: "Publicly known hacks in 2024 and 2025 alone",
    },
  ];

  return (
    <section className="relative border-y border-white/5 bg-black">
      {/* Pink divider top */}
      <div className="divider-pink" />

      <div className="section-padding mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-pink">
            The Problem
          </p>
          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            The Threat Is Real.
            <br />
            The Stakes Are Existential.
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.number} className="card-dark p-8 text-center">
              <div className="text-glow-pink text-4xl font-bold text-pink sm:text-5xl">
                {stat.number}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <blockquote className="border-l-2 border-pink/30 pl-6">
            <p className="text-lg italic leading-relaxed text-gray-300">
              &ldquo;There&rsquo;s no product or service in crypto that delivers
              higher ROI than security spending.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>

      <div className="divider-pink" />
    </section>
  );
}
