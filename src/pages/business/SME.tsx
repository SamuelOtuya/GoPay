import {
  PageHero,
  WhyItMatters,
  WhatIsIt,
  RiskMap,
  CoverageTable,
  HowClaims,
  RiskAssessmentForm,
  FAQ,
  FinalCTA,
} from "../../components/insurance/InsurancePageComponents";

// ─── Section 2: Why SME Insurance Matters ────────────────────────────────────

const whyCards = [
  {
    img: "/images/sme-why-1.jpg",
    text: "Asset Protection\n\nBusiness risks are not limited to physical assets alone. Loss of cash, employee dishonesty, cyber risks, or unexpected financial liabilities can place serious strain on an SME's cash flow. Even temporary financial disruption can affect supplier payments, salaries, rent obligations, and overall operational stability. Business insurance helps reduce financial pressure during difficult moments by providing support that allows businesses to recover faster and maintain operational confidence.",
  },
  {
    img: "/images/sme-why-2.jpg",
    text: "Money & Financial Protection\n\nBusiness risks are not limited to physical assets alone. Loss of cash, employee dishonesty, cyber risks, or unexpected financial liabilities can place serious strain on an SME's cash flow. Even temporary financial disruption can affect supplier payments, salaries, rent obligations, and overall operational stability. Business insurance helps reduce financial pressure during difficult moments by providing support that allows businesses to recover faster and maintain operational confidence.",
  },
  {
    img: "/images/sme-why-3.jpg",
    text: "Business Continuity\n\nUnexpected events can force businesses to temporarily shut down, slow operations, or lose income during recovery periods. For many SMEs, even a few days of downtime can lead to lost customers, reduced revenue, and long-term operational challenges. Business Combined Insurance helps businesses remain resilient by supporting recovery after interruptions — helping owners focus on getting operations back on track with minimal disruption.",
  },
  {
    img: "/images/sme-why-4.jpg",
    text: "Staff & Liability Protection\n\nEmployees are one of the most important parts of any growing business. Workplace accidents, injuries, or liability claims can create financial and legal exposure for employers. Customers, suppliers, and third parties may also suffer injury or property damage while interacting with the business, leading to unexpected claims. Insurance helps SMEs manage these responsibilities by providing protection for staff welfare, employer obligations, and public liability exposures that arise during normal business operations.",
  },
];

// ─── Section 3: What Is SME Insurance ────────────────────────────────────────

const whatCards = [
  {
    img: "/images/sme-what-1.jpg",
    title: "Understanding Risks",
    text: "SMEs operate in environments where risks are interconnected and often unpredictable. A single event such as a fire or machinery breakdown can trigger multiple losses — damaged assets, halted operations, lost income, and even legal exposure. Other risks such as theft, employee injury, cash handling risks, and liability claims can also arise in day-to-day operations, making risk management essential for survival and continuity.",
  },
  {
    img: "/images/sme-what-2.jpg",
    title: "What Is Covered",
    text: "The policy typically integrates several core business insurance classes including Fire & Allied Perils, Business Interruption, Electronic Equipment, Machinery Breakdown, Machinery Breakdown Consequential Loss, Burglary, Plate Glass, Money Insurance, Fidelity Guarantee, Goods in Transit, Carriers Liability, Political Violence & Terrorism, Public Liability, WIBA, Employers Liability, and Keyman Insurance. These covers work together to ensure protection across property, people, income, and liability exposures.",
  },
  {
    img: "/images/sme-what-3.jpg",
    title: "Why It Matters in Everyday Life",
    text: "When a business is disrupted, the impact is immediate and far-reaching — operations slow down or stop, income is lost, employees are affected, and customer trust can be damaged. Recovery often requires significant financial resources and time. Business Combined Insurance helps bridge this gap by supporting recovery, reducing financial strain, and enabling SMEs to resume operations faster while maintaining stability for owners, staff, and customers.",
  },
];

// ─── Section 4: Risk Map ──────────────────────────────────────────────────────

