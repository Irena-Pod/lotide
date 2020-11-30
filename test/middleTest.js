const middle = require ("../middle");
const assertArraysEqual = require ("../assertArraysEqual")

//Assertion Test Cases
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => Should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [2, 3]); // => Should FAIL
assertArraysEqual(middle(["Pizza", "Cheeseburger", "Pasta", "Soup", "Salad"]), ["Pasta"]); // => Should PASS
assertArraysEqual(middle([1, 2]), []);// => should PASS