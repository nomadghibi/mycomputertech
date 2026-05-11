import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceAreas from './pages/ServiceAreas';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { businessInfo } from './data/businessInfo';
import { blogPosts } from './data/blogPosts';
import './index.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const pageMeta = {
  '/': {
    title: 'My Computer Tech | Beachside Computer Repair & IT Support',
    description:
      'My Computer Tech provides beachside computer repair, laptop repair, Wi-Fi help, printer setup, virus removal, and small business IT support for Indian Harbour Beach and nearby Space Coast communities.',
    keywords:
      'computer repairs, computer repair Indian Harbour Beach, beachside computer repair, beachside computer repair Space Coast, laptop repair Indian Harbour Beach, PC repair Indian Harbour Beach, onsite computer repair beachside, virus removal Satellite Beach, printer not working beachside, slow computer repair',
  },
  '/services': {
    title: 'Beachside Computer Repair Services | My Computer Tech',
    description:
      'Computer repair, laptop repair, virus removal, printer setup, Wi-Fi setup, data transfer, Microsoft 365 help, and onsite beachside service from My Computer Tech.',
    keywords:
      'computer repairs beachside, beachside computer repair, laptop and PC repair beachside, desktop computer repair beachside, printer setup beachside, my printer not working, Wi-Fi setup Indian Harbour Beach, slow computer cleanup beachside, data backup and transfer beachside, small business IT support Indian Harbour Beach',
  },
  '/service-areas': {
    title: 'Service Areas | Beachside Computer Repair Space Coast',
    description:
      'My Computer Tech serves Indian Harbour Beach, Satellite Beach, Indialantic, Melbourne Beach, Cocoa Beach, Cape Canaveral, and nearby beachside Space Coast communities.',
    keywords:
      'computer repairs near me, best computer repair in beachside, beachside computer repair near me, computer repairs Space Coast beachside, computer repair Satellite Beach, computer repair Indialantic, computer repair Melbourne Beach, computer repair Cocoa Beach, computer repair Cape Canaveral',
  },
  '/about': {
    title: 'About My Computer Tech | Local Beachside IT Support',
    description:
      'Learn about My Computer Tech, a locally known beachside computer repair and IT support business serving from the same Indian Harbour Beach location since 2010.',
    keywords:
      'local computer repair Indian Harbour Beach, Space Coast IT support, beachside technology support, trusted local computer technician',
  },
  '/contact': {
    title: 'Contact My Computer Tech | Beachside Computer Repair',
    description:
      'Contact My Computer Tech for beachside onsite computer repair, printer setup, Wi-Fi help, virus removal, laptop repair, and practical local IT support.',
    keywords:
      'contact computer repair Indian Harbour Beach, computer repairs near me, onsite tech support beachside, request computer service Space Coast, call local computer repair, printer not working help',
  },
  '/blog': {
    title: 'Beachside Computer Repair Blog | My Computer Tech',
    description:
      'Beachside computer repair blog with local Space Coast guides on laptop repair, virus removal, Wi-Fi setup, printer help, and small business IT support.',
    keywords:
      'beachside computer repair blog, computer repairs tips, Indian Harbour Beach tech tips, my printer not working, why is my printer offline, how to fix a slow computer, Wi-Fi keeps disconnecting, laptop not charging repair, virus removal guide Satellite Beach',
  },
};

const blogMeta = Object.fromEntries(
  blogPosts.map((post) => [
    `/blog/${post.slug}`,
    {
      title: `${post.title} | ${businessInfo.name}`,
      description: post.description,
      keywords: post.keywords,
    },
  ])
);

const areaServed = businessInfo.serviceAreas.map((area) => ({
  '@type': 'City',
  name: area,
}));

const baseLocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: businessInfo.name,
  url: businessInfo.siteUrl,
  image: `${businessInfo.siteUrl}/hero-home-1024.jpg`,
  telephone: businessInfo.phone,
  description: businessInfo.businessProfileDescription,
  priceRange: '$$',
  ...(businessInfo.email.includes('ADD') ? {} : { email: businessInfo.email }),
  areaServed,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '296 E Eau Gallie Blvd',
    addressLocality: 'Indian Harbour Beach',
    addressRegion: 'FL',
    postalCode: '32937',
    addressCountry: 'US',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: businessInfo.googleRating,
    reviewCount: businessInfo.googleReviewCount,
  },
  openingHoursSpecification: businessInfo.hours
    .filter((entry) => entry.time !== 'Closed')
    .map((entry) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: entry.day,
      opens: '09:30',
      closes: '15:00',
    })),
  knowsAbout: [
    'Computer repair',
    'Computer repairs',
    'Beachside computer repair',
    'Laptop repair',
    'Virus and malware removal',
    'Wi-Fi and network setup',
    'Printer setup',
    'Printer not working troubleshooting',
    'Small business IT support',
    'Onsite computer repair beachside',
  ],
};

const baseWebsiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: businessInfo.name,
  url: businessInfo.siteUrl,
  inLanguage: 'en-US',
};

const NotFound = () => (
  <section className="mx-auto max-w-2xl px-6 py-20 text-center">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">404</p>
    <h1 className="mt-3 text-4xl font-bold text-slate-950">Page not found</h1>
    <p className="mt-4 text-lg text-slate-600">
      The page you requested is not part of this My Computer Tech website.
    </p>
    <Link
      to="/"
      className="mt-8 inline-flex rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
    >
      Back to Home
    </Link>
  </section>
);

const App = () => {
  const location = useLocation();
  const siteUrl = (import.meta.env.VITE_SITE_URL || businessInfo.siteUrl).replace(/\/+$/, '');
  const normalizedPath = location.pathname === '/' ? '/' : location.pathname.replace(/\/+$/, '');
  const meta = pageMeta[normalizedPath] || blogMeta[normalizedPath] || pageMeta['/'];
  const canonicalUrl =
    normalizedPath === '/'
      ? `${siteUrl}/`
      : `${siteUrl}${normalizedPath}`;
  const ogImageUrl = `${siteUrl}/hero-home-1024.jpg`;
  const localBusinessSchema = {
    ...baseLocalBusinessSchema,
    url: siteUrl,
    image: ogImageUrl,
  };
  const websiteSchema = {
    ...baseWebsiteSchema,
    url: siteUrl,
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content={businessInfo.name} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={ogImageUrl} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="geo.region" content="US-FL" />
        <meta name="geo.placename" content="Indian Harbour Beach" />
        <meta name="geo.position" content="28.1483;-80.5887" />
        <meta name="ICBM" content="28.1483,-80.5887" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      </Helmet>
      <div className="flex min-h-screen flex-col bg-white text-slate-900">
        <ScrollToTop />
        <NavMenu />
        <main id="main-content" tabIndex={-1} className="flex-grow pt-20">
          <ErrorBoundary key={normalizedPath}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/service-areas" element={<ServiceAreas />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;
