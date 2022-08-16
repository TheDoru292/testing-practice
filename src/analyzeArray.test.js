const analyze = require("./analyzeArray");

test("analyze array and returns average, min, max and length", () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toMatchObject({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
