function analyzeArray(array) {
  let total = 0;

  for (let i = 0; array.length > i; i++) {
    total += array[i];
  }

  let average = total / array.length;
  let min = Math.min(...array);
  let max = Math.max(...array);
  let length = array.length;

  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
}

module.exports = analyzeArray;
