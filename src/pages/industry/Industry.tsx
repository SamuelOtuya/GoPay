import { Link } from "react-router-dom";
import PageHero from "../../components/shared/PageHero";

const industries = [
  {
    id: "transport",
    name: "Transport & Logistics",
    icon: "🚛",
    color: "bg-sky-100",
    border: "hover:border-sky-300",
    tag: "bg-sky-100 text-sky-700",
    topRisks: ["Road accidents", "Cargo theft", "Third-party claims"],
    products: ["Motor Fleet", "Goods in Transit", "Marine Cargo"],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "🏥",
    color: "bg-red-100",
    border: "hover:border-red-300",
    tag: "bg-red-100 text-red-700",
    topRisks: ["Malpractice claims", "Equipment breakdown", "Data breaches"],
    products: [
      "Professional Indemnity",
      "Medical Equipment",
      "Cyber Liability",
    ],
  },
  {
    id: "construction",
    name: "Construction",
    icon: "🏗️",
    color: "bg-amber-100",
    border: "hover:border-amber-300",
    tag: "bg-amber-100 text-amber-700",
    topRisks: ["Worker injuries", "Contract disputes", "Site damage"],
    products: ["Contractors All Risk", "WIBA", "Public Liability"],
  },
  {
    id: "retail",
    name: "Retail & Trade",
    icon: "🛒",
    color: "bg-emerald-100",
    border: "hover:border-emerald-300",
    tag: "bg-emerald-100 text-emerald-700",
    topRisks: ["Fire & theft", "Customer injuries", "Stock loss"],
    products: ["Fire Insurance", "Burglary Cover", "Public Liability"],
  },
  {
    id: "ict",
    name: "ICT & Technology",
    icon: "💻",
    color: "bg-violet-100",
    border: "hover:border-violet-300",
    tag: "bg-violet-100 text-violet-700",
    topRisks: ["Cyber attacks", "Client data breaches", "IP disputes"],
    products: ["Cyber Liability", "Professional Indemnity", "D&O Cover"],
  },
  {
    id: "hospitality",
    name: "Hospitality",
    icon: "🏨",
    color: "bg-orange-100",
    border: "hover:border-orange-300",
    tag: "bg-orange-100 text-orange-700",
    topRisks: ["Guest injuries", "Property fire", "Liquor liability"],
    products: ["Public Liability", "Fire & Perils", "Business Interruption"],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: "🏭",
    color: "bg-slate-100",
    border: "hover:border-slate-300",
    tag: "bg-slate-100 text-slate-700",
    topRisks: ["Equipment breakdown", "Product recalls", "Worker injuries"],
    products: ["Machinery Breakdown", "Product Liability", "WIBA"],
  },
  {
    id: "education",
    name: "Education",
    icon: "🎓",
    color: "bg-indigo-100",
    border: "hover:border-indigo-300",
    tag: "bg-indigo-100 text-indigo-700",
    topRisks: ["Student injuries", "Property damage", "Staff liabilities"],
    products: ["Public Liability", "Fire & Perils", "Group Medical"],
  },
  {
    id: "financial-services",
    name: "Financial Services",
    icon: "🏦",
    color: "bg-blue-100",
    border: "hover:border-blue-300",
    tag: "bg-blue-100 text-blue-700",
    topRisks: ["Fraud & cybercrime", "Regulatory fines", "Errors & omissions"],
    products: [
      "Bankers Blanket Bond",
      "Cyber Liability",
      "Professional Indemnity",
    ],
  },
  {
    id: "sme",
    name: "SMEs & Informal Sector",
    icon: "🛍️",
    color: "bg-yellow-100",
    border: "hover:border-yellow-300",
    tag: "bg-yellow-100 text-yellow-700",
    topRisks: ["Fire & burglary", "Cash theft", "Staff illness"],
    products: ["SME Package", "Money Insurance", "WIBA"],
  },
];

const Industry = () => {
  return (
    <div>
      <PageHero
        title="Find Insurance by Industry"
        subtitle="Every industry faces unique risks. Select yours and we'll show you exactly what you need to protect your business."
        breadcrumbs={[{ label: "Industries" }]}
        badge="Industry Solutions"
        gradient="from-[#05001A] via-[#1A0A5C] to-[#2D1A8C]"
      />

      {/* Industry grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Select Your Industry
            </h2>
            <p className="text-slate-500 mt-2">
              Get an industry-specific risk dashboard and recommended insurance
              products
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {industries.map((industry) => (
              <Link
                key={industry.id}
                to={`/industry/${industry.id}`}
                className={`group bg-white rounded-2xl border-2 border-slate-200 ${industry.border} p-5 hover:shadow-xl transition-all duration-300 flex flex-col`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${industry.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}
                >
                  {industry.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2 leading-tight">
                  {industry.name}
                </h3>

                <div className="mt-2 space-y-1">
                  {industry.topRisks.slice(0, 2).map((risk) => (
                    <p
                      key={risk}
                      className="text-xs text-slate-500 flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-red-400 flex-shrink-0" />
                      {risk}
                    </p>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 mt-4">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                    Products
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {industry.products.slice(0, 2).map((p) => (
                      <span
                        key={p}
                        className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${industry.tag}`}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mandate strip */}
      <section className="py-14 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h3 className="text-xl font-bold mb-1">
                Not sure which cover your industry needs?
              </h3>
              <p className="text-slate-300 text-sm">
                Our industry specialists will guide you through a free risk
                assessment.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link
                to="/appointment"
                className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors text-sm"
              >
                Free Risk Assessment
              </Link>
              <Link
                to="/risk"
                className="px-6 py-3 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-sm"
              >
                View Risk Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industry;
