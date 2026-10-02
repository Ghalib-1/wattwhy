export interface Bill {
  month: string;
  total: number;
  kwh: number;
  rate?: number;
}

export interface Appliance {
  id: string;
  name: string;
  watts: number;
  hoursPerMonth: number;
}

export interface Culprit {
  id: string;
  name: string;
  estimatedCost: number;
  kwh: number;
  shareOfSpike: number;
}

export interface Diagnosis {
  dollarSpike: number;
  kwhSpike: number;
  rateChangePercent: number;
  usageChangePercent: number;
  rateImpactDollars: number;
  usageImpactDollars: number;
  verdict: 'rate-hike' | 'usage-spike' | 'mixed';
  confidence: number;
  rankedCulprits: Culprit[];
  summary: string;
}

const CONFIDENCE_THRESHOLD = 0.05;

export function diagnose(
  current: Bill,
  previous: Bill,
  stateRate: number,
  appliances: Appliance[]
): Diagnosis {
  const currentRate = current.rate ?? current.total / current.kwh;
  const previousRate = previous.rate ?? previous.total / previous.kwh;

  const dollarSpike = current.total - previous.total;
  const kwhSpike = current.kwh - previous.kwh;

  const rateChangePercent = (currentRate - previousRate) / previousRate;
  const usageChangePercent = (current.kwh - previous.kwh) / previous.kwh;

  const rateImpactDollars = (currentRate - previousRate) * current.kwh;
  const usageImpactDollars = (current.kwh - previous.kwh) * previousRate;

  const rateWeight = Math.abs(rateImpactDollars) / Math.abs(dollarSpike || 1);
  const usageWeight = Math.abs(usageImpactDollars) / Math.abs(dollarSpike || 1);

  let verdict: Diagnosis['verdict'];
  if (Math.abs(rateWeight - usageWeight) < CONFIDENCE_THRESHOLD) {
    verdict = 'mixed';
  } else if (rateWeight > usageWeight) {
    verdict = 'rate-hike';
  } else {
    verdict = 'usage-spike';
  }

  const confidence = Math.max(rateWeight, usageWeight);

  const rankedCulprits: Culprit[] = appliances
    .map((app) => {
      const kwh = (app.watts * app.hoursPerMonth) / 1000;
      const estimatedCost = kwh * currentRate;
      return {
        id: app.id,
        name: app.name,
        kwh,
        estimatedCost,
        shareOfSpike: dollarSpike > 0 ? estimatedCost / dollarSpike : 0,
      };
    })
    .sort((a, b) => b.estimatedCost - a.estimatedCost);

  const summary = buildSummary(
    verdict,
    dollarSpike,
    rateChangePercent,
    usageChangePercent,
    rankedCulprits[0]
  );

  return {
    dollarSpike,
    kwhSpike,
    rateChangePercent,
    usageChangePercent,
    rateImpactDollars,
    usageImpactDollars,
    verdict,
    confidence,
    rankedCulprits,
    summary,
  };
}

function buildSummary(
  verdict: Diagnosis['verdict'],
  dollarSpike: number,
  rateChange: number,
  usageChange: number,
  topCulprit?: Culprit
): string {
  const fmt = (n: number) => `$${Math.abs(n).toFixed(2)}`;
  const pct = (n: number) => `${(n * 100).toFixed(1)}%`;

  if (verdict === 'rate-hike') {
    return `Your utility raised rates by ${pct(rateChange)} this period. That alone accounts for roughly ${fmt(dollarSpike)} of your increase — not your usage.`;
  }
  if (verdict === 'usage-spike') {
    const culpritLine = topCulprit
      ? ` Your biggest likely driver is ${topCulprit.name} (~${fmt(topCulprit.estimatedCost)}/mo).`
      : '';
    return `Your usage increased ${pct(usageChange)} this period.${culpritLine}`;
  }
  return `Your bill rose from a mix of higher rates (${pct(rateChange)}) and higher usage (${pct(usageChange)}). Both matter here.`;
}

export function compareToStateAverage(userRate: number, stateRate: number) {
  const diff = (userRate - stateRate) / stateRate;
  return {
    diffPercent: diff,
    status: diff > 0.15 ? 'high' : diff < -0.15 ? 'low' : 'average',
  };
}