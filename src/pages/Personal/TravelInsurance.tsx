import { useState } from "react";
import { Link } from "react-router-dom";

// ─── Section 1: Hero ─────────────────────────────────────────────────────────

const Hero = () => (
  <section className="relative min-h-[80vh] flex items-end overflow-hidden bg-[#0F2240]">
    {/* Faded travel/airport background image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/travel-hero.jpg')" }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#0F2240]/95 via-[#0F2240]/75 to-[#0F2240]/20" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2240]/80 via-transparent to-transparent" />

    <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-20 pt-40 w-full">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-white/80 text-xs font-medium tracking-widest uppercase">
            Personal Insurance
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
          Travel Insurance
        </h1>
        <p className="text-white/60 text-lg font-light mb-3">
          Travel should be about the experience—not the risks that come with it.
        </p>
        <p className="text-white/80 text-base leading-relaxed mb-4 max-w-xl">
          From flight disruptions and lost baggage to medical emergencies
          abroad, every journey carries exposures that can quickly turn into
          unexpected costs.
        </p>
        <p className="text-white/70 text-base leading-relaxed mb-10 max-w-xl">
          At GoPay, we structure travel insurance that protects you across the
          full spectrum of your travel experience—so you can focus on your
          journey, not the uncertainties around it.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold text-sm shadow-lg shadow-amber-500/30 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Get Instant Cover
            <svg
              className="w-4 h-4"
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
          </Link>
          <Link
            to="/appointment"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border-2 border-white/30 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/50 transition-all duration-200"
          >
            Assess My Travel Risk
          </Link>
        </div>
      </div>
    </div>
  </section>
);

// ─── Section 2: Why Travel Insurance Matters ────────────────────────────────

const whyCards = [
  {
    img: "/images/travel-why-1.jpg",
    text: "Most journeys begin with excitement—plans made, tickets booked, and expectations set. What many travelers don't consider is how quickly things can change once the journey starts. A missed connection can disrupt days of planning. A foreign medical system can overwhelm even the most prepared traveler. A lost document can ground you in a foreign country. These situations aren't just inconvenient—they are difficult to manage without structure.",
  },
  {
    img: "/images/travel-why-2.jpg",
    text: "When something goes wrong away from home, it's not just about the cost. It's about uncertainty—who to call, where to go, and how to move forward. Travel insurance is designed to step in at that exact moment—providing financial cover, access to support networks, and the clarity needed to take the right steps.",
  },
  {
    img: "/images/travel-why-3.jpg",
    text: "For travelers in and out of Kenya, this protection is increasingly important. Whether you are travelling for business, leisure, or education, the risks are real and the costs of being uninsured can be significant.",
  },
  {
    img: "/images/travel-why-4.jpg",
    text: "Travel insurance can be arranged for a single trip or structured as an annual solution for frequent travelers. For certain countries, it is a formal entry requirement, and understanding what your policy must include is part of making the right choice.",
  },
];

const WhyItMatters = () => (
  <section className="py-20 px-6 sm:px-10 lg:px-16 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <p className="text-xs font-bold text-[#1B3A6B] uppercase tracking-widest mb-2">
          Why it matters
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2240] mb-2">
          WHY TRAVEL INSURANCE MATTERS
        </h2>
        <p className="text-slate-500 text-base">
          Peace of mind isn't automatic—it's structured
        </p>
      </div>

      {/* 4-column image + text grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {whyCards.map((card, i) => (
          <div key={i} className="flex flex-col">
            <div className="h-52 rounded-2xl overflow-hidden bg-slate-200 mb-4 flex-shrink-0">
              <img
                src={card.img}
                alt={`Travel scenario ${i + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (
                    e.target as HTMLImageElement
                  ).parentElement!.style.background = "#e2e8f0";
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              {card.text}
            </p>
          </div>
        ))}
      </div>

      {/* Pull quote block */}
      <div className="bg-[#0F2240] rounded-2xl p-8 sm:p-10">
        <p className="text-white/60 text-sm mb-3 italic">
          The reality of travel risk
        </p>
        <p className="text-white text-lg sm:text-xl font-medium leading-relaxed mb-4">
          It's easy to assume that having any policy is enough.
        </p>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          But when you are in a different country, dealing with an unfamiliar
          system, what matters is not just having insurance—it's knowing that
          your cover will respond, support you, and carry you through the
          situation.
        </p>
        <p className="text-white/70 text-base leading-relaxed">
          At GoPay, we take the time to understand your journey and structure
          cover that works in real-life situations—so you can travel knowing
          you're not facing those risks alone.
        </p>
      </div>
    </div>
  </section>
);

