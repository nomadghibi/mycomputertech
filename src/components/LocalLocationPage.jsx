import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';
import { businessInfo } from '../data/businessInfo';

const relatedServiceLinksByCity = {
  'Indian Harbour Beach': [
    { label: 'Indian Harbour Beach computer repair', to: '/location/indian-harbour-beach-fl' },
    { label: 'Computer repair services', to: '/services' },
    { label: 'Virus removal in Melbourne FL', to: '/virus-removal-melbourne-fl' },
    { label: 'Printer setup in Melbourne FL', to: '/printer-setup-melbourne-fl' },
  ],
  Melbourne: [
    { label: 'Computer repair in Melbourne FL', to: '/computer-repair-melbourne-fl' },
    { label: 'Virus removal in Melbourne FL', to: '/virus-removal-melbourne-fl' },
    { label: 'Printer setup in Melbourne FL', to: '/printer-setup-melbourne-fl' },
    { label: 'Wi-Fi troubleshooting in Melbourne FL', to: '/wifi-troubleshooting-melbourne-fl' },
  ],
  PalmBay: [
    { label: 'Computer repair in Palm Bay FL', to: '/computer-repair-palm-bay-fl' },
    { label: 'Computer repair services', to: '/services' },
    { label: 'Contact My Computer Tech', to: '/contact' },
  ],
  SatelliteBeach: [
    { label: 'Computer repair in Satellite Beach FL', to: '/computer-repair-satellite-beach-fl' },
    { label: 'Computer repair services', to: '/services' },
    { label: 'Contact My Computer Tech', to: '/contact' },
  ],
};

const LocalLocationPage = ({ page }) => {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.h1,
    serviceType: page.seoTitle.replace(' | My Computer Tech', ''),
    provider: {
      '@type': 'LocalBusiness',
      name: businessInfo.name,
      url: businessInfo.siteUrl,
      telephone: businessInfo.phone,
    },
    areaServed: [{ '@type': 'City', name: page.city }],
    description: page.description,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: businessInfo.siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${businessInfo.siteUrl}/service-areas` },
      { '@type': 'ListItem', position: 3, name: page.h1, item: `${businessInfo.siteUrl}${page.path}` },
    ],
  };

  const relatedLinks =
    relatedServiceLinksByCity[page.city.replace(/\s+/g, '')] ||
    relatedServiceLinksByCity[page.city] ||
    [
      { label: 'Computer repair services', to: '/services' },
      { label: 'Service areas', to: '/service-areas' },
      { label: 'Contact My Computer Tech', to: '/contact' },
    ];

  return (
    <>
      <Helmet>
        <title>{page.seoTitle}</title>
        <meta name="description" content={page.description} />
        <meta name="keywords" content={page.keywords} />
        <link rel="canonical" href={`${businessInfo.siteUrl}${page.path}`} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <section className="relative isolate overflow-hidden bg-slate-950 py-12 text-white sm:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.28),transparent_35%),linear-gradient(135deg,#082f49_0%,#0f172a_58%,#134e4a_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-[repeating-linear-gradient(170deg,rgba(125,211,252,0.12)_0px,rgba(125,211,252,0.12)_2px,transparent_2px,transparent_22px)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div>
            <p className="inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
              {page.eyebrow}
            </p>
            <nav aria-label="Breadcrumb" className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100/80">
              <Link to="/" className="transition hover:text-white">Home</Link>
              <span>/</span>
              <Link to="/service-areas" className="transition hover:text-white">Service Areas</Link>
              <span>/</span>
              <span className="text-white">{page.h1}</span>
            </nav>
            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              {page.h1}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              {page.heroSummary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={businessInfo.phoneHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 sm:w-auto"
              >
                <FaPhoneAlt className="h-3.5 w-3.5" />
                Call Now
              </a>
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15 sm:w-auto"
              >
                Request Service
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-white/15 bg-white p-6 text-slate-900 shadow-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">Location Snapshot</p>
            <h2 className="mt-3 text-xl font-bold text-slate-950 sm:text-2xl">Local support for {page.city}</h2>
            <div className="mt-5 space-y-3">
              {page.services.map((service) => (
                <div key={service} className="flex items-center gap-3 rounded-md bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">
                  <FaCheckCircle className="h-4 w-4 text-cyan-700" />
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Overview</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {page.city} customers should know what this page is for
            </h2>
            {page.intro.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">What this page covers</p>
            <div className="mt-5 space-y-4">
              {page.sections.map((section) => (
                <div key={section.heading} className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-950">{section.heading}</h3>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-3 text-sm leading-6 text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">FAQ</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Common questions from local customers
            </h2>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {page.faq.map((item) => (
              <details key={item.question} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer list-none text-lg font-bold text-slate-950">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Related Services
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              More local pages that match this service area
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {relatedLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-blue-800"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-700 to-cyan-700 py-14 text-white sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">Next step</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-4xl">{page.cta}</h2>
            <p className="mt-4 max-w-3xl text-blue-50">
              Use the contact page or call directly if you want to discuss the problem before setting up service.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={businessInfo.phoneHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50 sm:w-auto"
            >
              <FaPhoneAlt className="h-3.5 w-3.5" />
              Call Now
            </a>
            <Link
              to="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Request Service
              <FaArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocalLocationPage;
