import { useParams, Link } from "react-router-dom";
import PageHero from "../../components/shared/PageHero";
import ProductCard from "../../components/shared/ProductCard";

const typeData: Record<
  string,
  {
    title: string;
    subtitle: string;
    icon: string;
    gradient: string;
    description: string;
    needs: string[];
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
  "young-adult": {
    title: "Young Adult Cover",
    subtitle:
      "Start smart. Build a financial safety net early with affordable, flexible cover designed for your lifestyle.",
    icon: "🧑",
    gradient: "from-[#1B0A3F] via-[#3B1F8C] to-[#5C3AB8]",
    description:
      "As a young adult, the right insurance isn't just protection — it's the foundation of your financial future. Start early, pay less, and get more.",
    needs: [
      "Personal accident cover",
      "Affordable medical outpatient",
      "Life insurance starter",
      "Income protection",
    ],
    products: [
      {
        id: "personal-accident",
        name: "Personal Accident",
        tagline: "24/7 accident protection wherever you are",
        icon: "🛡️",
        color: "bg-violet-100",
        benefits: [
          "Accidental death benefit",
          "Permanent disability cover",
          "Medical expense reimbursement",
          "Hospital daily cash",
        ],
        priceIndicator: "low",
        popular: true,
      },
      {
        id: "medical-outpatient",
        name: "Outpatient Medical",
        tagline: "Clinic visits and prescriptions covered",
        icon: "🏥",
        color: "bg-blue-100",
        benefits: [
          "GP & specialist visits",
          "Diagnostic tests",
          "Pharmacy cover",
          "Dental & optical optional",
        ],
        priceIndicator: "low",
      },
      {
        id: "life-starter",
        name: "Life Insurance Starter",
        tagline: "Lock in low rates while you're young and healthy",
        icon: "💙",
        color: "bg-indigo-100",
        benefits: [
          "Death benefit payout",
          "Critical illness rider",
          "Premium waiver option",
          "Cash value accumulation",
        ],
        priceIndicator: "low",
      },
      {
        id: "income-protection",
        name: "Income Protection",
        tagline: "Keep earning even when you can't work",
        icon: "💰",
        color: "bg-emerald-100",
        benefits: [
          "Monthly income replacement",
          "Short-term disability",
          "Long-term disability",
          "Rehabilitation support",
        ],
        priceIndicator: "medium",
      },
    ],
  },
  family: {
    title: "Family Insurance",
    subtitle:
      "Everything your family needs under one roof — from health to home to life protection.",
    icon: "👨‍👩‍👧‍👦",
    gradient: "from-[#0A1628] via-[#0F2D6B] to-[#1B4FD8]",
    description:
      "Your family is your greatest asset. Our family cover solutions ensure every member — from the youngest to the oldest — is protected against life's uncertainties.",
    needs: [
      "Family medical cover",
      "School fees protection",
      "Life & income cover",
      "Home & contents insurance",
    ],
    products: [
      {
        id: "family-medical",
        name: "Family Medical Cover",
        tagline: "Comprehensive inpatient & outpatient for the whole family",
        icon: "👨‍👩‍👧",
        color: "bg-blue-100",
        benefits: [
          "Inpatient hospitalization",
          "Outpatient consultations",
          "Maternity cover",
          "Dental & optical cover",
        ],
        priceIndicator: "medium",
        popular: true,
      },
      {
        id: "education-cover",
        name: "Education Insurance",
        tagline: "Guarantee your children's school fees no matter what",
        icon: "🎓",
        color: "bg-amber-100",
        benefits: [
          "Guaranteed school fees",
          "College funding plan",
          "Waiver on parent's death",
          "Savings component",
        ],
        priceIndicator: "medium",
      },
      {
        id: "family-life",
        name: "Family Life Cover",
        tagline: "Income replacement and death benefit for your loved ones",
        icon: "❤️",
        color: "bg-red-100",
        benefits: [
          "Death benefit payout",
          "Critical illness cover",
          "Funeral expense benefit",
          "Disability protection",
        ],
        priceIndicator: "medium",
      },
      {
        id: "home-contents",
        name: "Home & Contents",
        tagline: "Protect your home, its contents, and your domestic staff",
        icon: "🏠",
        color: "bg-emerald-100",
        benefits: [
          "Building structure cover",
          "Contents & valuables",
          "Domestic worker cover",
          "Personal liability",
        ],
        priceIndicator: "low",
      },
    ],
  },
  senior: {
    title: "Senior Cover",
    subtitle:
      "Dignified, comprehensive protection for your retirement years — health, wellness, and peace of mind.",
    icon: "👴",
    gradient: "from-[#0A2818] via-[#0F5C34] to-[#1B8C55]",
    description:
      "Retirement should be enjoyed, not worried about. Our senior plans are designed to cover the unique health and financial needs that come with this life stage.",
    needs: [
      "Senior medical cover",
      "Critical illness protection",
      "Pension income top-up",
      "Funeral cover",
    ],
    products: [
      {
        id: "senior-medical",
        name: "Senior Medical Cover",
        tagline: "Specialized health cover for the over-55s",
        icon: "🏥",
        color: "bg-emerald-100",
        benefits: [
          "Chronic illness management",
          "Specialist consultations",
          "Hospitalization cover",
          "Rehabilitation therapy",
        ],
        priceIndicator: "medium",
        popular: true,
      },
      {
        id: "critical-illness",
        name: "Critical Illness Cover",
        tagline: "Lump sum payment on diagnosis of major illness",
        icon: "💊",
        color: "bg-teal-100",
        benefits: [
          "Cancer diagnosis cover",
          "Heart attack & stroke",
          "Kidney failure",
          "Lump sum cash benefit",
        ],
        priceIndicator: "medium",
      },
      {
        id: "pension-top-up",
        name: "Pension Income Top-up",
        tagline: "Supplement your pension with guaranteed monthly income",
        icon: "📈",
        color: "bg-blue-100",
        benefits: [
          "Guaranteed monthly income",
          "Inflation-linked growth",
          "Spouse continuation option",
          "Flexible terms",
        ],
        priceIndicator: "high",
      },
      {
        id: "funeral-cover",
        name: "Funeral Cover",
        tagline: "Immediate payout to dignify the farewell",
        icon: "🕊️",
        color: "bg-slate-100",
        benefits: [
          "Immediate cash payout",
          "Covers entire family",
          "No medical exam required",
          "Affordable premiums",
        ],
        priceIndicator: "low",
      },
    ],
  },
  "wealth-owner": {
    title: "Wealth Protection",
    subtitle:
      "Preserve, protect, and pass on your wealth with sophisticated insurance solutions for high-net-worth individuals.",
    icon: "💼",
    gradient: "from-[#1A1200] via-[#4A3500] to-[#8B6A00]",
    description:
      "Your wealth took years to build. Our wealth owner solutions ensure your assets, business interests, and estate are protected and structured for long-term security.",
    needs: [
      "Asset & property protection",
      "Key person insurance",
      "Estate planning",
      "High-value liability",
    ],
    products: [
      {
        id: "asset-protection",
        name: "Asset Protection Bundle",
        tagline: "Comprehensive cover for property, vehicles, and valuables",
        icon: "🏛️",
        color: "bg-amber-100",
        benefits: [
          "Commercial & residential property",
          "High-value vehicle fleet",
          "Fine art & collectibles",
          "Jewelry & watches",
        ],
        priceIndicator: "high",
        popular: true,
      },
      {
        id: "key-person",
        name: "Key Person Insurance",
        tagline: "Protect your business when a critical person is lost",
        icon: "🔑",
        color: "bg-orange-100",
        benefits: [
          "Business continuity funding",
          "Revenue loss protection",
          "Recruitment cost cover",
          "Shareholder protection",
        ],
        priceIndicator: "high",
      },
      {
        id: "estate-planning",
        name: "Estate Planning Cover",
        tagline: "Ensure a seamless wealth transfer to your heirs",
        icon: "📜",
        color: "bg-yellow-100",
        benefits: [
          "Estate duty cover",
          "Trust funding solutions",
          "Buy-sell agreement cover",
          "Succession planning",
        ],
        priceIndicator: "custom",
      },
      {
        id: "personal-liability",
        name: "Personal Liability",
        tagline:
          "High-limit liability protection for high-net-worth individuals",
        icon: "⚖️",
        color: "bg-red-100",
        benefits: [
          "Directors & officers liability",
          "Personal umbrella policy",
          "Professional indemnity",
          "Defamation cover",
        ],
        priceIndicator: "high",
      },
    ],
  },
};