// ─── Section 3: What Is Travel Insurance ────────────────────────────────────

const whatCards = [
  {
    img: "/images/travel-what-1.jpg",
    title: "Core Definition",
    text: "At its core, travel insurance is a short-term cover designed to protect you while you are outside your home country. It addresses a range of exposures, including medical situations, travel disruptions, loss of personal belongings, and liability where applicable. Rather than focusing on a single risk, it works as a comprehensive safety net—ensuring that both common disruptions and day disruptions are handled effectively.",
  },
  {
    img: "/images/travel-what-2.jpg",
    title: "Risk",
    text: "Some risks, such as flight delays or baggage issues, are more common and can disrupt your plans. Others, like medical emergencies, are less frequent but can carry significant financial impact. The value of travel insurance lies in covering both—so you are protected not only from inconvenience, but also from high-cost situations.",
  },
  {
    img: "/images/travel-what-3.jpg",
    title: "Types of Cover",
    text: "Depending on how you travel, cover can be structured in different ways:",
    bullets: [
      {
        label: "Single-trip cover",
        desc: "is suitable for one-off journeys with defined travel dates.",
      },
      {
        label: "Annual multi-trip cover",
        desc: "is designed for frequent travelers, providing continuous protection across multiple trips within a year.",
      },
    ],
  },
  {
    img: "/images/travel-what-4.jpg",
    title: "Regulatory Context",
    text: "In many cases, travel insurance is also a requirement. Destinations such as Schengen countries require specific levels of cover as part of the visa process, while other jurisdictions like Kenya expect visitors to have adequate medical protection before entry.",
  },
];

