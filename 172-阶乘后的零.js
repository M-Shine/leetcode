/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  const quotient = Math.floor(n / 5);  
  return quotient === 0 ? 0 : quotient + trailingZeroes(quotient);
};