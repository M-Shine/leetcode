/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const set = new Set();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        set.add(`r-${i}`);
        set.add(`c-${j}`);
      }
    }
  }
  set.forEach(item => {
    const [type, index] = item.split('-');
    if (type === 'r') {
      for (let i = 0; i < cols; i++) {
        matrix[index][i] = 0;
      }
    } else {
      for (let i = 0; i < rows; i++) {
        matrix[i][index] = 0;
      }
    }
  })
};

const matrix = [[1,1,1],[1,0,1],[1,1,1]];
setZeroes(matrix);
console.log(matrix);