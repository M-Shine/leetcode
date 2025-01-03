/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const map = new Map();
  map.set(1, 'I');
  map.set(5, 'V');
  map.set(10, 'X');
  map.set(50, 'L');
  map.set(100, 'C');
  map.set(500, 'D');
  map.set(1000, 'M');
  map.set(4, 'IV');
  map.set(9, 'IX');
  map.set(40, 'XL');
  map.set(90, 'XC');
  map.set(400, 'CD');
  map.set(900, 'CM');

  let res = '';
  for (let i = 3; i >= 0; i--) {
    let base = 10 ** i;
    let cur = Math.floor(num / base);
    num = num % base;
    if (cur === 0) continue;
    if (cur === 4) {
      res += map.get(4 * base);
      continue;
    }
    if (cur === 9) {
      res += map.get(9 * base);
      continue;
    }
    if (cur >= 5) {
      res += map.get(5 * base);
      cur -= 5;
    }
    res += map.get(1 * base).repeat(cur);
  }
  return res;
};

console.log(intToRoman(1994));
console.log(intToRoman(3749));
console.log(intToRoman(4));
console.log(intToRoman(9));
console.log(intToRoman(58));
