//ASSERTION FUNCTION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//ACTUAL FUNCTION
const findKey = function (object, value) {
  let keys = Object.keys(object);

  for (let key of keys) {
    if (value(object[key])) {
      return key;
    }
  }
}

//EXAMPLE 1
const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(result);

//EXAMPLE 2
let fruits = {
  apple: { colour: "red", taste: "sweet" },
  orange: { colour: "orange", taste: "sour" },
  banana: { colour: "yellow", taste: "sweet" },
  kiwi: { colour: "brown", taste: "gross" }
}

const result1 = findKey(fruits, f => f.colour === "brown")
const result2 = findKey(fruits, f => f.taste === "sour")

console.log(result1);
console.log(result2)

//ASSERTION TESTS
assertEqual(result, "noma");// => should PASS
assertEqual(result1, "kiwi");// => should PASS
assertEqual(result2, "orange");// => should PASS