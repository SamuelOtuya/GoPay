import { useNavigate } from "react-router-dom";
import {
  ShieldCheckIcon,
  FireIcon,
  LockClosedIcon,
  UserGroupIcon,
  TruckIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

const risks = [
  {
    title: "Fire",
    icon: FireIcon,
    description:
      "Protect your property and stock from fire and related perils.",
    accent: "#DC2626",
    lightBg: "#FEF2F2",
  },
  {
    title: "Theft",
    icon: LockClosedIcon,
    description: "Cover losses from burglary, robbery, and malicious damage.",
    accent: "#7C3AED",
    lightBg: "#F5F3FF",
  },
  {
    title: "Cyber",
    icon: ShieldCheckIcon,
    description: "Guard your business against data breaches and cyber attacks.",
    accent: "#2563EB",
    lightBg: "#EFF6FF",
  },
  {
    title: "Employees",
    icon: UserGroupIcon,
    description: "WIBA and group life cover to protect your workforce.",
    accent: "#059669",
    lightBg: "#ECFDF5",
  },
  {
    title: "Liability",
    icon: ExclamationTriangleIcon,
    description:
      "Shield your business from third-party claims and legal costs.",
    accent: "#D97706",
    lightBg: "#FFFBEB",
  },
  {
    title: "Transport",
    icon: TruckIcon,
    description: "Cover goods in transit against loss, damage, or theft.",
    accent: "#0F2240",
    lightBg: "#F0F4FF",
  },
];

function RiskSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-2">
            Risk Explorer
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F2240]">
              What are you worried about?
            </h2>
            <p className="text-sm text-slate-500 sm:text-right max-w-xs">
              Select a risk to find the right cover for your situation.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {risks.map((risk) => (
            <button
              key={risk.title}
              onClick={() => navigate(`/risk/${risk.title.toLowerCase()}`)}
              className="group text-left w-full rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-200 hover:shadow-md hover:border-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4 transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: risk.lightBg, color: risk.accent }}
              >
                <risk.icon className="w-5 h-5" />
              </div>

              {/* Text */}
              <h3 className="font-semibold text-[#0F2240] text-base mb-1 group-hover:text-blue-700 transition-colors">
                {risk.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {risk.description}
              </p>

              {/* Arrow */}
              <div
                className="mt-4 inline-flex items-center gap-1 text-xs font-semibold transition-colors"
                style={{ color: risk.accent }}
              >
                View cover
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
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
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RiskSection;
