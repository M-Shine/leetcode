/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const arr = s.replace(/\s+/g, ' ').trim().split(' ');
  return arr.reverse().join(' ');
};
