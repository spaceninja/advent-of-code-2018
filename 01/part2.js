import input from "./input";

// This is the same function from part 1, but also returns the array of answers
const sumArray = (array, total = 0) => {
  let answerArray = [];
  array.forEach(i => {
    total += i;
    answerArray.push(total);
  });
  return {
    total,
    answerArray
  };
};

// Given an array, return the first duplicate or false
const findFirstDuplicate = array => {
  let firstDuplicate = "";
  let hasMatch = false;
  for (let a = 0; a < array.length; a++) {
    for (let b = a + 1; b < array.length; b++) {
      if (array[a] === array[b]) {
        firstDuplicate = array[a];
        hasMatch = true;
        break;
      }
    }
    if (hasMatch) {
      break;
    }
  }
  if (hasMatch) {
    return firstDuplicate;
  } else {
    return false;
  }
};

// Here's my first attempt
// this didn't work — it got progressively slower with each iteration
const doTheThing = (i, initArray, total, answerArray) => {
  // this is me manually breaking the recursion becuase it was grinding
  // my processor to a halt, which told me I'm doing something dumb
  if (i > 50) {
    return false;
  }
  const sum = sumArray(initArray, total);
  const rollingArray = [...answerArray, ...sum.answerArray];
  const sumArrayDuplicate = findFirstDuplicate(rollingArray);
  console.log(`Round ${i} total is ${sum.total}`);
  if (sumArrayDuplicate) {
    console.log(rollingArray);
    console.log(`Round ${i} first duplicate is ${sumArrayDuplicate}`);
  } else {
    console.log("No duplicate found, next round");
    const j = i + 1;
    doTheThing(j, initArray, sum.total, rollingArray);
  }
};

// here's a solution I found online,
// with my comments explaining how it works
// TL;DR: This is still a recursive function, but it's much
// faster and more elegant than mine because it only cares about
// checking for duplicates, where I was trying to be overly clever
// by preserving code and ended up with an overengineered pile of shit
const calculator = breakdown => {
  // don't use my bad recursive function
  // doTheThing(1, array, 0, [0]);

  let currentFrequency = 0;
  let i = 0;
  let duplicateFound = false;
  let pastFrequencies = [currentFrequency];

  while (!duplicateFound) {
    // if we've run through the whole array, loop over it again
    if (i === breakdown.length) {
      i = 0;
    }

    // add the current array number to the frequency
    currentFrequency += breakdown[i];

    // check if we have a duplicate
    duplicateFound = pastFrequencies.includes(currentFrequency);

    // add this value to the list
    pastFrequencies.push(currentFrequency);

    // loop
    i++;
  }

  // if we're here, it's because we found a duplicate and broke the loop
  console.log(`First duplicate is ${currentFrequency}`);
  return currentFrequency;
};

//
// TEST OUTPUT
//

console.log("TEST ONE, expecting 2");
const test1 = [+1, -2, +3, +1];
calculator(test1);

console.log("TEST TWO, expecting 0");
const test2 = [+1, -1];
calculator(test2);

console.log("TEST THREE, expecting 10");
const test3 = [+3, +3, +4, -2, -4];
calculator(test3);

console.log("TEST FOUR, expecting 5");
const test4 = [-6, +3, +8, +5, -6];
calculator(test4);

console.log("TEST FIVE, expecting 14");
const test5 = [+7, +7, -2, -7, -4];
calculator(test5);

console.log("INPUT");
calculator(input);
