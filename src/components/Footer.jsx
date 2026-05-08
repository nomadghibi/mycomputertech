import { Link } from 'react-router-dom';
import { FaArrowRight, FaClock, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { businessInfo } from '../data/businessInfo';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Service Areas', to: '/service-areas' },
  { label: 'Blog', to: '/blog' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const footerAreas = [
  'Indian Harbour Beach',
  'Satellite Beach',
  'Indialantic',
  'Melbourne Beach',
  'Cocoa Beach',
  'Cape Canaveral',
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h2 className="text-xl font-bold text-white">{businessInfo.name}</h2>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            {businessInfo.shortDescription} Practical IT support for Indian Harbour Beach and nearby
            Space Coast beachside communities.
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex gap-3">
              <FaPhoneAlt className="mt-1 h-3.5 w-3.5 text-blue-300" />
              <a href={businessInfo.phoneHref} className="hover:text-white">
                {businessInfo.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <FaEnvelope className="mt-1 h-3.5 w-3.5 text-blue-300" />
              <a href={businessInfo.emailHref} className="hover:text-white">
                {businessInfo.email}
              </a>
            </li>
            <li className="flex gap-3">
              <FaMapMarkerAlt className="mt-1 h-3.5 w-3.5 text-blue-300" />
              <span>{businessInfo.primaryArea}</span>
            </li>
            <li className="flex gap-3">
              <FaClock className="mt-1 h-3.5 w-3.5 text-blue-300" />
              <span>Mon-Fri: 9:30 AM-3:00 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white">
                  <FaArrowRight className="h-2.5 w-2.5 text-blue-300" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Beachside Areas</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            {footerAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Referral Links</h3>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            Need service in Palm Bay, Melbourne, or a mainland Brevard area?
          </p>
          <div className="mt-5 space-y-3">
            <a
              href={businessInfo.referrals.bestComputerTech}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md border border-slate-700 px-4 py-3 text-sm font-semibold text-white transition hover:border-blue-300 hover:bg-slate-900"
            >
              Best Computer Tech LLC
            </a>
            <a
              href={businessInfo.referrals.remoteSupport}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md border border-slate-700 px-4 py-3 text-sm font-semibold text-white transition hover:border-blue-300 hover:bg-slate-900"
            >
              24x7 Tech On Call
            </a>
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-400">
            Need a website for your business or nonprofit?
          </p>
          <a
            href="https://www.reliablewebstudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block rounded-md border border-slate-700 px-4 py-3 text-sm font-semibold text-white transition hover:border-blue-300 hover:bg-slate-900"
          >
            Website Referral: Reliable Web Studio
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>&copy; {currentYear} {businessInfo.name}. All rights reserved.</p>
          <p>Beachside computer repair and IT support for the Space Coast.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
