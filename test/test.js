const assert = require("chai").assert;
const multiply = require("../multiply");
describe("multiply", function () {
  // it("Mutiply function returns the value specified", function () {
  //   assert.equal(multiply(1, 1), 1);
  // }),
  //   it("Mutiply function returns the value specified", function () {
  //     assert.equal(multiply(2, 2), 4);
  //   }),
  //   it("Mutiply function returns the value specified", function () {
  //     assert.equal(multiply(3, 3), 9);
  //   });
  // it("Mutiply function returns the value specified", function () {
  //   assert.equal(multiply(4, 4), 16);
  // });
  it("Mutiply function returns the value specified", function () {
    assert.equal(multiply(23, 45), 23 * 45);
  });
});
