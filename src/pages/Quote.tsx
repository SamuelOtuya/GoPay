import { useState } from "react";
import { Link } from "react-router-dom";

// ─── Types ────────────────────────────────────────────────────────────────────

interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  insuranceType: string;
  budgetRange: string;
  message: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const insuranceTypes = [
  {
    id: "personal-medical",
    label: "Medical Insurance",
    icon: "💊",
    category: "Personal",
  },
  {
    id: "life-insurance",
    label: "Life Insurance",
    icon: "❤️",
    category: "Personal",
  },
  {
    id: "personal-accident",
    label: "Personal Accident",
    icon: "🛡️",
    category: "Personal",
  },
  {
    id: "family-cover",
    label: "Family Cover",
    icon: "👨‍👩‍👧‍👦",
    category: "Personal",
  },
  {
    id: "home-insurance",
    label: "Home Insurance",
    icon: "🏠",
    category: "Personal",
  },
  {
    id: "business-assets",
    label: "Business Assets",
    icon: "🏗️",
    category: "Business",
  },
  {
    id: "employee-benefits",
    label: "Employee Benefits",
    icon: "👥",
    category: "Business",
  },
  {
    id: "liability",
    label: "Liability Cover",
    icon: "⚖️",
    category: "Business",
  },
  { id: "cyber", label: "Cyber Insurance", icon: "🔐", category: "Business" },
  { id: "sme-package", label: "SME Package", icon: "📦", category: "Business" },
  {
    id: "motor-fleet",
    label: "Motor / Fleet",
    icon: "🚗",
    category: "Business",
  },
  { id: "not-sure", label: "Not Sure Yet", icon: "🤔", category: "Other" },
];

const budgetRanges = [
  {
    id: "under-5k",
    label: "Under KES 5,000/yr",
    sublabel: "Entry-level cover",
  },
  {
    id: "5k-15k",
    label: "KES 5,000 – 15,000/yr",
    sublabel: "Standard individual cover",
  },
  {
    id: "15k-50k",
    label: "KES 15,000 – 50,000/yr",
    sublabel: "Comprehensive / family",
  },
  {
    id: "50k-150k",
    label: "KES 50,000 – 150,000/yr",
    sublabel: "Business / premium",
  },
  { id: "over-150k", label: "KES 150,000+/yr", sublabel: "Corporate / custom" },
  { id: "unsure", label: "Not sure yet", sublabel: "Advisor will guide you" },
];

// ─── Step Components ───────────────────────────────────────────────────────────

const StepPersonal = ({
  data,
  onChange,
}: {
  data: QuoteFormData;
  onChange: (field: keyof QuoteFormData, value: string) => void;
}) => (
  <div className="space-y-5">
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-2">
        Full Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        placeholder="e.g. Jane Wanjiku"
        value={data.name}
        onChange={(e) => onChange("name", e.target.value)}
        className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-[#1B4FD8] focus:outline-none text-slate-900 placeholder:text-slate-400 transition-colors text-sm"
      />
    </div>
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-2">
        Phone Number <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm font-medium">
          🇰🇪 +254
        </span>
        <input
          type="tel"
          placeholder="7XX XXX XXX"
          value={data.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          className="w-full pl-20 pr-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-[#1B4FD8] focus:outline-none text-slate-900 placeholder:text-slate-400 transition-colors text-sm"
        />
      </div>
    </div>
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-2">
        Email Address{" "}
        <span className="text-slate-400 font-normal">(optional)</span>
      </label>
      <input
        type="email"
        placeholder="jane@example.com"
        value={data.email}
        onChange={(e) => onChange("email", e.target.value)}
        className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-[#1B4FD8] focus:outline-none text-slate-900 placeholder:text-slate-400 transition-colors text-sm"
      />
    </div>
  </div>
);

const StepInsuranceType = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) => {
  const grouped = insuranceTypes.reduce<Record<string, typeof insuranceTypes>>(
    (acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    },
    {},
  );

  return (
    <div className="space-y-6">
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category}>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
            {category}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onChange(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-left transition-all ${
                  value === item.id
                    ? "border-[#1B4FD8] bg-blue-50 shadow-lg shadow-blue-100"
                    : "border-slate-200 hover:border-blue-200 hover:bg-slate-50"
                }`}
              >
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <span
                  className={`text-sm font-semibold leading-tight ${value === item.id ? "text-blue-700" : "text-slate-700"}`}
                >
                  {item.label}
                </span>
                {value === item.id && (
                  <svg
                    className="w-4 h-4 text-blue-600 ml-auto flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const StepBudget = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) => (
  <div className="space-y-3">
    {budgetRanges.map((range) => (
      <button
        key={range.id}
        type="button"
        onClick={() => onChange(range.id)}
        className={`w-full flex items-center justify-between px-5 py-4 rounded-xl border-2 text-left transition-all ${
          value === range.id
            ? "border-[#1B4FD8] bg-blue-50 shadow-md shadow-blue-100"
            : "border-slate-200 hover:border-blue-200 hover:bg-slate-50"
        }`}
      >
        <div>
          <p
            className={`font-semibold text-sm ${value === range.id ? "text-blue-700" : "text-slate-800"}`}
          >
            {range.label}
          </p>
          <p className="text-xs text-slate-400 mt-0.5">{range.sublabel}</p>
        </div>
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
            value === range.id
              ? "border-[#1B4FD8] bg-[#1B4FD8]"
              : "border-slate-300"
          }`}
        >
          {value === range.id && (
            <svg
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path
                d="M10 3L5 8.5 2 5.5"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </button>
    ))}
  </div>
);

const StepMessage = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) => (
  <div className="space-y-4">
    <p className="text-slate-500 text-sm">
      Optional: Tell us anything specific — number of staff, existing cover,
      renewal date, or special requirements.
    </p>
    <textarea
      rows={5}
      placeholder="e.g. I have a family of 4, looking to switch from my current provider. Need maternity cover included..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 focus:border-[#1B4FD8] focus:outline-none text-slate-900 placeholder:text-slate-400 transition-colors text-sm resize-none"
    />
    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3">
      <span className="text-blue-500 text-xl flex-shrink-0">💡</span>
      <p className="text-blue-700 text-sm">
        The more context you give, the faster our advisors can prepare a
        tailored quote for you.
      </p>
    </div>
  </div>
);

