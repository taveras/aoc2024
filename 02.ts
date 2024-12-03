export function getSafeReportCount(
  reports: Array<Array<number>>,
): number {
  let result = 0;
  for (const report of reports) {
    let i = 0;
    const diffs: Array<number> = [];
    while (i < report.length - 1) {
      const current = report[i];
      const next = report[++i];

      diffs.push(current - next);
    }

    const isDiffInRange = diffs.map(Math.abs).every((n) => n >= 1 && n <= 3);
    const isIncreasing = diffs.map(Math.sign).every((n) => n === -1);
    const isDecreasing = diffs.map(Math.sign).every((n) => n === 1);
    result += Number(isDiffInRange && (isIncreasing || isDecreasing));
  }
  return result;
}

if (import.meta.main) {
  const input = await Deno.readTextFile("02_input.txt");
  const reports: Array<Array<number>> = [];
  for (const line of input.split("\n")) {
    const report = line.split(/\s/).map(Number);
    reports.push(report);
  }

  console.log("# of safe reports = ", getSafeReportCount(reports));
}
