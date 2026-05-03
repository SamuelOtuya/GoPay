import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import heroBg from "../../assets/background.jpg";

const Hero = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const [, setMounted] = useState(false);

  // Subtle parallax on scroll
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (bgRef.current) {
        const y = window.scrollY;
        bgRef.current.style.transform = `translateY(${y * 0.25}px) scale(1.05)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = [
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
      label: "Personal Insurance",
      sub: "Protect what matters",
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
  ];

  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0F2240]">
      <style>{`
        /* ── Entrance animations ── */
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes heroBadge {
          0%   { opacity: 0; transform: translateY(12px) scale(0.92); }
          60%  { transform: translateY(-2px) scale(1.02); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes heroCard {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* ── Gradient text shimmer ── */
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .hero-gradient-text {
  background: linear-gradient(
    270deg,
    #93c5fd,   /* light blue */
    #3b82f6,   /* blue */
    #60a5fa,   /* blue */
    #bfdbfe    /* very light blue */
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradientShift 7s ease infinite;
}

        /* ── Floating orbs ── */
        @keyframes floatOrb1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          33%       { transform: translateY(-18px) translateX(10px); }
          66%       { transform: translateY(10px) translateX(-8px); }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          33%       { transform: translateY(14px) translateX(-12px); }
          66%       { transform: translateY(-10px) translateX(10px); }
        }
        .orb-1 { animation: floatOrb1 9s ease-in-out infinite; }
        .orb-2 { animation: floatOrb2 12s ease-in-out infinite; }

        /* ── Floating particles ── */
        @keyframes particle {
          0%, 100% { transform: translateY(0) scale(1);   opacity: 0.4; }
          50%       { transform: translateY(-12px) scale(1.3); opacity: 0.8; }
        }
        .p1 { animation: particle 4.0s ease-in-out infinite; }
        .p2 { animation: particle 5.5s ease-in-out 0.8s infinite; }
        .p3 { animation: particle 3.8s ease-in-out 1.6s infinite; }
        .p4 { animation: particle 6.2s ease-in-out 0.4s infinite; }
        .p5 { animation: particle 4.8s ease-in-out 2.0s infinite; }

        /* ── Stats counter underline ── */
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 100%; }
        }

        /* ── CTA button pulse ── */
        @keyframes ctaPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(245,158,11,0.4); }
          50%       { box-shadow: 0 0 0 10px rgba(245,158,11,0); }
        }
        .cta-pulse { animation: ctaPulse 2.5s ease-in-out infinite; }

        /* ── Card hover shine ── */
        .card-shine::after {
          content: "";
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
          transform: skewX(-20deg);
          transition: left 0.5s ease;
        }
        .card-shine:hover::after { left: 160%; }

        /* ── Staggered entrance helpers ── */
        .hero-enter { animation: heroFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        .hero-enter-1 { animation-delay: 0.1s; }
        .hero-enter-2 { animation-delay: 0.22s; }
        .hero-enter-3 { animation-delay: 0.34s; }
        .hero-enter-4 { animation-delay: 0.46s; }
        .hero-enter-5 { animation-delay: 0.58s; }
        .hero-enter-6 { animation-delay: 0.70s; }

        .card-enter { animation: heroCard 0.6s cubic-bezier(0.22,1,0.36,1) both; }
        .card-enter-1 { animation-delay: 0.45s; }
        .card-enter-2 { animation-delay: 0.55s; }
        .card-enter-3 { animation-delay: 0.65s; }
        .card-enter-4 { animation-delay: 0.75s; }

        .badge-enter { animation: heroBadge 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.05s both; }

        /* Wave fade-in */
        .wave-enter { animation: heroFadeIn 1s ease 0.3s both; }
      `}</style>

      {/* ── Parallax Background ── */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${heroBg})`,
          transform: "scale(1.05)",
          transition: "transform 0.05s linear",
        }}
      />

      {/* ── Overlays ── */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-[#0F2240]/40" />

      {/* ── Floating orbs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb-1 absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[#1B3A6B]/30 blur-3xl" />
        <div className="orb-2 absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-[#2563EB]/10 blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Animated particles */}
        <div className="p1 absolute top-1/4 right-1/3 w-3 h-3 rounded-full bg-blue-400/50" />
        <div className="p2 absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-amber-400/50" />
        <div className="p3 absolute top-3/4 right-1/2 w-4 h-4 rounded-full bg-blue-300/30" />
        <div className="p4 absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-white/20" />
        <div className="p5 absolute top-2/3 left-1/3 w-3 h-3 rounded-full bg-blue-200/30" />

        {/* Diagonal accent line */}
        <div
          className="absolute top-0 right-1/4 w-px h-full opacity-[0.06]"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #60a5fa, transparent)",
          }}
        />
      </div>

      {/* ── Main Content ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="badge-enter inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Kenya's Trusted Insurance Partner
            </div>

            {/* Headline */}
            <h1
              className="hero-enter hero-enter-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ opacity: 0 }}
            >
              Insurance designed
              <br />
              <span className="hero-gradient-text">around what matters</span>
              <br />
              most to you.
            </h1>

            {/* Subtext */}
            <p
              className="hero-enter hero-enter-3 text-slate-300 text-lg leading-relaxed mb-10 max-w-md"
              style={{ opacity: 0 }}
            >
              Whether it's your family, your business, or your livelihood —
              GoPay Insurance gives you the protection that fits your real life,
              not just a policy.
            </p>

            {/* CTA Buttons */}
            <div
              className="hero-enter hero-enter-4 flex flex-wrap gap-4 mb-12"
              style={{ opacity: 0 }}
            >
              <Link
                to="/quote"
                className="cta-pulse inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95"
              >
                Get a Free Quote
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
              </Link>
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-medium text-sm transition-all duration-200 hover:scale-105 active:scale-95"
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
            <div
              className="hero-enter hero-enter-5 flex flex-wrap gap-8"
              style={{ opacity: 0 }}
            >
              {[
                { value: "5,000+", label: "Clients Protected" },
                { value: "15+", label: "Insurance Products" },
                { value: "24/7", label: "Support Available" },
              ].map((stat, i) => (
                <div key={stat.label} className="relative">
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-xs mt-0.5">
                    {stat.label}
                  </div>
                  {/* Animated underline */}
                  <div
                    className="absolute -bottom-1 left-0 h-px bg-blue-400/40 w-0"
                    style={{
                      animation: `lineGrow 0.6s ease ${0.9 + i * 0.15}s forwards`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Entry Cards */}
          <div className="grid grid-cols-2 gap-4">
            {cards.map((card, i) => (
              <Link
                key={card.path}
                to={card.path}
                className={`card-enter card-enter-${i + 1} card-shine relative group bg-gradient-to-br ${card.color} rounded-2xl p-5 hover:scale-[1.04] hover:-translate-y-1 transition-all duration-300 shadow-xl overflow-hidden`}
                style={{ opacity: 0 }}
              >
                {/* Hover dark veil */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-2xl" />

                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)" }}
                />

                <div className="relative">
                  <div className="text-white/80 mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:text-white w-fit">
                    {card.icon}
                  </div>
                  <div className="text-white font-semibold text-sm leading-tight mb-0.5">
                    {card.label}
                  </div>
                  <div className="text-white/60 text-xs">{card.sub}</div>
                </div>

                <div className="absolute bottom-3 right-3 text-white/30 group-hover:text-white/80 group-hover:translate-x-1 transition-all duration-300">
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

      {/* ── Bottom wave ── */}
      <div
        className="wave-enter absolute bottom-0 left-0 right-0"
        style={{ opacity: 0 }}
      >
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
