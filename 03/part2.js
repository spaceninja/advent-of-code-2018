import input from "./input";

const testcase = [[1, 3, 4, 4], [3, 1, 4, 4], [5, 5, 2, 2], [1, 3, 4, 4], [3, 1, 4, 4]];

const checkForOverlap = claims => {
  // loop over each claim in the array
  for (let i = 0; i < claims.length; i++) {
    let overlaps = 0;
    const a = {
      x: claims[i][0],
      y: claims[i][1],
      w: claims[i][2],
      h: claims[i][3]
    };

    // check each other claim for overlap
    for (let j = 0; j < claims.length; j++) {
      if (i === j) continue; // don't check yourself
      const b = {
        x: claims[j][0],
        y: claims[j][1],
        w: claims[j][2],
        h: claims[j][3]
      };

      // check for both vertical & horizontal overlap
      if (
        // if a's start overlaps with b horizontally
        a.x < b.x + b.w &&
        // if a's start overlaps with b vertically
        a.y < b.y + b.h &&
        // if b's start overlaps with a horizontally
        b.x < a.x + a.w &&
        // if b's start overlaps with a vertically
        b.y < a.y + a.h
      ) {
        // increase the overlap counter and stop checking
        overlaps++;
        break;
      }
    }

    // if there are no overlaps, then we've found the winner
    // and can stop checking
    if (!overlaps) {
      console.log(`Claim ID ${i + 1} has no overlaps`);
      break;
    }
  }
};

checkForOverlap(testcase); // 3

checkForOverlap(input);
