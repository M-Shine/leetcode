/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
var maxHeightOfTriangle = function(red, blue) {
  const min = Math.min(red, blue);
  const max = Math.max(red, blue);

  let row = 1;
  // 奇数
  let oddRows = 0;
  // 偶数
  let evenRows = 0;
  while (true) {
    row % 2 === 0 ? evenRows += row : oddRows += row;
    if (min < oddRows || min < evenRows) {
      break;
    }
    row++;
  }
  if (row % 2 === 0) {
    return max >= evenRows ? row : row - 1;
  } else {
    return max >= oddRows? row : row - 1;
  }
};

// 3
console.log(maxHeightOfTriangle(2, 4));
// 2
console.log(maxHeightOfTriangle(2, 1));
// 1
console.log(maxHeightOfTriangle(1, 1));
// 2
console.log(maxHeightOfTriangle(10, 1));
// 7
console.log(maxHeightOfTriangle(12, 17));
// 5
console.log(maxHeightOfTriangle(10, 10));

/**
 * 1 = 1 + 0
 * 2 = 1 + 2
 * 3 = 4 + 2
 * 4 = 4 + 6
 * 5 = 9 + 6
 * 6 = 9 + 12
 * 7 = 16 + 12
 * 8 = 16 + 20
 */