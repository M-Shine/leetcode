/**
 * @param {number} x
 * @return {boolean}
 */
// 方法一：字符串（会占用额外的空间）
// var isPalindrome = function(x) {
//   // 因为最后一位不可能是符号、第一位不可能是0，所以负数或者末尾为0的数都不是回文数
//   if(x < 0 || (x % 10 === 0 && x !== 0)) return false;
//   const str = x.toString();
//   let left = 0;
//   let right = str.length - 1;
//   while(left < right) {
//     if(str[left] !== str[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// };

var isPalindrome = function(x) {
  // 因为最后一位不可能是符号、第一位不可能是0，所以负数或者末尾为0的数都不是回文数
  if(x < 0 || (x % 10 === 0 && x !== 0)) return false;

  // 反转一半的数字
  let revertedNumber = 0;
  while(x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  // 当数字长度为奇数时，我们可以通过 revertedNumber/10 去除处于中位的数字。
  // 例如，当输入为 12321 时，在 while 循环的末尾我们可以得到 x = 12，revertedNumber = 123，
  // 由于处于中位的数字不影响回文（它总是与自己相等），所以我们可以简单地将其去除。
  return x === revertedNumber || x === Math.floor(revertedNumber / 10);
}