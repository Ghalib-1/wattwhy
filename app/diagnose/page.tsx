'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { diagnose } from '@/lib/diagnostic';
import rates from '@/data/rates.json';
import appliances from '@/data/appliances.json';

interface Appliance {
  id: string;
  name: string;
  watts: number;
  hoursPerMonth: number;
}

export default function DiagnosePage() {
  const router = useRouter();
  const [prevTotal, setPrevTotal] = useState('');
  const [prevKwh, setPrevKwh] = useState('');
  const [state, setState] = useState('CA');
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    const pending = localStorage.getItem('pending-bill');
    if (!pending) router.push('/');
  }, [router]);

  const toggle = (id: string) => {
    setSelected((s) =>
      s.includes(id) ? s.filter((x) => x !== id) : [...s, id]
    );
  };

  const handleDiagnose = () => {
    const pending = JSON.parse(localStorage.getItem('pending-bill') || '{}');
    const stateRate = (rates as Record<string, number>)[state];

    const chosen = (appliances as Appliance[]).filter((a) =>
      selected.includes(a.id)
    );

    const result = diagnose(
      { month: 'current', total: pending.total, kwh: pending.kwh },
      {
        month: 'previous',
        total: parseFloat(prevTotal),
        kwh: parseFloat(prevKwh),
      },
      stateRate,
      chosen
    );

    localStorage.setItem(
      'last-diagnosis',
      JSON.stringify({ diagnosis: result, state })
    );
    router.push('/results');
  };

  const canSubmit = prevTotal && prevKwh && selected.length > 0;

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold text-slate-900 mb-2">One more step</h1>
      <p className="text-slate-600 mb-8">
        We need last year&apos;s same-month bill to compare, plus a few details.
      </p>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Last year&apos;s bill ($)
            </label>
            <input
              type="number"
              value={prevTotal}
              onChange={(e) => setPrevTotal(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Last year&apos;s kWh
            </label>
            <input
              type="number"
              value={prevKwh}
              onChange={(e) => setPrevKwh(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Your state
          </label>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-xl"
          >
            {Object.keys(rates).map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">
            What&apos;s running in your home? (pick all that apply)
          </label>
          <div className="grid grid-cols-2 gap-2">
            {(appliances as Appliance[]).map((a) => (
              <label
                key={a.id}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border cursor-pointer text-sm transition ${
                  selected.includes(a.id)
                    ? 'bg-blue-50 border-blue-400 text-blue-900'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
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

        <button
          onClick={handleDiagnose}
          disabled={!canSubmit}
          className="w-full py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 disabled:opacity-40"
        >
          Show me where my money went →
        </button>
      </div>
    </main>
  );
}