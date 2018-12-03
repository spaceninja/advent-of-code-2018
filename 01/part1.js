import input from "./input";

const sumArray = array => {
  let total = 0;
  array.forEach(i => (total += i));
  console.log(total);
};

//
// TEST OUTPUT
//

console.log("TEST ONE, expecting 3");
const test1 = [+1, -2, +3, +1];
sumArray(test1); // 3

console.log("TEST TWO, expecting 3");
const test2 = [+1, +1, +1];
sumArray(test2); // 3

console.log("TEST THREE, expecting 0");
const test3 = [+1, +1, -2];
sumArray(test3); // 0

console.log("TEST FOUR, expecting -6");
const test4 = [-1, -2, -3];
sumArray(test4); // -6

console.log("INPUT");
sumArray(input); // ?
