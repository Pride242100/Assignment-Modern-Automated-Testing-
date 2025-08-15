export default function calculateTotalArea(length: number, width: number): number {
  if (length <= 0 || width <= 0) {
    return 0;
  }

  const rectangleArea = length * width;
  const triangleBase = length / 3;
  const triangleHeight = width;
  const triangleArea = 0.5 * triangleBase * triangleHeight;
  const totalTriangleArea = 2 * triangleArea;

  return rectangleArea + totalTriangleArea;
}
