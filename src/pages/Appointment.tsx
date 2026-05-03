import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/shared/PageHero";
import ScrollToTop from "../components/shared/ScrollToTop";

type Step = 1 | 2 | 3 | 4 | 5;

interface FormData {
  purpose: string;
  meetingType: string;
  date: string;
  timeSlot: string;
  name: string;
  phone: string;
  email: string;
}

const purposes = [
  {
    id: "personal",
    icon: "👤",
    label: "Personal Insurance",
    desc: "Life, health, home, and personal cover",
  },
  {
    id: "business",
    icon: "🏢",
    label: "Business Insurance",
    desc: "SME, corporate, and commercial cover",
  },
  {
    id: "employee",
    icon: "👥",
    label: "Employee Benefits",
    desc: "Group medical, WIBA, and staff benefits",
  },
];

const meetingTypes = [
  {
    id: "virtual",
    icon: "💻",
    label: "Virtual Meeting",
    desc: "Via Google Meet, Zoom, or WhatsApp video",
  },
  {
    id: "physical",
    icon: "🤝",
    label: "In-Person Meeting",
    desc: "At our Nairobi office on Kijabe Street",
  },
];

const timeSlots = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

const getTodayStr = () => {
  const today = new Date();
  return today.toISOString().split("T")[0];
};

