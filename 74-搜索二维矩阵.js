/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  function findRow(top, bottom) {
    if (top > bottom) return -1;
    const mid = Math.floor((top + bottom) / 2);
    const curVal = matrix[mid][0];
    if (curVal === target) return mid;
    if (curVal > target) return findRow(top, mid - 1)
    if (curVal < target) {
      if (matrix[mid + 1] === undefined) return mid;
      if (matrix[mid + 1][0] > target) return mid;
      return findRow(mid + 1, bottom);
    }
  }


  function findCol(row, left, right) {
    if (left > right) return false;
    const mid = Math.floor((left + right) / 2);
    if (matrix[row][mid] < target) {
      return findCol(row, mid + 1, right);
    } else if (matrix[row][mid] > target) {
      return findCol(row, left, mid - 1);
    } else {
      return true;
    }
  }

  const rowLength = matrix.length;
  if (rowLength === 0) return false;
  const row = findRow(0, rowLength - 1);
  if (row === -1) return false;
  return findCol(row, 0, matrix[row].length - 1);
};

// const matrix = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ];
// console.log(searchMatrix(matrix, 3));
// console.log(searchMatrix(matrix, 13));

const matrix = [[1]];
console.log(searchMatrix(matrix, 0));