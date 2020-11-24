const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function (array) {
  let tailArray = array.slice(1)
  console.log(tailArray)
  return tailArray;
};

/*
Test case: check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
*/


//Test case 1: Compare values of the returned array directly
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

//Test case 2: An array with only one element should return an empty array for its tail
const result1 = tail([1]);
assertEqual(result1.length, 0);

//Test case 3: an empty array should return an empty array for its tail
const result2 = tail([]);
assertEqual(result2.length, 0);

//Test case 4: Compare values of the returned array directly
const result3 = tail([1, 2, 3, 4, 5]);
assertEqual(result3.length, 4); 
assertEqual(result3[0], 2); 
assertEqual(result3[1], 3); 
assertEqual(result3[2], 4); 
assertEqual(result3[3], 5);