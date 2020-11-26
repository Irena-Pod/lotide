//ASSERTION FUNCTION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length)
    return false

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i])
      return false;
  }
  return true;
}

//ACTUAL FUNCTION
// Returns true if both objects have identical keys with identical values, othereise returns false. 
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

//TEST CASES - Primitives As Values
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

//TEST CASES - Arrays As Values 
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

const abc = { a: [1, 2, "3"], b: "hi", c: 1 };
const cba = { c: 1, a: [1, 2, "3"], b: "hi" };
console.log(eqObjects(abc, cba)); // => true