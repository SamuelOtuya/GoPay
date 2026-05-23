import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/personal-cover.jpg";

interface Cover {
  id: string;
  name: string;
  category:
    | "Personal Insurance"
    | "Business Insurance"
    | "Employee Benefits"
    | "Savings & Investments";
  badge: string;
  icon: string;
  description: string;
  path: string;
  popular?: boolean;
}

const covers: Cover[] = [
  {
    id: "home-insurance",
    name: "Home Insurance",
    category: "Personal Insurance",
    badge: "Personal",
    icon: "🏠",
    description:
      "Protects your residence, household contents, and domestic liability against covered risks.",
    path: "/personal/home",
    popular: true,
  },
  {
    id: "travel-insurance",
    name: "Travel Insurance",
    category: "Personal Insurance",
    badge: "Personal",
    icon: "✈️",
    description:
      "Worldwide travel protection for medical emergencies, trip disruption, baggage loss, and other travel risks.",
    path: "/covers/travel-insurance",
    popular: true,
  },
  {
    id: "car-insurance",
    name: "Car Insurance",
    category: "Personal Insurance",
    badge: "Personal",
    icon: "🚗",
    description:
      "Comprehensive and third-party motor cover for private vehicles against accidents, theft, and liability.",
    path: "/personal/young-adult",
    popular: true,
  },
  {
    id: "individual-life-pension",
    name: "Individual Life & Pension Insurance",
    category: "Personal Insurance",
    badge: "Personal",
    icon: "❤️",
    description:
      "Life protection and pension planning options designed to protect your family and build retirement security.",
    path: "/personal/family",
  },
  {
    id: "motorcycle-insurance",
    name: "Motorcycle Insurance",
    category: "Personal Insurance",
    badge: "Personal",
    icon: "🏍️",
    description:
      "Motorcycle cover for private riders, including liability protection and optional own-damage benefits.",
    path: "/quote",
  },
  {
    id: "personal-accident",
    name: "Personal Accident",
    category: "Personal Insurance",
    badge: "Personal",
    icon: "🛡️",
    description:
      "Covers accidental death, permanent disability, and medical expenses arising from accidental injury.",
    path: "/personal/young-adult",
  },
  {
    id: "students-personal-accident",
    name: "Students Personal Accident",
    category: "Personal Insurance",
    badge: "Personal",
    icon: "🎓",
    description:
      "Accident protection tailored for students while at school, during activities, or in transit.",
    path: "/quote",
  },
  {
    id: "funeral-expenses-insurance",
    name: "Funeral Expenses Insurance",
    category: "Personal Insurance",
    badge: "Personal",
    icon: "🕊️",
    description:
      "Provides quick support to help meet funeral and last-expense costs for covered members.",
    path: "/personal/senior",
  },
  {
    id: "individual-health-insurance",
    name: "Health Insurance - Individual",
    category: "Personal Insurance",
    badge: "Personal",
    icon: "💊",
    description:
      "Individual health cover with options for inpatient, outpatient, dental, optical, and maternity benefits.",
    path: "/personal/medical",
    popular: true,
  },
  {
    id: "pet-insurance",
    name: "Pet Insurance",
    category: "Personal Insurance",
    badge: "Personal",
    icon: "🐾",
    description:
      "Helps cover eligible veterinary costs and care expenses for your pets.",
    path: "/quote",
  },
  {
    id: "device-gadget-insurance",
    name: "Device & Gadget Insurance",
    category: "Personal Insurance",
    badge: "Personal",
    icon: "📱",
    description:
      "Protects phones, laptops, tablets, and other gadgets against accidental damage, theft, and related risks.",
    path: "/quote",
  },
  {
    id: "sme-business-cover",
    name: "SME Business Cover",
    category: "Business Insurance",
    badge: "Business",
    icon: "📦",
    description:
      "A bundled business cover for SMEs, combining essential protection for assets, liability, and employees.",
    path: "/product/sme-package",
    popular: true,
  },
  {
    id: "professional-indemnity",
    name: "Professional Indemnity",
    category: "Business Insurance",
    badge: "Business",
    icon: "📜",
    description:
      "Covers legal costs and compensation if a client claims your professional advice or service caused a loss.",
    path: "/business/liability",
    popular: true,
  },
  {
    id: "marine-cargo-insurance",
    name: "Marine & Cargo Insurance",
    category: "Business Insurance",
    badge: "Business",
    icon: "🚢",
    description:
      "Protects imported, exported, and locally transported cargo against loss or damage in transit.",
    path: "/industry/transport",
  },
  {
    id: "aviation-insurance",
    name: "Aviation Insurance",
    category: "Business Insurance",
    badge: "Business",
    icon: "🛩️",
    description:
      "Specialized cover for aviation-related risks, including aircraft, operators, and associated liabilities.",
    path: "/quote",
  },
  {
    id: "agriculture-insurance",
    name: "Agriculture Insurance",
    category: "Business Insurance",
    badge: "Business",
    icon: "🌾",
    description:
      "Risk protection for farms, agribusinesses, crops, livestock, equipment, and agricultural operations.",
    path: "/quote",
  },
  {
    id: "general-liability-insurance",
    name: "General Liability Insurance",
    category: "Business Insurance",
    badge: "Business",
    icon: "⚖️",
    description:
      "Protects businesses from third-party injury, property damage, and related liability claims.",
    path: "/business/liability",
  },
  {
    id: "company-car-insurance",
    name: "Company Car Insurance",
    category: "Business Insurance",
    badge: "Business",
    icon: "🚙",
    description:
      "Motor insurance for company-owned vehicles used in business operations.",
    path: "/business/transport",
  },
  {
    id: "commercial-property-insurance",
    name: "Commercial Property Insurance",
    category: "Business Insurance",
    badge: "Business",
    icon: "🏢",
    description:
      "Protects business premises, stock, equipment, and contents against covered property risks.",
    path: "/business/assets",
  },
  {
    id: "wiba",
    name: "Work Injury Benefits Act Insurance",
    category: "Business Insurance",
    badge: "Business",
    icon: "👷",
    description:
      "Mandatory employer cover for employees injured while working or during work-related duties.",
    path: "/business/employees",
    popular: true,
  },
  {
    id: "commercial-umbrella-insurance",
    name: "Commercial Umbrella Insurance",
    category: "Business Insurance",
    badge: "Business",
    icon: "☂️",
    description:
      "Adds an extra layer of liability protection above your primary business insurance policies.",
    path: "/quote",
  },
  {
    id: "machinery-breakdown-insurance",
    name: "Machinery Breakdown Insurance",
    category: "Business Insurance",
    badge: "Business",
    icon: "⚙️",
    description:
      "Covers sudden and unforeseen mechanical or electrical breakdown of insured machinery.",
    path: "/business/assets",
  },
  {
    id: "employers-liability",
    name: "Employers Liability",
    category: "Business Insurance",
    badge: "Business",
    icon: "🤝",
    description:
      "Protects employers against legal liability claims arising from employee injury or illness.",
    path: "/business/employees",
  },
  {
    id: "fidelity-guarantee",
    name: "Fidelity Guarantee",
    category: "Business Insurance",
    badge: "Business",
    icon: "🔐",
    description:
      "Covers financial loss caused by employee dishonesty, fraud, theft, or embezzlement.",
    path: "/business/money",
  },
  {
    id: "nssf-tier-2-private-pension",
    name: "NSSF Tier 2 to Private Pension Fund",
    category: "Business Insurance",
    badge: "Business",
    icon: "💰",
    description:
      "Helps employers transition NSSF Tier 2 contributions into an approved private pension fund.",
    path: "/personal/wealth-owner",
  },
  {
    id: "group-medical-insurance",
    name: "Group Medical Insurance",
    category: "Employee Benefits",
    badge: "Employees",
    icon: "🏥",
    description:
      "Comprehensive inpatient and outpatient health cover for employees under one group policy.",
    path: "/business/employees",
    popular: true,
  },
  {
    id: "group-life-insurance",
    name: "Group Life Insurance",
    category: "Employee Benefits",
    badge: "Employees",
    icon: "🤝",
    description:
      "Provides a death benefit to employees' beneficiaries if a covered employee dies while in service.",
    path: "/business/employees",
  },
  {
    id: "group-personal-accident-insurance",
    name: "Group Personal Accident Insurance",
    category: "Employee Benefits",
    badge: "Employees",
    icon: "🦺",
    description:
      "Accident protection for employees, including accidental death, disability, and medical expenses.",
    path: "/business/employees",
  },
  {
    id: "group-last-expense-funeral-cover",
    name: "Group Last Expense / Funeral Cover",
    category: "Employee Benefits",
    badge: "Employees",
    icon: "🕊️",
    description:
      "Group funeral benefit that supports employees' families with last-expense costs.",
    path: "/business/employees",
  },
  {
    id: "group-critical-illness-cover",
    name: "Group Critical Illness Cover",
    category: "Employee Benefits",
    badge: "Employees",
    icon: "💉",
    description:
      "Provides a lump-sum benefit when a covered employee is diagnosed with specified critical illnesses.",
    path: "/business/employees",
  },
  {
    id: "corporate-travel-insurance",
    name: "Corporate Travel Insurance",
    category: "Employee Benefits",
    badge: "Employees",
    icon: "✈️",
    description:
      "Travel insurance for employees and executives travelling for business locally or internationally.",
    path: "/covers/travel-insurance",
  },
  {
    id: "life-insurance-investment-plans",
    name: "Life Insurance & Investment Plans",
    category: "Savings & Investments",
    badge: "Savings",
    icon: "❤️",
    description:
      "Plans that combine life protection with long-term investment growth.",
    path: "/personal/family",
    popular: true,
  },
  {
    id: "guaranteed-savings-plans",
    name: "Guaranteed Savings Plans",
    category: "Savings & Investments",
    badge: "Savings",
    icon: "🏦",
    description:
      "Structured savings plans designed to build funds steadily with predictable benefits.",
    path: "/personal/wealth-owner",
  },
  {
    id: "school-fees-insurance-plans",
    name: "School Fees Insurance Plans",
    category: "Savings & Investments",
    badge: "Savings",
    icon: "🎓",
    description:
      "Education-focused plans that help secure future school fees and protect learning continuity.",
    path: "/personal/family",
  },
  {
    id: "lump-sum-investment-plans",
    name: "Lump Sum Investment Plans",
    category: "Savings & Investments",
    badge: "Savings",
    icon: "💼",
    description:
      "Investment options for clients looking to place a single lump-sum amount toward future goals.",
    path: "/personal/wealth-owner",
  },
  {
    id: "money-market-funds",
    name: "Money Market Funds",
    category: "Savings & Investments",
    badge: "Savings",
    icon: "📈",
    description:
      "Low-risk collective investment funds for liquidity, stability, and short-term returns.",
    path: "/personal/wealth-owner",
  },
  {
    id: "retirement-pension-plans",
    name: "Retirement & Pension Plans",
    category: "Savings & Investments",
    badge: "Savings",
    icon: "💰",
    description:
      "Retirement planning solutions that help individuals and families prepare for life after work.",
    path: "/personal/wealth-owner",
  },
  {
    id: "dollar-investment-plans",
    name: "Dollar Investment Plans",
    category: "Savings & Investments",
    badge: "Savings",
    icon: "💵",
    description:
      "Foreign-currency investment options for clients seeking dollar-denominated savings and growth.",
    path: "/personal/wealth-owner",
  },
  {
    id: "family-protection-plans",
    name: "Family Protection Plans",
    category: "Savings & Investments",
    badge: "Savings",
    icon: "👨‍👩‍👧‍👦",
    description:
      "Protection and savings plans designed around family security, dependants, and long-term goals.",
    path: "/personal/family",
  },
  {
    id: "wealth-advisory-services",
    name: "Wealth Advisory Services",
    category: "Savings & Investments",
    badge: "Savings",
    icon: "🧭",
    description:
      "Personalized guidance for savings, investment planning, retirement, and wealth preservation.",
    path: "/personal/wealth-owner",
  },
];

