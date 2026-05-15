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

// ─── Section 2: Why Home Insurance Matters ───────────────────────────────────

const whyCards = [
  {
    img: "/images/home-why-1.jpg",
    text: "Most homes are built around comfort, stability, and years of personal investment. What many homeowners don't always consider is how quickly unexpected events can disrupt that security. A small electrical fault can cause major fire damage. A water leak can destroy furniture and valuables. A burglary can leave both financial loss and emotional distress. These situations may be unexpected, but without the right protection, they can create sudden financial pressure and disruption.",
  },
  {
    img: "/images/home-why-2.jpg",
    text: "When something happens at home, the impact goes beyond damaged property. It can disrupt daily living, family routines, and peace of mind. Home insurance helps during these moments by providing financial support and helping households recover faster after unexpected loss or damage.",
  },
  {
    img: "/images/home-why-3.jpg",
    text: "For homeowners and tenants alike, this protection is becoming increasingly important as the value of household items, electronics, and property improvements continues to rise. Many people underestimate the cost of replacing contents accumulated over time until a loss actually occurs. Risks such as fire, accidental damage, and extreme weather can lead to significant financial loss, making home protection an important part of financial planning.",
  },
  {
    img: "/images/home-why-4.jpg",
    text: "Home insurance can be structured to protect both the building and household contents, depending on the customer's needs and living arrangement. Cover can also extend to risks such as burglary, fire, political violence, accidental damage, and liability protection for occupants and visitors. Whether someone owns a permanent residence, rents an apartment, or manages multiple properties, the cover can be tailored to align with how the property is used and the level of protection required.",
  },
];

// ─── Section 3: What Is Home Insurance ──────────────────────────────────────

const whatCards = [
  {
    img: "/images/home-what-1.jpg",
    title: "What Home Insurance Is",
    text: "Home insurance is a form of protection designed to safeguard your home and the things that make it livable. It provides financial support when unexpected events such as fire, theft, water damage, or natural disasters affect your property or belongings. It's not just about repairing a structure—it is about helping restore normal life after disruption.",
  },
  {
    img: "/images/home-what-2.jpg",
    title: "Understanding Risk at Home",
    text: "Risks at home are often unexpected but very real. A burst pipe, electrical fault, fire, or burglary can lead to sudden financial loss and emotional stress. Home insurance helps reduce the impact of these events by ensuring that recovery does not depend entirely on personal savings.",
  },
  {
    img: "/images/home-what-3.jpg",
    title: "What Home Insurance Can Cover",
    text: "Home insurance can be structured to suit different living situations:",
    bullets: [
      {
        label: "Buildings Cover —",
        desc: "protects the physical structure of your home.",
      },
      {
        label: "Contents Cover —",
        desc: "protects household items and personal belongings.",
      },
      {
        label: "Tenant or Owner Options —",
        desc: "tailored depending on your responsibility for the property.",
      },
      {
        label: "Optional Extensions —",
        desc: "such as accidental damage or additional liability protection.",
      },
    ],
  },
  {
    img: "/images/home-what-4.jpg",
    title: "Why It Matters in Everyday Life",
    text: "Homes today carry more value than ever before—from furniture and electronics to structural improvements. Whatever you own or rent, home insurance helps ensure that an unexpected event does not turn into long-term financial strain. It is a practical layer of protection that supports stability, continuity, and peace of mind.",
  },
];

// ─── Section 4: Home Risk Map ─────────────────────────────────────────────────

