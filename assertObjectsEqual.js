//HELPER FUNCTIONS
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length)
    return false

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i])
      return false;
  }
  return true;
}

const eqObjects = function (object1, object2) {
  let keysObject1 = Object.keys(object1);
  let keysObject2 = Object.keys(object2);

  if (keysObject1.length !== keysObject2.length) {
    return false;
  }

  for (let key of keysObject1) {
    if (!object2[key]) {
      return false;
    } else {
      let typeOfObject1Key = typeof object1[key];
      let typeOfObject2Key = typeof object2[key];

      if (typeOfObject1Key !== typeOfObject2Key) {
        return false;
      }

      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected))
    console.log(`💚 Assertion Passed:${inspect(actual)} === ${inspect(expected)}`);
  else
    console.log(`🔴 Assertion Failed:${inspect(actual)}  !== ${inspect(expected)}`);
};

//TEST CASES
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba)  // => should PASS

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc) // => should PASS

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2) // => should FAIL

const abc = { a: [1, 2, "3"], b: "hi", c: 1 };
const cba = { c: 1, a: [1, 2, "3"], b: "hi" };
assertObjectsEqual(abc, cba); // => should PASS