const tabs = [
  "Personal Insurance",
  "Business Insurance",
  "Employee Benefits",
  "Savings & Investments",
] as const;

const badgeColors: Record<string, string> = {
  Personal: "bg-red-50 text-red-600",
  Business: "bg-blue-50 text-blue-600",
  Employees: "bg-emerald-50 text-emerald-600",
  Savings: "bg-amber-50 text-amber-700",
};

const CoverCard = ({
  cover,
  highlight,
}: {
  cover: Cover;
  highlight: string;
}) => {
  const highlightText = (text: string) => {
    if (!highlight) return <>{text}</>;
    const escaped = highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const parts = text.split(new RegExp(`(${escaped})`, "gi"));

    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <mark
              key={i}
              className="bg-yellow-200 text-yellow-900 rounded px-1"
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
    <Link
      to={cover.path}
      className={`group relative rounded-3xl overflow-hidden bg-white border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl block ${
        cover.popular
          ? "border-red-200 shadow-lg shadow-red-100/70"
          : "border-slate-200 shadow-md shadow-slate-100"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500 via-orange-400 to-blue-600" />

      {cover.popular && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
            Popular
          </span>
        </div>
      )}

      <div className="p-6 flex flex-col min-h-[310px]">
        <div className="flex items-start justify-between mb-5">
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-red-50 to-slate-100 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            {cover.icon}
          </div>

          <span
            className={`text-xs font-bold px-3 py-1.5 rounded-full ${
              badgeColors[cover.badge] || "bg-slate-100 text-slate-600"
            }`}
          >
            {cover.badge}
          </span>
        </div>

        <h3 className="font-extrabold text-slate-900 text-lg mb-3 leading-snug group-hover:text-red-600 transition-colors">
          {highlightText(cover.name)}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-6">
          {highlightText(cover.description)}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-sm font-bold text-[#0F2240] group-hover:text-red-600 transition-colors">
            Learn More
          </span>

          <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-500 transition-all duration-300">
            <svg
              className="w-5 h-5 text-red-500 group-hover:text-white transition-colors"
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
          </div>
        </div>
      </div>
    </Link>
  );
};

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

  const allSearchResults = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase();
    return covers.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.badge.toLowerCase().includes(q),
    );
  }, [search]);

  const displayResults = search.trim() ? allSearchResults : filtered;
  const totalCount = covers.length;

  return (
    <div className="min-h-screen bg-white">
      <div className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-blue-200">
        <img
          src={heroImg}
          alt="Insurance covers"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2240] via-[#0F2240]/90 to-[#0F2240]/60" />
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
            Explore our comprehensive range of {totalCount} insurance, employee
            benefits, savings, and investment solutions.
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
                aria-label="Clear search"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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
              Try searching for something else, like "medical" or "pension".
            </p>
            <button
              onClick={() => setSearch("")}
              className="px-5 py-2.5 bg-[#0F2240] text-white font-semibold rounded-xl hover:bg-[#1B3A6B] transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}

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
