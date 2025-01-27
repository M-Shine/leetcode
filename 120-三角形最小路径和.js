/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const len = triangle.length;
  const dp = [...triangle[len - 1]];
  for (let i = len - 2; i >= 0; i--) {
    const rowLen = triangle[i].length;
    for (let j = 0; j < rowLen; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    }
  }
  return dp[0];
}

// 11
const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
console.log(minimumTotal(triangle));

// -10
const triangle2 = [[-10]];
console.log(minimumTotal(triangle2));

// -33
const triangle3 = [
  [-1],
  [9,-2],
  [0,4,5],
  [7,4,-4,-5],
  [9,6,0,5,7],
  [9,2,-9,-4,5,-2],
  [-4,-9,-5,-7,-5,-5,-2],
  [-9,5,-6,-4,4,1,6,-4],
  [-4,3,9,-2,8,6,-9,-2,-2],
  [7,-6,9,8,-4,2,-4,-2,-1,-2],
  [0,3,2,4,0,-6,7,6,7,-5,2],
  [9,0,-8,6,4,6,2,5,-9,9,-1,-6],
  [6,-3,-4,-5,0,3,3,4,-6,-4,-7,7,3]
];
console.log(minimumTotal(triangle3));