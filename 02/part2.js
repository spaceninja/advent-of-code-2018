import input from "./input";

const testcase = ["abcde", "fghij", "klmno", "pqrst", "fguij", "axcye", "wvxyz"];

const findMatch = array => {
  // loop over every string in the array
  for (let i = 0; i < array.length; i++) {
    // define stringA
    let hasMatch = false;
    const stringA = array[i];
    const stringALetters = stringA.split("");

    // loop over every successive string in the array
    for (let i = array.indexOf(stringA) + 1; i < array.length; i++) {
      // define stringB
      let delta = 0;
      let diff = "";
      const stringB = array[i];
      const stringBLetters = stringB.split("");
      // console.log(`Comparing ${stringA} to ${stringB}`);

      // compare each letter in stringA & stringB
      for (let i = 0; i < stringALetters.length; i++) {
        const letterA = stringALetters[i];
        const letterB = stringBLetters[i];
        // if the letters don't match, increase the delta
        if (letterA !== letterB) {
          delta += 1;
          diff = letterA;
        }
        // if the delta is more than one, then stringB doesn't match
        if (delta > 1) break;
      }
      // console.log(`Delta: ${delta}`);

      // if the delta is exactly one, then stringB matches!
      if (delta === 1) {
        hasMatch = true;

        // remove the different character, report the matching string
        const match = stringA.replace(diff, "");
        console.log(`The matching string is ${match}`);

        // stop the loop
        break;
      }
    }

    // stop looking, we already found a match
    if (hasMatch) break;
  }
};

findMatch(testcase); // matches fgij

findMatch(input);
