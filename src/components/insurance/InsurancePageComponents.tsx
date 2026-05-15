import { useState } from "react";
import { Link } from "react-router-dom";

// ─────────────────────────────────────────────────────────────────────────────
// SHARED TYPES
// ─────────────────────────────────────────────────────────────────────────────

export interface HeroProps {
  title: string;
  tagline: string;
  body1: string;
  body2: string;
  heroImage: string; // path e.g. "/images/home-hero.jpg"
  accentColor?: string; // tailwind bg class for pill badge
  badge?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
}

export interface WhyCard {
  img: string;
  text: string;
}

export interface WhyProps {
  sectionLabel: string;
  heading: string;
  subheading: string;
  cards: WhyCard[];
  pullQuote: {
    eyebrow: string;
    headline: string;
    body1: string;
    body2: string;
  };
}

export interface WhatCard {
  img: string;
  title: string;
  text: string;
  bullets?: { label: string; desc: string }[];
}

export interface WhatProps {
  sectionLabel: string;
  heading: string;
  subheading: string;
  intro1: string;
  intro2: string;
  cards: WhatCard[];
  closing1: string;
  closing2: string;
}

export interface RiskRow {
  img: string;
  stage: string;
  scenario: string;
  impact: string[];
  response: string;
}

export interface RiskMapProps {
  sectionLabel: string;
  heading: string;
  subheading: string;
  intro1: string;
  intro2: string;
  rows: RiskRow[];
  closing1: string;
  closing2: string;
}

export interface CoverageGroup {
  title: string;
  covered: string[];
  excluded: string[];
  fullWidth?: boolean;
}

export interface CoverageProps {
  sectionLabel: string;
  heading: string;
  subheading: string;
  intro1: string;
  intro2: string;
  groups: CoverageGroup[];
  note1: string;
  note2: string;
}

export interface ClaimStep {
  num: number;
  title: string;
  color: string; // tailwind bg class
  text: string;
  gopayRole?: string;
}

