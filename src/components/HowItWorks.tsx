export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description:
        "We assess your protocol's architecture, risk profile, and security needs to recommend the right approach.",
    },
    {
      number: "02",
      title: "Scope & Design",
      description:
        "We define your program scope, reward structure, and security coverage strategy tailored to your protocol.",
    },
    {
      number: "03",
      title: "Launch",
      description:
        "Your program goes live. Researchers start hunting. You start receiving validated vulnerability reports.",
    },
    {
      number: "04",
      title: "Ongoing Protection",
      description:
        "Continuous monitoring, triage, and escalation. Your security posture strengthens every day.",
    },
  ];

  return (
    <section className="section-padding relative border-y border-white/5 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-pink">
            Getting Started
          </p>
          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            How Onboarding Works
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative grid gap-0 sm:grid-cols-4">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent sm:block" />

            {steps.map((step) => (
              <div key={step.number} className="relative px-4 py-6 text-center">
                {/* Step number */}
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-black">
                  <span className="font-mono text-lg font-bold text-pink">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-base font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
