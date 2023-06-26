const assert = require("chai").assert;
const multiply = require("../multiply");
describe("multiply", function () {
  it("Mutiply function return the value specified", function () {
    assert.equal(multiply(3, 3), 9);
  });
});