const riskRows = [
  {
    img: "/images/sme-risk-1.jpg",
    stage: "FIRE & ALLIED PERILS (PROPERTY RISK)",
    scenario:
      "Fire outbreak, flooding, or accidental damage to business premises, stock, or equipment.",
    impact: [
      "Loss of physical assets",
      "Business interruption or closure",
      "High replacement and repair costs",
      "Loss of income during downtime",
      "Disruption of customer service",
    ],
    response:
      "Covers buildings (owned or leased), stock, furniture, fixtures, and equipment against fire and related perils. Claims support helps businesses document losses, assess damage, and restore assets to enable faster recovery and resumption of operations.",
  },
  {
    img: "/images/sme-risk-2.jpg",
    stage: "BURGLARY & MONEY RISK",
    scenario:
      "Theft of stock, break-in, or cash stolen from premises or in transit.",
    impact: [
      "Direct financial loss",
      "Cash flow disruption",
      "Loss of inventory",
      "Operational strain",
      "Security concerns and added risk exposure",
    ],
    response:
      "Covers loss of money and stock due to theft or forcible entry. Supports businesses in claim reporting, evidence collection (such as police abstracts), and settlement processing to restore financial stability.",
  },
  {
    img: "/images/sme-risk-3.jpg",
    stage: "BUSINESS INTERRUPTION",
    scenario: "Insured event forces temporary closure or reduced operations.",
    impact: [
      "Loss of revenue",
      "Inability to meet fixed expenses (rent, salaries, loans)",
      "Supply chain disruption",
      "Delayed recovery and rebuilding",
    ],
    response:
      "Covers loss of income and ongoing fixed costs during the period of disruption following an insured event. Helps maintain financial stability while the business rebuilds and returns to normal operations.",
  },
  {
    img: "/images/sme-risk-4.jpg",
    stage: "ELECTRONIC EQUIPMENT & ALL RISK",
    scenario:
      "Damage or failure of computers, POS systems, office equipment, or other essential devices.",
    impact: [
      "Operational downtime",
      "Reduced productivity",
      "System or data disruption",
      "Cost of urgent repairs or replacement",
      "Service delays to customers",
    ],
    response:
      "Covers repair or replacement of electronic equipment and specified assets against accidental damage and unforeseen events, ensuring continuity of business operations.",
  },
  {
    img: "/images/sme-risk-5.jpg",
    stage: "MACHINERY BREAKDOWN & CONSEQUENTIAL LOSS",
    scenario: "Sudden failure of production or operational machinery.",
    impact: [
      "Production stoppage",
      "Loss of output and revenue",
      "Missed delivery commitments",
      "High repair costs",
      "Contract penalties and customer dissatisfaction",
    ],
    response:
      "Covers the cost of repairing or replacing machinery and extends to loss of income resulting from the downtime, helping stabilize operations after major breakdowns.",
  },
  {
    img: "/images/sme-risk-6.jpg",
    stage: "GOODS IN TRANSIT & CARRIERS LIABILITY",
    scenario:
      "Goods or stock damaged, lost, or stolen while being transported.",
    impact: [
      "Loss of goods in transit",
      "Delivery delays",
      "Financial loss from undelivered stock",
      "Contract penalties",
      "Customer dissatisfaction",
    ],
    response:
      "Covers goods while being transported and liability arising from damage or loss during transit, supporting businesses engaged in distribution and logistics.",
  },
  {
    img: "/images/sme-risk-7.jpg",
    stage: "PUBLIC LIABILITY",
    scenario:
      "Third party injury or property damage occurring on business premises or due to operations.",
    impact: [
      "Legal claims and lawsuits",
      "Compensation payments",
      "Legal defense costs",
      "Management time diversion",
    ],
    response:
      "Covers legal liability for injury or property damage to third parties, including legal defense costs and compensation where the business is found liable.",
  },
  {
    img: "/images/sme-risk-8.jpg",
    stage: "WIBA (WORK INJURY BENEFITS ACT)",
    scenario:
      "Employee injury, illness, or death arising from work-related activities.",
    impact: [
      "Medical expenses and treatment costs",
      "Compensation obligations",
      "Loss of productivity",
      "Legal compliance requirements",
      "Workplace disruption",
    ],
    response:
      "Provides statutory cover for employees injured or affected while on duty, ensuring compliance with employment injury regulations and supporting employee welfare.",
  },
  {
    img: "/images/sme-risk-9.jpg",
    stage: "FIDELITY GUARANTEE",
    scenario: "Employee dishonesty, fraud, or theft of money or stock.",
    impact: [
      "Direct financial loss",
      "Inventory shrinkage",
      "Loss of internal trust",
      "Operational disruption",
      "Weakening of internal controls",
    ],
    response:
      "Covers financial losses arising from fraudulent or dishonest acts by employees, helping businesses recover from internal risk exposures.",
  },
  {
    img: "/images/sme-risk-10.jpg",
    stage: "KEYMAN INSURANCE",
    scenario:
      "Death or permanent disability of a key owner, director, or critical employee.",
    impact: [
      "Loss of leadership or expertise",
      "Revenue decline",
      "Operational instability",
      "Loss of key client relationships",
      "Strategic disruption",
    ],
    response:
      "Provides financial support to help the business stabilize and recover after the loss of a key individual critical to its operations and revenue generation.",
  },
];

