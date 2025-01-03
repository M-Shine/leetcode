/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token === '+') {
      stack.push(stack.pop() + stack.pop());
    } else if (token === '-') {
      const a = stack.pop();
      const b = stack.pop();
      stack.push(b - a);
    } else if (token === '*') {
      stack.push(stack.pop() * stack.pop());
    } else if (token === '/') {
      const a = stack.pop();
      const b = stack.pop();
      stack.push(Math.trunc(b / a));
    } else {
      stack.push(parseInt(token, 10));
    }
  }

  return stack.pop();
};

const tokens = ["2", "1", "+", "3", "*"];
console.log(evalRPN(tokens));

const tokens2 = ["4", "13", "5", "/", "+"];
console.log(evalRPN(tokens2));

const tokens3 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
console.log(evalRPN(tokens3));