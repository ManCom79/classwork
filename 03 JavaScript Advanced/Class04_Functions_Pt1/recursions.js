function sumTwoNumber(num) {
  if (num === 0) {
    return 0;
  }
  return num + sumTwoNumber(num - 1);
}

const sumResult = sumTwoNumber(10);
console.log(sumResult);

function factoriel(n) {
  if (n === 0) {
    return 1;
  }
  return n * factoriel(n - 1);
}

const factorielResult = factoriel(50);
console.log(factorielResult);
