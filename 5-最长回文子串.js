/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const len = s.length;
  if (len <= 1) {
    return s; 
  }
  
  const dp = new Array(len).fill(false).map(() => new Array(len).fill(false));
  // 初始化：所有长度为 1 的子串都是回文串
  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }
  
  let begin = 0;
  let maxLen = 1;
  // 从左到右，从上到下
  for (let col = 0; col < len; col++) {
    for (let row = 0; row < col; row++) {
      if (s[row] === s[col]) {
        dp[row][col] = col - row < 3 || dp[row + 1][col - 1];
      } else {
        dp[row][col] = false; 
      }
      if (dp[row][col] && col - row + 1 > maxLen) {
        begin = row;
        maxLen = col - row + 1; 
      }
    }
  }
  
  return s.substring(begin, begin + maxLen);
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('a'));
console.log(longestPalindrome('ac'));
console.log(longestPalindrome('ccc'));