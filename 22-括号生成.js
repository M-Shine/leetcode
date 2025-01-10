/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = [];

  const fn = (str, left, right) => {
    // 左右括号数量为0，递归结束
    if (left === 0 && right === 0) {
      result.push(str);
      return;
    }

    if (left === right) {
      // 左右括号数量相等，只能放左括号
      fn(str + '(', left - 1, right);
    } else if (left < right) {
      // 左括号数量小于右括号数量，且左括号数量大于0，可以放左括号，也可以放右括号
      if (left > 0) {
        fn(str + '(', left - 1, right);
      }
      fn(str + ')', left, right - 1);
    }
  }
  fn('', n, n);

  return result;
};

console.log(generateParenthesis(3));