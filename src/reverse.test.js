const reversed = require("./reverse");

test("reverses the string", () => {
  expect(reversed("Hello World")).toBe("dlroW olleH");
});

test("numbers work as well", () => {
  expect(reversed("622141")).toBe("141226");
});

test("numbers and letters work as well", () => {
  expect(reversed("I have written 68 lines of code.")).toBe(
    ".edoc fo senil 86 nettirw evah I"
  );
});
