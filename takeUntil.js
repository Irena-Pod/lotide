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
const takeUntil = function (array, callback) {
  const newArray = [];

  for (let element of array) {
    if (!callback(element)) {
      newArray.push(element)
    } else {
      return newArray;
    }
  }
}

module.exports = takeUntil;

//EXAMPLE 1
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// //Expected Outcome => [ 1, 2, 5, 7, 2 ]

// console.log('---');

// //EXAMPLE 2
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// //Expected Outcome => [ 'I\'ve', 'been', 'to', 'Hollywood' ]

// console.log('---');

// //EXAMPLE 3
// const data3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const results3 = takeUntil(data3, x => x === 3);
// console.log(results3);


// //ASSERTION TEST CASES
// assertArraysEqual(results1, [1, 2, 5, 7, 2]);//=>Should PASS
// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);//=>Should PASS
// assertArraysEqual(results3, [10, 9, 8, 7, 6, 5, 4, 3]);//=>Should FAIL
// assertArraysEqual(results3, [10, 9, 8, 7, 6, 5, 4]);//=>Should PASS