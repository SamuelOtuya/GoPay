import { Link } from "react-router-dom";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumbs?: Breadcrumb[];
  badge?: string;
  gradient?: string; // Tailwind gradient classes
  ctaLabel?: string;
  ctaHref?: string;
}

const PageHero = ({
  title,
  subtitle,
  breadcrumbs,
  badge,
  gradient = "from-[#0A1628] via-[#0F2D6B] to-[#1B4FD8]",
  ctaLabel,
  ctaHref,
}: PageHeroProps) => {
  return (
    <section
      className={`relative bg-gradient-to-br ${gradient} pt-28 pb-20 overflow-hidden`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/[0.03] rounded-full -translate-x-1/2 translate-y-1/2" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTYgNnY2aDZ2LTZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 mb-6 text-sm text-white/50">
            <Link to="/" className="hover:text-white/80 transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <svg
                  className="w-3.5 h-3.5"
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
                {crumb.href ? (
                  <Link
                    to={crumb.href}
                    className="hover:text-white/80 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {badge && (
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
            <span className="text-blue-100 text-xs font-medium tracking-wide uppercase">
              {badge}
            </span>
          </div>
        )}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight max-w-3xl">
          {title}
        </h1>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
          {subtitle}
        </p>

        {ctaLabel && ctaHref && (
          <Link
            to={ctaHref}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-xl hover:-translate-y-0.5"
          >
            {ctaLabel}
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
          </Link>
        )}
      </div>
    </section>
  );
};

export default PageHero;
