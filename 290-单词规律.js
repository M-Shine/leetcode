/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const arr = s.split(' ');

  if (arr.length !== pattern.length) {
    return false;
  }

  const map = new Map();
  for (let i = 0; i < pattern.length; i++) {
    if (map.has(pattern[i])) {
      if (map.get(pattern[i]) !== arr[i]) {
        return false;
      }
    } else {
      map.set(pattern[i], arr[i]);
    }
  }

  return new Set(map.values()).size === map.size;
};