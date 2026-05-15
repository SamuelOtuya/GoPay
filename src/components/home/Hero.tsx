import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import heroBg from "../../assets/background.jpg";

const Hero = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const [, setMounted] = useState(false);

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

  return (
    <section
      className="relative flex items-center overflow-hidden bg-[#0F2240]"
      style={{ minHeight: "100dvh" }}
    >
      <style>{`
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
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .hero-gradient-text {
          background: linear-gradient(270deg, #93c5fd, #3b82f6, #60a5fa, #bfdbfe);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradientShift 7s ease infinite;
        }
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
        @keyframes particle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
          50%       { transform: translateY(-12px) scale(1.3); opacity: 0.8; }
        }
        .p1 { animation: particle 4.0s ease-in-out infinite; }
        .p2 { animation: particle 5.5s ease-in-out 0.8s infinite; }
        .p3 { animation: particle 3.8s ease-in-out 1.6s infinite; }
        .p4 { animation: particle 6.2s ease-in-out 0.4s infinite; }
        .p5 { animation: particle 4.8s ease-in-out 2.0s infinite; }
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 100%; }
        }
        @keyframes ctaPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(245,158,11,0.4); }
          50%       { box-shadow: 0 0 0 10px rgba(245,158,11,0); }
        }
        .cta-pulse { animation: ctaPulse 2.5s ease-in-out infinite; }
        .hero-enter { animation: heroFadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        .hero-enter-1 { animation-delay: 0.1s; }
        .hero-enter-2 { animation-delay: 0.22s; }
        .hero-enter-3 { animation-delay: 0.34s; }
        .hero-enter-4 { animation-delay: 0.46s; }
        .hero-enter-5 { animation-delay: 0.58s; }
        .badge-enter { animation: heroBadge 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.05s both; }
        .wave-enter { animation: heroFadeIn 1s ease 0.3s both; }
      `}</style>

      {/* Parallax Background — fixed to always fill */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${heroBg})`,
          transform: "scale(1.05)",
          transition: "transform 0.05s linear",
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-[#0F2240]/45" />

      {/* Orbs & particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb-1 absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[#1B3A6B]/30 blur-3xl" />
        <div className="orb-2 absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-[#2563EB]/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="p1 absolute top-1/4 right-1/3 w-3 h-3 rounded-full bg-blue-400/50" />
        <div className="p2 absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-amber-400/50" />
        <div className="p3 absolute top-3/4 right-1/2 w-4 h-4 rounded-full bg-blue-300/30" />
        <div className="p4 absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-white/20" />
        <div className="p5 absolute top-2/3 left-1/3 w-3 h-3 rounded-full bg-blue-200/30" />
        <div
          className="absolute top-0 right-1/4 w-px h-full opacity-[0.06]"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #60a5fa, transparent)",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-32 pt-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="badge-enter inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Kenya's Trusted Insurance Partner
          </div>

          {/* Headline */}
          <h1
            className="hero-enter hero-enter-2 text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6 tracking-tight"
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
            className="hero-enter hero-enter-3 text-slate-300 text-lg leading-relaxed mb-10 max-w-xl"
            style={{ opacity: 0 }}
          >
            Whether it's your family, your business, or your livelihood — GoPay
            Insurance gives you the protection that fits your real life, not
            just a policy.
          </p>

          {/* CTAs */}
          <div
            className="hero-enter hero-enter-4 flex flex-wrap gap-4 mb-16"
            style={{ opacity: 0 }}
          >
            <Link
              to="/quote"
              className="cta-pulse inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold text-base transition-all duration-200 shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95"
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
              to="/personal"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 hover:border-white/50 text-white font-semibold text-base transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Explore Covers
            </Link>
          </div>

          {/* Stats */}
          <div
            className="hero-enter hero-enter-5 flex flex-wrap gap-10"
            style={{ opacity: 0 }}
          >
            {[
              { value: "5,000+", label: "Clients Protected" },
              { value: "15+", label: "Insurance Products" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, i) => (
              <div key={stat.label} className="relative">
                <div className="text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-xs mt-1">{stat.label}</div>
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
      </div>

      {/* Bottom wave */}
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
