import calculateTotalArea from "./calculateTotalArea/calculateTotalArea";
import paintRequiredCalculator from "./paintRequiredCalculator";

function main() {
  const length = 3;
  const width = 2;
  const copies = 5000;
  const coveragePerLiter = 11.4;

  const area = calculateTotalArea(length, width);
  const paintRequired = paintRequiredCalculator(area, coveragePerLiter, copies);

  console.log(`${paintRequired.toFixed(2)} liters of paint is required to cover ${copies} copies of the canvas with area ${area.toFixed(2)} m².`);
}

main();