const riskRows = [
  {
    img: "/images/home-risk-1.jpg",
    stage: "FIRE RISK — ELECTRICAL FAULT LEADS TO HOUSE FIRE",
    scenario:
      "An electrical fault in the wiring ignites a fire that spreads through the property, causing damage to the structure, contents, and personal belongings.",
    impact: [
      "Total loss of home possible",
      "Loss of memories and irreplaceable belongings",
      "Forced relocation and emotional trauma",
      "Sudden financial shock of rebuilding",
    ],
    response:
      "Home insurance helps you rebuild your home from the ground up and replace damaged belongings, so a fire does not turn into a permanent financial setback. It restores stability when everything else is lost.",
  },
  {
    img: "/images/home-risk-2.jpg",
    stage: "WATER DAMAGE — BURST PIPE OR HIDDEN LEAK",
    scenario:
      "A burst pipe or hidden leak causes sudden accidental water damage inside the home, soaking floors, walls, and household contents.",
    impact: [
      "Hidden destruction of floors and furniture",
      "Mould and possible health risks",
      "Gradual financial drain from repairs",
      "Disruption of normal home life",
    ],
    response:
      "Home insurance steps in to repair structural damage and replace affected contents, helping you recover before small leaks turn into expensive long-term problems.",
  },
  {
    img: "/images/home-risk-3.jpg",
    stage: "WEATHER RISK — STORM, HEAVY RAIN OR FLOODING",
    scenario:
      "Extreme weather causes structural weakening, roof damage, destruction of electronics and furniture, and temporary displacement from home.",
    impact: [
      "Roof damage and structural weakening",
      "Destruction of electronics and furniture",
      "Temporary displacement from home",
      "Emotional stress and sudden disruption",
    ],
    response:
      "Home insurance provides financial support to repair or rebuild your home after severe weather, helping you get back to normal life faster after nature causes unexpected damage.",
  },
  {
    img: "/images/home-risk-4.jpg",
    stage: "THEFT & BURGLARY — BREAK-IN RESULTING IN STOLEN BELONGINGS",
    scenario:
      "Burglars break into the property and steal valuable household items, electronics, jewellery, and cash while causing damage to entry points.",
    impact: [
      "Loss of valuable household items",
      "Feeling unsafe in your own home",
      "Emotional stress and anxiety",
      "Immediate financial burden of replacement",
    ],
    response:
      "Home insurance helps you replace stolen items quickly and restore your sense of security, reducing both financial loss and emotional impact after a break-in.",
  },
  {
    img: "/images/home-risk-5.jpg",
    stage: "PERSONAL PROPERTY RISK — ELECTRONICS OR FURNITURE DAMAGED",
    scenario:
      "Electronics or furniture are accidentally damaged during an incident at home — a dropped device, a spill, or a collision that causes breakage.",
    impact: [
      "Loss of essential household items",
      "Disruption of daily living and comfort",
      "Unexpected replacement costs",
      "Reduced quality of life at home",
    ],
    response:
      "Home insurance ensures you can repair or replace damaged household items, so your daily life and comfort are not interrupted for long.",
  },
  {
    img: "/images/home-risk-6.jpg",
    stage: "LIABILITY RISK — GUEST INJURED WHILE VISITING YOUR HOME",
    scenario:
      "A guest or visitor is injured on your property due to a hazard such as a loose step, wet floor, or falling object.",
    impact: [
      "Emotional distress and guilt",
      "Legal and compensation demands",
      "Financial pressure from lawsuits",
      "Strained relationships",
    ],
    response:
      "Home insurance provides legal and financial protection if you are held responsible, covering compensation and defence costs so one accident does not become a financial crisis.",
  },
  {
    img: "/images/home-risk-7.jpg",
    stage: "ADDITIONAL LIVING EXPENSES — HOME UNINHABITABLE AFTER DAMAGE",
    scenario:
      "After a fire or flood, the home is declared uninhabitable and the family must temporarily relocate to alternative accommodation.",
    impact: [
      "Forced relocation to temporary housing",
      "Disrupted family routine and schooling",
      "Extra daily living costs",
      "Emotional stress from instability",
    ],
    response:
      "Home insurance helps cover temporary accommodation and living costs, so your family can maintain stability while your home is being repaired.",
  },
];

// ─── Section 5: Coverage Table ───────────────────────────────────────────────

