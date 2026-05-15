import { useState } from "react";
import { Link } from "react-router-dom";

// ─── Types ────────────────────────────────────────────────────────────────────
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  categories: string[];
  author: string;
  date: string;
  image: string;
  slug: string;
}

// ─── Static data (swap with API fetch / CMS) ─────────────────────────────────
const ALL_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Your HR Policy Won't Save You in Court. Here's What Will",
    excerpt:
      "Let's start with a scenario. It's a Tuesday morning. Your Finance Manager walks in, sits down, and tells you there's a lawsuit heading your way…",
    categories: ["Employee Benefits", "Specialty Insurance"],
    author: "Gopay Insurance",
    date: "April 14, 2026",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80",
    slug: "hr-policy-wont-save-you",
  },
  {
    id: 2,
    title: "What Happens When an Employee Gets Hurt on the Weekend?",
    excerpt:
      "Picture this. It is Saturday afternoon. One of your key employees is involved in a road accident while running a company errand…",
    categories: ["Specialty Insurance"],
    author: "Gopay Insurance",
    date: "April 12, 2026",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80",
    slug: "employee-hurt-on-weekend",
  },
  {
    id: 3,
    title: "Why Kenyan Employers are Losing Millions in 2026",
    excerpt:
      "Many Kenyan employers believe that purchasing mandatory WIBA insurance fully covers their legal obligations. It doesn't — and the gap is costly…",
    categories: ["Employee Benefits"],
    author: "Gopay Insurance",
    date: "March 19, 2026",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80",
    slug: "kenyan-employers-losing-millions-2026",
  },
  {
    id: 4,
    title: "Why Every Kenyan Employer Needs WIBA Plus in 2026",
    excerpt:
      "In Kenya's fast-paced economy, employers face constant pressure: tight margins, talent wars, and strict compliance requirements that keep shifting…",
    categories: ["Employee Benefits"],
    author: "Gopay Insurance",
    date: "March 19, 2026",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=700&q=80",
    slug: "wiba-plus-2026",
  },
  {
    id: 5,
    title: "How the US-Iran Conflict Is Impacting Insurance Costs in Kenya",
    excerpt:
      "Global geopolitical tensions rarely stay contained. As conflict escalates, Kenyan businesses are beginning to feel the ripple effects on premiums and coverage…",
    categories: ["Industry News"],
    author: "Gopay Insurance",
    date: "March 5, 2026",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&q=80",
    slug: "us-iran-impact-kenya-insurance",
  },
  {
    id: 6,
    title:
      "Group Medical Cover vs. Individual Plans: What Kenyan SMEs Should Know",
    excerpt:
      "Choosing between group and individual medical cover is one of the most consequential HR decisions a Kenyan SME owner can make. Here's the breakdown…",
    categories: ["Employee Benefits"],
    author: "Gopay Insurance",
    date: "February 28, 2026",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80",
    slug: "group-vs-individual-medical-cover",
  },
];

const RECENT_POSTS = ALL_POSTS.slice(0, 5);
const POSTS_PER_PAGE = 4;

// ─── Blog Card ────────────────────────────────────────────────────────────────
function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="overflow-hidden h-52">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-3">
          {post.categories.map((cat, i) => (
            <span
              key={i}
              className="text-red-500 text-[0.67rem] font-bold tracking-widest uppercase"
            >
              {i > 0 && <span className="mr-2 text-gray-300">·</span>}
              {cat}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="font-serif text-[#1c1c1c] text-lg font-semibold leading-snug mb-3">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-[#666] text-sm leading-relaxed flex-1 mb-4">
          {post.excerpt}
        </p>

        {/* Meta */}
        <p className="text-[#aaa] text-xs mb-5 tracking-wide">
          {post.author} &nbsp;·&nbsp; {post.date}
        </p>

        {/* CTA */}
        <Link
          to={`/blog/${post.slug}`}
          className="self-start bg-red-500 hover:bg-[#5a9d32] text-white text-[0.68rem] font-bold tracking-[2px] uppercase px-6 py-3 rounded transition-colors duration-200"
        >
          Read Article
        </Link>
      </div>
    </article>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Blog() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(ALL_POSTS.length / POSTS_PER_PAGE);
  const paginated = ALL_POSTS.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE,
  );

  return (
    <div className="bg-[#f7f7f5] min-h-screen font-['Josefin_Sans',sans-serif]">
      {/* ── Page Hero ── */}
      <header className="bg-[#1c1c1c] py-16 px-6 text-center">
        <h1 className="font-serif text-white text-4xl md:text-5xl font-normal tracking-wide mb-3">
          Gopay Blog
        </h1>
        <p className="text-white/50 text-xs tracking-[3px] uppercase">
          Insurance insights, guides &amp; industry news
        </p>
      </header>

      {/* ── Layout ── */}
      <div className="max-w-6xl mx-auto px-5 py-14 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start">
        {/* ── Main column ── */}
        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {paginated.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-12">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="w-10 h-10 flex items-center justify-center rounded border border-[#e4e4e0] bg-white text-sm text-[#666] hover:bg-[#6db33f] hover:border-[#6db33f] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              >
                ←
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`w-10 h-10 flex items-center justify-center rounded border text-sm font-semibold transition-all duration-200 ${
                    page === n
                      ? "bg-red-500 border-red-500 text-white"
                      : "bg-white border-[#e4e4e0] text-[#666] hover:bg-red-500 hover:border-red-600 hover:text-white"
                  }`}
                >
                  {n}
                </button>
              ))}

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded border border-[#e4e4e0] bg-white text-sm text-[#666] hover:bg-[#6db33f] hover:border-[#6db33f] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              >
                →
              </button>
            </div>
          )}
        </main>

        {/* ── Sidebar ── */}
        <aside className="flex flex-col gap-7">
          {/* Get a Quote */}
          <div className="bg-white rounded-lg p-7 shadow-sm">
            <h3 className="text-[0.68rem] font-bold tracking-[2.5px] uppercase text-[#aaa] border-b border-[#e4e4e0] pb-3 mb-5">
              Get a Quote
            </h3>
            <p className="text-[#666] text-sm leading-relaxed mb-4">
              When it comes to insurance, you need more than just coverage. You
              need a trusted advisor. Our team will custom-design a program
              tailored to your specific needs.
            </p>
            <p className="text-sm text-[#666]">
              Get a quote today.{" "}
              <Link
                to="/get-quote"
                className="text-red-500 font-bold hover:underline"
              >
                Click here.
              </Link>
            </p>
          </div>

          {/* Recent Posts */}
          <div className="bg-white rounded-lg p-7 shadow-sm">
            <h3 className="text-[0.68rem] font-bold tracking-[2.5px] uppercase text-[#aaa] border-b border-[#e4e4e0] pb-3 mb-4">
              Recent Posts
            </h3>
            <ul className="divide-y divide-[#f0f0ee]">
              {RECENT_POSTS.map((post) => (
                <li key={post.id} className="py-3">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="font-serif text-[#1c1c1c] text-sm leading-snug hover:text-[#6db33f] transition-colors duration-200 block"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
