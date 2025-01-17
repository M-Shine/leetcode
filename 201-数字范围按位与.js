/**
 * 计算给定范围内所有整数的按位与（AND）结果。
 * @param {number} left - 范围的左边界
 * @param {number} right - 范围的右边界
 * @return {number} - 范围内所有整数的按位与结果
 */
var rangeBitwiseAnd = function(left, right) {
  // 对所有数字执行按位与运算的结果是所有对应二进制字符串的公共前缀再用零补上后面的剩余位
  let shift = 0;
  // 找到公共前缀
  while (left < right) {
    left >>= 1;
    right >>= 1;
    shift++;
  }
  // 将公共前缀左移回原来的位置，右侧补零
  return left << shift;
};