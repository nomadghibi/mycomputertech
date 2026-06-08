import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  FaCarSide,
  FaCheckCircle,
  FaChevronRight,
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

const localSearchLinks = [
  {
    label: 'Computer repair Indian Harbour Beach',
    to: '/services',
  },
  {
    label: 'Computer repair Satellite Beach',
    to: '/services',
  },
  {
    label: 'Laptop repair Indian Harbour Beach',
    to: '/services',
  },
  {
    label: 'Virus removal Satellite Beach',
    to: '/blog/virus-removal-satellite-beach-steps',
  },
  {
    label: 'Wi-Fi setup Indian Harbour Beach',
    to: '/blog/wifi-setup-indian-harbour-beach-homes',
  },
  {
    label: 'Printer setup beachside',
    to: '/blog/printer-setup-beachside-home-office',
  },
  {
    label: 'Computer repairs near me (beachside)',
    to: '/contact',
  },
  {
    label: 'Computer repairs near me in Indian Harbour Beach',
    to: '/blog/computer-repairs-near-me-indian-harbour-beach',
  },
  {
    label: 'Best computer repair in beachside',
    to: '/about',
  },
  {
    label: 'Computer repair shop Indian Harbour Beach',
    to: '/contact',
  },
  {
    label: 'Printer offline fix beachside',
    to: '/blog/my-printer-not-working-beachside-help',
  },
  {
    label: 'Printer not working in Melbourne FL',
    to: '/blog/printer-not-working-melbourne-fl',
  },
  {
    label: 'Senior computer help Indian Harbour Beach',
    to: '/services',
  },
  {
    label: 'Home computer repair beachside',
    to: '/services',
  },
  {
    label: 'Computer won’t turn on repair beachside',
    to: '/services',
  },
  {
    label: 'Same day computer repair beachside',
    to: '/contact',
  },
  {
    label: 'Slow computer cleanup in Melbourne FL',
    to: '/blog/slow-computer-cleanup-melbourne-fl',
  },
  {
    label: 'Data recovery in Melbourne FL',
    to: '/blog/data-recovery-melbourne-fl',
  },
  {
    label: 'Windows 11 upgrade help in Melbourne FL',
    to: '/blog/windows-11-upgrade-help-melbourne-fl',
  },
  {
    label: 'Wi-Fi keeps disconnecting in Melbourne FL',
    to: '/blog/wifi-keeps-disconnecting-melbourne-fl',
  },
  {
    label: 'Laptop overheating in Indian Harbour Beach',
    to: '/blog/laptop-overheating-indian-harbour-beach',
  },
  {
    label: 'Computer won’t turn on in Indian Harbour Beach',
    to: '/blog/computer-wont-turn-on-indian-harbour-beach',
  },
  {
    label: 'Microsoft 365 and email help in Melbourne FL',
    to: '/blog/microsoft-365-email-help-melbourne-fl',
  },
  {
    label: 'Data backup beachside',
    to: '/blog/data-backup-beachside-how-to-avoid-losing-files',
  },
  {
    label: 'Virus symptoms beachside',
    to: '/blog/virus-symptoms-beachside-what-to-watch-for',
  },
  {
    label: 'Remote support Florida',
    to: '/blog/remote-support-florida-when-to-use-it',
  },
  {
    label: 'Home computer repair beachside',
    to: '/blog/home-computer-repair-beachside-for-seniors',
  },
  {
    label: 'Same-day computer repair beachside',
    to: '/blog/same-day-computer-repair-beachside',
  },
  {
    label: 'Small business backup Indian Harbour Beach',
    to: '/blog/small-business-backup-recovery-indian-harbour-beach',
  },
  {
    label: 'Office computer repair beachside',
    to: '/blog/office-computer-repair-beachside',
  },
  {
    label: 'Email not syncing in Melbourne FL',
    to: '/blog/email-not-syncing-melbourne-fl',
  },
  {
    label: 'Backup recovery after hard drive failure',
    to: '/blog/backup-recovery-after-hard-drive-failure',
  },
  {
    label: 'Printer offline fix beachside',
    to: '/blog/printer-offline-fix-beachside',
  },
  {
    label: 'Best computer repair beachside',
    to: '/blog/best-computer-repair-beachside',
  },
  {
    label: 'Computer repair shop Indian Harbour Beach',
    to: '/blog/computer-repair-shop-indian-harbour-beach-guide',
  },
  {
    label: 'Browser hijack removal beachside',
    to: '/blog/browser-hijack-removal-beachside',
  },
  {
    label: 'Password reset and email lockout Melbourne FL',
    to: '/blog/password-reset-email-lockout-melbourne-fl',
  },
  {
    label: 'Scanner setup beachside',
    to: '/blog/scanner-setup-beachside',
  },
  {
    label: 'Outlook troubleshooting Melbourne FL',
    to: '/blog/outlook-troubleshooting-melbourne-fl',
  },
  {
    label: 'Tablet setup beachside',
    to: '/blog/tablet-setup-beachside',
  },
  {
    label: 'Computer maintenance tips beachside',
    to: '/blog/computer-maintenance-tips-beachside',
  },
  {
    label: 'Laptop battery issues Indian Harbour Beach',
    to: '/blog/laptop-battery-issues-indian-harbour-beach',
  },
  {
    label: 'Photo transfer beachside',
    to: '/blog/photo-transfer-beachside',
  },
  {
    label: 'Power outage computer repair beachside',
    to: '/blog/power-outage-computer-repair-beachside',
  },
  {
    label: 'Cloud backup beachside',
    to: '/blog/cloud-backup-beachside',
  },
  {
    label: 'Restore deleted photos beachside',
    to: '/blog/restore-deleted-photos-beachside',
  },
  {
    label: 'Hard drive clicking beachside',
    to: '/blog/hard-drive-clicking-repair-beachside',
  },
  {
    label: 'Laptop screen repair Indian Harbour Beach',
    to: '/blog/laptop-screen-repair-indian-harbour-beach',
  },
  {
    label: 'Blue screen error beachside',
    to: '/blog/blue-screen-error-beachside-fix',
  },
  {
    label: 'Desktop computer repair Melbourne FL',
    to: '/blog/desktop-computer-repair-melbourne-fl',
  },
];

