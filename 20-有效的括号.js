/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c);
    } else {
      const t = stack.pop();
      if (
        t === undefined ||
        (t === '(' && c !== ')') ||
        (t === '[' && c !== ']') ||
        (t === '{' && c !== '}')
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
};