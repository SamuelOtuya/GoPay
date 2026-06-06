import { useState, useEffect, useRef } from "react";

const values = [
  {
    title: "Integrity",
    desc: "We are honest and accountable in everything we do.",
    icon: "⚖️",
  },
  {
    title: "Excellence",
    desc: "We always go the extra mile.",
    icon: "🏆",
  },
  {
    title: "Creativity",
    desc: "We embrace bold ideas and fresh thinking.",
    icon: "💡",
  },
  {
    title: "Growth",
    desc: "We grow with our clients, team, and community.",
    icon: "🌱",
  },
];

const partners = [
  "Old Mutual",
  "APA Insurance",
  "CIC Insurance",
  "Jubilee Insurance",
  "CGA Insurance Kenya",
  "Britam",
  "AAR Insurance",
  "First Assurance",
  "Fidelity Insurance",
  "Heritage Insurance",
  "Madison",
  "Prudential",
  "ICEA Lion Group",
  "Kenindia",
  "Directline Assurance",
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div
      className="min-h-screen bg-white font-sans"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      {/* ── HERO BANNER ── */}
      <section className="relative w-full h-28 md:h-36 overflow-hidden">
        <img
          src="/images/travel-risk-3.jpg"
          alt="GoPay Insurance Agency"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Professional dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Optional label */}
        <div className="relative z-10 h-full flex items-center px-8 py-25 max-w-6xl mx-auto">
          <h1
            className="text-black text-2xl md:text-3xl font-bold tracking-wide"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            About Us
          </h1>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <p
              className="text-red-500 uppercase tracking-[0.3em] text-xs font-semibold mb-3"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Who We Are
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              We represent
              <br />
              <em className="text-red-500 not-italic">one party</em> only:
              <br />
              the client.
            </h2>
            <p
              className="text-gray-600 text-lg leading-relaxed"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              GoPay Insurance Agency is an independent insurance intermediary
              partnering with leading underwriters including Britam Holdings,
              APA Insurance, and Jubilee Insurance. This independence lets us
              compare the market, negotiate competitive premiums, and structure
              covers aligned to your actual risk — all at no extra cost to you.
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  label: "Market Comparison",
                  text: "Multiple policy options evaluated across the market.",
                },
                {
                  label: "Premium Negotiation",
                  text: "Competitive and sustainable rates secured for you.",
                },
                {
                  label: "Claims Guidance",
                  text: "Expert support when it matters most.",
                },
                {
                  label: "Performance Monitoring",
                  text: "We optimise your cover continuously, not just at renewal.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start border-l-4 border-red-500 pl-4 py-2"
                >
                  <div>
                    <p
                      className="font-bold text-gray-900"
                      style={{ fontFamily: "system-ui, sans-serif" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-gray-500 text-sm"
                      style={{ fontFamily: "system-ui, sans-serif" }}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="bg-gray-950 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p
              className="text-red-400 uppercase tracking-[0.3em] text-xs font-semibold mb-10 text-center"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Vision &amp; Mission
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={100}>
              <div className="border border-gray-700 rounded-2xl p-10 relative overflow-hidden group hover:border-red-500 transition-colors duration-300">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-500 opacity-5 rounded-full group-hover:opacity-10 transition-opacity duration-300" />
                <p
                  className="text-red-400 uppercase tracking-widest text-xs mb-4"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  Our Vision
                </p>
                <p className="text-white text-xl leading-relaxed">
                  To become the most trusted and analytically driven insurance
                  agency in Kenya — redefining insurance from a purchase into a{" "}
                  <span className="text-red-400 font-semibold">
                    managed financial tool
                  </span>
                  .
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="border border-gray-700 rounded-2xl p-10 relative overflow-hidden group hover:border-red-500 transition-colors duration-300">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-500 opacity-5 rounded-full group-hover:opacity-10 transition-opacity duration-300" />
                <p
                  className="text-red-400 uppercase tracking-widest text-xs mb-4"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  Our Mission
                </p>
                <p className="text-white text-xl leading-relaxed">
                  To deliver transparent, data-driven, and client-focused
                  insurance solutions that actively manage{" "}
                  <span className="text-red-400 font-semibold">
                    risk, cost, and long-term sustainability
                  </span>
                  .
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── WHY WORK WITH US ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <FadeIn>
          <p
            className="text-red-500 uppercase tracking-[0.3em] text-xs font-semibold mb-3 text-center"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-14">
            Insurance managed,
            <br />
            <em className="text-red-500">not just sold.</em>
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              num: "01",
              title: "Insurance as a Financial Line Item",
              body: "Insurance is one of the largest expenses after payroll. We help clients manage it — not just buy it.",
            },
            {
              num: "02",
              title: "Medical Insurance Expertise",
              body: "With deep underwriting and claims analysis experience, we design schemes that are sustainable from day one.",
            },
            {
              num: "03",
              title: "Data Before Decisions",
              body: "We rely on utilisation trends, claims data, and benchmarking — never guesswork.",
            },
            {
              num: "04",
              title: "Independence That Works for You",
              body: "While insurers protect their portfolios, we structure solutions that protect your outcome.",
            },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className="group p-8 rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-lg hover:shadow-red-50 transition-all duration-300 bg-white">
                <p className="text-6xl font-bold text-gray-100 group-hover:text-red-100 transition-colors leading-none mb-4">
                  {item.num}
                </p>
                <h3
                  className="text-xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-gray-500 leading-relaxed"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  {item.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="bg-red-500 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p
              className="text-white text-opacity-70 uppercase tracking-[0.3em] text-xs font-semibold mb-3 text-center"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Our Core Values
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-14">
              What drives us.
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-zinc-950 text-center hover:bg-opacity-20 transition-all duration-300">
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                  <p
                    className="text-sm opacity-80 leading-relaxed"
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    {v.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <FadeIn>
          <p
            className="text-red-500 uppercase tracking-[0.3em] text-xs font-semibold mb-3 text-center"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            Leadership
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            The people behind GoPay.
          </h2>
        </FadeIn>
        <div className="flex justify-center">
          <FadeIn delay={100}>
            <div className="max-w-2xl w-full bg-gray-50 rounded-3xl overflow-hidden shadow-xl shadow-gray-100 flex flex-col md:flex-row">
              {/* Photo placeholder — replace src with actual photo filename */}
              <div className="md:w-64 flex-shrink-0 bg-gray-200 flex items-center justify-center min-h-64 md:min-h-0">
                {/* 
                  ===================================================
                  PHOTO PLACEHOLDER
                  Save your photo as: jimnah-migwi.jpg
                  Then replace the div below with:
                  <img src="/jimnah-migwi.jpg" alt="Jimnah Migwi" className="w-full h-full object-cover" />
                  ===================================================
                */}
                <img
                  src="/images/jimnah-migwi.jpeg"
                  alt="Jimnah Migwi"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bio */}
              <div className="p-10 flex flex-col justify-center">
                <p
                  className="text-red-500 uppercase tracking-widest text-xs mb-1"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  Founder &amp; Principal Consultant
                </p>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Jimnah Migwi
                </h3>
                <p
                  className="text-gray-600 text-sm leading-relaxed mb-4"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  An insurance professional specialising in medical insurance
                  structuring, pricing, and performance management. With a
                  background in actuarial science and data analytics, Jimnah
                  brings a disciplined, data-driven approach spanning over 6
                  years.
                </p>
                <p
                  className="text-gray-600 text-sm leading-relaxed"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  His experience across underwriting and business development
                  gives him a unique ability to bridge technical insurance
                  design with practical client outcomes.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p
              className="text-red-500 uppercase tracking-[0.3em] text-xs font-semibold mb-3 text-center"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Our Partners
            </p>
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Brands that trust us.
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="flex flex-wrap justify-center gap-3">
              {partners.map((p, i) => (
                <span
                  key={i}
                  className="px-5 py-2.5 rounded-full border border-gray-200 bg-white text-gray-600 text-sm font-medium hover:border-red-300 hover:text-red-600 transition-colors duration-200"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  {p}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Ready to talk
            <br />
            <em className="text-red-500">insurance?</em>
          </h2>
          <p
            className="text-gray-500 text-lg mb-10 max-w-lg mx-auto"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            Office: Longonot Place, 4th Floor, Kijabe Street, Nairobi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0715664233"
              className="inline-flex items-center gap-2 bg-red-500 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-red-600 transition-colors duration-200"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              0715 664233
            </a>
            <a
              href="mailto:info@gopayinsurance.com"
              className="inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full text-base font-semibold hover:border-red-400 hover:text-red-500 transition-colors duration-200"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              info@gopayinsurance.com
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
