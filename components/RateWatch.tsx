'use client';

import { useEffect, useState } from 'react';
import history from '@/data/rates-history.json';

export default function RateWatch({ state }: { state: string }) {
  const [delta, setDelta] = useState<number | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(`rate-${state}`);
    if (!stored) return;

    const lastSeen = JSON.parse(stored);
    const series = (history as any)[state] || [];
    const current = series[series.length - 1];
    if (!current) return;

    const change = (current.rate - lastSeen.rate) / lastSeen.rate;
    if (Math.abs(change) > 0.01) setDelta(change);
  }, [state]);

  if (delta === null) return null;

  return (
    <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 my-4">
      <p className="text-amber-900 font-medium">
        ⚡ Rates in {state} changed {delta > 0 ? 'up' : 'down'}{' '}
        {(Math.abs(delta) * 100).toFixed(1)}% since your last visit.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="mt-2 text-sm text-amber-700 underline"
      >
        Re-run my diagnosis →
      </button>
    </div>
  );
}