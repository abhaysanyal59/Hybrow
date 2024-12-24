const string = "AmolyaSharma";

const countingAlphabets = (string) => {
  let count = {};
  const n = string.length;

  for (let char of string.toUpperCase()) {
    if (/[a-zA-Z]/.test(char)) {
      count[char] = (count[char] || 0) + 1;
    }
  }
  return count;
};
console.log(countingAlphabets(string));