const Appointment = () => {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormData>({
    purpose: "",
    meetingType: "",
    date: "",
    timeSlot: "",
    name: "",
    phone: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const updateForm = (key: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const stepTitles = [
    "Select Purpose",
    "Meeting Type",
    "Choose Date",
    "Pick Time Slot",
    "Your Details",
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center border border-slate-200">
          <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-emerald-600"
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
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Appointment Confirmed!
          </h2>
          <p className="text-slate-500 text-sm mb-4">
            Thank you, <strong>{form.name}</strong>. Your{" "}
            {form.meetingType === "virtual" ? "virtual" : "in-person"} meeting
            has been booked for <strong>{form.date}</strong> at{" "}
            <strong>{form.timeSlot}</strong>.
          </p>
          <p className="text-slate-500 text-sm mb-8">
            You will receive a confirmation via SMS, Email, and WhatsApp
            shortly.
          </p>
          <div className="space-y-3">
            <a
              href="https://wa.me/254715664233"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-3.5 rounded-xl transition-colors text-sm"
            >
              💬 Chat on WhatsApp
            </a>
            <a
              href="tel:+254715664233"
              className="w-full block border-2 border-slate-200 text-slate-700 font-semibold py-3.5 rounded-xl hover:border-blue-300 hover:text-blue-700 transition-colors text-sm"
            >
              📞 Call Us Now
            </a>
            <Link
              to="/"
              className="w-full block text-slate-400 hover:text-blue-600 text-sm py-2 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <ScrollToTop />
      <PageHero
        title="Book an Appointment"
        subtitle="Schedule a free consultation with one of our insurance advisors — virtually or in person."
        breadcrumbs={[{ label: "Book Appointment" }]}
        badge="Free Consultation"
        gradient="from-[#0A1628] via-[#083060] to-[#0F5C9A]"
      />

      <section className="py-16 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-3">
              {stepTitles.map((title, i) => {
                const s = (i + 1) as Step;
                const active = step === s;
                const done = step > s;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-1 flex-1"
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        done
                          ? "bg-emerald-500 text-white"
                          : active
                            ? "bg-[#1B4FD8] text-white ring-4 ring-blue-200"
                            : "bg-slate-200 text-slate-500"
                      }`}
                    >
                      {done ? (
                        <svg
                          className="w-4 h-4"
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
                      ) : (
                        s
                      )}
                    </div>
                    <span
                      className={`text-[10px] font-medium hidden sm:block ${active ? "text-blue-700" : done ? "text-emerald-600" : "text-slate-400"}`}
                    >
                      {title}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="relative h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${((step - 1) / 4) * 100}%` }}
              />
            </div>
          </div>

          {/* Card */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-6">
              Step {step}: {stepTitles[step - 1]}
            </h3>

            {/* Step 1: Purpose */}
            {step === 1 && (
              <div className="space-y-3">
                {purposes.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      updateForm("purpose", p.id);
                      setStep(2);
                    }}
                    className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all hover:border-blue-300 hover:shadow-md ${
                      form.purpose === p.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-slate-200"
                    }`}
                  >
                    <span className="text-3xl">{p.icon}</span>
                    <div>
                      <p className="font-semibold text-slate-900">{p.label}</p>
                      <p className="text-slate-500 text-sm">{p.desc}</p>
                    </div>
                    {form.purpose === p.id && (
                      <div className="ml-auto w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3.5 h-3.5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Step 2: Meeting type */}
            {step === 2 && (
              <div className="space-y-3">
                {meetingTypes.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      updateForm("meetingType", m.id);
                      setStep(3);
                    }}
                    className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all hover:border-blue-300 hover:shadow-md ${
                      form.meetingType === m.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-slate-200"
                    }`}
                  >
                    <span className="text-3xl">{m.icon}</span>
                    <div>
                      <p className="font-semibold text-slate-900">{m.label}</p>
                      <p className="text-slate-500 text-sm">{m.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Step 3: Date */}
            {step === 3 && (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Select a date
                </label>
                <input
                  type="date"
                  min={getTodayStr()}
                  value={form.date}
                  onChange={(e) => updateForm("date", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none text-slate-800 text-sm"
                />
                <button
                  onClick={() => form.date && setStep(4)}
                  disabled={!form.date}
                  className="mt-6 w-full bg-[#1B4FD8] disabled:bg-slate-200 disabled:text-slate-400 text-white font-semibold py-3.5 rounded-xl hover:bg-[#1740B8] transition-colors"
                >
                  Continue →
                </button>
              </div>
            )}

            {/* Step 4: Time slot */}
            {step === 4 && (
              <div>
                <p className="text-slate-500 text-sm mb-4">
                  Available times for {form.date}
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => {
                        updateForm("timeSlot", slot);
                        setStep(5);
                      }}
                      className={`py-2.5 rounded-xl border-2 text-sm font-medium transition-all ${
                        form.timeSlot === slot
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-slate-200 hover:border-blue-300 text-slate-700"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Contact details */}
            {step === 5 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => updateForm("name", e.target.value)}
                    placeholder="John Kamau"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none text-slate-800 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateForm("phone", e.target.value)}
                    placeholder="+254 7XX XXX XXX"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none text-slate-800 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email Address (optional)
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => updateForm("email", e.target.value)}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none text-slate-800 text-sm"
                  />
                </div>

                {/* Summary */}
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-sm">
                  <p className="font-semibold text-blue-900 mb-2">
                    Booking Summary
                  </p>
                  <div className="space-y-1 text-blue-800">
                    <p>
                      📋 Purpose:{" "}
                      <strong>
                        {purposes.find((p) => p.id === form.purpose)?.label}
                      </strong>
                    </p>
                    <p>
                      {form.meetingType === "virtual" ? "💻" : "🤝"} Type:{" "}
                      <strong>
                        {
                          meetingTypes.find((m) => m.id === form.meetingType)
                            ?.label
                        }
                      </strong>
                    </p>
                    <p>
                      📅 Date: <strong>{form.date}</strong>
                    </p>
                    <p>
                      ⏰ Time: <strong>{form.timeSlot}</strong>
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!form.name || !form.phone}
                  className="w-full bg-[#1B4FD8] disabled:bg-slate-200 disabled:text-slate-400 text-white font-semibold py-4 rounded-xl hover:bg-[#1740B8] transition-colors"
                >
                  Confirm Appointment
                </button>
              </div>
            )}

            {/* Back button */}
            {step > 1 && (
              <button
                onClick={() => setStep((prev) => (prev - 1) as Step)}
                className="mt-4 flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-600 transition-colors"
              >
                ← Back
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
