'use client';

import { useState } from 'react';

export default function WhatIfSlider({
  baseSpike,
  hvacCost,
}: {
  baseSpike: number;
  hvacCost: number;
}) {
  const [thermostatDelta, setThermostatDelta] = useState(0);
  const [ledSwap, setLedSwap] = useState(false);

  const hvacSavings = hvacCost * (Math.abs(thermostatDelta) * 0.04);
  const ledSavings = ledSwap ? 8 : 0;
  const totalSavings = hvacSavings + ledSavings;
  const newSpike = Math.max(baseSpike - totalSavings, 0);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6">
      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Adjust thermostat by {thermostatDelta > 0 ? '+' : ''}
          {thermostatDelta}°F
        </label>
        <input
          type="range"
          min={-4}
          max={4}
          step={1}
          value={thermostatDelta}
          onChange={(e) => setThermostatDelta(parseInt(e.target.value))}
          className="w-full accent-blue-600"
        />
        <p className="text-xs text-slate-500 mt-1">
          {thermostatDelta < 0
            ? 'Raising AC or lowering heat saves money'
            : thermostatDelta > 0
            ? 'Higher usage'
            : 'No change'}
        </p>
      </div>

      <label className="flex items-center gap-3 mb-6">
        <input
          type="checkbox"
          checked={ledSwap}
          onChange={(e) => setLedSwap(e.target.checked)}
          className="w-4 h-4 accent-blue-600"
        />
        <span className="text-sm text-slate-700">
          Swap 5 bulbs to LED (~$8/mo savings)
        </span>
      </label>

      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
        <p className="text-sm text-green-800">New estimated spike</p>
        <p className="text-3xl font-bold text-green-900">
          ${newSpike.toFixed(2)}
        </p>
        <p className="text-sm text-green-700 mt-1">
          You save{' '}
          <span className="font-semibold">${totalSavings.toFixed(2)}/mo</span> —
          that&apos;s{' '}
          <span className="font-semibold">
            ${(totalSavings * 12).toFixed(0)}/year
          </span>
          .
        </p>
      </div>
    </div>
  );
}