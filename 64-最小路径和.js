/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = Array(m).fill(0).map(() => Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = grid[i][j];
        continue; 
      }
      const top = i - 1 < 0 ? Infinity : dp[i - 1][j];
      const left = j - 1 < 0 ? Infinity : dp[i][j - 1];
      dp[i][j] = grid[i][j] + Math.min(top, left);
    } 
  }
  return dp[m - 1][n - 1];
};

const grid = [
  [1,3,1],
  [1,5,1],
  [4,2,1] 
]
console.log(minPathSum(grid));