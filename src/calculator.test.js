const calculator = require("./calculator");

let Calculator = new calculator();

test("adds up 1 + 1", () => {
  expect(Calculator.add(1, 2)).toBe(3);
});

test("subtracts 2 - 1", () => {
  expect(Calculator.substract(2, 1)).toBe(1);
});

test("divide 25 by 5", () => {
  expect(Calculator.divide(25, 5)).toBe(5);
});

test("multiply 5 by 5", () => {
  expect(Calculator.multiply(5, 5)).toBe(25);
});
