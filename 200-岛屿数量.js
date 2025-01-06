/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0;
  let row = grid.length;
  if (row === 0) return count;
  let col = grid[0].length;

  function dfs(grid, i, j) {
    if (i < 0 || i >= row || j < 0 || j >= col || grid[i][j] === "0") return;
    grid[i][j] = "0";
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(grid, i, j);
      }
    }
  }
  return count;
};

const grid = [
  ['1', '1', '1'],
  ['0', '1', '0'],
  ['1', '1', '1']
];
console.log(numIslands(grid));