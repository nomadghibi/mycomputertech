import { FaCheckCircle } from 'react-icons/fa';

const ServiceCard = ({ title, description }) => (
  <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-blue-50 text-blue-700">
      <FaCheckCircle className="h-5 w-5" />
    </div>
    <h3 className="mt-5 text-lg font-bold text-slate-950">{title}</h3>
    <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
  </article>
);

export default ServiceCard;
