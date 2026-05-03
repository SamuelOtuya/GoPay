import { useParams, Link } from "react-router-dom";
import PageHero from "../../components/shared/PageHero";
import ProductCard from "../../components/shared/ProductCard";

const riskData: Record<
  string,
  {
    name: string;
    icon: string;
    gradient: string;
    whatIsIt: string;
    howItImpacts: string;
    realLifeExamples: string[];
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
    bundles?: string[];
    keyBenefits?: string[];
  }
> = {
  "fire-property": {
    name: "Fire & Property Loss",
    icon: "🔥",
    gradient: "from-[#1A0500] via-[#5C1A00] to-[#A03000]",
    whatIsIt:
      "Fire and property risk covers losses caused by fire, lightning, explosion, flooding, storms, earthquakes, and other natural or accidental perils that destroy or damage physical assets.",
    howItImpacts:
      "A single fire can destroy an entire business — buildings, equipment, stock, and records. Without insurance, most businesses cannot recover. The financial impact includes not just repair costs but lost revenue during closure.",
    realLifeExamples: [
      "A Nairobi warehouse fire destroyed KES 18M worth of inventory and caused 4 months of business closure.",
      "A flooding incident in Kisumu wiped out 3 retail units, costing tenants over KES 6M in uninsured losses.",
      "An electrical fault at a factory caused a KES 9M fire — fully recovered through a fire insurance payout within 60 days.",
    ],
    products: [
      {
        id: "fire-insurance",
        name: "Fire & Perils Insurance",
        tagline: "Buildings and contents against fire and disaster",
        icon: "🔥",
        color: "bg-orange-100",
        benefits: [
          "Fire damage",
          "Lightning & explosion",
          "Storm & flood optional",
          "Riot & strike optional",
        ],
        priceIndicator: "low",
        popular: true,
      },
      {
        id: "all-risks",
        name: "All Risks Policy",
        tagline: "Comprehensive cover for all unforeseen losses",
        icon: "🛡️",
        color: "bg-blue-100",
        benefits: [
          "Accidental damage",
          "Theft in transit",
          "Electronic equipment",
          "Portable items",
        ],
        priceIndicator: "medium",
      },
      {
        id: "business-interruption",
        name: "Business Interruption",
        tagline: "Revenue and fixed costs covered during forced closure",
        icon: "📉",
        color: "bg-red-100",
        benefits: [
          "Gross profit replacement",
          "Fixed cost cover",
          "Extended indemnity",
          "Auditors fees",
        ],
        priceIndicator: "medium",
      },
      {
        id: "home-contents",
        name: "Home & Contents",
        tagline: "Residential property and contents protection",
        icon: "🏠",
        color: "bg-emerald-100",
        benefits: [
          "Building structure",
          "Contents & valuables",
          "All perils cover",
          "Domestic staff liability",
        ],
        priceIndicator: "low",
      },
    ],
    bundles: [
      "Fire + Business Interruption (Business Combo)",
      "Fire + Burglary + Public Liability (SME Package)",
    ],
    keyBenefits: [
      "Fast claims settlement",
      "Reinstatement value basis",
      "Professional loss assessment",
      "24/7 emergency response",
    ],
  },
  "theft-burglary": {
    name: "Theft & Burglary",
    icon: "🔓",
    gradient: "from-[#0A0A00] via-[#3A3000] to-[#6A5500]",
    whatIsIt:
      "Theft and burglary risk covers losses resulting from forced entry, employee dishonesty, cash robbery, and other forms of criminal activity targeting your property, cash, or stock.",
    howItImpacts:
      "Theft doesn't just cost money — it disrupts operations, damages premises, and erodes staff morale. Cash theft can cause immediate cash flow crises, while stock theft affects delivery commitments to customers.",
    realLifeExamples: [
      "A Westlands electronics shop lost KES 2.5M in stock during a break-in — fully recovered through burglary insurance.",
      "A logistics company discovered employee fraud of KES 1.8M over 6 months, covered through a fidelity guarantee policy.",
      "A supermarket cash office was robbed of KES 450K in a night robbery — money insurance covered the loss within 2 weeks.",
    ],
    products: [
      {
        id: "burglary-insurance",
        name: "Burglary & Theft",
        tagline: "Stock, cash, and equipment against break-ins",
        icon: "🔒",
        color: "bg-slate-100",
        benefits: [
          "Forced entry theft",
          "Malicious damage",
          "Stock in trade",
          "CCTV & security discount",
        ],
        priceIndicator: "low",
        popular: true,
      },
      {
        id: "money-insurance",
        name: "Money Insurance",
        tagline: "Cash on premises, in transit, and in safes",
        icon: "💵",
        color: "bg-emerald-100",
        benefits: [
          "Cash on premises",
          "Money in transit",
          "ATM & safe cover",
          "Night safe deposit",
        ],
        priceIndicator: "low",
      },
      {
        id: "fidelity-guarantee",
        name: "Fidelity Guarantee",
        tagline: "Employee dishonesty and internal fraud",
        icon: "🔍",
        color: "bg-purple-100",
        benefits: [
          "Employee theft",
          "Fraud & forgery",
          "Computer fraud",
          "Named or blanket cover",
        ],
        priceIndicator: "medium",
      },
      {
        id: "all-risks",
        name: "All Risks Policy",
        tagline: "Broader cover including theft during transit",
        icon: "🛡️",
        color: "bg-blue-100",
        benefits: [
          "Theft in transit",
          "Accidental damage",
          "Electronic items",
          "Portable equipment",
        ],
        priceIndicator: "medium",
      },
    ],
    bundles: [
      "Burglary + Money + Fire (SME Package)",
      "Burglary + Fidelity Guarantee (Business Combo)",
    ],
    keyBenefits: [
      "Cash replacement within 48 hours",
      "Stock replacement at market value",
      "Professional claims handlers",
      "No forced entry evidence required for certain covers",
    ],
  },
  cyber: {
    name: "Cyber Risk",
    icon: "💻",
    gradient: "from-[#05001A] via-[#1A0A5C] to-[#2D1A8C]",
    whatIsIt:
      "Cyber risk includes ransomware attacks, data breaches, phishing, business email compromise (BEC), and other digital threats that compromise your business data, systems, finances, and reputation.",
    howItImpacts:
      "A cyberattack can shut down your entire business operations. Data breaches expose client information leading to lawsuits and regulatory fines. BEC fraud can wire-transfer your company's funds to criminals in seconds.",
    realLifeExamples: [
      "A Kenyan accounting firm's systems were encrypted by ransomware, with attackers demanding KES 3M. Cyber insurance covered the ransom and recovery costs.",
      "A healthcare provider suffered a patient data breach affecting 12,000 records. Breach notification and legal costs came to KES 4.5M.",
      "A manufacturing company's CFO email was compromised and KES 7M fraudulently wired. BEC cover recovered the funds.",
    ],
    products: [
      {
        id: "cyber-liability",
        name: "Cyber Liability Insurance",
        tagline: "End-to-end protection from all digital threats",
        icon: "🔐",
        color: "bg-violet-100",
        benefits: [
          "Ransomware & extortion",
          "Data breach response",
          "Business interruption",
          "Forensic investigation",
        ],
        priceIndicator: "medium",
        popular: true,
      },
      {
        id: "data-breach",
        name: "Data Breach Cover",
        tagline: "Regulatory and notification costs after a breach",
        icon: "📂",
        color: "bg-blue-100",
        benefits: [
          "Breach notifications",
          "Credit monitoring",
          "PR & crisis mgmt",
          "Regulatory fines",
        ],
        priceIndicator: "medium",
      },
      {
        id: "bec-cover",
        name: "Business Email Compromise",
        tagline: "Social engineering and wire fraud protection",
        icon: "📧",
        color: "bg-red-100",
        benefits: [
          "Fraudulent transfers",
          "Social engineering",
          "Invoice manipulation",
          "Vendor fraud",
        ],
        priceIndicator: "medium",
      },
      {
        id: "cyber-pi",
        name: "Cyber + PI Bundle",
        tagline: "Technology errors and cyber liability combined",
        icon: "🛡️",
        color: "bg-indigo-100",
        benefits: [
          "Tech errors & omissions",
          "Cyber liability combined",
          "Network security failure",
          "IP cover optional",
        ],
        priceIndicator: "high",
      },
    ],
    bundles: [
      "Cyber + Professional Indemnity (Tech Bundle)",
      "Cyber + D&O (Corporate Bundle)",
    ],
    keyBenefits: [
      "24/7 cyber incident response team",
      "Forensic investigators on retainer",
      "Ransom negotiation support",
      "Post-breach PR management",
    ],
  },
  employee: {
    name: "Employee Risk",
    icon: "👷",
    gradient: "from-[#0A1628] via-[#0F2D6B] to-[#1B4FD8]",
    whatIsIt:
      "Employee risk covers work-related injuries, occupational diseases, death in service, and the financial impact of key staff loss on your business operations and legal compliance.",
    howItImpacts:
      "Kenya's Work Injury Benefits Act (WIBA) makes employer liability for work injuries a legal requirement. Beyond compliance, losing a key employee or having multiple staff ill simultaneously can cripple productivity and revenue.",
    realLifeExamples: [
      "A construction company faced a KES 3.2M WIBA claim after a worker fell from scaffolding. The company had inadequate cover and paid out of pocket.",
      "A Nairobi tech firm lost its lead developer to illness — key person insurance paid KES 5M to cover recruitment and lost contracts.",
      "A manufacturing plant with 200 workers enrolled in group medical saw sick days drop by 30% after comprehensive medical cover was introduced.",
    ],
    products: [
      {
        id: "wiba",
        name: "WIBA (Work Injury)",
        tagline: "Mandatory workers' compensation as required by law",
        icon: "⚕️",
        color: "bg-amber-100",
        benefits: [
          "Work injury cover",
          "Death benefit",
          "Occupational disease",
          "Temporary disability",
        ],
        priceIndicator: "low",
        popular: true,
      },
      {
        id: "group-medical",
        name: "Group Medical Cover",
        tagline: "Comprehensive health benefits for your team",
        icon: "🏥",
        color: "bg-blue-100",
        benefits: [
          "Inpatient cover",
          "Outpatient & pharmacy",
          "Maternity benefit",
          "Dental & optical options",
        ],
        priceIndicator: "medium",
      },
      {
        id: "group-life",
        name: "Group Life Insurance",
        tagline: "Death-in-service benefit for employee families",
        icon: "🕊️",
        color: "bg-slate-100",
        benefits: [
          "Death benefit lump sum",
          "Permanent disability",
          "Last expense cover",
          "Critical illness optional",
        ],
        priceIndicator: "low",
      },
      {
        id: "key-person",
        name: "Key Person Insurance",
        tagline: "Protect the business when a critical person is lost",
        icon: "🔑",
        color: "bg-orange-100",
        benefits: [
          "Revenue loss cover",
          "Recruitment costs",
          "Shareholder protection",
          "Business continuity",
        ],
        priceIndicator: "high",
      },
    ],
    bundles: [
      "WIBA + Group Medical + Group Life (Employee Benefits Bundle)",
      "Group Medical + Key Person (SME Staff Package)",
    ],
    keyBenefits: [
      "WIBA compliance certificate",
      "Cashless hospital access",
      "24hr medical helpline",
      "Employee wellness programmes",
    ],
  },
  liability: {
    name: "Liability Risk",
    icon: "⚖️",
    gradient: "from-[#1A0505] via-[#5C0A0A] to-[#8C1A1A]",
    whatIsIt:
      "Liability risk refers to your legal obligation to compensate third parties — customers, suppliers, members of the public — for bodily injury, property damage, or financial loss caused by your business operations, products, or professional services.",
    howItImpacts:
      "Court judgments in Kenya can run into tens of millions of shillings. Without liability cover, a single customer slip-and-fall or a professional error in advice can bankrupt an otherwise healthy business.",
    realLifeExamples: [
      "A Nairobi hotel was sued KES 4.5M after a guest slipped on a wet floor near the pool and sustained a serious back injury.",
      "A financial advisory firm was sued KES 8M by a client who lost money following negligent investment advice.",
      "A pharmaceutical distributor faced a KES 12M product liability claim after a faulty batch caused adverse reactions in patients.",
    ],
    products: [
      {
        id: "public-liability",
        name: "Public Liability",
        tagline: "Third-party injury and property damage claims",
        icon: "🏢",
        color: "bg-red-100",
        benefits: [
          "Bodily injury claims",
          "Property damage",
          "Legal defense costs",
          "Personal injury cover",
        ],
        priceIndicator: "low",
        popular: true,
      },
      {
        id: "professional-indemnity",
        name: "Professional Indemnity",
        tagline: "Errors, omissions, and negligence in your service",
        icon: "📋",
        color: "bg-blue-100",
        benefits: [
          "Negligence claims",
          "Error & omission",
          "Breach of duty",
          "Legal defense",
        ],
        priceIndicator: "medium",
      },
      {
        id: "product-liability",
        name: "Product Liability",
        tagline: "Claims from defective products you supply or manufacture",
        icon: "📦",
        color: "bg-orange-100",
        benefits: [
          "Product defect injury",
          "Property damage",
          "Legal defense",
          "Worldwide cover options",
        ],
        priceIndicator: "medium",
      },
      {
        id: "directors-officers",
        name: "Directors & Officers",
        tagline: "Personal liability for directors and senior management",
        icon: "👔",
        color: "bg-purple-100",
        benefits: [
          "Wrongful acts cover",
          "Regulatory investigations",
          "Employment practices",
          "Entity protection",
        ],
        priceIndicator: "high",
      },
    ],
    bundles: [
      "Public Liability + Fire + Burglary (SME Package)",
      "PI + Cyber (Professional Services Bundle)",
    ],
    keyBenefits: [
      "Worldwide jurisdiction options",
      "Legal defense fully covered",
      "Expert witness fees",
      "Crisis communication support",
    ],
  },
  transport: {
    name: "Transport Risk",
    icon: "🚛",
    gradient: "from-[#001A2A] via-[#003D5C] to-[#0A7A8C]",
    whatIsIt:
      "Transport risk includes road accidents, vehicle theft, cargo loss in transit, passenger injuries, and legal liability to third parties arising from the use of commercial vehicles.",
    howItImpacts:
      "Kenya's roads are among the most dangerous in the region. A single serious accident can total a fleet vehicle, result in passenger deaths, and expose an operator to multi-million shilling legal claims — all while operations are halted.",
    realLifeExamples: [
      "A matatu operator faced a KES 6M passenger liability claim after an accident injured 8 passengers. Insurance covered the claims in full.",
      "A logistics company's truck was hijacked on the Nairobi-Mombasa highway, losing KES 3.5M in cargo. Goods in transit insurance recovered the loss.",
      "A company car involved in an accident caused KES 800K in third-party vehicle damage — covered by motor insurance.",
    ],
    products: [
      {
        id: "motor-fleet",
        name: "Motor Fleet Insurance",
        tagline: "Comprehensive cover for all your business vehicles",
        icon: "🚗",
        color: "bg-sky-100",
        benefits: [
          "Own damage",
          "Third-party liability",
          "Windscreen cover",
          "24hr emergency assist",
        ],
        priceIndicator: "medium",
        popular: true,
      },
      {
        id: "goods-in-transit",
        name: "Goods in Transit",
        tagline: "Cargo and stock covered while on the road",
        icon: "📦",
        color: "bg-amber-100",
        benefits: [
          "Theft & hijacking",
          "Accidental damage",
          "Loading & unloading",
          "Nationwide routes",
        ],
        priceIndicator: "low",
      },
      {
        id: "marine-cargo",
        name: "Marine Cargo",
        tagline: "International shipments by sea, air, or multimodal",
        icon: "🚢",
        color: "bg-blue-100",
        benefits: [
          "Sea & air freight",
          "Import/export goods",
          "Multimodal cover",
          "All risks or named perils",
        ],
        priceIndicator: "medium",
      },
      {
        id: "passenger-liability",
        name: "Passenger Liability",
        tagline: "Legal liability for passengers in your vehicles",
        icon: "🧍",
        color: "bg-emerald-100",
        benefits: [
          "Passenger injury claims",
          "PSV compliance",
          "Death benefit",
          "Matatu & bus cover",
        ],
        priceIndicator: "low",
      },
    ],
    bundles: [
      "Motor Fleet + Goods in Transit (Logistics Bundle)",
      "Motor + WIBA for Drivers (Driver Protection Bundle)",
    ],
    keyBenefits: [
      "Nationwide claims centers",
      "24/7 accident helpline",
      "Recovery and towing included",
      "Replacement vehicle option",
    ],
  },
  financial: {
    name: "Financial Loss",
    icon: "📉",
    gradient: "from-[#0A1A05] via-[#1A5C10] to-[#2A8C1A]",
    whatIsIt:
      "Financial loss risk includes business interruption from disasters, bad debts from clients who can't pay, fraud losses, and revenue gaps caused by events outside your control.",
    howItImpacts:
      "Even with great products and services, a single disaster, client default, or forced closure can generate months of revenue loss. These losses compound — fixed costs continue even when income stops.",
    realLifeExamples: [
      "A restaurant forced to close for 3 months after a fire lost KES 4.5M in revenue. Business interruption insurance covered ongoing staff salaries and fixed costs.",
      "A supplier extended KES 2M trade credit to a retail chain that went bankrupt. Trade credit insurance recovered 80% of the loss.",
      "A tour company's revenue dropped 60% during an unexpected travel advisory. Revenue protection insurance bridged the gap.",
    ],
    products: [
      {
        id: "business-interruption",
        name: "Business Interruption",
        tagline: "Revenue and fixed costs during forced closure",
        icon: "📉",
        color: "bg-red-100",
        benefits: [
          "Gross profit replacement",
          "Fixed cost cover",
          "Staff salary cover",
          "Extended indemnity",
        ],
        priceIndicator: "medium",
        popular: true,
      },
      {
        id: "trade-credit",
        name: "Trade Credit Insurance",
        tagline: "Protect against client non-payment and insolvency",
        icon: "📊",
        color: "bg-blue-100",
        benefits: [
          "Buyer insolvency",
          "Protracted default",
          "Political risk option",
          "Whole turnover basis",
        ],
        priceIndicator: "high",
      },
      {
        id: "fidelity-guarantee",
        name: "Fidelity Guarantee",
        tagline: "Internal fraud and employee financial dishonesty",
        icon: "🔍",
        color: "bg-purple-100",
        benefits: [
          "Employee theft",
          "Fraud & forgery",
          "Computer fraud",
          "All employees cover",
        ],
        priceIndicator: "medium",
      },
      {
        id: "money-insurance",
        name: "Money Insurance",
        tagline: "Physical cash protection against robbery and theft",
        icon: "💵",
        color: "bg-emerald-100",
        benefits: [
          "Cash on premises",
          "Cash in transit",
          "Petty cash & safe",
          "Night banking cover",
        ],
        priceIndicator: "low",
      },
    ],
    bundles: [
      "Business Interruption + Fire (Core Business Bundle)",
      "Trade Credit + Business Interruption (Revenue Protection Bundle)",
    ],
    keyBenefits: [
      "Business continuity support",
      "Rapid claims processing",
      "Revenue replacement within 30 days",
      "Expert financial loss adjusters",
    ],
  },
};

