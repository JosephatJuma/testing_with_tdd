function fibonacci(number) {
  let value;
  let sequence = [0, 1];
  for (let index = 2; index <= number; index++) {
    value = sequence[index - 1] + sequence[index - 2];
    sequence.push(value);
  }
  return value;
}
module.exports = fibonacci;
