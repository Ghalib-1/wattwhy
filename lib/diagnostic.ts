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