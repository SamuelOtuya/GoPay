import { Link } from "react-router-dom";

// 👇 Replace with your image import or swap the variable for a URL string below
import heroBg from "../../assets/background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0F2240]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Dark overlay — change /60 to lighten or darken */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Blue tint on top of overlay — remove if not needed */}
      <div className="absolute inset-0 bg-[#0F2240]/40" />

      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[#1B3A6B]/30 blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-[#2563EB]/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-1/4 right-1/3 w-3 h-3 rounded-full bg-blue-400/40 animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-amber-400/40 animate-pulse delay-300" />
        <div className="absolute top-3/4 right-1/2 w-4 h-4 rounded-full bg-blue-300/20 animate-pulse delay-700" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Kenya's Trusted Insurance Partner
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Insurance designed
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#3B82F6]">
                around what matters
              </span>
              <br />
              most to you.
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-md">
              Whether it's your family, your business, or your livelihood —
              Gopay Insurance gives you the protection that fits your real life,
              not just a policy.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30"
              >
                Get a Free Quote
                <svg
                  className="w-4 h-4"
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
              </Link>
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium text-sm transition-all duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Book Appointment
              </Link>
            </div>

            {/* Trust stats */}
            <div className="flex flex-wrap gap-8">
              {[
                { value: "5,000+", label: "Clients Protected" },
                { value: "15+", label: "Insurance Products" },
                { value: "24/7", label: "Support Available" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Entry Cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
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
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                ),
                label: "Protect My Family",
                sub: "Personal cover",
                path: "/personal",
                color: "from-blue-600 to-blue-700",
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                ),
                label: "Cover My Business",
                sub: "Business solutions",
                path: "/business",
                color: "from-indigo-600 to-indigo-700",
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                ),
                label: "By Industry",
                sub: "Sector-specific",
                path: "/industry",
                color: "from-violet-600 to-violet-700",
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
                label: "Risk & Coverage Guide",
                sub: "Understand your risks",
                path: "/risk",
                color: "from-orange-500 to-orange-600",
              },
            ].map((card) => (
              <Link
                key={card.path}
                to={card.path}
                className={`relative group bg-gradient-to-br ${card.color} rounded-2xl p-5 hover:scale-[1.02] transition-all duration-200 shadow-xl overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl" />
                <div className="relative">
                  <div className="text-white/80 mb-3">{card.icon}</div>
                  <div className="text-white font-semibold text-sm leading-tight mb-0.5">
                    {card.label}
                  </div>
                  <div className="text-white/60 text-xs">{card.sub}</div>
                </div>
                <div className="absolute bottom-3 right-3 text-white/30 group-hover:text-white/60 transition-colors">
                  <svg
                    className="w-4 h-4"
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
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 60L1440 60L1440 0C1200 50 900 60 720 30C540 0 240 20 0 0L0 60Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