// ─── Section 5: Coverage Table ────────────────────────────────────────────────

const coverageGroups = [
  {
    title: "FIRE & ALLIED PERILS",
    covered: [
      "Fire, lightning, explosion, storm, flood, impact damage to buildings, contents, stock",
    ],
    excluded: [
      "Wear and tear, gradual deterioration, faulty design/workmanship, intentional damage by insured",
    ],
  },
  {
    title: "BUILDINGS & CONTENTS",
    covered: [
      "Office/shop buildings, machinery, furniture, fixtures, fittings, equipment, stock",
    ],
    excluded: [
      "Unoccupied buildings beyond set period, maintenance-related damage, inherent defects",
    ],
  },
  {
    title: "STOCK IN TRADE",
    covered: [
      "Loss of damage due to fire, theft, accidental damage (depending on cover)",
    ],
    excluded: [
      "Obsolete stock, unexplained shortage, accounting errors, shrinkage without proof",
    ],
  },
  {
    title: "BUSINESS INTERRUPTION",
    covered: [
      "Loss of gross profit, fixed costs, increased cost of working after insured damage (e.g. fire)",
    ],
    excluded: [
      "Losses not linked to insured peril, poor business performance, market downturn, voluntary closure",
    ],
  },
  {
    title: "BURGLARY",
    covered: ["Theft following forcible/violent entry, damage during break-in"],
    excluded: [
      "Unexplained disappearance, employee theft (unless extended), lack of security compliance",
    ],
  },
  {
    title: "MONEY (CASH COVER)",
    covered: ["Cash on premises, in transit, and at bank (within limits)"],
    excluded: [
      "Loss due to accounting errors, fraud without force, unattended cash outside conditions",
    ],
  },
  {
    title: "GOODS IN TRANSIT / CARRIERS LIABILITY",
    covered: [
      "Loss or damage to goods while being transported due to accident, theft, fire",
    ],
    excluded: [
      "Improper packaging, delay without damage, inherent nature of goods, illegal transport",
    ],
  },
  {
    title: "PLATE GLASS",
    covered: [
      "Accidental breakage of fixed glass, shopfronts, windows, signage glass",
    ],
    excluded: [
      "Scratches, gradual cracking, defective installation, wear and tear",
    ],
  },
  {
    title: "MACHINERY BREAKDOWN",
    covered: ["Sudden and accidental breakdown of machinery and equipment"],
    excluded: [
      "Wear and tear, rust, corrosion, operator negligence, gradual deterioration",
    ],
  },
  {
    title: "MACHINERY BREAKDOWN CONSEQUENTIAL LOSS",
    covered: ["Loss of income due to insured machinery breakdown"],
    excluded: [
      "Losses not linked to insured breakdown, planned shutdowns, maintenance downtime",
    ],
  },
  {
    title: "ELECTRONIC EQUIPMENT / ALL RISK",
    covered: ["Accidental electrical faults, power surges, sudden failure"],
    excluded: [
      "Software issues, viruses, wear and tear, manufacturer warranty defects",
    ],
  },
  {
    title: "FIDELITY GUARANTEE",
    covered: ["Loss due to fraud or dishonesty by employees"],
    excluded: [
      "Losses without proof of fraud, third-party fraud, indirect losses, prior known fraud",
    ],
  },
  {
    title: "PUBLIC LIABILITY",
    covered: ["Legal liability for injury or property damage to third parties"],
    excluded: [
      "Employee injuries, contractual liability, deliberate acts, fines/penalties",
    ],
  },
  {
    title: "EMPLOYERS LIABILITY",
    covered: [
      "Legal costs and compensation for employee injury claims due to negligence",
    ],
    excluded: [
      "WIBA statutory obligations, criminal liability, self-inflicted injury",
    ],
  },
  {
    title: "WIBA (WORK INJURY BENEFITS ACT)",
    covered: [
      "Medical expenses, disability, death benefits for work-related injuries",
    ],
    excluded: [
      "Non-work-related injuries, intoxication-related incidents, self-harm",
    ],
  },
  {
    title: "POLITICAL VIOLENCE & TERRORISM",
    covered: ["Damage due to riots, strikes, civil unrest, terrorism events"],
    excluded: [
      "War (in some policies), nuclear risks, voluntary participation in riots",
    ],
  },
  {
    title: "KEYMAN INSURANCE",
    covered: ["Financial compensation on death or disability of key staff"],
    excluded: [
      "Resignation, dismissal for misconduct, non-disclosed pre-existing conditions",
    ],
  },
  {
    title: "GOODS, STOCK & ALL RISK EXTENSIONS",
    covered: ["Accidental loss/damage to specified insured items"],
    excluded: ["Normal wear and tear, depreciation, manufacturing defects"],
  },
  {
    title: "GENERAL BUSINESS RISKS (OVERALL POLICY)",
    covered: [
      "Combined protection across property, liability, income, and people risks",
    ],
    excluded: [
      "Fraudulent claims, intentional acts, illegal activities, uninsurable consequential losses not stated in policy",
    ],
    fullWidth: true,
  },
];

