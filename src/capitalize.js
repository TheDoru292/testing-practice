function capitalize(string) {
  let capitalized = string[0].toUpperCase();

  for (let i = 0; string.length > i; i++) {
    if (i == 0) {
      continue;
    }
    capitalized += string[i];
  }

  return capitalized;
}

module.exports = capitalize;
