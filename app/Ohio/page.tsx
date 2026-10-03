import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why Is My Ohio Electric Bill So High?',
  description:
    'Ohio electricity rates vary widely by provider. Find out why your bill spiked and get a free personalized breakdown in 10 seconds.',
  keywords: [
    'why is my electric bill so high ohio',
    'ohio electric bill',
    'ohio electricity rates',
    'aep ohio bill high',
    'duke energy ohio bill',
    'ohio electricity calculator',
  ],
};

export default function OhioPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        Why Is My Ohio Electric Bill So High?
      </h1>

      <p className="text-lg text-slate-600 mb-8">
        Ohio has a deregulated electricity market with supply prices that swing
        significantly. The average residential rate is{' '}
        <strong>15.0¢ per kWh</strong>. If your bill spiked, our free
        diagnostic tells you exactly why.
      </p>

      <Link
        href="/"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 mb-12"
      >
        Run my free diagnostic →
      </Link>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          The two reasons your Ohio bill changed
        </h2>
        <div className="space-y-4 text-slate-700">
          <p>
            <strong>1. Supply rate changes.</strong> Ohio lets you choose your
            electricity supplier. AEP Ohio, Duke Energy Ohio, and FirstEnergy
            handle delivery, but your supply can come from any approved
            provider. If your contract expired, you may have rolled onto a
            higher default rate.
          </p>
          <p>
            <strong>2. Usage changes.</strong> Ohio winters are cold, and
            electric heating, space heaters, and dehumidifiers spike seasonal
            bills.
          </p>
          <p>
            Our diagnostic separates rate changes from usage so you know what
            you can control.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          What uses the most electricity in an Ohio home?
        </h2>
        <ul className="space-y-2 text-slate-700 list-disc list-inside">
          <li>
            <strong>Electric heating</strong> — 40–60% of winter usage
          </li>
          <li>
            <strong>Air conditioning</strong> — 30–50% of summer usage
          </li>
          <li>
            <strong>Water heater</strong> — ~15% year-round
          </li>
          <li>
            <strong>Dehumidifier</strong> — significant in humid Ohio summers
          </li>
          <li>
            <strong>Refrigerator</strong> — ~7% year-round
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Common questions
        </h2>
        <div className="space-y-4">
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-medium text-slate-900 cursor-pointer">
              What&apos;s the Ohio Price to Compare?
            </summary>
            <p className="mt-3 text-slate-600">
              Ohio utilities publish a &quot;Price to Compare&quot; — the
              default supply rate. As of 2026, most are in the 8–12¢/kWh range.
              If your supply rate is above that, you&apos;re likely overpaying.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-medium text-slate-900 cursor-pointer">
              How do I switch Ohio electricity suppliers?
            </summary>
            <p className="mt-3 text-slate-600">
              Go to EnergyChoice.Ohio.gov — the state&apos;s official
              comparison site. Shopping 30–45 days before your contract expires
              avoids rollover penalties.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-medium text-slate-900 cursor-pointer">
              How much is 1,000 kWh in Ohio?
            </summary>
            <p className="mt-3 text-slate-600">
              At the Ohio average of 15.0¢/kWh, 1,000 kWh costs about{' '}
              <strong>$150/month</strong>. Supply is typically 40–60% of that,
              with the rest being transmission and distribution.
            </p>
          </details>
        </div>
      </section>

      <div className="bg-slate-50 rounded-2xl p-6 text-center">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          Ready to see where your money went?
        </h2>
        <p className="text-slate-600 mb-4">
          Enter your last two bills and get a free breakdown.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-700"
        >
          Run my free diagnostic →
        </Link>
      </div>
    </main>
  );
}