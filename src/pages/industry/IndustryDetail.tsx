import { useParams, Link } from "react-router-dom";
import PageHero from "../../components/shared/PageHero";
import ProductCard from "../../components/shared/ProductCard";

const industryData: Record<
  string,
  {
    name: string;
    icon: string;
    gradient: string;
    intro: string;
    risks: Array<{
      icon: string;
      name: string;
      impact: string;
      severity: "high" | "medium" | "low";
    }>;
    products: Array<{
      id: string;
      name: string;
      tagline: string;
      icon: string;
      color: string;
      benefits: string[];
      priceIndicator: "low" | "medium" | "high" | "custom";
      popular?: boolean;
    }>;
    compliance?: string;
  }
> = {
  transport: {
    name: "Transport & Logistics",
    icon: "🚛",
    gradient: "from-[#001A2A] via-[#003D5C] to-[#0A7A8C]",
    intro:
      "The transport and logistics sector faces constant exposure to road risks, cargo losses, and third-party liabilities. A single accident can cost millions without the right cover.",
    risks: [
      {
        icon: "💥",
        name: "Road Accidents",
        impact: "Vehicle damage, injury claims, third-party liability",
        severity: "high",
      },
      {
        icon: "📦",
        name: "Cargo Theft & Loss",
        impact: "Stock loss, client claims, reputational damage",
        severity: "high",
      },
      {
        icon: "⚖️",
        name: "Third-Party Liability",
        impact: "Legal claims from public or other road users",
        severity: "high",
      },
      {
        icon: "⛽",
        name: "Breakdown & Delays",
        impact: "Loss of revenue, contract penalties",
        severity: "medium",
      },
      {
        icon: "👷",
        name: "Driver Injuries",
        impact: "WIBA claims, medical costs, legal liability",
        severity: "medium",
      },
    ],
    products: [
      {
        id: "motor-fleet",
        name: "Motor Fleet Insurance",
        tagline: "All vehicles under one comprehensive policy",
        icon: "🚗",
        color: "bg-sky-100",
        benefits: [
          "Own damage",
          "Third-party liability",
          "Emergency assist",
          "Fleet discount",
        ],
        priceIndicator: "medium",
        popular: true,
      },
      {
        id: "goods-in-transit",
        name: "Goods in Transit",
        tagline: "Cargo and stock while on the move",
        icon: "📦",
        color: "bg-amber-100",
        benefits: [
          "Theft & hijacking",
          "Accidental damage",
          "All Kenya routes",
          "Nationwide cover",
        ],
        priceIndicator: "low",
      },
      {
        id: "marine-cargo",
        name: "Marine Cargo",
        tagline: "Import/export goods by sea, air, or road",
        icon: "🚢",
        color: "bg-blue-100",
        benefits: [
          "Sea freight",
          "Air cargo",
          "Import/export docs",
          "All risks available",
        ],
        priceIndicator: "medium",
      },
      {
        id: "wiba",
        name: "WIBA for Drivers",
        tagline: "Worker injury cover for your driving staff",
        icon: "⚕️",
        color: "bg-emerald-100",
        benefits: [
          "Work injury",
          "Death benefit",
          "Permanent disability",
          "Legal compliance",
        ],
        priceIndicator: "low",
      },
    ],
    compliance:
      "PSV operators are required by law to hold valid third-party liability and passenger liability insurance. Fleet operators must also maintain WIBA cover for all drivers.",
  },
  healthcare: {
    name: "Healthcare",
    icon: "🏥",
    gradient: "from-[#1A0505] via-[#5C0A0A] to-[#8C1A1A]",
    intro:
      "Healthcare providers face unique risks from malpractice claims to equipment failures and patient data breaches. Comprehensive cover protects your practice and your reputation.",
    risks: [
      {
        icon: "⚕️",
        name: "Medical Malpractice",
        impact: "Lawsuits from treatment errors, misdiagnosis",
        severity: "high",
      },
      {
        icon: "🔐",
        name: "Patient Data Breach",
        impact: "HIPAA-equivalent fines, reputational damage",
        severity: "high",
      },
      {
        icon: "⚙️",
        name: "Equipment Failure",
        impact: "Costly repairs, treatment delays",
        severity: "medium",
      },
      {
        icon: "👷",
        name: "Staff Work Injuries",
        impact: "Needle-stick injuries, infectious exposure",
        severity: "medium",
      },
      {
        icon: "🔥",
        name: "Fire & Property",
        impact: "Loss of records, equipment, premises",
        severity: "medium",
      },
    ],
    products: [
      {
        id: "professional-indemnity",
        name: "Medical Malpractice / PI",
        tagline: "Protection against clinical negligence claims",
        icon: "📋",
        color: "bg-red-100",
        benefits: [
          "Clinical negligence",
          "Misdiagnosis claims",
          "Legal defense",
          "Retroactive cover",
        ],
        priceIndicator: "high",
        popular: true,
      },
      {
        id: "cyber-liability",
        name: "Healthcare Cyber Cover",
        tagline: "Patient data and system breach protection",
        icon: "🔐",
        color: "bg-violet-100",
        benefits: [
          "Patient data breach",
          "Ransomware",
          "Regulatory fines",
          "PR crisis cover",
        ],
        priceIndicator: "medium",
      },
      {
        id: "medical-equipment",
        name: "Medical Equipment Cover",
        tagline: "Breakdown and accidental damage cover",
        icon: "🔬",
        color: "bg-blue-100",
        benefits: [
          "Equipment breakdown",
          "Accidental damage",
          "Theft of equipment",
          "Portable equipment",
        ],
        priceIndicator: "medium",
      },
      {
        id: "wiba",
        name: "WIBA for Healthcare Staff",
        tagline: "Occupational risk cover for medical workers",
        icon: "🦺",
        color: "bg-emerald-100",
        benefits: [
          "Needle-stick injuries",
          "Infectious disease",
          "Death benefit",
          "Disability cover",
        ],
        priceIndicator: "low",
      },
    ],
  },
  construction: {
    name: "Construction",
    icon: "🏗️",
    gradient: "from-[#1A0D00] via-[#5C3A00] to-[#A06600]",
    intro:
      "Construction is one of Kenya's highest-risk industries. From site accidents to contract disputes, proper insurance is non-negotiable for any builder or contractor.",
    risks: [
      {
        icon: "👷",
        name: "Worker Injuries",
        impact: "WIBA claims, medical costs, project delays",
        severity: "high",
      },
      {
        icon: "🏚️",
        name: "Site Damage",
        impact: "Storm, fire, vandalism to structures under construction",
        severity: "high",
      },
      {
        icon: "⚖️",
        name: "Third-Party Claims",
        impact: "Injury or damage to adjacent properties or public",
        severity: "high",
      },
      {
        icon: "📋",
        name: "Contract Disputes",
        impact: "Cost overruns, project failures, client lawsuits",
        severity: "medium",
      },
      {
        icon: "⚙️",
        name: "Plant & Equipment",
        impact: "Theft or damage to expensive machinery",
        severity: "medium",
      },
    ],
    products: [
      {
        id: "car-policy",
        name: "Contractors All Risk (CAR)",
        tagline: "Comprehensive site insurance from foundation to completion",
        icon: "🏗️",
        color: "bg-amber-100",
        benefits: [
          "Works under construction",
          "Third-party liability",
          "Plant & equipment",
          "Design errors optional",
        ],
        priceIndicator: "medium",
        popular: true,
      },
      {
        id: "wiba",
        name: "WIBA for Construction",
        tagline: "Mandatory worker injury cover for site staff",
        icon: "⚕️",
        color: "bg-orange-100",
        benefits: [
          "On-site injuries",
          "Death benefit",
          "Permanent disability",
          "Temporary disability",
        ],
        priceIndicator: "low",
      },
      {
        id: "surety-bond",
        name: "Surety Bond / Performance Bond",
        tagline: "Guarantee contract completion to clients",
        icon: "📝",
        color: "bg-blue-100",
        benefits: [
          "Performance guarantee",
          "Bid bonds",
          "Advance payment bonds",
          "Maintenance bonds",
        ],
        priceIndicator: "custom",
      },
      {
        id: "plant-equipment",
        name: "Plant & Equipment",
        tagline: "Protect your excavators, cranes, and machinery",
        icon: "🚧",
        color: "bg-slate-100",
        benefits: [
          "Theft on site",
          "Accidental damage",
          "Mechanical breakdown",
          "Hired-in plant",
        ],
        priceIndicator: "medium",
      },
    ],
  },
  ict: {
    name: "ICT & Technology",
    icon: "💻",
    gradient: "from-[#05001A] via-[#1A0A5C] to-[#2D1A8C]",
    intro:
      "Tech companies face exponential digital risks. From cyberattacks and data breaches to IP disputes and client project failures — the right cover keeps your business resilient.",
    risks: [
      {
        icon: "🔐",
        name: "Cyber Attacks",
        impact: "Ransomware, DDoS, data breach costs",
        severity: "high",
      },
      {
        icon: "📋",
        name: "Client Claims",
        impact: "Project failure, software bugs, missed SLAs",
        severity: "high",
      },
      {
        icon: "📂",
        name: "Data Breach",
        impact: "Regulatory fines, client lawsuits, notifications",
        severity: "high",
      },
      {
        icon: "💡",
        name: "IP Infringement",
        impact: "Patent disputes, copyright claims",
        severity: "medium",
      },
      {
        icon: "👔",
        name: "D&O Liability",
        impact: "Director and management liability",
        severity: "medium",
      },
    ],
    products: [
      {
        id: "cyber-liability",
        name: "Cyber Liability",
        tagline: "End-to-end protection from digital threats",
        icon: "🔐",
        color: "bg-violet-100",
        benefits: [
          "Cyber extortion",
          "Data breach response",
          "Business interruption",
          "Forensic investigation",
        ],
        priceIndicator: "medium",
        popular: true,
      },
      {
        id: "professional-indemnity",
        name: "Technology E&O / PI",
        tagline: "Claims from software errors, failed projects",
        icon: "💻",
        color: "bg-blue-100",
        benefits: [
          "Technology errors",
          "Project failures",
          "SLA breaches",
          "Retroactive cover",
        ],
        priceIndicator: "medium",
      },
      {
        id: "directors-officers",
        name: "Directors & Officers",
        tagline: "Personal liability cover for tech company leaders",
        icon: "👔",
        color: "bg-indigo-100",
        benefits: [
          "Wrongful acts",
          "Regulatory probes",
          "Employment practices",
          "Entity cover",
        ],
        priceIndicator: "high",
      },
      {
        id: "ip-insurance",
        name: "IP Dispute Cover",
        tagline: "Legal defense and enforcement for IP rights",
        icon: "💡",
        color: "bg-amber-100",
        benefits: [
          "Patent defense",
          "Copyright disputes",
          "Trade secret",
          "Pursuit cover",
        ],
        priceIndicator: "high",
      },
    ],
  },
  retail: {
    name: "Retail & Trade",
    icon: "🛒",
    gradient: "from-[#0A1A05] via-[#1A5C10] to-[#2A8C1A]",
    intro:
      "Retail businesses face constant threats from fire, theft, customer claims, and stock loss. Our retail insurance solutions keep your shop, stock, and customers protected.",
    risks: [
      {
        icon: "🔥",
        name: "Fire & Perils",
        impact: "Loss of premises, stock, and revenue",
        severity: "high",
      },
      {
        icon: "🔒",
        name: "Theft & Burglary",
        impact: "Stock loss, cash theft, equipment damage",
        severity: "high",
      },
      {
        icon: "🤕",
        name: "Customer Injuries",
        impact: "Slip and fall claims, product liability",
        severity: "medium",
      },
      {
        icon: "📦",
        name: "Stock Spoilage",
        impact: "Refrigeration failure, power outages",
        severity: "medium",
      },
      {
        icon: "💰",
        name: "Cash Loss",
        impact: "Robbery, employee fraud",
        severity: "medium",
      },
    ],
    products: [
      {
        id: "fire-insurance",
        name: "Fire & Perils Insurance",
        tagline: "Building and contents against fire and disasters",
        icon: "🔥",
        color: "bg-orange-100",
        benefits: [
          "Fire damage",
          "Flood cover",
          "Storm damage",
          "Explosion cover",
        ],
        priceIndicator: "low",
        popular: true,
      },
      {
        id: "burglary-insurance",
        name: "Burglary & Theft",
        tagline: "Stock, cash, and equipment against break-ins",
        icon: "🔒",
        color: "bg-slate-100",
        benefits: [
          "Break-in theft",
          "Shop front damage",
          "Cash safe",
          "After-hours cover",
        ],
        priceIndicator: "low",
      },
      {
        id: "public-liability",
        name: "Public Liability",
        tagline: "Customer injury and property damage claims",
        icon: "🏪",
        color: "bg-blue-100",
        benefits: [
          "Slip & fall",
          "Product liability",
          "Property damage",
          "Legal defense",
        ],
        priceIndicator: "low",
      },
      {
        id: "money-insurance",
        name: "Money Insurance",
        tagline: "Cash on premises and in transit",
        icon: "💵",
        color: "bg-emerald-100",
        benefits: [
          "Till cash",
          "Cash in transit",
          "Petty cash box",
          "Night safe deposit",
        ],
        priceIndicator: "low",
      },
    ],
  },
  sme: {
    name: "SMEs & Informal Sector",
    icon: "🛍️",
    gradient: "from-[#1A1000] via-[#5C4000] to-[#A07010]",
    intro:
      "Small and medium businesses deserve big protection at small prices. Our SME package is Kenya's most affordable all-in-one business cover.",
    risks: [
      {
        icon: "🔥",
        name: "Fire & Theft",
        impact: "Complete loss of business assets overnight",
        severity: "high",
      },
      {
        icon: "💰",
        name: "Cash Robbery",
        impact: "Loss of till money and day's takings",
        severity: "high",
      },
      {
        icon: "🤕",
        name: "Employee Illness",
        impact: "Lost productivity, medical costs",
        severity: "medium",
      },
      {
        icon: "📉",
        name: "Business Closure",
        impact: "Revenue loss during forced shutdown",
        severity: "medium",
      },
      {
        icon: "⚖️",
        name: "Customer Claims",
        impact: "Liability from customers on premises",
        severity: "low",
      },
    ],
    products: [
      {
        id: "sme-package",
        name: "SME All-in-One Package",
        tagline: "Fire, theft, liability & WIBA in one policy",
        icon: "🛍️",
        color: "bg-yellow-100",
        benefits: [
          "Fire & burglary",
          "WIBA included",
          "Public liability",
          "Money cover",
        ],
        priceIndicator: "low",
        popular: true,
      },
      {
        id: "micro-medical",
        name: "Micro Medical Cover",
        tagline: "Affordable health cover for you and your staff",
        icon: "🩺",
        color: "bg-red-100",
        benefits: [
          "Basic inpatient",
          "Clinic access",
          "Low premium",
          "No medical exam",
        ],
        priceIndicator: "low",
      },
      {
        id: "money-insurance",
        name: "Money Insurance",
        tagline: "Cash protection for small business owners",
        icon: "💰",
        color: "bg-emerald-100",
        benefits: [
          "Till cash",
          "Cash in transit",
          "Instant claims",
          "Very affordable",
        ],
        priceIndicator: "low",
      },
      {
        id: "wiba",
        name: "WIBA Cover",
        tagline: "Worker injury cover as required by law",
        icon: "⚕️",
        color: "bg-blue-100",
        benefits: [
          "Work injuries",
          "Death benefit",
          "Legal compliance",
          "Simple issuance",
        ],
        priceIndicator: "low",
      },
    ],
  },
};

