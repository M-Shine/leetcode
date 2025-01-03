/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const result = [];

  if (matrix.length === 0) {
    return result;
  }

  let direction = 'right';
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;
  let row = 0;
  let col = 0;

  while (left <= right && top <= bottom) {
    result.push(matrix[row][col]);
    switch (direction) {
      case 'right':
        col++;
        if (col > right) {
          col = right;
          row++;
          top++;
          direction = 'down';
        }
        break;
      case 'down':
        row++;
        if (row > bottom) {
          row = bottom;
          col--;
          right--;
          direction = 'left';
        }
        break;
      case 'left':
        col--;
        if (col < left) {
          col = left;
          row--;
          bottom--;
          direction = 'top';
        }
        break;
      case 'top':
        row--;
        if (row < top) {
          row = top;
          col++;
          left++;
          direction = 'right';
        }
        break;
    }
  }

  return result;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(spiralOrder(matrix));