const coverageGroups = [
  {
    title: "FIRE & EXPLOSION",
    covered: [
      "Sudden fire damage to building and household contents",
      "Rebuilding and replacement costs after accidental fire",
    ],
    excluded: [
      "Intentional damage, arson by insured, war or nuclear-related events",
    ],
  },
  {
    title: "WATER DAMAGE",
    covered: [
      "Burst pipes, internal plumbing leaks, sudden accidental water damage",
    ],
    excluded: [
      "Flooding (unless added), poor maintenance, gradual seepage, mould from long-term neglect",
    ],
  },
  {
    title: "STORM / WEATHER",
    covered: [
      "Lightning, windstorms, hail damage to property structure and contents",
    ],
    excluded: [
      "River overflow, coastal flooding, gradual weather erosion (unless specifically covered)",
    ],
  },
  {
    title: "THEFT & BURGLARY",
    covered: [
      "Stolen household contents following forced entry or violent break-in",
    ],
    excluded: [
      "Theft without forced entry, mysterious disappearance, negligence (e.g. doors left unlocked)",
    ],
  },
  {
    title: "HOUSEHOLD CONTENTS",
    covered: ["Furniture, appliances, electronics damaged by insured events"],
    excluded: [
      "Wear and tear, depreciation, mechanical/electrical breakdown, gradual damage",
    ],
  },
  {
    title: "PERSONAL LIABILITY",
    covered: [
      "Legal liability for injury or property damage to third parties at home",
    ],
    excluded: [
      "Intentional harm, criminal acts, contractual liability, business-related liability (unless added)",
    ],
  },
  {
    title: "MEDICAL EXPENSES (GUESTS)",
    covered: ["Minor emergency medical costs for visitors injured on property"],
    excluded: [
      "Major hospitalisation, ongoing treatment, illness unrelated to accident",
    ],
  },
  {
    title: "ALTERNATIVE ACCOMMODATION",
    covered: [
      "Temporary housing costs if home becomes uninhabitable due to insured peril",
    ],
    excluded: ["Planned relocation, renovations, or non-covered events"],
  },
  {
    title: "VALUABLE ITEMS",
    covered: [
      "Jewellery, art, collectibles if declared or scheduled separately",
    ],
    excluded: ["Undeclared high-value items, items exceeding sub-limits"],
  },
  {
    title: "OFF-PREMISES THEFT",
    covered: [
      "Theft of personal belongings outside home (if extension included)",
    ],
    excluded: [
      "Loss due to negligence, unattended items, unexplained disappearance",
    ],
  },
  {
    title: "FIRE / STRUCTURAL REBUILD",
    covered: ["Full or partial reconstruction of home after insured damage"],
    excluded: [
      "Damage from poor workmanship, construction defects, or illegal structures",
    ],
  },
  {
    title: "GRADUAL DETERIORATION",
    covered: ["Not covered (clearly excluded)"],
    excluded: ["Rust, rot, mould, wear and tear, ageing infrastructure"],
    fullWidth: false,
  },
];

// ─── Section 6: Claims Journey ───────────────────────────────────────────────

const claimSteps = [
  {
    num: 1,
    title: "Incident Occurs",
    color: "bg-blue-600",
    text: "An unexpected situation arises at home—this could be a fire, flood, break-in, accident, or any other insured event causing loss or damage.",
  },
  {
    num: 2,
    title: "Notify & Seek Guidance",
    color: "bg-indigo-600",
    text: "You (or someone on your behalf) notify the emergency assistance provider or reach out to GoPay for immediate guidance. Early notification ensures that the right steps are taken from the beginning.",
  },
  {
    num: 3,
    title: "Claim Registration",
    color: "bg-violet-600",
    text: "We collect key details: what happened, when and where it happened, what was damaged or lost, and any supporting photos or documents.",
    gopayRole: "Your claim is officially opened in the system.",
  },
  {
    num: 4,
    title: "Assessment & Direction",
    color: "bg-purple-700",
    text: "A claims assessor reviews the incident. They may inspect the property if needed, confirm policy coverage, and assess extent of loss or damage.",
  },
  {
    num: 5,
    title: "Documentation",
    color: "bg-[#1B3A6B]",
    text: "Depending on the claim, you may be asked for: proof of ownership, receipts/photos, police report (for theft or burglary), repair or replacement quotations.",
  },
  {
    num: 6,
    title: "Claim Submission",
    color: "bg-[#0F2240]",
    text: "Once assessment is complete, the claim is formally submitted to the insurer for review.",
    gopayRole:
      "We assist in ensuring all documentation is complete and correctly presented.",
  },
  {
    num: 7,
    title: "Settlement",
    color: "bg-slate-800",
    text: "Approved claims are paid or serviced: repairs are arranged, or cash settlement is processed.",
    gopayRole:
      "If clarification is needed, we communicate clearly. If not covered, we explain why transparently.",
  },
];

