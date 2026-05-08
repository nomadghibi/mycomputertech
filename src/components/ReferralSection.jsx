import { businessInfo } from '../data/businessInfo';

const ReferralSection = ({ compact = false }) => (
  <section className={compact ? 'rounded-lg bg-slate-50 p-6' : 'bg-slate-950 py-16 text-white'}>
    <div className={compact ? '' : 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'}>
      <div className={compact ? '' : 'grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center'}>
        <div>
          <p className={compact ? 'text-sm font-semibold text-blue-700' : 'text-sm font-semibold text-blue-300'}>
            Looking for service in Palm Bay or Melbourne?
          </p>
          <h2 className={compact ? 'mt-2 text-2xl font-bold text-slate-950' : 'mt-3 text-3xl font-bold text-white'}>
            My Computer Tech focuses on the beachside area.
          </h2>
          <p className={compact ? 'mt-3 text-slate-600' : 'mt-4 max-w-3xl text-slate-300'}>
            For Palm Bay, Melbourne, and surrounding mainland locations, please contact Best Computer
            Tech LLC or 24x7 Tech On Call.
          </p>
        </div>
        <div className={compact ? 'mt-5 flex flex-col gap-3' : 'mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:justify-end'}>
          <a
            href={businessInfo.referrals.bestComputerTech}
            target="_blank"
            rel="noopener noreferrer"
            className={compact ? 'rounded-md bg-blue-700 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-blue-800' : 'rounded-md bg-white px-5 py-3 text-center text-sm font-semibold text-slate-950 hover:bg-blue-50'}
          >
            Palm Bay / Melbourne Computer Repair
          </a>
          <a
            href={businessInfo.referrals.remoteSupport}
            target="_blank"
            rel="noopener noreferrer"
            className={compact ? 'rounded-md border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-slate-800 hover:border-blue-400' : 'rounded-md border border-slate-600 px-5 py-3 text-center text-sm font-semibold text-white hover:border-blue-300'}
          >
            Remote Tech Support
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ReferralSection;
