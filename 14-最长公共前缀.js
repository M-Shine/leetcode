/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return '';
  }
  if (strs.length === 1) {
    return strs[0];
  }

  let result = '';

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return result;
      }
    }
    result += strs[0][i];
  }

  return result;
};

const strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs));

const strs2 = ["dog","racecar","car"];
console.log(longestCommonPrefix(strs2));