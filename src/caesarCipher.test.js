const caesarCipher = require("./caesarCipher");

test("encrypts with caesar cipher", () => {
  expect(caesarCipher("Attack at dawn", 3)).toBe("dwwdfn dw gdzq");
});
