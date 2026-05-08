import { Link } from 'react-router-dom';
import {
  FaBriefcase,
  FaCheckCircle,
  FaCloud,
  FaDesktop,
  FaEnvelope,
  FaHdd,
  FaLaptop,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPrint,
  FaShieldAlt,
  FaShoppingCart,
  FaTools,
  FaWifi,
} from 'react-icons/fa';
import ReferralSection from '../components/ReferralSection';
import { businessInfo } from '../data/businessInfo';

const serviceGroups = [
  {
    title: 'Repair & Cleanup',
    description: 'Core computer repair services for home users, seniors, and beachside residents.',
    items: [
      {
        icon: FaDesktop,
        title: 'Computer repair',
        description: 'Troubleshooting for desktops, startup issues, crashes, updates, software problems, and everyday repair needs.',
      },
      {
        icon: FaLaptop,
        title: 'Laptop repair',
        description: 'Help with slow laptops, charging concerns, setup problems, hardware issues, and usability problems.',
      },
      {
        icon: FaShieldAlt,
        title: 'Virus and malware removal',
        description: 'Cleanup for suspicious popups, browser hijacks, unwanted programs, and virus removal in Satellite Beach and nearby areas.',
      },
      {
        icon: FaTools,
        title: 'Slow computer cleanup',
        description: 'Startup cleanup, storage review, performance tuning, and practical recommendations when a computer is hard to use.',
      },
    ],
  },
  {
    title: 'Setup & Everyday Tech Help',
    description: 'Practical help for the devices and accounts that keep a home or small office running.',
    items: [
      {
        icon: FaWifi,
        title: 'Wi-Fi and network setup',
        description: 'Router setup, weak signal troubleshooting, secure Wi-Fi configuration, and Wi-Fi setup in Indian Harbour Beach.',
      },
      {
        icon: FaPrint,
        title: 'Printer setup',
        description: 'Printer installation, wireless printing, scanner setup, and beachside printer setup for homes and small offices.',
      },
      {
        icon: FaHdd,
        title: 'Data backup and transfer',
        description: 'Move files to a new computer, set up backup routines, and protect important photos, documents, and business files.',
      },
      {
        icon: FaEnvelope,
        title: 'Email and Microsoft 365 help',
        description: 'Email setup, Outlook troubleshooting, Microsoft 365 setup, password recovery guidance, and account cleanup.',
      },
    ],
  },
  {
    title: 'Business, Remote & Replacement Options',
    description: 'Flexible support for small businesses, remote issues, onsite visits, and replacement computer needs.',
    items: [
      {
        icon: FaBriefcase,
        title: 'Small business IT support',
        description: 'Support for computers, networks, printers, email, Microsoft 365, and daily operations for beachside small businesses.',
      },
      {
        icon: FaCloud,
        title: 'Remote tech support',
        description: 'Remote help for many software, email, setup, and troubleshooting issues when an onsite visit is not required.',
      },
      {
        icon: FaMapMarkerAlt,
        title: 'Onsite beachside service',
        description: 'Onsite computer repair beachside for homeowners, seniors, and small businesses across local Space Coast communities.',
      },
      {
        icon: FaShoppingCart,
        title: 'Refurbished laptop and desktop sales',
        description: 'Sales of refurbished laptops and desktops for customers who need a practical replacement or backup computer.',
      },
    ],
  },
];

const expectations = [
  'Clear explanation of the issue and recommended next step',
  'Practical repair-first guidance before replacement is suggested',
  'Support for homeowners, seniors, and small beachside businesses',
  'Beachside-focused service with mainland referrals handled clearly',
];

const Services = () => (
  <>
    <section className="relative isolate overflow-hidden bg-slate-950 py-16 text-white sm:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.28),transparent_35%),linear-gradient(135deg,#082f49_0%,#0f172a_58%,#134e4a_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-[repeating-linear-gradient(170deg,rgba(125,211,252,0.12)_0px,rgba(125,211,252,0.12)_2px,transparent_2px,transparent_22px)]" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8">
        <div>
          <p className="inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
            Services
          </p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Professional beachside computer repair and IT support
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-200">
            My Computer Tech helps with laptop and PC repairs, refurbished computer sales, virus
            removal, Wi-Fi setup, printer help, data transfer, email support, remote help, and
            onsite service from Indian Harbour Beach.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={businessInfo.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              <FaPhoneAlt className="h-3.5 w-3.5" />
              Call {businessInfo.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Request Service
            </Link>
          </div>
        </div>
        <div className="rounded-lg border border-white/15 bg-white p-6 text-slate-900 shadow-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">Service Snapshot</p>
          <h2 className="mt-3 text-2xl font-bold text-slate-950">Focused support for real-world problems</h2>
          <div className="mt-5 grid gap-3">
            <div className="rounded-md bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">
              Shop location: Indian Harbour Beach
            </div>
            <div className="rounded-md bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">
              Main focus: laptops, desktops, Wi-Fi, printers, and cleanup
            </div>
            <div className="rounded-md bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">
              Best fit: home users, seniors, and small businesses
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { label: 'Shop location', value: 'Indian Harbour Beach', detail: '296 E Eau Gallie Blvd' },
            { label: 'Main focus', value: 'Laptops, PCs & setup', detail: 'Repairs, cleanup, sales, and support' },
            { label: 'Best fit', value: 'Home & small business', detail: 'Friendly, practical local service' },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">{item.label}</p>
              <h2 className="mt-2 text-xl font-bold text-slate-950">{item.value}</h2>
              <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Service Menu</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Organized support for common computer problems
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            The service menu is intentionally focused so customers can quickly find the right help
            without sorting through unnecessary enterprise IT language.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {serviceGroups.map((group) => (
            <div key={group.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="max-w-3xl">
                <h3 className="text-2xl font-bold text-slate-950">{group.title}</h3>
                <p className="mt-2 text-slate-600">{group.description}</p>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {group.items.map((service) => (
                  <article
                    key={service.title}
                    className="rounded-md border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-cyan-50 text-cyan-700">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-4 text-base font-bold text-slate-950">{service.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">What To Expect</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Straightforward help, not a confusing sales pitch
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Whether you need laptop repair in Indian Harbour Beach, virus removal in Satellite
            Beach, printer setup beachside, or Wi-Fi setup near the beach, the goal is practical
            service and clear next steps.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
          <ul className="space-y-4">
            {expectations.map((item) => (
              <li key={item} className="flex gap-3">
                <FaCheckCircle className="mt-1 h-5 w-5 shrink-0 text-cyan-700" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="bg-gradient-to-br from-blue-700 to-cyan-700 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">Ready For Help?</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Call the Indian Harbour Beach shop or request service online.
          </h2>
          <p className="mt-4 max-w-3xl text-blue-50">
            My Computer Tech is best for beachside customers. Palm Bay, Melbourne, and mainland
            Brevard customers are directed to the right referral links below.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a
            href={businessInfo.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50"
          >
            <FaPhoneAlt className="h-3.5 w-3.5" />
            Call Now
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Request Service
          </Link>
        </div>
      </div>
    </section>

    <ReferralSection />
  </>
);

export default Services;
