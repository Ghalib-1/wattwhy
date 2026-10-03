import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Air Leaks: How Much Money Are They Costing You? (2026)',
  description:
    'Air leaks waste 25–40% of your heating and cooling energy. Find out where leaks hide, what each one costs per year, and how to fix them for $20–$200.',
  keywords: [
    'air leaks cost',
    'how much do air leaks cost',
    'air sealing savings',
    'where are air leaks in home',
    'diy air sealing',
    'how to find air leaks',
  ],
};

export default function AirLeaksPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        Air Leaks: How Much Money Are They Costing You?
      </h1>

      <p className="text-lg text-slate-600 mb-8">
        Air leaks waste <strong>25–40% of the energy</strong> you pay for —
        year-round, winter and summer. The average US home loses{' '}
        <strong>$200–$400 per year</strong> through unsealed gaps in windows,
        doors, outlets, and attic penetrations. Most homeowners never notice.
        Here&apos;s where the leaks are, what they cost, and how to fix them for
        cheap.
      </p>

      <Link
        href="/"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 mb-12"
      >
        Run my free diagnostic →
      </Link>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          What each leak costs per year
        </h2>
        <p className="text-slate-700 mb-4">
          Estimated annual loss in a typical 1,800 sq ft home, mixed climate:
        </p>

        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr className="text-left">
                <th className="px-4 py-3 font-medium text-slate-700">
                  Leak location
                </th>
                <th className="px-4 py-3 font-medium text-slate-700 text-right">
                  Annual loss
                </th>
                <th className="px-4 py-3 font-medium text-slate-700 text-right">
                  Fix cost
                </th>
                <th className="px-4 py-3 font-medium text-slate-700 text-right">
                  Payback
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="px-4 py-3 text-slate-700">
                  Attic hatch / pull-down stairs
                </td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">
                  $100–200
                </td>
                <td className="px-4 py-3 text-right text-slate-600">
                  $20–50
                </td>
                <td className="px-4 py-3 text-right text-slate-600">
                  &lt;3 mo
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">
                  Unsealed outlets on exterior walls
                </td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">
                  $50–150
                </td>
                <td className="px-4 py-3 text-right text-slate-600">
                  $10–30
                </td>
                <td className="px-4 py-3 text-right text-slate-600">
                  &lt;1 mo
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">
                  Door sweeps and thresholds
                </td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">
                  $80–200
                </td>
                <td className="px-4 py-3 text-right text-slate-600">
                  $30–100
                </td>
                <td className="px-4 py-3 text-right text-slate-600">
                  2–4 mo
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">
                  Window frames and trim
                </td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">
                  $100–250
                </td>
                <td className="px-4 py-3 text-right text-slate-600">
                  $50–150
                </td>
                <td className="px-4 py-3 text-right text-slate-600">
                  3–6 mo
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">Chimney / flue</td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">
                  $50–150
                </td>
                <td className="px-4 py-3 text-right text-slate-600">
                  $100–300
                </td>
                <td className="px-4 py-3 text-right text-slate-600">
                  6–12 mo
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">
                  Ductwork in unconditioned spaces
                </td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">
                  $200–400
                </td>
                <td className="px-4 py-3 text-right text-slate-600">
                  $300–800
                </td>
                <td className="px-4 py-3 text-right text-slate-600">
                  12–24 mo
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-slate-600 mt-4 text-sm">
          Numbers vary by climate, house age, and current sealing. The pattern
          holds:{' '}
          <strong>cheap fixes at the top, expensive fixes at the bottom</strong>
          . Always do the cheap ones first.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Where air leaks actually hide
        </h2>
        <p className="text-slate-700 mb-4">
          Most people picture drafts under doors and around windows. The bigger
          leaks are often where you can&apos;t feel them.
        </p>
        <ul className="space-y-3 text-slate-700 list-disc list-inside">
          <li>
            <strong>Attic access hatch</strong> — a common 2x3 ft gap with no
            weatherstripping
          </li>
          <li>
            <strong>Recessed ceiling lights</strong> — can lights leak air
            straight into the attic
          </li>
          <li>
            <strong>Electrical outlets on exterior walls</strong> — gaps behind
            the box go straight through the wall
          </li>
          <li>
            <strong>Plumbing and wire penetrations</strong> — every hole drilled
            through a top plate
          </li>
          <li>
            <strong>Chimney chase</strong> — the gap between chimney and framing
          </li>
          <li>
            <strong>Basement rim joists</strong> — the wood frame where the
            foundation meets the house
          </li>
          <li>
            <strong>Duct boots and registers</strong> — gaps where the duct
            meets drywall
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          How to find leaks in your home
        </h2>
        <ol className="space-y-3 text-slate-700 list-decimal list-inside">
          <li>
            <strong>Incense or smoke test</strong> — hold a lit incense stick
            near suspect areas on a windy day. Watch where the smoke blows
          </li>
          <li>
            <strong>Flashlight test at night</strong> — have someone shine a
            light from outside; look for any brightness through gaps
          </li>
          <li>
            <strong>Feel for drafts</strong> — outlets, door frames, window
            trim, baseboards on exterior walls
          </li>
          <li>
            <strong>Thermal camera</strong> — $200–$400 for a decent one, or
            borrow/rent from a hardware store. Reveals hot and cold spots
            instantly
          </li>
          <li>
            <strong>Professional blower door test</strong> — $250–$500, or free
            through many utility energy audit programs
          </li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          How to fix air leaks (DIY)
        </h2>
        <div className="space-y-4">
          {[
            {
              fix: 'Outlet and switch gaskets',
              cost: '$10–$30',
              how: 'Pre-cut foam gaskets behind every exterior-wall outlet and switch plate. Takes 30 minutes for the whole house.',
            },
            {
              fix: 'Door sweeps and thresholds',
              cost: '$30–$100',
              how: 'Attach to bottom of doors, add foam or rubber threshold seals. Biggest single fix for most homes.',
            },
            {
              fix: 'Window weatherstripping',
              cost: '$20–$60',
              how: 'V-strip or foam tape in window channels. Keeps operable windows sealed when closed.',
            },
            {
              fix: 'Caulk around window trim',
              cost: '$10–$30',
              how: 'Clear caulk along interior and exterior trim edges. Re-do every 5–7 years.',
            },
            {
              fix: 'Attic hatch weatherstrip',
              cost: '$20–$50',
              how: 'Adhesive weatherstrip around the hatch perimeter, plus an insulated cover.',
            },
            {
              fix: 'Spray foam for penetrations',
              cost: '$15–$40',
              how: 'Fill gaps around pipes, wires, and ducts with expanding foam. Do NOT use around chimney flues (fire code).',
            },
          ].map((item) => (
            <div
              key={item.fix}
              className="border border-slate-200 rounded-xl p-4"
            >
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-semibold text-slate-900">{item.fix}</h3>
                <span className="text-sm text-slate-500">{item.cost}</span>
              </div>
              <p className="text-sm text-slate-600">{item.how}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Common questions
        </h2>
        <div className="space-y-4">
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-medium text-slate-900 cursor-pointer">
              Do new windows pay for themselves?
            </summary>
            <p className="mt-3 text-slate-600">
              Rarely on energy savings alone. New windows cost $500–$1,500
              each, save $20–$50/year per window. Payback is 20–40 years.
              Better bet: caulk and weatherstrip existing windows for $20–$60
              per window.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-medium text-slate-900 cursor-pointer">
              What&apos;s the single biggest air leak in most homes?
            </summary>
            <p className="mt-3 text-slate-600">
              Usually the attic access hatch or a poorly sealed door. Both are
              cheap to fix ($20–$100) and can save $100–$200/year. Do these
              first.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-medium text-slate-900 cursor-pointer">
              Is air sealing worth paying a pro for?
            </summary>
            <p className="mt-3 text-slate-600">
              For most homes, yes. A professional air sealing job costs
              $300–$800 and typically saves $200–$400/year. Many utilities
              offer free or subsidized energy audits that include this.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-medium text-slate-900 cursor-pointer">
              Can air leaks cause bigger problems than just high bills?
            </summary>
            <p className="mt-3 text-slate-600">
              Yes — moisture issues, ice dams in winter, mold, and poor indoor
              air quality. Sealing them fixes more than just your energy bill.
            </p>
          </details>
        </div>
      </section>

      <section className="bg-slate-50 rounded-2xl p-6 text-center">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          Want to see what air leaks are costing you?
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