/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
  // 方法一：转成二进制字符串
  // const str = n.toString(2);
  // let count = 0;
  // for (let i = 0; i < str.length; i++) {
  //   str[i] === '1' && count++;
  // }
  // return count;

  // 方法二：位运算
  let count = 0;
  for (let i = 0; i < 32; i++) {
    n >> i & 1 && count++;
  }
  return count;
};