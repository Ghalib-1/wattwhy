import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Much Does Heating Cost Per Month? (2026 Guide)',
  description:
    'Heating costs $80–$300/month in most cold-climate homes. Compare electric furnace, space heater, heat pump, and gas costs — plus how to cut them.',
  keywords: [
    'how much does heating cost per month',
    'electric furnace cost',
    'space heater cost per hour',
    'heat pump cost',
    'gas vs electric heating cost',
    'why is my heating bill so high',
  ],
};

export default function HeatingPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        How Much Does Heating Cost Per Month?
      </h1>

      <p className="text-lg text-slate-600 mb-8">
        Heating is the largest energy expense in cold-climate homes — often{' '}
        <strong>40–60% of the winter utility bill</strong>. In cold-weather
        states like Maine, Vermont, Minnesota, and North Dakota, it&apos;s not
        uncommon to see electric bills jump from{' '}
        <strong>$150 in October to $400+ in January</strong>. Here&apos;s what
        drives it, what each system costs, and how to cut it.
      </p>

      <Link
        href="/"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 mb-12"
      >
        Run my free diagnostic →
      </Link>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Heating cost by system type
        </h2>
        <p className="text-slate-700 mb-4">
          Typical monthly cost for a 1,500–2,000 sq ft home in a cold-climate
          state, at a 15¢/kWh electric rate. Gas is priced at $1.20/therm.
        </p>

        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr className="text-left">
                <th className="px-4 py-3 font-medium text-slate-700">System</th>
                <th className="px-4 py-3 font-medium text-slate-700 text-right">
                  Monthly (cold month)
                </th>
                <th className="px-4 py-3 font-medium text-slate-700 text-right">
                  Season Total
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="px-4 py-3 text-slate-700">
                  Electric furnace (resistance)
                </td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">
                  $280–$400
                </td>
                <td className="px-4 py-3 text-right text-slate-600">
                  $1,200–$1,800
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">
                  Electric baseboard heaters
                </td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">
                  $250–$380
                </td>
                <td className="px-4 py-3 text-right text-slate-600">
                  $1,100–$1,600
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">
                  Space heaters (supplemental)
                </td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">
                  $60–$150
                </td>
                <td className="px-4 py-3 text-right text-slate-600">
                  $300–$700
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">
                  Heat pump (cold climate)
                </td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">
                  $120–$200
                </td>
                <td className="px-4 py-3 text-right text-slate-600">
                  $500–$900
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">
                  Natural gas furnace
                </td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">
                  $80–$180
                </td>
                <td className="px-4 py-3 text-right text-slate-600">
                  $400–$800
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-slate-600 mt-4 text-sm">
          Heat pumps are 2–3x more efficient than resistance heating. If your
          home has an old electric furnace, a heat pump upgrade often pays back
          in 4–7 years — and federal tax credits cover up to $2,000.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Space heater cost breakdown
        </h2>
        <p className="text-slate-700 mb-4">
          Space heaters are the most misunderstood appliance in cold climates.
          Here&apos;s what they actually cost at 15¢/kWh:
        </p>

        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr className="text-left">
                <th className="px-4 py-3 font-medium text-slate-700">
                  Heater type
                </th>
                <th className="px-4 py-3 font-medium text-slate-700 text-right">
                  Watts
                </th>
                <th className="px-4 py-3 font-medium text-slate-700 text-right">
                  Per hour
                </th>
                <th className="px-4 py-3 font-medium text-slate-700 text-right">
                  8 hrs/day for a month
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="px-4 py-3 text-slate-700">
                  Small ceramic (low)
                </td>
                <td className="px-4 py-3 text-right text-slate-600">750W</td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">
                  $0.11
                </td>
                <td className="px-4 py-3 text-right text-slate-600">$27</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">
                  Standard space heater
                </td>
                <td className="px-4 py-3 text-right text-slate-600">1,500W</td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">
                  $0.23
                </td>
                <td className="px-4 py-3 text-right text-slate-600">$54</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">
                  Oil-filled radiator
                </td>
                <td className="px-4 py-3 text-right text-slate-600">1,500W</td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">
                  $0.23
                </td>
                <td className="px-4 py-3 text-right text-slate-600">$54</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">Infrared heater</td>
                <td className="px-4 py-3 text-right text-slate-600">1,500W</td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">
                  $0.23
                </td>
                <td className="px-4 py-3 text-right text-slate-600">$54</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-slate-600 mt-4 text-sm">
          The key number:{' '}
          <strong>all 1,500W space heaters cost the same to run</strong>.
          Marketing claims about &quot;efficient&quot; heaters are misleading —
          1,500W in = 1,500W of heat out, regardless of design.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Gas vs. electric heating — which is cheaper?
        </h2>
        <p className="text-slate-700 mb-4">
          In most of the northern US, <strong>natural gas is 40–60% cheaper</strong>{' '}
          per unit of heat than electricity. But that&apos;s changing:
        </p>
        <ul className="space-y-2 text-slate-700 list-disc list-inside">
          <li>
            <strong>Gas is cheaper today</strong> — about $0.80–$1.20 per therm
            vs. electric resistance at $4–$5 per equivalent heat output
          </li>
          <li>
            <strong>Heat pumps close the gap</strong> — modern cold-climate heat
            pumps cost about the same as gas in most northern states
          </li>
          <li>
            <strong>Rebates favor heat pumps</strong> — federal tax credits
            cover up to $2,000, plus many state and utility programs add another
            $1,000–$3,000
          </li>
          <li>
            <strong>Fuel prices vary by region</strong> — natural gas is
            cheapest in the South and Midwest; heat pumps win in the Northeast
            and Pacific Northwest where electricity is cheaper
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          How to cut your heating cost
        </h2>
        <ol className="space-y-3 text-slate-700 list-decimal list-inside">
          <li>
            <strong>Lower the thermostat 3–5°F</strong> — saves 8–15% on heating
          </li>
          <li>
            <strong>Use a programmable thermostat</strong> — setback to 62°F at
            night and when away
          </li>
          <li>
            <strong>Seal air leaks</strong> — attic, outlets, doors, windows.
            See the{' '}
            <Link href="/air-leaks" className="text-blue-600 underline">
              air leaks guide
            </Link>
          </li>
          <li>
            <strong>Insulate the attic</strong> — the #1 ROI home improvement in
            cold climates
          </li>
          <li>
            <strong>Close off unused rooms</strong> — no need to heat the guest
            bedroom
          </li>
          <li>
            <strong>Service the furnace annually</strong> — a clean unit uses
            5–10% less fuel
          </li>
          <li>
            <strong>Consider a heat pump</strong> — if your current system is
            10+ years old, this is the highest-impact upgrade
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
              Is it cheaper to use a space heater or run the furnace?
            </summary>
            <p className="mt-3 text-slate-600">
              If you&apos;re heating one room, a space heater is usually
              cheaper. If you&apos;re heating the whole house, run the furnace.
              The cost of running a 1,500W space heater for 8 hours ($1.84) is
              roughly equal to what a furnace costs to heat a well-insulated
              1,500 sq ft home for the same period.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-medium text-slate-900 cursor-pointer">
              Why did my heating bill jump so much this month?
            </summary>
            <p className="mt-3 text-slate-600">
              Three usual causes: colder weather (system runs longer), rate
              increase (utility raised prices), or a system issue (dirty
              filter, failing igniter, refrigerant loss in a heat pump). Our
              diagnostic tells you which.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-medium text-slate-900 cursor-pointer">
              What temperature should I set my thermostat in winter?
            </summary>
            <p className="mt-3 text-slate-600">
              68°F when home, 62°F at night and when away. Each degree lower
              saves about 3% on heating.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-medium text-slate-900 cursor-pointer">
              Do heat pumps work in cold US winters?
            </summary>
            <p className="mt-3 text-slate-600">
              Modern cold-climate heat pumps work down to -22°F (-30°C). They
              lose efficiency as it gets colder but stay cheaper than electric
              resistance. Below -13°F (-25°C), most systems switch to backup
              resistance heating.
            </p>
          </details>
        </div>
      </section>

      <section className="bg-slate-50 rounded-2xl p-6 text-center">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          Not sure if heating is your problem?
        </h2>
        <p className="text-slate-600 mb-4">
          Enter your last two bills and get a personalized breakdown — rate
          hike vs. usage, and which systems are driving it.
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