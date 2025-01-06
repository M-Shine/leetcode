/**
 * 130. 被围绕的区域
 * 找出边界上的 O，以及与其相连的 O，将其替换成 A，然后遍历整个矩阵，将 A 替换成 O，其余替换成 X
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  const row = board.length;
  if (row < 3) return;
  const col = board[0].length;
  if (col < 3) return;

  const dfs = (i, j) => {
    if (i < 0 || i >= row || j < 0 || j >= col || board[i][j] !== 'O') return;
    board[i][j] = 'A';
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }

  // 遍历边界，将边界上的 O 以及与其相连的 O 替换成 A
  for (let i = 0; i < row; i++) {
    dfs(i, 0);
    dfs(i, col - 1);
  }
  for (let i = 0; i < col; i++) {
    dfs(0, i);
    dfs(row - 1, i);
  }

  // 遍历整个矩阵，将 A 替换成 O，其余替换成 X
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      board[i][j] = board[i][j] === 'A' ? 'O' : 'X';
    }
  }
};

const board = [
  ["X","X","X","X"],
  ["X","O","O","X"],
  ["X","X","O","X"],
  ["X","O","X","X"]
];
solve(board);
console.log(board);