const { assert } = require("chai");
const head = require("../head");

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns 'hi' for ['hi', 'bye']", () => {
    assert.strictEqual(head(["hi", "bye"]), "hi");
  });

  it("returns 'hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("returns '' for []", () => {
    assert.strictEqual(head([""]), "");
  });

  it("returns 1 for [1]", () => {
    assert.strictEqual(head([1]), 1);
  });
});

