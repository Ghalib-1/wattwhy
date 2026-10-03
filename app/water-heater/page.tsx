import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Much Does a Water Heater Cost Per Month? (2026 Guide)',
  description:
    'Electric water heaters cost $30–$60/month to run. Find out what yours costs, and how to cut it — tank vs. tankless, insulation, and temperature settings.',
  keywords: [
    'how much does a water heater cost per month',
    'electric water heater cost',
    'water heater electricity usage',
    'water heater cost calculator',
    'how much electricity does a water heater use',
  ],
};

export default function WaterHeaterPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        How Much Does a Water Heater Cost Per Month?
      </h1>

      <p className="text-lg text-slate-600 mb-8">
        Water heating is the <strong>second-largest</strong> energy expense in
        most U.S. homes — about 15–18% of the total electric bill. For an
        average household, that&apos;s <strong>$30–$60 per month</strong>{' '}
        depending on tank size, household size, and rate. Here&apos;s the
        breakdown.
      </p>

      <Link
        href="/"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 mb-12"
      >
        Run my free diagnostic →
      </Link>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Water heater cost by type and size
        </h2>
        <p className="text-slate-700 mb-4">
          At 15¢/kWh, typical monthly costs for a 2-person household:
        </p>

        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr className="text-left">
                <th className="px-4 py-3 font-medium text-slate-700">Type</th>
                <th className="px-4 py-3 font-medium text-slate-700 text-right">Capacity</th>
                <th className="px-4 py-3 font-medium text-slate-700 text-right">Monthly Cost</th>
                <th className="px-4 py-3 font-medium text-slate-700 text-right">Yearly</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="px-4 py-3 text-slate-700">Electric tank (30 gal)</td>
                <td className="px-4 py-3 text-right text-slate-600">30 gal</td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">$28</td>
                <td className="px-4 py-3 text-right text-slate-600">$336</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">Electric tank (40–50 gal)</td>
                <td className="px-4 py-3 text-right text-slate-600">40–50 gal</td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">$42</td>
                <td className="px-4 py-3 text-right text-slate-600">$504</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">Electric tank (80 gal)</td>
                <td className="px-4 py-3 text-right text-slate-600">80 gal</td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">$65</td>
                <td className="px-4 py-3 text-right text-slate-600">$780</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">Tankless electric</td>
                <td className="px-4 py-3 text-right text-slate-600">Whole-home</td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">$38</td>
                <td className="px-4 py-3 text-right text-slate-600">$456</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">Heat pump water heater</td>
                <td className="px-4 py-3 text-right text-slate-600">50–80 gal</td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">$18</td>
                <td className="px-4 py-3 text-right text-slate-600">$216</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-slate-600 mt-4 text-sm">
          Multiply by (your rate ÷ 15¢) for your actual cost. Household size
          matters: a 4-person home uses roughly 50% more hot water than a
          2-person home.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Tank vs. tankless — is tankless worth it?
        </h2>
        <p className="text-slate-700 mb-4">
          Tankless electric water heaters save <strong>10–20%</strong> on
          water-heating energy — but the savings rarely justify the $1,500–$3,000
          installation cost on electricity alone. The bigger win is{' '}
          <strong>heat pump water heaters</strong>, which cut usage by 50–65%.
        </p>
        <p className="text-slate-700">
          If your current tank is 10+ years old, replacing it with a heat pump
          unit often pays back in 3–5 years — and federal tax credits cover
          $300–$2,000 of the cost through 2032.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          How to cut your water heating cost
        </h2>
        <ol className="space-y-3 text-slate-700 list-decimal list-inside">
          <li>
            <strong>Lower the thermostat to 120°F</strong> — most tanks ship at
            140°F. Lowering saves 4–8% and is safer
          </li>
          <li>
            <strong>Insulate the tank</strong> — a $30 insulation blanket pays
            back in a year
          </li>
          <li>
            <strong>Insulate the first 6 feet of hot water pipe</strong> —
            reduces standby heat loss
          </li>
          <li>
            <strong>Fix leaky faucets</strong> — a dripping hot water tap wastes
            thousands of gallons per year
          </li>
          <li>
            <strong>Take shorter showers</strong> — every minute of hot water
            costs about $0.15–$0.25
          </li>
          <li>
            <strong>Wash clothes in cold water</strong> — saves 90% of the
            energy used by the washing machine
          </li>
          <li>
            <strong>Install low-flow fixtures</strong> — cuts hot water use by
            25–60% with no comfort loss
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
              Is it cheaper to leave the water heater on all day?
            </summary>
            <p className="mt-3 text-slate-600">
              For tank water heaters, yes. The tank stays hot either way, and
              reheating from cold costs more than maintaining temperature. If
              you have a tankless unit, turning it off when away saves nothing
              — it only heats when you use hot water.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-medium text-slate-900 cursor-pointer">
              How much electricity does a water heater use per day?
            </summary>
            <p className="mt-3 text-slate-600">
              A typical 40–50 gallon electric tank uses 10–15 kWh per day for a
              2-person household. At 15¢/kWh, that&apos;s $1.50–$2.25 per day.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-medium text-slate-900 cursor-pointer">
              Why did my water heater bill go up?
            </summary>
            <p className="mt-3 text-slate-600">
              Common causes: aging tank with sediment buildup (heats less
              efficiently), failed heating element (runs longer), higher rate
              from utility, or more hot water usage (new family member, guests).
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-medium text-slate-900 cursor-pointer">
              What temperature should I set my water heater to?
            </summary>
            <p className="mt-3 text-slate-600">
              120°F is the sweet spot — hot enough for showers and dishwashing,
              low enough to reduce standby losses and prevent scalding. Some
              dishwashers prefer 130–140°F, so check your model.
            </p>
          </details>
        </div>
      </section>

      <section className="bg-slate-50 rounded-2xl p-6 text-center">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          Not sure if your water heater is the culprit?
        </h2>
        <p className="text-slate-600 mb-4">
          Enter your last two bills and get a personalized breakdown of what
          changed and by how much.
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