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

module.exports = middle;


//Middle Function Test Cases
// console.log(middle(["hi", "bye", "hello", "hola"])) // => Should return ["bye", "hello"]
// console.log(middle(["Pizza", "Cheeseburger", "Pasta", "Soup", "Salad"]));// => should return ["Pasta"]
// console.log(middle([1, 2]));// => Shoul return []
// console.log(middle([5, 6, 7, 9, 12]));// => Should return [7]
// console.log(middle([5, 6, 7, 9, 12, 15]));// => Should return [7, 9]