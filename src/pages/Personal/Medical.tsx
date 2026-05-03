import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../../components/shared/PageHero";

const medicalPlans = {
  juniors: {
    label: "Juniors Cover",
    icon: "👶",
    ageRange: "0 – 18 years",
    color: "bg-pink-50 border-pink-200",
    activeColor: "bg-pink-600",
    tagColor: "bg-pink-100 text-pink-700",
    description:
      "Comprehensive medical cover designed specifically for children, covering routine visits, hospitalizations, and vaccinations.",
    plans: [
      {
        name: "Junior Basic",
        price: "From KES 4,500/yr",
        inpatient: "500K",
        outpatient: "Clinic visits",
        dental: false,
        optical: false,
        maternity: false,
      },
      {
        name: "Junior Plus",
        price: "From KES 9,000/yr",
        inpatient: "1M",
        outpatient: "Unlimited GP",
        dental: true,
        optical: true,
        maternity: false,
      },
      {
        name: "Junior Premium",
        price: "From KES 18,000/yr",
        inpatient: "2M",
        outpatient: "Specialist included",
        dental: true,
        optical: true,
        maternity: false,
      },
    ],
    benefits: [
      "Immunization cover",
      "Pediatric specialist visits",
      "School medical checks",
      "Emergency hospitalization",
      "Dental & optical (on premium plans)",
    ],
  },
  seniors: {
    label: "Seniors Cover",
    icon: "🧓",
    ageRange: "60+ years",
    color: "bg-teal-50 border-teal-200",
    activeColor: "bg-teal-600",
    tagColor: "bg-teal-100 text-teal-700",
    description:
      "Specialized plans for older adults covering chronic conditions, specialist care, and high inpatient limits.",
    plans: [
      {
        name: "Senior Essential",
        price: "From KES 25,000/yr",
        inpatient: "1M",
        outpatient: "Clinic visits",
        dental: false,
        optical: true,
        maternity: false,
      },
      {
        name: "Senior Comprehensive",
        price: "From KES 55,000/yr",
        inpatient: "3M",
        outpatient: "Specialist visits",
        dental: true,
        optical: true,
        maternity: false,
      },
      {
        name: "Senior Elite",
        price: "From KES 110,000/yr",
        inpatient: "5M",
        outpatient: "Unlimited",
        dental: true,
        optical: true,
        maternity: false,
      },
    ],
    benefits: [
      "Chronic disease management",
      "Physiotherapy cover",
      "Specialist consultations",
      "Dialysis cover",
      "Cancer treatment support",
    ],
  },
  family: {
    label: "Family Cover",
    icon: "👨‍👩‍👧",
    ageRange: "All ages",
    color: "bg-blue-50 border-blue-200",
    activeColor: "bg-blue-600",
    tagColor: "bg-blue-100 text-blue-700",
    description:
      "One policy covering the whole family — parents, children, and even domestic workers. Most popular option for households.",
    plans: [
      {
        name: "Family Starter",
        price: "From KES 35,000/yr",
        inpatient: "1M each",
        outpatient: "Basic GP",
        dental: false,
        optical: false,
        maternity: true,
      },
      {
        name: "Family Plus",
        price: "From KES 75,000/yr",
        inpatient: "2M each",
        outpatient: "GP + Specialist",
        dental: true,
        optical: true,
        maternity: true,
      },
      {
        name: "Family Premium",
        price: "From KES 150,000/yr",
        inpatient: "5M each",
        outpatient: "Unlimited",
        dental: true,
        optical: true,
        maternity: true,
      },
    ],
    benefits: [
      "Covers entire household",
      "Maternity & newborn",
      "Dental & optical options",
      "Emergency evacuation",
      "Wellness check-ups",
    ],
  },
  micro: {
    label: "Micro Covers",
    icon: "🩺",
    ageRange: "18 – 65 years",
    color: "bg-amber-50 border-amber-200",
    activeColor: "bg-amber-600",
    tagColor: "bg-amber-100 text-amber-700",
    description:
      "Lightweight, ultra-affordable medical covers for individuals and low-income earners who need basic but reliable protection.",
    plans: [
      {
        name: "Micro Basic",
        price: "From KES 1,200/yr",
        inpatient: "100K",
        outpatient: false,
        dental: false,
        optical: false,
        maternity: false,
      },
      {
        name: "Micro Plus",
        price: "From KES 2,500/yr",
        inpatient: "250K",
        outpatient: "Clinic only",
        dental: false,
        optical: false,
        maternity: false,
      },
      {
        name: "Micro Family",
        price: "From KES 5,000/yr",
        inpatient: "500K shared",
        outpatient: "Clinic only",
        dental: false,
        optical: false,
        maternity: false,
      },
    ],
    benefits: [
      "No medical exam required",
      "Instant activation",
      "SMS claims reporting",
      "Community hospital cover",
      "Very low premiums",
    ],
  },
  outpatient: {
    label: "Outpatient Only",
    icon: "📋",
    ageRange: "All ages",
    color: "bg-violet-50 border-violet-200",
    activeColor: "bg-violet-600",
    tagColor: "bg-violet-100 text-violet-700",
    description:
      "Pure outpatient cover for those who already have inpatient through their employer or want standalone clinic access.",
    plans: [
      {
        name: "OP Basic",
        price: "From KES 8,000/yr",
        inpatient: "—",
        outpatient: "GP + Pharmacy",
        dental: false,
        optical: false,
        maternity: false,
      },
      {
        name: "OP Plus",
        price: "From KES 15,000/yr",
        inpatient: "—",
        outpatient: "GP + Specialist",
        dental: true,
        optical: true,
        maternity: false,
      },
      {
        name: "OP Premium",
        price: "From KES 30,000/yr",
        inpatient: "—",
        outpatient: "Unlimited + Lab",
        dental: true,
        optical: true,
        maternity: false,
      },
    ],
    benefits: [
      "Flexible top-up option",
      "Wide hospital network",
      "Lab tests & imaging",
      "Pharmacy cover",
      "Mental health sessions",
    ],
  },
};

