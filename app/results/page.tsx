'use client';

import { useEffect, useState } from 'react';
import VerdictCard from '@/components/VerdictCard';
import RateWatch from '@/components/RateWatch';
import BreakdownChart from '@/components/BreakdownChart';
import WhatIfSlider from '@/components/WhatIfSlider';
import LeadForm from '@/components/LeadForm';

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
          No diagnosis found.{' '}
          <a href="/" className="text-blue-600 underline">
            Start here
          </a>
          .
        </p>
      </main>
    );
  }

  const d = data.diagnosis;
  const hvac = d.rankedCulprits.find((c: any) =>
    c.name.toLowerCase().includes('ac')
  );
  const hvacCost = hvac?.estimatedCost || 0;

  return (
    <main className="max-w-3xl mx-auto p-6 pb-24">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Your diagnosis</h1>

      <RateWatch state={data.state || 'CA'} />
      <VerdictCard diagnosis={d} state={data.state || 'CA'} />

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">
          Where your money went
        </h2>
        <BreakdownChart
          rateImpact={d.rateImpactDollars}
          usageImpact={d.usageImpactDollars}
        />
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">
          What if I changed something?
        </h2>
        <WhatIfSlider baseSpike={d.dollarSpike} hvacCost={hvacCost} />
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">
          Top likely culprits
        </h2>
        <div className="space-y-3">
          {d.rankedCulprits.slice(0, 5).map((c: any) => (
            <div key={c.id} className="flex items-center gap-3">
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-700">{c.name}</span>
                  <span className="font-medium text-slate-900">
                    ${c.estimatedCost.toFixed(2)}/mo
                  </span>
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

      <section className="mt-10 bg-slate-50 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          What you can do
        </h2>
        <p className="text-slate-600 mb-6">
          {d.verdict === 'rate-hike'
            ? "You can't control your utility, but you can reduce how much their rate hike costs you."
            : 'Small changes compound. Start with your biggest culprit above.'}
        </p>
        <LeadForm state={data.state || 'CA'} verdict={d.verdict} />
      </section>

      <div className="mt-10">
        <a
          href="/"
          className="px-5 py-2.5 border border-slate-300 rounded-xl hover:bg-slate-50 text-slate-700"
        >
          Start over
        </a>
      </div>
    </main>
  );
}