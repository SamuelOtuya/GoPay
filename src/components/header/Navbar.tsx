import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import gopayLogo from "../../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { label: "Personal", path: "/personal" },
    { label: "Business", path: "/business" },
    { label: "By Industry", path: "/industry" },
    { label: "Risk Guide", path: "/risk" },
    { label: "About", path: "/about" },
  ];

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
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1B3A6B] to-[#2563EB] flex items-center justify-center shadow-lg group-hover:shadow-blue-200 transition-shadow">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M12 2L3 7v10l9 5 9-5V7L12 2zm0 2.18L19 8.5v7L12 19.32 5 15.5v-7l7-4.32z" />
                <path d="M12 6L7 9v6l5 3 5-3V9l-5-3z" opacity="0.5" />
              </svg>
            </div>
            <div>
              <div
                className={`font-bold text-lg leading-tight tracking-tight transition-colors ${isScrolled ? "text-[#1B3A6B]" : "text-white"}`}
              >
                GOPAY
              </div>
              <div
                className={`text-xs font-medium leading-none tracking-widest uppercase transition-colors ${isScrolled ? "text-slate-400" : "text-blue-200"}`}
              >
                Insurance
              </div>
            </div>
          </Link>

          {/* <Link to="/" className="flex items-center group">
            <img
              src={gopayLogo}
              alt="GoPay Insurance Logo"
              className="w-20 h-18" // make it bigger
            />
            
          </Link> */}

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
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
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
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
