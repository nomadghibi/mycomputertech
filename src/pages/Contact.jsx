import { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaStar } from 'react-icons/fa';
import ReferralSection from '../components/ReferralSection';
import { businessInfo } from '../data/businessInfo';
import { emailPublicKey, emailServiceId, emailTemplateId } from '../utils/emailjsConfig';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitError('');

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      setSubmitError(
        `Contact form is temporarily unavailable. Please call ${businessInfo.phone} or email ${businessInfo.email}.`
      );
      return;
    }

    setIsSubmitting(true);
    emailjs
      .sendForm(emailServiceId, emailTemplateId, e.target, emailPublicKey)
      .then(() => {
        setSubmitted(true);
        e.target.reset();
      })
      .catch(() => {
        setSubmitError(
          `We could not send your request right now. Please try again, or contact us at ${businessInfo.phone}.`
        );
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-950 py-12 text-white sm:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.28),transparent_35%),linear-gradient(135deg,#082f49_0%,#0f172a_58%,#134e4a_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-[repeating-linear-gradient(170deg,rgba(125,211,252,0.12)_0px,rgba(125,211,252,0.12)_2px,transparent_2px,transparent_22px)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8">
          <div>
            <p className="inline-flex rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">
              Contact
            </p>
            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Request beachside computer repair or IT support
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              Contact My Computer Tech for computer repair, laptop repair, printer setup, Wi-Fi
              help, virus removal, and onsite computer repair beachside.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={businessInfo.phoneHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 sm:w-auto"
              >
                <FaPhoneAlt className="h-3.5 w-3.5" />
                Call {businessInfo.phone}
              </a>
              <Link
                to="/service-areas"
                className="inline-flex w-full items-center justify-center rounded-md border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15 sm:w-auto"
              >
                View Service Areas
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-white/15 bg-white p-6 text-slate-900 shadow-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
              Contact Snapshot
            </p>
            <h2 className="mt-3 text-xl font-bold text-slate-950 sm:text-2xl">
              Indian Harbour Beach local support
            </h2>
            <div className="mt-5 space-y-3">
              <a
                href={businessInfo.phoneHref}
                className="flex items-center gap-3 rounded-md bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-cyan-50"
              >
                <FaPhoneAlt className="h-4 w-4 text-cyan-700" />
                {businessInfo.phone}
              </a>
              <a
                href={businessInfo.emailHref}
                className="flex items-center gap-3 rounded-md bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-cyan-50"
              >
                <FaEnvelope className="h-4 w-4 text-cyan-700" />
                {businessInfo.email}
              </a>
              <a
                href={businessInfo.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 rounded-md bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-cyan-50"
              >
                <FaMapMarkerAlt className="mt-0.5 h-4 w-4 text-cyan-700" />
                <span>{businessInfo.serviceAddress}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="space-y-4">
            <div className="rounded-lg border border-slate-200 p-5">
              <h2 className="flex items-center gap-2 font-bold text-slate-950">
                <FaPhoneAlt className="h-5 w-5 text-blue-700" />
                Phone
              </h2>
              <a
                href={businessInfo.phoneHref}
                className="mt-1 block text-slate-600 hover:text-blue-800"
              >
                {businessInfo.phone}
              </a>
            </div>
            <div className="rounded-lg border border-slate-200 p-5">
              <h2 className="flex items-center gap-2 font-bold text-slate-950">
                <FaEnvelope className="h-5 w-5 text-blue-700" />
                Email
              </h2>
              <a
                href={businessInfo.emailHref}
                className="mt-1 block text-slate-600 hover:text-blue-800"
              >
                {businessInfo.email}
              </a>
            </div>
            <div className="rounded-lg border border-slate-200 p-5">
              <h2 className="flex items-center gap-2 font-bold text-slate-950">
                <FaMapMarkerAlt className="h-5 w-5 text-blue-700" />
                Address
              </h2>
              <p className="mt-1 text-slate-600">{businessInfo.serviceAddress}</p>
              <p className="mt-2 text-sm text-slate-500">{businessInfo.primaryArea}</p>
              <a
                href={businessInfo.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex text-sm font-semibold text-blue-800 hover:text-blue-950"
              >
                Get directions
              </a>
            </div>
            <div className="rounded-lg border border-slate-200 p-5">
              <h2 className="flex items-center gap-2 font-bold text-slate-950">
                <FaClock className="h-5 w-5 text-blue-700" />
                Hours
              </h2>
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-slate-600">Mon-Friday</p>
                  <p className="text-slate-600">Sat-Sun Closed</p>
                </div>
                <p className="font-semibold text-slate-900">9:30 AM-3:00 PM</p>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 p-5">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={`star-${idx}`} className="h-5 w-5 text-amber-500" />
                ))}
              </div>
              <h2 className="mt-3 font-bold text-slate-950">Google Reviews</h2>
              <p className="mt-1 text-slate-600">
                5-star service reputation with {businessInfo.googleReviewCount} Google reviews.
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {businessInfo.reviewSnippets.map((review) => (
                  <li key={review}>&ldquo;{review}&rdquo;</li>
                ))}
              </ul>
            </div>
            <ReferralSection compact />
          </div>

          <div className="space-y-6">
            <form
              onSubmit={handleSubmit}
              className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <input type="hidden" name="to_email" value={businessInfo.email} />
              <input
                type="hidden"
                name="subject"
                value={`New service request from ${businessInfo.name} website`}
              />
              <input type="hidden" name="business_name" value={businessInfo.name} />
              <input type="hidden" name="service_area" value={businessInfo.primaryArea} />
              <input type="hidden" name="form_source" value="Contact Page" />
              <h2 className="text-xl font-bold text-slate-950 sm:text-2xl">Request Service</h2>
              <p className="mt-2 text-sm text-slate-600">
                Share a few details and we can follow up with the right next step.
              </p>
              {submitted ? (
                <div className="mt-5 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
                  Your request has been sent. We will follow up using the contact information you
                  provided.
                </div>
              ) : null}
              {submitError ? (
                <div className="mt-5 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                  {submitError}
                </div>
              ) : null}
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold text-slate-800">Name</span>
                  <input
                    type="text"
                    name="from_name"
                    required
                    className="mt-2 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-slate-800">Phone</span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="mt-2 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Best callback number"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-sm font-semibold text-slate-800">Email</span>
                  <input
                    type="email"
                    name="from_email"
                    required
                    className="mt-2 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="you@example.com"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-sm font-semibold text-slate-800">How can we help?</span>
                  <textarea
                    name="message"
                    rows="6"
                    required
                    className="mt-2 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Tell us what is happening with your computer, laptop, Wi-Fi, printer, email, or business technology."
                  />
                </label>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400 sm:w-auto"
              >
                {isSubmitting ? 'Sending Request...' : 'Request Service'}
              </button>
            </form>

            <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <h2 className="font-bold text-slate-950">
                Need a Website for Your Business or Nonprofit?
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                For website design and development referrals, we recommend Reliable Web Studio.
              </p>
              <a
                href="https://www.reliablewebstudio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex rounded-md bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Visit Reliable Web Studio
              </a>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
              <h2 className="px-2 pb-2 text-sm font-bold text-slate-950">
                Find Us in Indian Harbour Beach
              </h2>
              <div className="overflow-hidden rounded-md border border-slate-200">
                <iframe
                  title="My Computer Tech Map"
                  src={businessInfo.mapEmbedUrl}
                  className="h-48 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
