import { Link } from 'react-router-dom';
import {
  FaCarSide,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaStar,
} from 'react-icons/fa';
import ReferralSection from '../components/ReferralSection';
import { businessInfo } from '../data/businessInfo';

const areaNotes = [
  'Onsite computer repair and setup help',
  'Laptop and desktop troubleshooting',
  'Wi-Fi, printer, and email support',
  'Home and small business service calls',
];

const ServiceAreas = () => (
  <>
    <section className="relative isolate overflow-hidden bg-slate-950 py-16 text-white sm:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.28),transparent_35%),linear-gradient(135deg,#082f49_0%,#0f172a_58%,#134e4a_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-[repeating-linear-gradient(170deg,rgba(125,211,252,0.12)_0px,rgba(125,211,252,0.12)_2px,transparent_2px,transparent_22px)]" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8">
        <div>
          <p className="inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
            Service Areas
          </p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Beachside Space Coast computer repair coverage
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-200">
            My Computer Tech is focused on Indian Harbour Beach and nearby beachside communities.
            This service-area focus keeps response and support clear for local customers who need
            practical computer repair and IT help.
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
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">Coverage Snapshot</p>
          <h2 className="mt-3 text-2xl font-bold text-slate-950">Beachside-focused service model</h2>
          <div className="mt-5 space-y-3">
            <div className="flex items-center gap-3 rounded-md bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">
              <FaMapMarkerAlt className="h-4 w-4 text-cyan-700" />
              Indian Harbour Beach base
            </div>
            <div className="flex items-center gap-3 rounded-md bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">
              <FaCarSide className="h-4 w-4 text-cyan-700" />
              Nearby barrier island communities
            </div>
            <div className="flex items-center gap-3 rounded-md bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">
              <FaStar className="h-4 w-4 text-amber-500" />
              {businessInfo.googleRating} Google rating
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Where We Serve</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Primary beachside service communities
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            These are the main Space Coast beachside communities currently supported by My Computer
            Tech for onsite and practical day-to-day IT service.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {businessInfo.serviceAreas.map((area) => (
            <article key={area} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan-50 text-cyan-700">
                <FaMapMarkerAlt className="h-4 w-4" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-950">{area}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Local support for computer repair, Wi-Fi setup, printer setup, and onsite help.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-slate-50 py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Service Model</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Built for local response and practical results
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Keeping coverage focused on beachside communities helps maintain clear scheduling,
            practical support expectations, and reliable follow-up for customers.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <ul className="space-y-4">
            {areaNotes.map((item) => (
              <li key={item} className="flex gap-3">
                <FaCheckCircle className="mt-1 h-5 w-5 shrink-0 text-cyan-700" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-md border border-cyan-100 bg-cyan-50 p-4 text-sm text-cyan-900">
            Need support outside the beachside area? Use the referral links below for mainland and
            remote options.
          </div>
        </div>
      </div>
    </section>

    <ReferralSection />
  </>
);

export default ServiceAreas;
