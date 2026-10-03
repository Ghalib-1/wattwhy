import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Why Is My California Electric Bill So High?',
  description:
    'California electricity rates are among the highest in the US. Find out why your bill spiked and get a free personalized breakdown in 10 seconds.',
  keywords: [
    'why is my electric bill so high california',
    'california electric bill',
    'california electricity rates',
    'pg&e bill spike',
    'sdg&e bill high',
  ],
};

export default function CaliforniaPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        Why Is My California Electric Bill So High?
      </h1>

      <p className="text-lg text-slate-600 mb-8">
        California has some of the highest electricity rates in the country.
        The average residential rate is <strong>30.71¢ per kWh</strong> — more
        than double the national average. If your bill spiked, our free
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
          The two reasons your bill changed
        </h2>
        <div className="space-y-4 text-slate-700">
          <p>
            <strong>1. Rate hikes.</strong> PG&amp;E, SCE, and SDG&amp;E have
            all raised rates multiple times in the past two years. When your
            utility raises rates, your bill goes up even if you use the same
            amount of power.
          </p>
          <p>
            <strong>2. Usage changes.</strong> Summer AC use, winter heating,
            a new appliance, or a leaky window can all increase your kWh
            consumption. This is the part you can control.
          </p>
          <p>
            Our diagnostic tool tells you exactly which one is causing your
            spike — and by how much.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          What uses the most electricity in a California home?
        </h2>
        <ul className="space-y-2 text-slate-700 list-disc list-inside">
          <li><strong>Air conditioning</strong> — 40-60% of summer usage</li>
          <li><strong>Electric heating</strong> — 30-50% of winter usage</li>
          <li><strong>Water heater</strong> — ~15% year-round</li>
          <li><strong>Refrigerator</strong> — ~7% year-round</li>
          <li><strong>Pool pump</strong> — ~10% if you have a pool</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          California electricity rates by utility
        </h2>
        <ul className="space-y-2 text-slate-700">
          <li>PG&amp;E: ~32¢/kWh</li>
          <li>SCE (Southern California Edison): ~28¢/kWh</li>
          <li>SDG&amp;E: ~38¢/kWh</li>
          <li>LADWP: ~18¢/kWh</li>
          <li>SMUD: ~14¢/kWh</li>
        </ul>
        <p className="text-slate-600 mt-4 text-sm">
          Rates vary by tier, time-of-use plan, and season. These are averages.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Common questions
        </h2>
        <div className="space-y-4">
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-medium text-slate-900 cursor-pointer">
              Why did my PG&amp;E bill go up so much?
            </summary>
            <p className="mt-3 text-slate-600">
              PG&amp;E has raised rates multiple times in recent years. If your
              usage hasn&apos;t changed but your bill has, it&apos;s almost
              certainly a rate hike. Our tool separates the two.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-medium text-slate-900 cursor-pointer">
              What&apos;s the cheapest time to use electricity in California?
            </summary>
            <p className="mt-3 text-slate-600">
              Most California utilities offer time-of-use plans. Off-peak hours
              are typically 9pm–4pm the next day. Peak is usually 4pm–9pm,
              when rates can be 2-3x higher.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-medium text-slate-900 cursor-pointer">
              How can I lower my California electric bill?
            </summary>
            <p className="mt-3 text-slate-600">
              Shift heavy usage to off-peak hours, raise your thermostat 2-3
              degrees in summer, and check if you qualify for CARE or FERA
              discount programs.
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