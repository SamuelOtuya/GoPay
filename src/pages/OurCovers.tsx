import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Cover {
  id: string;
  name: string;
  category:
    | "Personal Insurance"
    | "Business Insurance"
    | "Employee Benefits"
    | "Specialty Insurance";
  badge: string;
  icon: string;
  price: string;
  description: string;
  path: string;
  popular?: boolean;
}

// ─── All Covers Data ──────────────────────────────────────────────────────────

const covers: Cover[] = [
  // ── Personal Insurance ───────────────────────────────────────────────────
  {
    id: "home-insurance",
    name: "Home Insurance",
    category: "Personal Insurance",
    badge: "Personal",
    icon: "🏠",
    price: "KES 10,000 – 50,000/yr",
    description:
      "Comprehensive coverage for your residence, ensuring your building, contents, and domestic liability are fully protected.",
    path: "/personal/home",
  },
  {
    id: "car-insurance",
    name: "Car Insurance",
    category: "Personal Insurance",
    badge: "Personal",
    icon: "🚗",
    price: "KES 15,000 – 150,000/yr",
    description:
      "Reliable motor insurance providing comprehensive and third-party protection against accidents and theft.",
    path: "/personal/young-adult",
    popular: true,
  },
  {
    id: "travel-insurance",
    name: "Travel Insurance",
    category: "Personal Insurance",
    badge: "Personal",
    icon: "✈️",
    price: "KES 3,000 – 15,000/trip",
    description:
      "Worldwide travel protection ensuring peace of mind during international or domestic trips.",
    path: "/personal/travel",
  },
  {
    id: "personal-medical",
    name: "Medical Insurance",
    category: "Personal Insurance",
    badge: "Personal",
    icon: "💊",
    price: "KES 4,500 – 85,000/yr",
    description:
      "Inpatient and outpatient health cover from Juniors to Seniors, with dental, optical and maternity riders.",
    path: "/personal/medical",
    popular: true,
  },
  {
    id: "personal-accident",
    name: "Personal Accident",
    category: "Personal Insurance",
    badge: "Personal",
    icon: "🛡️",
    price: "KES 3,000 – 12,000/yr",
    description:
      "Covers accidental death, permanent disability, and medical expenses arising from accidents.",
    path: "/personal/young-adult",
  },
  {
    id: "life-insurance",
    name: "Life Insurance",
    category: "Personal Insurance",
    badge: "Personal",
    icon: "❤️",
    price: "KES 6,000 – 30,000/yr",
    description:
      "Term and whole-of-life policies that protect your family's financial future in the event of death or critical illness.",
    path: "/personal/family",
  },
  {
    id: "education-cover",
    name: "Education Protector",
    category: "Personal Insurance",
    badge: "Personal",
    icon: "🎓",
    price: "KES 8,000 – 25,000/yr",
    description:
      "Guarantees school fees are paid even if you die or become permanently disabled.",
    path: "/personal/family",
  },
  {
    id: "funeral-cover",
    name: "Funeral Cover",
    category: "Personal Insurance",
    badge: "Personal",
    icon: "🕊️",
    price: "KES 3,600 – 9,600/yr",
    description:
      "Fast 24–48 hour payout to cover funeral expenses for you and your extended family. No medical exam required.",
    path: "/personal/senior",
  },
  {
    id: "critical-illness",
    name: "Critical Illness Cover",
    category: "Personal Insurance",
    badge: "Personal",
    icon: "💉",
    price: "KES 12,000 – 40,000/yr",
    description:
      "Lump-sum payout on diagnosis of cancer, stroke, heart attack or other specified critical conditions.",
    path: "/personal/senior",
  },

  // ── Business Insurance ───────────────────────────────────────────────────
  {
    id: "fire-insurance",
    name: "Fire Insurance",
    category: "Business Insurance",
    badge: "Business",
    icon: "🔥",
    price: "KES 8,000 – 80,000/yr",
    description:
      "Protects your business buildings, stock and equipment against fire, lightning and explosion.",
    path: "/business/assets",
    popular: true,
  },
  {
    id: "burglary-insurance",
    name: "Burglary Insurance",
    category: "Business Insurance",
    badge: "Business",
    icon: "🔐",
    price: "KES 5,000 – 35,000/yr",
    description:
      "Covers theft, forced entry and malicious damage to your business premises and contents.",
    path: "/business/assets",
  },
  {
    id: "business-interruption",
    name: "Business Interruption",
    category: "Business Insurance",
    badge: "Business",
    icon: "⏸️",
    price: "KES 10,000 – 60,000/yr",
    description:
      "Replaces lost revenue and covers ongoing expenses when your business is forced to close due to an insured event.",
    path: "/business/money",
  },
  {
    id: "public-liability",
    name: "Public Liability",
    category: "Business Insurance",
    badge: "Business",
    icon: "⚖️",
    price: "KES 6,000 – 40,000/yr",
    description:
      "Protects your business from claims by third parties for injury or property damage on your premises.",
    path: "/business/liability",
  },
  {
    id: "professional-indemnity",
    name: "Professional Indemnity",
    category: "Business Insurance",
    badge: "Business",
    icon: "📜",
    price: "KES 15,000 – 90,000/yr",
    description:
      "Covers legal costs and compensation if a client claims your professional advice caused them financial loss.",
    path: "/business/liability",
  },
  {
    id: "cyber-insurance",
    name: "Cyber Insurance",
    category: "Business Insurance",
    badge: "Business",
    icon: "💻",
    price: "KES 20,000 – 120,000/yr",
    description:
      "Protects your business from data breaches, ransomware, hacking and business email compromise.",
    path: "/business/cyber",
    popular: true,
  },
  {
    id: "motor-fleet",
    name: "Motor Fleet Insurance",
    category: "Business Insurance",
    badge: "Business",
    icon: "🚛",
    price: "Custom pricing",
    description:
      "Single policy covering all your business vehicles — cheaper per vehicle and simpler to manage.",
    path: "/business/transport",
  },
  {
    id: "sme-package",
    name: "SME Package",
    category: "Business Insurance",
    badge: "Business",
    icon: "📦",
    price: "KES 18,000 – 60,000/yr",
    description:
      "All-in-one bundle: fire, burglary, public liability and WIBA — ideal for businesses with 1–50 staff.",
    path: "/product/sme-package",
    popular: true,
  },
  {
    id: "goods-in-transit",
    name: "Goods in Transit",
    category: "Business Insurance",
    badge: "Business",
    icon: "📦",
    price: "KES 5,000 – 30,000/yr",
    description:
      "Covers goods, stock and cargo while being transported by road, rail or air within Kenya.",
    path: "/business/transport",
  },

  // ── Employee Benefits ─────────────────────────────────────────────────────
  {
    id: "group-medical",
    name: "Group Medical Cover",
    category: "Employee Benefits",
    badge: "Employees",
    icon: "🏥",
    price: "From KES 8,000/employee/yr",
    description:
      "Comprehensive inpatient and outpatient health cover for your entire workforce under one policy.",
    path: "/business/employees",
    popular: true,
  },
  {
    id: "wiba",
    name: "Work Injury Benefits (WIBA)",
    category: "Employee Benefits",
    badge: "Employees",
    icon: "👷",
    price: "From KES 1,200/employee/yr",
    description:
      "Legally required cover for all Kenyan employers. Protects employees injured on the job or in work-related accidents.",
    path: "/business/employees",
    popular: true,
  },
  {
    id: "group-life",
    name: "Group Life Insurance",
    category: "Employee Benefits",
    badge: "Employees",
    icon: "🤝",
    price: "From KES 1,500/employee/yr",
    description:
      "Provides a death benefit to the families of employees who die while in your service.",
    path: "/business/employees",
  },
  {
    id: "group-personal-accident",
    name: "Group Personal Accident",
    category: "Employee Benefits",
    badge: "Employees",
    icon: "🦺",
    price: "From KES 900/employee/yr",
    description:
      "Covers all employees for accidental death, permanent disability and medical expenses from accidents.",
    path: "/business/employees",
  },
  {
    id: "pension-scheme",
    name: "Occupational Pension Scheme",
    category: "Employee Benefits",
    badge: "Employees",
    icon: "💰",
    price: "Custom pricing",
    description:
      "Help your employees save for retirement with a structured, tax-efficient occupational pension scheme.",
    path: "/personal/wealth-owner",
  },

  // ── Specialty Insurance ───────────────────────────────────────────────────
  {
    id: "marine-cargo",
    name: "Marine Cargo",
    category: "Specialty Insurance",
    badge: "Specialty",
    icon: "🚢",
    price: "Custom pricing",
    description:
      "Protects goods being imported or exported via sea, air or road from loss, damage or theft in transit.",
    path: "/industry/transport",
  },
  {
    id: "contractors-all-risk",
    name: "Contractors All Risk",
    category: "Specialty Insurance",
    badge: "Specialty",
    icon: "🏗️",
    price: "Custom pricing",
    description:
      "Covers works under construction, plant and machinery, and third-party liability on construction sites.",
    path: "/industry/construction",
  },
  {
    id: "medical-malpractice",
    name: "Medical Malpractice",
    category: "Specialty Insurance",
    badge: "Specialty",
    icon: "🩺",
    price: "Custom pricing",
    description:
      "Protects healthcare professionals and facilities against claims arising from clinical errors and negligence.",
    path: "/industry/healthcare",
  },
  {
    id: "directors-officers",
    name: "Directors & Officers",
    category: "Specialty Insurance",
    badge: "Specialty",
    icon: "👔",
    price: "Custom pricing",
    description:
      "Protects company directors and officers from personal liability arising from management decisions.",
    path: "/business/liability",
  },
  {
    id: "cash-in-transit",
    name: "Cash in Transit",
    category: "Specialty Insurance",
    badge: "Specialty",
    icon: "💵",
    price: "Custom pricing",
    description:
      "Covers physical loss of money while in transit between your business premises and financial institutions.",
    path: "/business/money",
  },
  {
    id: "trade-credit",
    name: "Trade Credit Insurance",
    category: "Specialty Insurance",
    badge: "Specialty",
    icon: "📈",
    price: "Custom pricing",
    description:
      "Protects your business against losses from customers who fail to pay their invoices due to insolvency or default.",
    path: "/business/money",
  },
];

