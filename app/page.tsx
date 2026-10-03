'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import rates from '@/data/rates.json';
import rateHistory from '@/data/rates-history.json';

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
  const [mode, setMode] = useState<'upload' | 'manual'>('manual');
  const [total, setTotal] = useState('');
  const [kwh, setKwh] = useState('');
  const [loading, setLoading] = useState(false);

  const canContinue = !!total && !!kwh;

  const handleContinue = () => {
    if (!total || !kwh) return;
    setLoading(true);

    localStorage.setItem(
      'pending-bill',
      JSON.stringify({ total: parseFloat(total), kwh: parseFloat(kwh) })
    );

    // Small delay so the "Loading…" state actually renders before navigation
    setTimeout(() => {
      router.push('/diagnose');
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
          Enter your last bill. Get a personalized breakdown of where the money
          went — in 10 seconds. No signup. Nothing leaves your browser.
        </p>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-500">
          <span>✓ Free</span>
          <span>✓ No account</span>
          <span>✓ Private</span>
        </div>
      </section>

      {/* THE TOOL */}
      <section className="max-w-2xl mx-auto px-6 pb-16">
        <div className="bg-slate-50 rounded-3xl p-6 md:p-8">
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setMode('upload')}
              className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition ${
                mode === 'upload'
                  ? 'bg-white shadow text-slate-900'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Upload bill
            </button>
            <button
              onClick={() => setMode('manual')}
              className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition ${
                mode === 'manual'
                  ? 'bg-white shadow text-slate-900'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Enter manually
            </button>
          </div>

          {mode === 'manual' ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Last month&apos;s bill total ($)
                </label>
                <input
                  type="number"
                  value={total}
                  onChange={(e) => setTotal(e.target.value)}
                  placeholder="e.g. 187.50"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Usage (kWh)
                </label>
                <input
                  type="number"
                  value={kwh}
                  onChange={(e) => setKwh(e.target.value)}
                  placeholder="e.g. 850"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                type="button"
                onClick={handleContinue}
                disabled={!canContinue || loading}
                className={`w-full py-3 rounded-xl font-medium transition-all ${
                  !canContinue
                    ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                    : loading
                    ? 'bg-slate-700 text-white cursor-wait'
                    : 'bg-slate-900 text-white hover:bg-slate-700 active:scale-[0.98] cursor-pointer'
                }`}
              >
                {loading ? 'Loading…' : 'Continue →'}
              </button>
              {!canContinue && (
                <p className="text-xs text-slate-400 text-center">
                  Enter both the bill amount and usage to continue
                </p>
              )}
            </div>
          ) : (
            <div className="text-center py-12 text-slate-500">
              <p className="text-sm">Upload feature coming soon.</p>
              <p className="text-xs mt-2">
                Use &quot;Enter manually&quot; for now — same result.
              </p>
            </div>
          )}
        </div>

        <p className="text-center text-xs text-slate-400 mt-4">
          We never store your bill. Everything is processed locally.
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

      {/* COMING SOON */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            More tools coming
          </h2>
          <p className="text-slate-600">We&apos;re building these next.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              title: 'Usage Calculator',
              desc: 'Estimate your bill from your appliances and kWh.',
            },
            {
              title: 'Bill Comparison',
              desc: 'Compare this month vs. last month side by side.',
            },
            {
              title: 'State Comparison',
              desc: 'Moving? See how rates compare across states.',
            },
          ].map((f) => (
            <div
              key={f.title}
              className="bg-white border border-slate-200 rounded-2xl p-5 opacity-70"
            >
              <h3 className="font-semibold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-600 mb-4">{f.desc}</p>
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                Coming soon
              </span>
            </div>
          ))}
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
              d: 'Your bill, your state, your suspected appliances. The breakdown ranks what matters for your home, not the national average.',
            },
            {
              t: 'Built for action',
              d: 'Every diagnosis ends with the one change that saves the most. No filler content. Just your number and your next step.',
            },
          ].map((f) => (
            <div key={f.t}>
              <h3 className="font-semibold text-slate-900">{f.t}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Common questions
        </h2>
        <div className="space-y-4">
          {[
            {
              q: 'Why did my electric bill go up so much?',
              a: "It's almost always one of two things: your utility raised rates, or you used more power. This tool tells you which one, and by how much.",
            },
            {
              q: 'What uses the most electricity in a home?',
              a: "Heating and cooling account for 60-75% of most households' usage. After that, water heating, refrigerators, and always-on devices.",
            },
            {
              q: 'Can I use this without uploading my bill?',
              a: 'Yes — use the manual entry. The diagnosis works the same way.',
            },
            {
              q: 'Is this free?',
              a: 'Completely. No account, no credit card. Optional energy audit offers appear after your diagnosis.',
            },
          ].map((f) => (
            <details
              key={f.q}
              className="group border border-slate-200 rounded-xl p-4"
            >
              <summary className="font-medium text-slate-900 cursor-pointer list-none flex justify-between items-center">
                {f.q}
                <span className="text-slate-400 group-open:rotate-180 transition">
                  ▾
                </span>
              </summary>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8 text-center text-xs text-slate-400">
        <p>Rates last updated October 2026 · Sources: EIA, state PUCs</p>
        <p className="mt-1">Not affiliated with any utility. Estimates only.</p>
      </footer>
    </main>
  );
}