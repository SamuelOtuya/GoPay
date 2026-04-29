const WhyUs = () => {
  const reasons = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "IRA Regulated",
      description:
        "Fully licensed and regulated by the Insurance Regulatory Authority of Kenya. Your protection is our compliance.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "Dedicated Advisors",
      description:
        "Every client gets a personal advisor who understands your unique situation and finds solutions that actually fit.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Fast Claims Processing",
      description:
        "We work directly with underwriters to ensure your claims are processed quickly and fairly. No bureaucratic delays.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Multi-Insurer Access",
      description:
        "As an independent agency, we compare across Kenya's leading underwriters to find you the best value and coverage.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
      title: "Transparent Coverage",
      description:
        "No hidden clauses. We walk you through every policy detail so you know exactly what's covered — and what isn't.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "24/7 Support",
      description:
        "Emergencies don't follow business hours. Our WhatsApp and phone lines are always open for urgent inquiries.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-4">
            Why Gopay
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2240] mb-4">
            The insurance experience you deserve
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            We're not just selling policies. We're building long-term protection
            partnerships with Kenyan families and businesses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-[#1B3A6B] text-blue-600 group-hover:text-white flex items-center justify-center mb-5 transition-all duration-300">
                {r.icon}
              </div>
              <h3 className="text-base font-semibold text-[#0F2240] mb-2">
                {r.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