export interface ClaimsProps {
  sectionLabel: string;
  heading: string;
  subheading: string;
  intro1: string;
  intro2: string;
  intro3: string;
  steps: ClaimStep[];
  gopayBullets: string[];
  closing: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FAQProps {
  sectionLabel: string;
  heading: string;
  subheading?: string;
  items: FaqItem[];
}

export interface CTAProps {
  heading: string;
  body: string;
  primaryLabel: string;
  secondaryLabel: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────────────

export const PageHero = ({
  title,
  tagline,
  body1,
  body2,
  heroImage,
  badge = "Personal Insurance",
  ctaPrimary = { label: "Get Instant Cover", href: "/quote" },
  ctaSecondary = { label: "Assess My Risk", href: "/appointment" },
}: HeroProps) => (
  <section className="relative min-h-[80vh] flex items-end overflow-hidden bg-[#0F2240]">
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${heroImage}')` }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#0F2240]/95 via-[#0F2240]/75 to-[#0F2240]/20" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2240]/80 via-transparent to-transparent" />
    <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-20 pt-40 w-full">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-white/80 text-xs font-medium tracking-widest uppercase">
            {badge}
          </span>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
          {title}
        </h1>
        <p className="text-white/60 text-lg font-light mb-3">{tagline}</p>
        <p className="text-white/80 text-base leading-relaxed mb-4 max-w-xl">
          {body1}
        </p>
        <p className="text-white/70 text-base leading-relaxed mb-10 max-w-xl">
          {body2}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to={ctaPrimary.href}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold text-sm shadow-lg shadow-amber-500/30 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            {ctaPrimary.label}
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
            to={ctaSecondary.href}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border-2 border-white/30 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/50 transition-all duration-200"
          >
            {ctaSecondary.label}
          </Link>
        </div>
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────────────────────
// WHY IT MATTERS
// ─────────────────────────────────────────────────────────────────────────────

export const WhyItMatters = ({
  sectionLabel,
  heading,
  subheading,
  cards,
  pullQuote,
}: WhyProps) => (
  <section className="py-20 px-6 sm:px-10 lg:px-16 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <p className="text-xs font-bold text-[#1B3A6B] uppercase tracking-widest mb-2">
          {sectionLabel}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2240] mb-2">
          {heading}
        </h2>
        <p className="text-slate-500 text-base">{subheading}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {cards.map((card, i) => (
          <div key={i} className="flex flex-col">
            <div className="h-52 rounded-2xl overflow-hidden bg-slate-200 mb-4 flex-shrink-0">
              <img
                src={card.img}
                alt={`Scenario ${i + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const p = (e.target as HTMLImageElement).parentElement!;
                  p.style.background = "#e2e8f0";
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
      <div className="bg-[#0F2240] rounded-2xl p-8 sm:p-10">
        <p className="text-white/60 text-sm mb-3 italic">{pullQuote.eyebrow}</p>
        <p className="text-white text-lg sm:text-xl font-medium leading-relaxed mb-4">
          {pullQuote.headline}
        </p>
        <p className="text-white/80 text-base leading-relaxed mb-4">
          {pullQuote.body1}
        </p>
        <p className="text-white/70 text-base leading-relaxed">
          {pullQuote.body2}
        </p>
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────────────────────
// WHAT IS IT
// ─────────────────────────────────────────────────────────────────────────────

export const WhatIsIt = ({
  sectionLabel,
  heading,
  subheading,
  intro1,
  intro2,
  cards,
  closing1,
  closing2,
}: WhatProps) => (
  <section className="py-20 px-6 sm:px-10 lg:px-16 bg-slate-50">
    <div className="max-w-7xl mx-auto">
      <div className="mb-4">
        <p className="text-xs font-bold text-[#1B3A6B] uppercase tracking-widest mb-2">
          {sectionLabel}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2240] mb-2">
          {heading}
        </h2>
        <p className="text-slate-500 text-base mb-3">{subheading}</p>
      </div>
      <p className="text-slate-600 text-base leading-relaxed mb-2 max-w-3xl">
        {intro1}
      </p>
      <p className="text-slate-600 text-base leading-relaxed mb-10 max-w-3xl">
        {intro2}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {cards.map((card, i) => (
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
                  const p = (e.target as HTMLImageElement).parentElement!;
                  p.style.background = "#e2e8f0";
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
          {closing1}
        </p>
        <p className="text-slate-600 text-base leading-relaxed">{closing2}</p>
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────────────────────
// RISK MAP
// ─────────────────────────────────────────────────────────────────────────────

export const RiskMap = ({
  sectionLabel,
  heading,
  subheading,
  intro1,
  intro2,
  rows,
  closing1,
  closing2,
}: RiskMapProps) => (
  <section className="py-20 px-6 sm:px-10 lg:px-16 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="mb-4">
        <p className="text-xs font-bold text-[#1B3A6B] uppercase tracking-widest mb-2">
          {sectionLabel}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2240] mb-2">
          {heading}
        </h2>
        <p className="text-slate-500 text-base mb-2">{subheading}</p>
      </div>
      <p className="text-slate-600 text-base mb-2 max-w-3xl">{intro1}</p>
      <p className="text-slate-600 text-base mb-10 max-w-3xl">{intro2}</p>
      <div className="space-y-0 border border-slate-200 rounded-2xl overflow-hidden">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-1 lg:grid-cols-[180px_1fr_200px_1fr] border-b border-slate-200 last:border-b-0 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}
          >
            <div className="h-36 lg:h-auto bg-slate-200 overflow-hidden flex-shrink-0">
              <img
                src={row.img}
                alt={row.stage}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const p = (e.target as HTMLImageElement).parentElement!;
                  p.style.background = "#cbd5e1";
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div className="p-5 border-r border-slate-200">
              <p className="text-xs font-black text-[#0F2240] uppercase tracking-wide mb-2 leading-snug">
                {row.stage}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                {row.scenario}
              </p>
            </div>
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
          {closing1}
        </p>
        <p className="text-slate-600 text-base leading-relaxed">{closing2}</p>
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────────────────────
// COVERAGE TABLE
// ─────────────────────────────────────────────────────────────────────────────

export const CoverageTable = ({
  sectionLabel,
  heading,
  subheading,
  intro1,
  intro2,
  groups,
  note1,
  note2,
}: CoverageProps) => (
  <section className="py-20 px-6 sm:px-10 lg:px-16 bg-slate-50">
    <div className="max-w-7xl mx-auto">
      <div className="mb-4">
        <p className="text-xs font-bold text-[#1B3A6B] uppercase tracking-widest mb-2">
          {sectionLabel}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2240] mb-2">
          {heading}
        </h2>
        <p className="text-slate-500 text-base mb-3">{subheading}</p>
      </div>
      <p className="text-slate-600 text-base leading-relaxed mb-2 max-w-3xl">
        {intro1}
      </p>
      <p className="text-slate-600 text-base leading-relaxed mb-10 max-w-3xl">
        {intro2}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {groups.map((group, i) => (
          <div
            key={i}
            className={`bg-white rounded-2xl border border-slate-200 overflow-hidden ${group.fullWidth ? "lg:col-span-2" : ""}`}
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
          <p className="text-slate-700 text-sm leading-relaxed">{note1}</p>
        </div>
        <div className="bg-[#0F2240] rounded-2xl p-6">
          <p className="text-white/80 text-sm leading-relaxed">{note2}</p>
        </div>
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────────────────────
// HOW CLAIMS WORK
// ─────────────────────────────────────────────────────────────────────────────

export const HowClaims = ({
  sectionLabel,
  heading,
  subheading,
  intro1,
  intro2,
  intro3,
  steps,
  gopayBullets,
  closing,
}: ClaimsProps) => (
  <section className="py-20 px-6 sm:px-10 lg:px-16 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="mb-4">
        <p className="text-xs font-bold text-[#1B3A6B] uppercase tracking-widest mb-2">
          {sectionLabel}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2240] mb-2">
          {heading}
        </h2>
        <p className="text-slate-500 text-base mb-3">{subheading}</p>
      </div>
      <p className="text-slate-600 text-base leading-relaxed mb-2 max-w-3xl">
        {intro1}
      </p>
      <p className="text-slate-600 text-base leading-relaxed mb-2 max-w-3xl">
        {intro2}
      </p>
      <p className="text-slate-600 text-base leading-relaxed mb-10 max-w-3xl">
        {intro3}
      </p>
      <h3 className="text-lg font-bold text-[#0F2240] mb-6">
        THE CLAIMS JOURNEY
      </h3>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${steps.length} gap-4 mb-10`}
      >
        {steps.map((step) => (
          <div
            key={step.num}
            className="flex flex-col rounded-2xl overflow-hidden"
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
              {step.gopayRole && (
                <div className="mt-3 pt-3 border-t border-slate-200">
                  <p className="text-xs font-bold text-[#1B3A6B] uppercase tracking-wide mb-1">
                    GoPay Role:
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.gopayRole}
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
            At GoPay, we act as your point of support throughout the claims
            journey:
          </p>
          <ul className="space-y-1.5">
            {gopayBullets.map((item, i) => (
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
          <p className="text-white/80 text-base leading-relaxed">{closing}</p>
        </div>
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────────────────────────────────────
// RISK ASSESSMENT FORM (shared across all product pages)
// ─────────────────────────────────────────────────────────────────────────────

export const RiskAssessmentForm = ({
  productLabel = "Home",
}: {
  productLabel?: string;
}) => {
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
  const toggle = (t: string) =>
    setForm((f) => ({
      ...f,
      insuranceType: f.insuranceType.includes(t)
        ? f.insuranceType.filter((x) => x !== t)
        : [...f.insuranceType, t],
    }));

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
            Our team will review your profile and contact you shortly with a
            tailored recommendation.
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

  const radio = (field: keyof typeof form, val: string) => (
    <label
      key={val}
      className="flex items-center gap-3 cursor-pointer"
      onClick={() => setForm((f) => ({ ...f, [field]: val }))}
    >
      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${form[field] === val ? "border-[#1B3A6B] bg-[#1B3A6B]" : "border-slate-300"}`}
      >
        {form[field] === val && (
          <div className="w-2 h-2 rounded-full bg-white" />
        )}
      </div>
      <span className="text-sm text-slate-700">{val}</span>
    </label>
  );

  const checkbox = (field: "agreeComms" | "agreeData", label: string) => (
    <label className="flex items-start gap-3 cursor-pointer">
      <div
        className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 flex-shrink-0 transition-colors ${form[field] ? "border-[#1B3A6B] bg-[#1B3A6B]" : "border-slate-300"}`}
        onClick={() => setForm((f) => ({ ...f, [field]: !f[field] }))}
      >
        {form[field] && (
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
      <span className="text-xs text-slate-600 leading-relaxed">{label}</span>
    </label>
  );

  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-bold text-[#1B3A6B] uppercase tracking-widest mb-2">
            Get started
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2240] mb-2">
            START WITH A RISK ASSESSMENT
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <h3 className="text-xl font-bold text-[#0F2240] mb-5">
              Interested in {productLabel} Insurance?
            </h3>
            <ul className="space-y-3 mb-8">
              {[
                "Our role is to bridge the gap between what clients expect and what insurers actually provide. By doing so, we ensure your cover performs as intended when it matters most.",
                "Backed by a professional team and strategic partnerships with reputable underwriters, we operate as your insurance department—guiding you on structure, coverage, and claims.",
                "As you focus on your life, let us handle the risks. Get in touch with us via call, email, or visit—we're ready to assist.",
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
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                At GoPay, we begin with a simple assessment to understand your
                profile. This allows us to recommend cover that is both relevant
                and practical.
              </p>
              <p className="text-slate-500 text-sm mb-5">
                Prefer to speak to someone? Our team is available to guide you
                through your options.
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
              Let us help you structure the right cover for you.
            </p>
            {/* Step indicators */}
            <div className="flex gap-2 mb-6">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`flex-1 h-1.5 rounded-full transition-colors ${step >= s ? "bg-[#1B3A6B]" : "bg-slate-200"}`}
                />
              ))}
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ["First Name *", "firstName"],
                    ["Last Name", "lastName"],
                  ].map(([label, key]) => (
                    <div key={key}>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        {label}
                      </label>
                      <input
                        type="text"
                        value={form[key as keyof typeof form] as string}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, [key]: e.target.value }))
                        }
                        className="w-full px-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-[#1B3A6B] focus:outline-none text-sm text-slate-800"
                      />
                    </div>
                  ))}
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
                  disabled={!form.firstName || !form.phone}
                  className="w-full py-3 bg-[#0F2240] hover:bg-[#1B3A6B] disabled:bg-slate-200 disabled:text-slate-400 text-white font-semibold rounded-xl transition-colors text-sm"
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
                        onClick={() => toggle(t)}
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${form.insuranceType.includes(t) ? "border-[#1B3A6B] bg-[#1B3A6B]" : "border-slate-300"}`}
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
                    {["No", "Yes"].map((opt) => radio("hasExisting", opt))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-3">
                    What is your biggest insurance concern?
                  </label>
                  <div className="space-y-2">
                    {concerns.map((c) => radio("biggestConcern", c))}
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
                    ].map((opt) => radio("urgency", opt))}
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
                    placeholder="Any additional context..."
                  />
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-500 leading-relaxed">
                  GoPay Insurance Agency Limited is committed to safeguarding
                  and respecting your privacy. We will only use your personal
                  information to manage your account and deliver the products
                  and services you have requested.
                </div>
                {checkbox(
                  "agreeComms",
                  "I agree to receive other communications from GoPay Insurance Agency Limited.",
                )}
                {checkbox(
                  "agreeData",
                  "I agree to allow GoPay Insurance Agency Limited to store and process my personal data. *",
                )}
                <p className="text-xs text-slate-400 leading-relaxed">
                  You may unsubscribe at any time. Please review our{" "}
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

// ─────────────────────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────────────────────

export const FAQ = ({ sectionLabel, heading, subheading, items }: FAQProps) => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <p className="text-xs font-bold text-[#1B3A6B] uppercase tracking-widest mb-2">
            {sectionLabel}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2240] mb-2">
            {heading}
          </h2>
          {subheading && (
            <p className="text-slate-500 text-base italic">{subheading}</p>
          )}
        </div>
        <div className="space-y-1">
          {items.map((faq, i) => (
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

// ─────────────────────────────────────────────────────────────────────────────
// FINAL CTA
// ─────────────────────────────────────────────────────────────────────────────

export const FinalCTA = ({
  heading,
  body,
  primaryLabel,
  secondaryLabel,
}: CTAProps) => (
  <section className="py-16 px-6 sm:px-10 lg:px-16 bg-[#0F2240]">
    <div className="max-w-4xl mx-auto text-center">
      <h3 className="text-3xl font-bold text-white mb-3">{heading}</h3>
      <p className="text-white/70 mb-8 text-base">{body}</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/quote"
          className="px-8 py-4 bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
        >
          {primaryLabel}
        </Link>
        <Link
          to="/appointment"
          className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
        >
          {secondaryLabel}
        </Link>
      </div>
    </div>
  </section>
);
