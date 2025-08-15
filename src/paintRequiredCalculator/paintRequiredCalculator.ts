export default function paintRequiredCalculator(area: number, coveragePerLiter: number, copies: number = 1): number {
  if (coveragePerLiter <= 0 || copies <= 0) {
    return 0;
  }
  return (area * copies) / coveragePerLiter;
}
