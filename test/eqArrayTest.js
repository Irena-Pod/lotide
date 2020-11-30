const eqArrays = require("../eqArrays")
const assertEqual = require("../assertEqual")

//assertEqual Test Cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false);// => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);// => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);// => should FAIL

