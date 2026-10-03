import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vampire Power: What Uses Electricity When Nothing Is On?',
  description:
    'Chargers, TVs, cable boxes, and game consoles drain power even when idle. Find out what your vampire loads cost per year — and how to stop them.',
  keywords: [
    'vampire power',
    'phantom load',
    'what uses electricity when nothing is on',
    'do chargers use electricity when not plugged in',
    'standby power',
    'always-on devices electricity cost',
  ],
};

export default function VampirePowerPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">
        Vampire Power: What Uses Electricity When Nothing Is On?
      </h1>

      <p className="text-lg text-slate-600 mb-8">
        The average U.S. home spends <strong>$100–$200 per year</strong> on
        devices that draw power even when they&apos;re not being used. Chargers,
        TVs, cable boxes, game consoles, and smart speakers are all quietly
        draining your wallet 24/7. This is called &quot;vampire power&quot; (or
        phantom load, or standby power). Here&apos;s what actually causes it and
        how to stop it.
      </p>

      <Link
        href="/"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 mb-12"
      >
        Run my free diagnostic →
      </Link>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          What is vampire power?
        </h2>
        <p className="text-slate-700 mb-4">
          Vampire power is the electricity a device consumes when it&apos;s
          plugged in but not actively in use. That includes:
        </p>
        <ul className="space-y-2 text-slate-700 list-disc list-inside">
          <li>Phone chargers plugged in with no phone attached</li>
          <li>TVs in &quot;off&quot; mode (not fully unplugged)</li>
          <li>Cable boxes and DVRs (they never truly turn off)</li>
          <li>Game consoles in standby mode</li>
          <li>Smart speakers, smart displays, smart hubs</li>
          <li>Microwave clocks, coffee maker displays, oven clocks</li>
          <li>Laptop chargers with no laptop attached</li>
          <li>Modems, routers, and mesh Wi-Fi systems</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          How much does vampire power cost?
        </h2>
        <p className="text-slate-700 mb-4">
          The typical household has 20–40 devices drawing standby power. Here
          are the most common culprits and their annual cost at a 15¢/kWh rate:
        </p>

        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr className="text-left">
                <th className="px-4 py-3 font-medium text-slate-700">
                  Device
                </th>
                <th className="px-4 py-3 font-medium text-slate-700 text-right">
                  Watts (standby)
                </th>
                <th className="px-4 py-3 font-medium text-slate-700 text-right">
                  Annual Cost
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="px-4 py-3 text-slate-700">
                  Cable box / DVR
                </td>
                <td className="px-4 py-3 text-right text-slate-600">
                  25–40W
                </td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">
                  $33–52
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">
                  Game console (standby)
                </td>
                <td className="px-4 py-3 text-right text-slate-600">
                  10–15W
                </td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">
                  $13–20
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">
                  Desktop computer
                </td>
                <td className="px-4 py-3 text-right text-slate-600">
                  5–10W
                </td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">
                  $7–13
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">
                  TV (standby)
                </td>
                <td className="px-4 py-3 text-right text-slate-600">
                  3–5W
                </td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">
                  $4–7
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">
                  Phone charger (idle)
                </td>
                <td className="px-4 py-3 text-right text-slate-600">
                  0.1–0.5W
                </td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">
                  $0.15–0.65
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">
                  Smart speaker
                </td>
                <td className="px-4 py-3 text-right text-slate-600">
                  2–3W
                </td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">
                  $2.60–4
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">
                  Wi-Fi router
                </td>
                <td className="px-4 py-3 text-right text-slate-600">
                  5–10W
                </td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">
                  $7–13
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-slate-700">
                  Microwave clock
                </td>
                <td className="px-4 py-3 text-right text-slate-600">
                  1–3W
                </td>
                <td className="px-4 py-3 text-right font-medium text-slate-900">
                  $1.30–4
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-slate-600 mt-4 text-sm">
          Rates vary. Multiply the annual cost by (your rate ÷ 15¢) for a
          personalized estimate.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          Does unplugging a charger really save money?
        </h2>
        <p className="text-slate-700 mb-4">
          <strong>Unplugging your phone charger alone saves roughly $0.15–$0.65
          per year.</strong> That&apos;s it. A plugged-in charger with no phone
          attached draws almost nothing.
        </p>
        <p className="text-slate-700 mb-4">
          The real savings come from devices with displays, motors, or constant
          network connectivity:
        </p>
        <ul className="space-y-2 text-slate-700 list-disc list-inside">
          <li>
            <strong>Cable box</strong> — often the single worst offender in
            the house
          </li>
          <li>
            <strong>Game consoles</strong> — Standby mode is not the same as
            off
          </li>
          <li>
            <strong>Older desktop computers</strong> — Sleep mode can still
            draw power
          </li>
          <li>
            <strong>Older TVs</strong> — Modern OLEDs/LEDs draw almost nothing
            in standby
          </li>
        </ul>
        <p className="text-slate-700 mt-4">
          Focus on the big draws, not the chargers.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
          How to reduce vampire power in your home
        </h2>
        <ol className="space-y-3 text-slate-700 list-decimal list-inside">
          <li>
            <strong>Use smart power strips</strong> — Kill the whole cluster at
            once. The TV strip kills the TV, soundbar, and game console
            together.
          </li>
          <li>
            <strong>Unplug rarely used devices</strong> — Guest room TV, second
            game console, old printer.
          </li>
          <li>
            <strong>Enable real sleep mode</strong> — Set computers and consoles
            to fully power down, not standby.
          </li>
          <li>
            <strong>Replace old cable boxes</strong> — Ask your provider for
            the newest model. Newer boxes draw 30–50% less standby power.
          </li>
          <li>
            <strong>Consider a whole-home energy monitor</strong> — Sense,
            Emporia Vue, and similar devices show exactly what&apos;s drawing
            power in real time.
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
              Do phone chargers really drain electricity when nothing is
              plugged in?
            </summary>
            <p className="mt-3 text-slate-600">
              Barely. A plugged-in charger with no phone draws 0.1–0.5W. Over a
              year, that&apos;s $0.15–$0.65. Not worth worrying about. But
              20–30 chargers, tablets, and small devices together can add up to
              $10–20/year.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-medium text-slate-900 cursor-pointer">
              What&apos;s the biggest vampire in a typical home?
            </summary>
            <p className="mt-3 text-slate-600">
              Usually the cable box or DVR. Older models can draw 25–40W
              continuously — $33–$52 per year. The second most common is a
              game console in standby mode.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-medium text-slate-900 cursor-pointer">
              Is vampire power really 10% of my bill?
            </summary>
            <p className="mt-3 text-slate-600">
              For most homes, it&apos;s 5–10% of the electricity bill.
              Homes with a lot of electronics (multiple TVs, cable boxes,
              consoles, smart devices) skew toward the higher end.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-medium text-slate-900 cursor-pointer">
              Does unplugging everything when I leave for vacation help?
            </summary>
            <p className="mt-3 text-slate-600">
              Yes, marginally. A two-week vacation with everything unplugged
              saves about $5–15. Not huge, but free money and reduces fire
              risk.
            </p>
          </details>
        </div>
      </section>

      <section className="bg-slate-50 rounded-2xl p-6 text-center">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          Want to know what your specific culprits cost?
        </h2>
        <p className="text-slate-600 mb-4">
          Enter your last two bills and get a personalized breakdown of where
          the money went — including vampire loads.
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