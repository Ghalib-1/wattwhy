import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why Is My Texas Electric Bill So High?',
  description:
    'Texas electricity rates have been volatile. Find out why your bill spiked and get a free personalized breakdown in 10 seconds.',
  keywords: [
    'why is my electric bill so high texas',
    'texas electric bill',
    'texas electricity rates',
    'ercot bill spike',
    'oncor bill high',
    'texas electricity calculator',
  ],
};

export default function TexasPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        Why Is My Texas Electric Bill So High?
      </h1>

      <p className="text-lg text-slate-600 mb-8">
        Texas has the most competitive electricity market in the country — and
        one of the most volatile. The average residential rate is{' '}
        <strong>14.5¢ per kWh</strong>, but that number hides huge swings.
        Summer AC bills can double in a single month. If your bill spiked, our
        free diagnostic tells you exactly why.
      </p>

      <Link
        href="/"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 mb-12"
      >
        Run my free diagnostic →
      </Link>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          The two reasons your Texas bill changed
        </h2>
        <div className="space-y-4 text-slate-700">
          <p>
            <strong>1. Rate plan changes.</strong> Texas has over 100 retail
            electricity providers. If your fixed-rate contract expired and you
            rolled onto a variable rate, your bill can jump 40%+ overnight —
            without any change in your usage.
          </p>
          <p>
            <strong>2. Usage changes.</strong> Texas summers are brutal. Running
            central AC 12+ hours a day can add $100–200 per month. Winter
            electric heating can be just as expensive.
          </p>
          <p>
            Our diagnostic tool separates rate changes from usage changes so
            you know what you can actually control.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          What uses the most electricity in a Texas home?
        </h2>
        <ul className="space-y-2 text-slate-700 list-disc list-inside">
          <li>
            <strong>Air conditioning</strong> — 50–70% of summer usage
          </li>
          <li>
            <strong>Pool pump</strong> — 10–15% if you have a pool
          </li>
          <li>
            <strong>Water heater</strong> — ~15% year-round
          </li>
          <li>
            <strong>Refrigerator</strong> — ~7% year-round
          </li>
          <li>
            <strong>Electric heating</strong> — spikes in January/February
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
              Why did my ERCOT bill go up so much?
            </summary>
            <p className="mt-3 text-slate-600">
              ERCOT manages the Texas grid, not your bill. Your bill comes from
              your retail provider. If your contract expired and you didn&apos;t
              re-shop, you may have rolled onto a variable rate that&apos;s
              significantly higher.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-medium text-slate-900 cursor-pointer">
              When should I switch Texas electricity providers?
            </summary>
            <p className="mt-3 text-slate-600">
              Before your contract expires, not after. In Texas, once you roll
              onto a variable rate, you can be charged 40–80% more than the
              fixed-rate plans available on PowerToChoose.org. Shopping 30–45
              days before expiration is the standard play.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-medium text-slate-900 cursor-pointer">
              What&apos;s the cheapest time to use electricity in Texas?
            </summary>
            <p className="mt-3 text-slate-600">
              Many Texas plans offer free nights (9pm–6am) or free weekends. If
              your plan includes one, shift heavy usage — laundry, dishwasher,
              EV charging, pool pump — to those windows. The savings can be
              20–40% on those specific loads.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-medium text-slate-900 cursor-pointer">
              How much is 1,000 kWh in Texas?
            </summary>
            <p className="mt-3 text-slate-600">
              At the Texas average of 14.5¢/kWh, 1,000 kWh costs about{' '}
              <strong>$145/month</strong> just for supply. Add transmission and
              distribution charges (usually $20–40), and you&apos;re looking at
              $165–185 for 1,000 kWh. Actual rates vary widely by provider and
              plan type.
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