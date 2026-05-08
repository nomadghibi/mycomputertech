import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { businessInfo } from '../data/businessInfo';
import SectionHeader from './SectionHeader';

const ServiceAreaSection = ({ showLink = true }) => (
  <section className="bg-white py-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Service Area"
        title="Focused on Space Coast beachside communities"
        description="My Computer Tech is built for beachside customers who need local, practical computer repair and onsite IT support."
      />
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {businessInfo.serviceAreas.map((area) => (
          <div key={area} className="flex items-center gap-3 rounded-md border border-slate-200 bg-slate-50 px-4 py-3">
            <FaMapMarkerAlt className="h-4 w-4 text-blue-700" />
            <span className="text-sm font-semibold text-slate-800">{area}</span>
          </div>
        ))}
      </div>
      {showLink && (
        <Link
          to="/service-areas"
          className="mt-8 inline-flex rounded-md border border-blue-200 px-5 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-50"
        >
          View Service Areas
        </Link>
      )}
    </div>
  </section>
);

export default ServiceAreaSection;
