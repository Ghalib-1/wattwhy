'use client';

import { useState } from 'react';

export default function LeadForm({
  state,
  verdict,
}: {
  state: string;
  verdict: string;
}) {
  const [zip, setZip] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-white rounded-xl p-6 text-center">
        <p className="text-lg font-semibold text-slate-900">Good move. ✓</p>
        <p className="text-slate-600 mt-2">
          Check your inbox — a local energy auditor will reach out within 24
          hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Your ZIP code
        </label>
        <input
          type="text"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          placeholder="e.g. 90210"
          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full px-5 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700"
      >
        Get my free energy audit →
      </button>
      <p className="text-xs text-slate-500 text-center">
        No spam. One local provider, one call. You choose.
      </p>
    </form>
  );
}