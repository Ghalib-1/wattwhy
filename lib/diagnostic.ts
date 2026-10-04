export interface Bill {
  month: string;
  total: number;
  kwh: number;
  billingDays?: number;
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

export interface Decomposition {
  total: number;
  usageImpact: number;
  rateImpact: number;
  daysImpact: number;
}

export interface Benchmark {
  effectiveRate: number;
  stateAvgRate: number;
  ratePercentile: number;
  usagePercentile: number;
  effectiveRateCents: number;
  stateAvgCents: number;
}

export interface Diagnosis {
  dollarSpike: number;
  kwhSpike: number;
  rateChangePercent: number;
  usageChangePercent: number;
  rateImpactDollars: number;
  usageImpactDollars: number;
  daysImpactDollars: number;
  decomposition: Decomposition;
  benchmark: Benchmark | null;
  verdict: 'rate-hike' | 'usage-spike' | 'mixed' | 'days-change';
  confidence: number;
  rankedCulprits: Culprit[];
  translation: string | null;
  summary: string;
}

const CONFIDENCE_THRESHOLD = 0.05;
const SANE_RATE_MIN = 0.05;
const SANE_RATE_MAX = 0.60;

export const STATE_NAMES: Record<string, string> = {
  CA: 'California', TX: 'Texas', PA: 'Pennsylvania', OH: 'Ohio',
  NY: 'New York', FL: 'Florida', IL: 'Illinois', NJ: 'New Jersey',
  MA: 'Massachusetts', GA: 'Georgia', MI: 'Michigan', NC: 'North Carolina',
  VA: 'Virginia', WA: 'Washington', AZ: 'Arizona', CO: 'Colorado',
  MD: 'Maryland', WI: 'Wisconsin', MN: 'Minnesota', SC: 'South Carolina',
  AL: 'Alabama', LA: 'Louisiana', KY: 'Kentucky', OR: 'Oregon',
  OK: 'Oklahoma', CT: 'Connecticut', UT: 'Utah', IA: 'Iowa',
  NV: 'Nevada', AR: 'Arkansas', MS: 'Mississippi', KS: 'Kansas',
  NM: 'New Mexico', NE: 'Nebraska', ID: 'Idaho', WV: 'West Virginia',
  HI: 'Hawaii', NH: 'New Hampshire', ME: 'Maine', MT: 'Montana',
  RI: 'Rhode Island', DE: 'Delaware', SD: 'South Dakota', ND: 'North Dakota',
  AK: 'Alaska', VT: 'Vermont', WY: 'Wyoming', DC: 'Washington, DC',
};

export function diagnose(
  current: Bill,
  previous: Bill,
  stateRate: number,
  appliances: Appliance[],
  stateCode?: string
): Diagnosis {
  const currentRate = current.total / current.kwh;
  const previousRate = previous.total / previous.kwh;

  const saneCurrentRate =
    currentRate >= SANE_RATE_MIN && currentRate <= SANE_RATE_MAX
      ? currentRate
      : stateRate;
  const sanePreviousRate =
    previousRate >= SANE_RATE_MIN && previousRate <= SANE_RATE_MAX
      ? previousRate
      : stateRate;

  const currentDays = current.billingDays || 30;
  const previousDays = previous.billingDays || 30;
  const daysDiff = currentDays - previousDays;

  const dollarSpike = current.total - previous.total;
  const kwhSpike = current.kwh - previous.kwh;

  const rateChangePercent =
    (saneCurrentRate - sanePreviousRate) / sanePreviousRate;
  const usageChangePercent = (current.kwh - previous.kwh) / previous.kwh;

  const perDayPreviousUsage = previous.kwh / previousDays;
  const expectedKwh = perDayPreviousUsage * currentDays;
  const expectedCostAtPreviousRate = expectedKwh * sanePreviousRate;

  const daysImpactDollars = expectedCostAtPreviousRate - previous.total;

  const actualKwhAtPrevRate = expectedKwh * sanePreviousRate;
  const currentKwhAtPrevRate = current.kwh * sanePreviousRate;
  const usageImpactDollars = currentKwhAtPrevRate - actualKwhAtPrevRate;

  const rateImpactDollars =
    dollarSpike - daysImpactDollars - usageImpactDollars;

  const components = [
    { key: 'rate-hike' as const, weight: Math.abs(rateImpactDollars) },
    { key: 'usage-spike' as const, weight: Math.abs(usageImpactDollars) },
    { key: 'days-change' as const, weight: Math.abs(daysImpactDollars) },
  ].sort((a, b) => b.weight - a.weight);

  const totalWeight = components.reduce((sum, c) => sum + c.weight, 0);
  const topWeight = components[0].weight / (totalWeight || 1);
  const secondWeight = components[1].weight / (totalWeight || 1);

  let verdict: Diagnosis['verdict'];
  if (topWeight - secondWeight < CONFIDENCE_THRESHOLD) {
    verdict = 'mixed';
  } else {
    verdict = components[0].key;
  }

  const benchmark: Benchmark | null = stateCode
    ? {
        effectiveRate: saneCurrentRate,
        stateAvgRate: stateRate,
        effectiveRateCents: saneCurrentRate * 100,
        stateAvgCents: stateRate * 100,
        ratePercentile: percentileFromRatio(saneCurrentRate, stateRate),
        usagePercentile: 50,
      }
    : null;

  const rankedCulprits: Culprit[] = appliances
    .map((app) => {
      const kwh = (app.watts * app.hoursPerMonth) / 1000;
      const rawCost = kwh * saneCurrentRate;
      const estimatedCost = Math.min(rawCost, current.total);
      return {
        id: app.id,
        name: app.name,
        kwh,
        estimatedCost,
        shareOfSpike:
          dollarSpike > 0 ? Math.min(estimatedCost / dollarSpike, 1) : 0,
      };
    })
    .sort((a, b) => b.estimatedCost - a.estimatedCost);

  const translation = buildTranslation({
    kwhSpike,
    topCulprit: rankedCulprits[0],
    stateCode,
    month: current.month,
  });

  const summary = buildSummary({
    verdict,
    dollarSpike,
    rateChangePercent,
    usageChangePercent,
    daysDiff,
    rateImpactDollars,
    usageImpactDollars,
    daysImpactDollars,
  });

  return {
    dollarSpike,
    kwhSpike,
    rateChangePercent,
    usageChangePercent,
    rateImpactDollars,
    usageImpactDollars,
    daysImpactDollars,
    decomposition: {
      total: dollarSpike,
      usageImpact: usageImpactDollars,
      rateImpact: rateImpactDollars,
      daysImpact: daysImpactDollars,
    },
    benchmark,
    verdict,
    confidence: topWeight,
    rankedCulprits,
    translation,
    summary,
  };
}

function percentileFromRatio(actual: number, benchmark: number): number {
  const ratio = actual / benchmark;
  if (ratio >= 1.3) return 95;
  if (ratio >= 1.2) return 88;
  if (ratio >= 1.15) return 80;
  if (ratio >= 1.1) return 72;
  if (ratio >= 1.05) return 62;
  if (ratio >= 0.95) return 50;
  if (ratio >= 0.9) return 38;
  if (ratio >= 0.85) return 25;
  if (ratio >= 0.8) return 15;
  return 8;
}

function buildTranslation({
  kwhSpike,
  topCulprit,
  stateCode,
  month,
}: {
  kwhSpike: number;
  topCulprit?: Culprit;
  stateCode?: string;
  month: string;
}): string | null {
  if (Math.abs(kwhSpike) < 10) return null;

  const state = stateCode
    ? STATE_NAMES[stateCode] || stateCode
    : 'your state';
  const abs = Math.abs(Math.round(kwhSpike));
  const lines: string[] = [];

  if (kwhSpike > 0) {
    const acHours = abs / 3.5;
    if (acHours >= 20 && acHours <= 400) {
      lines.push(
        `your AC running ${Math.round(acHours / 30)} hrs/day for the month`
      );
    }
    const heaterHours = abs / 1.5;
    if (heaterHours >= 20 && heaterHours <= 400) {
      lines.push(
        `a 1,500W space heater running ${Math.round(
          heaterHours / 30
        )} hrs/day`
      );
    }
    const evHours = abs / 7.2;
    if (evHours >= 5 && evHours <= 200) {
      lines.push(`charging an EV for ${Math.round(evHours)} hours`);
    }
  } else {
    lines.push(`${abs} fewer kWh than the comparison period`);
  }

  const prefix = `${
    kwhSpike > 0 ? '+' : '−'
  }${abs} kWh in ${month} in ${state} — that's roughly `;

  return prefix + lines.slice(0, 2).join(', or ');
}

function buildSummary({
  verdict,
  dollarSpike,
  rateChangePercent,
  usageChangePercent,
  daysDiff,
  rateImpactDollars,
  usageImpactDollars,
  daysImpactDollars,
}: {
  verdict: Diagnosis['verdict'];
  dollarSpike: number;
  rateChangePercent: number;
  usageChangePercent: number;
  daysDiff: number;
  rateImpactDollars: number;
  usageImpactDollars: number;
  daysImpactDollars: number;
}): string {
  const fmt = (n: number) => `$${Math.abs(n).toFixed(2)}`;
  const pct = (n: number) => `${(n * 100).toFixed(1)}%`;
  const dir = dollarSpike >= 0 ? 'rose' : 'fell';

  const parts: string[] = [];
  parts.push(`Your bill ${dir} ${fmt(dollarSpike)}.`);

  if (verdict === 'rate-hike') {
    parts.push(
      `Your utility raised rates by ${pct(
        rateChangePercent
      )} — that explains about ${fmt(rateImpactDollars)} of the change.`
    );
  } else if (verdict === 'usage-spike') {
    parts.push(
      `Your usage changed by ${pct(
        usageChangePercent
      )} — that explains about ${fmt(usageImpactDollars)}.`
    );
  } else if (verdict === 'days-change') {
    parts.push(
      `Your billing period changed by ${daysDiff} days — that explains about ${fmt(
        daysImpactDollars
      )}.`
    );
  } else {
    parts.push(
      `It's a mix: rate ${pct(rateChangePercent)}, usage ${pct(
        usageChangePercent
      )}, billing days ${daysDiff > 0 ? '+' : ''}${daysDiff}.`
    );
  }

  return parts.join(' ');
}

export function compareToStateAverage(
  userRate: number,
  stateRate: number
) {
  const diff = (userRate - stateRate) / stateRate;
  return {
    diffPercent: diff,
    status: diff > 0.15 ? 'high' : diff < -0.15 ? 'low' : 'average',
  };
}