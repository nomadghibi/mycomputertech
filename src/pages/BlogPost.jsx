import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt, FaTag } from 'react-icons/fa';
import { blogPosts } from '../data/blogPosts';
import { businessInfo } from '../data/businessInfo';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-950">Article not found</h1>
        <p className="mt-4 text-slate-600">The article you requested is not available.</p>
        <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-800">
          <FaArrowLeft className="h-3 w-3" />
          Back to blog
        </Link>
      </section>
    );
  }

  const canonicalUrl = `${businessInfo.siteUrl}/blog/${post.slug}`;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    mainEntityOfPage: canonicalUrl,
    url: canonicalUrl,
    author: {
      '@type': 'Organization',
      name: businessInfo.name,
    },
    publisher: {
      '@type': 'Organization',
      name: businessInfo.name,
    },
    keywords: post.keywords,
    articleSection: post.category,
    about: businessInfo.primaryArea,
  };

  const relatedPosts = blogPosts
    .filter((entry) => entry.slug !== post.slug)
    .sort((a, b) => {
      if (a.category === post.category && b.category !== post.category) return -1;
      if (a.category !== post.category && b.category === post.category) return 1;
      return a.title.localeCompare(b.title);
    })
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{`${post.title} | ${businessInfo.name}`}</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content={businessInfo.name} />
        <meta property="og:image" content={`${businessInfo.siteUrl}/hero-home-1024.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <section className="bg-white py-14 sm:py-16">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-800 hover:text-blue-950">
            <FaArrowLeft className="h-3 w-3" />
            Back to blog
          </Link>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
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
          <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{post.excerpt}</p>

          <div className="mt-8 space-y-8">
            {post.content.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold text-slate-950">{section.heading}</h2>
                <p className="mt-3 text-base leading-8 text-slate-700">{section.body}</p>
              </section>
            ))}
          </div>

          <section className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-slate-950">Need beachside computer repair now?</h2>
            <p className="mt-3 text-slate-600">
              Contact {businessInfo.name} for practical local support in Indian Harbour Beach and
              nearby Space Coast beachside communities.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={businessInfo.phoneHref}
                className="inline-flex items-center justify-center rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Call {businessInfo.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-blue-300 hover:bg-blue-50"
              >
                Request Service
              </Link>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-950">Related beachside repair articles</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {relatedPosts.map((related) => (
                <article key={related.slug} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-700">{related.category}</p>
                  <h3 className="mt-2 text-base font-bold text-slate-950">{related.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{related.excerpt}</p>
                  <Link
                    to={`/blog/${related.slug}`}
                    className="mt-3 inline-flex text-sm font-semibold text-blue-800 hover:text-blue-950"
                  >
                    Read related article
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </article>
      </section>
    </>
  );
};

export default BlogPost;
