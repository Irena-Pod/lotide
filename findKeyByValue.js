//ASSERTION FUNCTION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//ACTUAL FUNCTION
const findKeyByValue = function (object, value) {
  let keys = Object.keys(object);

  for (let key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
}

module.exports = findKeyByValue;

//TEST CASE 1
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");// => should PASS
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);// => should PASS


// //TEST CASE 2
// const actualBestTVShowsByGenre = {
//   comedy: "Seinfeld",
//   drama: "The Sopranos",
//   crime: "Peaky  Blinders"
// };

// assertEqual(findKeyByValue(actualBestTVShowsByGenre, "The Sopranos"), "drama");// => should PASS
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Breaking Bad"), undefined);// => should PASS

// //TEST CASE 3
// console.log(findKeyByValue({
//   comedy: "Seinfeld",
//   drama: "The Sopranos",
//   crime: "Peaky  Blinders"
// }, "Seinfeld")); // => should return 'comedy' 

// //TEST CASE 4
// console.log(findKeyByValue({
//   comedy: "Seinfeld",
//   drama: "The Sopranos",
//   crime: "Peaky  Blinders"
// }, "Breaking Bad")); // => should return undefined
