/// <reference types="jest" />
import paintRequiredCalculator from './paintRequiredCalculator';

describe('paintRequiredCalculator', () => {
  it('should calculate paint required for single copy correctly', () => {
    const area = 10;
    const coveragePerLiter = 5;
    const copies = 1;
    const expectedPaint = area / coveragePerLiter;
    expect(paintRequiredCalculator(area, coveragePerLiter, copies)).toBeCloseTo(expectedPaint);
  });

  it('should calculate paint required for multiple copies correctly', () => {
    const area = 10;
    const coveragePerLiter = 5;
    const copies = 3;
    const expectedPaint = (area * copies) / coveragePerLiter;
    expect(paintRequiredCalculator(area, coveragePerLiter, copies)).toBeCloseTo(expectedPaint);
  });

  it('should return 0 if copies is 0', () => {
    const area = 10;
    const coveragePerLiter = 5;
    const copies = 0;
    expect(paintRequiredCalculator(area, coveragePerLiter, copies)).toBe(0);
  });

  it('should return 0 if coveragePerLiter is 0', () => {
    const area = 10;
    const coveragePerLiter = 0;
    const copies = 1;
    expect(paintRequiredCalculator(area, coveragePerLiter, copies)).toBe(0);
  });
});
