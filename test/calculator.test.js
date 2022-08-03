import { calculate } from "../code/calculator";

it("add", () => {
  expect(calculate.add(1, 2)).toBe(3);
});

it("substract", () => {
  expect(calculate.sub(3, 2)).toBe(1);
});

it("multiply", () => {
  expect(calculate.mul(1, 2)).toBe(2);
});

it("divide", () => {
  expect(calculate.div(4, 2)).toBe(2);
});