// ─── Tab Config ───────────────────────────────────────────────────────────────

const tabs = [
  "Personal Insurance",
  "Business Insurance",
  "Employee Benefits",
  "Specialty Insurance",
] as const;

const badgeColors: Record<string, string> = {
  Personal: "bg-red-50 text-red-600",
  Business: "bg-blue-50 text-blue-600",
  Employees: "bg-emerald-50 text-emerald-600",
  Specialty: "bg-purple-50 text-purple-600",
};

// ─── Card Component ───────────────────────────────────────────────────────────

const CoverCard = ({
  cover,
  highlight,
}: {
  cover: Cover;
  highlight: string;
}) => {
  const navigate = useNavigate();

  // Highlight matching text
  const highlightText = (text: string) => {
    if (!highlight) return <>{text}</>;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <mark
              key={i}
              className="bg-yellow-200 text-yellow-900 rounded px-0.5"
            >
              {part}
            </mark>
          ) : (
            part
          ),
        )}
      </>
    );
  };

  return (
    <div
      className={`group relative bg-white rounded-2xl border-2 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden ${
        cover.popular
          ? "border-red-300 shadow-lg shadow-red-50"
          : "border-slate-200 hover:border-slate-300"
      }`}
    >
      {/* Popular badge */}
      {cover.popular && (
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
            Popular
          </span>
        </div>
      )}

      <div className="p-5 flex flex-col flex-1">
        {/* Icon + category badge */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
            {cover.icon}
          </div>
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColors[cover.badge] || "bg-slate-100 text-slate-600"}`}
          >
            {cover.badge}
          </span>
        </div>

        {/* Name */}
        <h3 className="font-bold text-slate-900 text-base mb-1 leading-snug">
          {highlightText(cover.name)}
        </h3>

        {/* Price */}
        <p className="text-red-500 font-semibold text-sm mb-3">{cover.price}</p>

        {/* Description */}
        <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">
          {highlightText(cover.description)}
        </p>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto">
          <Link
            to={cover.path}
            className="flex-1 text-center px-4 py-2.5 rounded-xl border-2 border-slate-200 text-slate-700 text-sm font-semibold hover:border-slate-900 hover:text-slate-900 transition-all duration-200"
          >
            Learn More
          </Link>
          <Link
            to="/quote"
            className="flex-1 text-center px-4 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm font-semibold shadow-md shadow-red-100 hover:shadow-red-200 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────

const OurCovers = () => {
  const [activeTab, setActiveTab] =
    useState<(typeof tabs)[number]>("Personal Insurance");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const byTab = covers.filter((c) => c.category === activeTab);
    if (!search.trim()) return byTab;
    const q = search.toLowerCase();
    return byTab.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.badge.toLowerCase().includes(q),
    );
  }, [activeTab, search]);

  // Global search across all tabs
  const allSearchResults = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase();
    return covers.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q),
    );
  }, [search]);

  const displayResults = search.trim() ? allSearchResults : filtered;
  const totalCount = covers.length;

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero Header ── */}
      <div className="bg-[#0F2240] pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle bg pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="max-w-4xl mx-auto relative">
          {/* Breadcrumb */}
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
            <span className="text-white/80 font-medium">Our Covers</span>
          </nav>

          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight">
            Our Covers
          </h1>
          <p className="text-white/70 text-lg mb-8 max-w-2xl">
            Explore our comprehensive range of {totalCount} insurance products
            tailored for individuals, businesses, and specialized needs.
          </p>

          {/* Search bar */}
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
              placeholder="Search for a cover by name or description..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-13 pr-5 py-4 rounded-2xl bg-white text-slate-800 placeholder:text-slate-400 text-sm font-medium shadow-2xl shadow-black/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{ paddingLeft: "3.25rem" }}
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
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

      {/* ── Smart Cover Selector Banner ── */}
      <div className="bg-red-50 border-b border-red-100 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0 text-xl">
            🤖
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-slate-900 text-sm">
              Not sure what you need?
            </p>
            <p className="text-slate-500 text-sm">
              Use our AI-powered GoBot to find your ideal coverage instantly.
            </p>
          </div>
          <Link
            to="/quote"
            className="flex-shrink-0 px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-xl transition-colors shadow-md shadow-red-100"
          >
            Get Guided →
          </Link>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Tabs — hidden during search */}
        {!search.trim() && (
          <div className="bg-slate-100 rounded-2xl p-1.5 flex gap-1 mb-8 overflow-x-auto">
            {tabs.map((tab) => {
              const count = covers.filter((c) => c.category === tab).length;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 min-w-max flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                    activeTab === tab
                      ? "bg-white text-slate-900 shadow-md shadow-slate-200/80"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {tab}
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                      activeTab === tab
                        ? "bg-red-100 text-red-600"
                        : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Search results header */}
        {search.trim() && (
          <div className="flex items-center justify-between mb-6">
            <p className="text-slate-600 text-sm">
              <span className="font-semibold text-slate-900">
                {allSearchResults.length} results
              </span>{" "}
              for "{search}"
              {allSearchResults.length === 0 && " — try a different keyword"}
            </p>
            <button
              onClick={() => setSearch("")}
              className="text-sm text-blue-600 hover:text-blue-800 font-semibold transition-colors"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Cards Grid */}
        {displayResults.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayResults.map((cover) => (
              <CoverCard key={cover.id} cover={cover} highlight={search} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🔍</p>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              No covers found
            </h3>
            <p className="text-slate-500 mb-6">
              Try searching for something else, like "medical" or "fire".
            </p>
            <button
              onClick={() => setSearch("")}
              className="px-5 py-2.5 bg-[#0F2240] text-white font-semibold rounded-xl hover:bg-[#1B3A6B] transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* CTA strip */}
        <div className="mt-16 bg-gradient-to-r from-[#0F2240] to-[#1B3A6B] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-xl mb-1">
              Can't find what you're looking for?
            </h3>
            <p className="text-white/70 text-sm">
              Talk to an advisor — we have access to 15+ insurer partners and
              can source almost any cover.
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
              className="px-5 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-colors text-sm shadow-lg"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCovers;
