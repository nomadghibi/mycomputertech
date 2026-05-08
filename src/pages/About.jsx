import { Link } from 'react-router-dom';
import {
  FaBriefcase,
  FaCheckCircle,
  FaDesktop,
  FaHome,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
  FaStar,
  FaTools,
} from 'react-icons/fa';
import ReferralSection from '../components/ReferralSection';
import { businessInfo } from '../data/businessInfo';

const values = [
  {
    icon: FaTools,
    title: 'Practical repair first',
    text: 'The goal is to solve the problem clearly before recommending a replacement or larger project.',
  },
  {
    icon: FaShieldAlt,
    title: 'Honest local guidance',
    text: 'Customers should understand what is wrong, what matters, and what can wait.',
  },
  {
    icon: FaHome,
    title: 'Comfortable for home users',
    text: 'Support is approachable for homeowners, seniors, and people who just need the computer working again.',
  },
  {
    icon: FaBriefcase,
    title: 'Ready for small business',
    text: 'Help with practical business needs like computers, printers, Wi-Fi, email, and Microsoft 365.',
  },
];

const serviceFocus = [
  'Laptop and PC repairs',
  'Refurbished laptops and desktops',
  'Virus and malware removal',
  'Wi-Fi and printer setup',
  'Data backup and transfer',
  'Email and Microsoft 365 help',
  'Small business IT support',
  'Onsite beachside service',
];

const About = () => (
  <>
    <section className="relative isolate overflow-hidden bg-slate-950 py-16 text-white sm:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.28),transparent_35%),linear-gradient(135deg,#082f49_0%,#0f172a_58%,#134e4a_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-[repeating-linear-gradient(170deg,rgba(125,211,252,0.12)_0px,rgba(125,211,252,0.12)_2px,transparent_2px,transparent_22px)]" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8">
        <div>
          <p className="inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
            About My Computer Tech
          </p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Local beachside computer repair with serious IT support standards
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-200">
            My Computer Tech is a locally known computer repair and IT support business in Indian
            Harbour Beach, focused on practical help for beachside residents, seniors, home users,
            and small businesses across the Space Coast.
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
              to="/services"
              className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              View Services
            </Link>
          </div>
        </div>

        <div className="rounded-lg border border-white/15 bg-white p-6 text-slate-900 shadow-2xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">Local Shop</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">{businessInfo.name}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{businessInfo.businessProfileDescription}</p>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-slate-950 text-cyan-200">
              <FaDesktop className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-6 grid gap-3">
            <a
              href={businessInfo.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 rounded-md bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-cyan-50"
            >
              <FaMapMarkerAlt className="mt-0.5 h-4 w-4 text-cyan-700" />
              <span>{businessInfo.serviceAddress}</span>
            </a>
            <div className="flex items-center gap-3 rounded-md bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">
              <FaStar className="h-4 w-4 text-amber-500" />
              <span>{businessInfo.googleRating} Google rating from {businessInfo.googleReviewCount} reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Local Experience</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">Roots going back to 2009</h2>
          <p className="mt-4 leading-7 text-slate-600">
            The business has roots in the original Space Coast computer repair shops started around
            2009. That history gives My Computer Tech a familiar local foundation while keeping the
            current website focused on the beachside customers it serves today.
          </p>
        </div>
        <div className="space-y-5 text-lg leading-8 text-slate-600">
          <p>
            My Computer Tech focuses on clear, hands-on computer repair and IT support from Indian
            Harbour Beach. The work is practical: repair what can be repaired, explain the real
            options, and help customers avoid unnecessary confusion.
          </p>
          <p>
            The shop supports laptop and PC repairs, refurbished computer sales, virus cleanup,
            Wi-Fi and printer setup, data backup, email help, Microsoft 365 support, and small
            business technology needs.
          </p>
          <p>
            Beachside customers should contact My Computer Tech directly. Palm Bay, Melbourne, and
            surrounding mainland customers should use Best Computer Tech LLC or 24x7 Tech On Call.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">How We Work</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Professional support with a practical local approach
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            The site is built around the type of support local customers actually need: reliable
            repair, clear communication, and help that fits homes and small businesses.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <article key={value.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-cyan-50 text-cyan-700">
                <value.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-950">{value.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{value.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Service Focus</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Built for beachside homes and small businesses
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            My Computer Tech keeps the service menu focused so customers can quickly understand
            whether the shop is the right fit for their computer, network, printer, email, or
            replacement computer needs.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
          <div className="grid gap-3 sm:grid-cols-2">
            {serviceFocus.map((item) => (
              <div key={item} className="flex gap-3 rounded-md bg-white p-4 shadow-sm">
                <FaCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
                <span className="text-sm font-semibold text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-gradient-to-br from-blue-700 to-cyan-700 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">Beachside First</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Clear service areas make it easier for customers to get the right help.
          </h2>
          <p className="mt-4 max-w-3xl text-blue-50">
            My Computer Tech serves beachside Space Coast communities. Mainland service requests
            are directed to the Best Computer Tech and 24x7 Tech On Call referral links below.
          </p>
        </div>
        <Link
          to="/service-areas"
          className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50"
        >
          View Service Areas
        </Link>
      </div>
    </section>

    <ReferralSection />
  </>
);

export default About;
