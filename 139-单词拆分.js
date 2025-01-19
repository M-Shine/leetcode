/**
 * 判断字符串是否可以被拆分成字典中的单词
 * @param {string} s - 待判断的字符串
 * @param {string[]} wordDict - 单词字典
 * @return {boolean} - 是否可以拆分
 */
var wordBreak = function(s, wordDict) {
  // 将单词字典转换为Set，方便快速查找
  const dict = new Set(wordDict);

  // 创建一个数组来存储子问题的解
  // dp[i] 表示 s 的前 i 个字符是否可以被拆分成字典中的单词
  const dp = new Array(s.length + 1).fill(false);
  // dp[0]表示空字符串，空字符串可以被拆分
  dp[0] = true;

  // 遍历字符串的所有子串
  for (let i = 1; i <= s.length; i++) {
    // 遍历子串的所有前缀
    for (let j = i - 1; j >= 0; j--) {
      // 如果前缀可以被拆分，并且剩余部分在字典中
      if (dp[j] && dict.has(s.slice(j, i))) {
        // 则当前子串可以被拆分
        dp[i] = true;
        // 跳出内层循环，因为已经找到了一种拆分方式
        break;
      }
    }
  }

  // 返回整个字符串是否可以被拆分
  return dp[s.length];
};