const tail = require("../tail");
const { assert } = require("chai");

describe("#tail", () => {
  it("returns [2, 3] for [1, 2 ,3]", () => {
    assert.deepEqual(tail([1, 2 ,3]), [2, 3])
  });

  it("returns ['my', 'name', 'is', 'Irena'] for ['hello', 'my', 'name', 'is', 'Irena']", () => {
    assert.deepEqual(tail(['hello', 'my', 'name', 'is', 'Irena']), ['my', 'name', 'is', 'Irena'])
  });

  it("returns [] when have an empty array", () => {
    assert.deepEqual(tail([""]), [])
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), [])
  });
});
