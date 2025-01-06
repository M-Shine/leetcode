/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };
  const result = [];

  function backtrack (str, index) {
    if (index === digits.length) {
      result.push(str);
      return;
    }
    const letters = map[digits[index]];
    for (let i = 0; i < letters.length; i++) {
      backtrack(str + letters[i], index + 1);
    }
  } 

  if (digits.length > 0) {
    backtrack('', 0);
  }
  return result;
};