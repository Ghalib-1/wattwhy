'use client';

import type { Diagnosis } from '@/lib/diagnostic';

export default function BenchmarkCard({
  diagnosis,
  stateName,
}: {
  diagnosis: Diagnosis;
  stateName: string;
}) {
  const b = diagnosis.benchmark;
  if (!b) return null;

  const diff = b.effectiveRateCents - b.stateAvgCents;
  const diffPct = (diff / b.stateAvgCents) * 100;

  const status =
    diffPct > 10
      ? { label: 'Above average', color: 'text-red-600' }
      : diffPct < -10
      ? { label: 'Below average', color: 'text-green-600' }
      : { label: 'Near average', color: 'text-slate-700' };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
      <div className="flex items-baseline justify-between">
        <span className="text-slate-600">Your effective rate</span>
        <span className="font-semibold text-slate-900">
          {b.effectiveRateCents.toFixed(1)}¢/kWh
        </span>
      </div>
      <div className="flex items-baseline justify-between">
        <span className="text-slate-600">{stateName} average</span>
        <span className="font-semibold text-slate-900">
          {b.stateAvgCents.toFixed(1)}¢/kWh
        </span>
      </div>
      <div className="pt-3 border-t border-slate-100">
        <div className="flex items-baseline justify-between">
          <span className={`text-sm font-medium ${status.color}`}>
            {status.label}
          </span>
          <span className={`text-sm font-semibold ${status.color}`}>
            {diffPct >= 0 ? '+' : ''}
            {diffPct.toFixed(1)}%
          </span>
        </div>
        <p className="text-xs text-slate-500 mt-2">
          You&apos;re in the{' '}
          <span className="font-medium text-slate-700">
            {b.ratePercentile}th percentile
          </span>{' '}
          for rates in {stateName}.
        </p>
      </div>
    </div>
  );
}