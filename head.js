const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function (array) {
  let firstElement = array.shift()
  return firstElement;
}

//Test cases
assertEqual(head(["hi", "bye"]), "hi");
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "");
assertEqual(head([1]), 1);
 