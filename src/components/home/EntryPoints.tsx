import { useNavigate } from "react-router-dom";

interface SubItem {
  label: string;
  href: string;
  description: string;
  icon: React.ReactNode;
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

const allCovers: Cover[] = [
  {
    section: "Personal",
    path: "/personal",
    description:
      "Life, health & personal accident cover for you and your loved ones.",
    accent: "#185FA5",
    lightBg: "#E6F1FB",
    image: "/images/home-hero.jpg",
    items: [
      // ── FIRST 3 shown on home page ───────────────────────────────────────
      {
        label: "Home Insurance",
        href: "/personal/home",
        description:
          "Protect your home, contents and liability against fire, theft, water damage and more.",
        icon: (
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
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        ),
      },
      {
        label: "Car Insurance",
        href: "/personal/car",
        description:
          "Comprehensive and third-party motor cover for your vehicle, wherever the road takes you.",
        icon: (
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
              d="M8 17a2 2 0 11-4 0 2 2 0 014 0zM20 17a2 2 0 11-4 0 2 2 0 014 0zM5 17H3v-4l2-5h10l2 5v4h-2M5 17h12M5 13h12"
            />
          </svg>
        ),
      },
      {
        label: "Travel Insurance",
        href: "/personal/travel",
        description:
          "From flight disruptions to medical emergencies abroad — travel with confidence, not worry.",
        icon: (
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
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
      // ── Remaining items (accessible via "View All") ──────────────────────
      {
        label: "Young Adult",
        href: "/personal/young-adult",
        description:
          "Affordable starter cover for young professionals entering the workforce.",
        icon: (
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
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        ),
      },
      {
        label: "Family Cover",
        href: "/personal/family",
        description:
          "Comprehensive protection for every member of your household.",
        icon: (
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
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        ),
      },
      {
        label: "Senior Cover",
        href: "/personal/senior",
        description:
          "Tailored plans for retirees offering peace of mind in your golden years.",
        icon: (
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
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        ),
      },
      {
        label: "Wealth Owner",
        href: "/personal/wealth-owner",
        description:
          "Premium cover for high-net-worth individuals protecting assets and lifestyle.",
        icon: (
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
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
      {
        label: "Medical Insurance",
        href: "/personal/medical",
        description:
          "Access quality healthcare with inpatient, outpatient and dental options.",
        icon: (
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
              d="M19 11H13V5a1 1 0 00-2 0v6H5a1 1 0 000 2h6v6a1 1 0 002 0v-6h6a1 1 0 000-2z"
            />
          </svg>
        ),
      },
    ],
  },
  {
    section: "Business",
    path: "/business",
    description:
      "Comprehensive solutions to protect your assets, staff, and operations.",
    accent: "#3B6D11",
    lightBg: "#EAF3DE",
    image: "/images/travel-hero.jpg",
    items: [
      {
        label: "Assets & Property",
        href: "/business/assets",
        description:
          "Cover for buildings, equipment, stock and other physical business assets.",
        icon: (
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
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        ),
      },
      {
        label: "Money & Revenue",
        href: "/business/money",
        description:
          "Protect your business against financial loss, cash in transit and fraud.",
        icon: (
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
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        ),
      },
      {
        label: "Employees",
        href: "/business/employees",
        description:
          "WIBA, group life and medical cover to attract and retain top talent.",
        icon: (
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
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"
            />
          </svg>
        ),
      },
      {
        label: "Liability",
        href: "/business/liability",
        description:
          "Protection against third-party claims for bodily injury or property damage.",
        icon: (
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
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        ),
      },
      {
        label: "Cyber Insurance",
        href: "/business/cyber",
        description:
          "Cover for data breaches, ransomware attacks and cyber liability exposure.",
        icon: (
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
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        ),
      },
      {
        label: "Transport & Fleet",
        href: "/business/transport",
        description:
          "One policy covering all your business vehicles on and off the road.",
        icon: (
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
              d="M8 17a2 2 0 11-4 0 2 2 0 014 0zM20 17a2 2 0 11-4 0 2 2 0 014 0zM5 17H3v-4l2-5h10l2 5v4h-2M5 17h12M5 13h12"
            />
          </svg>
        ),
      },
    ],
  },
  {
    section: "By Industry",
    path: "/industry",
    description:
      "Sector-specific policies tailored to your business type and risk profile.",
    accent: "#6D28D9",
    lightBg: "#F5F3FF",
    image: "/images/industry-cover.jpg",
    items: [
      {
        label: "Transport & Logistics",
        href: "/industry/transport",
        description:
          "Specialist cover for haulage, courier and logistics operations.",
        icon: (
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
              d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8l2-2zM13 7h4l3 3v3h-7V7z"
            />
          </svg>
        ),
      },
      {
        label: "Healthcare",
        href: "/industry/healthcare",
        description:
          "Professional indemnity and liability cover for healthcare providers.",
        icon: (
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
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        ),
      },
      {
        label: "Construction",
        href: "/industry/construction",
        description:
          "Contractors' all-risk, plant and liability cover for building projects.",
        icon: (
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
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
          </svg>
        ),
      },
      {
        label: "Retail & Trade",
        href: "/industry/retail",
        description:
          "Stock, liability and business interruption cover for retail operations.",
        icon: (
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
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        ),
      },
      {
        label: "ICT & Technology",
        href: "/industry/ict",
        description:
          "Cyber, professional indemnity and equipment cover for tech businesses.",
        icon: (
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
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        ),
      },
      {
        label: "Hospitality",
        href: "/industry/hospitality",
        description:
          "All-in-one protection for hotels, restaurants and event venues.",
        icon: (
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
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        ),
      },
    ],
  },
  {
    section: "Risk Guide",
    path: "/risk",
    description:
      "Understand your exposures and choose the right level of protection.",
    accent: "#B45309",
    lightBg: "#FFFBEB",
    image: "/images/risk-cover.jpg",
    items: [
      {
        label: "Fire & Property Loss",
        href: "/risk/fire",
        description:
          "Understand fire risk and the cover you need to rebuild and recover fast.",
        icon: (
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
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.3}
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        ),
      },
      {
        label: "Theft & Burglary",
        href: "/risk/theft",
        description:
          "Know your theft exposure and how to protect cash, stock and valuables.",
        icon: (
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
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        ),
      },
      {
        label: "Cyber Risk",
        href: "/risk/cyber",
        description:
          "Assess your digital vulnerabilities and the cost of a data breach.",
        icon: (
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
              d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"
            />
          </svg>
        ),
      },
      {
        label: "Employee Risk",
        href: "/risk/employee",
        description:
          "Identify workplace hazards and your obligations under WIBA legislation.",
        icon: (
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
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"
            />
          </svg>
        ),
      },
      {
        label: "Liability Risk",
        href: "/risk/liability",
        description:
          "Understand third-party claims risk and your legal exposure as a business.",
        icon: (
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
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        ),
      },
      {
        label: "Financial Loss",
        href: "/risk/financial",
        description:
          "Guard against revenue interruption, fraud and other financial exposures.",
        icon: (
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
              d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
            />
          </svg>
        ),
      },
    ],
  },
];

function EntryPoints() {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-0 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0F2240] mb-3">
            Our Services
          </h2>
          <p className="text-slate-500 text-lg">
            Custom Insurance Solutions for Businesses and Individuals
          </p>
        </div>

        {/* Cover blocks */}
        <div className="space-y-14">
          {allCovers.map((cover) => (
            <div key={cover.section}>
              {/* Single row: hero card + first 3 sub-cards only */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Hero / image card */}
                <div
                  className="relative rounded-2xl overflow-hidden flex flex-col justify-end cursor-pointer group min-h-[260px]"
                  style={{ backgroundColor: cover.accent }}
                  onClick={() => navigate(cover.path)}
                >
                  {cover.image && (
                    <img
                      src={cover.image}
                      alt={cover.section}
                      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-500 scale-100 group-hover:scale-105 transition-transform"
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
                      <br />
                      Insurance
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

                {/* First 3 sub-cards ONLY */}
                {cover.items.slice(0, 3).map((item) => (
                  <div
                    key={item.href}
                    className="flex flex-col border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 bg-white group cursor-pointer"
                  >
                    {item.image ? (
                      <div className="relative h-36 overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.label}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            (e.target as HTMLImageElement)
                              .closest(".relative")!
                              .remove();
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
                          onClick={() => navigate(item.href)}
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

              {/* "View all" link when there are more than 3 items */}
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
