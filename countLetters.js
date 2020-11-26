//ASSERTION FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};


//ACTUAL FUNCTION
const countLetters = function (sentence) {
  const letters = {};
  let lowerCased = sentence.toLowerCase()

  for (const letter of lowerCased) {
    if (letter !== " ") {
      if (letters[letter]) {
        letters[letter] += 1;
      } else {
        letters[letter] = 1;
      }
    }
  }
  return letters;
}


//TEST CASES
const result1 = countLetters("hello");

assertEqual(result1["h"], 1);// => Should Pass
assertEqual(result1["e"], 1);// => Should Pass
assertEqual(result1["l"], 2);// => Should Pass
assertEqual(result1["o"], 1);// => Should Pass
assertEqual(result1["a"], 1);// => Should FAIL

const result2 = countLetters("My name is Irena");

assertEqual(result2["m"], 2);// => Should Pass
assertEqual(result2["y"], 1);// => Should Pass
assertEqual(result2["n"], 2);// => Should Pass
assertEqual(result2["a"], 2);// => Should Pass
assertEqual(result2["e"], 2);// => Should Pass
assertEqual(result2["i"], 2);// => Should Pass
assertEqual(result2["s"], 2);// => Should FAIL
assertEqual(result2["s"], 1);// => Should Pass
assertEqual(result2["r"], 0);//=> Should FAIL
assertEqual(result2["r"], 1);// => Should Pass