// ─── Section 8: FAQ ───────────────────────────────────────────────────────────

const faqs = [
  {
    q: "Does home insurance cover fire damage?",
    a: "Yes. Standard home insurance covers sudden and accidental fire damage to both buildings and contents, including rebuilding and replacement costs.",
  },
  {
    q: "Does home insurance cover theft and burglary?",
    a: "Yes. It covers loss of contents due to forced entry or violent break-in, subject to policy limits and security conditions.",
  },
  {
    q: "Does home insurance cover water damage?",
    a: "Yes (limited). It covers sudden burst pipes and accidental internal leaks. Not covered unless added: Flood damage (requires Flood Cover extension).",
  },
  {
    q: "Does home insurance cover floods?",
    a: "No. Flooding from heavy rain, rivers, or surface water is excluded under standard policies. Optional cover: Flood Extension.",
  },
  {
    q: "Does home insurance cover storm and wind damage?",
    a: "Yes. Covers damage from windstorms, lightning, and storm-related structural damage.",
  },
  {
    q: "Does home insurance cover personal belongings inside the home?",
    a: "Yes. Covers furniture, electronics, and household contents damaged by insured events like fire, theft, or water damage.",
  },
  {
    q: "Does home insurance cover accidental damage?",
    a: "Not always. This is usually optional cover (Accidental Damage Extension) and must be added separately depending on the policy.",
  },
  {
    q: "Does home insurance cover liability if someone is injured at my home?",
    a: "Yes. Covers legal liability and compensation if a third party is injured on your property due to negligence.",
  },
  {
    q: "Does home insurance cover medical expenses for guests?",
    a: "Yes (limited). Covers minor emergency medical costs for visitors injured on your property, subject to policy limits.",
  },
  {
    q: "Does home insurance cover alternative accommodation?",
    a: "Yes. Covers reasonable costs for temporary housing if your home becomes uninhabitable due to an insured event (fire, storm, etc.).",
  },
  {
    q: "Does home insurance cover wear and tear?",
    a: "No. Gradual deterioration, rust, ageing, and lack of maintenance are excluded.",
  },
  {
    q: "Does home insurance cover earthquakes or ground movement?",
    a: "No. Earthquake, landslide, and subsidence are excluded under standard policies. Optional cover: Earthquake / Earth Movement Extension (where available).",
  },
  {
    q: "Does home insurance cover jewellery and high-value items?",
    a: "Yes (if declared). Valuable items must be scheduled separately (Valuables Extension) to ensure full and accurate compensation.",
  },
  {
    q: "Does home insurance cover items stolen outside the home?",
    a: "Yes (if included). This requires an Off-Premises/Theft Extension and usually applies to items like phones or laptops, subject to limits.",
  },
  {
    q: "Does home insurance cover damage from negligence or poor maintenance?",
    a: "No. Damage caused by lack of maintenance, poor upkeep, or gradual failure is excluded.",
  },
];

// ─── WHO NEEDS HOME INSURANCE ─────────────────────────────────────────────────