// ─── Section 6: Claims ────────────────────────────────────────────────────────

const claimSteps = [
  {
    num: 1,
    title: "Incident Occurs",
    color: "bg-blue-600",
    text: "A covered event happens such as fire, theft, accident, machinery breakdown, or liability claim. Immediate focus is on safety, securing assets, and limiting further damage.",
  },
  {
    num: 2,
    title: "Notify & Seek Guidance",
    color: "bg-indigo-600",
    text: "The insured notifies the insurer or intermediary immediately and seeks guidance on next steps. Early engagement helps prevent delays and ensures the correct claims process is followed from the start.",
  },
  {
    num: 3,
    title: "Claim Registration",
    color: "bg-violet-600",
    text: "The insurer officially logs the claim and issues a unique claim reference number. A claims handler is assigned to coordinate communication and manage the process.",
    gopayRole: "Your claim is officially opened in the system.",
  },
  {
    num: 4,
    title: "Assessment & Direction",
    color: "bg-purple-700",
    text: "Preliminary assessment is done to understand the nature and extent of the loss. The insurer provides direction on required steps, including inspections, emergency repairs, or additional expert involvement if needed.",
  },
  {
    num: 5,
    title: "Documentation",
    color: "bg-[#1B3A6B]",
    text: "The insured gathers and prepares required documents depending on the claim type, such as: Police abstract (theft, burglary, money loss), Incident or internal reports, Photos or videos of damage, Medical reports (for injury claims), Invoices, receipts, or asset registers.",
  },
  {
    num: 6,
    title: "Claim Submission",
    color: "bg-[#0F2240]",
    text: "All supporting documents are formally submitted for review. The insurer validates completeness and ensures the claim aligns with policy terms and conditions.",
    gopayRole:
      "We assist in ensuring all documentation is complete and correctly presented.",
  },
  {
    num: 7,
    title: "Settlement",
    color: "bg-slate-800",
    text: "Once approved, payment is made to the insured or directly to service providers (repairers, hospitals, suppliers). This enables the business to repair, replace, or recover lost income and resume operations.",
    gopayRole:
      "If clarification is needed, we communicate clearly. If not covered, we explain why transparently.",
  },
];

// ─── Section 8: Who Needs SME Insurance ──────────────────────────────────────

