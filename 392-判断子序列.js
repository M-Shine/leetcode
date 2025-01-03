/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  if (s.length === 0) return true;
  if (t.length === 0) return false;
  if (s.length > t.length) return false;

  let sIndex = 0;
  let tIndex = 0;
  while (tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      sIndex++;
      if (sIndex === s.length) {
        return true;
      }
    }
    tIndex++;
  }

  return false;
};