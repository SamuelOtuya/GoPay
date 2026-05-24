import { useState, useMemo, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import heroImg from "../assets/background.jpg";
import { supabase } from "../lib/supabase";

interface Cover {
  id: string;
  name: string;
  category:
    | "Personal Insurance"
    | "Business Insurance"
    | "Employee Benefits"
    | "Life & Investments";
  badge: string;
  icon: string;
  description: string;
  path: string;
  popular?: boolean;
  bgImage?: string;
  hero_image?: string;
}

const defaultCovers: Cover[] = [
  {
    id: "home-insurance",
    name: "Home Insurance",
    category: "Personal Insurance",
    badge: "Personal",
    icon: "🏠",
    description:
      "Protects your residence, household contents, and domestic liability against covered risks.",
    path: "/covers/home-insurance",
    popular: true,
    bgImage: "/images/home-cover.jpg",
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
    bgImage: "/images/travel-hero.jpg",
  },
  {
    id: "car-insurance",
    name: "Car Insurance",
    category: "Personal Insurance",
    badge: "Personal",
    icon: "🚗",
    description:
      "Comprehensive and third-party motor cover for private vehicles against accidents, theft, and liability.",
    path: "/covers/car-insurance",
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
    path: "/covers/individual-life-insurance",
  },
  {
    id: "motorcycle-insurance",
    name: "Motorcycle Insurance",
    category: "Personal Insurance",
    badge: "Personal",
    icon: "🏍️",
    description:
      "Motorcycle cover for private riders, including liability protection and optional own-damage benefits.",
    path: "/covers/motorcycle-insurance",
  },
  {
    id: "personal-accident",
    name: "Personal Accident",
    category: "Personal Insurance",
    badge: "Personal",
    icon: "🛡️",
    description:
      "Covers accidental death, permanent disability, and medical expenses arising from accidental injury.",
    path: "/covers/personal-accident-insurance",
  },
  {
    id: "students-personal-accident",
    name: "Students Personal Accident",
    category: "Personal Insurance",
    badge: "Personal",
    icon: "🎓",
    description:
      "Accident protection tailored for students while at school, during activities, or in transit.",
    path: "/covers/students-personal-insurance",
  },
  {
    id: "funeral-expenses-insurance",
    name: "Funeral Expenses Insurance",
    category: "Personal Insurance",
    badge: "Personal",
    icon: "🕊️",
    description:
      "Provides quick support to help meet funeral and last-expense costs for covered members.",
    path: "/covers/funeral-insurance",
  },
  {
    id: "individual-health-insurance",
    name: "Health Insurance - Individual",
    category: "Personal Insurance",
    badge: "Personal",
    icon: "💊",
    description:
      "Individual health cover with options for inpatient, outpatient, dental, optical, and maternity benefits.",
    path: "/covers/individual-health-insurance",
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
    path: "/covers/pet-insurance",
  },
  {
    id: "device-gadget-insurance",
    name: "Device & Gadget Insurance",
    category: "Personal Insurance",
    badge: "Personal",
    icon: "📱",
    description:
      "Protects phones, laptops, tablets, and other gadgets against accidental damage, theft, and related risks.",
    path: "/covers/device-insurance",
  },
  {
    id: "sme-business-cover",
    name: "SME Business Cover",
    category: "Business Insurance",
    badge: "Business",
    icon: "📦",
    description:
      "A bundled business cover for SMEs, combining essential protection for assets, liability, and employees.",
    path: "/covers/sme-insurance",
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
    path: "/covers/professional-insurance",
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
    path: "/covers/marine-insurance",
  },
  {
    id: "aviation-insurance",
    name: "Aviation Insurance",
    category: "Business Insurance",
    badge: "Business",
    icon: "🛩️",
    description:
      "Specialized cover for aviation-related risks, including aircraft, operators, and associated liabilities.",
    path: "/covers/aviation-insurance",
  },
  {
    id: "agriculture-insurance",
    name: "Agriculture Insurance",
    category: "Business Insurance",
    badge: "Business",
    icon: "🌾",
    description:
      "Risk protection for farms, agribusinesses, crops, livestock, equipment, and agricultural operations.",
    path: "/covers/agriculture-insurance",
  },
  {
    id: "general-liability-insurance",
    name: "General Liability Insurance",
    category: "Business Insurance",
    badge: "Business",
    icon: "⚖️",
    description:
      "Protects businesses from third-party injury, property damage, and related liability claims.",
    path: "/covers/general-liability-insurance",
  },
  {
    id: "company-car-insurance",
    name: "Company Car Insurance",
    category: "Business Insurance",
    badge: "Business",
    icon: "🚙",
    description:
      "Motor insurance for company-owned vehicles used in business operations.",
    path: "/covers/company-car-insurance",
  },
  {
    id: "commercial-property-insurance",
    name: "Commercial Property Insurance",
    category: "Business Insurance",
    badge: "Business",
    icon: "🏢",
    description:
      "Protects business premises, stock, equipment, and contents against covered property risks.",
    path: "/covers/commercial-property-insurance",
  },
  {
    id: "wiba",
    name: "Work Injury Benefits Act Insurance",
    category: "Business Insurance",
    badge: "Business",
    icon: "👷",
    description:
      "Mandatory employer cover for employees injured while working or during work-related duties.",
    path: "/covers/work-insurance",
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
    path: "/covers/commercial-umbrella-insurance",
  },
  {
    id: "machinery-breakdown-insurance",
    name: "Machinery Breakdown Insurance",
    category: "Business Insurance",
    badge: "Business",
    icon: "⚙️",
    description:
      "Covers sudden and unforeseen mechanical or electrical breakdown of insured machinery.",
    path: "/covers/machinery-insurance",
  },
  {
    id: "employers-liability",
    name: "Employers Liability",
    category: "Business Insurance",
    badge: "Business",
    icon: "🤝",
    description:
      "Protects employers against legal liability claims arising from employee injury or illness.",
    path: "/covers/employers-liability-insurance",
  },
  {
    id: "fidelity-guarantee",
    name: "Fidelity Guarantee",
    category: "Business Insurance",
    badge: "Business",
    icon: "🔐",
    description:
      "Covers financial loss caused by employee dishonesty, fraud, theft, or embezzlement.",
    path: "/covers/fidelity-guarantee-insurance",
  },
  {
    id: "nssf-tier-2-private-pension",
    name: "NSSF Tier 2 to Private Pension Fund",
    category: "Business Insurance",
    badge: "Business",
    icon: "💰",
    description:
      "Helps employers transition NSSF Tier 2 contributions into an approved private pension fund.",
    path: "/covers/nssf-insurance",
  },
  {
    id: "group-medical-insurance",
    name: "Group Medical Insurance",
    category: "Employee Benefits",
    badge: "Employees",
    icon: "🏥",
    description:
      "Comprehensive inpatient and outpatient health cover for employees under one group policy.",
    path: "/covers/group-medical-insurance",
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
    path: "/covers/group-life-insurance",
  },
  {
    id: "group-personal-accident-insurance",
    name: "Group Personal Accident Insurance",
    category: "Employee Benefits",
    badge: "Employees",
    icon: "🦺",
    description:
      "Accident protection for employees, including accidental death, disability, and medical expenses.",
    path: "/covers/group-personal-accident-insurance",
  },
  {
    id: "group-last-expense-funeral-cover",
    name: "Group Last Expense / Funeral Cover",
    category: "Employee Benefits",
    badge: "Employees",
    icon: "🕊️",
    description:
      "Group funeral benefit that supports employees' families with last-expense costs.",
    path: "/covers/group-last-expense-funeral-cover",
  },
  {
    id: "group-critical-illness-cover",
    name: "Group Critical Illness Cover",
    category: "Employee Benefits",
    badge: "Employees",
    icon: "💉",
    description:
      "Provides a lump-sum benefit when a covered employee is diagnosed with specified critical illnesses.",
    path: "/covers/group-critical-illness-cover",
  },
  {
    id: "corporate-travel-insurance",
    name: "Corporate Travel Insurance",
    category: "Employee Benefits",
    badge: "Employees",
    icon: "✈️",
    description:
      "Travel insurance for employees and executives travelling for business locally or internationally.",
    path: "/covers/corporate-travel-insurance",
  },
  {
    id: "group-income-protection",
    name: "Group Income Protection / Disability Cover",
    category: "Employee Benefits",
    badge: "Employees",
    icon: "🛡️",
    description:
      "Provides income support for employees who cannot work due to illness, injury, or disability.",
    path: "/covers/group-income-protection",
  },

  {
    id: "whole-life",
    name: "Whole Life",
    category: "Life & Investments",
    badge: "Life",
    icon: "❤️",
    description:
      "Permanent life insurance designed to provide lifelong protection and financial security for beneficiaries.",
    path: "/covers/whole-life-insurance",
    popular: true,
  },
  {
    id: "endowment-savings",
    name: "Endowment Savings",
    category: "Life & Investments",
    badge: "Life",
    icon: "🏦",
    description:
      "A savings and protection plan that pays benefits after a set period or upon death.",
    path: "/covers/endowment-savings-insurance",
  },
  {
    id: "last-expense",
    name: "Last Expense",
    category: "Life & Investments",
    badge: "Life",
    icon: "🕊️",
    description:
      "Provides quick financial support to help cover funeral and final expense costs.",
    path: "/covers/last-expense-insurance",
  },
  {
    id: "education-savings",
    name: "Education Savings",
    category: "Life & Investments",
    badge: "Life",
    icon: "🎓",
    description:
      "Helps parents and guardians save toward future education costs while protecting learning continuity.",
    path: "/covers/education-savings-insurance",
  },
  {
    id: "critical-illness",
    name: "Critical Illness",
    category: "Life & Investments",
    badge: "Life",
    icon: "💉",
    description:
      "Pays a benefit when the insured is diagnosed with a covered critical illness.",
    path: "/covers/critical-illness-insurance",
  },
  {
    id: "estate-planning",
    name: "Estate Planning",
    category: "Life & Investments",
    badge: "Life",
    icon: "🏛️",
    description:
      "Solutions that help protect, transfer, and preserve wealth for beneficiaries.",
    path: "/covers/estate-planning",
  },
  {
    id: "investment-funds",
    name: "Investment Funds",
    category: "Life & Investments",
    badge: "Life",
    icon: "📈",
    description:
      "Investment solutions for clients looking to grow and preserve wealth over time.",
    path: "/covers/investment-funds",
  },
  {
    id: "retirement-pension-plans",
    name: "Retirement & Pension Plans",
    category: "Life & Investments",
    badge: "Life",
    icon: "💰",
    description:
      "Retirement planning solutions that help individuals and families prepare for life after work.",
    path: "/covers/retirement-pension-plans",
  },
  {
    id: "individual-income-protection",
    name: "Individual Income Protection / Disability Cover",
    category: "Life & Investments",
    badge: "Life",
    icon: "🛡️",
    description:
      "Provides income support when an individual cannot work due to illness, injury, or disability.",
    path: "/covers/individual-income-protection",
  },
];

const tabs = [
  "Personal Insurance",
  "Business Insurance",
  "Employee Benefits",
  "Life & Investments",
] as const;

const badgeColors: Record<string, string> = {
  Personal: "bg-red-50 text-red-600",
  Business: "bg-blue-50 text-blue-600",
  Employees: "bg-emerald-50 text-emerald-600",
  Life: "bg-amber-50 text-amber-700",
};

const CoverCard = ({
  cover,
  highlight,
}: {
  cover: Cover;
  highlight: string;
}) => {
  const cardImage = cover.hero_image || cover.bgImage;
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
      {cardImage && (
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={cardImage}
            alt={cover.name}
            className="w-full h-full object-cover object-center opacity-55 group-hover:scale-105 transition-all duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-white/1" />
        </div>
      )}

      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500 via-orange-400 to-blue-600" />

      <div className="relative p-6 flex flex-col min-h-[340px]">
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-red-50 to-slate-100 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            {cover.icon}
          </div>

          <div className="flex flex-col items-end gap-2">
            {cover.popular && (
              <span className="bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
                Popular
              </span>
            )}

            <span
              className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                badgeColors[cover.badge] || "bg-slate-100 text-slate-600"
              }`}
            >
              {cover.badge}
            </span>
          </div>
        </div>

        <h3 className="font-extrabold text-slate-900 text-lg mb-3 leading-snug group-hover:text-red-600 transition-colors">
          {highlightText(cover.name)}
        </h3>

        <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-6">
          {highlightText(cover.description)}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3">
          <span className="text-sm font-bold text-[#0F2240] group-hover:text-red-600 transition-colors">
            Learn More
          </span>

          <span className="px-4 py-2 rounded-xl bg-red-500 text-white text-xs font-bold shadow-md group-hover:bg-red-600 transition-colors">
            Get Quote
          </span>
        </div>
      </div>
    </Link>
  );
};

const OurCovers = () => {
  const [covers, setCovers] = useState<Cover[]>(defaultCovers);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [activeTab, setActiveTab] =
    useState<(typeof tabs)[number]>("Personal Insurance");
  const [search, setSearch] = useState("");

  const location = useLocation();

  useEffect(() => {
    const hashMap: Record<string, (typeof tabs)[number]> = {
      "#personal": "Personal Insurance",
      "#business": "Business Insurance",
      "#employee-benefits": "Employee Benefits",
      "#life-investments": "Life & Investments",
    };

    const tab = hashMap[location.hash];

    if (tab) {
      setActiveTab(tab);
      setSearch("");
    }
  }, [location.hash]);

  useEffect(() => {
    const fetchHeroImages = async () => {
      try {
        const { data, error } = await supabase
          .from("insurance_products")
          .select("slug, page_content, image_url");

        if (error) {
          console.error("Error fetching hero images:", error.message);
          return;
        }

        if (!data) return;

        setCovers((prevCovers) =>
          prevCovers.map((cover) => {
            const slug = cover.path.split("/").pop();
            const product = data.find((item) => item.slug === slug);

            const heroImage =
              product?.page_content?.heroImage ||
              product?.page_content?.hero?.heroImage ||
              product?.image_url;

            return {
              ...cover,
              hero_image: heroImage || cover.bgImage,
            };
          }),
        );
      } finally {
        setImagesLoaded(true);
      }
    };

    fetchHeroImages();
  }, []);

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
  }, [activeTab, search, covers]);

  const allSearchResults = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase();
    return covers.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.badge.toLowerCase().includes(q),
    );
  }, [search, covers]);

  const displayResults = search.trim() ? allSearchResults : filtered;
  const totalCount = covers.length;

  return (
    <div className="min-h-screen bg-white">
      <div className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0F2240]">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url(${heroImg})`,
          }}
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[#0F2240]/55" />

        {/* Premium ambient effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          {/* Right glow */}
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[#1B3A6B]/30 blur-3xl" />

          {/* Left glow */}
          <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-[#2563EB]/10 blur-3xl" />

          {/* Vertical light line */}
          <div
            className="absolute top-0 right-1/4 w-px h-full opacity-[0.07]"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #60a5fa, transparent)",
            }}
          />

          {/* Horizontal line */}
          <div
            className="absolute left-0 top-1/3 h-px w-full opacity-[0.05]"
            style={{
              background:
                "linear-gradient(to right, transparent, #60a5fa, transparent)",
            }}
          />
        </div>

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

        {!imagesLoaded ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="h-[340px] rounded-3xl bg-slate-100 animate-pulse"
              />
            ))}
          </div>
        ) : displayResults.length > 0 ? (
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
