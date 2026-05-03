import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  color: string; // Tailwind bg color
  benefits: string[];
  priceIndicator: "low" | "medium" | "high" | "custom";
  popular?: boolean;
  compact?: boolean;
}

const priceLabels: Record<string, { label: string; color: string }> = {
  low: { label: "Affordable", color: "text-emerald-600 bg-emerald-50" },
  medium: { label: "Mid-range", color: "text-amber-600 bg-amber-50" },
  high: { label: "Premium", color: "text-purple-600 bg-purple-50" },
  custom: { label: "Custom Pricing", color: "text-blue-600 bg-blue-50" },
};

const ProductCard = ({
  id,
  name,
  tagline,
  icon,
  color,
  benefits,
  priceIndicator,
  popular,
  compact,
}: ProductCardProps) => {
  const price = priceLabels[priceIndicator];

  return (
    <div
      className={`group relative bg-white rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 overflow-hidden flex flex-col ${compact ? "p-5" : "p-6"}`}
    >
      {popular && (
        <div className="absolute top-4 right-4 bg-[#1B4FD8] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
          Popular
        </div>
      )}

      <div className="flex items-start gap-4 mb-4">
        <div
          className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center flex-shrink-0 text-2xl group-hover:scale-110 transition-transform`}
        >
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-slate-900 text-base leading-tight">
            {name}
          </h3>
          <p className="text-slate-500 text-sm mt-0.5">{tagline}</p>
        </div>
      </div>

      {!compact && (
        <ul className="space-y-1.5 mb-5 flex-1">
          {benefits.slice(0, 3).map((b) => (
            <li
              key={b}
              className="flex items-start gap-2 text-sm text-slate-600"
            >
              <svg
                className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0"
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
              {b}
            </li>
          ))}
        </ul>
      )}

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full ${price.color}`}
        >
          {price.label}
        </span>
        <Link
          to={`/product/${id}`}
          className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors group/link"
        >
          View Details
          <svg
            className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform"
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
      </div>
    </div>
  );
};

export default ProductCard;