const needsMatrix = {
  riskTypes: [
    "Fire & Perils (lightning, earthquakes, etc.)",
    "Buildings & Contents",
    "Stock in trade getting damaged or stolen",
    "Business interruption resulting in losses or increased cost of working",
    "Accidents or death to third parties while at work",
    "Employee injuries while at work",
    "Theft of goods in stock",
    "Theft by employees",
    "Fire",
    "Theft of cash in transit or at premises",
    "Burglary",
    "Employee injuries while at work or elsewhere",
    "Accidental bodily injury (including death) to any person and accidental loss or damage to property",
    "Bodily injury, property damage, personal injury during operations",
    "Claims arising from food-borne illnesses",
    "Guest's property lost or damaged (short stay)",
    "Money",
    "Fidelity Guarantee",
    "Fire Building Risk",
    "Student Personal Accident (SPA)",
  ],
  segments: [
    "Manufacturing",
    "Retail & Fashion",
    "Offices",
    "Property Owners",
    "Hotels & Restaurants",
    "Education",
    "Construction & Contractors",
    "Transport & Logistics",
    "Healthcare & Clinics",
    "Agribusiness",
  ],
  // ✓ = true, blank = false — rows match riskTypes order
  data: [
    [true, true, true, true, true, false, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true],
    [true, true, false, false, true, false, false, true, false, true],
    [true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true],
    [true, true, false, false, true, false, false, true, false, false],
    [true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, false, true, true, false],
    [true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true],
    [false, false, false, false, true, false, false, false, true, false],
    [false, false, false, false, true, false, false, false, false, false],
    [true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true],
    [false, false, false, true, false, false, false, false, false, false],
    [false, false, false, false, false, true, false, false, false, false],
  ],
};

