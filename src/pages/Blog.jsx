import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCalendarAlt, FaTag } from 'react-icons/fa';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = useMemo(
    () => ['All', ...new Set(blogPosts.map((post) => post.category))],
    []
  );
  const filteredPosts = useMemo(
    () =>
      activeCategory === 'All'
        ? blogPosts
        : blogPosts.filter((post) => post.category === activeCategory),
    [activeCategory]
  );

  return (
    <>
    <section className="relative isolate overflow-hidden bg-slate-950 py-12 text-white sm:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.28),transparent_35%),linear-gradient(135deg,#082f49_0%,#0f172a_58%,#134e4a_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-[repeating-linear-gradient(170deg,rgba(125,211,252,0.12)_0px,rgba(125,211,252,0.12)_2px,transparent_2px,transparent_22px)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
          Beachside Tech Blog
        </p>
        <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
          Beachside computer repair guides for Indian Harbour Beach and Space Coast communities
        </h1>
        <p className="mt-5 max-w-4xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
          Local articles focused on computer repair, virus removal, Wi-Fi setup, printer support,
          and small business IT support with practical recommendations for beachside customers.
        </p>
      </div>
    </section>

    <section className="bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-md border px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                activeCategory === category
                  ? 'border-blue-700 bg-blue-700 text-white'
                  : 'border-slate-300 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <article key={post.slug} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <FaTag className="h-3 w-3 text-cyan-700" />
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-2">
                  <FaCalendarAlt className="h-3 w-3 text-cyan-700" />
                  {post.publishedDate}
                </span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="mt-4 text-xl font-bold text-slate-950">{post.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-800 hover:text-blue-950"
              >
                Read article
                <FaArrowRight className="h-3 w-3" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
  );
};

export default Blog;