const PersonalType = () => {
  const { type } = useParams<{ type: string }>();
  const data = type ? typeData[type] : null;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-6xl mb-4">🔍</p>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Profile not found
          </h2>
          <Link to="/personal" className="text-blue-600 hover:underline">
            Back to Personal Insurance
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
          { label: "Personal", href: "/personal" },
          { label: data.title },
        ]}
        badge="Personal Insurance"
        gradient={data.gradient}
        ctaLabel="Get a Quote"
        ctaHref="/quote"
      />

      {/* Needs overview */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Your Key Insurance Needs
              </h2>
              <p className="text-slate-500 mb-6">{data.description}</p>
              <ul className="grid grid-cols-2 gap-3">
                {data.needs.map((need) => (
                  <li
                    key={need}
                    className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 border border-slate-200 text-sm text-slate-700 font-medium shadow-sm"
                  >
                    <svg
                      className="w-4 h-4 text-blue-500 flex-shrink-0"
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
                    {need}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-2">
                Want a personalized recommendation?
              </h3>
              <p className="text-blue-100 text-sm mb-6">
                Our advisors will analyze your specific needs and build a custom
                insurance portfolio for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/appointment"
                  className="flex-1 text-center bg-white text-blue-700 font-semibold px-5 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
                >
                  Book Free Consultation
                </Link>
                <a
                  href="https://wa.me/254715664233"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Recommended Products for You
          </h2>
          <p className="text-slate-500 mb-10">
            Click any product to see full details, benefits, and coverage
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Ready to get covered?
          </h3>
          <p className="text-slate-500 mb-8">
            Get a quote in under 2 minutes or speak to an advisor today.
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
              Talk to an Advisor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalType;
