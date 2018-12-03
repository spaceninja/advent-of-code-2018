import input from "./input";

const testcase = ["abcdef", "bababc", "abbcde", "abcccd", "aabcdd", "abcdee", "ababab"];

// Rejected first attempt
// tried to solve with regex, by sorting the letters
// then looking for duplicates, but this is a really tricky
// problem for regex, to match 2 but not 3 in a row.
const checkWithRegex = array => {
  let twoDups = 0;
  let threeDups = 0;

  array.forEach(string => {
    const sortedString = string
      .split("")
      .sort()
      .join("");
    console.log(sortedString);
    if (sortedString.match(/(.)\1{2}/g)) {
      threeDups += 1;
    }
    if (sortedString.match(/(.)\1{1}/g)) {
      twoDups += 1;
    }
  });

  console.log(`this array contains ${twoDups} twoDups and ${threeDups} threeDups`);
};

//
// This one's better. Gotta get in the habit of looking at .reduce and .map more
//
const checkForDuplicates = array => {
  // running total of doubles and thruples
  let twoCount = 0;
  let threeCount = 0;

  // loop over each string in the array
  array.forEach(string => {
    // start with none
    let hasTwo = false;
    let hasThree = false;

    // make an object with a count of each letter in this string
    let letterCount = string.split("").reduce((acc, c) => {
      acc[c] = acc[c] ? acc[c] + 1 : 1;
      return acc;
    }, {});

    // check letter count object for doubles and thruples
    for (let letter in letterCount) {
      if (letterCount[letter] === 2) {
        hasTwo = true;
      }
      if (letterCount[letter] === 3) {
        hasThree = true;
      }
    }

    // update the running totals
    if (hasTwo) {
      twoCount += 1;
    }
    if (hasThree) {
      threeCount += 1;
    }
  });

  const checksum = twoCount * threeCount;
  console.log(`Doubles: ${twoCount}, Thruples: ${threeCount}`);
  console.log(`Checksum: ${checksum}`);
};

checkForDuplicates(testcase); // checksum 12

checkForDuplicates(input);
