import { useEffect, useRef } from "react";

// ─── Partner data ─────────────────────────────────────────────────────────────
// Replace `logo` with: import jubileeLogo from "../../assets/partners/jubilee.png"
// then set logo: jubileeLogo

const partners = [
  { name: "Jubilee Insurance", abbr: "JI", color: "#1a3c6e", logo: "" },
  { name: "Britam", abbr: "BR", color: "#0a7c3e", logo: "" },
  { name: "CIC Insurance", abbr: "CIC", color: "#c8102e", logo: "" },
  { name: "AAR Insurance", abbr: "AAR", color: "#f59e0b", logo: "" },
  { name: "APA Insurance", abbr: "APA", color: "#1e40af", logo: "" },
  { name: "UAP Old Mutual", abbr: "UAP", color: "#6d28d9", logo: "" },
  { name: "Kenindia Assurance", abbr: "KIA", color: "#0e7490", logo: "" },
  { name: "Madison Insurance", abbr: "MAD", color: "#b45309", logo: "" },
  { name: "Resolution Insurance", abbr: "RES", color: "#065f46", logo: "" },
  { name: "Geminia Insurance", abbr: "GEM", color: "#9f1239", logo: "" },
  { name: "Sanlam Insurance", abbr: "SAN", color: "#1e3a5f", logo: "" },
  { name: "Incourage", abbr: "INC", color: "#374151", logo: "" },
];

const Partners = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("partners-visible");
          }
        });
      },
      { threshold: 0.1 },
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section className="bg-white py-0 px-6 sm:px-10 lg:px-40">
      <style>{`
        @keyframes fadeSlideLeft {
          from { opacity: 0; transform: translateX(-28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideRight {
          from { opacity: 0; transform: translateX(28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes logoReveal {
          from { opacity: 0; transform: translateY(16px) scale(0.93); }
          to   { opacity: 1; transform: translateY(0)  scale(1); }
        }

        /* Hidden until in view */
        .p-left  { opacity: 0; }
        .p-right { opacity: 0; }
        .p-logo  { opacity: 0; }

        .partners-visible .p-left {
          animation: fadeSlideLeft 0.65s cubic-bezier(0.22,1,0.36,1) 0.05s both;
        }
        .partners-visible .p-right {
          animation: fadeSlideRight 0.65s cubic-bezier(0.22,1,0.36,1) 0.15s both;
        }

        /* Staggered logo cards */
        .partners-visible .p-logo:nth-child(1)  { animation: logoReveal 0.45s cubic-bezier(0.22,1,0.36,1) 0.20s both; }
        .partners-visible .p-logo:nth-child(2)  { animation: logoReveal 0.45s cubic-bezier(0.22,1,0.36,1) 0.27s both; }
        .partners-visible .p-logo:nth-child(3)  { animation: logoReveal 0.45s cubic-bezier(0.22,1,0.36,1) 0.34s both; }
        .partners-visible .p-logo:nth-child(4)  { animation: logoReveal 0.45s cubic-bezier(0.22,1,0.36,1) 0.41s both; }
        .partners-visible .p-logo:nth-child(5)  { animation: logoReveal 0.45s cubic-bezier(0.22,1,0.36,1) 0.48s both; }
        .partners-visible .p-logo:nth-child(6)  { animation: logoReveal 0.45s cubic-bezier(0.22,1,0.36,1) 0.55s both; }
        .partners-visible .p-logo:nth-child(7)  { animation: logoReveal 0.45s cubic-bezier(0.22,1,0.36,1) 0.62s both; }
        .partners-visible .p-logo:nth-child(8)  { animation: logoReveal 0.45s cubic-bezier(0.22,1,0.36,1) 0.69s both; }
        .partners-visible .p-logo:nth-child(9)  { animation: logoReveal 0.45s cubic-bezier(0.22,1,0.36,1) 0.76s both; }
        .partners-visible .p-logo:nth-child(10) { animation: logoReveal 0.45s cubic-bezier(0.22,1,0.36,1) 0.83s both; }
        .partners-visible .p-logo:nth-child(11) { animation: logoReveal 0.45s cubic-bezier(0.22,1,0.36,1) 0.90s both; }
        .partners-visible .p-logo:nth-child(12) { animation: logoReveal 0.45s cubic-bezier(0.22,1,0.36,1) 0.97s both; }

        .logo-card {
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
        }
        .logo-card:hover {
          transform: translateY(-4px) scale(1.04);
          box-shadow: 0 12px 28px rgba(15,34,64,0.10);
          border-color: #bfdbfe;
        }
      `}</style>

      <div ref={sectionRef} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* ── Left Column — body copy ─────────────────────────────────────── */}
          <div className="p-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Trusted Network
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2240] leading-tight mb-5 tracking-tight">
              Access to Kenya's Best
              <br />
              <span className="text-blue-600">Insurance Providers</span>
              <br />— in one place.
            </h2>

            {/* Accent line */}
            <div className="w-12 h-1 rounded-full bg-amber-400 mb-6" />

            {/* Body copy — replace with your own text */}
            <p className="text-slate-500 text-base leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>

            {/* Stats row */}
            <div className="flex gap-10 mb-8">
              {[
                { value: "15+", label: "Insurer Partners" },
                { value: "98%", label: "Claims Satisfied" },
                { value: "5K+", label: "Clients Covered" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black text-[#0F2240]">
                    {s.value}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors group"
            >
              Learn about how we work
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
            </a>
          </div>

          {/* ── Right Column — logo grid ────────────────────────────────────── */}
          <div className="p-right">
            {/* Title lives on the right column */}
            <div className="mb-6">
              <h3 className="text-4xl sm:text-5xl font-bold text-[#0F2240] leading-tight mb-2 tracking-tight">
                Our Partners
              </h3>
              <p className="text-slate-400 text-sm">
                We compare across {partners.length}+ underwriters to find you
                the best rate.
              </p>
            </div>

            {/* 4 × 3 logo grid */}
            <div className="grid grid-cols-4 gap-4">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="p-logo logo-card flex flex-col items-center justify-center gap-2.5 bg-white border border-slate-150 rounded-2xl p-4 shadow-sm cursor-default"
                  title={partner.name}
                  style={{ minHeight: "96px" }}
                >
                  {partner.logo ? (
                    /* ── Real logo image ── */
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-10 object-contain"
                    />
                  ) : (
                    /* ── Fallback initials pill (remove once images are added) ── */
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xs font-bold tracking-wide flex-shrink-0"
                      style={{ backgroundColor: partner.color }}
                    >
                      {partner.abbr}
                    </div>
                  )}
                  <span className="text-[10px] text-slate-400 text-center leading-tight line-clamp-2 w-full">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <p className="text-slate-400 text-xs mt-4 text-right italic">
              + more underwriters available on request
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
