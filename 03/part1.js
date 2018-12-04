import input from "./input";

const testcase = [[1, 3, 4, 4], [3, 1, 4, 4], [5, 5, 2, 2]];

const plotClaims = claims => {
  let plot = {};
  for (const claim of claims) {
    const startX = claim[0];
    const startY = claim[1];
    const endX = startX + claim[2];
    const endY = startY + claim[3];
    let x = startX;
    while (x < endX) {
      let y = startY;
      while (y < endY) {
        // add a key to the plot object, like plot['1x3'], representing a square inch
        // set the value of that key to the number of claims on that square inch
        plot[`${x}x${y}`] = plot[`${x}x${y}`] ? plot[`${x}x${y}`] + 1 : 1;
        y++;
      }
      x++;
    }
  }
  // we only care about plots with more than one claim
  const overlaps = Object.values(plot).filter(n => n > 1);
  console.log(`There are ${overlaps.length} square inches of overlap`);
};

plotClaims(testcase); // 4

plotClaims(input);
