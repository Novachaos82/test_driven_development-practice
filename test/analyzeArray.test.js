import { analyzer } from "../code/analyzeArray";

it("analyze", () => {
  expect(analyzer([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});
