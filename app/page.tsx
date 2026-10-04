'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import rates from '@/data/rates.json';
import rateHistory from '@/data/rates-history.json';
import appliances from '@/data/appliances.json';

const STATE_INFO: Record<
  string,
  { name: string; slug: string; topCities: string }
> = {
  CA: { name: 'California', slug: 'california', topCities: 'LA, SF, San Diego' },
  TX: { name: 'Texas', slug: 'texas', topCities: 'Houston, Dallas, Austin' },
  PA: {
    name: 'Pennsylvania',
    slug: 'pennsylvania',
    topCities: 'Philadelphia, Pittsburgh',
  },
  OH: { name: 'Ohio', slug: 'ohio', topCities: 'Columbus, Cleveland' },
};

export default function Home() {
  const router = useRouter();
  const [state, setState] = useState('CA');
  const [currentTotal, setCurrentTotal] = useState('');
  const [currentKwh, setCurrentKwh] = useState('');
  const [currentDays, setCurrentDays] = useState('');
  const [previousTotal, setPreviousTotal] = useState('');
  const [previousKwh, setPreviousKwh] = useState('');
  const [previousDays, setPreviousDays] = useState('');
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [welcomeBack, setWelcomeBack] = useState<{
    lastBill: number;
    lastMonth: string;
  } | null>(null);

  // Welcome-back detection
  useEffect(() => {
    try {
      const history = JSON.parse(
        localStorage.getItem('bill-history') || '[]'
      );
      if (history.length > 0) {
        const last = history[0];
        setWelcomeBack({
          lastBill: last.current.total,
          lastMonth: new Date(last.savedAt).toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
          }),
        });

        // Pre-fill previous bill with last month's current bill
        setPreviousTotal(String(last.current.total));
        setPreviousKwh(String(last.current.kwh));
        setPreviousDays(String(last.current.billingDays || 30));
        setState(last.state || 'CA');
      }
    } catch {}
  }, []);

  const canSubmit =
    !!currentTotal &&
    !!currentKwh &&
    !!previousTotal &&
    !!previousKwh &&
    !loading;

  const toggle = (id: string) => {
    setSelected((s) =>
      s.includes(id) ? s.filter((x) => x !== id) : [...s, id]
    );
  };

  const handleSubmit = () => {
    if (!canSubmit) return;
    setLoading(true);

    const payload = {
      state,
      current: {
        total: parseFloat(currentTotal),
        kwh: parseFloat(currentKwh),
        billingDays: parseInt(currentDays) || 30,
      },
      previous: {
        total: parseFloat(previousTotal),
        kwh: parseFloat(previousKwh),
        billingDays: parseInt(previousDays) || 30,
      },
      applianceIds: selected,
      savedAt: new Date().toISOString(),
    };

    // Save to bill history (keep last 12 entries)
    try {
      const history = JSON.parse(
        localStorage.getItem('bill-history') || '[]'
      );
      history.unshift(payload);
      localStorage.setItem(
        'bill-history',
        JSON.stringify(history.slice(0, 12))
      );
    } catch {}

    // Save for the results page
    localStorage.setItem('last-diagnosis', JSON.stringify(payload));

    setTimeout(() => {
      router.push('/results');
    }, 150);
  };

  const states = Object.entries(STATE_INFO).map(([code, info]) => {
    const rate = (rates as Record<string, number>)[code];
    const history = (rateHistory as any)[code] || [];
    const latest = history[history.length - 1]?.rate || rate;
    const previous = history[history.length - 2]?.rate || latest;
    const delta = latest - previous;
    return { code, ...info, rate, delta };
  });

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-12 text-center">
        <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full mb-6">
          Updated for October 2026 rates
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          Why is my electric bill
          <br />
          so high?
        </h1>

        <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto">
          Enter your last two bills. Get a personalized breakdown of what
          changed — rate hike vs. usage vs. billing days — in 10 seconds.
        </p>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-500">
          <span>✓ Free</span>
          <span>✓ No account</span>
          <span>✓ Private</span>
        </div>
      </section>

      {/* WELCOME BACK BANNER */}
      {welcomeBack && (
        <section className="max-w-2xl mx-auto px-6 pb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex items-start gap-3">
            <div className="text-2xl">👋</div>
            <div className="flex-1">
              <p className="text-sm font-medium text-blue-900">
                Welcome back — last saved {welcomeBack.lastMonth}
              </p>
              <p className="text-xs text-slate-600 mt-1">
                Your last bill was ${welcomeBack.lastBill}. We&apos;ve
                pre-filled it as the comparison below. Just add this
                month&apos;s numbers.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* THE TOOL */}
      <section className="max-w-2xl mx-auto px-6 pb-16">
        <div className="bg-slate-50 rounded-3xl p-6 md:p-8 space-y-6">
          {/* STATE */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Your state
            </label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl bg-white"
            >
              {Object.keys(rates).map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
          </div>

          {/* CURRENT BILL */}
          <div>
            <h2 className="font-semibold text-slate-900 mb-3">
              This month&apos;s bill
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Bill total ($)
                </label>
                <input
                  type="number"
                  value={currentTotal}
                  onChange={(e) => setCurrentTotal(e.target.value)}
                  placeholder="264.00"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Usage (kWh)
                </label>
                <input
                  type="number"
                  value={currentKwh}
                  onChange={(e) => setCurrentKwh(e.target.value)}
                  placeholder="1180"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Days
                </label>
                <input
                  type="number"
                  value={currentDays}
                  onChange={(e) => setCurrentDays(e.target.value)}
                  placeholder="30"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* PREVIOUS BILL */}
          <div>
            <h2 className="font-semibold text-slate-900 mb-3">
              Same month last year
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Bill total ($)
                </label>
                <input
                  type="number"
                  value={previousTotal}
                  onChange={(e) => setPreviousTotal(e.target.value)}
                  placeholder="187.00"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Usage (kWh)
                </label>
                <input
                  type="number"
                  value={previousKwh}
                  onChange={(e) => setPreviousKwh(e.target.value)}
                  placeholder="850"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Days
                </label>
                <input
                  type="number"
                  value={previousDays}
                  onChange={(e) => setPreviousDays(e.target.value)}
                  placeholder="30"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* APPLIANCE PICKER */}
          <div className="border-t border-slate-200 pt-6">
            <h2 className="font-semibold text-slate-900 mb-1">
              What&apos;s running in your home?
            </h2>
            <p className="text-xs text-slate-500 mb-3">
              Optional — improves the culprit ranking below.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {(appliances as any[]).map((a) => (
                <label
                  key={a.id}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border cursor-pointer text-sm transition ${
                    selected.includes(a.id)
                      ? 'bg-blue-50 border-blue-400 text-blue-900'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selected.includes(a.id)}
                    onChange={() => toggle(a.id)}
                    className="accent-blue-600"
                  />
                  {a.name}
                </label>
              ))}
            </div>
          </div>

          {/* SUBMIT */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canSubmit}
            className={`w-full py-3 rounded-xl font-medium transition-all ${
              !canSubmit
                ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                : loading
                ? 'bg-slate-700 text-white cursor-wait'
                : 'bg-slate-900 text-white hover:bg-slate-700 active:scale-[0.98]'
            }`}
          >
            {loading ? 'Analyzing…' : 'Show me where my money went →'}
          </button>

          {!canSubmit && !loading && (
            <p className="text-xs text-slate-400 text-center">
              Fill in bill totals and usage to continue
            </p>
          )}
        </div>

        <p className="text-center text-xs text-slate-400 mt-4">
          We never store your bill on our servers. Everything stays in your
          browser.
        </p>
      </section>

      {/* STATE GRID */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Find your state
          </h2>
          <p className="text-slate-600">
            State-specific rates, utility info, and bill breakdowns.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {states.map((s) => (
            <Link
              key={s.code}
              href={`/${s.slug}`}
              className="block bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-400 hover:shadow-md transition"
            >
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-semibold text-slate-900">{s.name}</h3>
                <span className="text-xs text-slate-400">{s.code}</span>
              </div>
              <p className="text-2xl font-bold text-slate-900 mb-1">
                {(s.rate * 100).toFixed(1)}¢
              </p>
              <p className="text-xs text-slate-500 mb-3">per kWh average</p>
              <p className="text-xs text-slate-400 mb-4">{s.topCities}</p>
              <span className="text-sm text-blue-600 font-medium">
                Run diagnostic →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* RATE WATCH */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Live rate changes
          </h2>
          <p className="text-slate-600">
            Tracking the latest electricity rate updates across our states.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl divide-y divide-slate-200">
          {states.map((s) => (
            <div
              key={s.code}
              className="flex items-center justify-between px-6 py-4"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-2 h-2 rounded-full ${
                    s.delta > 0 ? 'bg-red-500' : 'bg-green-500'
                  }`}
                />
                <span className="text-slate-900 font-medium">{s.name}</span>
              </div>
              <div className="text-right">
                <span
                  className={`text-sm font-medium ${
                    s.delta > 0 ? 'text-red-600' : 'text-green-600'
                  }`}
                >
                  {s.delta > 0 ? '↑' : '↓'}{' '}
                  {Math.abs(s.delta * 100).toFixed(2)}¢
                </span>
                <span className="text-xs text-slate-400 ml-2">
                  latest period
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GUIDES */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Guides &amp; tools
          </h2>
          <p className="text-slate-600">Understand every part of your bill.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href="/vampire-power"
            className="block bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-400 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-slate-900 mb-2">
              Vampire Power Guide
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              What uses electricity when nothing is on.
            </p>
            <span className="text-sm text-blue-600 font-medium">
              Read guide →
            </span>
          </Link>

          <Link
            href="/air-conditioning"
            className="block bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-400 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-slate-900 mb-2">AC Cost Guide</h3>
            <p className="text-sm text-slate-600 mb-4">
              What your air conditioning costs per month.
            </p>
            <span className="text-sm text-blue-600 font-medium">
              Read guide →
            </span>
          </Link>

          <Link
            href="/water-heater"
            className="block bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-400 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-slate-900 mb-2">
              Water Heater Cost
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              What your water heater costs monthly.
            </p>
            <span className="text-sm text-blue-600 font-medium">
              Read guide →
            </span>
          </Link>

          <Link
            href="/heating"
            className="block bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-400 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-slate-900 mb-2">
              Heating Cost Guide
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              Furnace, space heater, heat pump — what it all costs.
            </p>
            <span className="text-sm text-blue-600 font-medium">
              Read guide →
            </span>
          </Link>

          <Link
            href="/air-leaks"
            className="block bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-400 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-slate-900 mb-2">
              Air Leaks Guide
            </h3>
            <p className="text-sm text-slate-600 mb-4">
              How much leaks cost — and how to fix them for cheap.
            </p>
            <span className="text-sm text-blue-600 font-medium">
              Read guide →
            </span>
          </Link>
        </div>
      </section>

      {/* WHY */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              t: 'Rate hike or usage?',
              d: 'Most tools blame your appliances. We separate utility rate hikes from your actual usage — so you know what you can actually control.',
            },
            {
              t: 'Personal, not generic',
              d: 'Your bill, your state, your comparison month. The breakdown ranks what matters for your home, not the national average.',
            },
            {
              t: 'Built for action',
              d: 'Every diagnosis ends with the one change that saves the most. No filler content. Just your number and your next step.',
            },
          ].map((f) => (
            <div key={f.t}>
              <h3 className="font-semibold text-slate-900">{f.t}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {f.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8 text-center text-xs text-slate-400">
        <p>Rates last updated October 2026 · Sources: EIA, state PUCs</p>
        <p className="mt-1">
          Not affiliated with any utility. Estimates only.
        </p>
      </footer>
    </main>
  );
}