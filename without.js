//TEST ASSERTION FUNCTIONS
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
const without = function (sourceArray, itemsToRemove) {
  let newArray = [];

  for (let element of sourceArray) {
    if (itemsToRemove.indexOf(element) === -1){
      newArray.push(element);
    }
   } 
  return newArray;
}

module.exports = without;

//Test Cases: make sure the original array was not altered by the without function
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const names = ["Irena", "Adam", "Alex", "Elen"];
assertArraysEqual(names, ["Irena", "Adam", "Alex", "Elen"]);

/*
Test Cases: return a new array with only those elements from source
hat are not present in the itemsToRemove array.
*/
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]));// => ["1", "2"]
console.log(without(["hello", "world", "loopy", "lighthouse", "Loopy"], ["loopy"]));// => ["hello", "world", "lighthouse", "Loopy"]
console.log(without([1, 2, "3", "4", 5],["5"]));