const WhatIsIt = () => (
  <section className="py-20 px-6 sm:px-10 lg:px-16 bg-slate-50">
    <div className="max-w-7xl mx-auto">
      <div className="mb-4">
        <p className="text-xs font-bold text-[#1B3A6B] uppercase tracking-widest mb-2">
          Understanding the product
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2240] mb-2">
          WHAT IS TRAVEL INSURANCE
        </h2>
        <p className="text-slate-500 text-base mb-3">
          What travel insurance really does
        </p>
      </div>

      <p className="text-slate-600 text-base leading-relaxed mb-2 max-w-3xl">
        Once you understand the risks involved in travel, the next step is
        ensuring you have the right structure in place to manage them.
      </p>
      <p className="text-slate-600 text-base leading-relaxed mb-10 max-w-3xl">
        Travel insurance provides that structure—bringing together financial
        protection, access to support, and continuity when your journey doesn't
        go as planned.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {whatCards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl overflow-hidden border border-slate-200 flex flex-col"
          >
            <div className="h-44 bg-slate-200 flex-shrink-0 overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (
                    e.target as HTMLImageElement
                  ).parentElement!.style.background = "#e2e8f0";
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <p className="text-xs font-bold text-[#1B3A6B] uppercase tracking-wider mb-2">
                {card.title}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                {card.text}
              </p>
              {card.bullets && (
                <ul className="mt-3 space-y-2">
                  {card.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-slate-600">
                      <span className="font-semibold text-[#0F2240]">
                        {b.label}
                      </span>{" "}
                      {b.desc}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-8">
        <p className="text-slate-700 text-base leading-relaxed mb-3">
          At GoPay, we go beyond simply defining what travel insurance is—we
          focus on how it applies to your journey.
        </p>
        <p className="text-slate-600 text-base leading-relaxed">
          By understanding where you are going, how long you will be away, and
          what you will be doing, we ensure that your cover is structured to
          match your actual exposure, not just minimum requirements. Because
          every journey is different, the real question is not just what travel
          insurance is—but how it protects you at each stage of your trip.
        </p>
      </div>
    </div>
  </section>
);

// ─── Section 4: Travel Risk Map ──────────────────────────────────────────────

const riskStages = [
  {
    stage: "ARRIVAL AT THE AIRPORT — TRIP DISRUPTION",
    img: "/images/travel-risk-1.jpg",
    scenario:
      "You arrive at the airport ready to travel, only to find your flight has been delayed by several hours due to operational issues. This delay causes you to miss your connecting flight.",
    impact: [
      "Rebooking costs",
      "Extra meals and accommodation",
      "Disrupted itinerary",
    ],
    response:
      "Travel insurance helps cover additional expenses such as accommodation, meals, and transport, allowing you to continue your journey without bearing the full financial burden.",
  },
  {
    stage: "BAGGAGE CHECK-IN — LOST OR DELAYED LUGGAGE",
    img: "/images/travel-risk-2.jpg",
    scenario:
      "You land at your destination, but your checked-in luggage does not arrive with you. It is either delayed or lost in transit.",
    impact: [
      "Immediate need to purchase clothing and essentials",
      "Inconvenience and disruption to plans",
    ],
    response:
      "Your policy provides compensation for essential purchases and may reimburse you if your baggage is permanently lost.",
  },
  {
    stage: "TRANSIT — MISSED CONNECTION",
    img: "/images/travel-risk-3.jpg",
    scenario:
      "Due to a delay in your first flight, you miss your connecting flight to your final destination.",
    impact: [
      "New flight costs",
      "Possible overnight stay",
      "Loss of prepaid bookings",
    ],
    response:
      "Travel insurance assists with rebooking costs and covers necessary expenses incurred while arranging alternative travel.",
  },
  {
    stage: "WHILE ABROAD — MEDICAL EMERGENCY",
    img: "/images/travel-risk-4.jpg",
    scenario:
      "During your trip, you fall ill or sustain an injury that requires medical attention in a foreign country.",
    impact: [
      "Consultation and treatment costs",
      "Possible hospitalization",
      "Need for coordination with unfamiliar healthcare systems",
    ],
    response:
      "Your cover ensures access to medical care, supports treatment costs, and facilitates coordination with healthcare providers.",
  },
  {
    stage: "LIABILITY INCIDENT",
    img: "/images/travel-risk-5.jpg",
    scenario:
      "While abroad, you accidentally cause damage to property or injury to another person, leading to a claim against you.",
    impact: [
      "Legal and compensation costs",
      "Stress of handling a situation in a foreign country",
    ],
    response:
      "Travel insurance may provide liability cover, helping manage legal exposure and associated costs where applicable.",
  },
  {
    stage: "RETURN JOURNEY — TRIP INTERRUPTION",
    img: "/images/travel-risk-6.jpg",
    scenario:
      "An unexpected situation forces you to cut your trip short or delays your return home.",
    impact: [
      "Loss of unused bookings",
      "Additional travel expenses",
      "Disruption to personal or work commitments",
    ],
    response:
      "Your policy helps recover non-refundable costs and supports the arrangements needed to return home.",
  },
];

const TravelRiskMap = () => (
  <section className="py-20 px-6 sm:px-10 lg:px-16 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="mb-4">
        <p className="text-xs font-bold text-[#1B3A6B] uppercase tracking-widest mb-2">
          Step by step
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2240] mb-2">
          TRAVEL RISK MAP
        </h2>
        <p className="text-slate-500 text-base mb-2">
          Your journey, step by step—where risks can arise
        </p>
      </div>
      <p className="text-slate-600 text-base mb-2 max-w-3xl">
        Every trip follows a journey—from planning and departure to your time
        abroad and eventual return.
      </p>
      <p className="text-slate-600 text-base mb-10 max-w-3xl">
        At each stage, different risks can arise. Some may seem minor at first,
        but can quickly escalate into larger disruptions if not properly
        managed.
      </p>

      <div className="space-y-0 border border-slate-200 rounded-2xl overflow-hidden">
        {riskStages.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-1 lg:grid-cols-[180px_1fr_200px_1fr] gap-0 border-b border-slate-200 last:border-b-0 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}
          >
            {/* Image */}
            <div className="h-36 lg:h-auto bg-slate-200 overflow-hidden flex-shrink-0">
              <img
                src={row.img}
                alt={row.stage}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (
                    e.target as HTMLImageElement
                  ).parentElement!.style.background = "#cbd5e1";
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            {/* Stage + scenario */}
            <div className="p-5 border-r border-slate-200">
              <p className="text-xs font-black text-[#0F2240] uppercase tracking-wide mb-2 leading-snug">
                {row.stage}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                {row.scenario}
              </p>
            </div>
            {/* Impact */}
            <div className="p-5 border-r border-slate-200 bg-red-50/40">
              <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-2">
                Impact:
              </p>
              <ul className="space-y-1">
                {row.impact.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <span className="w-1 h-1 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Insurance response */}
            <div className="p-5 bg-blue-50/40">
              <p className="text-xs font-bold text-[#1B3A6B] uppercase tracking-wider mb-2">
                How insurance responds:
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                {row.response}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-7">
        <p className="text-slate-700 text-base leading-relaxed mb-2">
          Each of these scenarios represents a different stage of your
          journey—but they all have one thing in common: they can happen when
          you least expect them.
        </p>
        <p className="text-slate-600 text-base leading-relaxed">
          The role of travel insurance is to ensure that when they do, you are
          supported—financially, logistically, and practically—every step of the
          way.
        </p>
      </div>
    </div>
  </section>
);

// ─── Section 5: What Is Covered vs Not ──────────────────────────────────────

const coverageGroups = [
  {
    title: "HEALTH-RELATED RISKS",
    covered: [
      "Emergency medical treatment",
      "Hospitalization and surgery",
      "Emergency evacuation and repatriation",
      "Outpatient consultations",
    ],
    excluded: [
      "Undeclared pre-existing conditions",
      "Treatment without medical necessity",
      "Routine or elective procedures",
      "Treatment outside approved channels (where required)",
    ],
  },
  {
    title: "TRAVEL DISRUPTION RISKS",
    covered: [
      "Flight delays and missed connections",
      "Trip cancellation due to unforeseen events",
      "Trip interruption due to emergencies",
      "Additional accommodation and transport costs",
    ],
    excluded: [
      "Delays known before departure",
      "Voluntary cancellation without valid cause",
      "Changes due to personal preference",
      "Failure to check in or travel as scheduled",
    ],
  },
  {
    title: "PERSONAL BELONGINGS RISKS",
    covered: [
      "Loss or theft of baggage",
      "Delayed baggage support",
      "Replacement of essential items",
      "Personal effects within limits",
    ],
    excluded: [
      "Unattended or negligently handled items",
      "Normal wear and tear",
      "High-value items beyond policy limits",
      "Items not reported to relevant authorities",
    ],
  },
  {
    title: "LIABILITY & THIRD-PARTY RISKS",
    covered: [
      "Accidental damage to third-party property",
      "Injury caused to another person",
      "Legal costs (within limits)",
      "Personal liability while travelling",
    ],
    excluded: [
      "Intentional acts",
      "Illegal activities",
      "Liability arising from professional activities",
      "Claims outside policy scope",
    ],
  },
  {
    title: "GENERAL POLICY CONDITIONS",
    covered: [
      "Emergency assistance services",
      "24/7 support coordination",
      "Claims within policy terms",
      "Cover within insured period",
    ],
    excluded: [
      "Failure to follow claims procedures",
      "Claims without documentation",
      "Travel against medical advice",
      "High-risk activities (unless added)",
    ],
  },
];

const CoverageTable = () => (
  <section className="py-20 px-6 sm:px-10 lg:px-16 bg-slate-50">
    <div className="max-w-7xl mx-auto">
      <div className="mb-4">
        <p className="text-xs font-bold text-[#1B3A6B] uppercase tracking-widest mb-2">
          Coverage details
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2240] mb-2">
          WHAT IS COVERED VS WHAT IS NOT
        </h2>
        <p className="text-slate-500 text-base mb-3">
          What your travel insurance covers—and where the limits apply
        </p>
      </div>
      <p className="text-slate-600 text-base leading-relaxed mb-2 max-w-3xl">
        Travel insurance is designed to protect you against unexpected events.
        However, like any insurance product, it operates within defined terms.
      </p>
      <p className="text-slate-600 text-base leading-relaxed mb-10 max-w-3xl">
        Understanding both what is covered and what falls outside the scope of
        cover helps you make informed decisions and avoid surprises during a
        claim.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {coverageGroups.map((group, i) => (
          <div
            key={i}
            className={`bg-white rounded-2xl border border-slate-200 overflow-hidden ${i === 4 ? "lg:col-span-2" : ""}`}
          >
            <div className="bg-[#0F2240] px-5 py-3">
              <h3 className="text-white font-bold text-sm tracking-wide">
                {group.title}
              </h3>
            </div>
            <div className="grid grid-cols-2 divide-x divide-slate-100">
              <div className="p-5">
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Covered
                </p>
                <ul className="space-y-2">
                  {group.covered.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-5 bg-red-50/30">
                <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Not Covered (Exclusions)
                </p>
                <ul className="space-y-2">
                  {group.excluded.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-slate-500"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <p className="text-slate-700 text-sm leading-relaxed">
            Most claim challenges do not arise because something isn't
            covered—but because it falls outside the defined terms or was not
            properly declared.
          </p>
        </div>
        <div className="bg-[#0F2240] rounded-2xl p-6">
          <p className="text-white/80 text-sm leading-relaxed mb-3">
            At GoPay, we take time to walk you through both coverage and
            exclusions before you travel.
          </p>
          <p className="text-white/70 text-sm leading-relaxed">
            This ensures that you understand your policy clearly, make informed
            decisions, and avoid unexpected outcomes during a claim. The goal is
            not just to have cover—but to have clarity on how that cover works
            when you need it.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// ─── Section 6: How Claims Work ──────────────────────────────────────────────

const claimsSteps = [
  {
    num: 1,
    title: "Incident Occurs",
    color: "bg-blue-600",
    text: "An unexpected situation arises—this could be a medical issue, travel disruption, or loss of personal belongings.",
    gopay: null,
  },
  {
    num: 2,
    title: "Notify & Seek Guidance",
    color: "bg-indigo-600",
    text: "You (or someone on your behalf) notify the emergency assistance provider or reach out to GoPay for immediate guidance. Early notification ensures that the right steps are taken from the beginning.",
    gopay: null,
  },
  {
    num: 3,
    title: "Assessment & Direction",
    color: "bg-violet-600",
    text: "Based on the situation, you are guided on what to do next—whether it is seeking treatment, arranging alternative travel, or reporting a loss. Pre-authorization may be required to ensure treatment is approved and coordinated.",
    gopay: null,
  },
  {
    num: 4,
    title: "Documentation",
    color: "bg-purple-700",
    text: "You collect and submit the required documents, such as: Medical reports, Receipts and invoices, Travel confirmations, Incident reports (e.g., airline or police reports).",
    gopay: null,
  },
  {
    num: 5,
    title: "Claim Submission",
    color: "bg-[#0F2240]",
    text: "The claim is formally submitted to the insurer for review.",
    gopay:
      "We assist in ensuring that all documentation is complete and correctly presented.",
  },
];

const HowClaims = () => (
  <section className="py-20 px-6 sm:px-10 lg:px-16 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="mb-4">
        <p className="text-xs font-bold text-[#1B3A6B] uppercase tracking-widest mb-2">
          Claims support
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2240] mb-2">
          HOW CLAIMS WORK
        </h2>
        <p className="text-slate-500 text-base mb-3">
          When something happens, here's what to expect
        </p>
      </div>
      <p className="text-slate-600 text-base leading-relaxed mb-2 max-w-3xl">
        The true value of travel insurance is experienced at the point of a
        claim.
      </p>
      <p className="text-slate-600 text-base leading-relaxed mb-2 max-w-3xl">
        In an unfamiliar environment, knowing what to do—and having the right
        support—makes all the difference.
      </p>
      <p className="text-slate-600 text-base leading-relaxed mb-10 max-w-3xl">
        At GoPay, we guide you through the entire process, ensuring that you are
        not navigating it alone.
      </p>

      <h3 className="text-lg font-bold text-[#0F2240] mb-6">
        THE CLAIMS JOURNEY
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
        {claimsSteps.map((step) => (
          <div
            key={step.num}
            className={`rounded-2xl overflow-hidden flex flex-col`}
          >
            <div className={`${step.color} px-4 py-3 flex items-center gap-3`}>
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {step.num}
              </span>
              <p className="text-white font-bold text-sm leading-snug">
                {step.title}
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 border-t-0 rounded-b-2xl p-4 flex-1 flex flex-col">
              <p className="text-slate-600 text-sm leading-relaxed flex-1">
                {step.text}
              </p>
              {step.gopay && (
                <div className="mt-3 pt-3 border-t border-slate-200">
                  <p className="text-xs font-bold text-[#1B3A6B] uppercase tracking-wide mb-1">
                    GoPay Role:
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.gopay}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <p className="text-slate-700 text-base font-medium mb-3">
            Many travelers struggle with claims not because they lack cover—but
            because they are unsure of the process.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            At GoPay, we act as your point of support throughout the claims
            journey:
          </p>
          <ul className="space-y-1.5">
            {[
              "Guiding you on next steps",
              "Ensuring proper documentation",
              "Following up with the insurer",
              "Helping resolve issues where they arise",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-sm text-slate-600"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#1B3A6B] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#0F2240] rounded-2xl p-6 flex items-center">
          <p className="text-white/80 text-base leading-relaxed">
            The difference is not just having insurance—it is having support
            that ensures your claim is handled efficiently and fairly.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// ─── Section 7: Risk Assessment Form ────────────────────────────────────────

const RiskAssessmentForm = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    insuranceType: [] as string[],
    hasExisting: "",
    biggestConcern: "",
    otherConcern: "",
    urgency: "",
    additionalInfo: "",
    agreeComms: false,
    agreeData: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const insuranceTypes = [
    "Funeral Insurance",
    "Medical Insurance",
    "Life Insurance",
    "Motor Vehicle",
    "Home Insurance",
    "Travel Insurance",
  ];
  const concerns = [
    "Fair Pricing",
    "Coverage Gaps",
    "Fair Claims Settlement",
    "Speedy Delivery",
    "Other...",
  ];

  const toggleType = (t: string) => {
    setForm((f) => ({
      ...f,
      insuranceType: f.insuranceType.includes(t)
        ? f.insuranceType.filter((x) => x !== t)
        : [...f.insuranceType, t],
    }));
  };

  if (submitted) {
    return (
      <section className="py-20 px-6 sm:px-10 lg:px-16 bg-[#0F2240]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-white"
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
          </div>
          <h3 className="text-3xl font-bold text-white mb-3">
            Assessment Submitted
          </h3>
          <p className="text-white/70 mb-8">
            Our team will review your travel profile and get back to you shortly
            with a tailored recommendation.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F59E0B] text-white font-semibold rounded-xl hover:bg-[#D97706] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-bold text-[#1B3A6B] uppercase tracking-widest mb-2">
            Get started
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2240] mb-2">
            START WITH A TRAVEL RISK ASSESSMENT
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: intro */}
          <div>
            <h3 className="text-xl font-bold text-[#0F2240] mb-5">
              Interested in Travel Insurance?
            </h3>
            <ul className="space-y-3 mb-8">
              {[
                "Our role is to bridge the gap between what clients expect and what insurers actually provide. By doing so, we ensure your cover performs as intended when it matters most.",
                "Backed by a professional team and strategic partnerships with reputable underwriters, we operate as your insurance department—guiding you on structure, coverage, and claims.",
                "As you focus on growth, let us handle the risks. Get in touch with us via call, email, or visit—we're ready to assist.",
                "You can also fill in the form and we'll get back to you in a bit.",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1B3A6B] mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="space-y-3 mb-8">
              {[
                {
                  icon: "📍",
                  text: "Longonot Place, 4th Floor on Kijabe Street, Nairobi",
                },
                { icon: "✉️", text: "info@gopayinsurance.com" },
                { icon: "📞", text: "0715 664 233" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-slate-600 text-sm"
                >
                  <span>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            {/* Right side of left col: prefer to speak */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                At GoPay, we begin with a simple assessment to understand your
                travel profile. This allows us to recommend cover that is both
                relevant and practical.
              </p>
              <p className="text-slate-500 text-sm mb-5">
                Prefer to speak to someone? Our team is available to guide you
                through your options and answer any questions you may have.
              </p>
              <div className="flex gap-3">
                <a
                  href="tel:0715664233"
                  className="flex-1 text-center px-4 py-2.5 rounded-xl border-2 border-[#0F2240] text-[#0F2240] text-sm font-semibold hover:bg-[#0F2240] hover:text-white transition-colors"
                >
                  Call Us
                </a>
                <a
                  href="https://wa.me/254715664233"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold transition-colors"
                >
                  Request a Callback
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white border border-slate-200 rounded-2xl p-7">
            <p className="text-slate-600 text-sm mb-6">
              Let us help you structure the right travel cover for your journey.
            </p>

            {step === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, firstName: e.target.value }))
                      }
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-[#1B3A6B] focus:outline-none text-sm text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, lastName: e.target.value }))
                      }
                      className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-[#1B3A6B] focus:outline-none text-sm text-slate-800"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-[#1B3A6B] focus:outline-none text-sm text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Mobile Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <span className="px-3 py-2.5 bg-slate-100 border-2 border-slate-200 rounded-xl text-sm text-slate-600 font-medium">
                      🇰🇪 +254
                    </span>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, phone: e.target.value }))
                      }
                      className="flex-1 px-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-[#1B3A6B] focus:outline-none text-sm text-slate-800"
                      placeholder="7XX XXX XXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Birth Date
                  </label>
                  <input
                    type="date"
                    value={form.birthDate}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, birthDate: e.target.value }))
                    }
                    className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-[#1B3A6B] focus:outline-none text-sm text-slate-800"
                  />
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="w-full py-3 bg-[#0F2240] hover:bg-[#1B3A6B] text-white font-semibold rounded-xl transition-colors text-sm"
                >
                  Next →
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-3">
                    What type of personal insurance would you like to discuss?
                  </label>
                  <div className="space-y-2">
                    {insuranceTypes.map((t) => (
                      <label
                        key={t}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${form.insuranceType.includes(t) ? "border-[#1B3A6B] bg-[#1B3A6B]" : "border-slate-300"}`}
                          onClick={() => toggleType(t)}
                        >
                          {form.insuranceType.includes(t) && (
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm text-slate-700">{t}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-3">
                    Do you currently have the above selected insurance?
                  </label>
                  <div className="flex gap-4">
                    {["No", "Yes"].map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() =>
                          setForm((f) => ({ ...f, hasExisting: opt }))
                        }
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${form.hasExisting === opt ? "border-[#1B3A6B] bg-[#1B3A6B]" : "border-slate-300"}`}
                        >
                          {form.hasExisting === opt && (
                            <div className="w-2 h-2 rounded-full bg-white" />
                          )}
                        </div>
                        <span className="text-sm text-slate-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-3">
                    What is your biggest insurance concern?
                  </label>
                  <div className="space-y-2">
                    {concerns.map((c) => (
                      <label
                        key={c}
                        className="flex items-center gap-3 cursor-pointer"
                        onClick={() =>
                          setForm((f) => ({ ...f, biggestConcern: c }))
                        }
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${form.biggestConcern === c ? "border-[#1B3A6B] bg-[#1B3A6B]" : "border-slate-300"}`}
                        >
                          {form.biggestConcern === c && (
                            <div className="w-2 h-2 rounded-full bg-white" />
                          )}
                        </div>
                        <span className="text-sm text-slate-700">{c}</span>
                      </label>
                    ))}
                  </div>
                  {form.biggestConcern === "Other..." && (
                    <input
                      type="text"
                      value={form.otherConcern}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, otherConcern: e.target.value }))
                      }
                      placeholder="Please describe..."
                      className="mt-3 w-full px-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-[#1B3A6B] focus:outline-none text-sm"
                    />
                  )}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 py-3 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-slate-400 transition-colors text-sm"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 py-3 bg-[#0F2240] hover:bg-[#1B3A6B] text-white font-semibold rounded-xl transition-colors text-sm"
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-3">
                    How soon do you need this risk to be insured?
                  </label>
                  <div className="space-y-2">
                    {[
                      "Immediately",
                      "In the next 1 to 2 months",
                      "I'm not sure",
                    ].map((opt) => (
                      <label
                        key={opt}
                        className="flex items-center gap-3 cursor-pointer"
                        onClick={() => setForm((f) => ({ ...f, urgency: opt }))}
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${form.urgency === opt ? "border-[#1B3A6B] bg-[#1B3A6B]" : "border-slate-300"}`}
                        >
                          {form.urgency === opt && (
                            <div className="w-2 h-2 rounded-full bg-white" />
                          )}
                        </div>
                        <span className="text-sm text-slate-700">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Is there anything else you would like us to know?
                  </label>
                  <textarea
                    rows={3}
                    value={form.additionalInfo}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, additionalInfo: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#1B3A6B] focus:outline-none text-sm resize-none"
                    placeholder="Any additional context about your insurance needs..."
                  />
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-500 leading-relaxed">
                  Insurance Agency Limited is committed to safeguarding and
                  respecting your privacy. We will only use your personal
                  information to manage your account and deliver the products
                  and services you have requested from us. From time to time, we
                  would also like to contact you with information about our
                  products and services. If you agree, please indicate below how
                  you would like us to contact you:
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 flex-shrink-0 transition-colors ${form.agreeComms ? "border-[#1B3A6B] bg-[#1B3A6B]" : "border-slate-300"}`}
                    onClick={() =>
                      setForm((f) => ({ ...f, agreeComms: !f.agreeComms }))
                    }
                  >
                    {form.agreeComms && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-xs text-slate-600 leading-relaxed">
                    I agree to receive other communications from GoPay Insurance
                    Agency Limited.
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 flex-shrink-0 transition-colors ${form.agreeData ? "border-[#1B3A6B] bg-[#1B3A6B]" : "border-slate-300"}`}
                    onClick={() =>
                      setForm((f) => ({ ...f, agreeData: !f.agreeData }))
                    }
                  >
                    {form.agreeData && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="text-xs text-slate-600 leading-relaxed">
                    I agree to allow GoPay Insurance Agency Limited to store and
                    process my personal data.{" "}
                    <span className="text-red-500">*</span>
                  </span>
                </label>

                <p className="text-xs text-slate-400 leading-relaxed">
                  You may unsubscribe from these communications at any time. For
                  more information on how to unsubscribe, our privacy practices,
                  and how we are committed to protecting and respecting your
                  privacy, please review our{" "}
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>
                  .
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 py-3 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-slate-400 transition-colors text-sm"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => {
                      if (form.agreeData) setSubmitted(true);
                    }}
                    disabled={!form.agreeData}
                    className="flex-1 py-3 bg-[#F59E0B] hover:bg-[#D97706] disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold rounded-xl transition-colors text-sm"
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Section 8: FAQ ──────────────────────────────────────────────────────────

const faqs = [
  {
    q: "Do I really need travel insurance when I travel?",
    a: "YES – It protects you from unexpected costs like medical emergencies, flight delays, or lost baggage. GoPay helps you compare and access suitable cover from trusted insurers.",
  },
  {
    q: "Is travel insurance required for visas or international travel?",
    a: "YES – Many countries require proof of travel insurance before issuing visas. GoPay helps you obtain compliant policies quickly.",
  },
  {
    q: "Does GoPay provide travel insurance directly?",
    a: "NO – GoPay is an intermediary. We do not underwrite risk; we connect you to licensed insurance companies offering travel cover.",
  },
  {
    q: "Can I choose between different insurance providers through GoPay?",
    a: "YES – We help you compare options from different insurers so you can select the most suitable cover for your needs and budget.",
  },
  {
    q: "Can I cover my family under one travel insurance policy?",
    a: "YES – Through participating insurers, family travel policies are available covering spouses and children under one plan.",
  },
  {
    q: "Can seniors be covered under travel insurance arranged via GoPay?",
    a: "YES – We help you access insurers who offer senior-friendly travel cover, subject to age limits and medical underwriting.",
  },
  {
    q: "Are there age limits for travel insurance?",
    a: "YES – Age limits vary by insurer. GoPay helps you identify providers that accept your age category.",
  },
  {
    q: "Does travel insurance cover emergency medical expenses abroad?",
    a: "YES – Most insurer plans include emergency medical treatment, hospitalization, and urgent care abroad.",
  },
  {
    q: "Is emergency evacuation or repatriation covered?",
    a: "YES – Depending on the insurer and plan selected, emergency evacuation or return home is included for serious medical cases.",
  },
  {
    q: "Does travel insurance cover trip cancellations?",
    a: "YES – Provided the reason falls under insured events defined by the selected insurer (e.g., illness or emergencies).",
  },
  {
    q: "Are flight delays and missed connections covered?",
    a: "YES – Many insurer policies include compensation for delays, accommodation, and rebooking costs.",
  },
  {
    q: "Is baggage loss or delay covered?",
    a: "YES – Most insurer policies offer compensation for lost, stolen, or delayed luggage within set limits.",
  },
  {
    q: "Does travel insurance include COVID-19 cover?",
    a: "SOMETIMES YES – Coverage depends on the insurer and specific plan terms.",
  },
  {
    q: "Can I buy or extend travel insurance through GoPay after I've already travelled?",
    a: "YES (limited cases) – Some insurers allow this, but benefits may be restricted compared to pre-departure purchase.",
  },
  {
    q: "What determines the cost of travel insurance?",
    a: "YES – Premiums depend on the insurer selected, destination, travel duration, age, and level of cover chosen. GoPay helps you find competitive options.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <p className="text-xs font-bold text-[#1B3A6B] uppercase tracking-widest mb-2">
            Common questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2240]">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-1">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-slate-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm font-semibold text-[#0F2240] leading-snug">
                  {i + 1}. {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5 transition-transform ${open === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-4 bg-blue-50/40 border-t border-slate-100">
                  <p className="text-sm text-slate-600 leading-relaxed pt-3">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Final CTA ────────────────────────────────────────────────────────────────

const FinalCTA = () => (
  <section className="py-16 px-6 sm:px-10 lg:px-16 bg-[#0F2240]">
    <div className="max-w-4xl mx-auto text-center">
      <h3 className="text-3xl font-bold text-white mb-3">
        Ready to travel with confidence?
      </h3>
      <p className="text-white/70 mb-8 text-base">
        Get a tailored travel insurance quote in minutes. No jargon, no
        pressure.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/quote"
          className="px-8 py-4 bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
        >
          Get Instant Cover
        </Link>
        <Link
          to="/appointment"
          className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
        >
          Speak to an Advisor
        </Link>
      </div>
    </div>
  </section>
);

// ─── Page Assembly ────────────────────────────────────────────────────────────

const TravelInsurance = () => (
  <div className="min-h-screen bg-white">
    <Hero />
    <WhyItMatters />
    <WhatIsIt />
    <TravelRiskMap />
    <CoverageTable />
    <HowClaims />
    <RiskAssessmentForm />
    <FAQ />
    <FinalCTA />
  </div>
);

export default TravelInsurance;
