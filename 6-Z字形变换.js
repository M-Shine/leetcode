/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) {
    return s;
  }

  const arr = [];
  for (let i = 0; i < numRows; i++) {
    arr.push([]);
  }

  let row = 0;
  let isIncremented = true;
  for (let i = 0; i < s.length; i++) {
    arr[row].push(s[i]);
    if (isIncremented) {
      row++;
      if (row === numRows - 1) {
        isIncremented = false;
      }
    } else {
      row--;
      if (row === 0) {
        isIncremented = true;
      }
    }
  }
  return arr.reduce((str, cur) => {
    return str + cur.join('');
  }, '');
};

console.log(convert('PAYPALISHIRING', 3));
console.log(convert('PAYPALISHIRING', 4));
console.log(convert('A', 1));