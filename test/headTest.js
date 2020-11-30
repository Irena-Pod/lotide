const assertEqual = require("../assertEqual");
const head = require("../head");


//Test cases
assertEqual(head(["hi", "bye"]), "hi");
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "");
assertEqual(head([1]), 1);