import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why Is My Pennsylvania Electric Bill So High?',
  description:
    'Pennsylvania electricity rates have climbed sharply. Find out why your bill spiked and get a free personalized breakdown in 10 seconds.',
  keywords: [
    'why is my electric bill so high pennsylvania',
    'pennsylvania electric bill',
    'pa electricity rates',
    'ppl bill high',
    'peco bill high',
    'pennsylvania electricity calculator',
  ],
};

export default function PennsylvaniaPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        Why Is My Pennsylvania Electric Bill So High?
      </h1>

      <p className="text-lg text-slate-600 mb-8">
        Pennsylvania has one of the most active deregulated electricity markets
        in the country. The average residential rate is{' '}
        <strong>21.6¢ per kWh</strong> — well above the national average. If
        your bill spiked, our free diagnostic tells you exactly why.
      </p>

      <Link
        href="/"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 mb-12"
      >
        Run my free diagnostic →
      </Link>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          The two reasons your PA bill changed
        </h2>
        <div className="space-y-4 text-slate-700">
          <p>
            <strong>1. Supply rate changes.</strong> Pennsylvania lets you
            choose your electricity supplier (PPL, PECO, Duquesne Light, etc.
            handle delivery). If your supplier contract expired, you rolled onto
            the utility&apos;s default rate — often 20–40% higher.
          </p>
          <p>
            <strong>2. Usage changes.</strong> PA winters are cold, and
            electric heating, space heaters, and dehumidifiers all spike
            seasonal bills.
          </p>
          <p>
            Our diagnostic separates rate changes from usage so you know what
            you can control.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          What uses the most electricity in a PA home?
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
            <strong>Dehumidifier</strong> — significant in PA&apos;s humid
            summers
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
              What&apos;s the Pennsylvania Price to Compare?
            </summary>
            <p className="mt-3 text-slate-600">
              Every PA utility publishes a &quot;Price to Compare&quot; — the
              default supply rate. As of late 2026, most are in the 10–15¢/kWh
              range. If your supply rate is above that, you&apos;re likely
              overpaying.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-medium text-slate-900 cursor-pointer">
              How do I switch PA electricity suppliers?
            </summary>
            <p className="mt-3 text-slate-600">
              Go to PAPowerSwitch.com — the state&apos;s official comparison
              site. Shopping 30–45 days before your contract expires avoids
              rollover penalties. Switching is free and takes effect on your
              next meter reading.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-medium text-slate-900 cursor-pointer">
              How much is 1,000 kWh in Pennsylvania?
            </summary>
            <p className="mt-3 text-slate-600">
              At the PA average of 21.6¢/kWh, 1,000 kWh costs about{' '}
              <strong>$216/month</strong>. Supply is typically 40–60% of that,
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