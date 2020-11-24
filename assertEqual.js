const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Test code
assertEqual("hello", "hello");
assertEqual("Hello", "Goodbye");
assertEqual(1, -1);
assertEqual(1, 2);
assertEqual(10, 10);