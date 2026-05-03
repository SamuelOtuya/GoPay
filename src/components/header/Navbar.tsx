import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import gopayLogo from "../../assets/logo2.jpg";

const allCovers = [
  {
    section: "Personal",
    items: [
      { label: "Young Adult", href: "/personal/young-adult" },
      { label: "Family Cover", href: "/personal/family" },
      { label: "Senior Cover", href: "/personal/senior" },
      { label: "Wealth Owner", href: "/personal/wealth-owner" },
      { label: "Medical Insurance", href: "/personal/medical" },
    ],
  },
  {
    section: "Business",
    items: [
      { label: "Assets & Property", href: "/business/assets" },
      { label: "Money & Revenue", href: "/business/money" },
      { label: "Employees", href: "/business/employees" },
      { label: "Liability", href: "/business/liability" },
      { label: "Cyber Insurance", href: "/business/cyber" },
      { label: "Transport & Fleet", href: "/business/transport" },
    ],
  },
  {
    section: "By Industry",
    items: [
      { label: "Transport & Logistics", href: "/industry/transport" },
      { label: "Healthcare", href: "/industry/healthcare" },
      { label: "Construction", href: "/industry/construction" },
      { label: "Retail & Trade", href: "/industry/retail" },
      { label: "ICT & Technology", href: "/industry/ict" },
      { label: "Hospitality", href: "/industry/hospitality" },
    ],
  },
  {
    section: "Risk Guide",
    items: [
      { label: "Fire & Property Loss", href: "/risk/fire" },
      { label: "Theft & Burglary", href: "/risk/theft" },
      { label: "Cyber Risk", href: "/risk/cyber" },
      { label: "Employee Risk", href: "/risk/employee" },
      { label: "Liability Risk", href: "/risk/liability" },
      { label: "Financial Loss", href: "/risk/financial" },
    ],
  },
];

const navLinks = [
  { label: "Personal", path: "/personal" },
  { label: "Business", path: "/business" },
  { label: "By Industry", path: "/industry" },
  { label: "Risk Guide", path: "/risk" },
  { label: "About", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Claim", path: "/claim" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coversOpen, setCoversOpen] = useState(false);
  const coversRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setCoversOpen(false);
  }, [location]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (coversRef.current && !coversRef.current.contains(e.target as Node)) {
        setCoversOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-0 min-h-[5.5rem]">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0 group">
            <img
              src={gopayLogo}
              alt="GoPay Insurance"
              className="h-20 w-auto object-contain transition-opacity duration-200 group-hover:opacity-85"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {/* Our Covers dropdown */}
            <div ref={coversRef} className="relative">
              <button
                onClick={() => setCoversOpen((p) => !p)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  coversOpen
                    ? "bg-[#1B3A6B] text-white"
                    : isScrolled
                      ? "text-slate-600 hover:text-[#1B3A6B] hover:bg-blue-50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                Our Covers
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${coversOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown panel */}
              {coversOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-[560px] bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-5 grid grid-cols-2 gap-x-6 gap-y-4"
                  style={{ animation: "dropIn 0.15s ease both" }}
                >
                  <style>{`
                    @keyframes dropIn {
                      from { opacity: 0; transform: translateY(-6px); }
                      to   { opacity: 1; transform: translateY(0); }
                    }
                  `}</style>

                  {allCovers.map((group) => (
                    <div key={group.section}>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">
                        {group.section}
                      </p>
                      <ul className="space-y-0.5">
                        {group.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              to={item.href}
                              className="block px-3 py-1.5 rounded-lg text-sm text-slate-700 hover:text-[#1B3A6B] hover:bg-blue-50 transition-colors font-medium"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Regular nav links */}
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-2 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-[#1B3A6B] text-white"
                    : isScrolled
                      ? "text-slate-600 hover:text-[#1B3A6B] hover:bg-blue-50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/appointment"
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                isScrolled
                  ? "border-[#1B3A6B] text-[#1B3A6B] hover:bg-blue-50"
                  : "border-white/60 text-white hover:bg-white/10"
              }`}
            >
              Book Appointment
            </Link>
            <Link
              to="/quote"
              className="px-5 py-2 rounded-lg text-sm font-semibold bg-[#F59E0B] text-white hover:bg-[#D97706] shadow-sm hover:shadow-md transition-all duration-200"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-slate-600 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {mobileOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {/* Our Covers section */}
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4 pt-2 pb-1">
              Our Covers
            </p>
            {allCovers.map((group) => (
              <div key={group.section} className="mb-3">
                <p className="text-[11px] font-bold text-[#1B3A6B] uppercase tracking-wider px-4 mb-1">
                  {group.section}
                </p>
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block px-4 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-blue-50 hover:text-[#1B3A6B] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}

            <div className="border-t border-slate-100 pt-3 space-y-1">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4 pb-1">
                More
              </p>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-[#1B3A6B] text-white"
                      : "text-slate-700 hover:bg-blue-50 hover:text-[#1B3A6B]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <Link
                to="/appointment"
                className="block px-4 py-3 rounded-lg text-sm font-medium border border-[#1B3A6B] text-[#1B3A6B] text-center hover:bg-blue-50 transition-colors"
              >
                Book Appointment
              </Link>
              <Link
                to="/quote"
                className="block px-4 py-3 rounded-lg text-sm font-semibold bg-[#F59E0B] text-white text-center hover:bg-[#D97706] transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
