import { Link } from "react-router-dom";
import PageHero from "../../components/shared/PageHero";

const businessCategories = [
  {
    id: "assets",
    icon: "🏗️",
    label: "Assets",
    subLabel: "Property, Equipment",
    description:
      "Protect your physical business assets from fire, theft, floods, and breakdowns.",
    products: [
      "Fire Insurance",
      "Theft & Burglary",
      "Machinery Breakdown",
      "All Risks Policy",
    ],
    color: "bg-orange-50",
    border: "hover:border-orange-300 hover:shadow-orange-50",
    iconBg: "bg-orange-100",
    tag: "text-orange-700 bg-orange-100",
  },
  {
    id: "money",
    icon: "💰",
    label: "Money",
    subLabel: "Cash, Revenue",
    description:
      "Guard your business revenue against theft, fraud, and income interruption.",
    products: [
      "Money Insurance",
      "Business Interruption",
      "Fidelity Guarantee",
      "Trade Credit",
    ],
    color: "bg-emerald-50",
    border: "hover:border-emerald-300 hover:shadow-emerald-50",
    iconBg: "bg-emerald-100",
    tag: "text-emerald-700 bg-emerald-100",
    popular: true,
  },
  {
    id: "employees",
    icon: "👥",
    label: "Employees",
    subLabel: "Staff, Health",
    description:
      "Attract and retain talent with comprehensive employee benefits and protection.",
    products: [
      "Group Medical",
      "WIBA (Work Injury)",
      "Group Life",
      "Group Personal Accident",
    ],
    color: "bg-blue-50",
    border: "hover:border-blue-300 hover:shadow-blue-50",
    iconBg: "bg-blue-100",
    tag: "text-blue-700 bg-blue-100",
  },
  {
    id: "liability",
    icon: "⚖️",
    label: "Liability",
    subLabel: "Legal, Claims",
    description:
      "Shield your business from legal claims by third parties, clients, and the public.",
    products: [
      "Public Liability",
      "Professional Indemnity",
      "Product Liability",
      "Directors & Officers",
    ],
    color: "bg-red-50",
    border: "hover:border-red-300 hover:shadow-red-50",
    iconBg: "bg-red-100",
    tag: "text-red-700 bg-red-100",
  },
  {
    id: "cyber",
    icon: "🔐",
    label: "Cyber",
    subLabel: "Data, Systems",
    description:
      "Protect your business from cyberattacks, data breaches, and digital threats.",
    products: [
      "Cyber Liability",
      "Data Breach Cover",
      "Business Email Compromise",
      "Ransomware Cover",
    ],
    color: "bg-violet-50",
    border: "hover:border-violet-300 hover:shadow-violet-50",
    iconBg: "bg-violet-100",
    tag: "text-violet-700 bg-violet-100",
  },
  {
    id: "transport",
    icon: "🚛",
    label: "Transport",
    subLabel: "Fleet, Goods",
    description:
      "Comprehensive cover for business vehicles, cargo, and goods in transit.",
    products: [
      "Motor Fleet Insurance",
      "Goods in Transit",
      "Marine Cargo",
      "Passenger Liability",
    ],
    color: "bg-sky-50",
    border: "hover:border-sky-300 hover:shadow-sky-50",
    iconBg: "bg-sky-100",
    tag: "text-sky-700 bg-sky-100",
  },
];

const smeSolutions = [
  {
    icon: "🏪",
    label: "SME Package",
    desc: "All-in-one cover for small businesses",
  },
  { icon: "🔥", label: "Fire & Peril", desc: "Essential property protection" },
  {
    icon: "🛡️",
    label: "Business Interruption",
    desc: "Keep revenue flowing during disruptions",
  },
  { icon: "👷", label: "WIBA Cover", desc: "Mandatory workers' compensation" },
];

const Business = () => {
  return (
    <div>
      <PageHero
        title="Business Insurance"
        subtitle="What do you want to protect? Choose a risk category and we'll recommend the right cover for your business."
        breadcrumbs={[{ label: "Business" }]}
        badge="Business Insurance"
        gradient="from-[#0A1628] via-[#0F2D6B] to-[#1B4FD8]"
        ctaLabel="Get a Business Quote"
        ctaHref="/quote"
      />

      {/* Risk Selector */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              What does your business need to protect?
            </h2>
            <p className="text-slate-500 mt-2 max-w-xl mx-auto">
              Choose a risk category below to explore tailored insurance
              products and recommended solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessCategories.map((cat) => (
              <Link
                key={cat.id}
                to={`/business/${cat.id}`}
                className={`group relative bg-white rounded-2xl border-2 border-slate-200 ${cat.border} p-6 transition-all duration-300 hover:shadow-xl flex flex-col`}
              >
                {cat.popular && (
                  <span className="absolute -top-3 left-5 bg-[#1B4FD8] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Most Requested
                  </span>
                )}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl ${cat.iconBg} flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">
                      {cat.label}
                    </h3>
                    <p className="text-slate-400 text-sm">{cat.subLabel}</p>
                  </div>
                </div>

                <p className="text-slate-500 text-sm mb-4">{cat.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {cat.products.slice(0, 3).map((p) => (
                    <span
                      key={p}
                      className={`text-xs font-medium px-2.5 py-1 rounded-full ${cat.tag}`}
                    >
                      {p}
                    </span>
                  ))}
                  {cat.products.length > 3 && (
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-500">
                      +{cat.products.length - 3} more
                    </span>
                  )}
                </div>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-800 transition-colors">
                    Explore Coverage
                  </span>
                  <svg
                    className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform"
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SME Package callout */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0A1628] to-[#1B4FD8] rounded-3xl p-8 md:p-12">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="lg:w-1/2 text-white">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-medium tracking-wide uppercase text-blue-100">
                    SME Special
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  The SME Business Package
                </h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  One affordable package covering fire, theft, liability, WIBA,
                  and business interruption — everything a small or medium
                  business needs under one policy.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Link
                    to="/quote"
                    className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors text-sm"
                  >
                    Get SME Quote
                  </Link>
                  <Link
                    to="/business/assets"
                    className="px-6 py-3 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                {smeSolutions.map((s) => (
                  <div
                    key={s.label}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5"
                  >
                    <span className="text-2xl block mb-2">{s.icon}</span>
                    <h4 className="text-white font-bold text-sm">{s.label}</h4>
                    <p className="text-blue-200 text-xs mt-1">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why protect your business */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Why every business in Kenya needs insurance
          </h2>
          <p className="text-slate-500 mb-10 max-w-2xl mx-auto">
            Uninsured losses can close a business overnight. Be prepared for
            what you can't predict.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: "🔥",
                stat: "70%",
                label: "of SMEs that suffer a major fire never reopen",
              },
              {
                icon: "⚡",
                stat: "KES 2.4M",
                label: "average cost of a cyber breach for SMEs in Kenya",
              },
              {
                icon: "⚖️",
                stat: "1 in 4",
                label: "businesses face a liability claim within 5 years",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="text-3xl font-black text-slate-900 mb-1">
                  {item.stat}
                </p>
                <p className="text-slate-500 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business;