type CategoryKey = keyof typeof medicalPlans;

const Medical = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("family");
  const plan = medicalPlans[activeCategory];

  return (
    <div>
      <PageHero
        title="Medical Insurance"
        subtitle="From newborns to seniors, we have a medical plan that fits every life stage and every budget."
        breadcrumbs={[
          { label: "Personal", href: "/personal" },
          { label: "Medical Insurance" },
        ]}
        badge="Health Cover"
        gradient="from-[#0A2818] via-[#0E4A2A] to-[#1B7A45]"
      />

      {/* Category tabs */}
      <section className="sticky top-16 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-1 py-3 scrollbar-none">
            {(Object.keys(medicalPlans) as CategoryKey[]).map((key) => {
              const cat = medicalPlans[key];
              const active = activeCategory === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                    active
                      ? "bg-[#1B4FD8] text-white shadow-md shadow-blue-500/20"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <span>{cat.icon}</span>
                  {cat.label}
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${active ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"}`}
                  >
                    {cat.ageRange}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plan content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left — info */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-2xl border border-slate-200 p-7 sticky top-32">
                <div className="text-4xl mb-4">{plan.icon}</div>
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full mb-3 inline-block ${plan.tagColor}`}
                >
                  {plan.ageRange}
                </span>
                <h2 className="text-xl font-bold text-slate-900 mb-3">
                  {plan.label}
                </h2>
                <p className="text-slate-500 text-sm mb-6">
                  {plan.description}
                </p>
                <h3 className="text-sm font-semibold text-slate-800 mb-3 uppercase tracking-wider">
                  Key Benefits
                </h3>
                <ul className="space-y-2">
                  {plan.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <svg
                        className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"
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
                <Link
                  to="/quote"
                  className="mt-7 w-full block text-center bg-[#1B4FD8] text-white font-semibold py-3 rounded-xl hover:bg-[#1740B8] transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Right — plan cards */}
            <div className="lg:w-2/3">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                {plan.label} — Available Plans
              </h2>
              <div className="grid gap-5">
                {plan.plans.map((p, i) => (
                  <div
                    key={p.name}
                    className={`bg-white rounded-2xl border-2 ${i === 1 ? "border-blue-300 shadow-lg shadow-blue-50" : "border-slate-200"} p-6 relative`}
                  >
                    {i === 1 && (
                      <span className="absolute -top-3 left-6 bg-[#1B4FD8] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                        Recommended
                      </span>
                    )}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">
                          {p.name}
                        </h3>
                        <p className="text-blue-600 font-semibold text-sm mt-0.5">
                          {p.price}
                        </p>
                      </div>
                      <Link
                        to="/quote"
                        className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                          i === 1
                            ? "bg-[#1B4FD8] text-white hover:bg-[#1740B8] shadow-md"
                            : "border-2 border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-700"
                        }`}
                      >
                        Select Plan
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { label: "Inpatient", value: p.inpatient || "—" },
                        {
                          label: "Outpatient",
                          value: p.outpatient || "Not included",
                        },
                        {
                          label: "Dental",
                          value: p.dental ? "✓ Included" : "✗ Not included",
                        },
                        {
                          label: "Optical",
                          value: p.optical ? "✓ Included" : "✗ Not included",
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="bg-slate-50 rounded-xl px-3 py-2.5"
                        >
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                            {item.label}
                          </p>
                          <p
                            className={`text-sm font-medium ${
                              typeof item.value === "string"
                                ? item.value.startsWith("✓")
                                  ? "text-emerald-600"
                                  : item.value.startsWith("✗")
                                    ? "text-slate-400"
                                    : "text-slate-800"
                                : "text-slate-800"
                            }`}
                          >
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="text-3xl">💬</div>
                <div>
                  <p className="font-semibold text-slate-800">
                    Can't decide which plan is right?
                  </p>
                  <p className="text-slate-500 text-sm mt-0.5">
                    Our medical advisors will guide you to the perfect cover
                    based on your health needs and budget.
                  </p>
                </div>
                <div className="flex gap-3 sm:ml-auto flex-shrink-0">
                  <Link
                    to="/appointment"
                    className="px-4 py-2.5 bg-[#1B4FD8] text-white font-semibold rounded-xl text-sm hover:bg-[#1740B8] transition-colors"
                  >
                    Book Consultation
                  </Link>
                  <a
                    href="https://wa.me/254715664233"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-emerald-500 text-white font-semibold rounded-xl text-sm hover:bg-emerald-400 transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Medical;
