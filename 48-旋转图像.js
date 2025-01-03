/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// var rotate = function(matrix) {
//   const n = matrix.length;

//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//     }
//   }
//   for (let i = 0; i < n; i++) {
//     matrix[i].reverse();
//   }
//   return matrix;
// };

var rotate = function(matrix) {
  const n = matrix.length;
  for (let i = 0; i < Math.floor(n / 2); ++i) {
    for (let j = 0; j < Math.floor((n + 1) / 2); ++j) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[n - j - 1][i];
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
      matrix[j][n - i - 1] = temp;
    }
  }
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(rotate(matrix));