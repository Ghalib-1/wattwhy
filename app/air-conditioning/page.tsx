import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Much Does Air Conditioning Cost Per Month? (2026 Guide)',
  description:
    'Central AC costs $100–$300/month in most US homes. Find out what yours costs per hour, per month, and per year — plus how to cut it.',
  keywords: [
    'how much does ac cost per month',
    'air conditioning cost',
    'how much electricity does ac use',
    'central ac cost per hour',
    'ac cost calculator',
    'why is my ac bill so high',
  ],
};

export default function AirConditioningPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        How Much Does Air Conditioning Cost Per Month?
      </h1>

      <p className="text-lg text-slate-600 mb-8">
        Air conditioning is the single biggest driver of summer electric bills.
        A typical central AC system costs <strong>$100–$300 per month</strong>{' '}
        in most U.S. homes — and can push past $400 in hot climates like Texas,
        Arizona, and Florida. Here&apos;s what drives the cost and how to cut it.
      </p>

      <Link
        href="/"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 mb-12"
      >
        Run my free diagnostic →
      </Link>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          AC cost by system type
        </h2>
        <p className="text-slate-700 mb-4">
          Not all ACs cost the same to run. Here&apos;s the typical monthly cost
          at a 15¢/kWh rate, assuming 8 hours of daily use:
        </p>

        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr className="text-left">
                <th className="px-4 py-3 font-medium text-slate-700">System</th>
                <th className="px-4 py-3 font-medium text-slate-700 text-right">Watts</th>
                <th className="px-4 py-3 font-medium text-slate-700 text-right">Monthly</th>
                <th className="px-4 py-3 font-medium text-slate-700 text-right">Yearly (summer only)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="px-4 py-3 text-slate-700">Window AC (small)</td>
                <td className="px-4 py-3 text-right text-slate-600">500W</td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">$18</td>
                <td className="px-4 py-3 text-right text-slate-600">$72</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">Window AC (large)</td>
                <td className="px-4 py-3 text-right text-slate-600">1,200W</td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">$43</td>
                <td className="px-4 py-3 text-right text-slate-600">$172</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">Portable AC</td>
                <td className="px-4 py-3 text-right text-slate-600">1,000W</td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">$36</td>
                <td className="px-4 py-3 text-right text-slate-600">$144</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">Central AC (2.5 ton)</td>
                <td className="px-4 py-3 text-right text-slate-600">3,500W</td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">$126</td>
                <td className="px-4 py-3 text-right text-slate-600">$504</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">Heat pump (cooling mode)</td>
                <td className="px-4 py-3 text-right text-slate-600">3,000W</td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">$108</td>
                <td className="px-4 py-3 text-right text-slate-600">$432</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-slate-600 mt-4 text-sm">
          Rates vary widely. Multiply by (your rate ÷ 15¢) for a personalized
          estimate. Texas at 14.5¢ = roughly the numbers above. California at
          30¢ = roughly double.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          What actually drives your AC cost
        </h2>
        <ul className="space-y-3 text-slate-700 list-disc list-inside">
          <li>
            <strong>Outside temperature</strong> — every degree above 95°F
            makes the compressor work harder
          </li>
          <li>
            <strong>Thermostat setting</strong> — each degree you lower it adds
            roughly 3–5% to your bill
          </li>
          <li>
            <strong>Home insulation</strong> — leaky windows and doors can
            increase AC runtime by 20–30%
          </li>
          <li>
            <strong>System age</strong> — a 15-year-old AC uses 30–40% more
            power than a modern unit
          </li>
          <li>
            <strong>Ductwork condition</strong> — leaky ducts lose 20–30% of
            cooled air before it reaches the room
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          How to cut your AC cost
        </h2>
        <ol className="space-y-3 text-slate-700 list-decimal list-inside">
          <li>
            <strong>Raise the thermostat 3–5°F</strong> — the single biggest
            easy win. Saves 10–15%
          </li>
          <li>
            <strong>Use a smart thermostat</strong> — schedules setbacks
            automatically. Pays back in one season
          </li>
          <li>
            <strong>Change the filter monthly in summer</strong> — a dirty
            filter forces the system to run longer
          </li>
          <li>
            <strong>Close blinds during peak sun</strong> — reduces solar heat
            gain by 30–50%
          </li>
          <li>
            <strong>Service the unit annually</strong> — clean coils use
            10–15% less power
          </li>
          <li>
            <strong>Consider a heat pump</strong> — modern heat pumps cool
            30–50% more efficiently than 10-year-old central AC
          </li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Common questions
        </h2>
        <div className="space-y-4">
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-medium text-slate-900 cursor-pointer">
              How much does it cost to run AC for 8 hours?
            </summary>
            <p className="mt-3 text-slate-600">
              A typical central AC (3.5 kW) running 8 hours at 15¢/kWh costs
              about $4.20 per day. Over a 30-day month, that&apos;s $126.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-medium text-slate-900 cursor-pointer">
              Is it cheaper to leave the AC on all day or turn it off?
            </summary>
            <p className="mt-3 text-slate-600">
              For most homes, turning it off when you&apos;re away is cheaper.
              But if you&apos;re only gone 1–2 hours, leaving it on at a higher
              setpoint is fine. The old myth about &quot;restart cost&quot; is
              mostly debunked for modern systems.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-medium text-slate-900 cursor-pointer">
              Why did my AC bill jump so much this month?
            </summary>
            <p className="mt-3 text-slate-600">
              Usually three things: hotter weather (AC runs longer), a
              rate increase (utility raised prices), or a system issue (dirty
              filter, low refrigerant, failing compressor). Our diagnostic tool
              tells you which.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-medium text-slate-900 cursor-pointer">
              What temperature should I set my AC to save money?
            </summary>
            <p className="mt-3 text-slate-600">
              The U.S. Department of Energy recommends 78°F when you&apos;re
              home and 85°F when you&apos;re away. Each degree above 72°F saves
              roughly 3% on cooling costs.
            </p>
          </details>
        </div>
      </section>

      <section className="bg-slate-50 rounded-2xl p-6 text-center">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          Not sure if AC is your problem?
        </h2>
        <p className="text-slate-600 mb-4">
          Enter your last two bills and get a personalized breakdown — rate
          hike vs. usage, and which appliances are actually driving it.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-700"
        >
          Run my free diagnostic →
        </Link>
      </section>
    </main>
  );
}