function caesarCipher(string, shiftNumber) {
  let lowerCaseString = string.toLowerCase();
  let array = Array.from(lowerCaseString);

  let encryptedString = "";

  for (let i = 0; array.length > i; i++) {
    encryptedString += encrypt(array[i], shiftNumber);
  }

  return encryptedString;
}

function encrypt(letter, shiftNumber) {
  let alphabet = [
    { letter: "a", id: 0 },
    { letter: "b", id: 1 },
    { letter: "c", id: 2 },
    { letter: "d", id: 3 },
    { letter: "e", id: 4 },
    { letter: "f", id: 5 },
    { letter: "g", id: 6 },
    { letter: "h", id: 7 },
    { letter: "i", id: 8 },
    { letter: "j", id: 9 },
    { letter: "k", id: 10 },
    { letter: "l", id: 11 },
    { letter: "m", id: 12 },
    { letter: "n", id: 13 },
    { letter: "o", id: 14 },
    { letter: "p", id: 15 },
    { letter: "q", id: 16 },
    { letter: "r", id: 17 },
    { letter: "s", id: 18 },
    { letter: "t", id: 19 },
    { letter: "u", id: 20 },
    { letter: "v", id: 21 },
    { letter: "w", id: 22 },
    { letter: "x", id: 23 },
    { letter: "y", id: 24 },
    { letter: "z", id: 25 },
  ];

  if (letter === " ") {
    return " ";
  }

  for (let obj of alphabet) {
    if (obj.letter === letter) {
      let number = modulo(obj.id + shiftNumber, 26);
      for (let obj of alphabet) {
        if (obj.id === number) {
          return obj.letter;
        }
      }
    }
  }
}

function modulo(n, x) {
  return n % x;
}

module.exports = caesarCipher;
