import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt, FaTag } from 'react-icons/fa';
import { blogPosts } from '../data/blogPosts';
import { businessInfo } from '../data/businessInfo';
import { localServicePages } from '../data/localServicePages';

const relatedServiceLinksByCategory = {
  'Repair & Cleanup': [
    { label: 'Slow computer cleanup in Melbourne FL', to: localServicePages.slowComputerMelbourne.path },
    { label: 'Laptop repair in Melbourne FL', to: localServicePages.laptopRepairMelbourne.path },
    { label: 'Virus removal in Melbourne FL', to: localServicePages.virusRemovalMelbourne.path },
    { label: 'Computer repair in Melbourne FL', to: localServicePages.melbourne.path },
  ],
  'Office Setup': [
    { label: 'Printer setup in Melbourne FL', to: localServicePages.printerSetupMelbourne.path },
    { label: 'Wi-Fi troubleshooting in Melbourne FL', to: localServicePages.wifiMelbourne.path },
    { label: 'Scanner setup beachside', to: '/blog/scanner-setup-beachside' },
    { label: 'Email and Microsoft 365 help', to: '/blog/microsoft-365-email-help-melbourne-fl' },
  ],
  'Business IT': [
    { label: 'Business IT support in Melbourne FL', to: localServicePages.businessITMelbourne.path },
    { label: 'Remote computer support in Florida', to: localServicePages.remoteSupportFlorida.path },
    { label: 'Small business IT support in Indian Harbour Beach', to: '/blog/small-business-it-support-indian-harbour-beach' },
    { label: 'Office computer repair beachside', to: '/blog/office-computer-repair-beachside' },
  ],
  'Home Network': [
    { label: 'Wi-Fi troubleshooting in Melbourne FL', to: localServicePages.wifiMelbourne.path },
    { label: 'Wi-Fi setup in Indian Harbour Beach', to: '/blog/wifi-setup-indian-harbour-beach-homes' },
    { label: 'Service areas', to: '/service-areas' },
    { label: 'Contact My Computer Tech', to: '/contact' },
  ],
  Recovery: [
    { label: 'Data recovery in Melbourne FL', to: localServicePages.dataRecoveryMelbourne.path },
    { label: 'Data backup beachside', to: '/blog/data-backup-beachside-how-to-avoid-losing-files' },
    { label: 'Backup recovery after hard drive failure', to: '/blog/backup-recovery-after-hard-drive-failure' },
    { label: 'Refurbished computers in Brevard County', to: localServicePages.refurbishedBrevard.path },
  ],
  Security: [
    { label: 'Virus removal in Melbourne FL', to: localServicePages.virusRemovalMelbourne.path },
    { label: 'Browser hijack removal beachside', to: '/blog/browser-hijack-removal-beachside' },
    { label: 'Virus symptoms beachside', to: '/blog/virus-symptoms-beachside-what-to-watch-for' },
    { label: 'Contact My Computer Tech', to: '/contact' },
  ],
  Setup: [
    { label: 'Windows 11 upgrade help', to: localServicePages.windows11Upgrade.path },
    { label: 'Tablet setup beachside', to: '/blog/tablet-setup-beachside' },
    { label: 'New computer setup and transfer help', to: '/blog/new-computer-setup-refurbished-laptops-indian-harbour-beach' },
    { label: 'Printer setup in Melbourne FL', to: localServicePages.printerSetupMelbourne.path },
  ],
  'Support Options': [
    { label: 'Remote computer support in Florida', to: localServicePages.remoteSupportFlorida.path },
    { label: 'Same-day computer repair beachside', to: '/blog/same-day-computer-repair-beachside' },
    { label: 'Onsite computer repair beachside', to: '/blog/onsite-computer-repair-beachside-vs-remote-support' },
    { label: 'Service areas', to: '/service-areas' },
  ],
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((entry) => entry.slug === slug);
  const siteUrl = (import.meta.env.VITE_SITE_URL || businessInfo.siteUrl).replace(/\/+$/, '');

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

  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;
  const ogImageUrl = `${siteUrl}/hero-home-1024.jpg`;
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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: canonicalUrl },
    ],
  };

  const relatedPosts = blogPosts
    .filter((entry) => entry.slug !== post.slug)
    .sort((a, b) => {
      if (a.category === post.category && b.category !== post.category) return -1;
      if (a.category !== post.category && b.category === post.category) return 1;
      return a.title.localeCompare(b.title);
    })
    .slice(0, 3);
  const relatedServices = relatedServiceLinksByCategory[post.category] || [
    { label: 'Computer repair services', to: '/services' },
    { label: 'Service areas', to: '/service-areas' },
    { label: 'Contact My Computer Tech', to: '/contact' },
  ];

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
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={ogImageUrl} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <section className="bg-white py-14 sm:py-16">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-800 hover:text-blue-950">
            <FaArrowLeft className="h-3 w-3" />
            Back to blog
          </Link>
          <nav aria-label="Breadcrumb" className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            <Link to="/" className="transition hover:text-blue-800">Home</Link>
            <span>/</span>
            <Link to="/blog" className="transition hover:text-blue-800">Blog</Link>
            <span>/</span>
            <span className="text-slate-700">{post.title}</span>
          </nav>
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
            <h2 className="text-2xl font-bold text-slate-950">Related local services</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {relatedServices.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:border-cyan-300 hover:bg-cyan-50"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-700">
                    Local service
                  </p>
                  <h3 className="mt-2 text-base font-bold text-slate-950">{item.label}</h3>
                </Link>
              ))}
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
