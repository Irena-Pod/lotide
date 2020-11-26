//ASSERTION FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//ACTUAL FUNCTION
// Returns true if both objects have identical keys with identical values, othereise returns false. 
const eqObjects = function(object1, object2) {
  let keysObject1 = Object.keys(object1);
  let keysObject2 = Object.keys(object2);

  if (keysObject1.length !== keysObject2.length) {
    return false;
  }
  
  for (let key of keysObject1) {
    if (!object2[key]) {
      return false;
    } else {
      if (object1[key] !== object2[key] ) {
        return false;
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