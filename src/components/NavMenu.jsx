import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaPhoneAlt, FaTimes } from 'react-icons/fa';
import { businessInfo } from '../data/businessInfo';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Service Areas', to: '/service-areas' },
  { label: 'Blog', to: '/blog' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const NavMenu = () => {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `rounded-md px-3 py-2 text-sm font-semibold transition ${
      isActive ? 'bg-blue-50 text-blue-800' : 'text-slate-700 hover:bg-slate-100 hover:text-blue-800'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex flex-col leading-tight" onClick={() => setOpen(false)}>
          <span className="text-xl font-bold tracking-tight text-slate-950">{businessInfo.name}</span>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
            Beachside Tech Support
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={navClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={businessInfo.phoneHref}
            className="inline-flex items-center gap-2 rounded-md bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
          >
            <FaPhoneAlt className="h-3.5 w-3.5" />
            Call Now
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-slate-800 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FaTimes className="h-4 w-4" /> : <FaBars className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-lg md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={navClass} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
            <a
              href={businessInfo.phoneHref}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-blue-700 px-4 py-3 text-sm font-semibold text-white"
            >
              <FaPhoneAlt className="h-3.5 w-3.5" />
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavMenu;