const segments = [
  {
    segment: "Homeowners",
    who: "Individuals or families who own a house or apartment",
    why: "Your home is one of your biggest financial investments—any loss can take years to recover",
    risk: "Fire, theft, storm damage, high rebuilding costs",
  },
  {
    segment: "Tenants / Renters",
    who: "People living in rented houses or apartments",
    why: "Your landlord protects the building, but not your belongings or liability inside it",
    risk: "Theft, fire, water damage, accidental damage, loss of contents",
  },
  {
    segment: "First-Time Home Buyers",
    who: "New homeowners building financial stability",
    why: "A single unexpected event can disrupt both your savings and mortgage dealings",
    risk: "Accidental damage, fire, structural damage, repair costs",
  },
  {
    segment: "Families with Dependents",
    who: "Households with children or elderly dependants",
    why: "Any disruption affects safety, routine, schooling, and financial stability of the whole family",
    risk: "Medical emergencies, property damage, income strain",
  },
  {
    segment: "Working Professionals / Remote Workers",
    who: "People working from home or storing devices and work tools at home",
    why: "Home disruptions directly affect income, productivity, and work continuity",
    risk: "Theft of electronics, fire damage, downtime losses",
  },
  {
    segment: "Property Investors / Landlords",
    who: "Owners of multiple rental units or investment properties",
    why: "More properties mean higher exposure to tenant damage and liability claims",
    risk: "Tenant damage, liability claims, vacancy loss",
  },
  {
    segment: "High-Value Lifestyle Households",
    who: "Homes with expensive furniture, electronics, or collections",
    why: "The cost of replacing lifestyle assets is often underestimated until loss occurs",
    risk: "Theft, accidental damage, underinsurance risk",
  },
  {
    segment: "Diaspora Homeowners",
    who: "Kenyans living abroad owning property locally",
    why: "Managing risk remotely is difficult without structured protection and trusted response",
    risk: "Unmonitored damage, theft, delayed repairs, fraud risk",
  },
];

