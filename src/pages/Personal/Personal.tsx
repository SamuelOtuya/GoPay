import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

interface Cover {
  id: string;
  name: string;
  tab: string;
  badge: string;
  icon: string;
  price: string;
  description: string;
  path: string;
  popular?: boolean;
}

const covers: Cover[] = [
  {
    id: "personal-accident",
    name: "Personal Accident",
    tab: "Young Adult",
    badge: "Young Adult",
    icon: "🛡️",
    price: "KES 3,000 – 12,000/yr",
    description:
      "Covers accidental death, permanent disability, and medical expenses arising from accidents.",
    path: "/personal/young-adult",
    popular: true,
  },
  {
    id: "individual-medical",
    name: "Individual Medical",
    tab: "Young Adult",
    badge: "Young Adult",
    icon: "🏥",
    price: "KES 8,000 – 30,000/yr",
    description:
      "Inpatient and outpatient health cover with pharmacy, dental and optical riders.",
    path: "/personal/young-adult",
  },
  {
    id: "term-life",
    name: "Term Life Insurance",
    tab: "Young Adult",
    badge: "Young Adult",
    icon: "💙",
    price: "KES 6,000 – 20,000/yr",
    description:
      "Affordable income protection — a lump-sum paid to your dependants if you pass away.",
    path: "/personal/young-adult",
  },
  {
    id: "travel-insurance",
    name: "Travel Insurance",
    tab: "Young Adult",
    badge: "Young Adult",
    icon: "✈️",
    price: "KES 3,000 – 15,000/trip",
    description:
      "Worldwide protection covering medical emergencies, trip cancellation and lost luggage.",
    path: "/personal/young-adult",
  },
  {
    id: "family-medical",
    name: "Family Medical Cover",
    tab: "Family",
    badge: "Family",
    icon: "💊",
    price: "KES 22,000 – 85,000/yr",
    description:
      "All family members under one policy — inpatient, outpatient and maternity included.",
    path: "/personal/family",
    popular: true,
  },
  {
    id: "education-cover",
    name: "Education Protector",
    tab: "Family",
    badge: "Family",
    icon: "🎓",
    price: "KES 8,000 – 25,000/yr",
    description:
      "Guarantees school fees are paid even if you die or become permanently disabled.",
    path: "/personal/family",
  },
  {
    id: "family-life",
    name: "Family Life Insurance",
    tab: "Family",
    badge: "Family",
    icon: "❤️",
    price: "KES 10,000 – 35,000/yr",
    description:
      "Death benefit, critical illness and disability income replacement for the whole family.",
    path: "/personal/family",
  },
  {
    id: "home-insurance",
    name: "Home Insurance",
    tab: "Family",
    badge: "Family",
    icon: "🏠",
    price: "KES 10,000 – 50,000/yr",
    description:
      "Building structure, contents and domestic liability cover for your home.",
    path: "/personal/family",
  },
  {
    id: "senior-medical",
    name: "Senior Medical Cover",
    tab: "Senior",
    badge: "Senior",
    icon: "🧓",
    price: "KES 18,000 – 58,000/yr",
    description:
      "Specialist health plans for ages 55+ including chronic illness and physiotherapy.",
    path: "/personal/senior",
    popular: true,
  },
  {
    id: "critical-illness",
    name: "Critical Illness Cover",
    tab: "Senior",
    badge: "Senior",
    icon: "💉",
    price: "KES 12,000 – 40,000/yr",
    description:
      "Lump-sum payout on diagnosis of cancer, stroke or heart attack.",
    path: "/personal/senior",
  },
  {
    id: "funeral-cover",
    name: "Funeral Cover",
    tab: "Senior",
    badge: "Senior",
    icon: "🕊️",
    price: "KES 3,600 – 9,600/yr",
    description:
      "Fast 24–48 hour payout. Covers extended family. No medical exam required.",
    path: "/personal/senior",
  },
  {
    id: "pension-topup",
    name: "Pension Top-Up",
    tab: "Senior",
    badge: "Senior",
    icon: "💰",
    price: "Custom pricing",
    description:
      "Supplement your retirement income with a structured, tax-efficient top-up plan.",
    path: "/personal/senior",
  },
  {
    id: "asset-protection",
    name: "Asset Protection Plan",
    tab: "Wealth Owner",
    badge: "Wealth",
    icon: "🏦",
    price: "Custom pricing",
    description:
      "Property, investments, valuables and vehicle fleet cover for high-net-worth individuals.",
    path: "/personal/wealth-owner",
    popular: true,
  },
  {
    id: "key-person",
    name: "Key Person Insurance",
    tab: "Wealth Owner",
    badge: "Wealth",
    icon: "🔑",
    price: "Custom pricing",
    description:
      "Business continuity cover if a founder, director or key staff member dies or is disabled.",
    path: "/personal/wealth-owner",
  },
  {
    id: "whole-life",
    name: "Whole of Life Insurance",
    tab: "Wealth Owner",
    badge: "Wealth",
    icon: "♾️",
    price: "Custom pricing",
    description:
      "Permanent life cover with cash value accumulation — a powerful estate planning tool.",
    path: "/personal/wealth-owner",
  },
  {
    id: "directors-liability",
    name: "Directors & Officers Liability",
    tab: "Wealth Owner",
    badge: "Wealth",
    icon: "⚖️",
    price: "Custom pricing",
    description:
      "Personal asset protection for executives against claims from management decisions.",
    path: "/personal/wealth-owner",
  },
  {
    id: "juniors-cover",
    name: "Juniors Cover",
    tab: "Medical",
    badge: "Medical",
    icon: "👶",
    price: "From KES 3,500/yr",
    description:
      "Comprehensive health cover for children aged 0–18 including immunizations and check-ups.",
    path: "/personal/medical",
    popular: true,
  },
  {
    id: "seniors-medical",
    name: "Seniors Medical Cover",
    tab: "Medical",
    badge: "Medical",
    icon: "🏥",
    price: "From KES 18,000/yr",
    description:
      "Specialist medical plans for those aged 55+ with chronic disease management included.",
    path: "/personal/medical",
  },
  {
    id: "family-medical-plan",
    name: "Family Medical Plan",
    tab: "Medical",
    badge: "Medical",
    icon: "👨‍👩‍👧",
    price: "From KES 22,000/yr",
    description:
      "One policy for the whole household including maternity cover up to KES 150,000.",
    path: "/personal/medical",
  },
  {
    id: "micro-cover",
    name: "Micro Medical Cover",
    tab: "Medical",
    badge: "Medical",
    icon: "🩺",
    price: "From KES 6,000/yr",
    description:
      "Affordable entry-level inpatient cover for individuals and low-income earners.",
    path: "/personal/medical",
  },
  {
    id: "outpatient-only",
    name: "Outpatient Only",
    tab: "Medical",
    badge: "Medical",
    icon: "📋",
    price: "From KES 4,500/yr",
    description:
      "Consultations, pharmacy and diagnostics — ideal if you already have inpatient cover.",
    path: "/personal/medical",
  },
];

