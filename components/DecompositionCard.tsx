'use client';

import type { Diagnosis } from '@/lib/diagnostic';

export default function DecompositionCard({
  diagnosis,
}: {
  diagnosis: Diagnosis;
}) {
  const { rateImpactDollars, usageImpactDollars, daysImpactDollars } =
    diagnosis;

  const fmt = (n: number) =>
    `${n >= 0 ? '+' : '−'}$${Math.abs(n).toFixed(2)}`;

  const color = (n: number) =>
    n > 5 ? 'text-red-600' : n < -5 ? 'text-green-600' : 'text-slate-700';

  const parts = [
    {
      label: 'Rate change',
      value: rateImpactDollars,
      desc: 'utility raised prices',
    },
    {
      label: 'Usage change',
      value: usageImpactDollars,
      desc: 'you used more or less power',
    },
    {
      label: 'Billing days',
      value: daysImpactDollars,
      desc: 'period length difference',
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {parts.map((p) => (
        <div
          key={p.label}
          className="bg-white border border-slate-200 rounded-xl p-4"
        >
          <p className="text-xs text-slate-500 mb-1">{p.label}</p>
          <p className={`text-lg font-bold ${color(p.value)}`}>
            {fmt(p.value)}
          </p>
          <p className="text-xs text-slate-400 mt-1">{p.desc}</p>
        </div>
      ))}
    </div>
  );
}