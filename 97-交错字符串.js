/**
 * 题解：https://www.bilibili.com/video/BV11i4y1D7gj/?spm_id_from=333.337.search-card.all.click&vd_source=47cfa7c0fd2263e8cf71adcc21fbca17
 */

/**
 * 状态转移方程：
 * 如果 s1[i] === s3[i+j]，则 dp[i][j] = dp[i-1][j]
 * 如果 s2[j] === s3[i+j]，则 dp[i][j] = dp[i][j-1]
 * dp[i][j] = dp[i-1][j] || dp[i][j-1]
 * 
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  const len1 = s1.length;
  const len2 = s2.length;
  const len3 = s3.length;
  if (len1 + len2 !== len3) return false;

  // dp[i][j] 表示 s1 的前 i 个元素和 s2 的前 j 个元素是否能交错组成 s3 的前 i+j 个元素
  const dp = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1).fill(false));
  // 空串可以匹配空串
  dp[0][0] = true;
  // 为了方便处理和理解，在字符串前各加一个空字符
  s1 = ' ' + s1;
  s2 = ' ' + s2;
  s3 = ' ' + s3;
  for (let i = 0; i <= len1; i++) {
    for (let j = 0; j <= len2; j++) {
      // 表示 s3 的第 p 个字符
      const p = i + j;
      if (i > 0 && s1[i] === s3[p]) {
        dp[i][j] = dp[i - 1][j];
      }
      if (j > 0 && s2[j] === s3[p]) {
        dp[i][j] = dp[i][j] || dp[i][j - 1]; 
      }
    } 
  }
  return dp[len1][len2];
};