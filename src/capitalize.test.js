const capitalize = require("./capitalize");

test("capitalizes the first letter of a sentence", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});