// ─── Summary component ─────────────────────────────────────────────────────────

const Summary = ({ data }: { data: QuoteFormData }) => {
  const insType = insuranceTypes.find((t) => t.id === data.insuranceType);
  const budget = budgetRanges.find((b) => b.id === data.budgetRange);

  return (
    <div className="bg-slate-50 rounded-2xl border border-slate-200 divide-y divide-slate-200 overflow-hidden">
      {[
        { label: "Name", value: data.name },
        { label: "Phone", value: `+254 ${data.phone}` },
        ...(data.email ? [{ label: "Email", value: data.email }] : []),
        {
          label: "Insurance Type",
          value: insType ? `${insType.icon} ${insType.label}` : "—",
        },
        { label: "Budget", value: budget?.label || "—" },
        ...(data.message ? [{ label: "Notes", value: data.message }] : []),
      ].map((row) => (
        <div key={row.label} className="flex items-start gap-3 px-5 py-3.5">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide w-28 flex-shrink-0 pt-0.5">
            {row.label}
          </span>
          <span className="text-sm text-slate-800 font-medium">
            {row.value}
          </span>
        </div>
      ))}
    </div>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────────

const steps = [
  { id: 1, label: "Your Details", icon: "👤" },
  { id: 2, label: "Insurance Type", icon: "🛡️" },
  { id: 3, label: "Budget", icon: "💰" },
  { id: 4, label: "Additional Info", icon: "📝" },
  { id: 5, label: "Review", icon: "✅" },
];

const Quote = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    phone: "",
    email: "",
    insuranceType: "",
    budgetRange: "",
    message: "",
  });

  const updateField = (field: keyof QuoteFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    if (currentStep === 1) return formData.name.trim() && formData.phone.trim();
    if (currentStep === 2) return !!formData.insuranceType;
    if (currentStep === 3) return !!formData.budgetRange;
    return true;
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1800);
  };

  // ── Success Screen ────────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-[#0F2D6B] to-[#1B4FD8] flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full text-center">
          <div className="w-24 h-24 bg-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-emerald-500/40 animate-bounce">
            <svg
              className="w-12 h-12 text-white"
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
          <h2 className="text-3xl font-bold text-white mb-3">
            Quote Request Sent!
          </h2>
          <p className="text-blue-200 mb-2">
            Thank you,{" "}
            <span className="text-white font-semibold">{formData.name}</span>.
          </p>
          <p className="text-blue-300 text-sm mb-8">
            Our team will contact you on{" "}
            <span className="text-white font-medium">
              +254 {formData.phone}
            </span>{" "}
            within 2 business hours.
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-8 text-left space-y-3">
            <p className="text-white font-semibold text-sm">
              What happens next?
            </p>
            {[
              "An advisor reviews your requirements",
              "We prepare a personalised quote from our 15+ insurer partners",
              "You receive the quote via phone, email or WhatsApp",
              "You choose — no obligation, no pressure",
            ].map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-blue-200 text-sm"
              >
                <span className="w-5 h-5 rounded-full bg-blue-500 text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/254715664233"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
            <Link
              to="/"
              className="flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ── Form Screen ───────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-950 via-[#0F2D6B] to-[#1B4FD8] pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.03] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-blue-100 text-xs font-medium tracking-wide uppercase">
              Free • No Obligation
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
            Get a Quick Quote
          </h1>
          <p className="text-blue-200 text-lg">
            Fill in 4 quick steps. Our advisors will call you with a
            personalised quote within 2 hours.
          </p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="flex items-center py-4 overflow-x-auto scrollbar-hide gap-1">
            {steps.map((step, i) => (
              <div
                key={step.id}
                className="flex items-center gap-1 flex-shrink-0"
              >
                <button
                  onClick={() =>
                    currentStep > step.id && setCurrentStep(step.id)
                  }
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all text-xs font-semibold ${
                    currentStep === step.id
                      ? "bg-[#1B4FD8] text-white shadow-lg shadow-blue-200"
                      : currentStep > step.id
                        ? "text-emerald-700 bg-emerald-50 cursor-pointer hover:bg-emerald-100"
                        : "text-slate-400 bg-slate-50 cursor-default"
                  }`}
                >
                  {currentStep > step.id ? (
                    <svg
                      className="w-4 h-4 flex-shrink-0"
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
                    <span className="flex-shrink-0">{step.icon}</span>
                  )}
                  <span className="hidden sm:inline">{step.label}</span>
                  <span className="sm:hidden">{step.id}</span>
                </button>
                {i < steps.length - 1 && (
                  <div
                    className={`w-4 h-0.5 flex-shrink-0 rounded-full transition-colors ${currentStep > step.id ? "bg-emerald-300" : "bg-slate-200"}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Body */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-100 overflow-hidden">
          {/* Step Header */}
          <div className="px-8 pt-8 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-xl">
                {steps[currentStep - 1].icon}
              </div>
              <div>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  Step {currentStep} of {steps.length}
                </p>
                <h2 className="text-xl font-bold text-slate-900">
                  {steps[currentStep - 1].label}
                </h2>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-5 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / steps.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Step Content */}
          <div className="px-8 py-7">
            {currentStep === 1 && (
              <StepPersonal data={formData} onChange={updateField} />
            )}
            {currentStep === 2 && (
              <StepInsuranceType
                value={formData.insuranceType}
                onChange={(v) => updateField("insuranceType", v)}
              />
            )}
            {currentStep === 3 && (
              <StepBudget
                value={formData.budgetRange}
                onChange={(v) => updateField("budgetRange", v)}
              />
            )}
            {currentStep === 4 && (
              <StepMessage
                value={formData.message}
                onChange={(v) => updateField("message", v)}
              />
            )}
            {currentStep === 5 && (
              <div className="space-y-5">
                <p className="text-slate-500 text-sm">
                  Please review your details before submitting. Click any
                  completed step above to edit.
                </p>
                <Summary data={formData} />
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex gap-3">
                  <span className="text-amber-500 text-xl flex-shrink-0">
                    🔒
                  </span>
                  <p className="text-amber-800 text-sm">
                    Your details are confidential and used only to prepare your
                    quote. We never share your information with third parties.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="px-8 pb-8 flex items-center justify-between gap-4">
            {currentStep > 1 ? (
              <button
                onClick={() => setCurrentStep((s) => s - 1)}
                className="flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-semibold text-sm hover:border-slate-300 hover:bg-slate-50 transition-all"
              >
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back
              </button>
            ) : (
              <Link
                to="/"
                className="flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-semibold text-sm hover:border-slate-300 hover:bg-slate-50 transition-all"
              >
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Home
              </Link>
            )}

            {currentStep < steps.length ? (
              <button
                onClick={() => setCurrentStep((s) => s + 1)}
                disabled={!canProceed()}
                className="flex items-center gap-2 px-7 py-3 rounded-xl bg-[#1B4FD8] hover:bg-[#1740B8] disabled:bg-slate-200 disabled:text-slate-400 text-white font-semibold text-sm shadow-lg shadow-blue-200 disabled:shadow-none transition-all hover:gap-3 disabled:cursor-not-allowed"
              >
                Continue
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
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex items-center gap-2 px-7 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-200 disabled:text-slate-400 text-white font-semibold text-sm shadow-lg shadow-emerald-200 disabled:shadow-none transition-all"
              >
                {loading ? (
                  <>
                    <svg
                      className="w-4 h-4 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Request
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs text-slate-400">
          {[
            { icon: "🔒", label: "Secure & Confidential" },
            { icon: "⚡", label: "2-Hour Response" },
            { icon: "✅", label: "IRA Registered Agency" },
            { icon: "💬", label: "No Sales Pressure" },
          ].map((badge) => (
            <span
              key={badge.label}
              className="flex items-center gap-1.5 font-medium"
            >
              <span>{badge.icon}</span>
              {badge.label}
            </span>
          ))}
        </div>

        {/* Alternative contact */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-400 mb-3">
            Prefer to talk directly?
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href="tel:+254715664233"
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700 transition-colors shadow-sm"
            >
              📞 Call Us Now
            </a>
            <a
              href="https://wa.me/254715664233"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 rounded-xl text-sm font-semibold text-white transition-colors shadow-sm"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
