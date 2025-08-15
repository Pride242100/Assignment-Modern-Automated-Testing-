import calculateTotalArea from './calculateTotalArea';

describe('calculateTotalArea', () => {
  it('should calculate area of rectangle plus two triangles correctly', () => {
    // Rectangle 3m x 2m
    // Triangle base = 1/3 of length = 1m, height = 2m
    // Triangle area = 0.5 * base * height = 1m²
    // Two triangles area = 2m²
    // Total area = rectangle area + triangles area = 6 + 2 = 8m²
    const length = 3;
    const width = 2;
    const expectedArea = 8;
    expect(calculateTotalArea(length, width)).toBeCloseTo(expectedArea);
  });

  it('should return correct area for different dimensions', () => {
    const length = 9;
    const width = 6;
    // Triangle base = 3, height = 6
    // Triangle area = 0.5 * 3 * 6 = 9
    // Two triangles area = 18
    // Rectangle area = 54
    // Total area = 72
    const expectedArea = 72;
    expect(calculateTotalArea(length, width)).toBeCloseTo(expectedArea);
  });

  it('should return 0 if length or width is 0', () => {
    expect(calculateTotalArea(0, 5)).toBe(0);
    expect(calculateTotalArea(5, 0)).toBe(0);
  });
});
