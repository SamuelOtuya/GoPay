import { useParams, Link } from "react-router-dom";
import PageHero from "../components/shared/PageHero";

// Generic product data — in a real app this would come from an API/CMS
const productDefaults = {
  overview:
    "This insurance product is designed to provide comprehensive protection tailored to your specific needs. Our policies come with transparent terms, fast claims processing, and dedicated advisor support.",
  benefits: [
    "Comprehensive coverage tailored to your risk profile",
    "Fast and fair claims settlement",
    "24/7 emergency claims helpline",
    "Dedicated personal advisor",
    "Flexible payment options — monthly, quarterly, or annual",
    "Discounts available for bundled policies",
  ],
  coverage: [
    "All risks specified in the policy schedule",
    "Accidental damage and loss",
    "Emergency expenses up to policy limit",
    "Legal defense costs included",
    "Temporary replacement or rental cover",
  ],
  exclusions: [
    "Intentional damage or fraud",
    "Pre-existing conditions (for health-related products)",
    "War and nuclear risk",
    "Gradual deterioration or wear and tear",
    "Events occurring outside the territorial limits",
  ],
  whoIsItFor:
    "This product is ideal for individuals and businesses seeking reliable protection against specific risks. Whether you're a first-time insurance buyer or looking to upgrade your existing cover, our advisors will tailor a plan that fits your budget and needs.",
  priceIndicator:
    "Contact us for a personalized quote based on your specific requirements, risk profile, and coverage needs.",
};

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("overview");

  const productName = id
    ? id
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    : "Insurance Product";

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "benefits", label: "Benefits" },
    { id: "coverage", label: "Coverage" },
    { id: "exclusions", label: "Exclusions" },
    { id: "who", label: "Who is it for?" },
  ];

  return (
    <div>
      <PageHero
        title={productName}
        subtitle="Comprehensive protection designed to give you peace of mind. Review the details below and get in touch for a personalized quote."
        breadcrumbs={[{ label: "Products" }, { label: productName }]}
        badge="Product Details"
        gradient="from-[#0A1628] via-[#0F2D6B] to-[#1B4FD8]"
      />

      {/* Tab nav */}
      <div className="sticky top-16 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-1 py-3 scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                  activeTab === tab.id
                    ? "bg-[#1B4FD8] text-white shadow-md shadow-blue-500/20"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main content */}
            <div className="lg:w-2/3">
              {activeTab === "overview" && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Product Overview
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {productDefaults.overview}
                  </p>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">
                    <h3 className="font-bold text-slate-900 mb-3">
                      💡 Pricing Indicator
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {productDefaults.priceIndicator}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "benefits" && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Key Benefits
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {productDefaults.benefits.map((b, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4"
                      >
                        <svg
                          className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5"
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
                        <span className="text-slate-700 text-sm">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "coverage" && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    What's Covered
                  </h2>
                  <ul className="space-y-3">
                    {productDefaults.coverage.map((c, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 py-3 border-b border-slate-100"
                      >
                        <span className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            className="w-3.5 h-3.5 text-emerald-600"
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
                        </span>
                        <span className="text-slate-700 text-sm">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "exclusions" && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    What's Not Covered
                  </h2>
                  <p className="text-slate-500 text-sm mb-6">
                    The following are standard exclusions. Your specific policy
                    schedule may vary — always review your policy document
                    carefully.
                  </p>
                  <ul className="space-y-3">
                    {productDefaults.exclusions.map((e, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 py-3 border-b border-slate-100"
                      >
                        <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            className="w-3.5 h-3.5 text-red-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </span>
                        <span className="text-slate-700 text-sm">{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "who" && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Who is this product for?
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    {productDefaults.whoIsItFor}
                  </p>
                  <div className="mt-8 grid sm:grid-cols-3 gap-4">
                    {[
                      "Individuals & Families",
                      "Small Businesses",
                      "Large Corporates",
                    ].map((group) => (
                      <div
                        key={group}
                        className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center"
                      >
                        <p className="font-semibold text-blue-800 text-sm">
                          {group}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-gradient-to-br from-[#0A1628] to-[#1B4FD8] rounded-2xl p-7 text-white sticky top-32">
                <h3 className="text-xl font-bold mb-2">
                  Get a Quote for {productName}
                </h3>
                <p className="text-blue-100 text-sm mb-6">
                  Our advisors will prepare a personalized quote based on your
                  needs and budget.
                </p>
                <div className="space-y-3">
                  <Link
                    to="/quote"
                    className="w-full block text-center bg-white text-blue-700 font-semibold py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
                  >
                    Get a Free Quote
                  </Link>
                  <Link
                    to="/appointment"
                    className="w-full block text-center border border-white/30 text-white font-semibold py-3 rounded-xl hover:bg-white/10 transition-colors text-sm"
                  >
                    Book Consultation
                  </Link>
                  <a
                    href="https://wa.me/254715664233"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-3 rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
                  >
                    💬 WhatsApp an Advisor
                  </a>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-blue-100 text-xs text-center">
                    📞 Call: +254 715 664 233
                  </p>
                  <p className="text-blue-100 text-xs text-center mt-1">
                    ✉️ info@gopayinsurance.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Need to import useState
import { useState } from "react";

export default Product;
