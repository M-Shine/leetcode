/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  let l = 0;
  let r = str.length - 1;
  while (l < r) {
    if (str[l] !== str[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};