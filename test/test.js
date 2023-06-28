const assert = require("chai").assert;

//Multiply testing
const multiply = require("../multiply");
describe("multiply", function () {
  it("1x1=1", function () {
    assert.equal(multiply(1, 1), 1);
  }),
    it("2x2=4", function () {
      assert.equal(multiply(2, 2), 4);
    }),
    it("3x3=9", function () {
      assert.equal(multiply(3, 3), 9);
    });
  it("4x4=16", function () {
    assert.equal(multiply(4, 4), 16);
  });
  it("23x45=45x23", function () {
    assert.equal(multiply(23, 45), 23 * 45);
  });
});

//Factorial testing
const factorial = require("../factorial");
describe("Factorial testing", function () {
  it("1!=1", function () {
    assert.equal(factorial(1), 1);
  });
  it("2!=2", function () {
    assert.equal(factorial(2), 2);
  });
  it("3!=6", function () {
    assert.equal(factorial(3), 6);
  });
  it("4!=24", function () {
    assert.equal(factorial(4), 24);
  });
  it("5!=120", function () {
    assert.equal(factorial(5), 120);
  });
  it("6!=720", function () {
    assert.equal(factorial(6), 720);
  });
});

//testing fobinacci

const fibonacci = require("../fibonacci");
describe("fibonacci", function () {
  it("fibonacci 2 is equal 1", function () {
    assert.equal(fibonacci(2), 1);
  });
  it("fibonacci 3 is equal 2", function () {
    assert.equal(fibonacci(3), 2);
  });
  it("fibonacci 4 is equal 3", function () {
    assert.equal(fibonacci(4), 3);
  });
});
