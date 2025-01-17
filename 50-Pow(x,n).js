/**
 * 因为 a * a * a * a * a 可以转化为 (a * a) * (a * a) * a，所以可以用折半计算，每次把n缩小一半
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  let result = 1;
  // n是否是负数
  let isNegative = false;
  if (n < 0) {
    isNegative = true;
    n = -n;
  }
  // 折半计算
  while(n > 0){
    // 如果n是奇数，多乘一个x
    if(n % 2 === 1){
      result *= x;
    }
    x *= x;
    n = Math.floor(n / 2);
  }
  // 如果是负数，返回倒数
  return isNegative ? 1 / result : result;
};

console.log(myPow(2.00000, 10));