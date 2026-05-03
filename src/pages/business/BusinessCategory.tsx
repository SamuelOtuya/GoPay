import { useParams, Link } from "react-router-dom";
import PageHero from "../../components/shared/PageHero";
import ProductCard from "../../components/shared/ProductCard";

const categoryData: Record<
  string,
  {
    title: string;
    subtitle: string;
    icon: string;
    gradient: string;
    riskDetails: { title: string; desc: string }[];
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
  }
> = {
  assets: {
    title: "Asset & Property Insurance",
    subtitle:
      "Protect your physical assets — buildings, equipment, machinery, and stock from fire, theft, floods, and unexpected damage.",
    icon: "🏗️",
    gradient: "from-[#1A0A00] via-[#5C2A00] to-[#C05A00]",
    riskDetails: [
      {
        title: "What can go wrong?",
        desc: "Fire, flooding, break-ins, vandalism, and equipment breakdown can devastate business operations in minutes.",
      },
      {
        title: "Real world examples",
        desc: "A Nairobi warehouse fire cost KES 12M. A flood at a Mombasa store resulted in KES 4M stock loss.",
      },
      {
        title: "Recommended solutions",
        desc: "Fire insurance, burglary cover, all risks policy, and machinery breakdown cover.",
      },
    ],
    products: [
      {
        id: "fire-insurance",
        name: "Fire & Perils Insurance",
        tagline: "Building and contents against fire, lightning, explosion",
        icon: "🔥",
        color: "bg-orange-100",
        benefits: [
          "Fire damage",
          "Lightning strikes",
          "Explosion cover",
          "Riot & strike optional",
        ],
        priceIndicator: "low",
        popular: true,
      },
      {
        id: "burglary-insurance",
        name: "Burglary & Theft",
        tagline: "Cash, stock, and equipment against break-ins",
        icon: "🔒",
        color: "bg-slate-100",
        benefits: [
          "Forced entry theft",
          "Malicious damage",
          "Cashbox cover",
          "Stock in trade",
        ],
        priceIndicator: "low",
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
          "Portable equipment",
        ],
        priceIndicator: "medium",
      },
      {
        id: "machinery-breakdown",
        name: "Machinery Breakdown",
        tagline: "Repair costs and business loss from equipment failure",
        icon: "⚙️",
        color: "bg-yellow-100",
        benefits: [
          "Mechanical failure",
          "Electrical breakdown",
          "Boiler explosion",
          "Loss of profits optional",
        ],
        priceIndicator: "medium",
      },
    ],
  },
  money: {
    title: "Money & Revenue Protection",
    subtitle:
      "Protect your cash flow, revenue, and business income from theft, fraud, and unexpected disruptions.",
    icon: "💰",
    gradient: "from-[#0A1A05] via-[#1A5C10] to-[#2A8C1A]",
    riskDetails: [
      {
        title: "What can go wrong?",
        desc: "Staff fraud, cash in transit theft, ransomware, and sudden business closure can wipe out months of revenue overnight.",
      },
      {
        title: "Real world examples",
        desc: "A Nairobi retailer lost KES 800K to employee fraud. A factory closed 3 months after a fire, losing KES 6M in revenue.",
      },
      {
        title: "Recommended solutions",
        desc: "Money insurance, fidelity guarantee, and business interruption cover.",
      },
    ],
    products: [
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
          "Personal accident optional",
        ],
        priceIndicator: "low",
        popular: true,
      },
      {
        id: "business-interruption",
        name: "Business Interruption",
        tagline: "Ongoing revenue cover during forced closure",
        icon: "📉",
        color: "bg-red-100",
        benefits: [
          "Loss of gross profit",
          "Fixed cost cover",
          "Increased cost of working",
          "Auditors fees cover",
        ],
        priceIndicator: "medium",
      },
      {
        id: "fidelity-guarantee",
        name: "Fidelity Guarantee",
        tagline: "Cover for employee dishonesty and fraud",
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
        id: "trade-credit",
        name: "Trade Credit Insurance",
        tagline: "Protect against non-payment by debtors",
        icon: "📊",
        color: "bg-blue-100",
        benefits: [
          "Debtor insolvency",
          "Protracted default",
          "Political risk optional",
          "Whole turnover cover",
        ],
        priceIndicator: "high",
      },
    ],
  },
  employees: {
    title: "Employee Benefits & Protection",
    subtitle:
      "Attract, retain, and protect your most valuable asset — your people — with comprehensive employee benefits.",
    icon: "👥",
    gradient: "from-[#0A1628] via-[#0F2D6B] to-[#1B4FD8]",
    riskDetails: [
      {
        title: "What can go wrong?",
        desc: "Work injuries, illness, and employee deaths expose businesses to massive legal liabilities and talent loss.",
      },
      {
        title: "Real world examples",
        desc: "A construction firm paid KES 2.3M in WIBA claims after inadequate cover. A tech firm lost 3 senior staff to competitors offering better medical benefits.",
      },
      {
        title: "Recommended solutions",
        desc: "Group medical, WIBA, group life, and group personal accident insurance.",
      },
    ],
    products: [
      {
        id: "group-medical",
        name: "Group Medical Cover",
        tagline: "Comprehensive health benefits for your entire team",
        icon: "🏥",
        color: "bg-blue-100",
        benefits: [
          "Inpatient cover",
          "Outpatient & pharmacy",
          "Dental & optical options",
          "Maternity benefit",
        ],
        priceIndicator: "medium",
        popular: true,
      },
      {
        id: "wiba",
        name: "WIBA (Work Injury)",
        tagline: "Mandatory workers' compensation as per Kenyan law",
        icon: "⚕️",
        color: "bg-amber-100",
        benefits: [
          "Injury at work",
          "Occupational disease",
          "Death benefit",
          "Temporary disability",
        ],
        priceIndicator: "low",
      },
      {
        id: "group-life",
        name: "Group Life Insurance",
        tagline: "Death-in-service benefit for employee families",
        icon: "🕊️",
        color: "bg-slate-100",
        benefits: [
          "Death benefit lump sum",
          "Last expense benefit",
          "Total permanent disability",
          "Critical illness rider",
        ],
        priceIndicator: "low",
      },
      {
        id: "group-pa",
        name: "Group Personal Accident",
        tagline: "24-hour accident cover for all employees",
        icon: "🦺",
        color: "bg-orange-100",
        benefits: [
          "Accidental death",
          "Permanent disability",
          "Medical reimbursement",
          "Hospital cash allowance",
        ],
        priceIndicator: "low",
      },
    ],
  },
  liability: {
    title: "Liability Insurance",
    subtitle:
      "Protect your business from legal claims arising from third-party injuries, property damage, and professional errors.",
    icon: "⚖️",
    gradient: "from-[#1A0505] via-[#5C0A0A] to-[#8C1A1A]",
    riskDetails: [
      {
        title: "What can go wrong?",
        desc: "A slip in your premises, a faulty product, or a professional mistake can lead to multi-million shilling court judgments.",
      },
      {
        title: "Real world examples",
        desc: "A supermarket faced a KES 5M lawsuit after a customer slipped on a wet floor. A consulting firm was sued KES 8M for a software project failure.",
      },
      {
        title: "Recommended solutions",
        desc: "Public liability, professional indemnity, product liability, and directors & officers cover.",
      },
    ],
    products: [
      {
        id: "public-liability",
        name: "Public Liability",
        tagline: "Third-party injury or property damage claims",
        icon: "🏢",
        color: "bg-red-100",
        benefits: [
          "Bodily injury claims",
          "Property damage",
          "Legal defense costs",
          "Personal injury",
        ],
        priceIndicator: "low",
        popular: true,
      },
      {
        id: "professional-indemnity",
        name: "Professional Indemnity",
        tagline: "Claims from professional errors and omissions",
        icon: "📋",
        color: "bg-blue-100",
        benefits: [
          "Negligence claims",
          "Error & omission",
          "Breach of duty",
          "Legal defense costs",
        ],
        priceIndicator: "medium",
      },
      {
        id: "product-liability",
        name: "Product Liability",
        tagline: "Claims arising from defective products you supply",
        icon: "📦",
        color: "bg-orange-100",
        benefits: [
          "Product defect injury",
          "Recall costs optional",
          "Property damage",
          "Worldwide cover options",
        ],
        priceIndicator: "medium",
      },
      {
        id: "directors-officers",
        name: "Directors & Officers",
        tagline: "Personal liability protection for company directors",
        icon: "👔",
        color: "bg-purple-100",
        benefits: [
          "Wrongful acts cover",
          "Regulatory investigations",
          "Employment practices",
          "Outside directorship",
        ],
        priceIndicator: "high",
      },
    ],
  },
  cyber: {
    title: "Cyber Insurance",
    subtitle:
      "In a connected world, digital threats are real business risks. Protect your data, systems, and reputation from cyberattacks.",
    icon: "🔐",
    gradient: "from-[#05001A] via-[#1A0A5C] to-[#2D1A8C]",
    riskDetails: [
      {
        title: "What can go wrong?",
        desc: "Ransomware can lock your entire system. Data breaches expose client information. Business email compromise leads to massive financial fraud.",
      },
      {
        title: "Real world examples",
        desc: "A Kenyan bank lost KES 30M in a BEC attack. A healthcare firm paid KES 5M ransom to recover patient records.",
      },
      {
        title: "Recommended solutions",
        desc: "Cyber liability insurance and professional indemnity with cyber extension.",
      },
    ],
    products: [
      {
        id: "cyber-liability",
        name: "Cyber Liability Insurance",
        tagline: "End-to-end cyber risk protection for your business",
        icon: "🔐",
        color: "bg-violet-100",
        benefits: [
          "Data breach response",
          "Ransomware payments",
          "Business interruption",
          "Cyber extortion cover",
        ],
        priceIndicator: "medium",
        popular: true,
      },
      {
        id: "data-breach",
        name: "Data Breach Cover",
        tagline: "Legal and notification costs after a data breach",
        icon: "📂",
        color: "bg-blue-100",
        benefits: [
          "Breach notification costs",
          "Credit monitoring",
          "PR & crisis management",
          "Regulatory fines optional",
        ],
        priceIndicator: "medium",
      },
      {
        id: "bec-cover",
        name: "Business Email Compromise",
        tagline: "Financial fraud via email interception",
        icon: "📧",
        color: "bg-red-100",
        benefits: [
          "Fraudulent wire transfers",
          "Social engineering",
          "Invoice manipulation",
          "Vendor fraud",
        ],
        priceIndicator: "medium",
      },
      {
        id: "cyber-pi",
        name: "Cyber + PI Bundle",
        tagline: "Combined cyber and professional indemnity protection",
        icon: "🛡️",
        color: "bg-indigo-100",
        benefits: [
          "Technology errors",
          "Cyber liability combined",
          "Intellectual property",
          "Network security failure",
        ],
        priceIndicator: "high",
      },
    ],
  },
  transport: {
    title: "Transport & Fleet Insurance",
    subtitle:
      "Comprehensive cover for your vehicles, fleet, cargo, and goods in transit across Kenya and beyond.",
    icon: "🚛",
    gradient: "from-[#001A1A] via-[#0A4A5C] to-[#0F7A8C]",
    riskDetails: [
      {
        title: "What can go wrong?",
        desc: "Road accidents, cargo theft, vehicle breakdowns, and third-party claims can cost businesses millions and disrupt supply chains.",
      },
      {
        title: "Real world examples",
        desc: "A transport company lost KES 4M in cargo theft on the Nairobi-Mombasa highway. A logistics firm paid KES 2M in third-party claims after a road accident.",
      },
      {
        title: "Recommended solutions",
        desc: "Motor fleet, goods in transit, marine cargo, and passenger liability insurance.",
      },
    ],
    products: [
      {
        id: "motor-fleet",
        name: "Motor Fleet Insurance",
        tagline: "All your business vehicles under one comprehensive policy",
        icon: "🚗",
        color: "bg-sky-100",
        benefits: [
          "Own damage cover",
          "Third-party liability",
          "Windscreen & radio",
          "24hr emergency assist",
        ],
        priceIndicator: "medium",
        popular: true,
      },
      {
        id: "goods-in-transit",
        name: "Goods in Transit",
        tagline: "Stock and cargo coverage while on the move",
        icon: "📦",
        color: "bg-amber-100",
        benefits: [
          "Theft & hijacking",
          "Accidental damage",
          "Loading & unloading",
          "Nationwide cover",
        ],
        priceIndicator: "low",
      },
      {
        id: "marine-cargo",
        name: "Marine Cargo",
        tagline: "Import and export goods via sea, air, or road",
        icon: "🚢",
        color: "bg-blue-100",
        benefits: [
          "Sea freight cover",
          "Air cargo cover",
          "Import/export",
          "All risks or named perils",
        ],
        priceIndicator: "medium",
      },
      {
        id: "passenger-liability",
        name: "Passenger Liability",
        tagline: "Legal liability to passengers in your vehicles",
        icon: "🧍",
        color: "bg-emerald-100",
        benefits: [
          "Passenger injury claims",
          "Death benefit",
          "PSV compliance",
          "Matatu & bus cover",
        ],
        priceIndicator: "low",
      },
    ],
  },
};

const BusinessCategory = () => {
  const { category } = useParams<{ category: string }>();
  const data = category ? categoryData[category] : null;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-5xl mb-4">🔍</p>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Category not found
          </h2>
          <Link to="/business" className="text-blue-600 hover:underline">
            Back to Business Insurance
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHero
        title={data.title}
        subtitle={data.subtitle}
        breadcrumbs={[
          { label: "Business", href: "/business" },
          { label: data.title },
        ]}
        badge="Business Insurance"
        gradient={data.gradient}
        ctaLabel="Get a Quote"
        ctaHref="/quote"
      />

      {/* Risk Details */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {data.riskDetails.map((r, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200 p-6"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold text-sm">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{r.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Recommended Products
          </h2>
          <p className="text-slate-500 mb-10">
            Click any product to view full details, coverage, and pricing
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Protect your business today
          </h3>
          <p className="text-slate-500 mb-8">
            Our business advisors will help you build the right cover package at
            the right price.
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
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessCategory;
