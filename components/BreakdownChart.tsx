'use client';

export default function BreakdownChart({
  rateImpact,
  usageImpact,
}: {
  rateImpact: number;
  usageImpact: number;
}) {
  const total = Math.abs(rateImpact) + Math.abs(usageImpact) || 1;
  const rateWidth = (Math.abs(rateImpact) / total) * 100;
  const usageWidth = (Math.abs(usageImpact) / total) * 100;

  return (
    <div className="space-y-4">
      <div>
        <div className="flex justify-between text-sm mb-1">
          <span className="text-slate-700">Rate hike impact</span>
          <span className="font-medium text-slate-900">
            ${Math.abs(rateImpact).toFixed(2)}
          </span>
        </div>
        <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-amber-500"
            style={{ width: `${rateWidth}%` }}
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between text-sm mb-1">
          <span className="text-slate-700">Your usage impact</span>
          <span className="font-medium text-slate-900">
            ${Math.abs(usageImpact).toFixed(2)}
          </span>
        </div>
        <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500"
            style={{ width: `${usageWidth}%` }}
          />
        </div>
      </div>
    </div>
  );
}