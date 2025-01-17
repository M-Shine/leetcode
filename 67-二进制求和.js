/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let aIndex = a.length - 1;
  let bIndex = b.length - 1;
  if (aIndex === -1) return b;
  if (bIndex === -1) return a;
  let result = '';
  let carry = 0;
  while (aIndex >= 0 || bIndex >= 0) {
    const aNum = a[aIndex] ? a[aIndex] : 0;
    const bNum = b[bIndex]? b[bIndex] : 0;
    const key = aNum + bNum + carry;
    if (key === '000') {
      result = '0' + result;
    } else if (key === '001' || key === '010' || key === '100') {
      result = '1' + result;
      carry = 0;
    } else if (key === '011' || key === '101' || key === '110') {
      result = '0' + result;
      carry = 1;
    } else if (key === '111') {
      result = '1' + result;
    }
    aIndex--;
    bIndex--;
  }
  if (carry === 1) {
    result = '1' + result;
  }
  return result;
};