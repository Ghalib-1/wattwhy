'use client';

import type { Diagnosis } from '@/lib/diagnostic';

export default function VerdictCard({
  diagnosis,
}: {
  diagnosis: Diagnosis;
  state?: string;
}) {
  const { dollarSpike, verdict, rateChangePercent, usageChangePercent } =
    diagnosis;
  const isUp = dollarSpike > 0;

  const color =
    verdict === 'rate-hike'
      ? 'bg-amber-50 border-amber-300'
      : verdict === 'usage-spike'
      ? 'bg-blue-50 border-blue-300'
      : verdict === 'days-change'
      ? 'bg-slate-50 border-slate-300'
      : 'bg-purple-50 border-purple-300';

  const label =
    verdict === 'rate-hike'
      ? '⚡ Rate Hike'
      : verdict === 'usage-spike'
      ? '🔌 Usage Spike'
      : verdict === 'days-change'
      ? '📅 Billing Period Change'
      : '🔀 Mixed Cause';

  return (
    <div className={`rounded-2xl border-2 p-6 ${color}`}>
      <div className="flex items-baseline gap-3">
        <span className="text-4xl font-bold text-slate-900">
          {isUp ? '+' : '−'}${Math.abs(dollarSpike).toFixed(2)}
        </span>
        <span className="text-sm text-slate-500">
          vs. same month last year
        </span>
      </div>

      <div className="mt-4 inline-block px-3 py-1 bg-white rounded-full text-sm font-medium text-slate-700">
        {label}
      </div>

      <p className="mt-4 text-slate-700 leading-relaxed">
        {diagnosis.summary}
      </p>

      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-slate-500">Rate change</p>
          <p
            className={`font-semibold ${
              rateChangePercent > 0 ? 'text-red-600' : 'text-green-600'
            }`}
          >
            {(rateChangePercent * 100).toFixed(1)}%
          </p>
        </div>
        <div>
          <p className="text-slate-500">Usage change</p>
          <p
            className={`font-semibold ${
              usageChangePercent > 0 ? 'text-red-600' : 'text-green-600'
            }`}
          >
            {(usageChangePercent * 100).toFixed(1)}%
          </p>
        </div>
      </div>
    </div>
  );
}