/**
 * 计算凑成总金额所需的最少硬币数量
 * @param {number[]} coins - 不同面额的硬币数组
 * @param {number} amount - 需要凑成的总金额
 * @return {number} - 最少硬币数量，如果无法凑成则返回 -1
 */
var coinChange = function(coins, amount) {
  // 如果没有硬币可用，则无法凑成任何金额
  if (coins.length === 0) return -1;

  // 创建一个数组来存储每个金额所需的最少硬币数量，初始值为无穷大
  let dp = new Array(amount + 1).fill(Infinity);
  // 金额为0时，需要0个硬币
  dp[0] = 0;

  // 遍历从1到总金额的每个金额
  for (let i = 1; i <= amount; i++) {
    // 遍历所有硬币面额
    for (let j = 0; j < coins.length; j++) {
      // 如果当前金额减去当前硬币面额大于等于0
      if (i - coins[j] >= 0) {
        // 更新当前金额所需的最少硬币数量
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }

  // 如果最终金额所需的最少硬币数量为无穷大，则表示无法凑成，返回 -1；否则返回最少硬币数量
  return dp[amount] === Infinity ? -1 : dp[amount];
};