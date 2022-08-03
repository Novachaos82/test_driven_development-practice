import { capitalize } from "../code/capitalize";

it("is capitalizd", () => {
  expect(capitalize("something")).toBe("Something");
});
