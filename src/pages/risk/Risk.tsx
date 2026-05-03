import { Link } from "react-router-dom";
import PageHero from "../../components/shared/PageHero";

const riskTypes = [
  {
    id: "fire-property",
    icon: "🔥",
    name: "Fire & Property Loss",
    description:
      "Fires, floods, and storm damage can destroy years of hard work in hours.",
    impact: "Very High",
    impactColor: "text-red-600 bg-red-50 border-red-200",
    products: ["Fire Insurance", "All Risks Policy", "Business Interruption"],
    color: "hover:border-red-300 hover:shadow-red-50",
    iconBg: "bg-red-100",
  },
  {
    id: "theft-burglary",
    icon: "🔓",
    name: "Theft & Burglary",
    description:
      "Break-ins, employee fraud, and cash theft expose businesses and homes alike.",
    impact: "High",
    impactColor: "text-orange-600 bg-orange-50 border-orange-200",
    products: ["Burglary Cover", "Money Insurance", "Fidelity Guarantee"],
    color: "hover:border-orange-300 hover:shadow-orange-50",
    iconBg: "bg-orange-100",
  },
  {
    id: "cyber",
    icon: "💻",
    name: "Cyber Risk",
    description:
      "Ransomware, data breaches, and email scams cost Kenyan businesses millions annually.",
    impact: "Very High",
    impactColor: "text-red-600 bg-red-50 border-red-200",
    products: ["Cyber Liability", "Professional Indemnity", "BEC Cover"],
    color: "hover:border-violet-300 hover:shadow-violet-50",
    iconBg: "bg-violet-100",
  },
  {
    id: "employee",
    icon: "👷",
    name: "Employee Risk",
    description:
      "Work injuries, illnesses, and death of key staff create major business disruptions.",
    impact: "High",
    impactColor: "text-orange-600 bg-orange-50 border-orange-200",
    products: ["WIBA", "Group Medical", "Group Life"],
    color: "hover:border-blue-300 hover:shadow-blue-50",
    iconBg: "bg-blue-100",
  },
  {
    id: "liability",
    icon: "⚖️",
    name: "Liability Risk",
    description:
      "Customer injuries, professional mistakes, and legal disputes can result in massive payouts.",
    impact: "High",
    impactColor: "text-orange-600 bg-orange-50 border-orange-200",
    products: ["Public Liability", "Professional Indemnity", "D&O Cover"],
    color: "hover:border-red-300 hover:shadow-red-50",
    iconBg: "bg-red-100",
  },
  {
    id: "transport",
    icon: "🚛",
    name: "Transport Risk",
    description:
      "Accidents, cargo theft, and passenger injuries expose transport businesses to crippling losses.",
    impact: "High",
    impactColor: "text-orange-600 bg-orange-50 border-orange-200",
    products: ["Motor Fleet", "Goods in Transit", "Marine Cargo"],
    color: "hover:border-sky-300 hover:shadow-sky-50",
    iconBg: "bg-sky-100",
  },
  {
    id: "financial",
    icon: "📉",
    name: "Financial Loss",
    description:
      "Bad debts, business interruption, and revenue loss can shut down businesses overnight.",
    impact: "Medium",
    impactColor: "text-amber-600 bg-amber-50 border-amber-200",
    products: ["Business Interruption", "Trade Credit", "Revenue Protection"],
    color: "hover:border-amber-300 hover:shadow-amber-50",
    iconBg: "bg-amber-100",
  },
];

const Risk = () => {
  return (
    <div>
      <PageHero
        title="Risk & Coverage Guide"
        subtitle="What are you worried about? Select a risk type to understand how it could impact you and which insurance products offer the best protection."
        breadcrumbs={[{ label: "Risk Guide" }]}
        badge="Risk & Coverage Guide"
        gradient="from-[#1A0500] via-[#5C1A00] to-[#A03000]"
      />

      {/* Risk tiles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              What are you worried about?
            </h2>
            <p className="text-slate-500 mt-2">
              Choose a risk type to see a full explanation, impact analysis, and
              recommended insurance solutions
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {riskTypes.map((risk) => (
              <Link
                key={risk.id}
                to={`/risk/${risk.id}`}
                className={`group bg-white rounded-2xl border-2 border-slate-200 ${risk.color} p-6 transition-all duration-300 hover:shadow-xl flex flex-col`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${risk.iconBg} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}
                  >
                    {risk.icon}
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${risk.impactColor}`}
                  >
                    {risk.impact}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{risk.name}</h3>
                <p className="text-slate-500 text-sm mb-4 flex-1">
                  {risk.description}
                </p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Solutions
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {risk.products.slice(0, 2).map((p) => (
                      <span
                        key={p}
                        className="text-[10px] bg-blue-50 text-blue-700 font-medium px-2 py-0.5 rounded-full"
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

      {/* Quick checker */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-4xl block mb-4">🧮</span>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Not sure what risks you face?
          </h2>
          <p className="text-slate-500 mb-8">
            Let one of our risk advisors do a free 20-minute risk assessment for
            your home or business. You'll get a personalized risk report and
            recommended cover.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/appointment"
              className="px-8 py-3.5 bg-[#1B4FD8] text-white font-semibold rounded-xl hover:bg-[#1740B8] transition-colors shadow-lg shadow-blue-500/20"
            >
              Book Free Risk Assessment
            </Link>
            <Link
              to="/quote"
              className="px-8 py-3.5 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-blue-300 hover:text-blue-700 transition-colors"
            >
              Get a Quick Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Risk;
