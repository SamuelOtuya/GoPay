import { useState, useRef, useEffect } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Message {
  id: string;
  from: "bot" | "user";
  text: string;
  options?: Option[];
  timestamp: Date;
}

interface Option {
  label: string;
  value: string;
  icon?: string;
}

// ─── Knowledge Base ───────────────────────────────────────────────────────────

const knowledgeBase: Record<string, { text: string; options?: Option[] }> = {
  greeting: {
    text: "👋 Hi there! I'm **GoBot**, your GoPay Insurance assistant.\n\nI can help you understand your cover options, explain insurance terms, or guide you to the right plan. What would you like to explore?",
    options: [
      { label: "🏠 Personal Insurance", value: "personal" },
      { label: "🏢 Business Insurance", value: "business" },
      { label: "🏭 By Industry", value: "industry" },
      { label: "🛡️ Risk Guide", value: "risk" },
      { label: "💬 Common Questions", value: "faq" },
    ],
  },
  personal: {
    text: "**Personal Insurance** covers you and your family across life's key risks. Here's what we offer:",
    options: [
      { label: "🧑 Young Adult Cover", value: "young_adult" },
      { label: "👨‍👩‍👧‍👦 Family Cover", value: "family" },
      { label: "👴 Senior Cover", value: "senior" },
      { label: "💊 Medical Insurance", value: "medical" },
      { label: "← Back to menu", value: "greeting" },
    ],
  },
  young_adult: {
    text: "**Young Adult Cover** is perfect for ages 18–35.\n\n✅ Personal Accident — covers disability, death & medical expenses from accidents\n✅ Individual Medical — inpatient, outpatient & pharmacy\n✅ Term Life — affordable income protection for dependants\n✅ Travel Insurance — for local and international trips\n\n💡 *Tip: The younger you start, the lower your premiums — lock in great rates now.*",
    options: [
      { label: "💰 Get a Quote", value: "quote" },
      { label: "📅 Book Consultation", value: "appointment" },
      { label: "← Personal Insurance", value: "personal" },
    ],
  },
  family: {
    text: "**Family Cover** puts the whole household under one policy.\n\n✅ Family Medical — inpatient, outpatient & maternity\n✅ Education Protector — school fees paid if parent dies or is disabled\n✅ Family Life Insurance — death & critical illness benefit\n✅ Home Insurance — building, contents & fire cover\n\n💡 *One policy for everyone is simpler and usually more affordable than separate plans.*",
    options: [
      { label: "💰 Get a Quote", value: "quote" },
      { label: "📅 Book Consultation", value: "appointment" },
      { label: "← Personal Insurance", value: "personal" },
    ],
  },
  senior: {
    text: "**Senior Cover** is tailored for ages 55+.\n\n✅ Senior Medical — includes chronic illness & specialist access\n✅ Critical Illness — lump sum on cancer, stroke or heart attack diagnosis\n✅ Funeral Cover — fast 48-hour payout, no medical exam\n✅ Pension Top-Up — supplement your retirement income\n\n💡 *Selected plans have no medical exam on entry.*",
    options: [
      { label: "💰 Get a Quote", value: "quote" },
      { label: "📅 Book Consultation", value: "appointment" },
      { label: "← Personal Insurance", value: "personal" },
    ],
  },
  medical: {
    text: "**Medical Insurance** — we have plans for every life stage:\n\n💊 **Juniors Cover** (0–18 yrs) — from KES 3,500/yr\n🧓 **Seniors Cover** (55+) — from KES 18,000/yr\n👨‍👩‍👧 **Family Cover** — from KES 22,000/yr\n🩺 **Micro Covers** — from KES 6,000/yr\n📋 **Outpatient Only** — from KES 4,500/yr\n\nAll plans include inpatient cover. Most include outpatient, dental & optical riders.",
    options: [
      { label: "💰 Get a Quote", value: "quote" },
      { label: "📅 Book Consultation", value: "appointment" },
      { label: "← Personal Insurance", value: "personal" },
    ],
  },
  business: {
    text: "**Business Insurance** — protect what you've built. Choose the area of your business:",
    options: [
      { label: "🏗️ Assets & Property", value: "biz_assets" },
      { label: "👥 Employee Benefits", value: "biz_employees" },
      { label: "⚖️ Liability Cover", value: "biz_liability" },
      { label: "🔐 Cyber Insurance", value: "biz_cyber" },
      { label: "📦 SME Package", value: "biz_sme" },
      { label: "← Back to menu", value: "greeting" },
    ],
  },
  biz_assets: {
    text: "**Business Asset Protection**\n\n✅ Fire Insurance — buildings, stock & equipment\n✅ Burglary Insurance — theft and forced entry\n✅ Machinery Breakdown — repair or replacement costs\n✅ All-Risk Cover — broad protection in one policy\n\n💡 *Fire and burglary are the most common claims for Kenyan SMEs.*",
    options: [
      { label: "💰 Get a Quote", value: "quote" },
      { label: "← Business Insurance", value: "business" },
    ],
  },
  biz_employees: {
    text: "**Employee Benefits**\n\n✅ Group Medical — inpatient & outpatient for all staff\n✅ WIBA (Work Injury Benefits Act) — legally required for all employers\n✅ Group Life Insurance — death benefit for employees' families\n✅ Group Personal Accident — disability & accident cover\n\n💡 *WIBA is a legal requirement in Kenya for all businesses with staff.*",
    options: [
      { label: "💰 Get a Quote", value: "quote" },
      { label: "← Business Insurance", value: "business" },
    ],
  },
  biz_liability: {
    text: "**Liability Cover**\n\n✅ Public Liability — third-party injury or property damage\n✅ Professional Indemnity — errors, omissions & professional negligence\n✅ Product Liability — claims from your products causing harm\n✅ Directors & Officers — personal liability for executives\n\n💡 *Many contracts now require proof of liability cover before work begins.*",
    options: [
      { label: "💰 Get a Quote", value: "quote" },
      { label: "← Business Insurance", value: "business" },
    ],
  },
  biz_cyber: {
    text: "**Cyber Insurance**\n\n✅ Data Breach Cover — notification costs & legal liability\n✅ Ransomware Cover — ransom payments & recovery costs\n✅ Business Interruption — revenue lost due to a cyber attack\n✅ Cyber Extortion — expert negotiators included\n\n💡 *Kenya has seen a 200% rise in cyber attacks on SMEs since 2022.*",
    options: [
      { label: "💰 Get a Quote", value: "quote" },
      { label: "← Business Insurance", value: "business" },
    ],
  },
  biz_sme: {
    text: "**SME All-in-One Package** 🎯\n\nThe most popular choice for businesses with 1–50 staff.\n\nIncludes: Fire & Burglary + Public Liability + Employee Group Life + WIBA — all in one affordable bundle.\n\n💡 *Bundling saves up to 25% versus buying covers separately.*",
    options: [
      { label: "💰 Get a Quote", value: "quote" },
      { label: "📅 Book Consultation", value: "appointment" },
      { label: "← Business Insurance", value: "business" },
    ],
  },
  industry: {
    text: "**Insurance by Industry** — sector-specific solutions. Which industry are you in?",
    options: [
      { label: "🚚 Transport & Logistics", value: "ind_transport" },
      { label: "🏥 Healthcare", value: "ind_health" },
      { label: "🏗️ Construction", value: "ind_construction" },
      { label: "🛒 Retail & Trade", value: "ind_retail" },
      { label: "💻 ICT & Technology", value: "ind_ict" },
      { label: "← Back to menu", value: "greeting" },
    ],
  },
  ind_transport: {
    text: "**Transport & Logistics Insurance**\n\n✅ Motor Fleet Cover — all your vehicles under one policy\n✅ Goods in Transit — cargo protection during delivery\n✅ Haulier Liability — third-party claims from transport operations\n✅ Marine Cargo — sea and air freight\n\n💡 *Fleet policies are significantly cheaper per vehicle than individual motor policies.*",
    options: [
      { label: "💰 Get a Quote", value: "quote" },
      { label: "← By Industry", value: "industry" },
    ],
  },
  ind_health: {
    text: "**Healthcare Sector Insurance**\n\n✅ Medical Malpractice — clinical errors & patient claims\n✅ Medical Equipment Cover — expensive machinery breakdown\n✅ Public Liability — visitor and patient injuries\n✅ Group Staff Benefits — medical, life & accident for your team\n\n💡 *Medical malpractice suits in Kenya have tripled in the last 5 years.*",
    options: [
      { label: "💰 Get a Quote", value: "quote" },
      { label: "← By Industry", value: "industry" },
    ],
  },
  ind_construction: {
    text: "**Construction Insurance**\n\n✅ Contractors All Risk (CAR) — covers works in progress\n✅ Public Liability — injury to members of the public on site\n✅ Plant & Machinery — equipment damage and theft\n✅ WIBA — mandatory for all construction workers\n\n💡 *CAR policies can cover a single project or on an annual basis for multiple sites.*",
    options: [
      { label: "💰 Get a Quote", value: "quote" },
      { label: "← By Industry", value: "industry" },
    ],
  },
  ind_retail: {
    text: "**Retail & Trade Insurance**\n\n✅ Stock & Contents Cover — fire, theft and flood\n✅ Business Interruption — lost revenue when you can't trade\n✅ Public Liability — customer injuries in your premises\n✅ Cash in Transit — protection for cash movements\n\n💡 *Business interruption is often the most financially devastating risk for retailers.*",
    options: [
      { label: "💰 Get a Quote", value: "quote" },
      { label: "← By Industry", value: "industry" },
    ],
  },
  ind_ict: {
    text: "**ICT & Technology Insurance**\n\n✅ Professional Indemnity — errors in software, advice & services\n✅ Cyber Liability — data breaches & hacking incidents\n✅ Equipment All Risk — laptops, servers & hardware\n✅ Business Interruption — downtime costs\n\n💡 *Most enterprise clients now require proof of PI and cyber cover before awarding contracts.*",
    options: [
      { label: "💰 Get a Quote", value: "quote" },
      { label: "← By Industry", value: "industry" },
    ],
  },
  risk: {
    text: "**Risk & Coverage Guide** — understanding your exposures. What are you worried about?",
    options: [
      { label: "🔥 Fire & Property Loss", value: "risk_fire" },
      { label: "🔓 Theft & Burglary", value: "risk_theft" },
      { label: "🕵️ Cyber Risk", value: "risk_cyber" },
      { label: "⚠️ Liability Risk", value: "risk_liability" },
      { label: "📉 Financial Loss", value: "risk_financial" },
      { label: "← Back to menu", value: "greeting" },
    ],
  },
  risk_fire: {
    text: "**Fire & Property Loss Risk**\n\n🔥 Fire is the #1 cause of total business loss in Kenya.\n\n**What can go wrong?**\n• Electrical faults — most common cause\n• Arson and neighbouring property fires\n• Natural disasters (floods can also trigger fires)\n\n**What covers it?**\n→ Fire Insurance (buildings + contents)\n→ Business Interruption Insurance\n→ Contractor's All Risk (during construction)\n\n💡 *Most fire claims are settled within 30 days with GoPay's insurer partners.*",
    options: [
      { label: "💰 Get Fire Cover Quote", value: "quote" },
      { label: "← Risk Guide", value: "risk" },
    ],
  },
  risk_theft: {
    text: "**Theft & Burglary Risk**\n\n🔓 Over 40% of Kenyan businesses experience theft in any given year.\n\n**What can go wrong?**\n• Overnight break-ins targeting stock & equipment\n• Employee theft (fidelity risk)\n• Cash stolen from premises or in transit\n\n**What covers it?**\n→ Burglary Insurance\n→ Fidelity Guarantee (employee dishonesty)\n→ Cash in Transit Cover\n\n💡 *Burglary cover is often bundled with fire — ask about a combined policy.*",
    options: [
      { label: "💰 Get a Quote", value: "quote" },
      { label: "← Risk Guide", value: "risk" },
    ],
  },
  risk_cyber: {
    text: "**Cyber Risk**\n\n🕵️ Kenya ranks among Africa's top targets for cybercrime.\n\n**What can go wrong?**\n• Ransomware — files encrypted, ransom demanded\n• Data breach — customer data stolen or leaked\n• BEC (Business Email Compromise) — fraudulent wire transfers\n• System downtime — revenue loss from IT failure\n\n**What covers it?**\n→ Cyber Insurance (breach, ransomware, liability)\n→ Professional Indemnity (for tech companies)\n\n💡 *Cyber cover can include incident response teams and legal support.*",
    options: [
      { label: "💰 Get Cyber Cover Quote", value: "quote" },
      { label: "← Risk Guide", value: "risk" },
    ],
  },
  risk_liability: {
    text: "**Liability Risk**\n\n⚠️ One lawsuit can wipe out years of profit.\n\n**What can go wrong?**\n• Customer injured on your premises\n• Product causes harm or illness\n• Professional error causes client financial loss\n• Director's decision leads to company loss\n\n**What covers it?**\n→ Public Liability Insurance\n→ Product Liability Insurance\n→ Professional Indemnity\n→ Directors & Officers (D&O)\n\n💡 *Public liability is compulsory for businesses open to the public in many counties.*",
    options: [
      { label: "💰 Get a Quote", value: "quote" },
      { label: "← Risk Guide", value: "risk" },
    ],
  },
  risk_financial: {
    text: "**Financial Loss Risk**\n\n📉 Revenue disruption is more common than most businesses expect.\n\n**What can go wrong?**\n• Fire or theft forces you to close temporarily\n• Key person dies or becomes disabled\n• Major debtor can't pay (trade credit risk)\n• Economic events affect your income\n\n**What covers it?**\n→ Business Interruption Insurance\n→ Key Person Insurance\n→ Trade Credit Insurance\n→ Fidelity Guarantee\n\n💡 *Business interruption cover is often the difference between a business surviving or closing.*",
    options: [
      { label: "💰 Get a Quote", value: "quote" },
      { label: "← Risk Guide", value: "risk" },
    ],
  },
  faq: {
    text: "**Frequently Asked Questions** — pick a topic:",
    options: [
      { label: "❓ What is a premium?", value: "faq_premium" },
      { label: "❓ How do I make a claim?", value: "faq_claim" },
      { label: "❓ What is an excess?", value: "faq_excess" },
      { label: "❓ Is GoPay IRA registered?", value: "faq_ira" },
      { label: "❓ How fast are claims paid?", value: "faq_speed" },
      { label: "← Back to menu", value: "greeting" },
    ],
  },
  faq_premium: {
    text: "**What is a premium?**\n\nA premium is the amount you pay for your insurance cover — usually monthly or annually.\n\nYour premium is calculated based on:\n• The type and level of cover you choose\n• Your age, health history (for medical)\n• Your business size and risk profile\n• Your claims history\n\n💡 *Paying annually is usually 5–10% cheaper than monthly payments.*",
    options: [
      { label: "← FAQs", value: "faq" },
      { label: "🏠 Main Menu", value: "greeting" },
    ],
  },
  faq_claim: {
    text: "**How do I make a claim?**\n\nWith GoPay, claims are straightforward:\n\n1️⃣ **Notify us immediately** — call or WhatsApp +254 715 664 233\n2️⃣ **Document the loss** — photos, police report (if theft/accident), receipts\n3️⃣ **Complete a claim form** — we'll send it to you\n4️⃣ **Submit to insurer** — we handle all the follow-up\n5️⃣ **Receive payment** — timelines vary by insurer (7–30 days)\n\n💡 *As your broker, GoPay advocates for you throughout the entire claims process.*",
    options: [
      { label: "← FAQs", value: "faq" },
      { label: "📞 Call Us", value: "call" },
    ],
  },
  faq_excess: {
    text: "**What is an excess (deductible)?**\n\nAn excess is the amount you pay yourself before the insurance pays the rest.\n\n**Example:** Your car is damaged and repair costs KES 80,000. If your excess is KES 15,000, the insurer pays KES 65,000 and you pay KES 15,000.\n\n**Why does it exist?**\n• It reduces small, frequent claims\n• It keeps premiums lower\n• It encourages careful behaviour\n\n💡 *You can sometimes choose a higher excess in exchange for a lower premium.*",
    options: [
      { label: "← FAQs", value: "faq" },
      { label: "🏠 Main Menu", value: "greeting" },
    ],
  },
  faq_ira: {
    text: "**Is GoPay Insurance Agency IRA registered?**\n\n✅ Yes. GoPay Insurance Agency is fully registered with the **Insurance Regulatory Authority (IRA) of Kenya**.\n\nThis means:\n• We meet all legal and capital requirements\n• We are bound by a professional code of conduct\n• Your interests are protected by IRA regulations\n• All insurers we work with are also IRA-approved\n\n💡 *Always verify your insurance broker is IRA-registered before purchasing any policy.*",
    options: [
      { label: "← FAQs", value: "faq" },
      { label: "🏠 Main Menu", value: "greeting" },
    ],
  },
  faq_speed: {
    text: "**How fast are claims paid?**\n\nClaim timelines depend on the insurer and complexity:\n\n⚡ **Funeral cover** — 24–48 hours\n🏥 **Medical (inpatient)** — cashless or 7–14 days\n🔥 **Fire/burglary (simple)** — 14–21 days\n🚗 **Motor accident** — 14–30 days\n🏗️ **Complex commercial** — 30–90 days\n\n💡 *GoPay actively chases claims on your behalf to ensure timely settlement.*",
    options: [
      { label: "← FAQs", value: "faq" },
      { label: "🏠 Main Menu", value: "greeting" },
    ],
  },
  quote: {
    text: "Great! Let me take you to our quick quote form.\n\nIt takes less than 2 minutes and our advisors will call you back with a personalised quote within **2 business hours** ⚡\n\nClick below to open the quote form 👇",
    options: [
      { label: "📝 Open Quote Form →", value: "go_quote" },
      { label: "🏠 Back to Menu", value: "greeting" },
    ],
  },
  appointment: {
    text: "Our advisors are available:\n📅 **Monday–Friday, 8am–6pm**\n📅 **Saturday, 9am–1pm**\n\nYou can meet us:\n🏢 **In person** — Longonot Place, Kijabe Street, Nairobi\n💻 **Virtually** — Google Meet or Zoom\n📞 **By phone** — we call you\n\nClick below to book your slot 👇",
    options: [
      { label: "📅 Book Appointment →", value: "go_appointment" },
      { label: "🏠 Back to Menu", value: "greeting" },
    ],
  },
  call: {
    text: "📞 **Call us directly:**\n+254 715 664 233\n\n💬 **WhatsApp:**\n+254 715 664 233\n\n📧 **Email:**\ninfo@gopayinsurance.com\n\n🕐 **Office hours:**\nMon–Fri: 8am–6pm\nSat: 9am–1pm",
    options: [{ label: "🏠 Back to Menu", value: "greeting" }],
  },
};

