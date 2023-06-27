function factorial(number) {
  let value = 1;
  for (let index = 1; index <= number; index++) {
    value *= index;
  }
  return value;
}

module.exports = factorial;
