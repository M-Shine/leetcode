/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  // 0-死 1-活 2-死变活 3-活变死
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let count = 0
      for (let k = -1; k < 2; k++) {
        for (let l = -1; l < 2; l++) {
          const row = i + k;
          const col = j + l;
          if (row < 0 || row >= board.length || col < 0 || col >= board[i].length) {
            continue;
          }
          if (row === i && col === j) {
            continue;
          }
          if (board[row][col] === 1 || board[row][col] === 3) {
            count++;
          }
        }
      }
      
      if (board[i][j] === 1) {
        board[i][j] = count === 2 || count === 3 ? 1 : 3;
      } else {
        board[i][j] = count === 3 ? 2 : 0;
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 2) {
        board[i][j] = 1;
      } else if (board[i][j] === 3) {
        board[i][j] = 0;
      }
    }
  }
};

const board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
gameOfLife(board);