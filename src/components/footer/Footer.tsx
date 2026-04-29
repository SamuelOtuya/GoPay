import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    personal: [
      { label: "Young Adult", path: "/personal/young-adult" },
      { label: "Family Cover", path: "/personal/family" },
      { label: "Senior Cover", path: "/personal/senior" },
      { label: "Medical Insurance", path: "/personal/medical" },
      { label: "Wealth Protection", path: "/personal/wealth" },
    ],
    business: [
      { label: "Assets Protection", path: "/business/assets" },
      { label: "Employee Benefits", path: "/business/employees" },
      { label: "Cyber Insurance", path: "/business/cyber" },
      { label: "Liability Cover", path: "/business/liability" },
      { label: "SME Packages", path: "/business/sme" },
    ],
    company: [
      { label: "About Us", path: "/about" },
      { label: "Our Team", path: "/about#team" },
      { label: "Industry Solutions", path: "/industry" },
      { label: "Risk Guide", path: "/risk" },
      { label: "Book Appointment", path: "/appointment" },
    ],
  };

  return (
    <footer className="bg-[#0F2240] text-white">
      {/* Top CTA Banner */}
      <div className="bg-gradient-to-r from-[#1B3A6B] to-[#2563EB] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">
              Not sure what coverage you need?
            </h3>
            <p className="text-blue-200 text-sm">
              Our advisors are ready to guide you — no pressure, just clarity.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              to="/appointment"
              className="px-6 py-3 rounded-lg bg-white text-[#1B3A6B] font-semibold text-sm hover:bg-blue-50 transition-colors"
            >
              Book Free Consultation
            </Link>
            <Link
              to="/quote"
              className="px-6 py-3 rounded-lg bg-[#F59E0B] text-white font-semibold text-sm hover:bg-[#D97706] transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#3B82F6] flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M12 2L3 7v10l9 5 9-5V7L12 2zm0 2.18L19 8.5v7L12 19.32 5 15.5v-7l7-4.32z" />
                  <path d="M12 6L7 9v6l5 3 5-3V9l-5-3z" opacity="0.5" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-lg text-white leading-tight">
                  GOPAY Insurance
                </div>
                <div className="text-xs text-blue-300 leading-none">Agency</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Insurance designed around what matters most in your life and
              business. Protecting families and enterprises across Kenya since
              day one.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-blue-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Longonot Place, 4th Floor, Kijabe Street, Nairobi
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-blue-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +254 715 664 233
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-blue-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                info@gopayinsurance.com
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/254715664233"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#1db954] text-white text-sm font-medium transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12.004 2.003A9.997 9.997 0 002.007 12a9.97 9.97 0 001.472 5.228L2 22l4.93-1.453A9.95 9.95 0 0012.004 22c5.514 0 9.998-4.485 9.998-9.998 0-2.669-1.04-5.178-2.929-7.066A9.942 9.942 0 0012.004 2.003z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Personal */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Personal
            </h4>
            <ul className="space-y-2.5">
              {links.personal.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-sm text-slate-400 hover:text-blue-300 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Business
            </h4>
            <ul className="space-y-2.5">
              {links.business.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-sm text-slate-400 hover:text-blue-300 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {links.company.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-sm text-slate-400 hover:text-blue-300 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-700/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {currentYear} Gopay Insurance Agency. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-slate-500">
            <Link
              to="/privacy"
              className="hover:text-blue-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-blue-300 transition-colors">
              Terms of Service
            </Link>
            <span>Reg. No. IRA-2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