const locationLinks = [
  { label: 'Indian Harbour Beach computer repair', to: '/location/indian-harbour-beach-fl' },
  { label: 'Melbourne computer repair', to: '/location/melbourne-fl' },
  { label: 'Palm Bay computer repair', to: '/location/palm-bay-fl' },
  { label: 'Satellite Beach computer repair', to: '/location/satellite-beach-fl' },
  { label: 'Indialantic computer repair', to: '/location/indialantic-fl' },
  { label: 'Melbourne Beach computer repair', to: '/location/melbourne-beach-fl' },
  { label: 'West Melbourne computer repair', to: '/location/west-melbourne-fl' },
  { label: 'Rockledge computer repair', to: '/location/rockledge-fl' },
  { label: 'Viera computer repair', to: '/location/viera-fl' },
  { label: 'Cocoa Beach computer repair', to: '/location/cocoa-beach-fl' },
  { label: 'Cape Canaveral computer repair', to: '/location/cape-canaveral-fl' },
  { label: 'Patrick Space Force Base area repair', to: '/location/patrick-space-force-base-area' },
];

const ServiceAreas = () => (
  <>
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'My Computer Tech Service Areas',
          itemListElement: businessInfo.serviceAreas.map((area, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: area,
          })),
        })}
      </script>
    </Helmet>

    <section className="relative isolate overflow-hidden bg-slate-950 py-16 text-white sm:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.28),transparent_35%),linear-gradient(135deg,#082f49_0%,#0f172a_58%,#134e4a_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-[repeating-linear-gradient(170deg,rgba(125,211,252,0.12)_0px,rgba(125,211,252,0.12)_2px,transparent_2px,transparent_22px)]" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8">
        <div>
          <p className="inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
            Service Areas
          </p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Indian Harbour Beach computer repair coverage
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

    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Local Search
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Popular beachside service searches
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Customers in Indian Harbour Beach, Satellite Beach, Indialantic, and nearby communities
            often search for these service topics.
          </p>
          <p className="mt-3 text-base leading-7 text-slate-600">
            If you are searching for computer repairs near me or the best computer repair in
            beachside Space Coast areas, My Computer Tech focuses on practical local support and
            clear service coverage.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {localSearchLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-cyan-300 hover:bg-cyan-50"
              >
                <FaChevronRight className="h-3 w-3 text-cyan-700" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            City Pages
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Dedicated local pages for core service cities
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            These pages help customers find the right local support faster and give search engines
            a clearer view of the primary service cities around Indian Harbour Beach.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {locationLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-cyan-300 hover:bg-cyan-50"
              >
                <FaChevronRight className="h-3 w-3 text-cyan-700" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>

    <ReferralSection />
  </>
);

export default ServiceAreas;
