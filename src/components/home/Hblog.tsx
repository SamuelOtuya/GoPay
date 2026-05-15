import { useState, useRef } from "react";
import { Link } from "react-router-dom";

// ─── Types ────────────────────────────────────────────────────────────────────
interface BlogPost {
  id: number;
  title: string;
  categories: string[];
  image: string;
  slug: string;
}

// ─── Static data (replace with API / CMS fetch) ───────────────────────────────
const POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Your HR Policy Won't Save You in Court. Here's What Will",
    categories: ["Employee Benefits", "Specialty Insurance"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    slug: "hr-policy-wont-save-you",
  },
  {
    id: 2,
    title: "What Happens When an Employee Gets Hurt on the Weekend?",
    categories: ["Specialty Insurance"],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    slug: "employee-hurt-on-weekend",
  },
  {
    id: 3,
    title: "Why Kenyan Employers are Losing Millions in 2026",
    categories: ["Employee Benefits"],
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
    slug: "kenyan-employers-losing-millions-2026",
  },
  {
    id: 4,
    title: "Why Every Kenyan Employer Needs WIBA Plus in 2026",
    categories: ["Employee Benefits"],
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    slug: "wiba-plus-2026",
  },
];

// ─── Card component ───────────────────────────────────────────────────────────
function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article
      className="relative flex-shrink-0 w-[calc(33.333%-14px)] min-w-[calc(33.333%-14px)] rounded-xl overflow-hidden h-[480px] group cursor-pointer shadow-lg hover:-translate-y-1.5 transition-transform duration-300"
      style={{ minWidth: "clamp(280px, calc(33.333% - 14px), 420px)" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${post.image})` }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/50 to-black/80" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        {/* Categories */}
        <div className="flex flex-wrap gap-1 mb-3">
          {post.categories.map((cat, i) => (
            <span
              key={i}
              className="text-white/80 text-[0.68rem] tracking-widest uppercase font-semibold"
            >
              {i > 0 && <span className="mx-1.5 text-white/40">·</span>}
              {cat}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-serif text-white text-xl leading-snug font-semibold mb-5">
          {post.title}
        </h3>

        {/* CTA Button */}
        <Link
          to={`/blog/${post.slug}`}
          className="inline-block bg-red-500 hover:bg-red-600 text-white text-[0.68rem] font-bold tracking-[2.5px] uppercase px-7 py-3 rounded transition-colors duration-200"
        >
          Read Article
        </Link>
      </div>
    </article>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function HBlog() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const visibleCount = () => {
    const w = window.innerWidth;
    if (w < 560) return 1;
    if (w < 900) return 2;
    return 3;
  };

  const maxIndex = () => Math.max(0, POSTS.length - visibleCount());

  const prev = () => setCurrent((c) => (c <= 0 ? maxIndex() : c - 1));
  const next = () => setCurrent((c) => (c >= maxIndex() ? 0 : c + 1));

  return (
    <section className="bg-white py-2 px-6 sm:px-10 lg:px-40 overflow-hidden font-['Josefin_Sans',sans-serif]">
      <div>
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="font-serif text-[#2c2c2c] text-4xl md:text-5xl font-light tracking-wide mb-3">
            Latest Blogs
          </h2>
          <p className="text-[#888] text-xs tracking-[3px] uppercase">
            Recent articles from the Gopay Insurance blog
          </p>
        </div>

        {/* Track */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-5 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${current * (100 / visibleCount())}%)`,
            }}
          >
            {POSTS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-4 mt-5">
          <button
            onClick={prev}
            aria-label="Previous"
            className="w-11 h-11 rounded-full border-2 border-gray-300 bg-white text-gray-500 flex items-center justify-center hover:border-red-500 hover:bg-red-500 hover:text-white transition-all duration-200 text-base"
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="w-11 h-11 rounded-full border-2 border-gray-300 bg-white text-gray-500 flex items-center justify-center hover:border-red-500 hover:bg-red-500 hover:text-white transition-all duration-200 text-base"
          >
            →
          </button>
        </div>

        {/* View all */}
        <div className="text-center mt-5">
          <Link
            to="/blog"
            className="text-red-500 text-xs font-bold tracking-[2.5px] uppercase border-b-2 border-red-500 pb-0.5 hover:text-red-600 hover:border-red-600 transition-colors duration-200"
          >
            View All Articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
