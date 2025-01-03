/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const setArr = new Array(27).fill(0).map(() => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      if (num === '.') continue;
      const rowSet = setArr[i];
      const colSet = setArr[j + 9];
      const boxSet = setArr[Math.floor(i / 3) * 3 + Math.floor(j / 3) + 18];
      if (rowSet.has(num) || colSet.has(num) || boxSet.has(num)) return false;
      rowSet.add(num);
      colSet.add(num);
      boxSet.add(num);
    }
  }

  return true;
};
