import { Link } from "react-router-dom";
import PageHero from "../../components/shared/PageHero";

const personalTypes = [
  {
    id: "young-adult",
    label: "Young Adult",
    icon: "🧑",
    description:
      "Starting out? Build a safety net early with affordable personal cover.",
    highlights: ["Personal Accident", "Medical Cover", "Life Insurance"],
    color: "bg-violet-100",
    border: "hover:border-violet-300",
    accent: "text-violet-700 bg-violet-50",
  },
  {
    id: "family",
    label: "Family",
    icon: "👨‍👩‍👧‍👦",
    description:
      "Protect the people who matter most with comprehensive family coverage.",
    highlights: [
      "Family Medical",
      "Education Cover",
      "Life & Income Protection",
    ],
    color: "bg-blue-100",
    border: "hover:border-blue-300",
    accent: "text-blue-700 bg-blue-50",
    popular: true,
  },
  {
    id: "senior",
    label: "Senior",
    icon: "👴",
    description:
      "Tailored plans for a secure, dignified retirement and healthcare journey.",
    highlights: ["Senior Medical", "Critical Illness", "Pension Top-up"],
    color: "bg-emerald-100",
    border: "hover:border-emerald-300",
    accent: "text-emerald-700 bg-emerald-50",
  },
  {
    id: "wealth-owner",
    label: "Wealth Owner",
    icon: "💼",
    description:
      "Protect your assets, estate, and legacy with premium wealth solutions.",
    highlights: [
      "Asset Protection",
      "Estate Planning Cover",
      "Key Person Insurance",
    ],
    color: "bg-amber-100",
    border: "hover:border-amber-300",
    accent: "text-amber-700 bg-amber-50",
  },
];

const medicalCategories = [
  { label: "Juniors Cover", icon: "👶", href: "/personal/medical" },
  { label: "Seniors Cover", icon: "🏥", href: "/personal/medical" },
  { label: "Family Cover", icon: "💊", href: "/personal/medical" },
  { label: "Micro Covers", icon: "🩺", href: "/personal/medical" },
  { label: "Outpatient Only", icon: "📋", href: "/personal/medical" },
];

const Personal = () => {
  return (
    <div>
      <PageHero
        title="Personal Insurance"
        subtitle="Who are you? Choose your profile and we'll match you with the right cover for your life stage and goals."
        breadcrumbs={[{ label: "Personal" }]}
        badge="Personal Insurance"
        gradient="from-[#1B0A3F] via-[#2D1060] to-[#4A1FA8]"
      />

      {/* Type Selector */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Choose Your Profile
            </h2>
            <p className="text-slate-500 mt-2">
              Select what best describes you to find the most relevant cover
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalTypes.map((type) => (
              <Link
                key={type.id}
                to={`/personal/${type.id}`}
                className={`group relative bg-white rounded-2xl border-2 border-slate-200 ${type.border} p-6 hover:shadow-xl transition-all duration-300 flex flex-col`}
              >
                {type.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1B4FD8] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                  </span>
                )}
                <div
                  className={`w-14 h-14 rounded-2xl ${type.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}
                >
                  {type.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  {type.label}
                </h3>
                <p className="text-slate-500 text-sm mb-4 flex-1">
                  {type.description}
                </p>
                <ul className="space-y-1.5 mb-5">
                  {type.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-xs text-slate-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <span
                  className={`w-full text-center py-2.5 rounded-xl text-sm font-semibold ${type.accent} transition-all group-hover:shadow-md`}
                >
                  View Plans →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Quick Access */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">💊</span>
                <h2 className="text-2xl font-bold text-slate-900">
                  Medical Insurance
                </h2>
                <span className="bg-red-100 text-red-600 text-xs font-bold px-2.5 py-1 rounded-full">
                  Quick Access
                </span>
              </div>
              <p className="text-slate-500">
                Fast access to all medical cover options
              </p>
            </div>
            <Link
              to="/personal/medical"
              className="hidden sm:flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm"
            >
              View All Medical Plans
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {medicalCategories.map((cat) => (
              <Link
                key={cat.label}
                to={cat.href}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-red-200 hover:shadow-lg p-5 flex flex-col items-center gap-3 text-center transition-all duration-200"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform">
                  {cat.icon}
                </span>
                <span className="text-sm font-semibold text-slate-700 group-hover:text-red-600 transition-colors">
                  {cat.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm mb-2 uppercase tracking-wider font-medium">
            Not sure where to start?
          </p>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Talk to a personal insurance advisor
          </h3>
          <p className="text-slate-500 mb-8">
            We'll help you find the right coverage based on your lifestyle,
            budget, and goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/appointment"
              className="px-6 py-3 bg-[#1B4FD8] text-white font-semibold rounded-xl hover:bg-[#1740B8] transition-colors shadow-lg shadow-blue-500/20"
            >
              Book a Free Consultation
            </Link>
            <Link
              to="/quote"
              className="px-6 py-3 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-blue-300 hover:text-blue-700 transition-colors"
            >
              Get a Quick Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Personal;