const RiskDetail = () => {
  const { type } = useParams<{ type: string }>();
  const data = type ? riskData[type] : null;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-5xl mb-4">⚠️</p>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Risk type not found
          </h2>
          <Link to="/risk" className="text-blue-600 hover:underline">
            Back to Risk Guide
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHero
        title={data.name}
        subtitle="Understand the risk, its real-world impact, and the best insurance solutions to protect against it."
        breadcrumbs={[
          { label: "Risk Guide", href: "/risk" },
          { label: data.name },
        ]}
        badge="Risk Explanation"
        gradient={data.gradient}
        ctaLabel="Get Insurance Quote"
        ctaHref="/quote"
      />

      {/* Risk Explanation */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">{data.icon}</span>
                What is {data.name}?
              </h2>
              <p className="text-slate-600 leading-relaxed">{data.whatIsIt}</p>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">
                How can it impact you?
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {data.howItImpacts}
              </p>

              {data.keyBenefits && (
                <>
                  <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">
                    Key Benefits of Cover
                  </h2>
                  <ul className="space-y-2">
                    {data.keyBenefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-slate-600 text-sm"
                      >
                        <svg
                          className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Real-Life Examples in Kenya
              </h2>
              <div className="space-y-4">
                {data.realLifeExamples.map((example, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 border border-slate-200 rounded-2xl p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-700 font-bold text-xs">
                          {i + 1}
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {example}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {data.bundles && (
                <div className="mt-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span>📦</span> Recommended Bundles
                  </h3>
                  <ul className="space-y-2">
                    {data.bundles.map((bundle) => (
                      <li
                        key={bundle}
                        className="flex items-center gap-2 text-sm text-blue-800"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        {bundle}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/quote"
                    className="mt-4 w-full block text-center bg-[#1B4FD8] text-white font-semibold py-3 rounded-xl hover:bg-[#1740B8] transition-colors text-sm"
                  >
                    Get Bundle Quote
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Insurance Solutions
          </h2>
          <p className="text-slate-500 mb-10">
            Recommended products to protect against {data.name.toLowerCase()}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Ready to protect against this risk?
          </h3>
          <p className="text-slate-500 mb-8">
            Get a quote in minutes or speak to a specialist about the right
            cover for your situation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/quote"
              className="px-8 py-3.5 bg-[#1B4FD8] text-white font-semibold rounded-xl hover:bg-[#1740B8] transition-colors shadow-lg shadow-blue-500/20"
            >
              Get a Free Quote
            </Link>
            <Link
              to="/appointment"
              className="px-8 py-3.5 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-blue-300 hover:text-blue-700 transition-colors"
            >
              Book a Risk Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RiskDetail;