const tabs = [
  "Young Adult",
  "Family",
  "Senior",
  "Wealth Owner",
  "Medical",
] as const;
const badgeColors: Record<string, string> = {
  "Young Adult": "bg-violet-50 text-violet-600",
  Family: "bg-blue-50 text-blue-600",
  Senior: "bg-emerald-50 text-emerald-600",
  Wealth: "bg-amber-50 text-amber-700",
  Medical: "bg-red-50 text-red-600",
};

const CoverCard = ({
  cover,
  highlight,
}: {
  cover: Cover;
  highlight: string;
}) => {
  const hl = (text: string) => {
    if (!highlight) return <>{text}</>;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <>
        {parts.map((p, i) =>
          p.toLowerCase() === highlight.toLowerCase() ? (
            <mark
              key={i}
              className="bg-yellow-200 text-yellow-900 rounded px-0.5"
            >
              {p}
            </mark>
          ) : (
            p
          ),
        )}
      </>
    );
  };
  return (
    <div
      className={`group relative bg-white rounded-2xl border-2 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden ${cover.popular ? "border-[#1B3A6B] shadow-lg shadow-blue-50" : "border-slate-200 hover:border-slate-300"}`}
    >
      {cover.popular && (
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-[#1B3A6B] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
            Popular
          </span>
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
            {cover.icon}
          </div>
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColors[cover.badge] || "bg-slate-100 text-slate-600"}`}
          >
            {cover.badge}
          </span>
        </div>
        <h3 className="font-bold text-slate-900 text-base mb-1 leading-snug">
          {hl(cover.name)}
        </h3>
        <p className="text-[#1B3A6B] font-semibold text-sm mb-3">
          {cover.price}
        </p>
        <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">
          {hl(cover.description)}
        </p>
        <div className="flex gap-2 mt-auto">
          <Link
            to={cover.path}
            className="flex-1 text-center px-4 py-2.5 rounded-xl border-2 border-slate-200 text-slate-700 text-sm font-semibold hover:border-slate-900 hover:text-slate-900 transition-all duration-200"
          >
            Learn More
          </Link>
          <Link
            to="/quote"
            className="flex-1 text-center px-4 py-2.5 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-white text-sm font-semibold shadow-md transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

const Personal = () => {
  const [activeTab, setActiveTab] =
    useState<(typeof tabs)[number]>("Young Adult");
  const [search, setSearch] = useState("");
  const allSearchResults = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase();
    return covers.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q),
    );
  }, [search]);
  const filtered = useMemo(
    () =>
      search.trim()
        ? allSearchResults
        : covers.filter((c) => c.tab === activeTab),
    [activeTab, search, allSearchResults],
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#0F2240] pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link to="/" className="hover:text-white/80 transition-colors">
              Home
            </Link>
            <svg
              className="w-3.5 h-3.5"
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
            <span className="text-white/80 font-medium">
              Personal Insurance
            </span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-xl">👤</span>
            <span className="text-blue-100 text-xs font-medium tracking-wide uppercase">
              Personal Insurance
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight">
            Personal Insurance
          </h1>
          <p className="text-white/70 text-lg mb-8 max-w-2xl">
            Cover for every stage of your life — from your first job to your
            retirement years. {covers.length} plans available.
          </p>
          <div className="relative max-w-2xl">
            <svg
              className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search personal covers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pr-5 py-4 rounded-2xl bg-white text-slate-800 placeholder:text-slate-400 text-sm font-medium shadow-2xl shadow-black/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{ paddingLeft: "3.25rem" }}
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="bg-violet-50 border-b border-violet-100 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0 text-xl">
            🤖
          </div>
          <div className="flex-1">
            <p className="font-semibold text-slate-900 text-sm">
              Not sure which plan fits you?
            </p>
            <p className="text-slate-500 text-sm">
              Answer 4 quick questions and GoBot will recommend the right cover.
            </p>
          </div>
          <Link
            to="/quote"
            className="flex-shrink-0 px-4 py-2 bg-[#1B3A6B] hover:bg-[#0F2240] text-white text-sm font-semibold rounded-xl transition-colors"
          >
            Get Guided →
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {!search.trim() && (
          <div className="bg-slate-100 rounded-2xl p-1.5 flex gap-1 mb-8 overflow-x-auto">
            {tabs.map((tab) => {
              const count = covers.filter((c) => c.tab === tab).length;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 min-w-max flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap ${activeTab === tab ? "bg-white text-slate-900 shadow-md" : "text-slate-500 hover:text-slate-700"}`}
                >
                  {tab}
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-bold ${activeTab === tab ? "bg-[#1B3A6B] text-white" : "bg-slate-200 text-slate-500"}`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}
        {search.trim() && (
          <div className="flex items-center justify-between mb-6">
            <p className="text-slate-600 text-sm">
              <span className="font-semibold text-slate-900">
                {allSearchResults.length} results
              </span>{" "}
              for "{search}"
            </p>
            <button
              onClick={() => setSearch("")}
              className="text-sm text-blue-600 hover:text-blue-800 font-semibold"
            >
              Clear search
            </button>
          </div>
        )}
        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((cover) => (
              <CoverCard key={cover.id} cover={cover} highlight={search} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🔍</p>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              No covers found
            </h3>
            <button
              onClick={() => setSearch("")}
              className="mt-4 px-5 py-2.5 bg-[#0F2240] text-white font-semibold rounded-xl"
            >
              Clear Search
            </button>
          </div>
        )}
        <div className="mt-16 bg-gradient-to-r from-[#0F2240] to-[#1B3A6B] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-xl mb-1">
              Need help choosing the right cover?
            </h3>
            <p className="text-white/70 text-sm">
              Our personal insurance advisors are available Mon–Fri, 8am–6pm.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              to="/appointment"
              className="px-5 py-3 bg-white text-[#0F2240] font-semibold rounded-xl hover:bg-slate-100 transition-colors text-sm"
            >
              Book Consultation
            </Link>
            <Link
              to="/quote"
              className="px-5 py-3 bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold rounded-xl transition-colors text-sm shadow-lg"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
