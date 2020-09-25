var assert = require("assert");
describe("IndexArray", function () {
  describe("#checkIndex negative()", function () {
    it("the function should return -1 when the value is not present", function () {
      assert.equal(-1, [4, 5, 6].indexOf(7));
    });
  });
  describe("#checkIndex positive()", function () {
    it("the function should return 0 when the value is present", function () {
      assert.equal(0, [8, 9, 10].indexOf(8));
    });
  });
});