const severityConfig = {
  high: {
    label: "High Risk",
    color: "bg-red-100 text-red-700 border border-red-200",
  },
  medium: {
    label: "Medium Risk",
    color: "bg-amber-100 text-amber-700 border border-amber-200",
  },
  low: {
    label: "Low Risk",
    color: "bg-emerald-100 text-emerald-700 border border-emerald-200",
  },
};

const IndustryDetail = () => {
  const { name } = useParams<{ name: string }>();
  const data = name ? industryData[name] : null;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-5xl mb-4">🏭</p>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Industry not found
          </h2>
          <Link to="/industry" className="text-blue-600 hover:underline">
            Back to Industries
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHero
        title={`Insurance for ${data.name}`}
        subtitle={data.intro}
        breadcrumbs={[
          { label: "Industries", href: "/industry" },
          { label: data.name },
        ]}
        badge="Industry Solutions"
        gradient={data.gradient}
        ctaLabel="Get Industry Quote"
        ctaHref="/quote"
      />

      {/* Risk Dashboard */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Industry Risk Dashboard
              </h2>
              <p className="text-slate-500 text-sm">
                Top risks in {data.name} and how they can impact your business
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.risks.map((risk) => {
              const sev = severityConfig[risk.severity];
              return (
                <div
                  key={risk.name}
                  className="bg-white rounded-2xl border border-slate-200 p-5"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{risk.icon}</span>
                      <h3 className="font-bold text-slate-900 text-sm">
                        {risk.name}
                      </h3>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${sev.color}`}
                    >
                      {sev.label}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm">{risk.impact}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Recommended Solutions for {data.name}
          </h2>
          <p className="text-slate-500 mb-10">
            Insurance products specifically suited to your industry's risk
            profile
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Compliance note */}
      {data.compliance && (
        <section className="py-8 bg-amber-50 border-y border-amber-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg
                  className="w-4 h-4 text-amber-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-amber-900 text-sm mb-1">
                  Regulatory Compliance Note
                </p>
                <p className="text-amber-800 text-sm">{data.compliance}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Get a tailored {data.name} insurance package
          </h3>
          <p className="text-slate-500 mb-8">
            Our industry specialists will put together the right coverage at the
            best price.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/quote"
              className="px-8 py-3.5 bg-[#1B4FD8] text-white font-semibold rounded-xl hover:bg-[#1740B8] transition-colors shadow-lg shadow-blue-500/20"
            >
              Get Industry Quote
            </Link>
            <Link
              to="/appointment"
              className="px-8 py-3.5 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-blue-300 hover:text-blue-700 transition-colors"
            >
              Book a Risk Review
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetail;
