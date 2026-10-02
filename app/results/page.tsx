'use client';

import { useEffect, useState } from 'react';

export default function ResultsPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const raw = localStorage.getItem('last-diagnosis');
    if (raw) setData(JSON.parse(raw));
  }, []);

  if (!data) {
    return (
      <main className="max-w-2xl mx-auto p-6">
        <p className="text-slate-600">
          No diagnosis found. <a href="/" className="text-blue-600 underline">Start here</a>.
        </p>
      </main>
    );
  }

  const d = data.diagnosis;

  return (
    <main className="max-w-3xl mx-auto p-6 pb-24">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Your diagnosis</h1>

      <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-6">
        <div className="flex items-baseline gap-3">
          <span className="text-4xl font-bold text-slate-900">
            {d.dollarSpike > 0 ? '+' : '−'}${Math.abs(d.dollarSpike).toFixed(2)}
          </span>
          <span className="text-sm text-slate-500">vs. same month last year</span>
        </div>

        <div className="mt-4 inline-block px-3 py-1 bg-white rounded-full text-sm font-medium text-slate-700">
          {d.verdict === 'rate-hike' && '⚡ Rate Hike'}
          {d.verdict === 'usage-spike' && '🔌 Usage Spike'}
          {d.verdict === 'mixed' && '🔀 Mixed Cause'}
        </div>

        <p className="mt-4 text-slate-700 leading-relaxed">{d.summary}</p>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Top likely culprits</h2>
        <div className="space-y-3">
          {d.rankedCulprits.slice(0, 5).map((c: any) => (
            <div key={c.id} className="flex items-center gap-3">
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-700">{c.name}</span>
                  <span className="font-medium text-slate-900">${c.estimatedCost.toFixed(2)}/mo</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-slate-700"
                    style={{ width: Math.min(c.shareOfSpike * 100, 100) + '%' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-10">
        <a href="/" className="px-5 py-2.5 border border-slate-300 rounded-xl hover:bg-slate-50 text-slate-700">
          Start over
        </a>
      </div>
    </main>
  );
}