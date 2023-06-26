const assert = require("chai").assert;
const multiply = require("../multiply");
describe("multiply", function () {
  it("Mutiply function returns one", function () {
    assert.equal(multiply(2, 2), 4);
  });
});
