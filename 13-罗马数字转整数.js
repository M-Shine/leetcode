/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && ['IV', 'IX', 'XL', 'XC', 'CD', 'CM'].includes(s.slice(i, i + 2))) {
      res += map[s.slice(i, i + 2)];
      i++;
      continue;
    }
    res += map[s[i]];
  }
  return res;
};

console.log(romanToInt('MCMXCIV'));

