import { useState, useRef } from "react";
import { Link } from "react-router-dom";

// ─── Types ────────────────────────────────────────────────────────────────────
interface ClaimForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  policyNumber: string;
  lossDate: string;
  claimDetails: string;
  photo: File | null;
}

const INITIAL_FORM: ClaimForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  policyNumber: "",
  lossDate: "",
  claimDetails: "",
  photo: null,
};

// ─── Input component ──────────────────────────────────────────────────────────
function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[#333] text-sm font-medium tracking-wide">
        {label}
        {required && <span className="text-[#6db33f] ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full bg-[#f0f3f5] border border-transparent focus:border-[#6db33f] focus:bg-white outline-none rounded px-4 py-3 text-sm text-[#1c1c1c] placeholder-[#aaa] transition-all duration-200";

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Claim() {
  const [form, setForm] = useState<ClaimForm>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("No file chosen");
  const fileRef = useRef<HTMLInputElement>(null);

  const set =
    (field: keyof ClaimForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setForm((prev) => ({ ...prev, photo: file }));
    setFileName(file ? file.name : "No file chosen");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to your backend / API
    console.log("Claim submitted:", form);
    setSubmitted(true);
  };

  return (
    <div className="bg-[#f7f7f5] min-h-screen font-['Josefin_Sans',sans-serif]">
      {/* ── Hero Banner ── */}
      <header
        className="relative h-64 md:h-80 flex items-end pb-10 px-8 md:px-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=1600&q=80')",
        }}
      >
        {/* Dim overlay */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10">
          <h1 className="font-serif text-white text-4xl md:text-5xl font-normal tracking-wide leading-tight">
            Report a Claim
          </h1>
          <p className="text-white/75 text-sm tracking-widest mt-1 lowercase">
            support when you need it
          </p>
        </div>
      </header>

      {/* ── Body Layout ── */}
      <div className="max-w-6xl mx-auto px-5 py-14 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-14 items-start">
        {/* ── Main Column ── */}
        <main>
          {/* Intro */}
          <div className="mb-8 pb-8 border-b border-[#e4e4e0]">
            <h2 className="font-serif text-[#1c1c1c] text-3xl font-normal leading-snug mb-4">
              Claims advocates ready to help at any time.
            </h2>
            <p className="text-[#666] text-sm leading-relaxed italic max-w-2xl">
              Being faced with the unexpected can be a very stressful thing, but
              we don't think reporting an insurance claim should be. We're here
              to help you every step of the way, making your claims experience
              as simple and convenient as possible.
            </p>
          </div>

          {/* Form section */}
          {submitted ? (
            <div className="bg-white rounded-lg p-10 shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-[#6db33f]/10 flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-8 h-8 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-[#1c1c1c] mb-3">
                Claim Received
              </h3>
              <p className="text-[#666] text-sm leading-relaxed max-w-md mx-auto mb-6">
                Thank you for reaching out. One of our claims advocates will be
                in touch with you shortly. For urgent matters, please call us
                directly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm(INITIAL_FORM);
                  setFileName("No file chosen");
                }}
                className="bg-red-500 hover:bg-red-500 text-white text-xs font-bold tracking-[2px] uppercase px-8 py-3 rounded transition-colors duration-200"
              >
                Submit Another Claim
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-lg p-8 shadow-sm">
              {/* Section heading */}
              <div className="flex items-center gap-3 mb-3">
                <svg
                  className="w-8 h-8 text-[#6db33f] flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <h3 className="font-serif text-2xl text-[#1c1c1c]">
                  Request claim assistance
                </h3>
              </div>
              <p className="text-[#666] text-sm leading-relaxed mb-8">
                If you have questions or prefer to speak to one of our claim
                advocates, complete the form below and we'll be in touch to
                assist you with your claim. That's why we're here.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="First name">
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={set("firstName")}
                      className={inputClass}
                      placeholder="John"
                    />
                  </Field>
                  <Field label="Last name">
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={set("lastName")}
                      className={inputClass}
                      placeholder="Doe"
                    />
                  </Field>
                </div>

                <Field label="Email" required>
                  <input
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    required
                    className={inputClass}
                    placeholder="john@example.com"
                  />
                </Field>

                <Field label="Phone number">
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={set("phone")}
                    className={inputClass}
                    placeholder="+254 7XX XXX XXX"
                  />
                </Field>

                <Field label="Policy number">
                  <input
                    type="text"
                    value={form.policyNumber}
                    onChange={set("policyNumber")}
                    className={inputClass}
                    placeholder="e.g. GP-2026-00123"
                  />
                </Field>

                <Field label="Date your loss occurred">
                  <input
                    type="date"
                    value={form.lossDate}
                    onChange={set("lossDate")}
                    className={inputClass}
                  />
                </Field>

                <Field label="Claim details">
                  <textarea
                    value={form.claimDetails}
                    onChange={set("claimDetails")}
                    rows={5}
                    className={`${inputClass} resize-y`}
                    placeholder="Please describe what happened…"
                  />
                </Field>

                {/* File upload */}
                <div>
                  <p className="text-[#666] text-xs italic mb-2">
                    Please upload any photos you have related to your claim.
                  </p>
                  <label className="text-[#333] text-sm font-medium tracking-wide block mb-1.5">
                    Claim photos
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => fileRef.current?.click()}
                      className="border border-[#ccc] bg-white hover:bg-gray-50 text-[#444] text-xs px-4 py-2 rounded transition-colors duration-150"
                    >
                      Choose File
                    </button>
                    <span className="text-[#aaa] text-xs truncate max-w-[200px]">
                      {fileName}
                    </span>
                    <input
                      ref={fileRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFile}
                      className="hidden"
                    />
                  </div>
                </div>

                {/* Privacy */}
                <div className="bg-[#f7f7f5] rounded p-4 text-xs text-[#777] leading-relaxed">
                  <span className="font-bold text-[#444]">
                    Privacy Statement and Declaration:{" "}
                  </span>
                  By completing this form, you will have provided Gopay
                  Insurance Agency with your Personal Information. Personal
                  Information is information that identifies and relates to you
                  or other individuals (such as your dependents). Gopay
                  Insurance Agency Ltd. will only use your personal information
                  for lawful business purposes and is committed to protecting
                  the integrity, confidentiality, access and use of personal
                  information that we collect from you now and in the course of
                  our business. You have the right to access and correct
                  personal data that may be incorrect or incomplete.
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="self-start bg-[#e8622a] hover:bg-[#d4551f] text-white text-sm font-bold tracking-widest uppercase px-10 py-3 rounded transition-colors duration-200"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </main>

        {/* ── Sidebar ── */}
        <aside className="flex flex-col gap-6 lg:sticky lg:top-8">
          {/* Here to Help */}
          <div className="bg-white rounded-lg p-7 shadow-sm">
            <h3 className="text-[0.68rem] font-bold tracking-[2.5px] uppercase text-[#aaa] border-b border-[#e4e4e0] pb-3 mb-5">
              Here to Help
            </h3>
            <div className="flex items-start gap-4">
              {/* Envelope icon */}
              <div className="flex-shrink-0 mt-1">
                <svg
                  className="w-10 h-10 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.4}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <a
                  href="tel:+254712856447"
                  className="block text-red-500 font-bold text-sm hover:underline"
                >
                  0712 856 447
                </a>
                <a
                  href="mailto:dial@gopayinsurance.co.ke"
                  className="block text-red-500 text-sm hover:underline break-all"
                >
                  dial@gopayinsurance.co.ke
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-lg p-7 shadow-sm">
            <h3 className="text-[0.68rem] font-bold tracking-[2.5px] uppercase text-[#aaa] border-b border-[#e4e4e0] pb-3 mb-5">
              Quick Links
            </h3>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[#333] text-sm font-semibold mb-2">
                  Client Services
                </p>
                <ul className="flex flex-col gap-1.5 pl-2">
                  <li>
                    <Link
                      to="/claim"
                      className="text-red-500 text-sm hover:underline"
                    >
                      Report a Claim
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/policy-change"
                      className="text-red-500 text-sm hover:underline"
                    >
                      Request Policy Change
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-[#333] text-sm font-semibold mb-2">
                  Resources
                </p>
                <ul className="flex flex-col gap-1.5 pl-2">
                  <li>
                    <Link
                      to="/coverage"
                      className="text-red-500 text-sm hover:underline"
                    >
                      Clickable Coverage®
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/faqs"
                      className="text-red-500 text-sm hover:underline"
                    >
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Building Relationships */}
          <div className="bg-white rounded-lg p-7 shadow-sm">
            <h3 className="text-[0.68rem] font-bold tracking-[2.5px] uppercase text-[#aaa] border-b border-[#e4e4e0] pb-3 mb-5">
              We're Building Relationships
            </h3>
            <div className="flex flex-col gap-3">
              <Link
                to="/feedback"
                className="block bg-red-500 hover:bg-red-600 text-white text-xs font-bold tracking-[2.5px] uppercase text-center py-4 rounded transition-colors duration-200"
              >
                Send Feedback
              </Link>
              <Link
                to="/refer"
                className="block bg-red-500 hover:bg-red-600 text-white text-xs font-bold tracking-[2.5px] uppercase text-center py-4 rounded transition-colors duration-200"
              >
                Refer a Friend
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
