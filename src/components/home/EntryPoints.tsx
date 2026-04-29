import { useNavigate } from "react-router-dom";

const items = [
  {
    title: "Protect My Family",
    path: "/personal",
    description:
      "Life, health & personal accident cover for you and your loved ones.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    accent: "#2563EB",
    lightBg: "#EFF6FF",
  },
  {
    title: "Cover My Business",
    path: "/business",
    description:
      "Comprehensive solutions to protect your assets, staff, and operations.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    accent: "#0F2240",
    lightBg: "#F0F4FF",
  },
  {
    title: "Find by Industry",
    path: "/industry",
    description:
      "Sector-specific policies tailored to your business type and risk profile.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
    accent: "#7C3AED",
    lightBg: "#F5F3FF",
  },
  {
    title: "Risk & Coverage Guide",
    path: "/risk",
    description:
      "Understand your exposures and choose the right level of protection.",
    icon: (
      <svg
        className="w-5 h-5"
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
    accent: "#D97706",
    lightBg: "#FFFBEB",
  },
  {
    title: "Book Appointment",
    path: "/appointment",
    description:
      "Speak with an adviser at your convenience — in person or virtually.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    accent: "#059669",
    lightBg: "#ECFDF5",
  },
  {
    title: "Get a Quote",
    path: "/quote",
    description:
      "Receive a personalised quote in minutes — no obligation, no jargon.",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    accent: "#F59E0B",
    lightBg: "#FFFBEB",
    highlight: true,
  },
];

function EntryPoints() {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-10">
          <p className="text-sm font-semibold tracking-widest uppercase text-blue-600 mb-2">
            What are you looking for?
          </p>
          <h2 className="text-4xl sm:text-3xl font-bold text-[#0F2240]">
            Find the right cover, fast.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`group text-left w-full rounded-2xl border p-6 transition-all duration-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                item.highlight
                  ? "border-amber-300 bg-amber-50 hover:bg-amber-100"
                  : "border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50"
              }`}
            >
              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4 transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: item.lightBg, color: item.accent }}
              >
                {item.icon}
              </div>

              {/* Text */}
              <h3 className="font-semibold text-[#0F2240] text-base mb-1 group-hover:text-blue-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {item.description}
              </p>

              {/* Arrow */}
              <div
                className="mt-4 inline-flex items-center gap-1 text-xs font-semibold transition-colors"
                style={{ color: item.accent }}
              >
                Explore
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EntryPoints;
