/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const map = new Map();
  for (let i = 0; i < magazine.length; i++) {
    if (map.has(magazine[i])) {
      map.set(magazine[i], map.get(magazine[i]) + 1);
    } else {
      map.set(magazine[i], 1);
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (map.has(ransomNote[i])) {
      const count = map.get(ransomNote[i]) - 1;
      if (count < 0) {
        return false;
      } else {
        map.set(ransomNote[i], count);
      }
    } else {
      return false;
    }
  }

  return true;
};