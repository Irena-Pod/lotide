//TEST ASSERTION FUNCTIONS
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) 
    return false
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) 
      return false;
  }
  return true;
};

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) 
    console.log(`💚 Assertion Passed:[${array1}] === [${array2}]`);
  else 
    console.log(`🔴 Assertion Failed:[${array1}] !== [${array2}]`);
};

//ACTUAL FUNCTION
const middle = function (array) {
  let middleElements = [];
  let numOfElements = array.length

  for (let i = 0; i < array.length; i++) {
    if(numOfElements <= 2) {
      return [];
    } else if (numOfElements % 2 === 0) {
      middleElements = [array[Math.floor((numOfElements - 1) /2)], array[Math.round((numOfElements - 1) /2)]];
    } else {
      middleElements = [array[Math.round((numOfElements - 1) /2)]];
    }
  }
  return middleElements;
};



//Assertion Test Cases
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => Should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [2, 3]); // => Should FAIL
assertArraysEqual(middle(["Pizza", "Cheeseburger", "Pasta", "Soup", "Salad"]), ["Pasta"]); // => Should PASS
assertArraysEqual(middle([1, 2]), []);// => should PASS


//Middle Function Test Cases
console.log(middle(["hi", "bye", "hello", "hola"])) // => Should return ["bye", "hello"]
console.log(middle(["Pizza", "Cheeseburger", "Pasta", "Soup", "Salad"]));
console.log(middle([1, 2]));// => Shoul return []
console.log(middle([5, 6, 7, 9, 12]));// => Should return [7]
console.log(middle([5, 6, 7, 9, 12, 15]));// => Should return [7, 9]