// ─── Helper: render markdown-style bold ──────────────────────────────────────

const renderText = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-[#0F2240]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

// ─── Main Component ───────────────────────────────────────────────────────────

const InsuranceBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const [pulse, setPulse] = useState(true);
  const [unread, setUnread] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Stop pulsing after first open
  useEffect(() => {
    if (open) {
      setPulse(false);
      setUnread(0);
      if (messages.length === 0) {
        addBotMessage("greeting");
      }
    }
  }, [open]);

  const addBotMessage = (key: string, delay = 600) => {
    const entry = knowledgeBase[key];
    if (!entry) return;

    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          from: "bot",
          text: entry.text,
          options: entry.options,
          timestamp: new Date(),
        },
      ]);
    }, delay);
  };

  const handleOption = (option: Option) => {
    // Add user "message"
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        from: "user",
        text: option.label,
        timestamp: new Date(),
      },
    ]);

    // Handle navigation options
    if (option.value === "go_quote") {
      setTimeout(() => {
        window.location.href = "/quote";
      }, 400);
      return;
    }
    if (option.value === "go_appointment") {
      setTimeout(() => {
        window.location.href = "/appointment";
      }, 400);
      return;
    }

    addBotMessage(option.value);
  };

  const resetChat = () => {
    setMessages([]);
    setTyping(false);
    setTimeout(() => addBotMessage("greeting", 300), 100);
  };

  return (
    <>
      <style>{`
        @keyframes chatIn {
          0%   { opacity: 0; transform: translateY(20px) scale(0.92); }
          60%  { transform: translateY(-4px) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes chatOut {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to   { opacity: 0; transform: translateY(16px) scale(0.94); }
        }
        @keyframes tooltipIn {
          0%   { opacity: 0; transform: translateX(10px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fabPop {
          0%   { transform: scale(1); }
          40%  { transform: scale(1.18); }
          70%  { transform: scale(0.93); }
          100% { transform: scale(1); }
        }
        .fab-pop { animation: fabPop 0.35s cubic-bezier(0.34,1.56,0.64,1) both; }
        @keyframes bounceDot {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-bounce-slow {
          animation: bounceDot 1.8s ease-in-out infinite;
        }
        .tooltip-enter { animation: tooltipIn 0.2s ease both; }
        .typing-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #94a3b8;
          animation: typingPulse 1.3s ease-in-out infinite;
        }
        .typing-dot:nth-child(2) { animation-delay: 0.18s; }
        .typing-dot:nth-child(3) { animation-delay: 0.36s; }
        @keyframes typingPulse {
          0%, 60%, 100% { transform: translateY(0) scale(0.8); opacity: 0.4; }
          30% { transform: translateY(-5px) scale(1); opacity: 1; }
        }
        .msg-in {
          animation: msgIn 0.25s cubic-bezier(0.34,1.2,0.64,1) both;
        }
        @keyframes msgIn {
          from { opacity: 0; transform: translateY(10px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .opt-in {
          animation: optIn 0.2s ease both;
        }
        @keyframes optIn {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseRing {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        .pulse-ring {
          animation: pulseRing 1.6s ease-out infinite;
        }
        .pulse-ring-2 {
          animation: pulseRing 1.6s ease-out 0.5s infinite;
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .btn-shimmer {
          background: linear-gradient(105deg, #1B3A6B 40%, #3b82f6 50%, #1B3A6B 60%);
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
      `}</style>

      {/* Single bottom-right anchor — everything lives here */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Chat Window — sits above the FAB inside the same flex column */}
        {open && (
          <div
            className="w-[360px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl shadow-slate-500/25 border border-slate-200 flex flex-col overflow-hidden"
            style={{
              height: "520px",
              animation: "chatIn 0.4s cubic-bezier(0.16,1,0.3,1) both",
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0F2240] to-[#1B3A6B] px-4 py-3 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-blue-400/20 border-2 border-blue-300/40 flex items-center justify-center text-lg">
                    🤖
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#0F2240]" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-tight">
                    GoBot
                  </p>
                  <p className="text-blue-300 text-[11px]">
                    GoPay Insurance Assistant • Online
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={resetChat}
                  title="Restart chat"
                  className="p-1.5 rounded-lg text-blue-300 hover:text-white hover:bg-white/10 transition-colors"
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
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1.5 rounded-lg text-blue-300 hover:text-white hover:bg-white/10 transition-colors"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-slate-50/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`msg-in flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.from === "bot" && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#1B3A6B] to-[#2563EB] flex items-center justify-center text-sm mr-2 flex-shrink-0 mt-0.5">
                      🤖
                    </div>
                  )}
                  <div className="max-w-[85%] flex flex-col gap-2">
                    <div
                      className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                        msg.from === "bot"
                          ? "bg-white border border-slate-200 text-slate-700 rounded-tl-sm shadow-sm"
                          : "bg-gradient-to-br from-[#1B3A6B] to-[#2563EB] text-white rounded-tr-sm"
                      }`}
                    >
                      {msg.from === "bot" ? renderText(msg.text) : msg.text}
                    </div>

                    {/* Option buttons */}
                    {msg.from === "bot" && msg.options && (
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {msg.options.map((opt, i) => (
                          <button
                            key={opt.value}
                            onClick={() => handleOption(opt)}
                            className="opt-in text-xs font-medium px-3 py-1.5 rounded-full border border-blue-200 bg-white text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white hover:border-[#1B3A6B] hover:scale-105 active:scale-95 transition-all duration-150 shadow-sm"
                            style={{ animationDelay: `${i * 60}ms` }}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <div className="flex items-end gap-2 msg-in">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#1B3A6B] to-[#2563EB] flex items-center justify-center text-sm flex-shrink-0">
                    🤖
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center gap-1.5">
                    <div className="typing-dot" />
                    <div className="typing-dot" />
                    <div className="typing-dot" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Footer */}
            <div className="px-4 py-3 border-t border-slate-100 bg-white flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href="https://wa.me/254715664233"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                  <a
                    href="tel:+254715664233"
                    className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-700 transition-colors"
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Call
                  </a>
                </div>
                <p className="text-[10px] text-slate-300 font-medium">
                  Powered by GoPay
                </p>
              </div>
            </div>
            {/* Footer */}
            <div className="px-4 py-3 border-t border-slate-100 bg-white flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href="https://wa.me/254715664233"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                  <a
                    href="tel:+254715664233"
                    className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-700 transition-colors"
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Call
                  </a>
                </div>
                <p className="text-[10px] text-slate-300 font-medium">
                  Powered by GoPay
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tooltip — only when closed */}
        {!open && (
          <div className="tooltip-enter flex items-center gap-2 bg-[#0F2240] text-white text-xs font-medium pl-3 pr-4 py-2 rounded-xl shadow-xl pointer-events-none animate-bounce-slow">
            <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
            Ask me about insurance 💬
          </div>
        )}

        {/* FAB */}
        <button
          onClick={() => setOpen((p) => !p)}
          className={`relative w-14 h-14 rounded-full text-white shadow-2xl shadow-blue-900/50 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 btn-shimmer ${open ? "" : ""}`}
          style={{ outline: "none" }}
        >
          {/* Double pulse rings — only when closed and pulsing */}
          {pulse && !open && (
            <>
              <span className="absolute inset-0 rounded-full bg-blue-400 pulse-ring" />
              <span className="absolute inset-0 rounded-full bg-blue-300 pulse-ring-2" />
            </>
          )}

          {/* Unread badge */}
          {unread > 0 && !open && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#F59E0B] rounded-full text-[10px] font-bold text-white flex items-center justify-center shadow-md z-10">
              {unread}
            </span>
          )}

          {/* Icon — morphs between chat and X */}
          <span
            className="transition-all duration-300"
            style={{
              transform: open
                ? "rotate(90deg) scale(0.85)"
                : "rotate(0deg) scale(1)",
            }}
          >
            {open ? (
              <svg
                className="w-6 h-6"
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
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            )}
          </span>
        </button>
      </div>
    </>
  );
};

export default InsuranceBot;
