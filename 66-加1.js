/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  // 因为题目要求是+1，所以carry初始值为1
  let carry = 1;
  let index = digits.length - 1;
  while (carry && index >= 0) {
    const sum = digits[index] + carry;
    digits[index] = sum % 10;
    carry = Math.floor(sum / 10);
    index--;
  }
  carry && digits.unshift(1);
  return digits;
};