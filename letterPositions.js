//ASSERTION FUNCTIONS
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length)
    return false

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i])
      return false;
  }
  return true;
}

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2))
    console.log(`💚 Assertion Passed:[${array1}] === [${array2}]`);
  else
    console.log(`🔴 Assertion Failed:[${array1}] !== [${array2}]`);
}

//ACTUAL FUNCTION
const letterPositions = function (sentence) {
  const results = {};
  let lowerCased = sentence.toLowerCase()


  for (let i = 0; i < lowerCased.length; i++) {
    if (lowerCased[i].match(/[a-zA-Z]/)) {
      let letter = lowerCased[i]
      if (!results[letter]) {
        results[letter] = [];
      }
      results[letter].push(i);
    }
  }
  return results;
};


//Test Cases
console.log(letterPositions("hello"))
//expected output: { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] }
console.log(letterPositions("lighthouse in the house"))
/*
expected output:
{ 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}
*/

//Assertion tests
assertArraysEqual(letterPositions("hello").e, [1]);// => should PASS
assertArraysEqual(letterPositions("hello").l, [2, 3]);// => should PASS
assertArraysEqual(letterPositions("hello").h, [3]);// => should FAIL