/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const dp = new Array(obstacleGrid[0].length).fill(0);
  dp[0] = 1;
  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[0].length; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[j] = 0;
        continue;
      }
      // 每个点都可以从左边和上边过来，所以每个点的路径数等于左边和上边的路径数之和
      // 因为dp[j]是上一行的路径数，dp[j-1]是当前行的左边的路径数，所以当前位置的路径数dp[j] += dp[j-1]
      if (j > 0) {
        dp[j] += dp[j - 1];
      }
    }
  }
  return dp[obstacleGrid[0].length - 1];
};