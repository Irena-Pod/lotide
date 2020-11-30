const { assert } = require("chai");
const middle = require("../middle");

describe("#middle", () => {
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])
  });

  it("returns [\"Pasta\"] for [\"Pizza\", \"Cheeseburger\", \"Pasta\", \"Soup\", \"Salad\"]", () => {
    assert.deepEqual(middle(["Pizza", "Cheeseburger", "Pasta", "Soup", "Salad"]), ["Pasta"])
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])
  });

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), [])
  });
});

