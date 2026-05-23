import { type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface SubItem {
  label: string;
  href: string;
  description: string;
  icon: ReactNode;
  image?: string;
}

interface Cover {
  section: string;
  path: string;
  description: string;
  accent: string;
  lightBg: string;
  image?: string;
  items: SubItem[];
}

type IconName =
  | "home"
  | "travel"
  | "car"
  | "heart"
  | "motorcycle"
  | "shield"
  | "school"
  | "medical"
  | "device"
  | "business"
  | "document"
  | "cargo"
  | "aviation"
  | "farm"
  | "building"
  | "worker"
  | "umbrella"
  | "machinery"
  | "people"
  | "money"
  | "briefcase"
  | "chart"
  | "compass";

const iconPaths: Record<IconName, string> = {
  home: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  travel:
    "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  car: "M8 17a2 2 0 11-4 0 2 2 0 014 0zM20 17a2 2 0 11-4 0 2 2 0 014 0zM5 17H3v-4l2-5h10l2 5v4h-2M5 17h12M5 13h12",
  heart:
    "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  motorcycle:
    "M5 17a3 3 0 106 0 3 3 0 00-6 0zm8 0a3 3 0 106 0 3 3 0 00-6 0zM8 17l3-7h3l2 4m-5-4H8m8 4h3m-8 0h5",
  shield:
    "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  school:
    "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422A12.083 12.083 0 0118 14.5c0 2.485-2.686 4.5-6 4.5s-6-2.015-6-4.5c0-1.344.316-2.644.84-3.922L12 14z",
  medical:
    "M19 11h-6V5a1 1 0 00-2 0v6H5a1 1 0 000 2h6v6a1 1 0 002 0v-6h6a1 1 0 000-2z",
  device:
    "M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm5 18h.01",
  business:
    "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  document:
    "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5l5 5v11a2 2 0 01-2 2z",
  cargo:
    "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8l2-2zM13 7h4l3 3v3h-7V7z",
  aviation: "M10.5 6L21 3l-3 10.5M10.5 6L3 10l7 3.5M10.5 6l3.5 7.5M10 21l4-7.5",
  farm: "M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6M7 11h2m6 0h2",
  building:
    "M4 21V5a2 2 0 012-2h8a2 2 0 012 2v16M8 7h4M8 11h4M8 15h4M18 21v-8h2v8",
  worker: "M12 12a4 4 0 100-8 4 4 0 000 8zm-7 9a7 7 0 0114 0M9 4h6",
  umbrella: "M12 3a9 9 0 00-9 9h18a9 9 0 00-9-9zm0 9v6a3 3 0 006 0",
  machinery:
    "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
  people:
    "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0",
  money:
    "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
  briefcase:
    "M10 6h4a2 2 0 012 2v1h3a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h3V8a2 2 0 012-2zm0 3h4",
  chart: "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6",
  compass: "M12 21a9 9 0 100-18 9 9 0 000 18zm3-12l-2 5-5 2 2-5 5-2z",
};

const Icon = ({ name }: { name: IconName }) => (
  <svg
    className="w-10 h-10"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d={iconPaths[name]}
    />
  </svg>
);

const allCovers: Cover[] = [
  {
    section: "Personal",
    path: "/personal",
    description:
      "Life, health, accident, motor, travel, and personal protection cover for you and your loved ones.",
    accent: "#185FA5",
    lightBg: "#E6F1FB",
    image: "/images/home-hero.jpg",
    items: [
      {
        label: "Home Insurance",
        href: "/personal/home",
        description:
          "Protect your home, contents, and liability against fire, theft, water damage, and more.",
        icon: <Icon name="home" />,
      },
      {
        label: "Travel Insurance",
        href: "/covers/travel-insurance",
        description:
          "Travel protection for medical emergencies, trip disruption, lost baggage, and delays.",
        icon: <Icon name="travel" />,
      },
      {
        label: "Car Insurance",
        href: "/personal/car",
        description:
          "Comprehensive and third-party motor cover for your vehicle, wherever the road takes you.",
        icon: <Icon name="car" />,
      },
      {
        label: "Individual Life & Pension Insurance",
        href: "/personal/family",
        description:
          "Life protection and pension planning to secure your family and retirement goals.",
        icon: <Icon name="heart" />,
      },
      {
        label: "Motorcycle Insurance",
        href: "/quote",
        description:
          "Motorcycle cover for private riders, including liability and optional own-damage benefits.",
        icon: <Icon name="motorcycle" />,
      },
      {
        label: "Personal Accident",
        href: "/personal/young-adult",
        description:
          "Protection for accidental death, disability, and accident-related medical expenses.",
        icon: <Icon name="shield" />,
      },
      {
        label: "Students Personal Accident",
        href: "/quote",
        description:
          "Accident protection tailored for students at school, during activities, or in transit.",
        icon: <Icon name="school" />,
      },
      {
        label: "Funeral Expenses Insurance",
        href: "/personal/senior",
        description:
          "Quick support to help meet funeral and last-expense costs for covered members.",
        icon: <Icon name="heart" />,
      },
      {
        label: "Health Insurance - Individual",
        href: "/personal/medical",
        description:
          "Individual medical cover with inpatient, outpatient, dental, optical, and maternity options.",
        icon: <Icon name="medical" />,
      },
      {
        label: "Pet Insurance",
        href: "/quote",
        description:
          "Helps cover eligible veterinary treatment and care expenses for your pets.",
        icon: <Icon name="heart" />,
      },
      {
        label: "Device & Gadget Insurance",
        href: "/quote",
        description:
          "Protect phones, laptops, tablets, and gadgets against accidental damage, theft, and related risks.",
        icon: <Icon name="device" />,
      },
    ],
  },
  {
    section: "Corporate / Business",
    path: "/business",
    description:
      "Business insurance solutions to protect your assets, staff, liabilities, cargo, and operations.",
    accent: "#3B6D11",
    lightBg: "#EAF3DE",
    image: "/images/travel-hero.jpg",
    items: [
      {
        label: "SME Business Cover",
        href: "/business/sme",
        description:
          "A bundled cover for SMEs, combining essential protection for assets, liability, and staff.",
        icon: <Icon name="business" />,
      },
      {
        label: "Professional Indemnity",
        href: "/business/liability",
        description:
          "Covers legal costs and compensation where professional advice or service causes a client loss.",
        icon: <Icon name="document" />,
      },
      {
        label: "Marine & Cargo Insurance",
        href: "/industry/transport",
        description:
          "Protect imported, exported, and locally transported cargo against loss or damage in transit.",
        icon: <Icon name="cargo" />,
      },
      {
        label: "Aviation Insurance",
        href: "/quote",
        description:
          "Specialized cover for aviation-related risks, aircraft, operators, and related liabilities.",
        icon: <Icon name="aviation" />,
      },
      {
        label: "Agriculture Insurance",
        href: "/quote",
        description:
          "Risk protection for farms, agribusinesses, crops, livestock, and agricultural operations.",
        icon: <Icon name="farm" />,
      },
      {
        label: "General Liability Insurance",
        href: "/business/liability",
        description:
          "Protects businesses from third-party injury, property damage, and related liability claims.",
        icon: <Icon name="shield" />,
      },
      {
        label: "Company Car Insurance",
        href: "/business/transport",
        description:
          "Motor insurance for company-owned vehicles used in daily business operations.",
        icon: <Icon name="car" />,
      },
      {
        label: "Commercial Property Insurance",
        href: "/business/assets",
        description:
          "Protect premises, stock, equipment, and contents against covered business property risks.",
        icon: <Icon name="building" />,
      },
      {
        label: "Work Injury Benefits Act Insurance",
        href: "/business/employees",
        description:
          "Mandatory employer cover for employees injured while working or during work-related duties.",
        icon: <Icon name="worker" />,
      },
      {
        label: "Commercial Umbrella Insurance",
        href: "/quote",
        description:
          "Adds an extra layer of liability protection above your primary business policies.",
        icon: <Icon name="umbrella" />,
      },
      {
        label: "Machinery Breakdown Insurance",
        href: "/business/assets",
        description:
          "Covers sudden and unforeseen mechanical or electrical breakdown of insured machinery.",
        icon: <Icon name="machinery" />,
      },
      {
        label: "Employers Liability",
        href: "/business/employees",
        description:
          "Protects employers against legal liability claims arising from employee injury or illness.",
        icon: <Icon name="people" />,
      },
      {
        label: "Fidelity Guarantee",
        href: "/business/money",
        description:
          "Covers financial loss caused by employee dishonesty, fraud, theft, or embezzlement.",
        icon: <Icon name="shield" />,
      },
      {
        label: "NSSF Tier 2 to Private Pension Fund",
        href: "/personal/wealth-owner",
        description:
          "Helps employers transition NSSF Tier 2 contributions into an approved private pension fund.",
        icon: <Icon name="money" />,
      },
    ],
  },
  {
    section: "Employee Incentives",
    path: "/business/employees",
    description:
      "Group covers and benefits that help employers protect, reward, and retain their teams.",
    accent: "#047857",
    lightBg: "#DFF7EC",
    image: "/images/industry-cover.jpg",
    items: [
      {
        label: "Group Medical Insurance",
        href: "/business/employees",
        description:
          "Comprehensive inpatient and outpatient health cover for employees under one group policy.",
        icon: <Icon name="medical" />,
      },
      {
        label: "Group Life Insurance",
        href: "/business/employees",
        description:
          "Provides a death benefit to employees' beneficiaries if a covered employee dies in service.",
        icon: <Icon name="heart" />,
      },
      {
        label: "Group Personal Accident Insurance",
        href: "/business/employees",
        description:
          "Accident protection for employees, including death, disability, and medical expenses.",
        icon: <Icon name="shield" />,
      },
      {
        label: "Group Last Expense / Funeral Cover",
        href: "/business/employees",
        description:
          "Group funeral benefit that supports employees' families with last-expense costs.",
        icon: <Icon name="heart" />,
      },
      {
        label: "Group Critical Illness Cover",
        href: "/business/employees",
        description:
          "Provides a lump-sum benefit when an employee is diagnosed with specified critical illnesses.",
        icon: <Icon name="medical" />,
      },
      {
        label: "Corporate Travel Insurance",
        href: "/personal/travel",
        description:
          "Travel insurance for employees and executives travelling locally or internationally for business.",
        icon: <Icon name="travel" />,
      },
    ],
  },
  {
    section: "Savings & Investments",
    path: "/personal/wealth-owner",
    description:
      "Savings, pension, investment, and wealth advisory solutions for long-term financial goals.",
    accent: "#B45309",
    lightBg: "#FFFBEB",
    image: "/images/risk-cover.jpg",
    items: [
      {
        label: "Life Insurance & Investment Plans",
        href: "/personal/family",
        description:
          "Plans that combine life protection with long-term investment growth.",
        icon: <Icon name="heart" />,
      },
      {
        label: "Guaranteed Savings Plans",
        href: "/personal/wealth-owner",
        description:
          "Structured savings plans designed to build funds steadily with predictable benefits.",
        icon: <Icon name="money" />,
      },
      {
        label: "School Fees Insurance Plans",
        href: "/personal/family",
        description:
          "Education-focused plans that help secure future school fees and protect learning continuity.",
        icon: <Icon name="school" />,
      },
      {
        label: "Lump Sum Investment Plans",
        href: "/personal/wealth-owner",
        description:
          "Investment options for clients placing a single lump-sum amount toward future goals.",
        icon: <Icon name="briefcase" />,
      },
      {
        label: "Money Market Funds",
        href: "/personal/wealth-owner",
        description:
          "Low-risk collective investment funds for liquidity, stability, and short-term returns.",
        icon: <Icon name="chart" />,
      },
      {
        label: "Retirement & Pension Plans",
        href: "/personal/wealth-owner",
        description:
          "Retirement planning solutions that help individuals and families prepare for life after work.",
        icon: <Icon name="money" />,
      },
      {
        label: "Dollar Investment Plans",
        href: "/personal/wealth-owner",
        description:
          "Foreign-currency investment options for dollar-denominated savings and growth.",
        icon: <Icon name="money" />,
      },
      {
        label: "Family Protection Plans",
        href: "/personal/family",
        description:
          "Protection and savings plans designed around family security, dependants, and long-term goals.",
        icon: <Icon name="home" />,
      },
      {
        label: "Wealth Advisory Services",
        href: "/personal/wealth-owner",
        description:
          "Personalized guidance for savings, investment planning, retirement, and wealth preservation.",
        icon: <Icon name="compass" />,
      },
    ],
  },
];

function EntryPoints() {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-0 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0F2240] mb-3">
            Our Services
          </h2>
          <p className="text-slate-500 text-lg">
            Custom Insurance Solutions for Businesses and Individuals
          </p>
        </div>

        <div className="space-y-14">
          {allCovers.map((cover) => (
            <div key={cover.section}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div
                  className="relative rounded-2xl overflow-hidden flex flex-col justify-end cursor-pointer group min-h-[260px]"
                  style={{ backgroundColor: cover.accent }}
                  onClick={() => navigate(cover.path)}
                >
                  {cover.image && (
                    <img
                      src={cover.image}
                      alt={cover.section}
                      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-55 scale-100 group-hover:scale-105 transition-all duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                  <div className="relative z-10 p-5">
                    <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1">
                      GoPay
                    </p>
                    <h3 className="text-white text-2xl font-bold leading-tight mb-4">
                      {cover.section}
                    </h3>
                    <button
                      className="inline-flex items-center gap-2 border border-white/80 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full hover:bg-white transition-all duration-200"
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          cover.accent;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "white";
                      }}
                    >
                      View All
                      <svg
                        className="w-3.5 h-3.5"
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
                    </button>
                  </div>
                </div>

                {cover.items.slice(0, 3).map((item) => (
                  <div
                    key={item.href}
                    className="flex flex-col border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 bg-white group cursor-pointer"
                    onClick={() => navigate(item.href)}
                  >
                    {item.image ? (
                      <div className="relative h-36 overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.label}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            (e.target as HTMLImageElement)
                              .closest(".relative")
                              ?.remove();
                          }}
                        />
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                          style={{ backgroundColor: cover.accent }}
                        />
                      </div>
                    ) : (
                      <div
                        className="h-20 flex items-center px-6 flex-shrink-0"
                        style={{ backgroundColor: cover.lightBg }}
                      >
                        <div
                          className="transition-transform duration-200 group-hover:scale-110 w-fit"
                          style={{ color: cover.accent }}
                        >
                          {item.icon}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col flex-1 p-5">
                      {item.image && (
                        <div
                          className="mb-3 transition-transform duration-200 group-hover:scale-110 w-fit"
                          style={{ color: cover.accent }}
                        >
                          {item.icon}
                        </div>
                      )}
                      <h4 className="text-[#0F2240] font-semibold text-base mb-1.5 leading-snug">
                        {item.label}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed flex-1">
                        {item.description}
                      </p>
                      <div className="mt-4 flex gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(item.href);
                          }}
                          className="flex-1 text-xs font-bold tracking-wide uppercase px-3 py-2.5 rounded-lg border-2 transition-all duration-200 hover:opacity-85"
                          style={{
                            borderColor: cover.accent,
                            color: cover.accent,
                          }}
                        >
                          View Policy
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate("/quote");
                          }}
                          className="flex-1 text-xs font-bold tracking-wide uppercase px-3 py-2.5 rounded-lg transition-all duration-200 hover:opacity-85 hover:scale-105 active:scale-95"
                          style={{
                            backgroundColor: cover.accent,
                            color: "#fff",
                          }}
                        >
                          Get Quote
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {cover.items.length > 3 && (
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => navigate(cover.path)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all hover:gap-2.5"
                    style={{ color: cover.accent }}
                  >
                    View all {cover.items.length} {cover.section.toLowerCase()}{" "}
                    covers
                    <svg
                      className="w-4 h-4"
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
                  </button>
                </div>
              )}

              <div className="border-b border-slate-100 mt-12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EntryPoints;
