/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = new Map();
  const keys = strs.map(str => str.split('').sort().join(''));
  for (let i = 0; i < keys.length; i++) {
    if (map.has(keys[i])) {
      const arr = map.get(keys[i]);
      arr.push(strs[i]);
      map.set(keys[i], arr);
    } else {
      map.set(keys[i], [strs[i]]);
    }
  }

  return [...map.values()];
};

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(strs));