const WhoNeedsSME = () => (
  <section className="py-20 px-6 sm:px-10 lg:px-16 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <p className="text-xs font-bold text-[#1B3A6B] uppercase tracking-widest mb-2">
          Is this for me?
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2240] mb-3">
          WHO NEEDS SME BUSINESS INSURANCE
        </h2>
        <p className="text-slate-600 text-base leading-relaxed max-w-3xl mb-1">
          Business insurance is not only for large corporations—it is for any
          SME that has assets to protect, people to safeguard, income to
          sustain, and operations to keep running when the unexpected happens.
        </p>
        <p className="text-slate-500 text-sm leading-relaxed max-w-3xl">
          Because in business, disruption doesn't just affect property—it
          affects livelihoods, customers, employees, and continuity.
        </p>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-[#0F2240]">
              <th className="text-left px-4 py-3 text-white font-semibold tracking-wide min-w-[220px]">
                Risk Type
              </th>
              {needsMatrix.segments.map((seg) => (
                <th
                  key={seg}
                  className="px-3 py-3 text-white font-semibold text-center min-w-[80px] leading-tight"
                >
                  {seg}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {needsMatrix.riskTypes.map((risk, ri) => (
              <tr
                key={ri}
                className={ri % 2 === 0 ? "bg-white" : "bg-slate-50"}
              >
                <td className="px-4 py-2.5 text-slate-700 font-medium border-r border-slate-100">
                  {risk}
                </td>
                {needsMatrix.data[ri].map((has, ci) => (
                  <td key={ci} className="px-3 py-2.5 text-center">
                    {has ? (
                      <svg
                        className="w-4 h-4 text-emerald-500 mx-auto"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <span className="text-slate-200">—</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

// ─── Section 9: FAQ ───────────────────────────────────────────────────────────

const faqs = [
  {
    q: "Do I really need insurance if my business is small and 'low risk'?",
    a: "Yes. Even small SMEs face fire, theft, liability, and interruption risks that can halt operations or cause serious financial strain.",
  },
  {
    q: "What is the biggest risk SMEs underestimate?",
    a: "Business interruption—many businesses recover physically but struggle financially due to loss of income during downtime.",
  },
  {
    q: "What is underinsurance and why is it dangerous?",
    a: "Underinsurance occurs when assets or stock are insured below their actual value. In a claim, the payout is reduced proportionally, meaning the business absorbs part of the loss.",
  },
  {
    q: "What are common mistakes SMEs make when buying insurance?",
    a: "Underinsuring assets, failing to update values as the business grows, ignoring business interruption cover, and assuming all risks are automatically included.",
  },
  {
    q: "Does excess apply in most insurance policies?",
    a: "Yes. Most policies include an excess (deductible), which is the portion the business pays first before the insurer settles the balance of a claim. Higher excesses may reduce premiums, but increase out-of-pocket costs during claims.",
  },
  {
    q: "What is sum insured (sum assured) in business insurance?",
    a: "It is the maximum amount the insurer will pay for a covered loss. It should reflect the true value of assets, stock, or expected revenue to ensure full protection.",
  },
  {
    q: "Does business insurance only cover property like buildings and stock?",
    a: "No. It also covers liability, employees, money, machinery, electronic equipment, and loss of income depending on the selected covers.",
  },
  {
    q: "What happens if my business is sued by a customer?",
    a: "Public liability covers legal defence costs and compensation if the business is found responsible for injury or property damage.",
  },
  {
    q: "Am I covered if an employee gets injured at work?",
    a: "Yes. WIBA provides statutory benefits, while Employers Liability covers negligence-related claims beyond statutory obligations.",
  },
  {
    q: "Does business insurance cover theft by employees?",
    a: "Yes. Fidelity Guarantee covers financial losses caused by dishonest acts or fraud by employees.",
  },
  {
    q: "What if I lose cash in transit or at my business premises?",
    a: "Business insurance covers loss of cash due to theft, robbery, or transit-related risks within policy limits.",
  },
  {
    q: "Is damage to computers and electronic systems covered?",
    a: "Yes. Electronic Equipment cover protects against accidental damage, power surges, and sudden breakdowns.",
  },
  {
    q: "What if my machinery breaks down suddenly?",
    a: "Machinery Breakdown cover pays repair or replacement costs and may include loss of income depending on the extension.",
  },
  {
    q: "Does insurance cover goods in transit?",
    a: "Yes. Goods in Transit covers loss or damage to stock while being transported between business locations or customers.",
  },
  {
    q: "What is other overlooked but very important cover?",
    a: "Business Interruption cover, which protects income and fixed costs when operations stop due to an insured event.",
  },
  {
    q: "Does insurance cover riots, strikes, or political unrest?",
    a: "Yes. Political Violence & Terrorism cover protects against losses caused by civil unrest and related events.",
  },
  {
    q: "What is the benefit of combining all covers in one policy?",
    a: "It simplifies management, ensures coordinated protection, and reduces duplication with one policy number and one renewal date.",
  },
];

// ─── PAGE ASSEMBLY ─────────────────────────────────────────────────────────────

const SME = () => (
  <div className="min-h-screen bg-white">
    <PageHero
      title="Small and Medium Enterprises (SMEs) Cover"
      tagline="Business should be about growth and opportunity — not the financial setbacks that come with unexpected risks."
      body1="From fire damage and theft to loss of income, employee risks, and business interruptions, every SME faces exposures that can quickly affect operations and cash flow."
      body2="At GoPay, we structure Business Combined Insurance solutions that protect SMEs across the risks that matter most — helping businesses operate with greater confidence, stability, and peace of mind."
      heroImage="/images/sme-hero.jpg"
      badge="Business Insurance"
      ctaPrimary={{ label: "Get Cover", href: "/quote" }}
      ctaSecondary={{ label: "Assess My Business Risk", href: "/appointment" }}
    />

    <WhyItMatters
      sectionLabel="Why it matters"
      heading="WHY SME BUSINESS INSURANCE MATTERS"
      subheading="Peace of mind isn't automatic—it's structured"
      cards={whyCards}
      pullQuote={{
        eyebrow: "The reality of business risk",
        headline:
          "It's easy for businesses to assume operations are secure simply because things have always run smoothly.",
        body1:
          "But when fire damage, theft, machinery breakdown, employee injuries, loss of money, or liability claims happen, the impact can quickly affect operations, finances, customers, and business continuity.",
        body2:
          "What matters is not just having insurance, but having protection that responds efficiently when your business needs it most.",
      }}
    />

    <WhatIsIt
      sectionLabel="Understanding the product"
      heading="WHAT IS BUSINESS COMBINED INSURANCE"
      subheading="What SME business insurance really does"
      intro1="Business Combined Insurance is a single, bundled insurance solution that brings together multiple classes of business cover under one policy. Instead of managing separate policies for different risks, SMEs benefit from one policy number, one renewal date, and a more cost-efficient structure through bundled protection."
      intro2="A business is more than just a trading activity — for the owner, it is income and investment; for employees, it is livelihood and stability; for the community, it is access to goods, services, and employment; and for the government, it is tax contribution and economic growth. Protecting a business therefore means protecting an entire ecosystem of value."
      cards={whatCards}
      closing1="At GoPay, we go beyond simply defining what Business Combined Insurance is—we focus on how it applies to the real day-to-day realities of running a business. By understanding how your business operates, what you depend on, and the risks you are exposed to, we structure cover around practical needs rather than assumptions."
      closing2="Because every business is different, the real question is not just what Business Combined Insurance is—but how it protects your assets, your people, your income, and your continuity when it matters most."
    />

    <RiskMap
      sectionLabel="Step by step"
      heading="BUSINESS RISK MAP"
      subheading="Explore risks across your business — where incidents can arise"
      intro1="Every SME faces a range of interconnected risks — from fire and theft to machinery failure, employee injuries, and liability claims."
      intro2="At each point, different exposures can arise. Some may seem minor at first, but can quickly escalate into larger operational and financial disruptions if not properly covered."
      rows={riskRows}
      closing1="Each of these scenarios represents a real risk that SMEs across Kenya face daily. They all have one thing in common: they can happen when you least expect them."
      closing2="The role of Business Combined Insurance is to ensure that when they do, you are supported — financially, operationally, and with minimum disruption to your business continuity."
    />

    <WhoNeedsSME />

    <CoverageTable
      sectionLabel="Coverage details"
      heading="WHAT IS COVERED VS WHAT IS NOT"
      subheading="What your SME business insurance covers — and where the limits apply"
      intro1="At GoPay Insurance Agency, we believe clarity is protection. We take the time to clearly explain what is covered, what is not, and any applicable conditions before you commit to a policy."
      intro2="This ensures there are no hidden surprises or information gaps that could work against you at the time of a claim. Our goal is simple: informed clients, transparent cover, and confidence when it matters most."
      groups={coverageGroups}
      note1="Most claim challenges do not arise because something isn't covered — but because it falls outside the defined terms or was not properly declared before the incident."
      note2="At GoPay, we focus on clear expectations before cover is purchased. We ensure clients understand what is included, what is excluded, and which optional extensions may be needed — so there are no gaps in protection or surprises during claims. Our approach is simple: transparent advice, tailored cover, and no hidden assumptions."
    />

    <HowClaims
      sectionLabel="Claims support"
      heading="HOW CLAIMS WORK"
      subheading="When something happens, here's what to expect"
      intro1="The true value of SME Business Insurance is experienced at the point of a claim."
      intro2="In an unfamiliar environment, knowing what to do — and having the right support — makes all the difference."
      intro3="At GoPay, we guide you through the entire process, ensuring that you are not navigating it alone."
      steps={claimSteps}
      gopayBullets={[
        "Guiding you on next steps immediately after an incident",
        "Ensuring proper documentation is collected and submitted",
        "Following up with the insurer on your behalf",
        "Helping resolve issues or disputes where they arise",
      ]}
      closing="The difference is not just having insurance — it is having support that ensures your claim is handled efficiently and fairly."
    />

    <RiskAssessmentForm productLabel="SME Business" />

    <FAQ
      sectionLabel="Common questions"
      heading="Common Questions About SME Business Insurance"
      subheading="We don't insure you — we help you access the right business insurance, from the right underwriters, with the right cover."
      items={faqs}
    />

    <FinalCTA
      heading="Ready to protect your business?"
      body="Get a tailored SME insurance quote in minutes. One policy, all your risks, no surprises."
      primaryLabel="Get Cover Now"
      secondaryLabel="Speak to an Advisor"
    />
  </div>
);

export default SME;
