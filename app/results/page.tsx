'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { diagnose } from '@/lib/diagnostic';
import rates from '@/data/rates.json';
import appliances from '@/data/appliances.json';
import VerdictCard from '@/components/VerdictCard';
import RateWatch from '@/components/RateWatch';
import BreakdownChart from '@/components/BreakdownChart';
import WhatIfSlider from '@/components/WhatIfSlider';
import LeadForm from '@/components/LeadForm';
export const dynamic = 'force-dynamic';
const STATE_NAMES: Record<string, string> = {
  CA: 'California',
  TX: 'Texas',
  PA: 'Pennsylvania',
  OH: 'Ohio',
  NY: 'New York',
  FL: 'Florida',
};

const STATE_SLUGS: Record<string, string> = {
  CA: 'california',
  TX: 'texas',
  PA: 'pennsylvania',
  OH: 'ohio',
  NY: 'new-york',
  FL: 'florida',
};

export default function ResultsPage() {
  const [data, setData] = useState<any>(null);
  const [diagnosis, setDiagnosis] = useState<any>(null);

  useEffect(() => {
    const raw = localStorage.getItem('last-diagnosis');
    if (!raw) return;

    const saved = JSON.parse(raw);

    if (saved.current && saved.previous && saved.state) {
      const stateRate = (rates as Record<string, number>)[saved.state];

      const chosen = (appliances as any[]).filter((a: any) =>
        (saved.applianceIds || []).includes(a.id)
      );

     const currentMonth = new Date().toLocaleDateString('en-US', {
  month: 'long',
});

const result = diagnose(
  {
    month: currentMonth,
    total: saved.current.total,
    kwh: saved.current.kwh,
    billingDays: saved.current.billingDays,
  },
  {
    month: 'the comparison period',
    total: saved.previous.total,
    kwh: saved.previous.kwh,
    billingDays: saved.previous.billingDays,
  },
  stateRate,
  chosen,
  saved.state
);
      setData(saved);
      setDiagnosis(result);
    } else if (saved.diagnosis) {
      setData(saved);
      setDiagnosis(saved.diagnosis);
    }
  }, []);

  if (!data || !diagnosis) {
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

  const d = diagnosis;
  const hvac = d.rankedCulprits.find((c: any) =>
    c.name.toLowerCase().includes('ac')
  );
  const hvacCost = hvac?.estimatedCost || 0;

  const stateCode = data.state || 'CA';
  const stateName = STATE_NAMES[stateCode] || stateCode;
  const stateSlug = STATE_SLUGS[stateCode] || null;
  const topCulprit = d.rankedCulprits?.[0];

  return (
    <main className="max-w-3xl mx-auto p-6 pb-24">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">
        Your diagnosis
      </h1>

      <RateWatch state={stateCode} />
      <VerdictCard diagnosis={d} state={stateCode} />

      {/* DECOMPOSITION */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">
          What changed
        </h2>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-xs text-slate-500 mb-1">Rate hike</p>
            <p className="text-lg font-bold text-slate-900">
              {d.rateImpactDollars >= 0 ? '+' : '−'}$
              {Math.abs(d.rateImpactDollars).toFixed(2)}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-xs text-slate-500 mb-1">Usage change</p>
            <p className="text-lg font-bold text-slate-900">
              {d.usageImpactDollars >= 0 ? '+' : '−'}$
              {Math.abs(d.usageImpactDollars).toFixed(2)}
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <p className="text-xs text-slate-500 mb-1">Billing days</p>
            <p className="text-lg font-bold text-slate-900">
              {d.daysImpactDollars >= 0 ? '+' : '−'}$
              {Math.abs(d.daysImpactDollars).toFixed(2)}
            </p>
          </div>
        </div>
      </section>

      {/* BENCHMARK */}
      {d.benchmark && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            How you compare
          </h2>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3">
            <div className="flex items-baseline justify-between">
              <span className="text-slate-600">Your effective rate</span>
              <span className="font-semibold text-slate-900">
                {d.benchmark.effectiveRateCents.toFixed(1)}¢/kWh
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-slate-600">
                {stateName} average
              </span>
              <span className="font-semibold text-slate-900">
                {d.benchmark.stateAvgCents.toFixed(1)}¢/kWh
              </span>
            </div>
            <div className="pt-2 border-t border-slate-100">
              <p className="text-sm text-slate-700">
                You&apos;re in the{' '}
                <span className="font-semibold text-slate-900">
                  {d.benchmark.ratePercentile}th percentile
                </span>{' '}
                for electricity rates in {stateName}.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* BREAKDOWN CHART */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">
          Where your money went
        </h2>
        <BreakdownChart
          rateImpact={d.rateImpactDollars}
          usageImpact={d.usageImpactDollars}
        />
      </section>

      {/* TRANSLATION */}
      {d.translation && (
        <section className="mt-10">
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <p className="text-sm font-medium text-blue-900 mb-1">
              In plain terms
            </p>
            <p className="text-slate-800">{d.translation}</p>
          </div>
        </section>
      )}

      {/* WHAT IF SLIDER */}
      <section className="mt-10 scroll-mt-8" id="whatif">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">
          What if I changed something?
        </h2>
        <WhatIfSlider baseSpike={d.dollarSpike} hvacCost={hvacCost} />
      </section>

      {/* CULPRITS */}
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
                    style={{
                      width: Math.min(c.shareOfSpike * 100, 100) + '%',
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LEAD FORM */}
      <section className="mt-10 bg-slate-50 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">
          What you can do
        </h2>
        <p className="text-slate-600 mb-6">
          {d.verdict === 'rate-hike'
            ? "You can't control your utility, but you can reduce how much their rate hike costs you."
            : 'Small changes compound. Start with your biggest culprit above.'}
        </p>
        <LeadForm state={stateCode} verdict={d.verdict} />
      </section>

      {/* NEXT STEPS */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">
          What to do next
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {stateSlug && (
            <Link
              href={`/${stateSlug}`}
              className="block bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-400 hover:shadow-md transition"
            >
              <div className="text-2xl mb-2">📍</div>
              <h3 className="font-semibold text-slate-900 mb-1">
                {stateName} rates
              </h3>
              <p className="text-sm text-slate-600 mb-3">
                See average rates, top utilities, and why {stateName} bills
                look the way they do.
              </p>
              <span className="text-sm text-blue-600 font-medium">
                View state page →
              </span>
            </Link>
          )}

          <a
            href="#whatif"
            className="block bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-400 hover:shadow-md transition"
          >
            <div className="text-2xl mb-2">🎛️</div>
            <h3 className="font-semibold text-slate-900 mb-1">
              Try the simulator
            </h3>
            <p className="text-sm text-slate-600 mb-3">
              Adjust your thermostat and see how much you&apos;d save per
              month.
            </p>
            <span className="text-sm text-blue-600 font-medium">
              Jump to simulator →
            </span>
          </a>

          {topCulprit && (
            <div className="bg-white border border-slate-200 rounded-2xl p-5 opacity-70">
              <div className="text-2xl mb-2">🔌</div>
              <h3 className="font-semibold text-slate-900 mb-1">
                {topCulprit.name} cost
              </h3>
              <p className="text-sm text-slate-600 mb-3">
                A deep dive on your biggest suspected culprit — how much it
                costs per hour, per month, per year.
              </p>
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                Coming soon
              </span>
            </div>
          )}
        </div>
      </section>

      <div className="mt-10">
        <a
          href="/"
          onClick={() => {
            try {
              localStorage.removeItem('last-diagnosis');
            } catch {}
          }}
          className="px-5 py-2.5 border border-slate-300 rounded-xl hover:bg-slate-50 text-slate-700"
        >
          Start over
        </a>
      </div>
    </main>
  );
}