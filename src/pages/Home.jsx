import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  FaBriefcase,
  FaClock,
  FaDesktop,
  FaHome,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
  FaTools,
  FaWifi,
} from 'react-icons/fa';
import ReferralSection from '../components/ReferralSection';
import SectionHeader from '../components/SectionHeader';
import ServiceAreaSection from '../components/ServiceAreaSection';
import ServiceCard from '../components/ServiceCard';
import { businessInfo, services } from '../data/businessInfo';
import './Home.css';

const featuredServices = services.slice(0, 6);

const popularLocalPages = [
  {
    title: 'Computer Repair in Indian Harbour Beach FL',
    description: 'Primary local shop page for beachside computer repair and IT support.',
    to: '/location/indian-harbour-beach-fl',
  },
  {
    title: 'Computer Repair in Melbourne FL',
    description: 'Practical repair and cleanup support for nearby mainland customers.',
    to: '/computer-repair-melbourne-fl',
  },
  {
    title: 'Computer Repair in Palm Bay FL',
    description: 'Repair-first support for Palm Bay homes and small businesses.',
    to: '/computer-repair-palm-bay-fl',
  },
  {
    title: 'Virus Removal in Melbourne FL',
    description: 'Cleanup for malware symptoms, popups, and browser hijacks.',
    to: '/virus-removal-melbourne-fl',
  },
  {
    title: 'Wi-Fi Troubleshooting in Melbourne FL',
    description: 'Help with weak signals, disconnects, printers, and network setup.',
    to: '/wifi-troubleshooting-melbourne-fl',
  },
  {
    title: 'Service Areas',
    description: 'Beachside coverage across Indian Harbour Beach and nearby communities.',
    to: '/service-areas',
  },
];

const trustItems = [
  {
    icon: FaClock,
    title: 'Same location since 2010',
    text: 'Serving the Space Coast from the same local shop for over a decade.',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Beachside local',
    text: 'Focused on Indian Harbour Beach first, with nearby beachside communities served too.',
  },
  {
    icon: FaHome,
    title: 'Home user friendly',
    text: 'Practical support for homeowners, seniors, and everyday computer users.',
  },
  {
    icon: FaBriefcase,
    title: 'Small business ready',
    text: 'Support for computers, Wi-Fi, printers, email, and daily operations.',
  },
];

