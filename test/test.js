const assert = require("chai").assert;
const multiply = require("../multiply");
describe("multiply", function () {
  it("Mutiply function return the value specified", function () {
    assert.equal(multiply(23, 45), 23 * 45);
  });
});
