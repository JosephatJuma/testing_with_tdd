const assert = require("chai").assert;
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