const Home = () => {
  const [showRefurbishedCta, setShowRefurbishedCta] = useState(false);
  const homeFaqs = [
    {
      question: 'Do you offer computer repair in Indian Harbour Beach FL?',
      answer:
        'Yes. My Computer Tech serves Indian Harbour Beach and nearby Space Coast communities with practical computer repair and IT support.',
    },
    {
      question: 'Can you help with laptops, Wi-Fi, and printers?',
      answer:
        'Yes. Laptop repair, Wi-Fi troubleshooting, printer setup, virus removal, and software cleanup are all common requests.',
    },
    {
      question: 'Do you work with seniors and small businesses?',
      answer:
        'Yes. The service style is direct, patient, and practical for homeowners, seniors, and small businesses that need dependable support.',
    },
    {
      question: 'Do you offer remote support?',
      answer:
        'Yes. Remote support is available for many software, account, and troubleshooting issues when an onsite visit is not needed.',
    },
  ];

  useEffect(() => {
    const openTimer = setTimeout(() => setShowRefurbishedCta(true), 900);
    const closeTimer = setTimeout(() => setShowRefurbishedCta(false), 7200);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed right-0 top-28 z-40 w-[18rem] max-w-[calc(100vw-1rem)] p-3 transition-transform duration-500 sm:top-32 sm:w-[20rem] ${
          showRefurbishedCta ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="rounded-lg border border-cyan-200 bg-white p-4 shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">Now Available</p>
          <h2 className="mt-2 text-lg font-bold text-slate-950">Refurbished computers for sale</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Quality refurbished desktops and laptops, ready for home and small business use.
          </p>
          <Link
            to="/services"
            className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            View Service Details
          </Link>
        </div>
      </div>

    <section className="relative isolate overflow-hidden bg-slate-950 py-16 text-white sm:py-24">
      <div className="hero-gradient-motion absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.35),transparent_36%),linear-gradient(135deg,#082f49_0%,#0f172a_52%,#134e4a_100%)]" />
      <div className="hero-wave-motion absolute inset-x-0 bottom-0 -z-10 h-56 bg-[repeating-linear-gradient(170deg,rgba(125,211,252,0.14)_0px,rgba(125,211,252,0.14)_2px,transparent_2px,transparent_22px)]" />
      <div className="hero-float-slow absolute -right-28 top-24 -z-10 h-80 w-80 rounded-full border border-cyan-300/20" />
      <div className="hero-float-fast absolute -left-28 bottom-10 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div>
          <p className="fade-up inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100 shadow-sm backdrop-blur">
            <FaShieldAlt className="h-3.5 w-3.5 text-cyan-200" />
            Indian Harbour Beach FL Computer Repair
          </p>
          <h1 className="fade-up fade-delay-1 mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Computer Repair & IT Support in Indian Harbour Beach FL
          </h1>
          <p className="fade-up fade-delay-2 mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            My Computer Tech provides practical computer repair, laptop help, Wi-Fi troubleshooting,
            printer setup, virus removal, refurbished computer sales, and small business IT support
            for Indian Harbour Beach, Satellite Beach, Indialantic, Melbourne Beach, and nearby
            Space Coast communities.
          </p>
          <div className="fade-up fade-delay-3 mt-6 grid gap-3 text-sm text-cyan-50 sm:grid-cols-3">
            {['Local beachside shop', '4.6 Google rating', 'Home & business support'].map((item) => (
              <div key={item} className="rounded-md border border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
                {item}
              </div>
            ))}
          </div>
          <div className="fade-up fade-delay-4 mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={businessInfo.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-cyan-300"
            >
              <FaPhoneAlt className="h-3.5 w-3.5" />
              Call Now
            </a>
            <a
              href={businessInfo.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              <FaMapMarkerAlt className="h-3.5 w-3.5 text-cyan-200" />
              Directions
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Request Service
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="fade-up fade-delay-2 overflow-hidden rounded-lg border border-white/15 bg-white shadow-2xl">
            <div className="relative min-h-[430px] bg-gradient-to-br from-white via-slate-50 to-cyan-50 p-6 text-slate-900">
              <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(135deg,rgba(14,165,233,0.14),rgba(20,184,166,0.12),transparent)]" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-[#f4e6c8]/70" />
              <div className="absolute inset-x-0 bottom-24 h-20 bg-[repeating-linear-gradient(165deg,rgba(8,145,178,0.18)_0px,rgba(8,145,178,0.18)_2px,transparent_2px,transparent_18px)]" />
              <div className="absolute right-6 top-6 rounded-full border border-cyan-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-800">
                Space Coast
              </div>

              <div className="hero-float-slow relative mt-20 rounded-lg border border-slate-200 bg-white p-5 shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Local IT Support</p>
                    <h2 className="mt-2 text-2xl font-bold text-slate-950">{businessInfo.name}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{businessInfo.shortDescription}</p>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-slate-950 text-cyan-200">
                    <FaDesktop className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-5 grid gap-3 text-sm text-slate-700">
                  <a href={businessInfo.phoneHref} className="flex items-center gap-3 rounded-md bg-slate-50 px-3 py-2 font-semibold hover:bg-cyan-50">
                    <FaPhoneAlt className="h-3.5 w-3.5 text-cyan-700" />
                    {businessInfo.phone}
                  </a>
                  <a
                    href={businessInfo.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-md bg-slate-50 px-3 py-2 font-semibold hover:bg-cyan-50"
                  >
                    <FaMapMarkerAlt className="h-3.5 w-3.5 text-cyan-700" />
                    296 E Eau Gallie Blvd
                  </a>
                </div>
              </div>

              <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-md border border-slate-200 bg-white/90 p-4 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Service Area</p>
                  <p className="mt-2 font-bold text-slate-950">Indian Harbour Beach and nearby areas</p>
                </div>
                <div className="rounded-md border border-slate-200 bg-white/90 p-4 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Hours</p>
                  <p className="mt-2 font-bold text-slate-950">Mon-Friday, 9:30 AM-3:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              { icon: FaTools, title: 'Repair', text: 'Laptops & PCs' },
              { icon: FaWifi, title: 'Setup', text: 'Wi-Fi & printers' },
              { icon: FaShieldAlt, title: 'Trusted', text: `${businessInfo.googleRating} Google rating` },
            ].map((item) => (
              <div key={item.title} className="hover-lift rounded-md border border-cyan-100 bg-white p-4 shadow-sm">
                <item.icon className="h-5 w-5 text-cyan-700" />
                <h2 className="mt-3 font-bold text-slate-950">{item.title}</h2>
                <p className="mt-1 text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="border-y border-slate-200 bg-white py-12">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {trustItems.map((item) => (
          <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan-50 text-cyan-700">
              <item.icon className="h-4 w-4" />
            </div>
            <h2 className="mt-4 text-lg font-bold text-slate-950">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="relative overflow-hidden bg-slate-50 py-16">
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(244,230,200,0.45),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Practical repair and IT support services"
          description="Clean, focused support for the technology problems beachside customers ask for most often."
          align="center"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/services"
            className="inline-flex rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>

    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Popular Local Pages
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Quick links to the most searched local pages
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            These links help customers get to the right service page faster and give search engines
            a cleaner path into the most important local pages on the site.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {popularLocalPages.map((page) => (
              <Link
                key={page.title}
                to={page.to}
                className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-slate-950 group-hover:text-blue-800">{page.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{page.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-800">
                  View page
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Website Referral</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Need a website for your business or nonprofit?
          </h2>
          <p className="mt-3 text-slate-600">
            For website design and development referrals, we recommend Reliable Web Studio.
          </p>
          <a
            href="https://www.reliablewebstudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 sm:w-auto"
          >
            Visit Reliable Web Studio
          </a>
        </div>
      </div>
    </section>

    <ServiceAreaSection />

    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions local customers ask before they call"
          description="Clear answers help customers decide whether repair, cleanup, onsite support, or remote help is the right next step."
          align="center"
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {homeFaqs.map((faq) => (
            <details key={faq.question} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <summary className="cursor-pointer list-none text-lg font-bold text-slate-950">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>

    <ReferralSection />
    </>
  );
};

export default Home;