const WhoNeedsIt = () => (
  <section className="py-20 px-6 sm:px-10 lg:px-16 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <p className="text-xs font-bold text-[#1B3A6B] uppercase tracking-widest mb-2">
          Is this for me?
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2240] mb-3">
          WHO NEEDS HOME INSURANCE
        </h2>
        <p className="text-slate-600 text-base leading-relaxed max-w-3xl">
          Home insurance is not only for property owners—it's for anyone who has
          something to lose when life at home is disrupted.
        </p>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#0F2240]">
              <th className="text-left px-5 py-3.5 text-white font-semibold text-xs uppercase tracking-wide">
                Customer Segment
              </th>
              <th className="text-left px-5 py-3.5 text-white font-semibold text-xs uppercase tracking-wide">
                Who They Are
              </th>
              <th className="text-left px-5 py-3.5 text-white font-semibold text-xs uppercase tracking-wide">
                Why They Need Home Insurance
              </th>
              <th className="text-left px-5 py-3.5 text-white font-semibold text-xs uppercase tracking-wide">
                Key Risk Exposure
              </th>
            </tr>
          </thead>
          <tbody>
            {segments.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                <td className="px-5 py-4 font-semibold text-[#0F2240] align-top">
                  {row.segment}
                </td>
                <td className="px-5 py-4 text-slate-600 align-top">
                  {row.who}
                </td>
                <td className="px-5 py-4 text-slate-600 align-top">
                  {row.why}
                </td>
                <td className="px-5 py-4 text-slate-600 align-top">
                  {row.risk}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

// ─── PAGE ASSEMBLY ────────────────────────────────────────────────────────────

const HomeInsurance = () => (
  <div className="min-h-screen bg-white">
    <PageHero
      title="Home Insurance"
      tagline="Home should be about comfort and security — not the risks that can come with it."
      body1="From fire damage and theft to water leaks and accidental loss, every home carries exposures that can quickly turn into unexpected financial strain."
      body2="At GoPay, we structure home insurance that protects you across the full spectrum of your living space—so you can focus on your home, not the uncertainties around it."
      heroImage="/images/home-hero.jpg"
      badge="Personal Insurance"
      ctaPrimary={{ label: "Get Cover", href: "/quote" }}
      ctaSecondary={{ label: "Assess My Home Risk", href: "/appointment" }}
    />

    <WhyItMatters
      sectionLabel="Why it matters"
      heading="WHY HOME INSURANCE MATTERS"
      subheading="Peace of mind isn't automatic—it's structured"
      cards={whyCards}
      pullQuote={{
        eyebrow: "The reality of home risk",
        headline:
          "It's easy to assume a home is safe with locked doors and familiarity.",
        body1:
          "But when theft, damage, or loss happens, what matters is not just insurance, but responsive cover that supports recovery and restores normal life with minimal disruption.",
        body2:
          "At GoPay, we understand your home, lifestyle, and risks to structure real-life protection—giving you confidence you're not facing uncertainty alone.",
      }}
    />

    <WhatIsIt
      sectionLabel="Understanding the product"
      heading="WHAT IS HOME INSURANCE"
      subheading="What home insurance really does"
      intro1="A home is more than walls and a roof—it's where your life happens. But even the most familiar spaces face risk."
      intro2="Home insurance gives you a safety structure when things go wrong—protecting your finances, helping you recover from loss or damage, and ensuring you can continue with as little disruption as possible."
      cards={whatCards}
      closing1="At GoPay, we go beyond simply defining what home insurance is—we focus on how it applies to your everyday living. By understanding how you use your home, what you value, and the risks you are exposed to, we ensure your cover is structured around real needs rather than assumptions."
      closing2="Because every home is different, the real question is not just what home insurance is—but how it protects your space, your belongings, and your financial stability when it matters most."
    />

    {/* Risk Map — expandable cards as noted in wireframe */}
    <RiskMap
      sectionLabel="Step by step"
      heading="HOME RISK MAP"
      subheading="Explore risks around your home — where incidents can arise"
      intro1="Every home faces a range of risks—from fire and water damage to theft and liability incidents."
      intro2="At each point, different exposures can arise. Some may seem minor at first, but can quickly escalate into larger financial disruptions if not properly covered."
      rows={riskRows}
      closing1="Each of these scenarios represents a real risk that homeowners, tenants, and families face. They all have one thing in common: they can happen when you least expect them."
      closing2="The role of home insurance is to ensure that when they do, you are supported—financially, practically, and with minimum disruption to your daily life."
    />

    <WhoNeedsIt />

    <CoverageTable
      sectionLabel="Coverage details"
      heading="WHAT IS COVERED VS WHAT IS NOT"
      subheading="What your home insurance covers—and where the limits apply"
      intro1="At GoPay Insurance Agency, we believe clarity is protection. We take the time to clearly explain what is covered, what is not, and any applicable conditions before you commit to a policy."
      intro2="This ensures there are no hidden surprises or information gaps that could work against you at the time of a claim. Our goal is simple: informed clients, transparent cover, and confidence when it matters most."
      groups={coverageGroups}
      note1="Most claim challenges do not arise because something isn't covered—but because it falls outside the defined terms or was not properly declared before the incident."
      note2="At GoPay, we focus on clear expectations before cover is purchased. We ensure clients understand what is included, what is excluded, and which optional extensions may be needed—so there are no gaps in protection or surprises during claims. Our approach is simple: transparent advice, tailored cover, and no hidden assumptions."
    />

    <HowClaims
      sectionLabel="Claims support"
      heading="HOW CLAIMS WORK"
      subheading="When something happens, here's what to expect"
      intro1="The true value of home insurance is experienced at the point of a claim."
      intro2="In an unfamiliar and stressful situation, knowing what to do—and having the right support—makes all the difference."
      intro3="At GoPay, we guide you through the entire process, ensuring that you are not navigating it alone."
      steps={claimSteps}
      gopayBullets={[
        "Guiding you on next steps immediately after an incident",
        "Ensuring proper documentation is collected and submitted",
        "Following up with the insurer on your behalf",
        "Helping resolve issues or disputes where they arise",
        "Communicating clearly if cover limitations apply",
      ]}
      closing="The difference is not just having insurance—it is having support that ensures your claim is handled efficiently and fairly."
    />

    <RiskAssessmentForm productLabel="Home" />

    <FAQ
      sectionLabel="Common questions"
      heading="Common Questions About Home Insurance"
      subheading="We don't insure you — we help you access the right home insurance, from the right underwriters, with the right cover."
      items={faqs}
    />

    <FinalCTA
      heading="Ready to protect your home?"
      body="Get a tailored home insurance quote in minutes. No jargon, no pressure — just the right cover for your home."
      primaryLabel="Get Cover Now"
      secondaryLabel="Speak to an Advisor"
    />
  </div>
);

export default HomeInsurance;
