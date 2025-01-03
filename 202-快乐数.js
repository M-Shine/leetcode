/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const isVisit = new Set();
  function isHappyNum(num) {
    if (isVisit.has(num)) {
      return false;
    }

    isVisit.add(num);
    if (num < 10) {
      return num === 1 || num === 7;
    }
  
    let sum = 0;
    while (num > 0) {
      sum += Math.pow(num % 10, 2);
      num = Math.floor(num / 10);
    }
    return isHappyNum(sum);
  }
  return isHappyNum(n);
};
